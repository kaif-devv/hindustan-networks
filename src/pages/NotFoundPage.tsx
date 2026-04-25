import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="card text-center py-16 lg:py-20">
          <p className="badge mx-auto mb-5">404</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-heading mb-4">
            Page Not Found
          </h1>
          <p className="text-body max-w-xl mx-auto mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn-brand rounded-full px-6 py-3">
            Back to Home
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
