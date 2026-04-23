"use client";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Blog",     short: "B", href: "/blog"     },
  { label: "Study",   short: "S", href: "/study"    },
  { label: "Projects", short: "P", href: "/projects" },
];

export default function Nav() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: 56,
        background: "rgba(13,13,13,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #1e1e1e",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 5vw",
      }}
    >
      {/* Site name — full on ≥400px, initials on tiny screens */}
      <Link href="/" style={{ textDecoration: "none", lineHeight: 1 }}>
        <span
          className="nav-name-full h-display"
          style={{ fontSize: 18, letterSpacing: "0.08em", color: "#f5f0e8" }}
        >
          VISHAL CHERUPALLY
        </span>
        <span
          className="nav-name-short h-display"
          style={{ fontSize: 20, letterSpacing: "0.1em", color: "#f5f0e8" }}
        >
          VC
        </span>
      </Link>

      {/* Full nav — hidden on very small, shown ≥560px */}
      <nav>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="mono-label"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#8a8070",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#e8a020")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#8a8070")
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Compact links — visible only on tiny screens (<560px) */}
        <ul className="nav-links-mobile">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="mono-label"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#8a8070",
                  textDecoration: "none",
                }}
              >
                {link.short}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
