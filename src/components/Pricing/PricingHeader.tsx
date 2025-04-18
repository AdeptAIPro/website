import React from "react";
import { Badge } from "@/components/ui/badge";

// 1. Define prop types
interface PricingHeaderProps {
  billingPeriod: "monthly" | "yearly";
  setBillingPeriod: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
}

// 2. Accept props in the component
const PricingHeader: React.FC<PricingHeaderProps> = ({ billingPeriod, setBillingPeriod }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <Badge variant="outline" className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 text-sm font-medium mb-2 animate-fade-in-up">
          Simple & Transparent Pricing
        </Badge>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
          Choose the plan that fits your business
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Powerful AI automation with flexible pricing options for businesses of all sizes
        </p>

        
      </div>
    </section>
  );
};

export default PricingHeader;
