import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CurrentSlideData, Data } from "./MySlider";

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
        <div className="absolute left-0 top-0 z-10 h-full w-full">
          <Image
            alt="Transition Image"
            layout="fill"
            objectFit="cover"
            src={transitionData.img}
          />
        </div>
      )}
      {isClient && currentSlideData && (
        <div className="absolute left-0 top-0 h-full w-full">
          <Image
            alt="Current Image"
            layout="fill"
            objectFit="cover"
            src={currentSlideData.data.img}
          />
        </div>
      )}
    </>
  );
}

export default BackgroundImage;
