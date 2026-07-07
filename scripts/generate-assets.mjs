import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Jobsite Blueprint palette (must match src/styles/global.css tokens)
const PALETTE = {
  paper: "#F2F1EC",
  paperRaised: "#FBFAF6",
  ink: "#1C2733",
  inkSoft: "#5A6B7D",
  slate: "#1E2126",
  slatePanel: "#262A31",
  slateText: "#D8DCE2",
  slateDim: "#8A919C",
  steel: "#1F5F8B",
  blueprint: "#2F6FB2",
  safety: "#C7500F",
  ok: "#2E7D4F",
  okSoft: "#85C88A",
  lineDark: "#3A4049",
};

const SANS = "Barlow, Arial, Helvetica, sans-serif";
const MONO = "JetBrains Mono, Menlo, monospace";

const outDir = path.resolve("public/images");

function esc(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// Blueprint grid lines: steel at low opacity on paper
function gridLines(width, height, step, opacity) {
  const lines = [];
  for (let x = step; x < width; x += step) {
    lines.push(`M${x} 0V${height}`);
  }
  for (let y = step; y < height; y += step) {
    lines.push(`M0 ${y}H${width}`);
  }
  return `<path d="${lines.join("")}" stroke="${PALETTE.steel}" stroke-opacity="${opacity}" stroke-width="1"/>`;
}

// Pixel brand mark (matches public/favicon.svg), scaled by unit size
function pixelMark(x, y, unit) {
  const px = (cx, cy, w, h, fill) =>
    `<rect x="${x + cx * unit}" y="${y + cy * unit}" width="${w * unit}" height="${h * unit}" fill="${fill}"/>`;
  return [
    px(0, 5, 2, 3, PALETTE.steel),
    px(3, 3, 2, 5, PALETTE.steel),
    px(6, 3, 2, 5, PALETTE.steel),
    px(6, 0, 2, 2, PALETTE.safety),
  ].join("");
}

// Legacy hero image for the old index page: terminal demo (slate palette)
function terminalSvg() {
  const lines = [
    [
      "$ contractor-bid new bids/0702-retail-pad --profile fences-gates",
      PALETTE.slateText,
    ],
    ["created bid workspace", PALETTE.okSoft],
    [
      "$ contractor-bid triage bids/0702-retail-pad --write-sources",
      PALETTE.slateText,
    ],
    ["found 38 likely scope pages | 12 spec hits | 3 addenda", PALETTE.okSoft],
    ["needs review: A-801 gate conflict, E-402 operator power", "#D98E63"],
    ["$ contractor-bid build-workbook bids/0702-retail-pad", PALETTE.slateText],
    ["wrote takeoff-workbook.xlsx with 42 source-linked rows", PALETTE.okSoft],
    [
      "$ contractor-bid package-sendoff bids/0702-retail-pad",
      PALETTE.slateText,
    ],
    ["supplier-sendoff.zip ready", PALETTE.okSoft],
  ];

  const body = lines
    .map(
      ([text, color], index) =>
        `<text x="70" y="${172 + index * 58}" fill="${color}">${esc(text)}</text>`,
    )
    .join("");

  return `<svg width="1440" height="900" viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg">
    <rect width="1440" height="900" fill="${PALETTE.slate}"/>
    <rect x="36" y="36" width="1368" height="828" rx="10" fill="${PALETTE.slatePanel}" stroke="${PALETTE.lineDark}" stroke-width="2"/>
    <rect x="66" y="70" width="24" height="24" fill="${PALETTE.safety}"/>
    <rect x="106" y="70" width="24" height="24" fill="${PALETTE.steel}"/>
    <rect x="146" y="70" width="24" height="24" fill="${PALETTE.ok}"/>
    <text x="70" y="136" fill="${PALETTE.slateDim}" font-size="24" font-family="${MONO}">~/bids/0702-retail-pad</text>
    <g font-size="36" font-family="${MONO}">${body}</g>
    <rect x="70" y="760" width="820" height="64" rx="6" fill="${PALETTE.slate}" stroke="${PALETTE.lineDark}"/>
    <text x="100" y="802" fill="${PALETTE.blueprint}" font-size="30" font-family="${MONO}">source docs to reviewable bid package</text>
  </svg>`;
}

// Legacy workflow diagram for the old index page (paper palette)
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
        <rect x="${x}" y="${y}" width="250" height="150" rx="6" fill="${PALETTE.paperRaised}" stroke="${PALETTE.ink}" stroke-width="3"/>
        <text x="${Number(x) + 24}" y="${Number(y) + 54}" fill="${PALETTE.ink}" font-size="29" font-weight="700" font-family="${SANS}">${esc(title)}</text>
        <text x="${Number(x) + 24}" y="${Number(y) + 96}" fill="${PALETTE.inkSoft}" font-size="22" font-family="${SANS}">${esc(body)}</text>
      </g>`,
    )
    .join("");

  return `<svg width="1000" height="650" viewBox="0 0 1000 650" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="650" fill="${PALETTE.paper}"/>
    ${gridLines(1000, 650, 28, 0.06)}
    <text x="60" y="70" fill="${PALETTE.safety}" font-size="24" font-family="${MONO}" font-weight="700">CONTRACTOR TAKEOFF WORKFLOW</text>
    <path d="M310 193h48M610 193h48M185 270v96M485 270v96M785 270v96M310 465h48M610 465h48" stroke="${PALETTE.steel}" stroke-width="8" stroke-linecap="square"/>
    ${boxMarkup}
  </svg>`;
}

// Legacy local-file-boundary diagram for the old index page (slate palette)
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
          <rect x="${x}" y="${y + index * 70}" width="350" height="46" rx="6" fill="${PALETTE.slatePanel}" stroke="${PALETTE.lineDark}"/>
          <text x="${x + 20}" y="${y + 31 + index * 70}" fill="${PALETTE.slateText}" font-size="24" font-family="${MONO}">${esc(item)}</text>
        </g>`,
      )
      .join("");
  }

  return `<svg width="1000" height="650" viewBox="0 0 1000 650" xmlns="http://www.w3.org/2000/svg">
    <rect width="1000" height="650" fill="${PALETTE.slate}"/>
    <text x="70" y="82" fill="${PALETTE.blueprint}" font-size="24" font-family="${MONO}" font-weight="700">LOCAL FILE BOUNDARY</text>
    <text x="70" y="138" fill="${PALETTE.slateText}" font-size="42" font-family="${SANS}" font-weight="700">bid-docs/</text>
    <text x="575" y="138" fill="${PALETTE.slateText}" font-size="42" font-family="${SANS}" font-weight="700">working/</text>
    ${fileLines(left, 70, 190)}
    ${fileLines(right, 575, 190)}
    <path d="M440 325h110" stroke="${PALETTE.safety}" stroke-width="10" stroke-linecap="square"/>
    <path d="M550 325l-32-24v48l32-24z" fill="${PALETTE.safety}"/>
    <text x="70" y="565" fill="${PALETTE.slateDim}" font-size="26" font-family="${SANS}">Original bid files stay untouched. Generated outputs stay reviewable.</text>
  </svg>`;
}

