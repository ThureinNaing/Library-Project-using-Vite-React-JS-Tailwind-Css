import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import "./style.css";
import useTheme from "../../Hooks/useTheme";
import { useEffect } from "react";

export default function Layout() {
  const location = useLocation();
  console.log(location.pathname);

  let { isDark } = useTheme();

  let body = document.body;

  useEffect(() => {
    if (isDark) {
      body.classList.add("bg-dbg");
    } else {
      body.classList.remove("bg-dbg");
    }
  }, [isDark]);

  return (
    <div className={isDark ? "bg-dbg" : "bg-white"}>
      <Navbar />
      <SwitchTransition>
        <CSSTransition timeout={200} classNames="fade" key={location.pathname}>
          <div className="max-w-6xl mx-auto p-3">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
