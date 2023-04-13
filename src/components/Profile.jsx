import React from "react";
import Foto from "../assets/Profile.png";

function Profile() {
  return (
    <div className=" h-full bg-white rounded-md shadow-2xl sm:flex hidden hover:translate-y-12">
      <img
        src={Foto}
        alt=""
        className="w-full h-full object-cover md:object-center"
      />
    </div>
  );
}

export default Profile;
