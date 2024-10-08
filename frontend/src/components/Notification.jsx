import React from 'react';

const Notification = ({ className, title, time, avatars, message }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-white backdrop-blur border border-n-1/10 rounded-2xl gap-5 shadow-lg`}
      style={{ zIndex: 9999, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }} // Add extra shadow for emphasis
    >
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {avatars.map((avatar, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={avatar}
                  className="w-full h-full object-cover"
                  width={20}
                  height={20}
                  alt={`Avatar ${index + 1}`}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">{time}</div>
        </div>
        <div className="mt-2 text-sm text-n-11">{message}</div>
      </div>
    </div>
  );
};

export default Notification;
