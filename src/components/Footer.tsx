import { Music, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "Home", href: "#" },
        { name: "Music Library", href: "#" },
        { name: "Now Playing", href: "#" },
        { name: "Search Results", href: "#" },
        { name: "Upload Music", href: "#" },
      ],
    },
    {
      title: "Account",
      links: [
        { name: "Sign Up", href: "#" },
        { name: "Log In", href: "#" },
        { name: "User Playlists", href: "#" },
        { name: "Collaborative Playlists", href: "#" },
        { name: "User Settings", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Subscription", href: "#" },
        { name: "Admin Dashboard", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand section */}
          <div className="space-y-6">
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
            <p className="text-muted-foreground max-w-sm">
              <b>Discover a new era of music streaming</b> seamless, intuitive, and
              built around you. <b>Stream</b> millions of songs, curate your own
              playlists, and explore fresh tracks tailored to your taste.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">
                RythMix
              </span>
              . All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
