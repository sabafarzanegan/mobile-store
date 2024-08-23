import { updateFormAction } from "@/lib/action";
import SubmitButton from "./SubmitButton";

async function UpdateProfileForm({ user }) {
  const { fullName, email, address, city } = user;

  return (
    <form action={updateFormAction} className=" space-y-4 w-[70%] ">
      <label htmlFor="" className="">
        نام
      </label>
      <input
        name="fullName"
        type="text"
        defaultValue={fullName}
        disabled
        className="block w-full px-4 py-2 bg-gray-400 rounded-md outline-none disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300 "
      />
      <label htmlFor="">ایمیل</label>
      <input
        name="email"
        type="email"
        defaultValue={email}
        disabled
        className="block w-full px-4 py-2 bg-gray-400 rounded-md outline-none disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-300 "
      />
      <label htmlFor="">شهر</label>
      <input
        name="city"
        defaultValue={city}
        type="text"
        className="block  w-full px-4 py-2 bg-gray-400 rounded-md outline-none "
      />
      <label htmlFor="">نشانی</label>
      <input
        name="address"
        defaultValue={address}
        type="text"
        className="block w-full px-4 py-2 bg-gray-400 rounded-md outline-none  "
      />
      <SubmitButton />
    </form>
  );
}

export default UpdateProfileForm;
