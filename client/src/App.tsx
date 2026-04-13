import { Switch, Route, useLocation } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Screen } from "@/pages/Screen";
import { useEffect } from "react";
import Success from "./pages/Success";
import Cookie from "@/pages/Cookie";

function ScrollToAnchor() {
  const [path] = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          window.scrollTo({ top: el.offsetTop, behavior: 'instant' });
        }
      }, 50);
    }
  }, [path]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToAnchor />
      <Switch>
        <Route path="/" component={Screen} />
        <Route path="/success" component={Success} />
        <Route path="/cookie" component={Cookie} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
