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
import { Maximize, Touchpad, History, BatteryCharging, Hourglass, Magnet, Activity } from "lucide-react";

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
          name: "Home",          id: "/"},
        {
          name: "About",          id: "#about"},
        {
          name: "Features",          id: "#features"},
        {
          name: "Products",          id: "/products"},
        {
          name: "Testimonials",          id: "#testimonials"},
      ]}
      button={{
        text: "Buy Now",        href: "/products"}}
      brandName="Auraglow"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static"}}
      title="Auraglow: The Smart LED Sensor Wall Light"
      description="Experience innovative illumination with our magnetic base wall light. Featuring intelligent motion sensing, stepless dimming, and easy installation, Auraglow redefines modern home lighting."
      buttons={[
        {
          text: "Explore Features",          href: "#features"},
        {
          text: "Shop Now",          href: "/products"},
      ]}
      buttonAnimation="slide-up"
      carouselItems={[
        {
          id: "1",          imageSrc: "http://img.b2bpic.net/free-photo/view-contemporary-photorealistic-lamp_23-2151038904.jpg",          imageAlt: "Auraglow Smart LED Sensor Wall Light in a modern setting"},
        {
          id: "2",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-gray-metal-cabinet-with-handle-label-office-minimal_169016-71010.jpg?_wi=1",          imageAlt: "Magnetic base of Auraglow light attaching to a metal surface"},
        {
          id: "3",          imageSrc: "http://img.b2bpic.net/free-photo/white-lightbulb-minimal-design-studio_23-2149372273.jpg",          imageAlt: "Sleek, minimalist design of the Auraglow LED light"},
        {
          id: "4",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-led-lighting-fixture_23-2149301131.jpg",          imageAlt: "Close-up of the LED lighting fixture of Auraglow"},
        {
          id: "5",          imageSrc: "http://img.b2bpic.net/free-photo/clean-minimalist-empty-room-dark-wood-floor-light-wall-with-copy-space_181624-3700.jpg",          imageAlt: "Auraglow light illuminating a clean, minimalist room"},
        {
          id: "6",          imageSrc: "http://img.b2bpic.net/free-photo/modern-light-fixture-minimalist-interior_23-2149301138.jpg",          imageAlt: "Auraglow light integrated into a modern interior design"},
      ]}
      autoPlay={true}
      autoPlayInterval={4000}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Auraglow: Where Smart Lighting Meets Seamless Design"
      description="Auraglow stands at the forefront of modern lighting innovation. Our Smart LED Sensor Wall Light with Magnetic Base is designed for effortless integration into any home. Combining intelligent motion sensing, customizable brightness, and a sleek aesthetic, Auraglow delivers unparalleled convenience and sophisticated style."
      imageSrc="http://img.b2bpic.net/free-photo/modern-style-home-interior-design_23-2149168452.jpg"
      imageAlt="Modern home interior showcasing elegant lighting"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",          title: "Seamless Brightness Adjustment",          description: "Enjoy perfect lighting with intuitive touch control for stepless dimming from 10% to 100%. The Auraglow light conveniently remembers your last brightness setting when turned on again.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/vertical-light-long-blue-room_181624-345.jpg",            imageAlt: "Hand touching the Auraglow light to adjust brightness"},
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
          id: "2",          title: "Powerful & Long-Lasting Battery",          description: "Equipped with a robust 4000mAh battery, the Auraglow light offers 7 hours of illumination at the highest brightness and up to 30 hours at the lowest, ensuring long-lasting ambiance.",          media: {
            imageSrc: "http://img.b2bpic.net/free-vector/kinds-lightbulbs-flat-style_23-2147532362.jpg",            imageAlt: "Battery icon with Auraglow light illustration"},
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
          id: "3",          title: "Effortless & Versatile Installation with Magnetic Base",          description: "Choose between drill-free installation using the included strong adhesive strip or powerful magnetic base for instant attachment to any magnetic surface. Plus, enjoy a 360° adjustable angle for versatile lighting with your Auraglow light.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/closeup-gray-metal-cabinet-with-handle-label-office-minimal_169016-71010.jpg?_wi=2",            imageAlt: "Auraglow light with magnetic base being installed"},
          items: [
            {
              icon: Magnet,
              text: "Magnetic Base & Drill-Free"},
            {
              icon: Maximize,
              text: "360° Adjustable Angle"},
          ],
          reverse: false,
        },
        {
          id: "4",          title: "Intelligent Motion Sensing",          description: "The Auraglow Smart LED Sensor Wall Light activates automatically when motion is detected, providing light when you need it most and saving energy when you don't. Perfect for hallways, closets, and stairwells.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/dark-corridor-glowing-light-empty-hallway_1407-3507.jpg",            imageAlt: "Auraglow Smart LED wall light detecting motion in a dark hallway"},
          items: [
            {
              icon: Activity,
              text: "Automatic Activation"},
            {
              icon: Hourglass,
              text: "Energy Efficient"},
          ],
          reverse: true,
        },
      ]}
      title="Intelligent Features for Modern Living"
      description="The Auraglow Smart LED Sensor Wall Light is meticulously engineered to enhance your comfort, safety, and energy efficiency with cutting-edge technology and intuitive controls."
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
          id: "smart-sensor-white",          brand: "Auraglow Smart",          name: "Smart Sensor Wall Light - Magnetic White",          price: "£39.99",          rating: 4.8,
          reviewCount: "55 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/interior-home-design-composition-with-white-chair_23-2149301211.jpg?_wi=1",          imageAlt: "Auraglow Smart LED sensor wall light in white with magnetic base"},
        {
          id: "smart-sensor-black",          brand: "Auraglow Smart",          name: "Smart Sensor Wall Light - Magnetic Black",          price: "£39.99",          rating: 4.7,
          reviewCount: "42 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/lamp-with-minimalist-design-indoors_23-2151038933.jpg?_wi=1",          imageAlt: "Auraglow Smart LED sensor wall light in black with magnetic base"},
        {
          id: "lamp-oak",          brand: "Luminate Classic",          name: "Wireless Wall Lamp - Oak Finish",          price: "£24.99",          rating: 5,
          reviewCount: "125 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/view-modern-photorealistic-lamp_23-2151038961.jpg?_wi=1",          imageAlt: "Luminate Classic wireless wall lamp with light oak finish"},
        {
          id: "lamp-walnut",          brand: "Luminate Classic",          name: "Wireless Wall Lamp - Walnut Finish",          price: "£26.99",          rating: 5,
          reviewCount: "98 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/low-angle-selective-focus-shot-lamp-with-interesting-design_181624-6609.jpg?_wi=1",          imageAlt: "Luminate Classic wireless wall lamp with rich walnut finish"},
        {
          id: "lamp-beech",          brand: "Luminate Classic",          name: "Wireless Wall Lamp - Beech Finish",          price: "£23.99",          rating: 4.5,
          reviewCount: "72 reviews",          imageSrc: "http://img.b2bpic.net/free-photo/wood-furniture-decoration-wall-comfortable_1203-5240.jpg?_wi=1",          imageAlt: "Luminate Classic wireless wall lamp with light beech wood finish"},
      ]}
      title="Discover the Auraglow Smart Lighting Collection"
      description="Explore our range of Auraglow Smart LED Sensor Wall Lights, designed to provide intelligent illumination with stylish magnetic installation. Also features our classic wooden lamps."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="“The Auraglow Smart LED Sensor Wall Light has transformed my hallway! The magnetic base made installation a breeze, and the motion sensor is incredibly convenient. Stylish and smart – exactly what I needed.”"
      rating={5}
      author="Emily R., Homeowner"
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
      logoText="Auraglow"
      columns={[
        {
          title: "Information",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Features",              href: "#features"},
            {
              label: "Products",              href: "/products"},
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
      copyrightText="© 2024 Auraglow. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}