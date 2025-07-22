import { Save } from "lucide-react";
import { useState } from "react";

const ProfileForm = () => {
  const [firstName, setFirstName] = useState<string>("John");
  return (
    <section className="rounded-xl shadow-md bg-white p-5 ">
      <h2 className="capitalize font-semibold text-xl">personal information</h2>
      <form action="" className="grid grid-cols-2 gap-x-7 gap-y-5 py-5">
        <div className="flex flex-col gap-3">
          <label
            htmlFor=""
            className="text-black/60 font-semibold text-sm capitalize "
          >
            first name
          </label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor=""
            className="text-black/60 font-semibold text-sm capitalize "
          >
            last name
          </label>
          <input
            type="text"
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor=""
            className="text-black/60 font-semibold text-sm capitalize "
          >
            email address
          </label>
          <input
            type="text"
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor=""
            className="text-black/60 font-semibold text-sm capitalize "
          >
            phone number
          </label>
          <input
            type="text"
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor=""
            className="text-black/60 font-semibold text-sm capitalize "
          >
            location
          </label>
          <input
            type="text"
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor=""
            className="text-black/60 font-semibold text-sm capitalize "
          >
            hourly rate
          </label>
          <input
            type="text"
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3 col-span-2">
          <label
            htmlFor=""
            className="text-black/60 font-semibold text-sm capitalize "
          >
            bio
          </label>
          <textarea
            name=""
            id=""
            rows={4}
            className="col-span-2 py-1 px-3 border border-black/20 rounded-lg"
          ></textarea>
        </div>
        <button className="w-fit cursor-pointer p-3 capitalize text-white bg-blue-600 rounded-xl flex items-center gap-3">
          <Save className="w-5 h-5" /> save changes
        </button>
      </form>
    </section>
  );
};

export default ProfileForm;
