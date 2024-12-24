import CardsSection from "@/components/CardsSection";
import CarouselSection from "@/components/CarouselSection";
import Developer from "@/components/Developer";
import Downloadapp from "@/components/Downloadapp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DownloadsSection from "@/components/DownloadsSection";
import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <CardsSection />
      {/* <CarouselSection /> */}
      {/* <Developer/> */}
      <ReviewsSection />
      <DownloadsSection />
      <Downloadapp/>
      <Footer/>
    </>
  );
}
