declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "swiper/css";
declare module "swiper/css/pagination";
declare module "swiper/css/navigation";

// Vite 환경 변수 타입 선언
interface ImportMetaEnv {
  readonly VITE_KAKAO_JAVASCRIPT_KEY: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_WEDDING_TITLE: string;
  readonly VITE_WEDDING_DESCRIPTION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
