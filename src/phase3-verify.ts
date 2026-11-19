import { Navbar, Footer, Layout, NAV_ITEMS } from "@/components/Layout";

export function verifyPhase3Exports() {
  const navItemsValid =
    NAV_ITEMS.length === 4 &&
    NAV_ITEMS[0].href === "/services" &&
    NAV_ITEMS[1].href === "/work" &&
    NAV_ITEMS[2].href === "/about" &&
    NAV_ITEMS[3].href === "/contact";

  return {
    hasNavbar: typeof Navbar === "function",
    hasFooter: typeof Footer === "function",
    hasLayout: typeof Layout === "function",
    navItemsValid,
    navCount: NAV_ITEMS.length,
  };
}
