import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Icon from "@/components/Icon";
import ArticlePage from "@/components/ArticlePage";
import { ARTICLE_FAQS } from "@/lib/faqs";

export const metadata: Metadata = pageMeta({
  path: "/learn/keyhole-recovery/",
  title: "Recovering after keyhole surgery | Dr. Riddhi D. Shah",
  description:
    "What the first two weeks after laparoscopy usually look like: pain, walking, stitches, food, work and the warning signs. By Dr. Riddhi D. Shah, Borivali West.",
  type: "article",
});

export default function KeyholeRecoveryArticle() {
  return (
    <ArticlePage
      path="/learn/keyhole-recovery/"
      title="Recovering after keyhole surgery | Dr. Riddhi D. Shah"
      description="What the first two weeks after laparoscopy usually look like: pain, walking, stitches, food, work and the warning signs. By Dr. Riddhi D. Shah, Borivali West."
      faqs={ARTICLE_FAQS["keyhole-recovery"]}
      crumbs="Keyhole surgery recovery"
      kick="Surgery · 6 min read"
      h1={["Recovering after", "keyhole surgery"]}
      share="Recovering after keyhole surgery — Dr. Riddhi D. Shah"
      cover={{ icon: "c-lap", bg: "var(--brown-deep)", iconColor: "var(--blush)" }}
      sources={[
        "Standard post-laparoscopy recovery guidance.",
      ]}
      related={[
        { href: "/keyhole-surgery/", icon: "c-scope", title: "Keyhole surgery", sub: "How laparoscopy and hysteroscopy work." },
        { href: "/treatments/fibroids/", icon: "c-fibroid", title: "Fibroids", sub: "A common reason for keyhole surgery." },
        { href: "/treatments/ovarian-cysts/", icon: "c-ovary", title: "Ovarian cysts", sub: "Cysts that need removal." },
      ]}
    >
      <div className="brief sr">
        <span className="lbl">In brief</span>
        <ul>
          <li>Most women go home the same day or the next morning after laparoscopy.</li>
          <li>Shoulder-tip pain from the gas is normal for a day or two and passes.</li>
          <li>Walking early, eating normally and watching for warning signs is the whole job of week one.</li>
        </ul>
      </div>
      <p className="lead2">The small cuts make people expect instant recovery. It is still surgery inside, and your body will tell you so for a few days. Here is what the first two weeks actually look like for most patients.</p>

      <h2>Days one to three</h2>
      <p>Expect soreness around the cuts, a bloated tummy, and an odd pain in the shoulder tip. That last one is leftover gas used during the surgery pressing on a nerve; it is normal and fades within a couple of days. Pain relief is prescribed, and most women find it settles fast.</p>
      <p>Walk around the house from day one. Short, frequent walks help the gas absorb, keep the bowels moving and lower the risk of clots. Rest between walks; this is not the week to prove anything.</p>

      <h2>The cuts</h2>
      <p>Keep them clean and dry as advised. Stitches inside dissolve on their own; any visible ones or dressings are reviewed at your follow-up. A little bruising around a cut is normal. Redness that spreads, pus, or a fever is not, and means calling the clinic.</p>

      <h2>Week one and two</h2>
      <ul>
        <li><b>Food:</b> normal home food is fine. Constipation is common after anaesthesia and painkillers, so fluids and fibre help.</li>
        <li><b>Showering:</b> usually allowed within a day or two; avoid soaking the cuts in a tub until cleared.</li>
        <li><b>Lifting:</b> nothing heavy for about two weeks. Bags of groceries count as heavy.</li>
        <li><b>Work:</b> desk jobs often resume in one to two weeks; physical jobs need longer. Your discharge note says what applies to you.</li>
        <li><b>Sex and tampons:</b> wait until your follow-up confirms healing, usually a few weeks.</li>
      </ul>

      <h2>Warning signs, the short list</h2>
      <p>Fever, worsening tummy pain, a cut that is red or oozing, vomiting that does not settle, heavy vaginal bleeding, or pain and swelling in one leg: any of these means a call to the clinic or hospital the same day.</p>
      <p className="callout">
        &quot;The women who recover smoothest are the ones who walk early and ask early. If something feels wrong, call; that is what the follow-up number is for.&quot;
        <br />
        <small style={{ font: "500 13px var(--sans)", color: "var(--ink-2)" }}>Dr. Riddhi D. Shah</small>
      </p>

      <h2>Questions</h2>
      <div className="qa">
        {ARTICLE_FAQS["keyhole-recovery"].map((f) => (
          <details key={f.q}>
            <summary>{f.q}<i><Icon name="i-plus" width={18} height={18} /></i></summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </ArticlePage>
  );
}
