import React from "react";
import userPic from "../assets/userPic.svg";

interface UserPanelProps {
  // Add your props here if needed
}

const UserPanel: React.FC<UserPanelProps> = () => {
  return (
    <div className="mb-4 h-full w-[24rem] rounded-3xl bg-first p-5 shadow-[11px_-5px_31px_-12px_rgba(0,_0,_0,_0.35)]">
      <div className="flex h-full flex-col items-center justify-between rounded-3xl bg-babyBlue p-4 text-center">
        <div className="flex flex-col items-center space-y-2">
          <div>
            <h2 className="text-2xl font-bold text-white">Good day, User</h2>
            <p className="text-xl text-first">
              Have a nice{" "}
              {
                [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ][new Date().getDay()]
              }
            </p>
          </div>
          <img src={userPic} alt="User profile" className="mr-3 h-32 w-32" />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-md rounded-xl bg-green-500 p-2 text-center text-first shadow-xl">
            Don't forget about your habits!😊
          </h3>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
