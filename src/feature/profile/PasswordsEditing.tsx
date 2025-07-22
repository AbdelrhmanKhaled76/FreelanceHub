import { useState } from "react";
import type { PasswordData } from "../../interfaces/profile/PasswordData";
import { Lock } from "lucide-react";

const PasswordsEditing = () => {
  const [passwordData, setPasswordData] = useState<PasswordData | null>(null);
  function handleDataChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div className="p-5 bg-white shadow-md my-5 rounded-2xl">
      <h2 className="font-semibold text-xl capitalize">change password</h2>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (passwordData) alert(`edited successfully`);
          else alert("you must put value to password before editing");
        }}
        className="grid grid-cols-1 gap-x-7 gap-y-5 py-5"
      >
        <div className="flex flex-col gap-3">
          <label
            htmlFor="currentPassword"
            className="text-black/60 font-semibold text-sm capitalize "
          >
            current password
          </label>
          <input
            onChange={handleDataChange}
            id="currentPassword"
            type="password"
            name="currentPassword"
            value={passwordData?.currentPassword}
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="newPassword"
            className="text-black/60 font-semibold text-sm capitalize "
          >
            new password
          </label>
          <input
            onChange={handleDataChange}
            id="newPassword"
            name="newPassword"
            value={passwordData?.newPassword}
            type="password"
            className="py-2 px-3 border border-black/20 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="confirmPassword"
            className="text-black/60 font-semibold text-sm capitalize "
          >
            confirm password
          </label>
          <div>
            <input
              onChange={handleDataChange}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={passwordData?.confirmPassword}
              className="py-2 px-3 border border-black/20 rounded-lg w-full"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-fit cursor-pointer p-3 capitalize text-white bg-red-600 transition-colors duration-200 hover:bg-red-800 rounded-xl flex items-center gap-3"
        >
          <Lock className="w-5 h-5" /> save changes
        </button>
      </form>
    </div>
  );
};

export default PasswordsEditing;
