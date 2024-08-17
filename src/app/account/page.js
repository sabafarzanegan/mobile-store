import { auth } from "@/lib/auth";

async function page() {
  const session = await auth();
  return (
    <div className="flex items-center gap-x-4">
      <p>سلام</p>
      <h5 className="text-xl text-red-500">{session.user.name}</h5>
    </div>
  );
}

export default page;
