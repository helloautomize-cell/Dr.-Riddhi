import type { Metadata } from "next";
import Icon from "@/components/Icon";
import Confirm from "@/components/Confirm";
import ArticlePage from "@/components/ArticlePage";
import { ARTICLE_FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Planning a baby? Start three months early | Dr. Riddhi D. Shah",
  description:
    "The checks, vaccines and vitamins to sort out before you start trying: folic acid, thyroid, anaemia, rubella and medicines. By Dr. Riddhi D. Shah, Borivali West.",
};

export default function PlanningABabyArticle() {
  return (
    <ArticlePage
      crumbs="Planning a baby"
      kick="Pregnancy plans · 5 min read"
      h1={["Planning a baby?", "Start three months early"]}
      share="Planning a baby? Start three months early — Dr. Riddhi D. Shah"
      cover={{ icon: "c-egg", bg: "var(--sand)", iconColor: "var(--pink)" }}
      sources={[
        "WHO and FIGO guidance on preconception care. <Confirm />",
        "FOGSI guidance on preconception optimisation. <Confirm />",
      ]}
      related={[
        { href: "/treatments/planning-a-pregnancy/", icon: "c-egg", title: "Planning a pregnancy", sub: "What the preconception visit covers." },
        { href: "/treatments/fertility-check/", icon: "c-couple", title: "Fertility check for couples", sub: "When pregnancy is taking time." },
        { href: "/learn/pcos-myths/", icon: "c-ovary", title: "Five PCOS myths", sub: "Article · 6 min read." },
      ]}
    >
      <div className="brief sr">
        <span className="lbl">In brief</span>
        <ul>
          <li>Start folic acid about three months before you try; it works best with a head start.</li>
          <li>A preconception check covers blood health, thyroid, vaccines and your current medicines.</li>
          <li>Fixing small things now is far easier than fixing them in the first weeks of pregnancy.</li>
        </ul>
      </div>
      <p className="lead2">The earliest weeks of pregnancy, when the baby&apos;s spine and organs are forming, are exactly the weeks most women do not yet know they are pregnant. That is why the useful work happens before you conceive.</p>

      <h2>The one tablet that matters most</h2>
      <p>Folic acid, started about three months before trying, lowers the risk of spine and brain defects in the baby. It is cheap, safe and the single most evidence-backed thing on this list. Almost every woman planning a pregnancy should be on it.</p>

      <h2>The checks worth doing</h2>
      <ul>
        <li><b>Haemoglobin.</b> Anaemia is extremely common and makes pregnancy harder on you and the baby. Iron now is easy.</li>
        <li><b>Thyroid.</b> An untreated thyroid problem affects both conceiving and the early pregnancy. One blood test rules it in or out.</li>
        <li><b>Blood sugar.</b> If you are at risk of diabetes, knowing your numbers before pregnancy changes the plan.</li>
        <li><b>Rubella immunity.</b> The vaccine protects the baby from a preventable infection, but it cannot be given during pregnancy, so it has to happen now.</li>
      </ul>

      <h2>The medicines conversation</h2>
      <p>Bring a list of everything you take, including supplements and ayurvedic or home remedies. Most medicines have pregnancy-safe versions; a few need swapping before conception, not after. This is a five-minute review that is easy to do early and awkward to do late.</p>

      <h2>Timing, realistically</h2>
      <p>Most couples conceive within a year of trying. If your periods are irregular, you have a known condition, or you are over 35, mention it at the check so your timeline is realistic rather than optimistic.</p>
      <p className="callout">
        &quot;A preconception visit is usually one appointment and a short list. The couples who do it walk into pregnancy already ahead.&quot;
        <br />
        <small style={{ font: "500 13px var(--sans)", color: "var(--ink-2)" }}>Dr. Riddhi D. Shah <Confirm label="approve quote" /></small>
      </p>

      <h2>Questions</h2>
      <div className="qa">
        {ARTICLE_FAQS["planning-a-baby"].map((f) => (
          <details key={f.q}>
            <summary>{f.q}<i><Icon name="i-plus" width={18} height={18} /></i></summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </ArticlePage>
  );
}
