import styled from "styled-components";
import { useState } from "react";

const RSVPContainer = styled.div`
  background: #ffffff;
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

const RSVPNote = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 0.85rem;
  color: #666666;
  line-height: 1.6;
  font-family: "Arial", sans-serif;
`;

const FormContainer = styled.div`
  background: rgba(248, 249, 250, 0.8);
  border-radius: 8px;
  padding: 2rem;
  border: 1px solid #f0f0f0;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-family: "Arial", sans-serif;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: "Arial", sans-serif;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #999999;
  }

  &::placeholder {
    color: #aaaaaa;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: "Arial", sans-serif;
  background: #ffffff;

  &:focus {
    outline: none;
    border-color: #999999;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #666666;
  cursor: pointer;
  font-family: "Arial", sans-serif;
`;

const RadioInput = styled.input`
  margin: 0;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #dddddd;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: "Arial", sans-serif;
  background: #ffffff;
  min-height: 80px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #999999;
  }

  &::placeholder {
    color: #aaaaaa;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: #333333;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: "Arial", sans-serif;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #555555;
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(76, 175, 80, 0.1);
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-radius: 8px;
  color: #2e7d32;
  font-size: 0.9rem;
  font-family: "Arial", sans-serif;
`;

function RSVP() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    attendance: "",
    guestCount: "1",
    meal: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 서버에 데이터를 전송
    console.log("RSVP 데이터:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <RSVPContainer>
        <ContentWrapper>
          <SectionTitle>RSVP</SectionTitle>
          <SuccessMessage>
            참석 의사를 전달해 주셔서 감사합니다!
            <br />
            소중한 자리에서 뵙겠습니다. 💕
          </SuccessMessage>
        </ContentWrapper>
      </RSVPContainer>
    );
  }

  return (
    <RSVPContainer>
      <ContentWrapper>
        <SectionTitle>RSVP</SectionTitle>

        <RSVPNote>
          참석 여부를 알려주시면
          <br />더 나은 준비를 할 수 있습니다.
        </RSVPNote>

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">성함 *</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="성함을 입력해주세요"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">연락처</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="010-0000-0000"
              />
            </FormGroup>

            <FormGroup>
              <Label>참석 여부 *</Label>
              <RadioGroup>
                <RadioOption>
                  <RadioInput
                    type="radio"
                    name="attendance"
                    value="참석"
                    checked={formData.attendance === "참석"}
                    onChange={handleInputChange}
                    required
                  />
                  참석
                </RadioOption>
                <RadioOption>
                  <RadioInput
                    type="radio"
                    name="attendance"
                    value="불참"
                    checked={formData.attendance === "불참"}
                    onChange={handleInputChange}
                    required
                  />
                  불참
                </RadioOption>
              </RadioGroup>
            </FormGroup>

            {formData.attendance === "참석" && (
              <>
                <FormGroup>
                  <Label htmlFor="guestCount">참석 인원</Label>
                  <Select
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                  >
                    <option value="1">1명</option>
                    <option value="2">2명</option>
                    <option value="3">3명</option>
                    <option value="4">4명</option>
                    <option value="5">5명 이상</option>
                  </Select>
                </FormGroup>

                <FormGroup>
                  <Label>식사 여부</Label>
                  <RadioGroup>
                    <RadioOption>
                      <RadioInput
                        type="radio"
                        name="meal"
                        value="식사함"
                        checked={formData.meal === "식사함"}
                        onChange={handleInputChange}
                      />
                      식사함
                    </RadioOption>
                    <RadioOption>
                      <RadioInput
                        type="radio"
                        name="meal"
                        value="식사안함"
                        checked={formData.meal === "식사안함"}
                        onChange={handleInputChange}
                      />
                      식사안함
                    </RadioOption>
                  </RadioGroup>
                </FormGroup>
              </>
            )}

            <FormGroup>
              <Label htmlFor="message">축하 메시지</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="축하의 메시지를 남겨주세요"
              />
            </FormGroup>

            <SubmitButton type="submit">참석 의사 전달하기</SubmitButton>
          </form>
        </FormContainer>
      </ContentWrapper>
    </RSVPContainer>
  );
}

export default RSVP;
