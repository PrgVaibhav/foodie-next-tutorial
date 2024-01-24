"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
export default function MainHeader() {
  const path = usePathname();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>
          <Image
            src={logoImg}
            alt="Burger"
            className={classes.logoImg}
            width={100}
            height={100}
            priority
          />
          <span>NextLevel Food</span>
        </Link>
      </div>

      <nav className={classes.nav}>
        <ul className={classes.nav_links}>
          <li>
            <Link
              href={"/meals"}
              className={path.startsWith("/meals") ? classes.active : undefined}
            >
              Browse Meals
            </Link>
          </li>
          <li>
            <Link
              href={"/community"}
              className={path === "/community" ? classes.active : undefined}
            >
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
