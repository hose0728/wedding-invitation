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
  justify-content: center;
  gap: 0.5rem;
`;

const BusRouteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: left;
`;

const BusRoute = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 0.8rem;
  border-radius: 6px;
  border-left: 3px solid #4a90e2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const RouteFrom = styled.div`
  font-weight: 500;
  color: #333;
  font-size: 0.75rem;
  margin-bottom: 0.3rem;
`;

const RouteInfo = styled.div`
  font-size: 0.7rem;
  color: #666;
  line-height: 1.4;
`;

const BusNumbers = styled.span`
  color: #4a90e2;
  font-weight: 500;
`;

const Duration = styled.span`
  color: #888;
  font-style: italic;
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

const CarInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: left;
`;

const CarInfoCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 0.8rem;
  border-radius: 6px;
  border-left: 3px solid #28a745;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CarInfoTitle = styled.div`
  font-weight: 500;
  color: #333;
  font-size: 0.75rem;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const CarInfoContent = styled.div`
  font-size: 0.7rem;
  color: #666;
  line-height: 1.4;
`;

const HighlightText = styled.span`
  color: #28a745;
  font-weight: 500;
`;

const DirectionStep = styled.div`
  margin: 0.2rem 0;
  padding-left: 0.5rem;
  border-left: 2px solid #e9ecef;
`;

const SubwayInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  text-align: left;
`;

const SubwayInfoCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  padding: 0.8rem;
  border-radius: 6px;
  border-left: 3px solid #6c63ff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SubwayInfoTitle = styled.div`
  font-weight: 500;
  color: #333;
  font-size: 0.75rem;
  margin-bottom: 0.3rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const SubwayInfoContent = styled.div`
  font-size: 0.7rem;
  color: #666;
  line-height: 1.4;
`;

const SubwayLine = styled.span`
  color: #6c63ff;
  font-weight: 500;
`;

const ShuttleInfo = styled.span`
  color: #ff6b35;
  font-weight: 500;
`;

function LocationMap() {
  return (
    <LocationContainer>
      <ContentWrapper>
        <SectionTitle>Location</SectionTitle>

        <VenueInfo>
          <VenueName>노블레스웨딩컨벤션</VenueName>
          <VenueAddress>
            경기도 수원시 팔달구 팔달문로 128
            <br />
            5층 노블레스홀
          </VenueAddress>
          <VenuePhone>TEL. 031-215-7000</VenuePhone>
        </VenueInfo>

        <MapPlaceholder>지도가 여기에 표시됩니다</MapPlaceholder>

        <ActionButtons>
          <ActionButton>길찾기</ActionButton>
          <ActionButton>주소복사</ActionButton>
        </ActionButtons>

        <TransportInfo>
          <TransportSection>
            <TransportTitle>🚇 지하철</TransportTitle>
            <SubwayInfoList>
              <SubwayInfoCard>
                <SubwayInfoTitle>🚊 수인분당선</SubwayInfoTitle>
                <SubwayInfoContent>
                  <SubwayLine>수원시청역 5번출구</SubwayLine>에서
                  <br />
                  <ShuttleInfo>셔틀버스 운행</ShuttleInfo>
                  <br />
                  30분 간격으로 운행됩니다
                </SubwayInfoContent>
              </SubwayInfoCard>
            </SubwayInfoList>
          </TransportSection>

          <TransportSection>
            <TransportTitle>🚌 버스</TransportTitle>
            <BusRouteList>
              <BusRoute>
                <RouteFrom>🚉 수원역 (4번출구)</RouteFrom>
                <RouteInfo>
                  동수원병원 하차:{" "}
                  <BusNumbers>10, 11-1, 37, 720-2, 83-1</BusNumbers>
                  <br />
                  <Duration>약 20분 소요</Duration>
                </RouteInfo>
              </BusRoute>

              <BusRoute>
                <RouteFrom>🚌 수원종합버스터미널</RouteFrom>
                <RouteInfo>
                  수병원 하차: <BusNumbers>300, 300-1, 80, 82-1, 88</BusNumbers>
                  <br />
                  <Duration>약 20분 소요</Duration>
                </RouteInfo>
              </BusRoute>

              <BusRoute>
                <RouteFrom>🚇 망포역 (4번출구)</RouteFrom>
                <RouteInfo>
                  동수원병원 하차: <BusNumbers>61, 62-1</BusNumbers>
                  <br />
                  <Duration>약 30분 소요</Duration>
                </RouteInfo>
              </BusRoute>

              <BusRoute>
                <RouteFrom>🌟 서울 주요역</RouteFrom>
                <RouteInfo>
                  강남역(7번출구) → 월드컵경기장:{" "}
                  <BusNumbers>3002, 3007, 3008</BusNumbers>
                  <br />
                  사당역(4번출구) → 월드컵경기장:{" "}
                  <BusNumbers>7000, 7001</BusNumbers>
                  <br />
                  <Duration>약 1시간 소요</Duration>
                </RouteInfo>
              </BusRoute>
            </BusRouteList>
          </TransportSection>

          <TransportSection>
            <TransportTitle>🚗 자가용</TransportTitle>
            <CarInfoList>
              <CarInfoCard>
                <CarInfoTitle>🅿️ 주차장 안내</CarInfoTitle>
                <CarInfoContent>
                  <HighlightText>본건물</HighlightText>: 지하2F, 지하1F, 1F, 2F,
                  3F
                  <br />
                  <HighlightText>주차타워</HighlightText>: 4층 건물
                  <br />※ 주차요원의 안내를 받으세요
                </CarInfoContent>
              </CarInfoCard>

              <CarInfoCard>
                <CarInfoTitle>📍 내비게이션</CarInfoTitle>
                <CarInfoContent>
                  <HighlightText>"수원노블레스웨딩컨벤션"</HighlightText>
                  <br />
                  또는
                  <br />
                  <HighlightText>
                    "경기도 수원시 팔달구 우만동 549"
                  </HighlightText>
                </CarInfoContent>
              </CarInfoCard>

              <CarInfoCard>
                <CarInfoTitle>🛣️ 경부고속도로</CarInfoTitle>
                <CarInfoContent>
                  <DirectionStep>신갈 IC 진입</DirectionStep>
                  <DirectionStep>수원시내방면 직진</DirectionStep>
                  <DirectionStep>동수원사거리 우회전</DirectionStep>
                  <DirectionStep>
                    <HighlightText>100m 우측 도착</HighlightText>
                  </DirectionStep>
                </CarInfoContent>
              </CarInfoCard>

              <CarInfoCard>
                <CarInfoTitle>🛣️ 영동고속도로</CarInfoTitle>
                <CarInfoContent>
                  <DirectionStep>동수원 IC 진입</DirectionStep>
                  <DirectionStep>수원시내방면 직진</DirectionStep>
                  <DirectionStep>창용문사거리 좌회전</DirectionStep>
                  <DirectionStep>
                    <HighlightText>800m 좌측 도착</HighlightText>
                  </DirectionStep>
                </CarInfoContent>
              </CarInfoCard>
            </CarInfoList>
          </TransportSection>
        </TransportInfo>
      </ContentWrapper>
    </LocationContainer>
  );
}

export default LocationMap;
