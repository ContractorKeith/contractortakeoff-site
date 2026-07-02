export const site = {
  name: "contractor-bid",
  domain: "contractortakeoff.ai",
  title: "contractor-bid: bid package automation for commercial subcontractors",
  description:
    "contractor-bid turns messy commercial bid packages into source-backed workspaces: scope pages, specs, workbook, alerts, and supplier sendoff. Local-first and open source.",
  productRepo: "https://github.com/ContractorKeith/contractor-bid",
  siteRepo: "https://github.com/ContractorKeith/contractortakeoff-site",
  docsUrl: "https://contractorkeith.github.io/contractor-bid/",
  installCommand: 'pipx install "contractor-bid[mcp]"',
  supportEmail: "support@contractortakeoff.ai",
  xUrl: "https://x.com/ContractorKeith",
  youtubeUrl: "https://www.youtube.com/@contractorkeith",
  personalSite: "https://contractorkeith.com",
  githubStars: "4",
};

export const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Security", href: "/security" },
  { label: "Docs", href: site.docsUrl },
];
