# 카카오톡 공유 기능 설정 가이드

## 1. 카카오 개발자 애플리케이션 등록

### 1-1. 카카오 개발자 사이트 접속

- [https://developers.kakao.com](https://developers.kakao.com)에 접속
- 카카오 계정으로 로그인

### 1-2. 애플리케이션 추가

1. **내 애플리케이션** 메뉴 클릭
2. **애플리케이션 추가하기** 버튼 클릭
3. 앱 정보 입력:
   - **앱 이름**: Wedding Invitation (또는 원하는 이름)
   - **사업자명**: 개인 또는 회사명
4. **저장** 버튼 클릭

### 1-3. JavaScript Key 확인

1. 생성된 애플리케이션 클릭
2. **앱 키** 탭에서 **JavaScript 키** 복사
3. 이 키를 나중에 환경 변수에 설정

## 2. 플랫폼 설정

### 2-1. 웹 플랫폼 등록

1. **플랫폼** 탭 클릭
2. **Web 플랫폼 등록** 클릭
3. **사이트 도메인** 입력:
   - 개발 환경: `http://localhost:5173`
   - 배포 환경: 실제 도메인 (예: `https://yourwedding.com`)
4. **저장** 버튼 클릭

### 2-2. 카카오 로그인 활성화 (선택사항)

1. **카카오 로그인** 탭 클릭
2. **활성화 설정**을 **ON**으로 변경
3. **Redirect URI** 등록 (필요한 경우)

## 3. 환경 변수 설정

### 3-1. .env 파일 생성

프로젝트 루트에 `.env` 파일을 생성하고 다음 내용 추가:

```env
# 카카오 개발자 사이트에서 발급받은 JavaScript Key
VITE_KAKAO_JAVASCRIPT_KEY=your_kakao_javascript_key_here

# 웹사이트 기본 정보
VITE_SITE_URL=http://localhost:5173
VITE_WEDDING_TITLE=💒 결혼식에 초대합니다
VITE_WEDDING_DESCRIPTION=소중한 분들과 함께 하고 싶은 저희의 결혼식에 초대합니다
```

### 3-2. .env.local 파일 (개발용)

개발 환경에서만 사용할 경우 `.env.local` 파일 생성:

```env
VITE_KAKAO_JAVASCRIPT_KEY=your_actual_javascript_key_here
```

## 4. 공유 이미지 설정

### 4-1. 이미지 파일 추가

`public/wedding-image.jpg` 파일을 추가하세요.

- 권장 크기: 1200x630px
- 파일 형식: JPG, PNG
- 파일 크기: 1MB 이하

### 4-2. Open Graph 메타 태그 확인

`index.html`에 다음 메타 태그가 포함되어 있는지 확인:

```html
<meta property="og:type" content="website" />
<meta property="og:title" content="💒 결혼식에 초대합니다" />
<meta
  property="og:description"
  content="소중한 분들과 함께 하고 싶은 저희의 결혼식에 초대합니다."
/>
<meta property="og:image" content="/wedding-image.jpg" />
<meta property="og:url" content="" />
<meta property="og:site_name" content="Wedding Invitation" />
```

## 5. 배포 시 주의사항

### 5-1. 도메인 등록

- 카카오 개발자 콘솔에서 실제 배포 도메인을 등록해야 함
- HTTP와 HTTPS 모두 등록 필요한 경우 각각 등록

### 5-2. 환경 변수 설정

- Vercel, Netlify 등 배포 플랫폼에서 환경 변수 설정
- `VITE_KAKAO_JAVASCRIPT_KEY` 값을 실제 키로 설정

### 5-3. 이미지 URL 확인

- 공유 이미지가 절대 URL로 접근 가능한지 확인
- 예: `https://yourwedding.com/wedding-image.jpg`

## 6. 테스트 방법

### 6-1. 개발 환경 테스트

1. `npm run dev` 실행
2. 브라우저에서 `http://localhost:5173` 접속
3. "카카오톡으로 청첩장 전하기" 버튼 클릭
4. 카카오톡 공유 팝업 확인

### 6-2. 모바일 테스트

1. 모바일 기기에서 사이트 접속
2. 카카오톡 공유 버튼 클릭
3. 카카오톡 앱으로 이동하여 공유 기능 확인

## 7. 문제 해결

### 7-1. 일반적인 오류

- **Error Code 4019**: JavaScript Key가 잘못되었거나 초기화되지 않음
- **Error Code 4002**: 도메인이 등록되지 않음
- **SDK 로드 실패**: 네트워크 연결 또는 CDN 문제

### 7-2. 디버깅 방법

1. 브라우저 개발자 도구 콘솔 확인
2. `window.Kakao.isInitialized()` 실행하여 초기화 상태 확인
3. 네트워크 탭에서 SDK 로드 상태 확인

### 7-3. 지원 및 문의

- [카카오 개발자 데브톡](https://devtalk.kakao.com)
- [카카오톡 공유 API 문서](https://developers.kakao.com/docs/latest/ko/kakaotalk-share/js-link)

## 8. 참고 자료

- [카카오 개발자 가이드](https://developers.kakao.com/docs)
- [JavaScript SDK 레퍼런스](https://developers.kakao.com/sdk/reference/js)
- [메시지 템플릿 도구](https://developers.kakao.com/tool/template/feed)
