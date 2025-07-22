import { CameraIcon } from "lucide-react";

const ProfileInfo = () => {
  return (
    <section className="bg-white rounded-xl p-5 shadow-md my-5">
      <div className="flex items-center gap-5">
        <figure className="relative bg-blue-500 rounded-full w-20 h-20 flex justify-center items-center text-white">
          <p className="text-2xl uppercase">jd</p>
          <div className="cursor-pointer rounded-full bg-white p-1 absolute bottom-0 right-0 shadow-md">
            <CameraIcon className="w-5 h-5 text-black" />
          </div>
        </figure>
        <article>
          <h2 className="font-semibold capitalize text-xl">profile photo</h2>
          <p className="text-black/60">update your profile picture</p>
        </article>
      </div>
    </section>
  );
};

export default ProfileInfo;
