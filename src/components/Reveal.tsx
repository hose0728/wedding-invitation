import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type Direction = "up" | "down" | "left" | "right" | "fade";

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  distance?: number; // px
  durationMs?: number; // transition duration
  delayMs?: number; // transition delay
  threshold?: number; // IntersectionObserver threshold
  once?: boolean; // animate only once
}

const Wrapper = styled.div<{
  $visible: boolean;
  $direction: Direction;
  $distance: number;
  $durationMs: number;
  $delayMs: number;
}>`
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: ${(p) => {
    if (p.$visible || p.$direction === "fade") return "translate3d(0,0,0)";
    const d = p.$distance;
    switch (p.$direction) {
      case "up":
        return `translate3d(0, ${d}px, 0)`;
      case "down":
        return `translate3d(0, -${d}px, 0)`;
      case "left":
        return `translate3d(${d}px, 0, 0)`;
      case "right":
        return `translate3d(-${d}px, 0, 0)`;
      default:
        return "translate3d(0,0,0)";
    }
  }};
  transition: transform ${(p) => p.$durationMs}ms ease,
    opacity ${(p) => p.$durationMs}ms ease;
  transition-delay: ${(p) => p.$delayMs}ms;
  will-change: transform, opacity;
`;

function Reveal({
  children,
  direction = "up",
  distance = 24,
  durationMs = 700,
  delayMs = 0,
  threshold = 0.15,
  once = true,
}: RevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <Wrapper
      ref={ref}
      $visible={visible}
      $direction={direction}
      $distance={distance}
      $durationMs={durationMs}
      $delayMs={delayMs}
    >
      {children}
    </Wrapper>
  );
}

export default Reveal;
