import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const GalleryContainer = styled.div`
  background: #fff;
  padding: 60px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: #999999;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 3rem;
  text-align: center;
  font-family: "Arial", sans-serif;
`;

const ScrollContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  padding: 0;
`;

const PhotoScroll = styled.div<{ $translateX: number }>`
  display: flex;
  transition: transform 0.4s ease;
  transform: translateX(${(props) => props.$translateX}px);
  gap: 0;
  padding: 0;
`;

const PhotoItem = styled.div`
  min-width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const PhotoInner = styled.div`
  width: 90%; /* 사진 카드 가로폭을 줄여서 여백 확보 */
  height: 100%;
  margin: 0 auto;
  background: #e9ecef;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const PhotoPlaceholder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  &::before {
    content: "📷";
    display: block;
    font-size: 2rem;
    margin-bottom: 0.8rem;
  }
`;

const ScrollButton = styled.button<{ $direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.$direction === "left" ? "left: 10px;" : "right: 10px;")}
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  transition: all 0.2s ease;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-50%) scale(1.05);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: translateY(-50%);
  }
`;

const ScrollIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1.5rem;
`;

const Dot = styled.div<{ $active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => (props.$active ? "#999999" : "#e0e0e0")};
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: ${(props) => (props.$active ? "#999999" : "#cccccc")};
  }
`;

const GalleryNote = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 0.8rem;
  color: #888888;
  line-height: 1.6;
  font-family: "Arial", sans-serif;
`;

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollStep, setScrollStep] = useState(0); // 컨테이너 너비(=사진 한 장)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // 사진 데이터 배열 - 실제 이미지 경로 추가
  const photos = [
    {
      id: 1,
      type: "main",
      title: "Main Photo",
      src: "/photo1.jpg", // 실제 이미지 경로
    },
    {
      id: 2,
      type: "regular",
      title: "Photo 1",
      src: "/photo2.jpg", // 실제 이미지 경로
    },
    {
      id: 3,
      type: "regular",
      title: "Photo 2",
      src: "/photo3.jpg", // 실제 이미지 경로
    },
    {
      id: 4,
      type: "large",
      title: "Featured Photo",
      src: "/photo4.jpg", // 실제 이미지 경로
    },
    {
      id: 5,
      type: "regular",
      title: "Photo 3",
      src: "/photo5.jpg", // 실제 이미지 경로
    },
    {
      id: 6,
      type: "regular",
      title: "Photo 4",
      src: "/photo6.jpg", // 실제 이미지 경로
    },
    {
      id: 7,
      type: "regular",
      title: "Photo 5",
      src: "/photo7.jpg", // 실제 이미지 경로
    },
    {
      id: 8,
      type: "regular",
      title: "Photo 6",
      src: "/photo8.jpg", // 실제 이미지 경로
    },
    {
      id: 9,
      type: "regular",
      title: "Photo 7",
      src: "/photo9.jpg", // 실제 이미지 경로
    },
  ];

  const maxIndex = Math.max(0, photos.length - 1);

  const handleScroll = (direction: "left" | "right") => {
    if (direction === "left" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === "right" && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  // 컨테이너 너비를 스크롤 스텝으로 사용하여 한 번에 한 장씩 이동
  useEffect(() => {
    let resizeTimer: number | null = null;

    const calculateStep = () => {
      const containerWidth =
        scrollContainerRef.current?.clientWidth ?? window.innerWidth;
      const newStep = Math.max(0, Math.round(containerWidth));
      setScrollStep(newStep);

      const nextMaxIndex = Math.max(0, photos.length - 1);
      if (currentIndex > nextMaxIndex) {
        setCurrentIndex(nextMaxIndex);
      }
    };

    const onResize = () => {
      if (resizeTimer) window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(calculateStep, 100);
    };

    calculateStep();
    window.addEventListener("resize", onResize);
    return () => {
      if (resizeTimer) window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GalleryContainer>
      <ContentWrapper>
        <SectionTitle>Our Gallery</SectionTitle>

        <ScrollContainer ref={scrollContainerRef}>
          <ScrollButton
            $direction="left"
            onClick={() => handleScroll("left")}
            disabled={currentIndex === 0}
          >
            ←
          </ScrollButton>

          <PhotoScroll $translateX={-currentIndex * scrollStep}>
            {photos.map((photo) => (
              <PhotoItem key={photo.id}>
                <PhotoInner>
                  {photo.src ? (
                    <PhotoImage src={photo.src} alt={photo.title} />
                  ) : (
                    <PhotoPlaceholder>{photo.title}</PhotoPlaceholder>
                  )}
                </PhotoInner>
              </PhotoItem>
            ))}
          </PhotoScroll>

          <ScrollButton
            $direction="right"
            onClick={() => handleScroll("right")}
            disabled={currentIndex === maxIndex}
          >
            →
          </ScrollButton>
        </ScrollContainer>

        <ScrollIndicator>
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <Dot
              key={index}
              $active={index === currentIndex}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </ScrollIndicator>

        <GalleryNote>
          소중한 순간들을 담은 사진들입니다.
          <br />더 많은 사진은 결혼식 당일 공유해드릴게요.
        </GalleryNote>
      </ContentWrapper>
    </GalleryContainer>
  );
}

export default Gallery;
