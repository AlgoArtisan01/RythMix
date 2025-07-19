import { Button } from "@/components/ui/button";
import { Play, Music, Users, Smartphone } from "lucide-react";
import heroDevice from "@/assets/hero-device.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50" />
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Your Music,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Anywhere
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Stream millions of songs, create custom playlists, and
                discover new music with our fluid, responsive music
                streaming platform.
              </p>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Millions of Songs</h3>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Custom Playlists</h3>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Social Sharing</h3>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Mobile First</h3>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" size="xl" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Start Streaming Now
              </Button>
              <Button variant="gradient-outline" size="xl">
                Browse Music Library
              </Button>
            </div>
          </div>

          {/* Right content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroDevice}
                alt="Music streaming device"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/30 rounded-full blur-xl" />
            <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-secondary/30 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;