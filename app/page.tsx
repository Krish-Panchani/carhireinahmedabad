import DemoSlider from "@/components/Swiper";
import Image from "next/image";
import dataSlider from "./slider-data.json";


export default function Home() {
  return (
   <>
    <DemoSlider data={dataSlider} />
   </>
  );
}
