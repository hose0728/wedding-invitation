import styled from "styled-components";

const IntroContainer = styled.div`
  position: relative;
  height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px 20px;
  overflow: hidden;
`;

const BackgroundDecoration = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(248, 249, 250, 0.8) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 20%;
    left: 10%;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle,
      rgba(245, 245, 245, 0.3) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 20%;
    right: 10%;
    width: 150px;
    height: 150px;
    background: radial-gradient(
      circle,
      rgba(250, 250, 250, 0.4) 0%,
      transparent 70%
    );
    border-radius: 50%;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 320px;
  width: 100%;
`;

const WeddingLabel = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: #999999;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  font-family: "Arial", sans-serif;
`;

const CoupleNames = styled.div`
  margin: 3rem 0;
`;

const NamesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0;
`;

const Name = styled.span`
  font-size: 2.2rem;
  font-weight: 300;
  color: #333333;
  font-family: "Georgia", serif;

  @media (max-width: 430px) {
    font-size: 1.8rem;
  }
`;

const Ampersand = styled.span`
  font-size: 1.5rem;
  color: #cccccc;
  font-weight: 300;
  font-style: italic;
  font-family: "Georgia", serif;
`;

const WeddingDate = styled.div`
  margin: 4rem 0;
`;

const DateContainer = styled.div`
  border: 1px solid #eeeeee;
  padding: 2rem 1.5rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
`;

const MainDate = styled.div`
  font-size: 1.1rem;
  color: #666666;
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-family: "Arial", sans-serif;
`;

const DateNumbers = styled.div`
  font-size: 2rem;
  color: #333333;
  font-weight: 300;
  margin: 1rem 0;
  font-family: "Georgia", serif;

  @media (max-width: 430px) {
    font-size: 1.6rem;
  }
`;

const TimeAndVenue = styled.div`
  font-size: 0.9rem;
  color: #888888;
  line-height: 1.6;
  margin-top: 1rem;
  font-family: "Arial", sans-serif;
`;

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background: #dddddd;
  margin: 3rem auto;
`;

const InvitationMessage = styled.div`
  font-size: 0.85rem;
  color: #777777;
  line-height: 1.8;
  font-weight: 300;
  font-family: "Arial", sans-serif;
  max-width: 280px;
  margin: 0 auto;
`;

const ScrollHint = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #cccccc;
  font-size: 0.7rem;
  z-index: 2;
  font-family: "Arial", sans-serif;
`;

const ScrollDot = styled.div`
  width: 4px;
  height: 4px;
  background: #dddddd;
  border-radius: 50%;
  margin-top: 8px;
  animation: fadeInOut 2s infinite;

  @keyframes fadeInOut {
    0%,
    100% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
  }
`;

function IntroSection() {
  return (
    <IntroContainer>
      <BackgroundDecoration />

      <ContentWrapper>
        <WeddingLabel>Wedding Invitation</WeddingLabel>

        <CoupleNames>
          <NamesContainer>
            <Name>호세</Name>
            <Ampersand>&</Ampersand>
            <Name>혜빈</Name>
          </NamesContainer>
        </CoupleNames>

        <WeddingDate>
          <DateContainer>
            <MainDate>2025년 11월 16일 일요일</MainDate>
            <DateNumbers>11.16</DateNumbers>
            <TimeAndVenue>
              오후 1시 30분
              <br />
              수원시 팔달구 노블레스웨딩컨벤션
            </TimeAndVenue>
          </DateContainer>
        </WeddingDate>

        <Divider />

        <InvitationMessage>
          두 사람이 사랑으로 하나가 되는
          <br />
          소중한 순간에 함께해 주세요
        </InvitationMessage>
      </ContentWrapper>

      <ScrollHint>
        <span>SCROLL</span>
        <ScrollDot />
      </ScrollHint>
    </IntroContainer>
  );
}

export default IntroSection;
