/**
 * Image pipeline for the Dr. Riddhi Shah site.
 *
 * Web-ready source files live in image-source/ (already compressed
 * WebP/JPG, correct sizes). This script syncs them into public/images
 * and writes image-meta/alt-text.json plus _todo.md.
 *
 * Run: npm run process-images
 * Originals stay untouched in the design package.
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "image-source");
const OUT = join(ROOT, "public", "images");
const META = join(ROOT, "image-meta");

const ALT = {
  "logo-mglgc.png": "Mumbai Gastro-Liver and Gynaec Centre logo",
  "halo-portrait.webp": "AI-assisted portrait of Dr. Riddhi D. Shah (pending her written approval)",
  "profile.webp": "AI-assisted portrait of Dr. Riddhi D. Shah in her white coat (pending approval)",
  "about-walk.webp": "AI-assisted image of Dr. Riddhi walking through the clinic corridor (pending approval)",
  "about-2.webp": "AI-assisted image of Dr. Riddhi at work (pending approval)",
  "hero-corridor.webp": "AI-assisted image of Dr. Riddhi in the clinic corridor (pending approval)",
  "consult.webp": "AI-assisted image of a consultation with Dr. Riddhi (pending approval)",
  "explain.webp": "AI-assisted image of Dr. Riddhi explaining a report to a patient (pending approval)",
  "surgery.webp": "AI-assisted illustration of keyhole (laparoscopic) surgery (pending approval)",
  "surgery-wide.webp": "AI-assisted wide illustration of keyhole surgery in progress (pending approval)",
  "videos.webp": "Still from one of Dr. Riddhi's patient-education videos",
  "videos-wide.webp": "Still from one of Dr. Riddhi's patient-education videos",
  "cta-bg.webp": "Soft abstract background in the clinic's brand colours",
  "clinic-entrance.jpg": "Entrance of Mumbai Gastro-Liver and Gynaec Centre, Borivali West",
  "mogs-2020-award.jpg": "Dr. Riddhi receiving the first prize for best paper at the MOGS 2020 conference",
  "mogs-2020-presentation.jpg": "Dr. Riddhi presenting her paper at the MOGS 2020 conference",
  "step-book.webp": "AI-assisted illustration for the booking step (pending approval)",
  "step-arrive.webp": "AI-assisted illustration for the arrival and registration step (pending approval)",
  "step-consult.webp": "AI-assisted illustration for the consultation step (pending approval)",
  "step-tests.webp": "AI-assisted illustration for the tests step (pending approval)",
  "step-plan.webp": "AI-assisted illustration for the treatment plan step (pending approval)",
  "step-follow.webp": "AI-assisted illustration for the follow-up step (pending approval)",
};

const TODO = `# Image to-do list

## Approval
- Every image marked "AI-assisted" in alt-text.json needs Dr. Riddhi's written
  approval before launch. Record it in the client questionnaire answers.

## Redo before launch
- step-follow.webp (AI set #11): shows the doctor where it should show a patient.
- 04b how-she-works alternative: different face, do not use.

## Still needed from the clinic (real photos)
- Reception and waiting area (no patients in frame).
- Consultation room.
- Building exterior / signboard close-up.
- A real standing portrait (4:5, white coat, 2000px+ tall) to replace or sit
  alongside the AI-assisted hero portrait.

## Consent
- clinic-entrance.jpg shows patients in the waiting area: blur faces unless
  written consent is on file.
- mogs-2020-award.jpg shows four other doctors: confirm it may be used as is,
  or crop to Dr. Riddhi only.
- The surgery photo in real-photos-and-logos shows part of a patient: use only
  the cropped version.

## Alt text
- Keep alt text factual. Do not describe an AI image as a real photograph.
`;

if (!existsSync(SRC)) {
  console.error(`Source folder not found: ${SRC}`);
  process.exit(1);
}
mkdirSync(OUT, { recursive: true });
mkdirSync(META, { recursive: true });

const files = readdirSync(SRC).filter((f) => /\.(webp|png|jpe?g|avif)$/i.test(f));
let copied = 0;
for (const f of files) {
  copyFileSync(join(SRC, f), join(OUT, f));
  copied++;
}

const existing = existsSync(join(META, "alt-text.json"))
  ? JSON.parse(readFileSync(join(META, "alt-text.json"), "utf8"))
  : {};
const merged = { ...ALT, ...existing };
const missing = files.filter((f) => !merged[f]);
writeFileSync(join(META, "alt-text.json"), JSON.stringify(merged, null, 2) + "\n");
writeFileSync(join(META, "_todo.md"), TODO);

console.log(`Copied ${copied} images to public/images/`);
console.log(`alt-text.json: ${Object.keys(merged).length} entries`);
if (missing.length) console.log("Needs alt text:", missing.join(", "));
