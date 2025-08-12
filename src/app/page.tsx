"use client";
import React, { useState } from "react";
import Footer from "./(components)/footer/Footer";
import UpperFooter from "./(components)/footer/UpperFooter";
import Header from "./(components)/header/Header";
import Navbar from "./(components)/navbar/Navbar";
import styles from "./page.module.css";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleReserveClick = () => setShowForm(true);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reservation saved:\nName: ${name}\nPhone: ${phone}`);
    setShowForm(false);
    setName("");
    setPhone("");
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>
      <div className={styles.mainContainer}>
        <div className={styles.mainRow}>
          <h1 className={styles.mainHeader}>Fresh & Tasty Food</h1>
          <button className={styles.reservationButton} onClick={handleReserveClick}>
            Reserve a Table
          </button>
        </div>
      </div>

      {showForm && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Reserve a Table</h2>
            <form onSubmit={handleFormSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={styles.input}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className={styles.input}
              />
              <div className={styles.buttonGroup}>
                <button type="submit" className={styles.saveButton}>
                  Save
                </button>
                <button type="button" onClick={() => setShowForm(false)} className={styles.cancelButton}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer>
        <UpperFooter />
        <br />
        <Footer />
      </footer>
    </div>
  );
}
