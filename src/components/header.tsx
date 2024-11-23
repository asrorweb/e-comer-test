import Link from "next/link";
import { Navigation } from "./navigation";
import { ModeToggle } from "./thema-toggle";

function Header() {
  return (
    <header className="glasses-effect py-3 fixed z-40 left-0 right-0 top-0">
      <div className="flex items-center justify-between container mx-auto px-5">
        <Link href={"/"}>Logo</Link>
        <Navigation />
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
