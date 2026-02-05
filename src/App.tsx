import "./App.css";
import { useRef, useState } from "react";



import ManyAppsMain from "./assets/multiApps.png";
import TrustedToolsLogo from "./assets/TrustedToolsLogo.svg";
import TikTokIcon from "./assets/tiktokIcon.svg";
import XIcon from "./assets/xIcon.svg";
import InstaIcon from "./assets/instaIcon.svg";

export default function App() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openPrivacy, setOpenPrivacy] = useState(false);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const privacyRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="tt-page">
      {/* Top brand */}
      <header className="tt-header">
        <img className="tt-logo" src={TrustedToolsLogo} alt="Trusted Tools" />
      </header>

      {/* Hero */}
            {/* Hero */}
      <main className="tt-hero">
        <section className="tt-left">
          <h1 className="tt-title">
  Get Notified When
  <br />
  We Launch
</h1>


          <form
            className="tt-form"
            onSubmit={(e) => {
              e.preventDefault();
              // coming soon: wire up email capture
            }}
          >
            <div className="tt-pill">
              <input
                className="tt-pillInput"
                type="email"
                placeholder="Enter your email address"
                autoComplete="email"
              />
              <button className="tt-pillBtn" type="submit">
                Notify Me
              </button>
            </div>
          </form>

          <p className="tt-note">Don’t worry, we won’t spam you.</p>
        </section>

        <section className="tt-right" aria-hidden="true">
          <div className="tt-art">
            <div className="tt-glow" />
            <div className="tt-circle" />
            <img className="tt-heroImage" src={ManyAppsMain} alt="" />
          </div>
        </section>

        {/* socials moved to dedicated lower frame below */}
            </main>

      {/* Socials lower frame (not floating) */}
      <section className="tt-socialsFrame" aria-label="Social links">
        <div className="tt-socials">
          <a className="tt-social" href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <img src={TikTokIcon} alt="" />
          </a>
          <a className="tt-social" href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
            <img src={XIcon} alt="" />
          </a>
          <a className="tt-social" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={InstaIcon} alt="" />
          </a>
        </div>
      </section>



      <SiteAccordions
        openAbout={openAbout}
        setOpenAbout={setOpenAbout}
        openPrivacy={openPrivacy}
        setOpenPrivacy={setOpenPrivacy}
        aboutRef={aboutRef}
        privacyRef={privacyRef}
      />

      <SiteFooter
        onOpenAbout={() => {
          setOpenAbout(true);
          setTimeout(() => aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
        }}
        onOpenPrivacy={() => {
          setOpenPrivacy(true);
          setTimeout(() => privacyRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
        }}
      />

    </div>
  );
}


