import React from "react";
import ProfilePlatformCards from "./ProfilePlatformCards";

const ProfileCodingPlatforms = ({ platforms }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl lg:text-2xl">Coding Platforms</h2>
      {platforms?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {platforms?.map((platform, idx) => {
              return (
                <ProfilePlatformCards
                  key={idx}
                  platform={platform.platform}
                  username={platform.username}
                  highlights={platform.highlights}
                />
              );
            })}
          </div>
        </>
      ) : (
        <h2 className="text-xl text-center opacity-75">No Coding Platforms To Show!</h2>
      )}
    </div>
  );
};

export default ProfileCodingPlatforms;
