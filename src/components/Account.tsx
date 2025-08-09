import styled from "styled-components";
import Reveal from "./Reveal";

const AccountContainer = styled.div`
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

const AccountNote = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 0.85rem;
  color: #666666;
  line-height: 1.6;
  font-family: "Arial", sans-serif;
`;

const AccountGroups = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AccountGroup = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 2rem 1.5rem;
  border: 1px solid #f0f0f0;
`;

const GroupTitle = styled.div`
  font-size: 0.7rem;
  color: #999999;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: "Arial", sans-serif;
`;

const AccountItem = styled.div`
  margin: 1.5rem 0;
  padding: 1rem 0;
  border-bottom: 1px solid #f8f9fa;

  &:last-child {
    border-bottom: none;
  }
`;

const AccountOwner = styled.div`
  font-size: 0.9rem;
  color: #333333;
  font-weight: 400;
  margin-bottom: 0.5rem;
  font-family: "Georgia", serif;
`;

const BankInfo = styled.div`
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-family: "Arial", sans-serif;
`;

const AccountNumber = styled.div`
  font-size: 0.85rem;
  color: #555555;
  font-family: "Courier New", monospace;
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

const CopyButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #dddddd;
  background: #ffffff;
  color: #666666;
  font-size: 0.7rem;
  font-family: "Arial", sans-serif;
  border-radius: 4px;
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

const ContactInfo = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  border: 1px solid #f0f0f0;
`;

const ContactTitle = styled.div`
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 1rem;
  font-family: "Arial", sans-serif;
`;

const ContactDetails = styled.div`
  font-size: 0.8rem;
  color: #777777;
  line-height: 1.6;
  font-family: "Arial", sans-serif;
`;

function Account() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("계좌번호가 복사되었습니다.");
  };

  return (
    <AccountContainer>
      <ContentWrapper>
        <Reveal>
          <SectionTitle>Account</SectionTitle>
        </Reveal>

        <Reveal>
          <AccountNote>
            축하의 마음을 전해주시는
            <br />
            모든 분들께 감사드립니다.
          </AccountNote>
        </Reveal>

        <AccountGroups>
          <Reveal>
            <AccountGroup>
              <GroupTitle>Groom</GroupTitle>

              <AccountItem>
                <AccountOwner>신랑 주호세</AccountOwner>
                <BankInfo>국민은행</BankInfo>
                <AccountNumber>123456-78-901234</AccountNumber>
                <CopyButton onClick={() => copyToClipboard("12345678901234")}>
                  계좌복사
                </CopyButton>
              </AccountItem>

              <AccountItem>
                <AccountOwner>신랑 아버지 주헌백</AccountOwner>
                <BankInfo>신한은행</BankInfo>
                <AccountNumber>987654-32-109876</AccountNumber>
                <CopyButton onClick={() => copyToClipboard("98765432109876")}>
                  계좌복사
                </CopyButton>
              </AccountItem>

              <AccountItem>
                <AccountOwner>신랑 어머니 김화영</AccountOwner>
                <BankInfo>농협</BankInfo>
                <AccountNumber>352-1268-7453-73</AccountNumber>
                <CopyButton onClick={() => copyToClipboard("352-1268-7453-73")}>
                  계좌복사
                </CopyButton>
              </AccountItem>
            </AccountGroup>
          </Reveal>

          <Reveal delayMs={120}>
            <AccountGroup>
              <GroupTitle>Bride</GroupTitle>

              <AccountItem>
                <AccountOwner>신부 임혜빈</AccountOwner>
                <BankInfo>하나은행</BankInfo>
                <AccountNumber>111222-33-444555</AccountNumber>
                <CopyButton onClick={() => copyToClipboard("11122233444555")}>
                  계좌복사
                </CopyButton>
              </AccountItem>

              <AccountItem>
                <AccountOwner>신부 아버지 임유순</AccountOwner>
                <BankInfo>기업은행</BankInfo>
                <AccountNumber>777888-99-000111</AccountNumber>
                <CopyButton onClick={() => copyToClipboard("77788899000111")}>
                  계좌복사
                </CopyButton>
              </AccountItem>

              <AccountItem>
                <AccountOwner>신부 어머니 이제복</AccountOwner>
                <BankInfo>농협은행</BankInfo>
                <AccountNumber>333444-55-666777</AccountNumber>
                <CopyButton onClick={() => copyToClipboard("33344455666777")}>
                  계좌복사
                </CopyButton>
              </AccountItem>
            </AccountGroup>
          </Reveal>
        </AccountGroups>

        <Reveal>
          <ContactInfo>
            <ContactTitle>문의사항</ContactTitle>
            <ContactDetails>
              신랑측: 010-4737-2086 (주호세)
              <br />
              신부측: 010-5479-2292 (임혜빈)
            </ContactDetails>
          </ContactInfo>
        </Reveal>
      </ContentWrapper>
    </AccountContainer>
  );
}

export default Account;
