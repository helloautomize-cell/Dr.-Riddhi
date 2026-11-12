import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Link from "next/link";
import Icon from "@/components/Icon";
import ArticleFx from "@/components/ArticleFx";
import { site } from "@/lib/site-config";
import { ARTICLE_FAQS } from "@/lib/faqs";
import { JsonLd, articleLd, breadcrumbLd, faqPageLd } from "@/lib/schema";
import "../article.css";

export const metadata: Metadata = pageMeta({
  path: "/learn/pcos-myths/",
  title: "Five PCOS myths, and what is actually true | Dr. Riddhi D. Shah",
  description:
    "Five common PCOS myths explained by gynaecologist Dr. Riddhi D. Shah, Borivali West: pregnancy, weight, cysts and treatment.",
  type: "article",
});

const MYTHS = [
  { m: "Myth 1", q: "\u201CPCOS means I can never get pregnant.\u201D", a: "Many women with PCOS conceive naturally. Others need medicine to help release an egg. Planning early helps." },
  { m: "Myth 2", q: "\u201CThe cysts have to be removed.\u201D", a: "They are small follicles, part of how the ovary works in PCOS. They do not need surgery." },
  { m: "Myth 3", q: "\u201COnly overweight women get PCOS.\u201D", a: "Women of any size can have PCOS. Weight can make symptoms stronger, but it is not the cause." },
  { m: "Myth 4", q: "\u201CRegular periods mean no PCOS.\u201D", a: "Some women with PCOS have fairly regular cycles. Acne, hair changes and blood tests also count." },
  { m: "Myth 5", q: "\u201CThe pill is the only treatment.\u201D", a: "Treatment depends on your symptoms and goals. Lifestyle steps, other medicines and fertility support are all options." },
];

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

