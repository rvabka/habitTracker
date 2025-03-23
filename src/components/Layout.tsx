import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main className="flex h-screen w-screen gap-4 p-4 text-white 2xl:max-w-[1400px]">
      <div className="flex-grow-1 flex w-full flex-col">
        <div>
          <Outlet />
        </div>
      </div>
    </main>
  );
}
