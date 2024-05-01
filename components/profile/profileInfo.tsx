"use client";
import Image from "next/image";
import png from "@/public/images/person-png-icon.png";
import { ModulesList } from "./modulesList";
export const ProfileInfo = function ({ profileData }: { profileData: IUser }) {
  return (
    <div className="pi-profile-base-info flex flex-col mb-4 sm:flex-row">
      <div className="pi-profile-avatar w-1/2 lg:w-1/3">
        <Image
          src={png}
          alt="avatar"
          className="border-3 dark:border-zinc-700 border-zinc-400 rounded-2xl"
          width={300}
          height={300}
        ></Image>
      </div>
      <div className="pi-social-demographic-info mt-4 sm:mt-0 sm:w-1/2 lg:w-1/3 sm:px-5">
        <p className="pi-username dark:bg-zinc-700 bg-zinc-600/30 px-1 text-xl rounded-md">{profileData.userName}</p>
        <p className="px-1">возраст: {profileData.age}</p>
        <p className="px-1">пол: {profileData.gender}</p>
      </div>
      <ModulesList modules={profileData.modules}/>
    </div>
  );
};
