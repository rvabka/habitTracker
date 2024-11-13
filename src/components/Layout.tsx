import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import PageTransitionWrapper from "./framerMotion/PageTransitionWrapper";

export default function Layout() {
  return (
    <main className="flex h-screen text-white">
      <Footer />
      <PageTransitionWrapper>
        <Outlet />
      </PageTransitionWrapper>
    </main>
  );
}
