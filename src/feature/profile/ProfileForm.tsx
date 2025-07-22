import { useState } from "react";
import type { ProfileData } from "../../interfaces/profile/ProfileData";
import { Save } from "lucide-react";

const ProfileForm = () => {
  const [formData, setFormData] = useState<ProfileData>({
    bio: "Experienced freelance web developer and designer with 5+ years of expertise in creating modern, responsive websites and applications.",
    email: "john.doe@example.com",
    phoneNumber: "+1 (555) 123-4567",
    firstName: "john",
    lastName: "doe",
    hourlyRate: 85,
    location: "San Francisco, CA",
  });
  const handleDataChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <section className="rounded-xl shadow-md bg-white p-5 ">
      <h2 className="capitalize font-semibold text-xl">personal information</h2>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          alert(`edited successfully`);
        }}
        className="grid md:grid-cols-2 gap-x-7 gap-y-5 py-5"
      >
        <div className="flex flex-col gap-3">
          <label
            htmlFor="firstName"
            className="text-black/60 font-semibold text-sm capitalize "
          >
            first name
          </label>
          <input
            onChange={handleDataChange}
            id="firstName"
            type="text"
            name="firstName"
            value={formData.firstName}
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="lastName"
            className="text-black/60 font-semibold text-sm capitalize "
          >
            last name
          </label>
          <input
            onChange={handleDataChange}
            id="lastName"
            name="lastName"
            value={formData.lastName}
            type="text"
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email"
            className="text-black/60 font-semibold text-sm capitalize "
          >
            email address
          </label>
          <div>
            <input
              onChange={handleDataChange}
              id="email"
              name="email"
              type="email"
              value={formData.email}
              className="py-2 px-3 border border-black/20 rounded-lg w-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="phoneNumber"
            className="text-black/60 font-semibold text-sm capitalize "
          >
            phone number
          </label>
          <input
            onChange={handleDataChange}
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            type="text"
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="location"
            className="text-black/60 font-semibold text-sm capitalize "
          >
            location
          </label>
          <input
            onChange={handleDataChange}
            id="location"
            name="location"
            value={formData.location}
            type="text"
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="hourlyRate"
            className="text-black/60 font-semibold text-sm capitalize "
          >
            hourly rate
          </label>
          <input
            onChange={handleDataChange}
            id="hourlyRate"
            name="hourlyRate"
            value={formData.hourlyRate}
            type="number"
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3 md:col-span-2">
          <label
            htmlFor="bio"
            className="text-black/60 font-semibold text-sm capitalize "
          >
            bio
          </label>
          <textarea
            onChange={handleDataChange}
            name="bio"
            id="bio"
            rows={4}
            className="col-span-2 p-3 border border-black/20 rounded-lg"
          >
            {formData.bio}
          </textarea>
        </div>
        <button
          type="submit"
          className="w-fit cursor-pointer p-3 capitalize text-white bg-blue-600 transition-colors duration-200 hover:bg-blue-800 rounded-xl flex items-center gap-3"
        >
          <Save className="w-5 h-5" /> save changes
        </button>
      </form>
    </section>
  );
};

export default ProfileForm;
