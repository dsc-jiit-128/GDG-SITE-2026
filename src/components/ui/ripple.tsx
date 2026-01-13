"use client";

import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import { cn } from "@/lib/utils";
import "./Ripple.css";

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div className={cn("ripple-container", className)} {...props}>
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        
        return (
          <div
            key={i}
            className="ripple-circle"
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                borderStyle: "solid",
                borderColor: `rgba(255, 255, 255, ${opacity})`,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";