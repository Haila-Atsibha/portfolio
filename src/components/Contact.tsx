"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

export default function Contact() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    if (!siteConfig.email) {
      setNotice("The contact form is ready. Add your email address in src/data/site.ts to enable message delivery.");
      return;
    }

    const data = new FormData(form);
    const subject = `Portfolio inquiry from ${String(data.get("name"))}`;
    const body = `${String(data.get("message"))}\n\nReply to: ${String(data.get("email"))}`;
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setNotice("Your email app should open with your message ready to send.");
    form.reset();
  }

  return (
    <section className="contact-section" id="contact" data-reveal>
      <div className="section-wrap contact-wrap">
        <div className="contact-intro">
          <p className="eyebrow">Get in touch</p>
          <h2>Let&apos;s Build Something</h2>
          <p className="contact-description">
            I&apos;m open to software development opportunities, collaborations,
            and interesting projects.
          </p>
          <div className="contact-links">
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`}><MailIcon /> {siteConfig.email} <ArrowUpRight /></a>
            )}
            {siteConfig.githubUrl && (
              <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer"><GithubIcon /> GitHub <ArrowUpRight /></a>
            )}
            {siteConfig.linkedinUrl && (
              <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn <ArrowUpRight /></a>
            )}
            {!siteConfig.email && !siteConfig.githubUrl && !siteConfig.linkedinUrl && (
              <p className="contact-setup-note">Add your contact links in <code>src/data/site.ts</code> to display them here.</p>
            )}
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading">
            <span>Start a conversation</span>
            <span className="form-step">01 — 03</span>
          </div>
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="How should I address you?" required minLength={2} />
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          <label htmlFor="contact-message">Your message</label>
          <textarea id="contact-message" name="message" placeholder="Tell me a little about what you have in mind..." rows={4} required minLength={10} />
          <button className="button button-primary form-submit" type="submit">Send message <ArrowUpRight /></button>
          <p className="form-notice" role="status" aria-live="polite">{notice}</p>
        </form>
      </div>
    </section>
  );
}
