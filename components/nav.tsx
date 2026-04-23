"use client";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Blog",     href: "/blog"     },
  { label: "Study",    href: "/study"    },
  { label: "Projects", href: "/projects" },
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
      {/* Site name */}
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          fontSize: 20,
          letterSpacing: "0.08em",
          color: "#f5f0e8",
          textDecoration: "none",
          lineHeight: 1,
        }}
      >
        VISHAL CHERUPALLY
      </Link>

      {/* Links */}
      <nav>
        <ul
          style={{
            display: "flex",
            gap: 32,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontFamily: "var(--font-ibm-mono), monospace",
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
      </nav>
    </header>
  );
}
