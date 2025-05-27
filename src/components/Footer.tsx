import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #2c3e50;
  padding: 40px 20px 60px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 320px;
  margin: 0 auto;
`;

const CoupleNames = styled.div`
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 300;
  margin-bottom: 1rem;
  font-family: "Georgia", serif;
`;

const WeddingDate = styled.div`
  font-size: 0.9rem;
  color: #bdc3c7;
  margin-bottom: 2rem;
  font-family: "Arial", sans-serif;
`;

const ThankYouMessage = styled.div`
  font-size: 0.85rem;
  color: #ecf0f1;
  line-height: 1.6;
  margin-bottom: 3rem;
  font-family: "Arial", sans-serif;
  font-weight: 300;
`;

const ShareSection = styled.div`
  margin: 2rem 0;
`;

const ShareTitle = styled.div`
  font-size: 0.7rem;
  color: #95a5a6;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-family: "Arial", sans-serif;
`;

const ShareButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const ShareButton = styled.button`
  padding: 10px 16px;
  border: 1px solid #34495e;
  background: transparent;
  color: #bdc3c7;
  font-size: 0.75rem;
  font-family: "Arial", sans-serif;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #34495e;
    color: #ffffff;
    border-color: #4a6741;
  }
`;

const Divider = styled.div`
  width: 60px;
  height: 1px;
  background: #34495e;
  margin: 3rem auto;
`;

const Copyright = styled.div`
  font-size: 0.7rem;
  color: #7f8c8d;
  font-family: "Arial", sans-serif;
  margin-top: 2rem;
`;

const HeartIcon = styled.span`
  color: #e74c3c;
  margin: 0 0.5rem;
  animation: heartbeat 2s ease-in-out infinite;

  @keyframes heartbeat {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`;

function Footer() {
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "호세 & 혜빈의 결혼식에 초대합니다";

    switch (platform) {
      case "kakao":
        // 카카오톡 공유 (실제 구현시 카카오 SDK 필요)
        alert("카카오톡으로 공유하기");
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("링크가 복사되었습니다!");
        break;
      case "sms":
        window.open(`sms:?body=${text} ${url}`);
        break;
      default:
        break;
    }
  };

  return (
    <FooterContainer>
      <ContentWrapper>
        <CoupleNames>호세 & 혜빈</CoupleNames>
        <WeddingDate>2025. 11. 16</WeddingDate>

        <ThankYouMessage>
          저희의 소중한 날에
          <br />
          함께해 주시는 모든 분들께
          <br />
          진심으로 감사드립니다.
        </ThankYouMessage>

        <Divider />

        <ShareSection>
          <ShareTitle>Share</ShareTitle>
          <ShareButtons>
            <ShareButton onClick={() => handleShare("kakao")}>
              카카오톡
            </ShareButton>
            <ShareButton onClick={() => handleShare("copy")}>
              링크복사
            </ShareButton>
            <ShareButton onClick={() => handleShare("sms")}>
              문자전송
            </ShareButton>
          </ShareButtons>
        </ShareSection>

        <Divider />

        <Copyright>
          Made with<HeartIcon>♥</HeartIcon>Love
          <br />© 2025 Jose & Hyebin Wedding
        </Copyright>
      </ContentWrapper>
    </FooterContainer>
  );
}

export default Footer;
