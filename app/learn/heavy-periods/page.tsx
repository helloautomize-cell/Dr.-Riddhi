import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Confirm from "@/components/Confirm";
import ArticlePage from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "How heavy is too heavy? Periods explained | Dr. Riddhi D. Shah",
  description:
    "How to tell heavy periods from normal ones: pad counts, clots, flooding and tiredness, and when to get checked. By Dr. Riddhi D. Shah, Borivali West.",
};

export default function HeavyPeriodsArticle() {
  return (
    <ArticlePage
      crumbs="Heavy periods"
      kick="Periods · 4 min read"
      h1={["How heavy is", "too heavy?"]}
      share="How heavy is too heavy? — Dr. Riddhi D. Shah"
      cover={{ icon: "c-drop", bg: "var(--pink)", iconColor: "var(--pink-100)" }}
      sources={[
        "FIGO recommendations on terminology and causes of abnormal uterine bleeding. <Confirm />",
        "Indian guidance on heavy menstrual bleeding. <Confirm />",
      ]}
      related={[
        { href: "/treatments/period-problems/", icon: "c-drop", title: "Period problems", sub: "What happens at your visit." },
        { href: "/treatments/fibroids/", icon: "c-fibroid", title: "Fibroids", sub: "A common cause of heavy bleeding." },
        { href: "/learn/pcos-myths/", icon: "c-ovary", title: "Five PCOS myths", sub: "Article · 6 min read." },
      ]}
    >
      <div className="brief sr">
        <span className="lbl">In brief</span>
        <ul>
          <li>Changing protection every one to two hours, passing clots, or bleeding past a week counts as heavy.</li>
          <li>Heavy periods are common and treatable, but they can quietly cause anaemia.</li>
          <li>A scan and a blood test usually find the reason.</li>
        </ul>
      </div>
      <p className="lead2">Women often tell me their periods are normal, then mention they change a pad every hour and plan their week around the bathroom. Heavy is not a feeling; it has signs you can actually count.</p>

      <h2>The signs you can count</h2>
      <ul>
        <li>Soaking a pad or tampon every one to two hours, for several hours</li>
        <li>Needing to change protection at night, or doubling up</li>
        <li>Passing clots larger than about a one-rupee coin, often</li>
        <li>Bleeding for more than seven days</li>
        <li>Flooding through clothes or bedding</li>
      </ul>
      <p>Any one of these regularly is a reason for a check, even if it has always been this way for you.</p>

      <h2>The tiredness is a clue too</h2>
      <p>Heavy periods lose iron. If you feel unusually tired, breathless on stairs, look paler, or your hair is falling more than usual, your haemoglobin may be low. A simple blood test answers it, and iron is easy to replace once we know.</p>

      <h2>What causes it</h2>
      <p>Fibroids and adenomyosis top the list, followed by hormone patterns, thyroid changes and polyps. Sometimes no cause is found and the bleeding is still very treatable. The point of the visit is to find which category you fall into, because the treatment is different for each.</p>

      <h2>What to do before your visit</h2>
      <p>Note your last three period dates and count how many pads you use on the heaviest day. Bring any old reports. That is genuinely all the homework needed.</p>
      <p className="callout">
        &quot;So many women have quietly rearranged their lives around heavy periods. Once we find the cause, most wish they had come in years earlier.&quot;
        <br />
        <small style={{ font: "500 13px var(--sans)", color: "var(--ink-2)" }}>Dr. Riddhi D. Shah <Confirm label="approve quote" /></small>
      </p>

      <h2>Questions</h2>
      <div className="qa">
        <details><summary>Is it heavy if it has always been like this?<i><Icon name="i-plus" width={18} height={18} /></i></summary><p>Yes. Long-standing does not mean normal. Many women bleed heavily from their first periods and assume everyone does.</p></details>
        <details><summary>When is heavy bleeding an emergency?<i><Icon name="i-plus" width={18} height={18} /></i></summary><p>Soaking a pad every hour for several hours, bleeding with dizziness or fainting, or bleeding with severe tummy pain needs urgent care. Medical emergency? Call 108 or 112.</p></details>
        <details><summary>Will I need surgery for heavy periods?<i><Icon name="i-plus" width={18} height={18} /></i></summary><p>Usually not. Most heavy periods are controlled with medicines. Surgery is reserved for causes like fibroids that do not respond, and it is always a discussion, not a default.</p></details>
      </div>
    </ArticlePage>
  );
}
