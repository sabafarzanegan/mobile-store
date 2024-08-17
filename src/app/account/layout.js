import SideNavigation from "@/components/SideNavigation";

function layout({ children }) {
  return (
    <div className="grid grid-cols-[12rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="py-1 ">{children}</div>
    </div>
  );
}

export default layout;