export default function PcosMythsArticle() {
  return (
    <>
      <JsonLd
        data={[
          articleLd({
            path: "/learn/pcos-myths/",
            title: "Five PCOS myths, and what is actually true | Dr. Riddhi D. Shah",
            description:
              "Five common PCOS myths explained by gynaecologist Dr. Riddhi D. Shah, Borivali West: pregnancy, weight, cysts and treatment.",
          }),
          breadcrumbLd([
            { label: "Home", path: "/" },
            { label: "Learn", path: "/learn/" },
            { label: "PCOS myths" },
          ]),
          faqPageLd(ARTICLE_FAQS["pcos-myths"]),
        ]}
      />
      <div className="rp" id="rp"></div>
      <section className="ah2">
        <div className="wrap">
          <nav className="crumbs rv" aria-label="Breadcrumb">
            <Link href="/">Home</Link><i></i><Link href="/learn/">Learn</Link><i></i><span>PCOS myths</span>
          </nav>
          <div className="in3">
            <span className="kick rv" style={d(1)}>PCOS · 6 min read</span>
            <h1 className="h1i" style={{ marginTop: 18 }}>
              <span className="ln"><span style={d(1)}>Five PCOS myths, and</span></span>
              <span className="ln"><span style={d(2)}><em>what is actually true</em></span></span>
            </h1>
            <div className="auth rv" style={d(4)}>
              <img src="/images/halo-portrait-192.webp" alt="" />
              <span><b>Dr. Riddhi D. Shah</b>Published and updated {site.reviewed}</span>
            </div>
          </div>
          <div className="cover rv" style={d(5)} aria-hidden="true">
            <span className="orb2" style={{ width: "60%", aspectRatio: "1" }}></span>
            <span className="orb2" style={{ width: "40%", aspectRatio: "1" }}></span>
            <span className="fl" style={{ left: "22%", top: "30%" }}></span>
            <span className="fl" style={{ right: "24%", top: "60%", animationDelay: "1.5s", background: "var(--blush)" }}></span>
            <span className="fl" style={{ left: "36%", bottom: "16%", animationDelay: "3s", width: 12, height: 12 }}></span>
            <svg className="big" viewBox="0 0 48 48"><use href="#c-ovary" /></svg>
          </div>
        </div>
      </section>

      <div className="wrap art2">
        <aside className="share" aria-label="Share">
          <a href={`https://wa.me/?text=${encodeURIComponent("Five PCOS myths — Dr. Riddhi D. Shah")}`} aria-label="Share on WhatsApp" target="_blank" rel="noopener"><Icon name="i-wa" /></a>
          <a href="#top" aria-label="Copy link"><Icon name="i-doc" /></a>
        </aside>
        <article className="prose">
          <div className="brief sr">
            <span className="lbl">In brief</span>
            <ul>
              <li>PCOS is common and manageable, though it does not go away completely.</li>
              <li>Many women with PCOS get pregnant, some with a little help.</li>
              <li>The &quot;cysts&quot; in PCOS are small follicles, not cysts that need surgery.</li>
            </ul>
          </div>
          <p className="lead2">Few conditions collect as many myths as PCOS. Some cause needless fear, others delay care. Here are the five I hear most often in clinic.</p>
          <h2>Tap a card to see the truth</h2>
          <div className="myths">
            {MYTHS.map((x) => (
              <div className="myth" tabIndex={0} role="button" aria-pressed="false" key={x.m}>
                <div className="fc">
                  <div className="f"><small>{x.m}</small><b>{x.q}</b><span className="tap">Tap <Icon name="i-arrow" width={14} height={14} /></span></div>
                  <div className="b"><small>What is true</small><p>{x.a}</p></div>
                </div>
              </div>
            ))}
          </div>
          <h2>So what should you do?</h2>
          <p>If your periods are irregular, or you have acne or extra hair growth that worries you, get checked. A short visit and a few tests can tell you whether PCOS is the cause.</p>
          <p className="callout">
            &quot;Most of my PCOS patients feel better once they understand what is going on. The plan is easier to follow when it makes sense.&quot;
            <br />
            <small style={{ font: "500 13px var(--sans)", color: "var(--ink-2)" }}>Dr. Riddhi D. Shah</small>
          </p>
          <h2>Questions</h2>
          <div className="qa">
            {ARTICLE_FAQS["pcos-myths"].map((f) => (
              <details key={f.q}>
                <summary>{f.q}<i><Icon name="i-plus" width={18} height={18} /></i></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="revbox" style={{ marginTop: 36 }}>
            <img src="/images/halo-portrait-192.webp" alt="" />
            <div><b>Written and reviewed by Dr. Riddhi D. Shah</b>MBBS, DNB (OBGY), FMAS, DRM · Last reviewed {site.reviewed}</div>
          </div>
          <div className="sources">
            <b>Sources</b>
            <ol>
              <li>International evidence-based guideline for PCOS, 2023.</li>
              <li>FOGSI guidance on PCOS.</li>
            </ol>
          </div>
        </article>
      </div>

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="shead"><div><span className="kick">Keep reading</span><h2 className="h2">Related <em>care</em></h2></div></div>
          <div className="rel" data-stagger>
            <Link className="sr" href="/treatments/pcos/"><span className="ri"><svg viewBox="0 0 48 48"><use href="#c-ovary" /></svg></span><b>PCOS care</b><small>What happens at your visit.</small><span className="more">Read <Icon name="i-arrow" width={16} height={16} /></span></Link>
            <Link className="sr" href="/learn/heavy-periods/"><span className="ri"><svg viewBox="0 0 48 48"><use href="#c-drop" /></svg></span><b>How heavy is too heavy?</b><small>Article · 4 min read</small><span className="more">Read <Icon name="i-arrow" width={16} height={16} /></span></Link>
            <Link className="sr" href="/learn/planning-a-baby/"><span className="ri"><svg viewBox="0 0 48 48"><use href="#c-egg" /></svg></span><b>Planning a baby?</b><small>Article · 5 min read</small><span className="more">Read <Icon name="i-arrow" width={16} height={16} /></span></Link>
          </div>
        </div>
      </section>
      <ArticleFx />
    </>
  );
}
