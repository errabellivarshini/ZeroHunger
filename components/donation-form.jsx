import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input, Label, Select } from "@/components/ui/field";
import { coordsForLocationId, LOCATION_OPTIONS } from "@/lib/locations";
import { NGOS } from "@/lib/mock-data";
import { matchNgOs } from "@/components/matching";

const schema = z.object({
  foodType: z.enum(["prepared", "produce", "bakery", "dairy", "mixed"]),
  quantityMeals: z.coerce.number().int().min(1).max(5000),
  cityId: z.string().min(1),
  pickupAddress: z.string().min(6),
  expiryHours: z.coerce.number().int().min(1).max(72)
});

export function DonationForm() {
  const [submitted, setSubmitted] = React.useState(null);
  const [submitError, setSubmitError] = React.useState("");
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      foodType: "prepared",
      quantityMeals: 50,
      cityId: LOCATION_OPTIONS[0].id,
      pickupAddress: "",
      expiryHours: 6
    }
  });

  const cityId = form.watch("cityId");
  const origin = coordsForLocationId(cityId);
  const matches = React.useMemo(() => {
    const local = NGOS.filter((ngo) => ngo.cityId === cityId);
    return matchNgOs(origin, local.length ? local : NGOS, 4);
  }, [cityId, origin]);

  async function onSubmit(values) {
    setSubmitError("");
    try {
      const response = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!response.ok) {
        throw new Error(`Donation could not be saved (HTTP ${response.status}).`);
      }
      setSubmitted(values);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? `${error.message} Check that the Spring Boot API and MySQL are running.`
          : "Donation could not be saved. Check that the Spring Boot API and MySQL are running."
      );
    }
  }

  if (submitted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Donation submitted
          </CardTitle>
          <CardDescription>
            Your donation has been saved. Nearby NGO matches are shown below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-3 rounded-xl border border-border bg-muted/40 p-4 sm:grid-cols-3">
            <div>
              <div className="text-xs text-muted-fg">Food type</div>
              <div className="mt-1 text-sm font-medium capitalize">
                {submitted.foodType.replace("-", " ")}
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-fg">Quantity</div>
              <div className="mt-1 text-sm font-medium">
                {submitted.quantityMeals} meals
              </div>
            </div>
            <div>
              <div className="text-xs text-muted-fg">Expiry window</div>
              <div className="mt-1 inline-flex items-center gap-2 text-sm font-medium">
                <Clock className="h-4 w-4 text-primary" />
                {submitted.expiryHours} hours
              </div>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="text-sm font-semibold">
              Nearby NGOs who can collect
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {matches.map(({ it, km }) => (
                <div
                  key={it.id}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold">{it.name}</div>
                      <div className="mt-1 text-xs text-muted-fg">
                        Capacity: {it.capacityMealsPerDay.toLocaleString()}{" "}
                        meals/day · Tags: {it.tags.join(", ")}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-muted-fg">
                      {km.toFixed(1)} km
                    </div>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 text-xs text-muted-fg">
                    <MapPin className="h-4 w-4" />
                    Pickup ETA suggestion: {Math.max(15, Math.round(km * 6))}–
                    {Math.max(25, Math.round(km * 8))} mins
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => setSubmitted(null)}>
              Create another donation
            </Button>
            <Button
              variant="secondary"
              onClick={() => setSubmitted(null)}
            >
              Back to form
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Food Donation</CardTitle>
        <CardDescription>
          For restaurants and individuals. Submit surplus details and we’ll match
          nearby NGOs and volunteers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4 sm:grid-cols-2"
        >
          <div className="sm:col-span-2">
            <Label htmlFor="pickupAddress">Pickup location</Label>
            <Input
              id="pickupAddress"
              placeholder="Street address, building, pickup notes"
              {...form.register("pickupAddress")}
            />
            {form.formState.errors.pickupAddress ? (
              <p className="mt-1 text-xs text-danger">
                {form.formState.errors.pickupAddress.message}
              </p>
            ) : null}
          </div>
          <div>
            <Label htmlFor="cityId">City</Label>
            <Select id="cityId" {...form.register("cityId")}>
              {LOCATION_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="foodType">Food type</Label>
            <Select id="foodType" {...form.register("foodType")}>
              <option value="prepared">Prepared meals</option>
              <option value="produce">Produce</option>
              <option value="bakery">Bakery</option>
              <option value="dairy">Dairy</option>
              <option value="mixed">Mixed</option>
            </Select>
          </div>
          <div>
            <Label htmlFor="quantityMeals">Quantity (meals)</Label>
            <Input
              id="quantityMeals"
              type="number"
              min={1}
              max={5000}
              {...form.register("quantityMeals")}
            />
          </div>
          <div>
            <Label htmlFor="expiryHours">Expiry time (hours)</Label>
            <Input
              id="expiryHours"
              type="number"
              min={1}
              max={72}
              {...form.register("expiryHours")}
            />
          </div>
          {submitError ? (
            <p className="text-sm text-danger sm:col-span-2" role="alert">
              {submitError}
            </p>
          ) : null}
          <div className="sm:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-muted-fg">
              Submitting saves the donation and makes it available to the
              coordination team.
            </div>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting
                ? "Saving donation…"
                : "Notify NGOs & volunteers"}
            </Button>
          </div>
        </form>
        <div className="mt-8 rounded-xl border border-border bg-muted/30 p-4">
          <div className="text-sm font-semibold">
            Nearby NGOs who can collect
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {matches.map(({ it, km }) => (
              <div
                key={it.id}
                className="rounded-xl border border-border bg-card p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold">{it.name}</div>
                    <div className="mt-1 text-xs text-muted-fg">
                      Capacity: {it.capacityMealsPerDay.toLocaleString()}{" "}
                      meals/day · Tags: {it.tags.join(", ")}
                    </div>
                  </div>
                  <div className="text-xs font-medium text-muted-fg">
                    {km.toFixed(1)} km
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
