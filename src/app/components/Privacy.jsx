"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import switchOn from "../../../public/Switch on.svg";
import switchOff from "../../../public/Switch off.svg";

const Privacy = () => {
  const [profileVisible, setProfileVisible] = useState(true);
  const [allowDMs, setAllowDMs] = useState(false);
  const [showOnlineStatus, setShowOnlineStatus] = useState(true);
  const [showLastSeen, setShowLastSeen] = useState(false);

  return (
    <div className="w-full h-full p-6 space-y-6">
      {/* Profile Visibility */}
      <div>
        <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
          Profile Visibility (Public/Private)
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <Image
            src={profileVisible ? switchOn : switchOff}
            height={28}
            width={44}
            alt="Toggle Profile Visibility"
            className="cursor-pointer"
            onClick={() => setProfileVisible(!profileVisible)}
          />
          <p className="text-[16px] secondary-text-color montserrat-smallweigh-font">
            Yes / No
          </p>
        </div>
      </div>

      {/* Allow Direct Messages */}
      <div>
        <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
          Allow Direct Messages
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <Image
            src={allowDMs ? switchOn : switchOff}
            height={28}
            width={44}
            alt="Toggle Direct Messages"
            className="cursor-pointer"
            onClick={() => setAllowDMs(!allowDMs)}
          />
          <p className="text-[16px] secondary-text-color montserrat-smallweigh-font">
            Yes / No
          </p>
        </div>
      </div>

      {/* Show Online Status */}
      <div>
        <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
          Show Online Status
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <Image
            src={showOnlineStatus ? switchOn : switchOff}
            height={28}
            width={44}
            alt="Toggle Online Status"
            className="cursor-pointer"
            onClick={() => setShowOnlineStatus(!showOnlineStatus)}
          />
          <p className="text-[16px] secondary-text-color montserrat-smallweigh-font">
            Yes / No
          </p>
        </div>
      </div>

      {/* Show Last Seen */}
      <div>
        <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
          Show Last Seen
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <Image
            src={showLastSeen ? switchOn : switchOff}
            height={28}
            width={44}
            alt="Toggle Last Seen"
            className="cursor-pointer"
            onClick={() => setShowLastSeen(!showLastSeen)}
          />
          <p className="text-[16px] secondary-text-color montserrat-smallweigh-font">
            Yes / No
          </p>
        </div>
      </div>

      {/* See My Personal Info */}
      <div>
        <h1 className="text-[18px] primary-text-color font-semibold montserrat-primary-font">
          See My Personal Info
        </h1>
        <div className="mt-2 space-y-2">
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="checkbox" className="accent-blue-500 w-6 h-6" />
            <span className="text-[14px] secondary-text-color montserrat-smallweigh-font">
              Everyone
            </span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="checkbox" className="accent-blue-500 w-6 h-6" />
            <span className="text-[14px] secondary-text-color montserrat-smallweigh-font">
              People you follow
            </span>
          </label>
          <label className="flex items-center space-x-2 text-sm text-gray-600">
            <input type="checkbox" className="accent-blue-500 w-6 h-6" />
            <span className="text-[14px] secondary-text-color montserrat-smallweigh-font">
              No one
            </span>
          </label>
        </div>
      </div>

      {/* Save Button */}
      <div className='md:col-span-2 md:flex justify-end'>
        <button className='button-background-color rounded-[100px] justify-center py-3 md:py-6 px-10 flex items-center gap-3'>
          <h1 className='text-[14px] background-text-color font-semibold montserrat-secondary-font'>
            Save Changes
          </h1>
        </button>
      </div>
    </div>
  );
};

export default Privacy;
