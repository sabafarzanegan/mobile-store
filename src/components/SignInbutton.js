import { signInaction } from "@/lib/action";
import { FcGoogle } from "react-icons/fc";
function SignInbutton() {
  return (
    <div>
      <form action={signInaction}>
        <button className="flex items-center justify-between gap-x-6 border px-10 py-3 rounded-md text-lg">
          <span>ورود با گوگل</span>
          <FcGoogle />
        </button>
      </form>
    </div>
  );
}

export default SignInbutton;
