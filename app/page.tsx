
import Image from "next/image";
import dataSlider from "./slider-data.json";
import MySlider from "@/components/MySlider";


export default function Home() {
  return (
   <>
    {/* <DemoSlider data={dataSlider} /> */}
    <MySlider />
   </>
  );
}
