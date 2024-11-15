/** @format */
import React, { useRef, useState } from "react";
import { BsCameraVideo } from "react-icons/bs";
import NavList from "../Inbox/NavList";
import clip1 from "../../public/Assets/clip.png";
import clip2 from "../../public/Assets/clip2.png";
import clip3 from "../../public/Assets/clip3.png";
import { ReactMediaRecorder } from "react-media-recorder";

const clips = [{ label: "Clip", link: "/clip", icon: <BsCameraVideo /> }];

const ClipCard = ({ img, title, para }) => {
  return (
    <div className="w-[38%] h-auto p-6 border rounded-md hover:bg-gray-100 shadow-sm">
      <h1 className="font-semibold text-gray-800">{title}</h1>
      <p className="text-sm text-gray-500 mt-2">{para}</p>

      <div className="mt-6 flex justify-center">
        <div className="w-full h-[200px] flex items-center justify-center">
          {img}
        </div>
      </div>
    </div>
  );
};

function Clip({ navData = clips, activeItem }) {
  //   const videoRef = useRef(null);
  // const [isRecording, setIsRecording] = useState(null);
  // const [stream, setStream] = useState(null);

  // const handleStartRecording = async () => {
  //   const videoStart = await navigator.mediaDevices.getUserMedia({
  //     video: true,
  //     audio: true,
  //   });
  //   setStream(videoStart);

  //   videoRef.current.srcObject = videoStart;
  //   const mediaRecord = new RtcRecording(videoStart, {
  //     type: "video",
  //   });
  //   mediaRecord.startRecording();
  //   setIsRecording(mediaRecord);
  // };

  // const handleStopRecording = async () => {
  //   if (isRecording) {
  //     await isRecording.stopRecording();
  //   }
  // };

  return (
    <div className="w-full bg-white flex flex-col ">
      <nav className="flex justify-between items-center border-b-2 border-b-gray-100 ">
        <NavList navData={navData} activeItem={activeItem} />
        <div className="p-2">
          <button className="bg-blue-400 flex  p-2 gap-2 text-white  font-bold border rounded-lg">
            <span>New clip</span>
          </button>
        </div>
      </nav>
      <h1 className="p-6 text-xl font-bold mt-6">Welcome to Clips</h1>
      <div className="flex justify-around p-8 gap-4">
        <ClipCard
          title="Record in a snap"
          para="Capture your device screen with just a few clicks. Record and effortlessly share your videos with anyone."
          img={<img src={clip1} alt="clip-1" className="h-full w-auto" />}
        />
        <ClipCard
          title="Unlock async productivity"
          para="Skip the meetings and share all of your design updates, feedback videos, onboarding videos, and more in one place."
          img={<img src={clip2} alt="clip-2" className="h-full w-auto" />}
        />
        <ClipCard
          title="Watch, share, collaborate"
          para="Clip automatically generates a link, allowing you to quickly share your clips anywhere, even outside of your Workspace."
          img={<img src={clip3} alt="clip-3" className="h-full w-auto" />}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-gray-700 font-bold text-lg">
          Create your first Clip!
        </h1>
        <p className="text-sm text-gray-500 text-center m-4">
          Created share screen recording to give your teammates context. Save
          your recordings, attach them to tasks, or share them anywhere.
        </p>

        <ReactMediaRecorder
          video
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <>
              <p>{status}</p>
              <button
                onClick={startRecording}
                className="p-1 bg-blue-400 border rounded-md"
              >
                Start Recording
              </button>
              <button
                onClick={stopRecording}
                className="p-1 bg-blue-400 border rounded-md mt-4"
              >
                Stop Recording
              </button>
              {mediaBlobUrl && (
                <video src={mediaBlobUrl} controls autoPlay loop />
              )}
            </>
          )}
        />
      </div>
    </div>
  );
}

export default Clip;
