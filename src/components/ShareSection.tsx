import styled from "styled-components";
import { useState } from "react";

const ShareContainer = styled.div`
  padding: 3rem 2rem;
  text-align: center;
  background: #fff;
  border-top: 1px solid #f0f0f0;
`;

const ShareTitle = styled.h2`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

const ShareSubtitle = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 2.5rem;
  line-height: 1.5;
`;

const ShareButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 320px;
  margin: 0 auto;
`;

const ShareButton = styled.button<{ $bgColor: string; $hoverColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: white;
  background: ${({ $bgColor }) => $bgColor};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 52px;

  &:hover {
    background: ${({ $hoverColor }) => $hoverColor};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const IconWrapper = styled.span`
  font-size: 1.1rem;
`;

const CopyNotification = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 0.9rem;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  visibility: ${({ $show }) => ($show ? "visible" : "hidden")};
  transition: all 0.3s ease;
  z-index: 1000;
`;

function ShareSection() {
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const shareToKakao = () => {
    const currentUrl = window.location.href;
    const shareText = `💒 결혼식에 초대합니다\n\n${currentUrl}`;

    // 카카오톡 공유 (모바일에서 카카오톡 앱 실행)
    if (
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      const kakaoUrl = `kakaotalk://share?text=${encodeURIComponent(
        shareText
      )}`;
      window.location.href = kakaoUrl;
    } else {
      // 데스크톱에서는 클립보드에 복사
      navigator.clipboard.writeText(shareText).then(() => {
        setShowCopyNotification(true);
        setTimeout(() => setShowCopyNotification(false), 2000);
      });
    }
  };

  const copyInvitationLink = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      setShowCopyNotification(true);
      setTimeout(() => setShowCopyNotification(false), 2000);
    });
  };

  return (
    <>
      <ShareContainer>
        <ShareTitle>청첩장 공유하기</ShareTitle>
        <ShareSubtitle>소중한 분들과 기쁨을 나누어 주세요</ShareSubtitle>

        <ShareButtonsContainer>
          <ShareButton
            $bgColor="#FEE500"
            $hoverColor="#E6CE00"
            onClick={shareToKakao}
            style={{ color: "#3A1D1D" }}
          >
            <IconWrapper>💬</IconWrapper>
            카카오톡으로 청첩장 전하기
          </ShareButton>

          <ShareButton
            $bgColor="#4A90E2"
            $hoverColor="#357ABD"
            onClick={copyInvitationLink}
          >
            <IconWrapper>🔗</IconWrapper>
            청첩장 주소 복사하기
          </ShareButton>
        </ShareButtonsContainer>
      </ShareContainer>

      <CopyNotification $show={showCopyNotification}>
        📋 클립보드에 복사되었습니다
      </CopyNotification>
    </>
  );
}

export default ShareSection;
