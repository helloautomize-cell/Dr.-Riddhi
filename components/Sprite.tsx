/**
 * Inline SVG sprite. Source of truth: 04-website-design/_source/sprite.html.
 * Injected once at the top of <body>; referenced with <use href="#id"/>.
 */
const SPRITE = `
  <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/></symbol>
  <symbol id="i-wa" viewBox="0 0 24 24"><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2z"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="m4.5 7 7.5 6 7.5-6"/></symbol>
  <symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></symbol>
  <symbol id="i-ig" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/></symbol>
  <symbol id="i-yt" viewBox="0 0 24 24"><rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="m10 9.5 5 2.5-5 2.5z" fill="currentColor"/></symbol>
  <symbol id="i-play" viewBox="0 0 24 24"><path d="M7 4.5v15l12-7.5z" fill="currentColor" stroke="none"/></symbol>
  <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></symbol>
  <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 8h16M4 16h10"/></symbol>
  <symbol id="i-star" viewBox="0 0 24 24"><path d="m12 3.5 2.6 5.3 5.9.9-4.2 4.1 1 5.8-5.3-2.8-5.3 2.8 1-5.8L3.5 9.7l5.9-.9z"/></symbol>
  <symbol id="i-alert" viewBox="0 0 24 24"><path d="M12 4 2.5 20h19z"/><path d="M12 10v4M12 17h.01"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 3.5 19 6v5.5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6z"/><path d="m9 12 2 2 4-4"/></symbol>
  <symbol id="i-chat" viewBox="0 0 24 24"><path d="M4 5.5h16v10H9l-5 4z"/><path d="M8 10.5h.01M12 10.5h.01M16 10.5h.01"/></symbol>
  <symbol id="i-cal" viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/></symbol>
  <symbol id="c-cycle" viewBox="0 0 48 48"><circle cx="24" cy="24" r="17"/><path d="M24 7a17 17 0 0 1 17 17" stroke-width="2.6"/><path d="M24 17s5 5.4 5 9a5 5 0 0 1-10 0c0-3.6 5-9 5-9z"/></symbol>
  <symbol id="c-uterus" viewBox="0 0 48 48"><path d="M11 13c-3.5 0-5.5 2-5 5M37 13c3.5 0 5.5 2 5 5M11 13c4.5 0 5.6 2 6.6 5.5 1.3 4.2 1 9.6 3.4 13v8h6v-8c2.4-3.4 2.1-8.8 3.4-13 1-3.5 2.1-5.5 6.6-5.5"/><circle cx="6" cy="19" r="2.4"/><circle cx="42" cy="19" r="2.4"/></symbol>
  <symbol id="c-egg" viewBox="0 0 48 48"><ellipse cx="24" cy="26" rx="12" ry="15"/><circle cx="24" cy="26" r="5"/><path d="M38 10l1.2 3 3 1.2-3 1.2L38 18.4l-1.2-3-3-1.2 3-1.2z"/></symbol>
  <symbol id="c-shield" viewBox="0 0 48 48"><path d="M24 6 38 11v11c0 9-6 15.2-14 18-8-2.8-14-9-14-18V11z"/><path d="m17.5 23.5 4.5 4.5 9-9"/></symbol>
  <symbol id="c-scope" viewBox="0 0 48 48"><rect x="6" y="8" width="26" height="20" rx="3"/><circle cx="19" cy="18" r="5"/><path d="M19 28v6M13 34h12M30 31l12 10"/></symbol>
  <symbol id="c-lotus" viewBox="0 0 48 48"><path d="M24 39c-8 0-14-5-14-12 5 0 10 2 14 6 4-4 9-6 14-6 0 7-6 12-14 12zM24 33c-4-4-5-12 0-20 5 8 4 16 0 20z"/></symbol>
  <symbol id="c-ask" viewBox="0 0 48 48"><path d="M8 11h32v20H20l-8 7v-7H8z"/><path d="M20 18a4 4 0 1 1 5 3.9c-1 .3-1 1.1-1 2.1M24 27h.01"/></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5"/></symbol>
  <symbol id="i-cap" viewBox="0 0 24 24"><path d="M2.5 9 12 4.5 21.5 9 12 13.5z"/><path d="M6.5 11v4.5c0 1.5 2.5 3 5.5 3s5.5-1.5 5.5-3V11M21.5 9v5"/></symbol>
  <symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="9" r="5.5"/><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7"/></symbol>
  <symbol id="i-lang" viewBox="0 0 24 24"><path d="M4 5h9M8.5 3v2M6 5c.5 3.5 3 6.5 6 8M11 5c-.5 3.5-3 6.5-6.5 8"/><path d="m12.5 20 4-9 4 9M14 17h5"/></symbol>
  <symbol id="i-id" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="11" r="2.2"/><path d="M5.8 16c.6-1.6 1.8-2.4 3.2-2.4s2.6.8 3.2 2.4M14.5 10h4M14.5 13.5h3"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.5 4.5"/></symbol>
  <symbol id="i-doc" viewBox="0 0 24 24"><path d="M6 3.5h8l4 4v13H6z"/><path d="M14 3.5v4h4M9 12h6M9 15.5h6"/></symbol>
  <symbol id="i-bag" viewBox="0 0 24 24"><rect x="4" y="7.5" width="16" height="12.5" rx="3"/><path d="M9 7.5V6a3 3 0 0 1 6 0v1.5"/></symbol>
  <symbol id="i-chev" viewBox="0 0 24 24"><path d="m9 6 6 6-6 6"/></symbol>
  <symbol id="i-heart" viewBox="0 0 24 24"><path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/></symbol>
  <symbol id="i-car" viewBox="0 0 24 24"><path d="M5 16.5V12l2-5h10l2 5v4.5"/><path d="M3.5 16.5h17M7 19.5v-3M17 19.5v-3M5 12h14"/></symbol>
  <symbol id="i-train" viewBox="0 0 24 24"><rect x="6" y="3.5" width="12" height="13" rx="3"/><path d="M6 11h12M9 20l1.5-3.5M15 20l-1.5-3.5"/><circle cx="9.5" cy="14" r=".6" fill="currentColor"/><circle cx="14.5" cy="14" r=".6" fill="currentColor"/></symbol>
  <symbol id="c-drop" viewBox="0 0 48 48"><path d="M24 7s12 13 12 21a12 12 0 0 1-24 0c0-8 12-21 12-21z"/><path d="M18.5 29a6 6 0 0 0 5.5 5.5"/></symbol>
  <symbol id="c-ovary" viewBox="0 0 48 48"><ellipse cx="24" cy="25" rx="15" ry="11"/><circle cx="18" cy="22" r="3"/><circle cx="27" cy="20" r="2.4"/><circle cx="30" cy="28" r="3.2"/><circle cx="20" cy="30" r="2"/></symbol>
  <symbol id="c-fibroid" viewBox="0 0 48 48"><path d="M10 14c4 0 6 2 7 6 1.2 4.3 1 9 3.4 12.4V40h7.2v-7.6C30 29 29.8 24.3 31 20c1-4 3-6 7-6"/><circle cx="23" cy="22" r="4.4"/></symbol>
  <symbol id="c-couple" viewBox="0 0 48 48"><circle cx="17" cy="16" r="5"/><circle cx="31" cy="16" r="5"/><path d="M8 38c0-6 4-11 9-11s9 5 9 11M22 38c0-6 4-11 9-11s9 5 9 11"/></symbol>
  <symbol id="c-endo" viewBox="0 0 48 48"><path d="M10 14c4 0 6 2 7 6 1.2 4.3 1 9 3.4 12.4V40h7.2v-7.6C30 29 29.8 24.3 31 20c1-4 3-6 7-6"/><circle cx="12" cy="30" r="1.6"/><circle cx="36" cy="30" r="1.6"/><circle cx="34" cy="36" r="1.2"/><circle cx="14" cy="37" r="1.2"/></symbol>
  <symbol id="c-germ" viewBox="0 0 48 48"><circle cx="24" cy="24" r="10"/><path d="M24 8v6M24 34v6M8 24h6M34 24h6M12.7 12.7l4.2 4.2M31.1 31.1l4.2 4.2M12.7 35.3l4.2-4.2M31.1 16.9l4.2-4.2"/><circle cx="21" cy="22" r="1.6"/><circle cx="27" cy="27" r="1.4"/></symbol>
  <symbol id="c-lap" viewBox="0 0 48 48"><circle cx="24" cy="26" r="15"/><circle cx="24" cy="24" r="2"/><circle cx="17" cy="31" r="1.6"/><circle cx="31" cy="31" r="1.6"/><path d="M24 22V4M17 31l-9-9M31 31l9-9"/></symbol>
  <symbol id="c-hys" viewBox="0 0 48 48"><path d="M10 12c4 0 6 2 7 6 1.2 4.3 1 9 3.4 12.4V38M38 12c-4 0-6 2-7 6-1.2 4.3-1 9-3.4 12.4V38"/><path d="M24 44V22" stroke-width="2.4"/><circle cx="24" cy="21" r="2"/></symbol>
`;

/** All sprite symbol ids, in order. Used by the styleguide icon grid. */
export const SPRITE_IDS = [
  "i-arrow","i-phone","i-wa","i-clock","i-mail","i-pin","i-ig","i-yt","i-play",
  "i-plus","i-menu","i-star","i-alert","i-shield","i-chat","i-cal",
  "c-cycle","c-uterus","c-egg","c-shield","c-scope","c-lotus","c-ask",
  "i-check","i-cap","i-award","i-lang","i-id","i-search","i-doc","i-bag",
  "i-chev","i-heart","i-car","i-train",
  "c-drop","c-ovary","c-fibroid","c-couple","c-endo","c-germ","c-lap","c-hys",
] as const;

export default function Sprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: SPRITE }}
    />
  );
}
