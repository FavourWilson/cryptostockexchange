import ChartOne from "@/components/molecules/landing/ChartOne";
import SmallCard from "@/components/molecules/landing/SmallCard";
import Testimonial from "@/components/organisms/landing/Testimonial";
import Blog from "@/components/organisms/landing/Blog";
import CopyTrade from "@/components/organisms/landing/CopyTrade";
import CopyTradeTwo from "@/components/organisms/landing/CopyTradeTwo";
import CopyTradeThree from "@/components/organisms/landing/CopyTradeThree";
import CtaOne from "@/components/organisms/landing/CtaOne";
import Faqs from "@/components/organisms/landing/Faqs";
import FeaturesOne from "@/components/organisms/landing/FeaturesOne";
import Footer from "@/components/organisms/landing/Footer";
import Hero from "@/components/organisms/landing/Hero";
import Nav from "@/components/molecules/landing/Nav";
import MobileNav from "@/components/molecules/landing/MobileNav";

export default function Home() {
  return (
    <>
      <Nav />
      <MobileNav />
      <Hero />
      {/* <SmallCard ./> */}
      <FeaturesOne />
      <CopyTrade />
      <CopyTradeTwo />
      <CopyTradeThree />
      <ChartOne />
      <Testimonial />
      <CtaOne />
      <Faqs />
      <Blog />
      <Footer />
    </>
  );
}
