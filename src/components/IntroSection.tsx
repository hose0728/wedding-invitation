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
  background-image: url("/couple-main.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  /* 사진이 없을 때 플레이스홀더 */
  &::before {
    content: "📸";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4rem;
    opacity: 0.3;
  }

  &::after {
    content: "커플 사진을 추가해주세요";
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 1rem;
    color: #999;
    font-family: "Arial", sans-serif;
  }
`;

const FloatingPetals = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;

  &::before,
  &::after {
    content: "🌸";
    position: absolute;
    font-size: 1.5rem;
    opacity: 0.6;
    animation: float 6s ease-in-out infinite;
  }

  &::before {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }

  &::after {
    top: 60%;
    right: 15%;
    animation-delay: 3s;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(10deg);
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
      <FloatingPetals />

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
        <MainDate>2025. 11. 16.</MainDate>
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
