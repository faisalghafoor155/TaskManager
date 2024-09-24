/** @format */ import React from "react";
import { BsCameraVideo } from "react-icons/bs";
import NavList from "../Inbox/NavList";
import clip1 from "../../../public/Assets/clip.png";
import clip2 from "../../../public/Assets/clip2.png";
import clip3 from "../../../public/Assets/clip3.png";
const clips = [{ label: "Clip", link: "/clip", icon: <BsCameraVideo /> }];

// eslint-disable-next-line react/prop-types
const ClipCard = ({ img, title, para }) => {
  return (
    <div className="w-[38%] h-auto p-6 border rounded-md hover:bg-gray-100 shadow-sm">
      <h1 className="font-semibold text-gray-800">{title}</h1>
      <p className="text-sm text-gray-500 mt-2">{para}</p>

      <div className="mt-6 flex justify-center">
        {/* Define fixed height and width for the image container */}
        <div className="w-full h-[200px] flex items-center justify-center">
          {img}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function Clip({ navData = clips, activeItem }) {
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
      <h1 className="p-6 text-xl font-bold mt-6"> Welcome to Clips</h1>
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
        <p className="text-sm text-gray-500  flex flex-wrap text-center  m-4">
          Created share screen recording to give your tammates context .Save
          your recordings .<br /> attach them to task them to tasks, or share
          them anywhere.
        </p>
        <button className="bg-blue-500 p-2 border rounded-md text-white font-semibold text-md">
          CreateClip
        </button>
      </div>
    </div>
  );
}

export default Clip;
