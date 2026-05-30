"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Facebook, Instagram, Phone, CheckCircle, WhatsApp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="small"
        sizing="mediumLarge"
        background="blurBottom"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Accueil",          id: "/"},
        {
          name: "Suites",          id: "#suites"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Réservation",          id: "#booking"},
        {
          name: "À Propos",          id: "#about"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="DAR CHENNOUFI"
      button={{
        text: "Book a Room",        href: "#booking"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "plain"}}
      title="DAR CHENNOUFI"
      description="Maison d'hôtes authentique au cœur du Kef"
      tag="Guest House"
      tagAnimation="blur-reveal"
      buttons={[
        {
          text: "Book a Room",          href: "#booking"},
        {
          text: "WhatsApp",          href: "https://wa.me/21652502053"},
      ]}
      buttonAnimation="blur-reveal"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-front-door-with-orange-wall-plants_23-2149360604.jpg",          imageAlt: "Exterior view of Dar Chennoufi, a luxury Tunisian guest house"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-interior-with-decor-items-home-living-room_169016-1354.jpg",          imageAlt: "Interior view of a luxurious room at Dar Chennoufi"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Exceptional Hospitality"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Our Story & Philosophy"
      description={[
        "Dar Chennoufi est une maison d'hôtes authentique située au Kef, offrant une expérience unique entre patrimoine tunisien, nature, détente et hospitalité.",        "Nos suites, notre jardin, notre piscine et notre table d'hôtes vous invitent à vivre un séjour inoubliable, creating a truly memorable escape in the heart of the Tunisian countryside."]}
    />
  </div>

  <div id="suites" data-section="suites">
      <ProductCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "suite-lavande",          name: "Suite Lavande (2 guests)",          price: "$300/night",          imageSrc: "http://img.b2bpic.net/free-photo/decorative-purple-plant-with-cushions-background_1203-1508.jpg",          imageAlt: "Luxury Suite Lavande"},
        {
          id: "suite-olivier",          name: "Suite Olivier (3 guests)",          price: "$350/night",          imageSrc: "http://img.b2bpic.net/free-photo/painting-inspiration-supplies-placed-ready-be-painted-canvas_482257-127568.jpg",          imageAlt: "Luxury Suite Olivier"},
        {
          id: "suite-jasmin",          name: "Suite Jasmin (2 guests)",          price: "$280/night",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-smiling-young-woman-sitting-bed-stretching_23-2148033319.jpg",          imageAlt: "Luxury Suite Jasmin"},
        {
          id: "suite-grenade",          name: "Suite Grenade (4 guests)",          price: "$400/night",          imageSrc: "http://img.b2bpic.net/free-photo/sofa-pillow_74190-1206.jpg",          imageAlt: "Luxury Suite Grenade"},
      ]}
      title="Our Luxury Suites"
      description="Discover unparalleled comfort and authenticity in our beautifully designed suites, each a sanctuary of peace, equipped with modern amenities and infused with Tunisian charm."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Traditional Breakfast",          description: "Savor authentic local flavors to start your day.",          buttonIcon: CheckCircle,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-young-caucasian-female-with-long-blonde-hair-nice-face-bright-earrings-white-suit_132075-9621.jpg",          imageAlt: "Traditional Tunisian Breakfast"},
        {
          title: "Garden & Olive Grove",          description: "Relax amidst serene nature and ancient olive trees.",          buttonIcon: CheckCircle,
          imageSrc: "http://img.b2bpic.net/free-photo/nature-moldova-shot-from-earth-full-moon_1268-16073.jpg",          imageAlt: "Lush Garden and Olive Grove"},
        {
          title: "Swimming Pool",          description: "Refresh yourself in our inviting outdoor pool.",          buttonIcon: CheckCircle,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-lying-chaises-near-swimming-pool-making-selfie-smiling_176420-4047.jpg",          imageAlt: "Guest House Swimming Pool"},
        {
          title: "Private Events",          description: "Host intimate gatherings and special occasions.",          buttonIcon: CheckCircle,
          imageSrc: "http://img.b2bpic.net/free-photo/rustic-candlestick-flower-arrangement-table-wedding-reception_637285-5619.jpg",          imageAlt: "Private Event Setup"},
        {
          title: "Weddings",          description: "Celebrate your special day in a picturesque setting.",          buttonIcon: CheckCircle,
          imageSrc: "http://img.b2bpic.net/free-photo/pair-wedding-high-heels-shoes-with-scarf-flower-bouquet-green-grass-park_23-2148187448.jpg",          imageAlt: "Wedding Ceremony Setup"},
        {
          title: "Table d'hôtes",          description: "Enjoy exquisite home-cooked Tunisian meals.",          buttonIcon: CheckCircle,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-eating-fried-fish-with-mashed-potatoes-vegetables-plate_141793-12535.jpg",          imageAlt: "Dining at Table d'hôtes"},
        {
          title: "Daily Housekeeping",          description: "Enjoy a pristine environment throughout your stay.",          buttonIcon: CheckCircle,
          imageSrc: "http://img.b2bpic.net/free-photo/spring-park-with-palm-trees-background-mountains-montenegro_501050-666.jpg",          imageAlt: "Clean Bedroom"},
        {
          title: "Free Parking",          description: "Convenient and secure parking for all guests.",          buttonIcon: CheckCircle,
          imageSrc: "http://img.b2bpic.net/free-photo/sunny-urban-landscape_23-2149504767.jpg",          imageAlt: "Parking Area"},
        {
          title: "Free WiFi",          description: "Stay connected with complimentary high-speed internet.",          buttonIcon: CheckCircle,
          imageSrc: "http://img.b2bpic.net/free-photo/river-passing-through-area-with-many-trees_23-2148293943.jpg",          imageAlt: "WiFi Icon"},
      ]}
      title="Experience Authentic Tunisian Hospitality"
      description="Dar Chennoufi offers a range of premium services designed to make your stay truly memorable and relaxing, blending traditional charm with modern comfort and natural tranquility."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah Johnson",          role: "Travel Blogger",          testimonial: "Dar Chennoufi is a hidden gem! The tranquility, authentic decor, and warm hospitality made our stay truly magical. We can't wait to return to this beautiful retreat.",          imageSrc: "http://img.b2bpic.net/free-photo/romantic-man-brings-breakfast-his-wife_23-2148379007.jpg",          imageAlt: "Sarah Johnson"},
        {
          id: "2",          name: "Michael Chen",          role: "Photographer",          testimonial: "Every corner of Dar Chennoufi tells a story. The garden is breathtaking, the suites are elegant, and the food is simply divine. A perfect escape for inspiration and relaxation.",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-beautiful-woman-her-handsome-boyfriend-woman-casual-summer-clothes-happy-cheerful-family-female-having-fun-couple-posing-street-background-sunglasseshugging-each-other_158538-24038.jpg",          imageAlt: "Michael Chen"},
        {
          id: "3",          name: "Emily Rodriguez",          role: "CEO of Luxe Escapes",          testimonial: "As a luxury travel expert, I am thoroughly impressed. Dar Chennoufi embodies authentic Tunisian charm with impeccable service. A truly world-class guest house experience.",          imageSrc: "http://img.b2bpic.net/free-photo/friends-traveling-discovering-new-places_23-2149124759.jpg",          imageAlt: "Emily Rodriguez"},
        {
          id: "4",          name: "David Kim",          role: "Architect",          testimonial: "The architectural details and the seamless blend of tradition with comfort at Dar Chennoufi are outstanding. It's more than a stay; it's an immersion into Tunisian culture.",          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-young-friends-outdoors_23-2148140798.jpg",          imageAlt: "David Kim"},
        {
          id: "5",          name: "Amina Ben Said",          role: "Local Artisan",          testimonial: "Even as a local, Dar Chennoufi offers a unique perspective on Tunisian hospitality. The serene environment and warm welcome make it a perfect local getaway.",          imageSrc: "http://img.b2bpic.net/free-photo/joyful-old-woman-with-blonde-cool-hairstyle-blouse-jeans-sitting-plaid-hammock-hugging-with-smiling-grey-haired-man-beach_197531-19097.jpg",          imageAlt: "Amina Ben Said"},
      ]}
      title="Guest Experiences"
      description="Hear what our cherished guests have to say about their unforgettable stays at Dar Chennoufi, highlighting our dedication to authentic hospitality."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Luxury Hotels Magazine",        "Tunisian Heritage Trust",        "Country Living Magazine",        "Exclusive Stays Guide",        "Travel & Leisure Arabia",        "Gastronomy Tunisia",        "Boutique Resorts Association"]}
      title="Recognized for Excellence"
      description="Proudly affiliated with leading hospitality organizations and featured in prestigious travel publications."
    />
  </div>

  <div id="booking" data-section="booking">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "plain"}}
      tag="Reservations & Contact"
      title="Plan Your Visit"
      description="For reservations and inquiries, please use the form below. Our dedicated team will contact you shortly to finalize your booking details. For immediate assistance, you can also reach us directly via WhatsApp at +216 52 502 053."
      tagAnimation="blur-reveal"
      inputPlaceholder="Your Email Address"
      buttonText="Send Inquiry"
      termsText="By sending an inquiry, you agree to our privacy policy and terms of service."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Dar Chennoufi"
      copyrightText="© 2024 Dar Chennoufi. All rights reserved."
      socialLinks={[
        {
          icon: Phone,
          href: "https://wa.me/21652502053",          ariaLabel: "WhatsApp"},
        {
          icon: Instagram,
          href: "#",          ariaLabel: "Instagram"},
        {
          icon: Facebook,
          href: "#",          ariaLabel: "Facebook"},
      ]}
    />
  </div>

  {/* Floating Social Contact Buttons */}
  <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-4 md:bottom-8 md:right-8">
    {/* WhatsApp Button */}
    <a
      href="https://wa.me/21652502053"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      title="WhatsApp"
      className="group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg cursor-pointer
                 transition-all duration-300 ease-in-out
                 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white
                 hover:scale-110 active:scale-95
                 backdrop-blur-sm bg-white/20 border border-white/30"
    >
      <WhatsApp size={24} />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-3 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        WhatsApp
      </span>
    </a>

    {/* Instagram Button */}
    <a
      href="https://www.instagram.com/dar_chennoufi/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      title="Instagram"
      className="group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg cursor-pointer
                 transition-all duration-300 ease-in-out
                 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] text-white
                 hover:scale-110 active:scale-95
                 backdrop-blur-sm bg-white/20 border border-white/30"
    >
      <Instagram size={24} />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-3 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Instagram
      </span>
    </a>

    {/* Facebook Button */}
    <a
      href="https://www.facebook.com/darchennoufi/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      title="Facebook"
      className="group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg cursor-pointer
                 transition-all duration-300 ease-in-out
                 bg-gradient-to-br from-[#4267B2] to-[#3B5998] text-white
                 hover:scale-110 active:scale-95
                 backdrop-blur-sm bg-white/20 border border-white/30"
    >
      <Facebook size={24} />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 px-3 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Facebook
      </span>
    </a>
  </div>

      </ReactLenis>
    </ThemeProvider>
  );
}