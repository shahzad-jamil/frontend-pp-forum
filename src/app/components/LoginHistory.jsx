"use client";
import React, { useState } from 'react';

const Toggle = ({ enabled, setEnabled }) => (
  <button
    onClick={() => setEnabled(!enabled)}
    className={`relative inline-flex items-center transition-colors duration-300 
      ${enabled ? "bg-buttonBackgroundColor" : "bg-toggleBackgroundColor border-toggleButtonColor border-[2px]"}
      w-16 h-10 rounded-full`}
  >
    <span
      className={`absolute top-1/2 transform -translate-y-1/2 rounded-full transition-all duration-300
        ${enabled ? "translate-x-8 w-7 h-7 bg-white" : "translate-x-1 w-5 h-5 bg-toggleButtonColor"}
      `}
    />
  </button>
);

const InfoBlock = ({ label, value }) => (
  <div className="flex items-center justify-between gap-4 py-2 text-[14px] sm:text-[16px]">
    <h1 className="primary-text-color montserrat-secondary-font min-w-[120px]">
      {label}
    </h1>
    <p className="secondary-text-color montserrat-smallweigh-font">
      {value}
    </p>
  </div>
);

const LoginHistory = () => {
  // States for each toggle
  const [secureAccountEnabled, setSecureAccountEnabled] = useState(true);
  const [reportActivityEnabled, setReportActivityEnabled] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [emailAlertEnabled, setEmailAlertEnabled] = useState(true);
  const [autoLogoutEnabled, setAutoLogoutEnabled] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-8xl min-h-screen flex flex-col items-center px-4 sm:px-6">
        {/* Section 1: Current Session */}
        <h1 className="font-Montserrat text-primaryColor dark:text-backgroundTextColor font-bold text-[20px] mt-8">
          Current Session
        </h1>

        <div className="w-full md:w-[50%] flex flex-col md:flex-row justify-between mt-6">
          <div className="w-full md:w-[48%] mx-auto">
            <InfoBlock label="Last Accessed:" value="Monday at 10:13 pm" />
            <InfoBlock label="Device Type:" value="Hyper - X" />
            <InfoBlock label="Location:" value="Lahore, Pakistan" />
          </div>
        </div>

        <div className="w-full md:w-[50%] mt-6 text-[14px] secondary-text-color montserrat-smallweigh-font">
          If you notice any unfamiliar devices or locations, click 'End Activity' to end the session. This list does not currently include sessions on the mobile site.
        </div>

        <div className='w-full flex justify-end'>
          <div className='w-[65%]'>
            {/* Active Sessions */}
            {[1, 2].map((_, idx) => (
              <div key={idx} className="w-full flex flex-col md:flex-row justify-between mt-6 gap-4 items-start md:items-center ">
                <div className="w-full md:w-[48%]">
                  <InfoBlock label="Last Accessed:" value="Monday at 10:13 pm" />
                  <InfoBlock label="Device Type:" value="Hyper - X" />
                  <InfoBlock label="Location:" value="Lahore, Pakistan" />
                </div>
                <button>
                  <h1 className="text-[16px] text-questionButtonColor montserrat-secondary-font">
                    End Activity
                  </h1>
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Suspicious Activity */}
        <div className="w-full md:w-[50%] flex md:flex-col md:items-center mt-20">
          <h1 className=" text-center font-Montserrat text-primaryColor dark:text-backgroundTextColor font-bold text-[20px]">
            Suspicious Activity Alerts
          </h1>
          <p className="text-[14px] secondary-text-color montserrat-smallweigh-font mt-4">
            ⚠️ Unrecognized Device Login Attempt – "A login attempt was detected from a new device on March 15, 2025, at 3:00 AM. If this wasn't you, secure your account immediately.
          </p>

          {/* Toggles for Suspicious Activity */}
          <div className=" w-full md:w-[75%] flex items-start flex-col gap-5 mt-10">
            <div className="flex flex-col md:flex-row gap-5 items-center ">
              <Toggle enabled={secureAccountEnabled} setEnabled={setSecureAccountEnabled} />
              <h1 className="text-[18px] primary-text-color font-semibold montserrat-secondary-font">
                Secure My Account
                <span className="text-[14px] pl-2">(Trigger password reset & 2FA setup)</span>
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-5 items-center">
              <Toggle enabled={reportActivityEnabled} setEnabled={setReportActivityEnabled} />
              <h1 className="text-[18px] primary-text-color font-semibold montserrat-secondary-font">
                Report Suspicious Activity
                <span className="text-[14px] pl-2">(Send alert to admins for review)</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Security Enhancements */}
        <div className="w-full md:w-[29%] text-center mt-20">
          <h1 className="font-Montserrat text-primaryColor dark:text-backgroundTextColor font-bold text-[20px]">
            Security Enhancements
          </h1>

          <div className="flex flex-col justify-center items-start gap-5 mt-10 ">
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <Toggle enabled={twoFactorEnabled} setEnabled={setTwoFactorEnabled} />
              <h1 className="text-[18px] primary-text-color font-semibold montserrat-secondary-font">
                Enable Two-Factor Authentication (2FA)
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-5 items-center">
              <Toggle enabled={emailAlertEnabled} setEnabled={setEmailAlertEnabled} />
              <h1 className="text-[18px] primary-text-color font-semibold montserrat-secondary-font">
                Receive Email Alerts for New Logins
              </h1>
            </div>

            <div className="flex flex-col md:flex-row gap-5 items-center">
              <Toggle enabled={autoLogoutEnabled} setEnabled={setAutoLogoutEnabled} />
              <h1 className="text-[18px] primary-text-color font-semibold montserrat-secondary-font">
                Auto-Logout Inactive Sessions
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHistory;
