"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUser,
  FaEnvelope,
  FaChalkboardTeacher,
} from "react-icons/fa";
import appLogo from "../../../public/schoollogo.png";

const styles = {
  headerStyle: {
    backgroundImage: "linear-gradient(to right, #3b82f6, #4f46e5)",
    color: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "0.8rem",
  },
  containerStyle: {
    width: "100%",
    padding: "0 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0 auto",
  },
  navLinkStyle: {
    marginRight: "24px",
    color: "white",
    cursor: "pointer",
  },
  mobileMenuStyle: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 40,
  },
  sidebarStyle: {
    position: "fixed",
    top: 0,
    right: 0,
    backgroundColor: "white",
    color: "#333",
    width: "256px",
    padding: "24px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    height: "100%",
    zIndex: 50,
    overflowY: "auto",
  },
  mobileToggle: {
    cursor: "pointer",
  },
};
const Sidebar = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    isMobileMenuOpen && (
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%", // Full height
          width: "256px", // Equivalent to w-64 (64 * 4 = 256px)
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Shadow effect
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)", // Translate based on sidebar state
          transition: "transform 0.3s ease-in-out", // Transition for opening/closing
          zIndex: 50, // z-50
          padding: "20px", // Add some padding
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "8px",
          }}
        >
          <button
            style={{
              color: "#407bfe",
              fontSize: "24px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            onClick={toggleMobileMenu}
            aria-label="Close Sidebar"
          >
            <FaTimes />
          </button>
        </div>

        <nav style={{ padding: "10px 0" }}>
          <Link
            href="/about"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#333",
              fontSize: "18px",
              textDecoration: "none",
              padding: "10px",
              borderRadius: "5px",
              margin: "8px 0",
              transition: "background-color 0.3s", // smooth background transition on hover
            }}
          >
            <FaUser style={{ marginRight: "10px" }} /> {/* User Icon */}
            About Us
          </Link>
          <Link
            href="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#333",
              fontSize: "18px",
              textDecoration: "none",
              padding: "10px",
              borderRadius: "5px",
              margin: "8px 0",
              transition: "background-color 0.3s",
            }}
          >
            <FaEnvelope style={{ marginRight: "10px" }} /> {/* Envelope Icon */}
            Contact
          </Link>
          <Link
            href="/faculty"
            style={{
              display: "flex",
              alignItems: "center",
              color: "#333",
              fontSize: "18px",
              textDecoration: "none",
              padding: "10px",
              borderRadius: "5px",
              margin: "8px 0",
              transition: "background-color 0.3s",
            }}
          >
            <FaChalkboardTeacher style={{ marginRight: "10px" }} />{" "}
            {/* Teacher Icon */}
            Faculty
          </Link>
        </nav>
      </div>
    )
  );
};
const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Initialize as false

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResize = () => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    }
  };

  useEffect(() => {
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  return (
    <header style={styles.headerStyle}>
      <div style={styles.containerStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src={appLogo}
              alt="School Logo"
              style={{ borderRadius: "50%" }}
              width={48}
              height={48}
            />
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginLeft: "1rem",
              }}
            >
              Bright Future School
            </h1>
          </Link>
        </div>

        {/* Show the desktop menu if not mobile */}
        {!isMobile && (
          <nav style={{ display: "flex", flexDirection: "row" }}>
            <Link href="/about" style={styles.navLinkStyle}>
              About Us
            </Link>
            <Link href="/contact" style={styles.navLinkStyle}>
              Contact
            </Link>
            <Link href="/faculty" style={styles.navLinkStyle}>
              Faculty
            </Link>
          </nav>
        )}

        {/* Mobile Menu Toggle Icon - only shows on mobile */}
        {isMobile && (
          <div onClick={toggleMobileMenu} style={styles.mobileToggle}>
            {isMobileMenuOpen ? (
              <FaTimes style={{ color: "white", fontSize: "24px" }} />
            ) : (
              <FaBars style={{ color: "white", fontSize: "24px" }} />
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <Sidebar
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      )}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)", // Change to a darker overlay
            zIndex: 40,
          }}
          onClick={toggleMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
