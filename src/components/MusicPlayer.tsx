import { useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`;

const MusicButton = styled.button<{ $playing: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(200, 180, 150, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #8b7355;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(139, 115, 85, 0.15);

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(200, 180, 150, 0.5);
    box-shadow: 0 6px 20px rgba(139, 115, 85, 0.2);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 10px rgba(139, 115, 85, 0.2);
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: sepia(20%) saturate(80%) hue-rotate(20deg) brightness(0.8);
`;

const PlayerContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
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
    <PlayerContainer>
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
      >
        <FadeImage
          src="/play.svg"
          alt="재생"
          width={20}
          height={20}
          $visible={!playing}
          style={{ pointerEvents: "none" }}
        />
        <FadeImage
          src="/wave.gif"
          alt="일시정지"
          width={20}
          height={20}
          $visible={playing}
          style={{ pointerEvents: "none" }}
        />
      </MusicButton>
    </PlayerContainer>
  );
}

export default MusicPlayer;
