import Image from "next/image";
import Hero from "./components/Hero";
import VideoContainer from "./components/VideoContainer";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <VideoContainer></VideoContainer>
      <AboutUs></AboutUs>
    </div>
  );
}
