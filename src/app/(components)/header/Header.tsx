"use client";

import React from "react";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.headerLogo} ><Image alt="icon" className={styles.img} src="/icon-chef.png"/></Link>
          <p className={styles.headerText}>CALL US :  0212 020 01 22 </p>
        </div>
    );
};

export default Header;
