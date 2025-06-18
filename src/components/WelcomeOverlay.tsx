import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// 반짝이는 애니메이션
const sparkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`;

// 오버레이 스타일
const Overlay = styled.div<{ $fade: boolean }>`
  position: fixed;
  z-index: 2000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #ffeef8 0%, #f8f9fb 100%);
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  transition: opacity 0.8s;
  opacity: ${({ $fade }) => ($fade ? 0 : 1)};
  visibility: ${({ $fade }) => ($fade ? "hidden" : "visible")};
`;

const WelcomeContent = styled.div`
  max-width: 300px;
`;

const WelcomeEmoji = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  animation: ${sparkle} 2s infinite;
`;

const WelcomeTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  color: #333;
  margin-bottom: 1rem;
  font-family: "Georgia", serif;
`;

const WelcomeSubtitle = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-family: "Arial", sans-serif;
`;

const LoadingDots = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const Dot = styled.div<{ $delay: number }>`
  width: 8px;
  height: 8px;
  background: #ddd;
  border-radius: 50%;
  animation: ${sparkle} 1.5s infinite;
  animation-delay: ${({ $delay }) => $delay}s;
`;

function WelcomeOverlay() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // 1.5초 후 fade-out 시작
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 1500);

    // 2.5초 후 완전히 숨김
    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <Overlay $fade={fade}>
      <WelcomeContent>
        <WelcomeEmoji>💒</WelcomeEmoji>
        <WelcomeTitle>결혼식에 초대합니다</WelcomeTitle>
        <WelcomeSubtitle>
          소중한 여러분을 저희의
          <br />
          특별한 날에 초대하고 싶습니다
        </WelcomeSubtitle>
        <LoadingDots>
          <Dot $delay={0} />
          <Dot $delay={0.2} />
          <Dot $delay={0.4} />
        </LoadingDots>
      </WelcomeContent>
    </Overlay>
  );
}

export default WelcomeOverlay;
