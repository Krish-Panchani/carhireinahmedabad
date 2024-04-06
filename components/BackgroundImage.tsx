"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CurrentSlideData, Data } from "./MySlider";
import Image from "next/image"; // Import Image from next/image

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

function BackgroundImage({ transitionData, currentSlideData }: Props) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && transitionData && (
        <motion.div
          key={transitionData.img}
          layoutId={transitionData.img}
          className="absolute left-0 top-0 z-10 h-full w-full"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
        >
          <Image
            alt="Transition Image"
            layout="fill"
            objectFit="cover"
            src={transitionData.img}
          />
        </motion.div>
      )}
      {isClient && currentSlideData && (
        <motion.div
          key={currentSlideData.data.img + "transition"}
          className="absolute left-0 top-0 h-full w-full"
          // style={{ opacity: currentSlideData.data.opacity }}
        >
          <Image
            alt="Current Image"
            layout="fill"
            objectFit="cover"
            src={currentSlideData.data.img}
          />
        </motion.div>
      )}
    </>
  );
}

export default BackgroundImage;