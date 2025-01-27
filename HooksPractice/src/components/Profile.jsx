import React from "react";

const Profile = () => {
  const user = {
    name: "HEDY LAMAR",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
    imageSize: 80,
  };
  return (
    <>
      <div className="h-48 w-80 bg-slate-100 rounded-lg p-4 shadow-md">
        <h1 className="text-xl font-bold">{user.name}</h1>
        <img
          src={user.imageUrl}
          alt={`photo of ${user.name}`}
          style={{ width: user.imageSize, height: user.imageSize }}
          className="rounded-full bg-cover bg-center border-4 border-indigo-400"
        />
      </div>
    </>
  );
};

export default Profile;
