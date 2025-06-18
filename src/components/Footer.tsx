import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #fff;
  padding: 3rem 2rem 2rem;
  text-align: center;
  border-top: 1px solid #f0f0f0;
`;

const ContentWrapper = styled.div`
  max-width: 320px;
  margin: 0 auto;
`;

const ThankYouMessage = styled.div`
  font-size: 1rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-family: "Arial", sans-serif;
  font-weight: 300;
`;

const CoupleNames = styled.div`
  font-size: 1.1rem;
  color: #333;
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-family: "Georgia", serif;
`;

const WeddingDate = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 2rem;
  font-family: "Arial", sans-serif;
`;

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background: #ddd;
  margin: 2rem auto;
`;

const Copyright = styled.div`
  font-size: 0.75rem;
  color: #999;
  font-family: "Arial", sans-serif;
  margin-top: 1.5rem;
`;

const HeartIcon = styled.span`
  color: #ff6b9d;
  margin: 0 0.3rem;
  animation: heartbeat 2.5s ease-in-out infinite;

  @keyframes heartbeat {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.8;
    }
    50% {
      transform: scale(1.15);
      opacity: 1;
    }
  }
`;

const FloralDecoration = styled.div`
  font-size: 1.2rem;
  color: #e8e8e8;
  margin: 1rem 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <ContentWrapper>
        <ThankYouMessage>
          저희의 소중한 날에
          <br />
          함께해 주시는 모든 분들께
          <br />
          진심으로 감사드립니다
        </ThankYouMessage>

        <Divider />

        <FloralDecoration>🌸 🌿 🌸</FloralDecoration>

        <CoupleNames>주호세 & 임혜빈</CoupleNames>
        <WeddingDate>2025. 11. 16</WeddingDate>

        <Copyright>
          Made with<HeartIcon>♥</HeartIcon>Love
          <br />© 2025 Jose & Hyebin Wedding
        </Copyright>
      </ContentWrapper>
    </FooterContainer>
  );
}

export default Footer;
