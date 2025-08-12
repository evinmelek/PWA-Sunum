"use client";

import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const UpperFooter = () => {
    return (
        <div className={styles.upperFooterContainer}>  
        <Image alt="icon" className={styles.bottomCompanyIcon} src="/icon-chef.png" />
        <Link  className={styles.nav} href="/team">Our Company</Link>
        <Link  className={styles.nav} href="/team">Our Location</Link>
        <Link  className={styles.nav} href="/team">Help Center</Link>
    </div>
    );
};

export default UpperFooter;
