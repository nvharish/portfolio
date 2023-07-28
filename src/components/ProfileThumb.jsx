import Profile from "../utils/constants";
import { contentWayPoint } from "../utils/common";
import SocialAccount from "./SocialAccount";
import { useEffect } from "react";

function ProfileThumb() {
  const photo = {
    background: `url(/assets/images/${Profile.photo})`,
  };
  useEffect(() => contentWayPoint(), []);

  return (
    <div
      className="display-tc js-fullheight animate-box"
      data-animate-effect="fadeIn"
    >
      <div className="profile-thumb" style={photo}></div>
      <h1>
        <span>{Profile.name}</span>
      </h1>
      <h3>
        <span>{Profile.designation}</span>
      </h3>
      <br />
      <SocialAccount />
    </div>
  );
}

export default ProfileThumb;
