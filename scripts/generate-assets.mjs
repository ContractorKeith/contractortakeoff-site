import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.resolve("public/images");

function esc(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function terminalSvg() {
  const lines = [
    [
      "$ contractor-bid new bids/0702-retail-pad --profile fences-gates",
      "#E8E6E1",
    ],
    ["created bid workspace", "#85C88A"],
    ["$ contractor-bid triage bids/0702-retail-pad --write-sources", "#E8E6E1"],
    ["found 38 likely scope pages | 12 spec hits | 3 addenda", "#85C88A"],
    ["needs review: A-801 gate conflict, E-402 operator power", "#FF9B73"],
    ["$ contractor-bid build-workbook bids/0702-retail-pad", "#E8E6E1"],
    ["wrote takeoff-workbook.xlsx with 42 source-linked rows", "#85C88A"],
    ["$ contractor-bid package-sendoff bids/0702-retail-pad", "#E8E6E1"],
    ["supplier-sendoff.zip ready", "#85C88A"],
  ];

  const body = lines
    .map(
      ([text, color], index) =>
        `<text x="70" y="${172 + index * 58}" fill="${color}">${esc(text)}</text>`,
    )
    .join("");

  return `<svg width="1440" height="900" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
    <rect width="1440" height="900" fill="#0F1114"/>
    <rect x="36" y="36" width="1368" height="828" rx="18" fill="#161A1F" stroke="#3B424B" stroke-width="2"/>
    <circle cx="78" cy="82" r="12" fill="#F4501E"/>
    <circle cx="118" cy="82" r="12" fill="#E7B416"/>
    <circle cx="158" cy="82" r="12" fill="#1F7A3D"/>
    <text x="70" y="128" fill="#8D98A3" font-size="24" font-family="JetBrains Mono, Menlo, monospace">~/bids/0702-retail-pad</text>
    <g font-size="36" font-family="JetBrains Mono, Menlo, monospace">${body}</g>
    <rect x="70" y="760" width="820" height="64" rx="8" fill="#22272E" stroke="#3B424B"/>
    <text x="100" y="802" fill="#F4501E" font-size="30" font-family="JetBrains Mono, Menlo, monospace">source docs -> reviewable bid package</text>
  </svg>`;
}

function workflowSvg() {
  const boxes = [
    ["bid-docs/", "plans, specs, addenda", 60, 118],
    ["triage.json", "approved source pages", 360, 118],
    ["packets/", "scope and spec PDFs", 660, 118],
    ["workbook.xlsx", "source-linked rows", 60, 390],
    ["ALERTS.md", "scope drift and conflicts", 360, 390],
    ["sendoff.zip", "supplier-ready package", 660, 390],
  ];

  const boxMarkup = boxes
    .map(
      ([title, body, x, y]) => `<g>
        <rect x="${x}" y="${y}" width="250" height="150" rx="10" fill="#FFFDF8" stroke="#16181B" stroke-width="3"/>
        <text x="${Number(x) + 24}" y="${Number(y) + 54}" fill="#16181B" font-size="29" font-weight="800" font-family="Inter, Arial">${esc(title)}</text>
        <text x="${Number(x) + 24}" y="${Number(y) + 96}" fill="#4A4F55" font-size="22" font-family="Inter, Arial">${esc(body)}</text>
      </g>`,
    )
    .join("");

  return `<svg width="1000" height="650" viewBox="0 0 1000 650" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="650" fill="#F6F4EF"/>
    <text x="60" y="70" fill="#F4501E" font-size="24" font-family="JetBrains Mono, Menlo, monospace" font-weight="700">CONTRACTOR-BID WORKFLOW</text>
    <path d="M310 193h48M610 193h48M185 270v96M485 270v96M785 270v96M310 465h48M610 465h48" stroke="#F4501E" stroke-width="8" stroke-linecap="square"/>
    ${boxMarkup}
  </svg>`;
}

function sourceSvg() {
  const left = [
    "plans.pdf",
    "spec-book.pdf",
    "addendum-01.pdf",
    "bid-form.pdf",
  ];
  const right = [
    "scope-pages.pdf",
    "spec-pages.pdf",
    "takeoff-workbook.xlsx",
    "ALERTS.md",
    "supplier-sendoff.zip",
  ];

  function fileLines(list, x, y) {
    return list
      .map(
        (item, index) => `<g>
          <rect x="${x}" y="${y + index * 70}" width="350" height="46" rx="6" fill="#20252B" stroke="#3B424B"/>
          <text x="${x + 20}" y="${y + 31 + index * 70}" fill="#E8E6E1" font-size="24" font-family="JetBrains Mono, Menlo, monospace">${esc(item)}</text>
        </g>`,
      )
      .join("");
  }

  return `<svg width="1000" height="650" viewBox="0 0 1000 650" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="650" fill="#0F1114"/>
    <text x="70" y="82" fill="#FF9B73" font-size="24" font-family="JetBrains Mono, Menlo, monospace" font-weight="700">LOCAL FILE BOUNDARY</text>
    <text x="70" y="138" fill="#E8E6E1" font-size="42" font-family="Inter, Arial" font-weight="800">bid-docs/</text>
    <text x="575" y="138" fill="#E8E6E1" font-size="42" font-family="Inter, Arial" font-weight="800">working/</text>
    ${fileLines(left, 70, 190)}
    ${fileLines(right, 575, 190)}
    <path d="M440 325h110" stroke="#F4501E" stroke-width="10" stroke-linecap="square"/>
    <path d="M550 325l-32-24v48l32-24z" fill="#F4501E"/>
    <text x="70" y="565" fill="#8D98A3" font-size="26" font-family="Inter, Arial">Original bid files stay untouched. Generated outputs stay reviewable.</text>
  </svg>`;
}

function ogSvg() {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#F6F4EF"/>
    <rect x="52" y="52" width="1096" height="526" rx="18" fill="#FFFDF8" stroke="#16181B" stroke-width="6"/>
    <text x="92" y="140" fill="#F4501E" font-size="32" font-family="JetBrains Mono, Menlo, monospace" font-weight="700">FOR COMMERCIAL SUBCONTRACTORS</text>
    <text x="92" y="260" fill="#16181B" font-size="86" font-family="Inter, Arial" font-weight="800">From bid invite</text>
    <text x="92" y="360" fill="#16181B" font-size="86" font-family="Inter, Arial" font-weight="800">to supplier-ready</text>
    <text x="92" y="460" fill="#16181B" font-size="86" font-family="Inter, Arial" font-weight="800">package.</text>
    <text x="92" y="540" fill="#4A4F55" font-size="34" font-family="Inter, Arial">Local-first bid setup automation. Nothing uploaded anywhere.</text>
  </svg>`;
}

await mkdir(outDir, { recursive: true });

await Promise.all([
  sharp(Buffer.from(terminalSvg()))
    .webp({ quality: 88 })
    .toFile(path.join(outDir, "terminal-demo.webp")),
  sharp(Buffer.from(workflowSvg()))
    .webp({ quality: 88 })
    .toFile(path.join(outDir, "workflow-capture.webp")),
  sharp(Buffer.from(sourceSvg()))
    .webp({ quality: 88 })
    .toFile(path.join(outDir, "source-workspace.webp")),
  sharp(Buffer.from(ogSvg())).png().toFile(path.resolve("public/og.png")),
]);

console.log("Generated marketing assets in public/images and public/og.png");
