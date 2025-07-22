import PasswordsEditing from "../feature/profile/PasswordsEditing";
import ProfileForm from "../feature/profile/ProfileForm";
import ProfileInfo from "../feature/profile/ProfileInfo";

function Profile() {
  return (
    <div>
      <h1 className="text-2xl font-bold">profile settings</h1>
      <p className="capitalize text-black/60 py-6">
        manage your account information and preferences
      </p>
      <ProfileInfo />
      <ProfileForm />
      <PasswordsEditing />
    </div>
  );
}

export default Profile;
