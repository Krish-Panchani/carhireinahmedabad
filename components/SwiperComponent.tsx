"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DynamicSwiperComponent = dynamic(() => import("./SwiperComponent"), { ssr: false });

// Your component that uses SwiperComponent
const DemoSlider = () => {
  // Render DynamicSwiperComponent only on the client side
  return (
    <div>
      <DynamicSwiperComponent />
    </div>
  );
};

export default DemoSlider;
