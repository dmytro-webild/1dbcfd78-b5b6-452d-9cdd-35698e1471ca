import { Outlet } from "react-router-dom";
import NavbarHairline from "@/components/navbars/NavbarHairline";
import FooterQuietColumns from "@/components/sections/footer/FooterQuietColumns";
import QuantumMediaLogo from "@/components/QuantumMediaLogo";
import { Printer } from "lucide-react";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="glass" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarHairline
          brand="Quantum Media"
          logo={<QuantumMediaLogo />}
          logoIcon={Printer}
          navItems={[
            {
              name: "Services",
              href: "#services"
            },
            {
              name: "Portfolio",
              href: "#product"
            },
            {
              name: "Why Us",
              href: "#metrics"
            },
            {
              name: "FAQ",
              href: "#faq"
            }
          ]}
          primaryButton={{
            text: "Get a Quote",
            href: "#contact"
          }}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="glass" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterQuietColumns
          brand="Quantum Media Pvt Ltd"
          logo={<QuantumMediaLogo showTagline />}
          brandIcon={Printer}
          description="Harare's premier large-format printing, outdoor signage, and corporate event branding agency. Creative. Immersive. Unforgettable."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Large Format Printing",
                  href: "#services"
                },
                {
                  label: "Outdoor & Event Signage",
                  href: "#services"
                },
                {
                  label: "Corporate Office Branding",
                  href: "#services"
                },
                {
                  label: "Event & Stage Setups",
                  href: "#services"
                }
              ]
            },
            {
              title: "Navigation",
              items: [
                {
                  label: "Portfolio",
                  href: "#product"
                },
                {
                  label: "Why Choose Us",
                  href: "#metrics"
                },
                {
                  label: "Client Feedback",
                  href: "#testimonial"
                },
                {
                  label: "FAQ",
                  href: "#faq"
                }
              ]
            },
            {
              title: "Contact Us",
              items: [
                {
                  label: "10 Christchurch Ave, Strathaven, Harare",
                  href: "#contact"
                },
                {
                  label: "+263 77 290 1862",
                  href: "tel:+263772901862"
                },
                {
                  label: "info@quantummedia.co.zw",
                  href: "mailto:info@quantummedia.co.zw"
                }
              ]
            }
          ]}
          copyright="© 2026 Quantum Media Pvt Ltd. All rights reserved."
        />
      </footer>
    </div>
  );
}
