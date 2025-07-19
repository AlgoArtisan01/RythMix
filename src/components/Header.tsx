import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const Header = () => {
  const navigation = [
    { name: "Music Library", href: "#library" },
    { name: "User Playlists", href: "#playlists" },
    { name: "Collaborative Playlists", href: "#collaborative" },
    { name: "Subscription", href: "#pricing" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Ryth
              </span>
              Mix
            </span>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Sign Up Button */}
          <Button variant="gradient" size="sm">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;