// OG image: flat paper, blueprint grid, suite headline, pixel mark
function ogSvg() {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="${PALETTE.paper}"/>
    ${gridLines(1200, 630, 40, 0.08)}
    <rect x="64" y="64" width="1072" height="502" fill="${PALETTE.ink}" opacity="0.16"/>
    <rect x="52" y="52" width="1072" height="502" fill="${PALETTE.paperRaised}" stroke="${PALETTE.ink}" stroke-width="4"/>
    ${pixelMark(1010, 100, 12)}
    <text x="100" y="150" fill="${PALETTE.safety}" font-size="30" font-family="${MONO}" font-weight="700" letter-spacing="4">FOR SPECIALTY SUBCONTRACTORS</text>
    <text x="96" y="272" fill="${PALETTE.ink}" font-size="98" font-family="${SANS}" font-weight="700">One command center</text>
    <text x="96" y="380" fill="${PALETTE.ink}" font-size="98" font-family="${SANS}" font-weight="700">for every bid.</text>
    <text x="100" y="462" fill="${PALETTE.inkSoft}" font-size="34" font-family="${SANS}">Contractor Takeoff + Plan Markup, built on a free open-source engine.</text>
    <text x="100" y="512" fill="${PALETTE.steel}" font-size="28" font-family="${MONO}">contractortakeoff.ai : now in pilot</text>
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
