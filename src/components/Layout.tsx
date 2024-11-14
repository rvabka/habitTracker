import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import UserPanel from "./UserPanel";

export default function Layout() {
  return (
    <main className="flex h-screen w-screen gap-4 p-4 text-white 2xl:max-w-[1400px]">
      <Footer />
      <div className="flex w-full flex-grow-1 flex-col">
        <div>
          <Outlet />
        </div>
      </div>
      <UserPanel />
    </main>
  );
}
