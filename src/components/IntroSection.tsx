import styled from "styled-components";

const IntroContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem 3rem;
  overflow: hidden;
`;

const NamesSection = styled.div`
  margin-bottom: 2rem;
  z-index: 2;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const GroomBride = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.span`
  font-size: 0.9rem;
  color: #666;
  font-weight: 400;
  font-family: "Arial", sans-serif;
`;

const Name = styled.span`
  font-size: 1.8rem;
  font-weight: 300;
  color: #333;
  font-family: "Georgia", serif;
`;

const And = styled.span`
  font-size: 2rem;
  color: #999;
  font-weight: 300;
  font-style: italic;
  font-family: "Georgia", serif;
  margin: 0 0.5rem;
`;

const PhotoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  margin: 0 auto 2rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const CouplePhoto = styled.div`
  width: 100%;
  height: 450px;
  background: #f0f0f0;
  background-image: url("/mainPhoto.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`;

const SoftBokeh = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;

  /* 개별 보케 원 */
  & > span {
    position: absolute;
    display: block;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.9) 0%,
      rgba(255, 214, 230, 0.4) 40%,
      rgba(255, 214, 230, 0.15) 65%,
      rgba(255, 214, 230, 0) 70%
    );
    filter: blur(1px);
    opacity: 0.45;
    transform: translateZ(0);
    animation: drift var(--duration) ease-in-out infinite,
      twinkle calc(var(--duration) * 0.8) ease-in-out infinite;
    will-change: transform, opacity;
  }

  /* 위치, 크기, 타이밍 다양화 */
  & > span:nth-child(1) {
    --size: 90px;
    --duration: 10s;
    left: 6%;
    top: 18%;
    animation-delay: 0s;
  }
  & > span:nth-child(2) {
    --size: 70px;
    --duration: 12s;
    left: 72%;
    top: 24%;
    animation-delay: 1s;
  }
  & > span:nth-child(3) {
    --size: 60px;
    --duration: 11s;
    left: 18%;
    top: 62%;
    animation-delay: 0.6s;
  }
  & > span:nth-child(4) {
    --size: 100px;
    --duration: 13s;
    left: 58%;
    top: 68%;
    animation-delay: 1.2s;
  }
  & > span:nth-child(5) {
    --size: 55px;
    --duration: 9.5s;
    left: 38%;
    top: 14%;
    animation-delay: 0.3s;
  }
  & > span:nth-child(6) {
    --size: 80px;
    --duration: 12.5s;
    left: 82%;
    top: 58%;
    animation-delay: 0.9s;
  }
  & > span:nth-child(7) {
    --size: 65px;
    --duration: 10.5s;
    left: 10%;
    top: 78%;
    animation-delay: 1.4s;
  }
  & > span:nth-child(8) {
    --size: 85px;
    --duration: 14s;
    left: 68%;
    top: 8%;
    animation-delay: 0.2s;
  }

  @keyframes drift {
    0%,
    100% {
      transform: translate3d(0, 0, 0) scale(1);
    }
    50% {
      transform: translate3d(0, -14px, 0) scale(1.05);
    }
  }

  @keyframes twinkle {
    0%,
    100% {
      opacity: 0.35;
    }
    50% {
      opacity: 0.6;
    }
  }
`;

const DateSection = styled.div`
  margin: 2rem 0;
  z-index: 2;
`;

const MainDate = styled.div`
  font-size: 1.4rem;
  color: #333;
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-family: "Arial", sans-serif;
`;

const TimeInfo = styled.div`
  font-size: 1.1rem;
  color: #666;
  font-family: "Arial", sans-serif;
  margin-bottom: 1.5rem;
`;

const VenueInfo = styled.div`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  font-family: "Arial", sans-serif;
`;

const Divider = styled.div`
  width: 50px;
  height: 1px;
  background: #ddd;
  margin: 2rem auto;
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ccc;
  font-size: 0.7rem;
  z-index: 2;
  font-family: "Arial", sans-serif;
`;

const ScrollDot = styled.div`
  width: 4px;
  height: 4px;
  background: #ddd;
  border-radius: 50%;
  margin-top: 8px;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    100% {
      opacity: 0.3;
      transform: translateY(0);
    }
    50% {
      opacity: 1;
      transform: translateY(-5px);
    }
  }
`;

function IntroSection() {
  return (
    <IntroContainer>
      <SoftBokeh aria-hidden>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </SoftBokeh>

      <NamesSection>
        <NameContainer>
          <GroomBride>
            <Label>신랑</Label>
            <Name>주호세</Name>
          </GroomBride>
          <And>and</And>
          <GroomBride>
            <Label>신부</Label>
            <Name>임혜빈</Name>
          </GroomBride>
        </NameContainer>
      </NamesSection>

      <PhotoContainer>
        <CouplePhoto />
      </PhotoContainer>

      <DateSection>
        <MainDate>2025. 11. 16. (일)</MainDate>
        <TimeInfo>오후 1시 30분</TimeInfo>
        <Divider />
        <VenueInfo>수원시 팔달구 노블레스웨딩컨벤션</VenueInfo>
      </DateSection>

      <ScrollHint>
        <span>SCROLL</span>
        <ScrollDot />
      </ScrollHint>
    </IntroContainer>
  );
}

export default IntroSection;
