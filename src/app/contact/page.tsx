"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import { Mail } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "/" },
    { name: "About", id: "/#about" },
    { name: "Features", id: "/#features" },
    { name: "Products", id: "/products" },
    { name: "Testimonials", id: "/#testimonials" },
    { name: "Contact", id: "/contact" }
  ];

  const footerColumns = [
    {
      title: "Information",      items: [
        { label: "About Us", href: "/#about" },
        { label: "Features", href: "/#features" },
        { label: "Products", href: "/products" }
      ]
    },
    {
      title: "Support",      items: [
        { label: "Contact Us", href: "/contact" },
        { label: "FAQ", href: "/#faq" },
        { label: "Track Orders", href: "#" }
      ]
    },
    {
      title: "Legal",      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" }
      ]
    }
  ];

  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered
            navItems={navItems}
            button={{
              text: "Buy Now",              href: "/products"
            }}
            brandName="Auraglow"
          />
        </div>

        <div id="contact-content" data-section="contact-content">
          <ContactFaq
            ctaTitle="Need a Helping Hand?"
            ctaDescription="Our team is here to answer all your questions and provide support."
            ctaButton={{
              text: "Get in Touch",              href: "mailto:support@auraglow.com"
            }}
            ctaIcon={Mail}
            faqs={[
              {
                id: "1",                title: "How do I install the Auraglow light?",                content: "The Auraglow light offers drill-free installation using its magnetic base or included adhesive strip. Simply attach it to any magnetic surface or use the adhesive for other surfaces."
              },
              {
                id: "2",                title: "What is the battery life?",                content: "Equipped with a 4000mAh battery, it provides 7 hours at highest brightness and up to 30 hours at lowest, depending on usage."
              },
              {
                id: "3",                title: "Does it have motion sensing?",                content: "Yes, the Auraglow Smart LED Sensor Wall Light features intelligent motion sensing for automatic activation, saving energy when not needed."
              },
              {
                id: "4",                title: "Can I adjust the brightness?",                content: "Absolutely! It features stepless dimming from 10% to 100% with intuitive touch control, remembering your last setting."
              }
            ]}
            useInvertedBackground={false}
            animationType="slide-up"
            ariaLabel="Contact and FAQ section"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBaseCard
            logoText="Auraglow"
            columns={footerColumns}
            copyrightText="© 2024 Auraglow. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
