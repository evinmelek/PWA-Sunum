"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className={styles.navContainer}>
        <div className={styles.navRouters}>
            <Link href="/about-us" className={styles.navRouter}>About Us</Link>
            <Link href="/service" className={styles.navRouter}>Our Service</Link>
            <Link href="/team" className={styles.navRouter}>Our Team</Link>
            <Link href="/testimonials" className={styles.navRouter}>Testimonials</Link> 
        </div>
    </div> 
    );
};

export default Navbar;
