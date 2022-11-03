import ReactPlayer from "react-player/lazy";

export default function VideoPlayer({ playerRef }) {
  return (
    <ReactPlayer
      ref={playerRef}
      url="/rvubot-demo.mp4"
      light="/rvubot-screenshot.png"
      width="100%"
      height="400px"
      playing={true}
      controls={true}
      onEnded={() => { playerRef.current.showPreview() }}
    />
  );
}
