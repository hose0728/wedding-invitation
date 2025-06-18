import styled from "styled-components";

const WeddingInfoContainer = styled.div`
  background: #fff;
  padding: 60px 20px;
  text-align: center;
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
  font-family: "Arial", sans-serif;
`;

const GreetingSection = styled.div`
  margin-bottom: 4rem;
`;

const GreetingText = styled.p`
  font-size: 0.9rem;
  color: #666666;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-family: "Arial", sans-serif;
  font-weight: 300;
`;

const ParentsInfo = styled.div`
  margin: 3rem 0;
`;

const ParentGroup = styled.div`
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid #f0f0f0;
  background: rgba(248, 249, 250, 0.5);
`;

const ParentLabel = styled.div`
  font-size: 0.7rem;
  color: #999999;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-family: "Arial", sans-serif;
`;

const ParentNames = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

const ParentName = styled.span`
  font-size: 0.85rem;
  color: #555555;
  font-family: "Arial", sans-serif;
`;

const ChildName = styled.div`
  font-size: 1.1rem;
  color: #333333;
  font-weight: 400;
  margin-top: 0.5rem;
  font-family: "Georgia", serif;
`;

const Divider = styled.div`
  width: 40px;
  height: 1px;
  background: #dddddd;
  margin: 3rem auto;
`;

function WeddingInfo() {
  return (
    <WeddingInfoContainer>
      <ContentWrapper>
        <SectionTitle>Wedding Story</SectionTitle>

        <GreetingSection>
          <GreetingText>
            서로 다른 길을 걸어온 두 사람이
            <br />
            사랑이라는 이름으로 만나
            <br />
            이제 함께 걸어가려 합니다.
          </GreetingText>

          <GreetingText>
            저희의 새로운 시작을
            <br />
            축복해 주시면 감사하겠습니다.
          </GreetingText>
        </GreetingSection>

        <Divider />

        <ParentsInfo>
          <ParentGroup>
            <ParentLabel>Groom</ParentLabel>
            <ParentNames>
              <ParentName>아버지 주헌백</ParentName>
              <ParentName>어머니 김화영</ParentName>
            </ParentNames>
            <ChildName>장남 주호세</ChildName>
          </ParentGroup>

          <ParentGroup>
            <ParentLabel>Bride</ParentLabel>
            <ParentNames>
              <ParentName>아버지 임유순</ParentName>
              <ParentName>어머니 이제복</ParentName>
            </ParentNames>
            <ChildName>장녀 임혜빈</ChildName>
          </ParentGroup>
        </ParentsInfo>
      </ContentWrapper>
    </WeddingInfoContainer>
  );
}

export default WeddingInfo;
