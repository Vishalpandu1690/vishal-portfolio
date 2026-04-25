"use client";

import { useEffect, useState } from "react";
import styles from "./concept-drawer.module.css";
import { Bebas_Neue, IBM_Plex_Mono } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const mono = IBM_Plex_Mono({ weight: ["400", "600"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-mono-tp" });

interface ConceptDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subLabel?: string;
  children: React.ReactNode;
}

export default function ConceptDrawer({
  isOpen,
  onClose,
  title,
  subLabel = "Deep Dive",
  children,
}: ConceptDrawerProps) {
  const [mounted, setMounted] = useState(false);

  // Prevent scroll on body when drawer is open
  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ""}`} 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div 
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""} ${bebas.variable} ${mono.variable}`}
        role="dialog"
        aria-modal="true"
      >
        <div className={styles.header}>
          <div className={styles.titleBox}>
            <span className={styles.sub}>{subLabel}</span>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close drawer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className={styles.contentWrap}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
