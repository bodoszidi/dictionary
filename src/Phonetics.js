import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";

export default function Phonetics(props) {
    return (
        <div className="Phonetics container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="mb-2">{props.phonetic.text}</div>

          <ReactAudioPlayer
            src={props.phonetic.audio}
            controls
            className="w-100"
          />
        </div>
      </div>
    </div>
    );
}
