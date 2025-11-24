import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-heading font-bold mb-4">404</h1>
        <h2 className="text-2xl font-heading font-semibold mb-4">Page Not Found</h2>
        <p className="text-foreground/60 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/">
          <Button size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

