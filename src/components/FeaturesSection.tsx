import { Button } from "@/components/ui/button";
import { Headphones, ListMusic, Users, Smartphone, Music, Download } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Headphones,
      title: "High-Quality Audio",
      description: "Stream your favorite music in crystal-clear quality with our lossless audio technology and adaptive bitrate streaming.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: ListMusic,
      title: "Smart Playlists",
      description: "Create, customize, and share playlists with AI-powered recommendations based on your listening habits and mood.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Social Features",
      description: "Connect with friends, share your favorite tracks, and discover new music through collaborative playlists and social sharing.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Seamlessly sync your music across all your devices with our responsive design and cloud-based synchronization.",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: Music,
      title: "AI Discovery",
      description: "Let our intelligent algorithms learn your preferences and suggest new artists, genres, and songs tailored just for you.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Download,
      title: "Offline Listening",
      description: "Download your favorite tracks and playlists for offline listening, perfect for commutes or areas with poor connectivity.",
      gradient: "from-yellow-500 to-green-600"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Our Platform
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of music streaming with our innovative features designed for the
            modern music lover.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="gradient" size="xl">
            Start Your Musical Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;