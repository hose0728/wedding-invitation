import styled from "styled-components";
import { useState } from "react";

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
  padding: 0 20px;
`;

const PhotoScroll = styled.div<{ $translateX: number }>`
  display: flex;
  transition: transform 0.4s ease;
  transform: translateX(${(props) => props.$translateX}px);
  gap: 20px;
  padding: 0 10px;
`;

const PhotoItem = styled.div`
  min-width: 320px;
  height: 400px;
  background: #e9ecef;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adb5bd;
  font-size: 0.8rem;
  font-family: "Arial", sans-serif;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
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

  // 사진 데이터 배열
  const photos = [
    { id: 1, type: "main", title: "Main Photo" },
    { id: 2, type: "regular", title: "Photo 1" },
    { id: 3, type: "regular", title: "Photo 2" },
    { id: 4, type: "large", title: "Featured Photo" },
    { id: 5, type: "regular", title: "Photo 3" },
    { id: 6, type: "regular", title: "Photo 4" },
    { id: 7, type: "regular", title: "Photo 5" },
    { id: 8, type: "regular", title: "Photo 6" },
    { id: 9, type: "regular", title: "Photo 7" },
  ];

  const scrollStep = 340; // 한 번에 스크롤할 픽셀 수 (사진 너비 + 간격)
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

  return (
    <GalleryContainer>
      <ContentWrapper>
        <SectionTitle>Our Gallery</SectionTitle>

        <ScrollContainer>
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
                <PhotoPlaceholder>{photo.title}</PhotoPlaceholder>
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
          {photos.map((_, index) => (
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
