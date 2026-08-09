import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Navbar from "./components/navbar.tsx";
import Footer from "./components/footer.tsx";
import CustomCursor from "./components/cursor.tsx";
import ScrollProgress from "./components/scroll-progress.tsx";
import FloatingCta from "./components/floating-cta.tsx";
import WorkPage from "./pages/work/page.tsx";
import WorkDetailPage from "./pages/work/[slug]/page.tsx";
import ServicesPage from "./pages/services/page.tsx";
import ServiceDetailPage from "./pages/services/[slug]/page.tsx";
import AboutPage from "./pages/about/page.tsx";
import ProcessPage from "./pages/process/page.tsx";
import ContactPage from "./pages/contact/page.tsx";
import InsightsPage from "./pages/insights/page.tsx";

function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <CustomCursor />
        <ScrollProgress />
        <FloatingCta />
        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<WorkDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/insights" element={<InsightsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
