import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
  const { text, audio } = props.phonetic;

  return (
    <div className="Phonetics container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          {/* Show text always */}
          <div className="mb-2">{text}</div>

          {/* Show audio player only if audio URL exists */}
          {audio && audio.trim() !== "" && (
            <ReactAudioPlayer src={audio} controls className="w-100" />
          )}
        </div>
      </div>
    </div>
  );
}
