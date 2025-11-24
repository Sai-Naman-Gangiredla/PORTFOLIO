"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ResumePreview() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Sai-Naman-Gangiredla-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="aspect-[8.5/11] bg-foreground/5 rounded-lg overflow-hidden border border-foreground/10 mb-6">
          <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="Resume Preview"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleDownload}
            disabled={isLoading}
            size="lg"
            className="flex-grow"
          >
            <Download className="mr-2 h-4 w-4" />
            {isLoading ? "Downloading..." : "Download Resume"}
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open Resume PDF
            </a>
          </Button>
        </div>
      </Card>
    </div>
  );
}

