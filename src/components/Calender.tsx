import styled from "styled-components";
import Reveal from "./Reveal";

const CalendarContainer = styled.div`
  background: #fff;
  padding: 60px 20px;
`;

const ContentWrapper = styled.div`
  max-width: 320px;
  margin: 0 auto;
`;

const WeddingDayTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin-bottom: 1rem;
  font-family: "Arial", sans-serif;
  letter-spacing: 1px;
`;

const WeddingDate = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const KoreanDate = styled.div`
  font-size: 1rem;
  color: #000;
  margin-bottom: 0.5rem;
  font-family: "Arial", sans-serif;
`;

const EnglishDate = styled.div`
  font-size: 0.8rem;
  color: #666;
  font-family: "Arial", sans-serif;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: #e0e0e0;
  margin: 1.5rem 0;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-top: 1rem;
`;

const WeekdayHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 1rem;
`;

const Weekday = styled.div<{ $isSunday: boolean }>`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${(props) => (props.$isSunday ? "#ff4444" : "#000")};
  font-family: "Arial", sans-serif;
`;

const DayCell = styled.div<{
  $isSunday: boolean;
  $isWeddingDay: boolean;
  $isCurrentMonth: boolean;
  $isToday: boolean;
}>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: ${(props) => (props.$isWeddingDay ? "600" : "400")};
  color: ${(props) => {
    if (props.$isWeddingDay) return "#000";
    if (props.$isSunday) return "#ff4444";
    if (!props.$isCurrentMonth) return "#ccc";
    return "#000";
  }};
  background: ${(props) => {
    if (props.$isWeddingDay) return "#FFB6C1";
    if (props.$isToday) return "#f0f0f0";
    return "transparent";
  }};
  border-radius: ${(props) => (props.$isWeddingDay ? "50%" : "0")};
  font-family: "Arial", sans-serif;
  position: relative;
`;

const WeddingDayLabel = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.6rem;
  color: #ffb6c1;
  font-weight: 600;
  white-space: nowrap;
`;

function Calendar() {
  // 2025년 11월 16일 (일요일)
  const weddingDate = new Date(2025, 10, 16); // 월은 0부터 시작하므로 10 = 11월
  const currentDate = new Date();

  // 2025년 11월의 첫 번째 날
  const firstDayOfMonth = new Date(2025, 10, 1);

  // 달력의 첫 번째 날 (이전 달의 일부 포함)
  const firstDayOfCalendar = new Date(firstDayOfMonth);
  firstDayOfCalendar.setDate(
    firstDayOfCalendar.getDate() - firstDayOfMonth.getDay()
  );

  // 달력에 표시할 모든 날짜 생성
  const calendarDays = [];
  const currentCalendarDate = new Date(firstDayOfCalendar);

  for (let i = 0; i < 42; i++) {
    // 6주 x 7일
    calendarDays.push(new Date(currentCalendarDate));
    currentCalendarDate.setDate(currentCalendarDate.getDate() + 1);
  }

  // 요일 헤더
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

  // 날짜 포맷팅 함수
  const formatKoreanDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
    const weekday = weekdays[date.getDay()];
    return `${year}년 ${month}월 ${day}일 ${weekday}요일`;
  };

  const formatEnglishDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = () => {
    return "오후 1시 30분";
  };

  const formatEnglishTime = () => {
    return "PM 1:30";
  };

  return (
    <CalendarContainer>
      <ContentWrapper>
        <Reveal>
          <WeddingDayTitle>WEDDING DAY</WeddingDayTitle>
        </Reveal>

        <Reveal delayMs={80}>
          <WeddingDate>
            <KoreanDate>
              {formatKoreanDate(weddingDate)} | {formatTime()}
            </KoreanDate>
            <EnglishDate>
              {formatEnglishDate(weddingDate)} | {formatEnglishTime()}
            </EnglishDate>
          </WeddingDate>
        </Reveal>

        <Reveal>
          <Divider />
        </Reveal>

        <Reveal delayMs={60}>
          <WeekdayHeader>
            {weekdays.map((day, index) => (
              <Weekday key={day} $isSunday={index === 0}>
                {day}
              </Weekday>
            ))}
          </WeekdayHeader>
        </Reveal>

        <Reveal delayMs={120}>
          <CalendarGrid>
            {calendarDays.map((date, index) => {
              const isSunday = date.getDay() === 0;
              const isWeddingDay = date.getTime() === weddingDate.getTime();
              const isCurrentMonth = date.getMonth() === 10; // 11월
              const isToday =
                date.toDateString() === currentDate.toDateString();

              return (
                <DayCell
                  key={index}
                  $isSunday={isSunday}
                  $isWeddingDay={isWeddingDay}
                  $isCurrentMonth={isCurrentMonth}
                  $isToday={isToday}
                >
                  {date.getDate()}
                  {isWeddingDay && (
                    <WeddingDayLabel>WEDDING DAY!</WeddingDayLabel>
                  )}
                </DayCell>
              );
            })}
          </CalendarGrid>
        </Reveal>
      </ContentWrapper>
    </CalendarContainer>
  );
}

export default Calendar;
