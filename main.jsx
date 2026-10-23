import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { lazy, Suspense } from "react";
import "@/app/globals.css";
import "@/app/theme.css";

const HomePage = lazy(() => import("@/app/page"));
const DonatePage = lazy(() => import("@/app/donate/page"));
const RequestPage = lazy(() => import("@/app/request/page"));
const LocatorPage = lazy(() => import("@/app/locator/page"));
const NgoDashboardPage = lazy(() => import("@/app/dashboard/ngo/page"));
const HungerRiskMapPage = lazy(() => import("@/app/risk-map/page"));
const NutritionAdvisorPage = lazy(() => import("@/app/nutrition-advisor/page"));
const AuthPage = lazy(() => import("@/app/auth-page"));
const NotFound = lazy(() => import("@/app/not-found"));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="relative">
        <Suspense
          fallback={
            <div className="mx-auto max-w-7xl px-4 py-16 text-sm text-muted-fg">
              Loading page…
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/request" element={<RequestPage />} />
            <Route path="/locator" element={<LocatorPage />} />
            <Route path="/dashboard/ngo" element={<NgoDashboardPage />} />
            <Route path="/risk-map" element={<HungerRiskMapPage />} />
            <Route path="/signin" element={<AuthPage mode="signin" />} />
            <Route path="/signup" element={<AuthPage mode="signup" />} />
            <Route
              path="/nutrition-advisor"
              element={<NutritionAdvisorPage />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
