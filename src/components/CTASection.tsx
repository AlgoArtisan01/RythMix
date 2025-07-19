import { Button } from "@/components/ui/button";
import { Play, Music } from "lucide-react";
import { Star, Shield, Heart } from "lucide-react";
import studioSetup from "@/assets/studio-setup.jpg";

const CTASection = () => {
  const trustBadges = [
    {
      icon: Shield,
      text: "SSL Encrypted"
    },
    {
      icon: Star,
      text: "4.9/5 Rating"
    },
    {
      icon: Heart,
      text: "Loved by Users"
    }
  ];

  return (
    <section className="py-24 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Transform
                <br />
                Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Music
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
                  Experience?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Join millions of music lovers who have already discovered the
                future of streaming. Start your journey today with our premium
                platform.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  50M+
                </div>
                <p className="text-muted-foreground">Songs Available</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
                  10M+
                </div>
                <p className="text-muted-foreground">Active Users</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="xl" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Start Free Trial
              </Button>
              <Button variant="gradient-outline" size="xl" className="flex items-center gap-2">
                <Music className="w-5 h-5" />
                Explore Music
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 pt-4">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Studio Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={studioSetup}
                alt="Professional music studio setup"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute top-1/3 -left-12 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;