import styled from "styled-components";

const LocationContainer = styled.div`
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

const VenueInfo = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const VenueName = styled.h3`
  font-size: 1.3rem;
  color: #333333;
  font-weight: 400;
  margin-bottom: 1rem;
  font-family: "Georgia", serif;
`;

const VenueAddress = styled.div`
  font-size: 0.9rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-family: "Arial", sans-serif;
`;

const VenuePhone = styled.div`
  font-size: 0.85rem;
  color: #888888;
  font-family: "Arial", sans-serif;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 200px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  color: #adb5bd;
  font-size: 0.8rem;
  font-family: "Arial", sans-serif;
  position: relative;

  &::before {
    content: "🗺️";
    display: block;
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
`;

const TransportInfo = styled.div`
  margin-top: 3rem;
`;

const TransportSection = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(248, 249, 250, 0.8);
  border-radius: 8px;
`;

const TransportTitle = styled.div`
  font-size: 0.8rem;
  color: #666666;
  font-weight: 500;
  margin-bottom: 1rem;
  font-family: "Arial", sans-serif;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TransportDetails = styled.div`
  font-size: 0.8rem;
  color: #777777;
  line-height: 1.6;
  font-family: "Arial", sans-serif;
`;

const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
`;

const ActionButton = styled.button`
  padding: 12px 16px;
  border: 1px solid #dddddd;
  background: #ffffff;
  color: #666666;
  font-size: 0.8rem;
  font-family: "Arial", sans-serif;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #f8f9fa;
    border-color: #cccccc;
  }

  &:active {
    transform: translateY(1px);
  }
`;

function LocationMap() {
  return (
    <LocationContainer>
      <ContentWrapper>
        <SectionTitle>Location</SectionTitle>

        <VenueInfo>
          <VenueName>노블레스웨딩컨벤션</VenueName>
          <VenueAddress>
            경기도 수원시 팔달구 인계로 178
            <br />
            5층 그랜드볼룸
          </VenueAddress>
          <VenuePhone>TEL. 031-123-4567</VenuePhone>
        </VenueInfo>

        <MapPlaceholder>지도가 여기에 표시됩니다</MapPlaceholder>

        <ActionButtons>
          <ActionButton>길찾기</ActionButton>
          <ActionButton>주소복사</ActionButton>
        </ActionButtons>

        <TransportInfo>
          <TransportSection>
            <TransportTitle>🚇 지하철</TransportTitle>
            <TransportDetails>
              1호선 수원역 3번 출구
              <br />
              도보 10분 또는 버스 5분
            </TransportDetails>
          </TransportSection>

          <TransportSection>
            <TransportTitle>🚌 버스</TransportTitle>
            <TransportDetails>
              수원역 앞 정류장
              <br />
              11, 13, 36, 39번 버스 이용
              <br />
              '인계동사거리' 하차 후 도보 3분
            </TransportDetails>
          </TransportSection>

          <TransportSection>
            <TransportTitle>🚗 자가용</TransportTitle>
            <TransportDetails>
              건물 지하 주차장 이용 가능
              <br />
              주차 요금 무료 (2시간)
            </TransportDetails>
          </TransportSection>
        </TransportInfo>
      </ContentWrapper>
    </LocationContainer>
  );
}

export default LocationMap;
