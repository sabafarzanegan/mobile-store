import SignInbutton from "@/components/SignInbutton";

function page() {
  return (
    <div className="mx-auto flex flex-col gap-y-16 items-center justify-center mt-10">
      <div>
        <h3 className="text-base md:text-2xl">
          برای دسترسی به حساب کاربری ابتدا وارد شوید
        </h3>
      </div>
      <SignInbutton />
    </div>
  );
}

export default page;
