import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import PageTransitionWrapper from "./framerMotion/PageTransitionWrapper";

export default function Layout() {
  return (
    <main className="relative flex items-center justify-center text-fontColor">
      <PageTransitionWrapper>
        <Outlet />
      </PageTransitionWrapper>
      <Footer />
    </main>
  );
}
