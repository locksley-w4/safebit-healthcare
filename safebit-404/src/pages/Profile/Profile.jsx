import React from "react";
import "./Profile.css";
import profilePic from "../../assets/profile.jpg";
import clappingHand from "../../assets/clapping.jpg";
import fire from "../../assets/Fire.jpg";
import magicWand from "../../assets/Magic Wand.jpg";
import settings from "../../assets/settings.jpg";
import chat from "../../assets/chat.jpg";
import envelope from "../../assets/Envelope.jpg";
import right from "../../assets/right.jpg";
import pencilLine from "../../assets/PencilLine.jpg";
import carbonNotification from "../../assets/carbon_notification.jpg";
import notePencil from "../../assets/notepencil.jpg";
import activity from "../../assets/activity.jpg";
import qrcode from "../../assets/qrcode.jpg";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_top">
        <div className="profile_picture">
          <img src={profilePic} alt="pfp" />
          <h3>Cats Green</h3>
        </div>
        <div className="profile_stats">
          <div className="stat stat_weight">
            <div className="stat_title">
              <h4>
                Weight <img src={clappingHand} alt="clapping" />
              </h4>
              <span>64 kg</span>
            </div>
          </div>
          <div className="stat stat_height">
            <div className="stat_title">
              <h4>
                Height <img src={fire} alt="fire" />
              </h4>
              <span>176</span>
            </div>
          </div>
          <div className="stat stat_age">
            <div className="stat_title">
              <h4>
                Age <img src={magicWand} alt="magicwand" />
              </h4>
              <span>27</span>
            </div>
          </div>
        </div>
      </div>
      <div className="profile_main">
        <div className="sidebar">
          <div className="menu-section">
            <h3>Account</h3>
            <MenuItem icon={pencilLine} text="Edit Profile" />
            <MenuItem icon={carbonNotification} text="Notification" />
          </div>
          <div className="menu-section">
            <h3>Statics</h3>
            <MenuItem icon={notePencil} text="Edit Plan" />
            <MenuItem icon={activity} text="My progress" />
          </div>
          <div className="menu-section">
            <h3>My Scan</h3>
            <MenuItem icon={qrcode} text="My Scan" />
          </div>
          <div className="menu-section">
            <h3>Help</h3>
            <MenuItem icon={settings} text="Settings" />
            <MenuItem icon={chat} text="Help and report" />
          </div>
        </div>
      </div>
    </div>
  );
};
function MenuItem({ icon, text }) {
  return (
    <div className="menu-item">
      <div className="menu-text">
        <img src={icon} alt={text} />
        {text}
      </div>
      <span>
        {" "}
        <img src={right} alt="right" />{" "}
      </span>
    </div>
  );
}
export default Profile;
