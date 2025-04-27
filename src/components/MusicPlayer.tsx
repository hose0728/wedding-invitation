import { useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`;

const MusicButton = styled.button<{ $playing: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: black;
  transition: box-shadow 0.2s;
  &:active {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
  }
  svg {
    ${({ $playing }) =>
      $playing &&
      css`
        animation: ${rotate} 1.2s linear infinite;
      `}
  }
`;

const FadeImage = styled.img<{ $visible: boolean }>`
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transition: opacity 0.4s;
  position: absolute;
  top: 0;
  left: 0;
`;

function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleToggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };

  return (
    <div style={{ position: "absolute", top: 20, right: 20, zIndex: 1000 }}>
      <audio
        ref={audioRef}
        src="/backGround.mp3"
        loop
        autoPlay
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      <MusicButton
        onClick={handleToggle}
        $playing={playing}
        aria-label={playing ? "일시정지" : "재생"}
        style={{ position: "relative", width: 24, height: 24 }}
      >
        <FadeImage
          src="/play.svg"
          alt="재생"
          width={24}
          height={24}
          $visible={!playing}
          style={{ pointerEvents: "none" }}
        />
        <FadeImage
          src="/wave.gif"
          alt="일시정지"
          width={24}
          height={24}
          $visible={playing}
          style={{ pointerEvents: "none" }}
        />
      </MusicButton>
    </div>
  );
}
export default MusicPlayer;
