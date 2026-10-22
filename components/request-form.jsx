import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, MapPin, Utensils, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input, Label, Select, Textarea } from "@/components/ui/field";
import { coordsForLocationId, LOCATION_OPTIONS } from "@/lib/locations";
import { DONATIONS_FEED, FOOD_BANKS } from "@/lib/mock-data";
import { matchDonations, matchFoodBanks } from "@/components/matching";

const schema = z.object({
  cityId: z.string().min(1),
  familySize: z.coerce.number().int().min(1).max(20),
  requirement: z.string().min(4)
});

export function RequestForm() {
  const [submitted, setSubmitted] = React.useState(null);
  const [submitError, setSubmitError] = React.useState("");
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      cityId: LOCATION_OPTIONS[0].id,
      familySize: 4,
      requirement: "Staples + fresh vegetables"
    }
  });

  const cityId = form.watch("cityId");
  const origin = coordsForLocationId(cityId);
  const banks = React.useMemo(() => {
    const local = FOOD_BANKS.filter((bank) => bank.cityId === cityId);
    return matchFoodBanks(origin, local.length ? local : FOOD_BANKS, 4);
  }, [cityId, origin]);
  const donations = React.useMemo(() => {
    const local = DONATIONS_FEED.filter((donation) => donation.cityId === cityId);
    return matchDonations(
      origin,
      local.length ? local : DONATIONS_FEED,
      4
    );
  }, [cityId, origin]);

  async function onSubmit(values) {
    setSubmitError("");
    try {
      const response = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      if (!response.ok) {
        throw new Error(`Food request could not be saved (HTTP ${response.status}).`);
      }
      setSubmitted(values);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? `${error.message} Check that the Spring Boot API and MySQL are running.`
          : "Food request could not be saved. Check that the Spring Boot API and MySQL are running."
      );
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Food Request</CardTitle>
        <CardDescription>
          For families or individuals in need. We’ll match you with nearby food
          banks or available donations.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <div className="rounded-xl border border-border bg-card p-4">
          {submitted ? (
            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm font-semibold">Request submitted</div>
                  <div className="mt-1 text-sm text-muted-fg">
                    Your request has been saved. Select a pickup option below.
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-border bg-card px-4 py-3">
                  <div className="text-xs text-muted-fg">Family size</div>
                  <div className="mt-1 inline-flex items-center gap-2 text-sm font-medium">
                    <Users className="h-4 w-4 text-primary" />
                    {submitted.familySize}
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card px-4 py-3">
                  <div className="text-xs text-muted-fg">Location</div>
                  <div className="mt-1 inline-flex items-center gap-2 text-sm font-medium">
                    <MapPin className="h-4 w-4 text-primary" />
                    {LOCATION_OPTIONS.find(
                      (option) => option.id === submitted.cityId
                    )?.label ?? "—"}
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-card px-4 py-3">
                  <div className="text-xs text-muted-fg">Need</div>
                  <div className="mt-1 inline-flex items-center gap-2 text-sm font-medium">
                    <Utensils className="h-4 w-4 text-primary" />
                    Essentials
                  </div>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button onClick={() => setSubmitted(null)}>
                  Create another request
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setSubmitted(null)}
                >
                  Edit request
                </Button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid gap-4 sm:grid-cols-2"
            >
              <div>
                <Label htmlFor="cityId">Location</Label>
                <Select id="cityId" {...form.register("cityId")}>
                  {LOCATION_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Label htmlFor="familySize">Family size</Label>
                <Input
                  id="familySize"
                  type="number"
                  min={1}
                  max={20}
                  {...form.register("familySize")}
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="requirement">Food requirement</Label>
                <Textarea id="requirement" {...form.register("requirement")} />
                {form.formState.errors.requirement ? (
                  <p className="mt-1 text-xs text-danger">
                    {form.formState.errors.requirement.message}
                  </p>
                ) : null}
              </div>
              {submitError ? (
                <p className="text-sm text-danger sm:col-span-2" role="alert">
                  {submitError}
                </p>
              ) : null}
              <div className="sm:col-span-2 mt-2 flex items-center justify-between gap-3">
                <div className="text-xs text-muted-fg">
                  Matching considers distance, availability, and meal types.
                </div>
                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? "Saving request…"
                    : "Find nearby options"}
                </Button>
              </div>
            </form>
          )}
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-sm font-semibold">Matched food banks</div>
            <div className="mt-3 grid gap-3">
              {banks.map(({ it, km }) => (
                <div
                  key={it.id}
                  className="rounded-xl border border-border bg-card p-4"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold">{it.name}</div>
                      <div className="mt-1 text-xs text-muted-fg">
                        Availability: {it.availability} · Meals:{" "}
                        {it.mealTypes.join(", ")} · {it.hours}
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
          <div className="rounded-xl border border-border bg-muted/30 p-4">
            <div className="text-sm font-semibold">
              Nearby donations (sample feed)
            </div>
            <div className="mt-3 grid gap-3">
              {donations.length ? (
                donations.map(({ it, km }) => (
                  <div
                    key={it.id}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold">
                          {it.donorName}
                        </div>
                        <div className="mt-1 text-xs text-muted-fg">
                          {it.quantityMeals} meals · {it.foodType} · expires in{" "}
                          {it.expiresInHours}h
                        </div>
                      </div>
                      <div className="text-xs font-medium text-muted-fg">
                        {km.toFixed(1)} km
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-xl border border-border bg-card p-4 text-sm text-muted-fg">
                  No active donations nearby right now. Check again soon, or
                  use a food bank match above.
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
