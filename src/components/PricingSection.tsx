import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "Forever",
      description: "Perfect for casual listeners",
      features: [
        "Limited song skips",
        "Standard audio quality",
        "Ads between songs",
        "Basic playlist features"
      ],
      buttonText: "Get Started Free",
      buttonVariant: "gradient-outline" as const,
      popular: false
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "Per month",
      description: "Best value for music lovers",
      features: [
        "Unlimited song skips",
        "High-quality audio",
        "No ads",
        "Offline downloads",
        "Advanced playlist features"
      ],
      buttonText: "Start Premium Trial",
      buttonVariant: "gradient" as const,
      popular: true
    },
    {
      name: "Family",
      price: "$14.99",
      period: "Per month",
      description: "Perfect for the whole family",
      features: [
        "Up to 6 accounts",
        "All Premium features",
        "Family sharing",
        "Parental controls",
        "Collaborative playlists"
      ],
      buttonText: "Try Family Plan",
      buttonVariant: "gradient-outline" as const,
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Music Plan
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the perfect subscription plan that fits your listening habits and unlock the full
            potential of our music platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-card p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? "border-primary shadow-2xl shadow-primary/20" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white text-sm font-bold py-2 px-6 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.buttonVariant} 
                size="lg" 
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">All plans include 30-day money-back guarantee</p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;