import { Button } from "@/components/ui/button";
import { Volume2, Radio, Sliders } from "lucide-react";
import audioExperience from "@/assets/audio-experience.jpg";

const AudioSection = () => {
  const features = [
    {
      icon: Volume2,
      title: "Lossless Audio Quality",
      description: "Stream music in studio-quality with our lossless compression technology for the ultimate listening experience.",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Radio,
      title: "Adaptive Streaming",
      description: "Automatically adjusts quality based on your connection for seamless playback without interruption.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Sliders,
      title: "Custom Equalizer",
      description: "Fine-tune your audio with our advanced equalizer and preset modes for different music genres.",
      gradient: "from-blue-500 to-purple-600"
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
                Immerse Yourself in
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Pure Sound
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Experience music like never before with our cutting-edge audio
                technology. From crystal-clear highs to deep, resonant bass,
                every note comes alive.
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  320kbps
                </div>
                <p className="text-muted-foreground">Maximum Bitrate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-orange-400">
                  24/7
                </div>
                <p className="text-muted-foreground">Streaming Access</p>
              </div>
            </div>
          </div>

          {/* Right content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={audioExperience}
                alt="Person enjoying music with headphones"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-secondary/20 rounded-full blur-xl" />
            <div className="absolute top-1/2 -right-12 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioSection;