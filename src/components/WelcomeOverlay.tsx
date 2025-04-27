import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

// fade-out 애니메이션 정의
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

// 오버레이 스타일
const Overlay = styled.div<{ $fade: boolean }>`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #111;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  font-weight: bold;
  letter-spacing: 2px;
  transition: opacity 0.8s;
  opacity: 1;
  ${({ $fade }) =>
    $fade &&
    `
    animation: ${fadeOut} 1.2s forwards;
    pointer-events: none;
  `}
`;

function WelcomeOverlay() {
  const [fade, setFade] = useState(false);
  const [hide, setHide] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1.5초 후 fade-out 시작
    const timer = setTimeout(() => setFade(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!fade) return;
    const handleAnimationEnd = () => setHide(true);
    const node = overlayRef.current;
    if (node) node.addEventListener("animationend", handleAnimationEnd);
    return () => {
      if (node) node.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [fade]);

  if (hide) return null;
  return (
    <Overlay ref={overlayRef} $fade={fade}>
      Welcome to our Wedding
    </Overlay>
  );
}
export default WelcomeOverlay;
