const WHATSAPP_URL = "https://wa.me/message/SP3URAEX2527K1";
const INSTAGRAM_URL = "https://instagram.com/hops.beer";
const FACEBOOK_URL =
  "https://facebook.com/111231470783930?ref=xav_ig_profile_page";

export default function SocialLinks() {
  return (
    <div className="socials">
      <a
        className="social"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.13L2 22l5.13-1.53a9.87 9.87 0 0 0 4.9 1.3h.01c5.46 0 9.91-4.45 9.91-9.91C21.95 6.4 17.5 2 12.04 2zm5.8 14.16c-.25.7-1.24 1.29-2 1.45-.53.11-1.22.2-3.56-.76-2.99-1.24-4.9-4.28-5.05-4.48-.15-.2-1.2-1.6-1.2-3.05 0-1.45.75-2.16 1.02-2.45.25-.28.55-.34.73-.34h.53c.17 0 .4-.02.62.48.25.6.85 2.06.92 2.21.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.38-.44.5-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.4 1.5.3.15.47.12.65-.08.17-.2.75-.87.95-1.17.2-.3.4-.25.65-.15.27.1 1.7.8 1.99.95.3.15.5.22.57.35.07.13.07.75-.18 1.46z" />
        </svg>
      </a>
      <a
        className="social"
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" />
        </svg>
      </a>
      <a
        className="social"
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H8v3h3v6h3v-6h3l1-3h-4V9a1 1 0 0 1 1-1z" />
        </svg>
      </a>
    </div>
  );
}
