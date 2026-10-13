"use client";

import { useSyncExternalStore } from "react";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, GithubIcon, TelegramIcon } from "./Icons";

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
          <span>Software Developer</span>
        </a>
        <p>© {year} {siteConfig.name}. Built with care.</p>
        <div className="footer-socials">
          {siteConfig.githubUrl && <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub profile"><GithubIcon /><ArrowUpRight /></a>}
          {siteConfig.telegramUrl && <a href={siteConfig.telegramUrl} target="_blank" rel="noreferrer" aria-label="Telegram profile"><TelegramIcon /><ArrowUpRight /></a>}
          <a href="#home" className="back-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
