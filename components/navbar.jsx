import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BarChart3,
  Hand,
  HandHeart,
  LayoutDashboard,
  Leaf,
  MapPinned,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/donate", label: "Donate", icon: HandHeart },
  { to: "/request", label: "Request", icon: Hand },
  { to: "/locator", label: "Food Banks", icon: MapPinned },
  { to: "/dashboard/ngo", label: "NGO Dashboard", icon: LayoutDashboard },
  { to: "/risk-map", label: "Hunger Risk", icon: BarChart3 },
  { to: "/nutrition-advisor", label: "AI Advisor", icon: Sparkles },
];

function useTheme() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    const root = document.documentElement;
    const stored = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    )?.matches;
    const initial =
      stored === "dark" || stored === "light"
        ? stored
        : prefersDark
          ? "dark"
          : "light";

    root.dataset.theme = initial;
    setTheme(initial);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
    setTheme(next);
    window.dispatchEvent(new Event("theme-change"));
  }

  return { theme, toggle };
}

export function Navbar() {
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur supports-[backdrop-filter]:bg-bg/60">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card shadow-sm transition group-hover:shadow-glow">
            <Leaf className="h-5 w-5 text-primary" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight">Zero Hunger</div>
            <div className="text-xs text-muted-fg">SDG 02 Platform</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition",
                  active
                    ? "bg-muted text-fg"
                    : "text-muted-fg hover:bg-muted/70 hover:text-fg"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={toggle}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
          <div className="hidden items-center gap-2 sm:flex">
            <Link
              to="/signin"
              className="rounded-md px-3 py-2 text-sm text-muted-fg transition hover:bg-muted/70 hover:text-fg"
            >
              Sign in
            </Link>
            <Link to="/signup">
              <Button size="sm">Create account</Button>
            </Link>
          </div>
        </div>
      </Container>

      <div className="lg:hidden">
        <Container className="pb-3">
          <div className="flex flex-wrap gap-2">
            {nav.slice(0, 4).map((item) => {
              const active = pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-full border px-3 py-2 text-xs transition",
                    active
                      ? "border-border bg-muted text-fg"
                      : "border-border/70 bg-card text-muted-fg hover:bg-muted/70 hover:text-fg"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/signin"
              className="rounded-full border border-border/70 bg-card px-3 py-2 text-xs text-muted-fg transition hover:bg-muted/70 hover:text-fg sm:hidden"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="rounded-full border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-medium text-primary transition hover:bg-primary/15 sm:hidden"
            >
              Create account
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
