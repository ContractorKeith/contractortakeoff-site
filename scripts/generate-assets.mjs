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

await sharp(Buffer.from(ogSvg())).png().toFile(path.resolve("public/og.png"));

console.log("Generated public/og.png");
