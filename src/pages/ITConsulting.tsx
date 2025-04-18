
import React from 'react';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/it-consulting/HeroSection';
import ServicesSection from '@/components/it-consulting/ServicesSection';
import TechPartnersSection from '@/components/it-consulting/TechPartnersSection';
import CybersecurityNewsSection from '@/components/it-consulting/CybersecurityNewsSection';
import CaseStudiesSection from '@/components/it-consulting/CaseStudiesSection';
import TestimonialsSection from '@/components/it-consulting/TestimonialsSection';
import CallToAction from '@/components/it-consulting/CallToAction';
import Navbar from '@/components/Navbar';

export default function ITConsulting() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-20 ">
        <HeroSection />
        
        {/* Main Content */}
        <section className="mt-2 lg:py-16 lg:px-16">
  <div className="">
    <ServicesSection />
    <CaseStudiesSection />
    <TestimonialsSection />
    <TechPartnersSection />
    <CybersecurityNewsSection />
    <CallToAction />
  </div>
</section>

      </main>
      <Footer />
    </div>
  );
}
