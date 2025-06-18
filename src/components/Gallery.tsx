import styled from "styled-components";

const GalleryContainer = styled.div`
  background: #fff;
  padding: 60px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 320px;
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

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 2rem;
`;

const PhotoItem = styled.div`
  aspect-ratio: 1;
  background: #e9ecef;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adb5bd;
  font-size: 0.7rem;
  font-family: "Arial", sans-serif;
  position: relative;
  overflow: hidden;

  &:nth-child(1) {
    grid-column: 1 / 3;
    aspect-ratio: 2 / 1;
  }

  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
  }
`;

const LargePhotoItem = styled(PhotoItem)`
  grid-column: 1 / 3;
  aspect-ratio: 4 / 3;
  margin: 1rem 0;
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
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
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
  return (
    <GalleryContainer>
      <ContentWrapper>
        <SectionTitle>Our Gallery</SectionTitle>

        <PhotoGrid>
          <PhotoItem>
            <PhotoPlaceholder>Main Photo</PhotoPlaceholder>
          </PhotoItem>

          <PhotoItem>
            <PhotoPlaceholder>Photo 1</PhotoPlaceholder>
          </PhotoItem>

          <PhotoItem>
            <PhotoPlaceholder>Photo 2</PhotoPlaceholder>
          </PhotoItem>
        </PhotoGrid>

        <LargePhotoItem>
          <PhotoPlaceholder>Featured Photo</PhotoPlaceholder>
        </LargePhotoItem>

        <PhotoGrid>
          <PhotoItem>
            <PhotoPlaceholder>Photo 3</PhotoPlaceholder>
          </PhotoItem>

          <PhotoItem>
            <PhotoPlaceholder>Photo 4</PhotoPlaceholder>
          </PhotoItem>

          <PhotoItem>
            <PhotoPlaceholder>Photo 5</PhotoPlaceholder>
          </PhotoItem>

          <PhotoItem>
            <PhotoPlaceholder>Photo 6</PhotoPlaceholder>
          </PhotoItem>

          <PhotoItem>
            <PhotoPlaceholder>Photo 7</PhotoPlaceholder>
          </PhotoItem>
        </PhotoGrid>

        <GalleryNote>
          소중한 순간들을 담은 사진들입니다.
          <br />더 많은 사진은 결혼식 당일 공유해드릴게요.
        </GalleryNote>
      </ContentWrapper>
    </GalleryContainer>
  );
}

export default Gallery;
