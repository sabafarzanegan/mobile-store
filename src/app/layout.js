import MainHeader from "@/components/MainHeader";
import "./globals.css";
import localFont from "next/font/local";

const vazirFont = localFont({
  src: "../../public/font/Vazirmatn-VariableFont_wght.ttf",
});

export const metadata = {
  title: "mobile store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazirFont.className} bg-gray-800 text-white px-8 min-h-screen flex flex-col`}>
        <header className="mx-auto max-w-7xl w-full">
          <MainHeader />
        </header>
        <div className="flex-1 px-8 grid ">
          <main className="mx-auto max-w-7xl w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
