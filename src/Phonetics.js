import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  return (
    <div className="Phonetics d-flex flex-column align-items-start text-start">
      <a href={props.phonetic.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>

      <div>{props.phonetic.text}</div>

      <ReactAudioPlayer
        src={props.phonetic.audio}
        controls
      />
    </div>
  );
}