function SiteAccordions({
  openAbout,
  setOpenAbout,
  openPrivacy,
  setOpenPrivacy,
  aboutRef,
  privacyRef,
}: {
  openAbout: boolean;
  setOpenAbout: React.Dispatch<React.SetStateAction<boolean>>;
  openPrivacy: boolean;
  setOpenPrivacy: React.Dispatch<React.SetStateAction<boolean>>;
  aboutRef: React.RefObject<HTMLDivElement>;
  privacyRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <section className="tt-sections">
      <div className="tt-sectionsInner">
        {/* About */}
        <div className="tt-accItem" id="about-us" ref={aboutRef}>
          <button
            type="button"
            className="tt-accHeader"
            onClick={() => setOpenAbout((v) => !v)}
            aria-expanded={openAbout}
          >
            <span className="tt-accIcon">{openAbout ? "−" : "+"}</span>
            <span className="tt-accTitle">About Us</span>
          </button>

          {openAbout && (
            <div className="tt-accBody">
              <div className="tt-accBlock">
                <strong>About Trusted Tools</strong>
                <p className="tt-accP">
                  Trusted Tools builds simple, practical web tools designed to reduce uncertainty, confusion, and wasted time in everyday decisions.
                </p>
                <p className="tt-accP">
                  We focus on clarity over cleverness — tools that explain what’s visible, what’s missing, and what can be verified next.
                </p>
              </div>

              <div className="tt-divider" />

              <div className="tt-accBlock">
                <strong>What We Build</strong>
                <p className="tt-accP">
                  Trusted Tools creates lightweight utilities for tasks like link checks, document review, and signal-based analysis — without giving advice or making claims about outcomes.
                </p>
                <p className="tt-accP">
                  Our tools are designed to be transparent, conservative, and easy to understand.
                </p>
              </div>

              <div className="tt-divider" />

              <div className="tt-accBlock">
                <strong>Our Approach</strong>
                <p className="tt-accP">
                  Whenever possible, we favor deterministic logic over opaque systems.
                </p>
                <p className="tt-accP">
                  If something can’t be verified, we say so — clearly and directly.
                </p>
              </div>

              <div className="tt-divider" />

              <div className="tt-accBlock">
                <strong>Why Trusted Tools</strong>
                <p className="tt-accP">
                  Because people deserve tools that respect their time, privacy, and intelligence.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Privacy */}
        <div className="tt-accItem" id="privacy-policy" ref={privacyRef}>
          <button
            type="button"
            className="tt-accHeader"
            onClick={() => setOpenPrivacy((v) => !v)}
            aria-expanded={openPrivacy}
          >
            <span className="tt-accIcon">{openPrivacy ? "−" : "+"}</span>
            <span className="tt-accTitle">Privacy Policy</span>
          </button>

          {openPrivacy && (
  <div className="tt-accBody">
    <div className="tt-accBlock">
      <strong>Privacy Policy</strong>
      <strong>Last updated: February 4, 2026</strong>

      <p className="tt-accP">
        Trusted Tools (“we,” “our,” or “us”) operates the website Trusted-Tools.com and related tools and services (collectively, the “Service”).
      </p>
      <p className="tt-accP">
        We respect your privacy and are committed to protecting the personal information you share with us.
      </p>
    </div>

    <div className="tt-divider" />

    <div className="tt-accBlock">
      <strong>Information We Collect</strong>

      <p className="tt-accP">
        <strong>Email Addresses</strong>
        <br />
        We collect email addresses when you voluntarily submit them, such as when you sign up for updates, join a mailing list, or request access to a product or feature. Email collection and management is handled using MailerLite, our email service provider.
      </p>

      <p className="tt-accP">
        <strong>Automatically Collected Information</strong>
        <br />
        When you visit the site, limited technical data may be collected automatically, including browser type, device type, approximate location (city or region), and pages visited. This data is used for basic analytics, security, and site performance and does not personally identify you.
      </p>
    </div>

    <div className="tt-divider" />

    <div className="tt-accBlock">
      <strong>How We Use Your Information</strong>
      <p className="tt-accP">
        We use collected information only to send product updates or notifications you requested, communicate about Trusted Tools products or services, improve site functionality and reliability, and comply with legal obligations.
      </p>
      <p className="tt-accP">We do not sell, rent, or trade your personal information.</p>
    </div>

    <div className="tt-divider" />

    <div className="tt-accBlock">
      <strong>Email Communications</strong>
      <p className="tt-accP">
        If you provide your email address, you may receive occasional updates related to Trusted Tools. You can unsubscribe at any time using the link in any email. Unsubscribing stops future emails immediately.
      </p>
      <p className="tt-accP">
        Emails are sent via MailerLite, which processes your data in accordance with their privacy and security standards.
      </p>
    </div>

    <div className="tt-divider" />

    <div className="tt-accBlock">
      <strong>Cookies and Tracking</strong>
      <p className="tt-accP">
        Trusted-Tools.com may use minimal cookies or similar technologies for basic site functionality and anonymous analytics.
      </p>
      <p className="tt-accP">
        We do not use behavioral advertising cookies or third-party ad trackers.
      </p>
    </div>

    <div className="tt-divider" />

    <div className="tt-accBlock">
      <strong>Data Sharing</strong>
      <p className="tt-accP">
        We only share data with service providers required to operate the site, such as MailerLite, or with legal authorities when required by law.
      </p>
      <p className="tt-accP">
        We never share personal data for marketing or advertising purposes.
      </p>
    </div>

    <div className="tt-divider" />

    <div className="tt-accBlock">
      <strong>Data Retention</strong>
      <p className="tt-accP">
        We retain personal information only as long as necessary to provide requested services and meet legal or operational requirements.
      </p>
      <p className="tt-accP">
        You may request deletion of your data at any time.
      </p>
    </div>

    <div className="tt-divider" />

    <div className="tt-accBlock">
      <strong>Your Rights</strong>
      <p className="tt-accP">
        Depending on your location, you may have the right to access the personal data we hold about you, request correction or deletion, or withdraw consent for email communications.
      </p>
      <p className="tt-accP">
        Requests can be made by contacting us directly.
      </p>
    </div>

    <div className="tt-divider" />

    <div className="tt-accBlock">
      <strong>Security</strong>
      <p className="tt-accP">
        We take reasonable technical and organizational measures to protect your information. However, no online system is completely secure.
      </p>
    </div>

    <div className="tt-divider" />

    <div className="tt-accBlock">
      <strong>Third-Party Links</strong>
      <p className="tt-accP">
        Our site may link to external websites. We are not responsible for the privacy practices of those sites.
      </p>
    </div>

    <div className="tt-divider" />

    <div className="tt-accBlock">
      <strong>Changes to This Policy</strong>
      <p className="tt-accP">
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
      </p>
    </div>

    <div className="tt-divider" />

    <div className="tt-accBlock">
      <strong>Contact</strong>
      <p className="tt-accP">
        If you have questions about this Privacy Policy or your data, contact us at:
      </p>
      <p className="tt-accP">support@trusted-tools.com</p>
    </div>
  </div>
)}

        </div>
      </div>
    </section>
  );
}

function SiteFooter({
  onOpenAbout,
  onOpenPrivacy,
}: {
  onOpenAbout: () => void;
  onOpenPrivacy: () => void;
}) {
  return (
    <footer className="tt-footer">
      <div className="tt-footerTop">
        <div className="tt-footerInner">
          <div className="tt-footerColLeft">
            <img className="tt-footerLogo" src={TrustedToolsLogo} alt="Trusted Tools" />
            <p className="tt-footerSlogan">Practical tools for clearer decisions.</p>
          </div>

          <div className="tt-footerCol">
            <a className="tt-footerLink" href="https://ghostjobs.trusted-tools.com/">
              Ghost Job Checker
            </a>
            <a className="tt-footerLink" href="https://trusted-tools.com/">
              Salary Range Signals Estimator
            </a>
            <a className="tt-footerLink" href="https://trusted-tools.com/">
              Policy Proof
            </a>
            <a className="tt-footerLink" href="https://trusted-tools.com/">
              Checklist Extractor
            </a>
          </div>

          <div className="tt-footerColRight">
            <div className="tt-footerNote">We aim to meet WCAG 2.1 AA guidelines.</div>
            <button type="button" className="tt-footerAnchor" onClick={onOpenAbout}>
              About Us
            </button>
            <button type="button" className="tt-footerAnchor" onClick={onOpenPrivacy}>
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      <div className="tt-footerBar">
        <div className="tt-footerInner tt-footerBarInner">
          <div className="tt-footerSocials">
           <a className="tt-footerSocial" href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">

              <img src={TikTokIcon} alt="" />
            </a>
            <a className="tt-footerSocial" href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img src={XIcon} alt="" />
            </a>
            <a className="tt-footerSocial" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={InstaIcon} alt="" />
            </a>
          </div>

          <div className="tt-footerCopy">© 2026 Trusted Tools</div>
        </div>
      </div>
    </footer>
  );
}
