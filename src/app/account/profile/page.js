import UpdateProfileForm from "@/components/UpdateProfileForm";
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/data_server";

async function page() {
  const session = await auth();
  const user = await getUser(session.user.email);

  return (
    <>
      <section className="">
        <h1 className="font-bold text-xl mb-4 ">اطلاعات کاربری</h1>
        <p className="mb-2 text-sm">میتوانید اطلاعات خود را تغییر بدهید.</p>
        <div className=" flex items-center justify-center bg-gray-900 py-6 mt-4 rounded-lg">
          <UpdateProfileForm user={user} />
        </div>
      </section>
    </>
  );
}

export default page;
