"use client";
import { useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function Model() {
  const shape = useRef();

  function onLoad(spline) {
    shape.current = spline.findObjectByName("Sphere");
  }
  return (
    <>
      <div className="fixed -z-10 h-full w-full top-0 left-0">
        <Spline
          style={{ backgroundColor: "#ffffff0", width: "100%" }}
          scene="https://prod.spline.design/CA69SVMxHFZz2XjX/scene.splinecode"
          onLoad={onLoad}
        />
      </div>
    </>
  );
}
