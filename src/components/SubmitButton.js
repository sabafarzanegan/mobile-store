"use client";
import { useFormStatus } from "react-dom";
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-400 disabled:bg-gray-500 disabled:text-gray-300">
      {pending ? "در حال ارسال" : "ارسال اطلاعات"}
    </button>
  );
}

export default SubmitButton;
