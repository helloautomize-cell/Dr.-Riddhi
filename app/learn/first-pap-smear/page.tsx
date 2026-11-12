import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Confirm from "@/components/Confirm";
import ArticlePage from "@/components/ArticlePage";
import { ARTICLE_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Your first Pap smear, step by step | Dr. Riddhi D. Shah",
  description:
    "What actually happens during a Pap smear, how to prepare, what it feels like and when results come. By Dr. Riddhi D. Shah, Borivali West.",
};

export default function FirstPapSmearArticle() {
  return (
    <ArticlePage
      crumbs="First Pap smear"
      kick="Screening · 5 min read"
      h1={["Your first Pap smear,", "step by step"]}
      share="Your first Pap smear, step by step — Dr. Riddhi D. Shah"
      cover={{ icon: "c-shield", bg: "var(--halo)", iconColor: "var(--brown)" }}
      sources={[
        "WHO guideline for cervical cancer screening. <Confirm />",
        "ICMR / national screening guidance. <Confirm />",
      ]}
      related={[
        { href: "/treatments/pap-smear-hpv-vaccine/", icon: "c-shield", title: "Pap smear and HPV vaccine", sub: "Who needs it and when." },
        { href: "/treatments/infections-discharge/", icon: "c-germ", title: "Infections and discharge", sub: "A common first-visit reason." },
        { href: "/your-first-visit/", icon: "c-ask", title: "Your first visit", sub: "What to expect start to finish." },
      ]}
    >
      <div className="brief sr">
        <span className="lbl">In brief</span>
        <ul>
          <li>A Pap smear takes a few minutes and is usually uncomfortable, not painful.</li>
          <li>It checks the cervix for cell changes long before they can become a problem.</li>
          <li>Come on a day you are not on your period, and skip intercourse for a day or two before.</li>
        </ul>
      </div>
      <p className="lead2">Most women put off their first smear for years because nobody has told them what actually happens. Here it is, step by step, exactly as it goes in the consultation room.</p>

      <h2>Before the test</h2>
      <p>Book for a day you are not bleeding, ideally mid-cycle. Avoid intercourse, tampons and vaginal creams or washes for 24 to 48 hours before, because they can wash away the cells the test needs. Wear anything comfortable; you only undress from the waist down, in private.</p>

      <h2>During the test</h2>
      <ul>
        <li>You lie back on the examination table. A female attendant is always in the room.</li>
        <li>A speculum, a smooth instrument, is gently placed so the cervix can be seen. This is the unfamiliar part; it feels like pressure.</li>
        <li>A soft brush sweeps the cervix for a few seconds to collect cells. Most women describe it as odd rather than painful.</li>
        <li>The speculum comes out and you are done. The whole thing takes a few minutes.</li>
      </ul>
      <p>You can ask to pause or stop at any point, and the test only proceeds at your pace.</p>

      <h2>After the test</h2>
      <p>A little spotting afterwards can happen and settles on its own. Results take a few days. Most smears come back normal, in which case you simply repeat it every three to five years.</p>

      <h2>If the report is not normal</h2>
      <p>An abnormal result is not a cancer diagnosis; it usually means some cells need a closer look or a repeat test after a few months. The next step, sometimes a colposcopy, is explained before anything happens.</p>
      <p className="callout">
        &quot;The women who are most nervous beforehand are usually the ones who say, that was it? afterwards. Knowing the steps is half the battle.&quot;
        <br />
        <small style={{ font: "500 13px var(--sans)", color: "var(--ink-2)" }}>Dr. Riddhi D. Shah <Confirm label="approve quote" /></small>
      </p>

      <h2>Questions</h2>
      <div className="qa">
        {ARTICLE_FAQS["first-pap-smear"].map((f) => (
          <details key={f.q}>
            <summary>{f.q}<i><Icon name="i-plus" width={18} height={18} /></i></summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </ArticlePage>
  );
}
