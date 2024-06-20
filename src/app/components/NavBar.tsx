"use client";
import { useRouter } from "next/navigation";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const router = useRouter();
  return (
    <div className={styles.navBar}>
      <ul >
        <li  onClick={() => router.push("/home")}>
          Home
        </li>
        <li
          onClick={() => router.push("/create-post")}
        >
          Create Post
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
