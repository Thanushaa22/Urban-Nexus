import {
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 text-white">

      <div className="max-w-7xl mx-auto px-12 py-24">

        <div className="grid md:grid-cols-4 gap-20">

          {/* Brand */}

          <div>
            <h2 className="text-2xl font-medium tracking-tight">
              Urban Nexus
            </h2>

            <p className="text-zinc-500 mt-4 leading-relaxed">
              Intelligence for next-generation cities.
            </p>
          </div>

          {/* Platform */}

          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-600 mb-8">
              Platform
            </p>

            <div className="space-y-5">

              <a
                href="#overview"
                className="block text-zinc-300 hover:text-white transition-all"
              >
                Traffic Analytics
              </a>

              <a
                href="#healthcare"
                className="block text-zinc-300 hover:text-white transition-all"
              >
                Healthcare Intelligence
              </a>

              <a
                href="#risk"
                className="block text-zinc-300 hover:text-white transition-all"
              >
                Risk Prediction
              </a>

            </div>
          </div>

          {/* Company */}

          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-600 mb-8">
              Company
            </p>

            <div className="space-y-5">

              <a
                href="/about"
                className="block text-zinc-300 hover:text-white transition-all"
              >
                About
              </a>

              <a
                href="/pricing"
                className="block text-zinc-300 hover:text-white transition-all"
              >
                Pricing
              </a>

              <a
                href="/contact"
                className="block text-zinc-300 hover:text-white transition-all"
              >
                Contact
              </a>

            </div>
          </div>

          {/* Connect */}

          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-600 mb-8">
              Connect
            </p>

            <div className="space-y-5">

              <a
                href="https://www.linkedin.com/in/thanusha2233/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-zinc-300 hover:text-white transition-all"
              >
                <FaLinkedinIn />
                LinkedIn
              </a>


            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/5 mt-20 pt-8 flex justify-between items-center">

          <p className="text-zinc-600 text-sm">
            © 2026 Urban Nexus AI. All rights reserved.
          </p>

          <p className="text-zinc-700 text-sm">
            Built for intelligent urban systems.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;