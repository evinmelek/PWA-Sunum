import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <div className={styles.footerContainer}> 
        <div className={styles.bottomRightText}>
          
        </div>
        <Link  className={styles.social} href="https://www.google.com"></Link>
        <Link  className={styles.social} href="https://www.instagram.com"></Link>
        <Link  className={styles.social} href="https://www.facebook.com"></Link>
        <Link  className={styles.social} href="https://www.twitter.com"></Link>
    </div>
    );
};

export default Footer;
