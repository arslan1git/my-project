import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-20">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="text-4xl font-bold">
              SHOP.CO
            </Link>
            <p className="text-muted-foreground text-sm">
              Clothes that suit your style and make you proud to wear. From women to men
            </p>
            <div className="flex gap-4 pt-8">
              <a href="/" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="/" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="/" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold mb-3 text-lg">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Works</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Career</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-lg">Help</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Customer Support</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Delivery Details</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Terms & Conditions</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-lg">FAQ</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Account</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Manage Deliveries</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Orders</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Payments</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-lg">Resources</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Free eBook</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Development Tutorial</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">How to - Blog</Link></li>
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">YouTube Playlist</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© 2024 SHOP.CO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
