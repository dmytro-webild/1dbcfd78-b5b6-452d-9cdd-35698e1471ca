import HeroBadgeCentered from "@/components/sections/hero/HeroBadgeCentered";
import MetricsDividerRow from "@/components/sections/metrics/MetricsDividerRow";
import FeaturesStackedGlass from "@/components/sections/features/FeaturesStackedGlass";
import GalleryGlassScroll from "@/components/sections/gallery/GalleryGlassScroll";
import TestimonialLogoCarousel from "@/components/sections/testimonial/TestimonialLogoCarousel";
import FaqCardGrid from "@/components/sections/faq/FaqCardGrid";
import ContactFormGlassPhoto from "@/components/sections/contact/ContactFormGlassPhoto";
import StrandField from "@/components/kit/StrandField";
import LoaderStrandRing from "@/components/loaders/LoaderStrandRing";
import { Award, Briefcase, Building, Building2, Flag, Gift, Layers, Paintbrush, Printer, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <StrandField

      />

      <LoaderStrandRing
        brand="Quantum Media Pvt Ltd"
        introDelay={1.4}
      />

      <div id="hero" data-webild-section="HeroBadgeCentered" data-webild-section-id="HeroBadgeCentered-1" data-section="hero">
        <HeroBadgeCentered
          introDelay={1.4}
          badge={{
            label: "Harare",
            text: "Creative. Immersive. Unforgettable.",
            href: "#services"
          }}
          title="Printing & Corporate Branding Specialists in Harare"
          description="We build large-format prints, outdoor signage, and complete stage setups across Zimbabwe for top visibility."
          primaryButton={{
            text: "Get a Quote",
            href: "https://wa.me/263772901862"
          }}
          secondaryButton={{
            text: "View Portfolio",
            href: "#product"
          }}
          images={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/rainbow-colored-paper-rolls_23-2151989444.jpg",
              imageAlt: "colorful paper rolls for printing"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/decorative-paper-bag-beautiful-gift-box-against-white-backdrop_23-2148102847.jpg",
              imageAlt: "branded gift box and bag"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/man-working-printing-house-with-paper-paints_1303-26587.jpg",
              imageAlt: "Man working in printing house with paper and paints"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/lifestyle-designer-using-3d-printer_23-2151019902.jpg",
              imageAlt: "Lifestyle of designer using a 3d printer"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/women-work-office-using-printer_23-2149456972.jpg",
              imageAlt: "Women at work in the office using printer"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/one-working-day-modern-automatic-bus-manufacturing-with-unfinished-cars-workers-protective-uniform-automotive-parts-background_645730-282.jpg",
              imageAlt: "One working day of modern automatic bus manufacturing with unfinished cars workers in protective uniform automotive parts background"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/diligent-mature-shoe-designer-is-working-his-new-shoe-collection-workshop_613910-17395.jpg",
              imageAlt: "Diligent mature shoe designer is working on his new shoe collection at workshop."
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/diverse-people-discussing-about-fashion-trends-assortments-retail-store_482257-109853.jpg",
              imageAlt: "Diverse people discussing about fashion trends and assortments in a retail store"
            }
          ]}
        />
      </div>

      <div id="metrics" data-webild-section="MetricsDividerRow" data-webild-section-id="MetricsDividerRow-1" data-section="metrics">
        <MetricsDividerRow
          tag="Why choose us"
          title="Built for high-impact"
          titleMuted="corporate presence."
          items={[
            {
              value: "100+",
              label: "Corporate setups delivered"
            },
            {
              value: "48h",
              label: "Standard print turnaround"
            },
            {
              value: "100%",
              label: "In-house production & setup"
            }
          ]}
        />
      </div>

      <div id="services" data-webild-section="FeaturesStackedGlass" data-webild-section-id="FeaturesStackedGlass-1" data-section="services" data-scene>
        <FeaturesStackedGlass
          tag="Our Services"
          title="From print runs to"
          titleMuted="stage installations."
          items={[
            {
              title: "Large Format Printing & Apparel",
              description: "High-definition posters, corporate gifts, custom apparel, and print-ready marketing materials for businesses in Harare.",
              imageSrc: "https://img.b2bpic.net/free-photo/fake-news-concept_23-2148836982.jpg",
              imageAlt: "Fake news concept",
              button: {
                text: "Get a Quote",
                href: "#contact"
              }
            },
            {
              title: "Outdoor & Event Signage",
              description: "Teardrop banners, pull-ups, heavy-duty branded gazebos, and pop-up tents built for all weather conditions.",
              imageSrc: "https://img.b2bpic.net/free-photo/black-friday-sales-composition-with-bags-space_23-2147696406.jpg",
              imageAlt: "Black friday sales composition with bags and space",
              button: {
                text: "Get a Quote",
                href: "#contact"
              }
            },
            {
              title: "Corporate Branding & Interior Styling",
              description: "Custom reception desks, illuminated 3D neon signage, office wayfinding boards, and custom vinyl wall wraps.",
              imageSrc: "https://img.b2bpic.net/free-photo/entrepreneur-drafting-architectural-blueprints-planning-office-relocation_482257-91072.jpg",
              imageAlt: "Entrepreneur drafting architectural blueprints and planning an office relocation",
              button: {
                text: "Get a Quote",
                href: "#contact"
              }
            },
            {
              title: "Event & Stage Installations",
              description: "Full conference backdrops, church stage setups, media walls, and end-to-end corporate event styling.",
              imageSrc: "https://img.b2bpic.net/free-photo/dj-equipment-stage-electronic-music-live-performance-nightclub-musician-controller-sound-mixing-speakers-spotlights-party-discotheque-club-with-no-people_482257-67177.jpg",
              imageAlt: "Dj equipment on stage for electronic music live performance in nightclub. Musician controller for sound mixing, speakers and spotlights for party discotheque in club with no people",
              button: {
                text: "Get a Quote",
                href: "#contact"
              }
            }
          ]}
        />
      </div>

      <div id="product" data-webild-section="GalleryGlassScroll" data-webild-section-id="GalleryGlassScroll-1" data-section="product" data-scene>
        <GalleryGlassScroll
          tag="Recent Work"
          title="Real installations,"
          titleMuted="real corporate impact."
          items={[
            {
              icon: Printer,
              title: "Custom Media Backdrop",
              description: "High-tension event backdrop built for a corporate product launch.",
              imageSrc: "https://img.b2bpic.net/free-photo/pink-sign-with-phrase_1134-367.jpg",
              imageAlt: "Pink sign with phrase"
            },
            {
              icon: Paintbrush,
              title: "Corporate Interior Wrap",
              description: "Full-wall graphic wrapping and reception area corporate branding.",
              imageSrc: "https://img.b2bpic.net/free-vector/realistic-mockup-empty-living-room-with-black-sofa-nightstand-with-vase_1441-2560.jpg",
              imageAlt: "realistic mockup of empty living room with black sofa, nightstand with vase"
            },
            {
              icon: Flag,
              title: "Branded Event Gazebo",
              description: "Heavy-duty outdoor gazebo setup with printed teardrop banners.",
              imageSrc: "https://img.b2bpic.net/free-photo/friendly-volunteers-food-drive-busy-sorting-packing-food-donations-distribution-embodying-spirit-giving-combat-hunger-less-privileged-homeless-people-receive-humanitarian-aid_482257-70274.jpg",
              imageAlt: "Friendly volunteers at food drive, busy sorting and packing food donations for distribution, embodying the spirit of giving to combat hunger. Less privileged, homeless people receive humanitarian aid."
            },
            {
              icon: Sparkles,
              title: "Illuminated 3D Signage",
              description: "Precision-cut acrylic neon lettering for corporate lobby entrances.",
              imageSrc: "https://img.b2bpic.net/free-photo/japanese-subway-system-passenger-information-display-screen_23-2148954882.jpg",
              imageAlt: "Japanese subway system passenger information display screen"
            },
            {
              icon: Gift,
              title: "Executive Merchandise Set",
              description: "Custom branded corporate gifts, promotional items, and apparel.",
              imageSrc: "https://img.b2bpic.net/free-photo/flat-lay-office-stationery-with-notepad-different-pencils_23-2148524807.jpg",
              imageAlt: "Flat lay of office stationery with notepad and different pencils"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialLogoCarousel" data-webild-section-id="TestimonialLogoCarousel-1" data-section="testimonial">
        <TestimonialLogoCarousel
          tag="Client Feedback"
          title="Trusted by corporate"
          titleMuted="industry leaders."
          secondaryButton={{
            text: "Get a Quote",
            href: "#contact"
          }}
          testimonials={[
            {
              quote: "Quantum Media produced our outdoor teardrop banners and gazebos in under 48 hours for our trade expo in Harare.",
              name: "Katie Carter",
              role: "Operations Manager",
              company: "Chilmund",
              icon: Building
            },
            {
              quote: "Their 3D illuminated signage completely transformed our reception area. Exceptional build quality and fast installation.",
              name: "Andre Turner",
              role: "Head of Marketing",
              company: "Lakeview Brokers",
              icon: Building2
            },
            {
              quote: "The conference backdrop and stage setup were flawless. They handled the entire installation on time without any issues.",
              name: "Natalie Patel",
              role: "Managing Director",
              company: "Harare Tech",
              icon: Briefcase
            },
            {
              quote: "Our corporate merchandise and vinyl wall wraps were printed with rich colors and delivered right when promised.",
              name: "Jacob Bennett",
              role: "Event Lead",
              company: "Apex Media",
              icon: Layers
            },
            {
              quote: "From pull-up banners to custom stage backdrops, Quantum Media consistently delivers top-tier printing for our annual summits.",
              name: "Lauren Graham",
              role: "Event Director",
              company: "Grace Fellowship",
              icon: Award
            }
          ]}
          labels={{
            previous: "Previous",
            next: "Next"
          }}
        />
      </div>

      <div id="faq" data-webild-section="FaqCardGrid" data-webild-section-id="FaqCardGrid-1" data-section="faq">
        <FaqCardGrid
          tag="Questions"
          title="Before you order"
          titleMuted="What to know."
          items={[
            {
              title: "Where is your Harare workshop located?",
              description: "Our main office and production facility is at 10 Christchurch Ave, Strathaven, Harare, Zimbabwe."
            },
            {
              title: "How fast can you deliver standard pull-up banners?",
              description: "Most standard pull-up banners and outdoor prints are ready within 24 to 48 hours following final artwork approval."
            },
            {
              title: "Do you offer complete stage and event setup?",
              description: "Yes, our team handles delivery, full stage installation, illuminated backdrops, and post-event teardown across Zimbabwe."
            },
            {
              title: "How can I get a fast corporate project quotation?",
              description: "Send your artwork and specifications directly via WhatsApp to +263 77 290 1862 or email info@quantummedia.co.zw for a swift response."
            },
            {
              title: "What file formats should we supply for printing?",
              description: "We recommend high-resolution vector PDF, EPS, or TIFF files with CMYK color profiles and embedded fonts for optimal clarity."
            },
            {
              title: "Can you design custom 3D signage and office wall wraps?",
              description: "Our creative team handles end-to-end design, fabrication, and installation of illuminated 3D reception logos and vinyl wall wraps."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactFormGlassPhoto" data-webild-section-id="ContactFormGlassPhoto-1" data-section="contact">
        <ContactFormGlassPhoto
          title="Ready to launch"
          titleMuted="your corporate branding in Harare?"
          labels={{
            firstName: "First name",
            lastName: "Last name",
            email: "Work email",
            company: "Company name",
            message: "Tell us your project details"
          }}
          placeholders={{
            firstName: "First name",
            lastName: "Last name",
            email: "info@quantummedia.co.zw",
            company: "Company name",
            message: "Describe your signage or corporate print requirements."
          }}
          primaryButton={{
            text: "Request Quote"
          }}
          note="We reply within 24 hours. Visit 10 Christchurch Ave, Strathaven, Harare."
          successText="Thank you. Our Harare team will contact you within 24 hours."
          imageSrc="https://img.b2bpic.net/free-photo/artist-is-mixing-different-dye-colors-palette-create-perfect-shade_482257-108460.jpg"
          imageAlt="Artist is mixing different dye colors on a palette to create the perfect shade"
        />
      </div>
    </>
  );
}
