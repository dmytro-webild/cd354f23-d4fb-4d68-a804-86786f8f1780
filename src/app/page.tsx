"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Maximize, Touchpad, History, BatteryCharging, Hourglass, Drill } from "lucide-react";

export default function LandingPage() {
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
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Features",          id: "features"},
        {
          name: "Products",          id: "products"},
        {
          name: "Testimonials",          id: "testimonials"},
      ]}
      button={{
        text: "Buy Now",        href: "#products"}}
      brandName="Luminate"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static"}}
      title="Luminate: Your Space, Illuminated"
      description="Discover the Pack USB Rechargeable Wireless Wall Lamp – an indoor wooden light with touch control, brightness adjustment, and 360° rotation for the perfect ambiance in any room."
      buttons={[
        {
          text: "Explore Features",          href: "#features"},
        {
          text: "Shop Now",          href: "#products"},
      ]}
      buttonAnimation="slide-up"
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-with-laptop-phone_23-2149130548.jpg",          imageAlt: "Wireless wooden wall lamp in a modern bedroom"},
        {
          id: "2",          imageSrc: "http://img.b2bpic.net/free-photo/decorative-word-love-blurred-background-interior-detail_169016-19168.jpg",          imageAlt: "Adjustable wooden wall lamp with warm glow"},
        {
          id: "3",          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-writing-her-journal_23-2150416357.jpg",          imageAlt: "Close-up of USB rechargeable wooden lamp"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-photo/view-contemporary-photorealistic-lamp_23-2151038904.jpg",          imageAlt: "Wooden wall lamp providing light in a minimalist study"},
        {
          id: "5",          imageSrc: "http://img.b2bpic.net/free-photo/yellow-white-wooden-fence_250224-276.jpg",          imageAlt: "Elegant wooden wall lamp in a living room setting"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-family-spending-time-home_23-2150671557.jpg",          imageAlt: "Bedside wooden lamp enhancing bedroom decor"},
      ]}
      autoPlay={true}
      autoPlayInterval={4000}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Crafted for Your Space"
      description="The Luminate USB Rechargeable Wireless Wall Lamp is a beautifully designed indoor wooden light that combines aesthetics with functionality. Made from solid wood, each lamp is CNC machined and hand-finished to showcase the natural grain, making it a stylish addition to any room. It's perfect for bedrooms, studies, living rooms, and children's rooms."
      imageSrc="http://img.b2bpic.net/free-photo/selective-focus-point-morocco-light-lantern-decoration-living-room-interior_1339-3257.jpg"
      imageAlt="Close up of the wooden texture of the wireless wall lamp"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          title: "Seamless Brightness Adjustment",          description: "Enjoy perfect lighting with intuitive touch control for stepless dimming from 10% to 100%. The lamp conveniently remembers your last brightness setting when turned on again.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/vertical-light-long-blue-room_181624-345.jpg",            imageAlt: "Hand touching the lamp to adjust brightness"},
          items: [
            {
              icon: Touchpad,
              text: "Responsive Touch Control"},
            {
              icon: History,
              text: "Last Setting Memory"},
          ],
          reverse: false,
        },
        {
          id: "2",          title: "Powerful & Long-Lasting Battery",          description: "Equipped with a robust 4000mAh battery, our lamp offers 7 hours of illumination at the highest brightness and up to 30 hours at the lowest, ensuring long-lasting ambiance.",          media: {
            imageSrc: "http://img.b2bpic.net/free-vector/kinds-lightbulbs-flat-style_23-2147532362.jpg",            imageAlt: "Battery icon with wall lamp illustration"},
          items: [
            {
              icon: BatteryCharging,
              text: "4000mAh Capacity"},
            {
              icon: Hourglass,
              text: "Up to 30 Hours Use"},
          ],
          reverse: true,
        },
        {
          id: "3",          title: "Effortless & Versatile Installation",          description: "Choose between drill-free installation using the included strong adhesive strip or traditional mounting with screws. Plus, enjoy a 360° adjustable angle for versatile lighting.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/closeup-gray-metal-cabinet-with-handle-label-office-minimal_169016-71010.jpg",            imageAlt: "Person installing wall lamp with adhesive strip"},
          items: [
            {
              icon: Drill,
              text: "Drill-Free Option"},
            {
              icon: Maximize,
              text: "360° Adjustable Angle"},
          ],
          reverse: false,
        },
      ]}
      title="Designed for Modern Living"
      description="Experience unparalleled convenience and style with our innovative wireless wall lamp, meticulously engineered for your comfort and aesthetic pleasure."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "lamp-oak",          brand: "Luminate",          name: "Wireless Wall Lamp - Oak Finish",          price: "£24.99",          rating: 5,
          reviewCount: "125 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/view-modern-photorealistic-lamp_23-2151038961.jpg",          imageAlt: "Wireless wall lamp with light oak finish"},
        {
          id: "lamp-walnut",          brand: "Luminate",          name: "Wireless Wall Lamp - Walnut Finish",          price: "£26.99",          rating: 5,
          reviewCount: "98 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-selective-focus-shot-lamp-with-interesting-design_181624-6609.jpg",          imageAlt: "Wireless wall lamp with rich walnut finish"},
        {
          id: "lamp-beech",          brand: "Luminate",          name: "Wireless Wall Lamp - Beech Finish",          price: "£23.99",          rating: 4.5,
          reviewCount: "72 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/wood-furniture-decoration-wall-comfortable_1203-5240.jpg",          imageAlt: "Wireless wall lamp with light beech wood finish"},
      ]}
      title="Discover the Luminate Wall Lamp"
      description="Elevate your home decor with our elegant and functional wireless wooden lamps, available in various finishes to match your style."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="“I absolutely love my Luminate wireless lamp! The wooden design is so elegant and fits perfectly with my bedroom decor. The touch dimming is a game-changer for late-night reading.”"
      rating={5}
      author="Sarah J., Interior Designer"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/coffee-time-me-please_329181-17310.jpg",          alt: "Sarah J. Avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/woman-enjoys-leisure-time-spends-weekend-with-friends-strolls-city-listens-music-happy-about-successfully-passed-exam-smiles-broadly-poses-blurred_273609-54082.jpg",          alt: "Michael C. Avatar"},
        {
          src: "http://img.b2bpic.net/free-vector/family-pack-flat-design_23-2147528696.jpg",          alt: "Emily R. Avatar"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-handsome-confident-middleaged-man-showing-thumbsup-smiling-satisfied-approve_1258-137666.jpg",          alt: "David K. Avatar"},
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Visa",        "Mastercard",        "PayPal",        "Apple Pay",        "Google Pay",        "FedEx",        "UPS",        "DHL"
      ]}
      logos={[
        "http://img.b2bpic.net/free-vector/statue-liberty-logo-design-template_23-2151089939.jpg",        "http://img.b2bpic.net/free-photo/credit-cards-that-are-stacked-floor_1150-16356.jpg",        "http://img.b2bpic.net/free-vector/gradient-marketing-logo-collection_23-2149118903.jpg",        "http://img.b2bpic.net/free-photo/front-view-smiley-woman-online-shopping_23-2149476724.jpg",        "http://img.b2bpic.net/free-photo/software-site-application-symbol-digital-multimedia_1421-360.jpg",        "http://img.b2bpic.net/free-vector/email-glyph-style-set_78370-8379.jpg",        "http://img.b2bpic.net/free-vector/flat-truck-logo-template-collection_23-2148947411.jpg",        "http://img.b2bpic.net/free-vector/hand-drawn-transport-business-card_23-2149923091.jpg"]}
      title="Trusted by Millions, Delivered with Care"
      description="Join over 7 million satisfied customers who choose quality and reliability for their home needs. We ensure secure payments and prompt delivery."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Luminate"
      columns={[
        {
          title: "Information",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Features",              href: "#features"},
            {
              label: "Products",              href: "#products"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Track Orders",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms & Conditions",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Luminate. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
