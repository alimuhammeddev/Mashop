import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const contentArea = document.getElementById("scrollable-content");

    if (contentArea) {
      console.log("Scrolling to top for:", pathname);
      contentArea.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;