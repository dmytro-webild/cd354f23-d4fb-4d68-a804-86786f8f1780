"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function ProductsPage() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Features", href: "/#features" },
    { name: "Products", href: "/products" },
    { name: "Testimonials", href: "/#testimonials" }
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
        { label: "Contact Us", href: "/#contact" },
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

  const productsData = [
    {
      id: "smart-sensor-white",      brand: "Auraglow Smart",      name: "Smart Sensor Wall Light - Magnetic White",      price: "£39.99",      rating: 4.8,
      reviewCount: "55 reviews",      imageSrc: "http://img.b2bpic.net/free-photo/interior-home-design-composition-with-white-chair_23-2149301211.jpg",      imageAlt: "Auraglow Smart LED sensor wall light in white with magnetic base"
    },
    {
      id: "smart-sensor-black",      brand: "Auraglow Smart",      name: "Smart Sensor Wall Light - Magnetic Black",      price: "£39.99",      rating: 4.7,
      reviewCount: "42 reviews",      imageSrc: "http://img.b2bpic.net/free-photo/lamp-with-minimalist-design-indoors_23-2151038933.jpg",      imageAlt: "Auraglow Smart LED sensor wall light in black with magnetic base"
    },
    {
      id: "lamp-oak",      brand: "Luminate Classic",      name: "Wireless Wall Lamp - Oak Finish",      price: "£24.99",      rating: 5,
      reviewCount: "125 reviews",      imageSrc: "http://img.b2bpic.net/free-photo/view-modern-photorealistic-lamp_23-2151038961.jpg",      imageAlt: "Luminate Classic wireless wall lamp with light oak finish"
    },
    {
      id: "lamp-walnut",      brand: "Luminate Classic",      name: "Wireless Wall Lamp - Walnut Finish",      price: "£26.99",      rating: 5,
      reviewCount: "98 reviews",      imageSrc: "http://img.b2bpic.net/free-photo/low-angle-selective-focus-shot-lamp-with-interesting-design_181624-6609.jpg",      imageAlt: "Luminate Classic wireless wall lamp with rich walnut finish"
    },
    {
      id: "lamp-beech",      brand: "Luminate Classic",      name: "Wireless Wall Lamp - Beech Finish",      price: "£23.99",      rating: 4.5,
      reviewCount: "72 reviews",      imageSrc: "http://img.b2bpic.net/free-photo/wood-furniture-decoration-wall-comfortable_1203-5240.jpg",      imageAlt: "Luminate Classic wireless wall lamp with light beech wood finish"
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

        <div id="products-page-content" data-section="products-page-content">
          <ProductCardTwo
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="three-columns-all-equal-width"
            useInvertedBackground={true}
            products={productsData}
            title="Our Full Product Range"
            description="Explore all the smart lighting solutions and classic lamps Auraglow has to offer."
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