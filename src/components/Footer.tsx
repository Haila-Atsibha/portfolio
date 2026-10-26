"use client";

import { useSyncExternalStore } from "react";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const subscribeToYear = () => () => {};
const getCurrentYear = () => String(new Date().getFullYear());
const getServerYear = () => "";

export default function Footer() {
  const year = useSyncExternalStore(subscribeToYear, getCurrentYear, getServerYear);

  return (
    <footer className="site-footer">
      <div className="section-wrap footer-inner">
        <a className="footer-identity" href="#home">
          <span>{siteConfig.name}</span>
          <span>{siteConfig.role}</span>
        </a>
        <p>© {year || "2026"} {siteConfig.name}</p>
        <div className="footer-socials">
          {siteConfig.githubUrl && <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /><ArrowUpRight /></a>}
          {siteConfig.linkedinUrl && <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><LinkedinIcon /><ArrowUpRight /></a>}
          {siteConfig.email && <a href={`mailto:${siteConfig.email}`} aria-label="Email"><MailIcon /></a>}
          <a href="#home" className="back-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
