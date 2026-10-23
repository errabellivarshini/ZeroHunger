import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Heart,
  HeartHandshake,
  Leaf,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function AuthPage({ mode }) {
  const isSignUp = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (isSignUp) {
      const password = event.currentTarget.elements.password;
      const confirmPassword = event.currentTarget.elements.confirmPassword;
      confirmPassword.setCustomValidity(
        password.value === confirmPassword.value ? "" : "Passwords must match."
      );
      if (!event.currentTarget.reportValidity()) return;
    }
    setNotice(
      "Your form is ready, but account authentication is not connected yet."
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/.08),transparent_55%)] py-8 sm:py-14 lg:py-16">
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-[0_28px_90px_-36px_rgba(15,23,42,.35)] lg:min-h-[640px] lg:grid-cols-[.95fr_1.05fr]">
          <aside className="relative hidden flex-col justify-between overflow-hidden bg-[#153f35] p-10 text-white lg:flex xl:p-12">
            <div className="pointer-events-none absolute inset-0 noise opacity-20" />
            <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 top-36 h-48 w-48 rounded-full border border-white/10" />
            <div className="relative">
              <Link to="/" className="inline-flex items-center gap-3 font-semibold tracking-tight">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <Leaf className="h-5 w-5" />
                </span>
                <span>Zero Hunger<span className="mt-0.5 block text-xs font-normal tracking-wide text-white/60">SDG 02 PLATFORM</span></span>
              </Link>
              <div className="mt-24 max-w-sm xl:mt-28">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-[.14em] text-emerald-100">
                  <Sparkles className="h-3.5 w-3.5" /> GOOD FOOD, SHARED
                </p>
                <h1 className="mt-5 text-[2.65rem] font-semibold leading-[1.12] tracking-tight xl:text-5xl">
                  Make every meal <span className="text-emerald-200">count.</span>
                </h1>
                <p className="mt-5 text-base leading-7 text-white/70">
                  Join neighbors, food donors, and local organizations building a more nourishing community together.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl border border-white/15 bg-white/[.08] p-5 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-200/15 text-emerald-100"><HeartHandshake className="h-5 w-5" /></span>
                <div><p className="text-sm font-semibold">Good things grow when we share.</p><p className="mt-1 text-sm leading-6 text-white/65">A little from each of us can mean a lot to someone nearby.</p></div>
              </div>
              <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs font-medium text-white/60"><Heart className="h-3.5 w-3.5 text-rose-200" /> Food for people. Less waste for everyone.</div>
            </div>
          </aside>

          <div className="flex flex-col justify-center p-5 sm:p-9 md:p-12 lg:px-12 xl:px-16">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 text-sm font-semibold lg:hidden"
            >
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#153f35] text-white shadow-sm">
                <Leaf className="h-5 w-5" />
              </span>
              <span>Zero Hunger<span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[.14em] text-muted-fg">SDG 02 Platform</span></span>
            </Link>

            <div className="mt-7 sm:mt-10 lg:mt-0">
              <p className="text-xs font-semibold tracking-[.16em] text-primary">
                {isSignUp ? "JOIN THE COMMUNITY" : "WELCOME BACK"}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-[2.1rem]">
                {isSignUp ? "Create your account" : "Sign in to your account"}
              </h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted-fg">
                {isSignUp
                  ? "Get started making a difference in your community."
                  : "Continue your work to reduce food waste and hunger."}
              </p>
            </div>

            <form className="mt-7 space-y-4.5" onSubmit={handleSubmit}>
              {isSignUp && (
                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium"
                    htmlFor="full-name"
                  >
                    Full name
                  </label>
                  <input
                    autoComplete="name"
                    className="h-12 w-full rounded-xl border border-input bg-bg px-4 text-sm outline-none transition placeholder:text-muted-fg/70 hover:border-primary/40 focus:border-primary/60 focus-visible:ring-4 focus-visible:ring-ring/10"
                    id="full-name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
              )}

              <div>
                <label
                  className="mb-2 block text-sm font-medium"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className="h-12 w-full rounded-xl border border-input bg-bg px-4 text-sm outline-none transition placeholder:text-muted-fg/70 hover:border-primary/40 focus:border-primary/60 focus-visible:ring-4 focus-visible:ring-ring/10"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    autoComplete={isSignUp ? "new-password" : "current-password"}
                    className="h-12 w-full rounded-xl border border-input bg-bg px-4 pr-12 text-sm outline-none transition placeholder:text-muted-fg/70 hover:border-primary/40 focus:border-primary/60 focus-visible:ring-4 focus-visible:ring-ring/10"
                    id="password"
                    minLength={8}
                    name="password"
                    placeholder="At least 8 characters"
                    required
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-0 grid w-12 place-items-center rounded-r-xl text-muted-fg transition hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring/70"
                    onClick={() => setShowPassword((visible) => !visible)}
                    type="button"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div>
                  <label
                    className="mb-1.5 block text-sm font-medium"
                    htmlFor="confirm-password"
                  >
                    Confirm password
                  </label>
                  <input
                    autoComplete="new-password"
                    className="h-12 w-full rounded-xl border border-input bg-bg px-4 text-sm outline-none transition placeholder:text-muted-fg/70 hover:border-primary/40 focus:border-primary/60 focus-visible:ring-4 focus-visible:ring-ring/10"
                    id="confirm-password"
                    name="confirmPassword"
                    onChange={(event) => event.currentTarget.setCustomValidity("")}
                    placeholder="Enter your password again"
                    required
                    type="password"
                  />
                </div>
              )}

              {isSignUp ? (
                <label className="flex items-start gap-2.5 text-sm leading-5 text-muted-fg">
                  <input
                    className="mt-1 accent-primary"
                    name="terms"
                    required
                    type="checkbox"
                  />
                  <span>
                    I agree to the community terms and privacy policy.
                  </span>
                </label>
              ) : (
                <label className="flex items-center gap-2 text-sm text-muted-fg">
                  <input
                    className="accent-primary"
                    name="remember"
                    type="checkbox"
                  />
                  Remember me
                </label>
              )}

              <Button className="mt-1 w-full rounded-xl shadow-lg shadow-primary/20" size="lg" type="submit">
                {isSignUp ? "Create account" : "Sign in"}
                <ArrowRight className="h-4 w-4" />
              </Button>

              {notice && (
                <p
                  aria-live="polite"
                  className="rounded-md border border-border bg-muted px-3 py-2 text-sm text-muted-fg"
                  role="status"
                >
                  {notice}
                </p>
              )}

              <div className="flex items-center justify-center gap-1 pt-1 text-sm text-muted-fg">
                <ShieldCheck className="h-4 w-4" />
                Demo form: credentials are not sent or stored.
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-muted-fg">
              {isSignUp ? "Already have an account?" : "New to Zero Hunger?"}{" "}
              <Link
                className="font-medium text-primary hover:underline"
                to={isSignUp ? "/signin" : "/signup"}
              >
                {isSignUp ? "Sign in" : "Create an account"}
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
