import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { usePageMeta } from "@/hooks/use-page-meta";

const NotFound = () => {
  usePageMeta("Page not found | Muhammad Zohaib", "This page doesn't exist.", "/");
  useRobotsNoindex();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="section-container flex min-h-screen flex-col justify-center">
        <p className="font-mono text-sm text-primary">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-foreground">This page doesn't exist.</h1>
        <p className="mt-3 text-muted-foreground">The link may be old or mistyped.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/" className="btn-primary">Go to homepage</Link>
          <Link to="/projects" className="btn-secondary">See projects</Link>
        </div>
      </main>
    </div>
  );
};

function useRobotsNoindex() {
  const el = document.head.querySelector('meta[name="robots"]');
  if (el) el.setAttribute("content", "noindex");
}

export default NotFound;
