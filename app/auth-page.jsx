import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  HeartHandshake,
  Leaf,
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
    <section className="relative overflow-hidden py-10 sm:py-16">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[44rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      <Container className="relative">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl lg:grid-cols-2">
          <aside className="relative hidden flex-col justify-between overflow-hidden bg-primary p-10 text-primary-fg lg:flex">
            <div className="pointer-events-none absolute inset-0 noise opacity-25" />
            <div className="relative">
              <Link to="/" className="inline-flex items-center gap-2 font-semibold">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                  <Leaf className="h-5 w-5" />
                </span>
                Zero Hunger
              </Link>
              <div className="mt-24 max-w-sm">
                <p className="text-sm font-medium text-primary-fg/75">
                  GOOD FOOD. SHARED
                </p>
                <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight">
                  Make every meal count.
                </h1>
                <p className="mt-4 text-base leading-7 text-primary-fg/80">
                  Join a community connecting surplus food with the people and
                  organizations who need it most.
                </p>
              </div>
            </div>
            <div className="relative flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-4">
              <HeartHandshake className="h-6 w-6 shrink-0" />
              <p className="text-sm leading-6">
                Small actions can make a lasting difference in your community.
              </p>
            </div>
          </aside>

          <div className="p-5 sm:p-8 md:p-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-semibold lg:hidden"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-muted">
                <Leaf className="h-5 w-5 text-primary" />
              </span>
              Zero Hunger
            </Link>

            <div className="mt-7 sm:mt-10">
              <p className="text-sm font-medium text-primary">
                {isSignUp ? "JOIN THE COMMUNITY" : "WELCOME BACK"}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                {isSignUp ? "Create your account" : "Sign in to your account"}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-fg">
                {isSignUp
                  ? "Get started making a difference in your community."
                  : "Continue your work to reduce food waste and hunger."}
              </p>
            </div>

            <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
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
                    className="h-11 w-full rounded-md border border-input bg-bg px-3 text-sm outline-none transition placeholder:text-muted-fg focus-visible:ring-2 focus-visible:ring-ring/70"
                    id="full-name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
              )}

              <div>
                <label
                  className="mb-1.5 block text-sm font-medium"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className="h-11 w-full rounded-md border border-input bg-bg px-3 text-sm outline-none transition placeholder:text-muted-fg focus-visible:ring-2 focus-visible:ring-ring/70"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  type="email"
                />
              </div>

              <div>
                <label
                  className="mb-1.5 block text-sm font-medium"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    autoComplete={isSignUp ? "new-password" : "current-password"}
                    className="h-11 w-full rounded-md border border-input bg-bg px-3 pr-11 text-sm outline-none transition placeholder:text-muted-fg focus-visible:ring-2 focus-visible:ring-ring/70"
                    id="password"
                    minLength={8}
                    name="password"
                    placeholder="At least 8 characters"
                    required
                    type={showPassword ? "text" : "password"}
                  />
                  <button
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-0 grid w-11 place-items-center text-muted-fg hover:text-fg"
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
                    className="h-11 w-full rounded-md border border-input bg-bg px-3 text-sm outline-none transition placeholder:text-muted-fg focus-visible:ring-2 focus-visible:ring-ring/70"
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
                <label className="flex items-start gap-2 text-sm leading-5 text-muted-fg">
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

              <Button className="w-full" size="lg" type="submit">
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
