import styled from "styled-components";
import { useState, useEffect } from "react";
import Reveal from "./Reveal";

// Kakao SDK 타입 선언
declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (options: {
          objectType: string;
          content: {
            title: string;
            description: string;
            imageUrl: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          };
          social?: {
            likeCount: number;
            commentCount: number;
            sharedCount: number;
          };
          buttons: Array<{
            title: string;
            link: {
              mobileWebUrl: string;
              webUrl: string;
            };
          }>;
          installTalk: boolean;
        }) => void;
      };
    };
  }
}

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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
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
  const [kakaoReady, setKakaoReady] = useState(false);

  useEffect(() => {
    // 카카오 SDK 초기화
    const initKakao = () => {
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) {
          // 환경 변수에서 카카오 JavaScript Key 가져오기
          // 개발 중에는 더미 키 사용 (실제 배포 시에는 환경 변수 설정 필요)
          const kakaoKey =
            import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY ||
            "YOUR_JAVASCRIPT_KEY_HERE";

          if (kakaoKey === "YOUR_JAVASCRIPT_KEY_HERE") {
            console.warn(
              "카카오 JavaScript Key가 설정되지 않았습니다. .env 파일에 VITE_KAKAO_JAVASCRIPT_KEY를 설정해주세요."
            );
          }

          try {
            window.Kakao.init(kakaoKey);
            setKakaoReady(true);
          } catch (error) {
            console.error("카카오 SDK 초기화 실패:", error);
          }
        } else {
          console.log("이미 초기화됨");
          setKakaoReady(true);
        }
      } else {
        console.log("window.Kakao가 아직 로드되지 않음");
      }
    };

    // SDK 로드 확인
    if (window.Kakao) {
      initKakao();
    } else {
      console.log("window.Kakao 로드 대기 중...");
      const checkKakao = setInterval(() => {
        if (window.Kakao) {
          initKakao();
          clearInterval(checkKakao);
        }
      }, 100);

      // 10초 후 타임아웃
      const timeout = setTimeout(() => {
        console.error("카카오 SDK 로드 타임아웃 (10초)");
        clearInterval(checkKakao);
      }, 10000);

      return () => {
        clearInterval(checkKakao);
        clearTimeout(timeout);
      };
    }
  }, []);

  const shareToKakao = () => {
    if (!kakaoReady || !window.Kakao) {
      alert(
        "카카오톡 공유 기능을 불러오는 중입니다. 잠시 후 다시 시도해주세요."
      );
      return;
    }

    const currentUrl = window.location.href;
    const title =
      import.meta.env.VITE_WEDDING_TITLE || "💒 결혼식에 초대합니다";
    const description =
      import.meta.env.VITE_WEDDING_DESCRIPTION ||
      "소중한 분들과 함께 하고 싶은 저희의 결혼식에 초대합니다.";

    try {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: title,
          description: description,
          imageUrl: `${window.location.origin}/couple-main.jpg`,
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
        social: {
          likeCount: 0,
          commentCount: 0,
          sharedCount: 0,
        },
        buttons: [
          {
            title: "청첩장 보기",
            link: {
              mobileWebUrl: currentUrl,
              webUrl: currentUrl,
            },
          },
        ],
        // 카카오톡이 설치되어 있지 않은 경우 설치 페이지로 이동
        installTalk: true,
      });
    } catch (error) {
      console.error("카카오톡 공유 실패:", error);
      // 오류 발생 시 URL 복사로 대체
      copyInvitationLink();
    }
  };

  const shareToKakaoPC = () => {
    if (!kakaoReady || !window.Kakao) {
      alert(
        "카카오톡 공유 기능을 불러오는 중입니다. 잠시 후 다시 시도해주세요."
      );
      return;
    }

    const currentUrl = window.location.href;
    const title =
      import.meta.env.VITE_WEDDING_TITLE || "💒 결혼식에 초대합니다";
    const description =
      import.meta.env.VITE_WEDDING_DESCRIPTION ||
      "소중한 분들과 함께 하고 싶은 저희의 결혼식에 초대합니다.";

    try {
      // PC에서는 카카오톡 공유 후 QR 코드나 링크 복사 옵션 제공
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: title,
          description: description,
          imageUrl: `${window.location.origin}/couple-main.jpg`,
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
        social: {
          likeCount: 0,
          commentCount: 0,
          sharedCount: 0,
        },
        buttons: [
          {
            title: "청첩장 보기",
            link: {
              mobileWebUrl: currentUrl,
              webUrl: currentUrl,
            },
          },
        ],
        installTalk: true,
      });
    } catch (error) {
      console.error("카카오톡 공유 실패:", error);
      copyInvitationLink();
    }
  };

  const copyInvitationLink = () => {
    const currentUrl = window.location.href;

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(currentUrl)
        .then(() => {
          setShowCopyNotification(true);
          setTimeout(() => setShowCopyNotification(false), 2000);
        })
        .catch(() => {
          // 클립보드 API 실패 시 대체 방법
          fallbackCopyTextToClipboard(currentUrl);
        });
    } else {
      // 클립보드 API를 지원하지 않는 브라우저
      fallbackCopyTextToClipboard(currentUrl);
    }
  };

  const fallbackCopyTextToClipboard = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setShowCopyNotification(true);
      setTimeout(() => setShowCopyNotification(false), 2000);
    } catch (err) {
      console.error("복사 실패:", err);
      alert("링크 복사에 실패했습니다. 수동으로 복사해주세요: " + text);
    }

    document.body.removeChild(textArea);
  };

  // 모바일 기기 감지
  const isMobile =
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  return (
    <>
      <ShareContainer>
        <Reveal>
          <ShareTitle>청첩장 공유하기</ShareTitle>
        </Reveal>
        <Reveal delayMs={80}>
          <ShareSubtitle>소중한 분들과 기쁨을 나누어 주세요. </ShareSubtitle>
        </Reveal>

        <Reveal delayMs={140}>
          <ShareButtonsContainer>
            <ShareButton
              $bgColor="#FEE500"
              $hoverColor="#E6CE00"
              onClick={isMobile ? shareToKakao : shareToKakaoPC}
              disabled={!kakaoReady}
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
        </Reveal>
      </ShareContainer>

      <CopyNotification $show={showCopyNotification}>
        📋 클립보드에 복사되었습니다
      </CopyNotification>
    </>
  );
}

export default ShareSection;
