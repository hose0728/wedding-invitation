# Wedding Invitation - 모바일 청첩장

React + TypeScript + Vite로 제작된 모바일 청첩장 웹사이트입니다.

## ✨ 주요 기능

- 📱 **반응형 디자인**: 모바일 우선 설계
- 💬 **카카오톡 공유**: PC/모바일에서 카카오톡으로 청첩장 공유
- 🎵 **배경 음악**: 자동 재생 및 수동 제어
- 🖼️ **갤러리**: 사진 슬라이드 쇼
- 📍 **지도**: 결혼식 장소 안내
- 💰 **계좌 정보**: 축의금 안내
- 📝 **참석 의사**: RSVP 기능
- 🎨 **웰컴 애니메이션**: 진입 시 환영 메시지

## 🚀 시작하기

### 1. 프로젝트 설치

```bash
# 저장소 클론
git clone <repository-url>
cd wedding-invitation

# 의존성 설치
npm install
# 또는
yarn install
```

### 2. 카카오톡 공유 기능 설정

카카오톡 공유 기능을 사용하려면 다음 단계를 따라주세요:

#### 2-1. 카카오 개발자 애플리케이션 등록

1. [카카오 개발자 사이트](https://developers.kakao.com) 접속
2. **내 애플리케이션** > **애플리케이션 추가하기**
3. 앱 정보 입력 후 저장

#### 2-2. 플랫폼 등록

1. **플랫폼** 탭 > **Web 플랫폼 등록**
2. 사이트 도메인 입력:
   - 개발: `http://localhost:5173`
   - 배포: 실제 도메인

#### 2-3. 환경 변수 설정

프로젝트 루트에 `.env` 파일 생성:

```env
# 카카오 JavaScript Key (필수)
VITE_KAKAO_JAVASCRIPT_KEY=your_kakao_javascript_key_here

# 네이버 지도 API 클라이언트 ID (필수)
VITE_NAVER_MAP_CLIENT_ID=your_naver_map_client_id_here

# 선택사항
VITE_SITE_URL=http://localhost:5173
VITE_WEDDING_TITLE=💒 결혼식에 초대합니다
VITE_WEDDING_DESCRIPTION=소중한 분들과 함께 하고 싶은 저희의 결혼식에 초대합니다
```

> 📋 자세한 설정 방법은 [KAKAO_SETUP.md](./KAKAO_SETUP.md) 파일을 참고하세요.

#### 2-4. 네이버 지도 API 설정

네이버 지도 기능을 사용하려면 다음 단계를 따라주세요:

1. [네이버 클라우드 플랫폼](https://www.ncloud.com/)에 가입
2. **Maps** 서비스 활성화
3. 애플리케이션 등록 후 클라이언트 ID 발급
4. `.env` 파일에 `VITE_NAVER_MAP_CLIENT_ID` 설정

### 3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 `http://localhost:5173`으로 접속

### 4. 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
src/
├── components/           # React 컴포넌트
│   ├── IntroSection.tsx     # 메인 소개
│   ├── WeddingInfo.tsx      # 결혼식 정보
│   ├── Gallery.tsx          # 사진 갤러리
│   ├── LocationMap.tsx      # 지도 및 장소
│   ├── Account.tsx          # 계좌 정보
│   ├── RSVP.tsx            # 참석 의사
│   ├── ShareSection.tsx     # 카카오톡 공유
│   ├── Footer.tsx          # 푸터
│   ├── MusicPlayer.tsx     # 음악 플레이어
│   └── WelcomeOverlay.tsx  # 웰컴 오버레이
├── styles.css           # 전역 스타일
├── types.d.ts          # TypeScript 타입 정의
├── App.tsx             # 메인 앱 컴포넌트
└── main.tsx            # 앱 진입점

public/
├── couple-main.jpg     # 메인 이미지 (공유용)
├── backGround.mp3      # 배경 음악
├── play.svg           # 재생 아이콘
└── wave.gif           # 음악 재생 애니메이션
```

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Styled Components
- **UI Libraries**: Swiper (갤러리)
- **API**: Kakao JavaScript SDK

## 🎨 커스터마이징

### 색상 테마 변경

`src/styles.css`에서 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다.

### 컨텐츠 수정

각 컴포넌트 파일에서 텍스트, 이미지, 정보를 수정할 수 있습니다.

### 이미지 교체

`public/` 폴더의 이미지 파일들을 교체하세요:

- `couple-main.jpg`: 메인 커플 사진 (권장: 1200x630px)
- `backGround.mp3`: 배경 음악 파일

## 📱 모바일 최적화

- 최대 너비 430px로 모바일 기기에 최적화
- 터치 제스처 지원 (갤러리 스와이프)
- 반응형 레이아웃

## 🐛 문제 해결

### 카카오톡 공유가 작동하지 않는 경우

1. JavaScript Key가 올바르게 설정되었는지 확인
2. 도메인이 카카오 개발자 콘솔에 등록되었는지 확인
3. 브라우저 개발자 도구에서 오류 메시지 확인

### 음악이 자동 재생되지 않는 경우

브라우저 정책상 사용자 상호작용 없이는 자동 재생이 불가능합니다. 이는 정상적인 동작입니다.

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 지원

문제가 있거나 질문이 있으시면 이슈를 생성해 주세요.

---

💝 **소중한 순간을 아름답게 공유하세요!**
