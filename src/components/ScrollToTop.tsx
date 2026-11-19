import { useEffect } from "react";
import { useLocation } from "wouter";

export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // If there is an anchor hash in the URL, scroll to that element
    if (window.location.hash) {
      const id = window.location.hash.replace(/^#/, "");
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        return undefined;
      }
      // If target element isn't in DOM immediately (e.g. lazy-loaded route chunk),
      // poll with backoff to guarantee smooth scrolling as soon as chunk mounts
      let elapsed = 0;
      const interval = setInterval(() => {
        elapsed += 40;
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          clearInterval(interval);
        } else if (elapsed >= 3000) {
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }
    window.scrollTo({ top: 0, behavior: "instant" });
    return undefined;
  }, [location]);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash) {
        const id = window.location.hash.replace(/^#/, "");
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        } else {
          let elapsed = 0;
          const interval = setInterval(() => {
            elapsed += 40;
            const target = document.getElementById(id);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
              clearInterval(interval);
            } else if (elapsed >= 3000) {
              clearInterval(interval);
            }
          }, 40);
        }
      }
    };

    window.addEventListener("hashchange", handleHash);
    window.addEventListener("popstate", handleHash);
    window.addEventListener("pushState", handleHash);
    window.addEventListener("replaceState", handleHash);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("popstate", handleHash);
      window.removeEventListener("pushState", handleHash);
      window.removeEventListener("replaceState", handleHash);
    };
  }, []);

  return null;
}

export default ScrollToTop;
