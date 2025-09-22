import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
            <svg width="50" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M110 170 L130 90 L70 55 L160 105 L160 170 Z" fill="#0B6E4F" opacity="0.8"/>
              <rect x="125" y="115" width="15" height="15" fill="#fff" />
              <rect x="125" y="140" width="15" height="15" fill="#fff" />
              <path d="M50 170 L50 110 L65 95 L80 110 L80 170 Z" fill="#0B6E4F" opacity="0.8"/>
              <path d="M70 160 L70 60 L100 30 L130 60 L130 160 L140 160 L140 170 L60 170 L60 160 L70 160" fill="#0B6E4F" />
              <polygon points="94,65 101.5,55 109,65" fill="#fff" />
              <rect x="94" y="65" width="15" height="15" fill="#fff" />
              <rect x="94" y="90" width="15" height="15" fill="#fff" />
              <rect x="94" y="115" width="15" height="15" fill="#fff" />
              <rect x="94" y="140" width="15" height="15" fill="#fff" />
              <rect x="45" y="150" width="4" height="20" fill="#0B6E4F" />
              <circle cx="48" cy="150" r="10" fill="#0B6E4F" />
              <circle cx="42" cy="152" r="7" fill="#0B6E4F" />
              <circle cx="54" cy="152" r="7" fill="#0B6E4F" />
              <circle cx="48" cy="144" r="6" fill="#0B6E4F" />
              <rect x="168" y="150" width="4" height="20" fill="#0B6E4F" />
              <circle cx="170" cy="150" r="10" fill="#0B6E4F" />
              <circle cx="164" cy="152" r="7" fill="#0B6E4F" />
              <circle cx="176" cy="152" r="7" fill="#0B6E4F" />
              <circle cx="170" cy="144" r="6" fill="#0B6E4F" />
              <line x1="20" y1="170" x2="190" y2="170" stroke="#0B6E4F" strokeWidth="4" />
            </svg>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-eco-secondary bg-clip-text text-transparent">
              CleanCity
            </span>
          </Link>
            <p className="text-muted-foreground text-lg">
              Transforming communities through smart waste management. Join thousands of eco-warriors making a difference.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors hover-scale" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors hover-scale" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors hover-scale" />
              <Youtube className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors hover-scale" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 ml-16">
            <h4 className="font-semibold text-xl text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block  cursor-pointer hover:underline text-md text-muted-foreground hover:text-primary transition-colors story-link">
                Home
              </Link>
              <Link to="/report" className="block  cursor-pointer hover:underline text-md text-muted-foreground hover:text-primary transition-colors story-link">
                Report Waste
              </Link>
              <Link to="/collect" className="block  cursor-pointer hover:underline text-md text-muted-foreground hover:text-primary transition-colors story-link">
                Collect Waste
              </Link>
              <Link to="/rewards" className="block cursor-pointer hover:underline  text-md  text-muted-foreground hover:text-primary transition-colors story-link">
                Rewards
              </Link>
              <Link to="/about" className="block cursor-pointer hover:underline  text-md  text-muted-foreground hover:text-primary transition-colors story-link">
                About Us
              </Link>
              
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-xl text-foreground">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-md cursor-pointer hover:underline text-muted-foreground hover:text-primary transition-colors story-link">
                Waste Management Guide
              </a>
              <a href="#" className="block text-md cursor-pointer hover:underline text-muted-foreground hover:text-primary transition-colors story-link">
                Recycling Tips
              </a>
              <a href="#" className="block text-md cursor-pointer hover:underline text-muted-foreground hover:text-primary transition-colors story-link">
                Community Events
              </a>
              <a href="#" className="block text-md cursor-pointer hover:underline text-muted-foreground hover:text-primary transition-colors story-link">
                Environmental Impact
              </a>
              <a href="#" className="block text-md cursor-pointer hover:underline text-muted-foreground hover:text-primary transition-colors story-link">
                Help Center
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="font-semibold text-xl text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center  text-md space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@cleancity.app</span>
              </div>
              <div className="flex items-center text-md  space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>011-25567347</span>
              </div>
              <div className="flex items-center  text-md space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/90 mt-4 pt-4 mb-[-26px] flex flex-col md:flex-row justify-between items-center">
          <div className="text-md text-muted-foreground">
            © 2025 CleanCity. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-md cursor-pointer hover:underline text-muted-foreground hover:text-primary transition-colors story-link">
              Privacy Policy
            </a>
            <a href="#" className="text-md cursor-pointer hover:underline text-muted-foreground hover:text-primary transition-colors story-link">
              Terms of Service
            </a>
            <a href="#" className="text-md cursor-pointer hover:underline text-muted-foreground hover:text-primary transition-colors story-link">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
