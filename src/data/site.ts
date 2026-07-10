export const site = {
  name: "Contractor Takeoff",
  domain: "contractortakeoff.ai",
  title: "Contractor Takeoff: one command center for every bid",
  description:
    "Contractor Takeoff is a bid command center for specialty subcontractors: bid board, per-bid document library, source-backed AI triage, and deterministic bid packet export. Paired with Plan Markup for measurement and markup, built on a free open-source engine. Now in pilot.",
  productRepo: "https://github.com/ContractorKeith/contractor-bid",
  siteRepo: "https://github.com/ContractorKeith/contractortakeoff-site",
  docsUrl: "https://docs.contractortakeoff.ai",
  installCommand: 'pipx install "contractor-bid[mcp]"',
  pilotHref: "mailto:support@contractortakeoff.ai?subject=Pilot%20program",
  supportEmail: "support@contractortakeoff.ai",
  xUrl: "https://x.com/ContractorKeith",
  youtubeUrl: "https://www.youtube.com/@contractorkeith",
  personalSite: "https://contractorkeith.com",
  githubStars: "4",
};

export const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Agents", href: "/agents" },
  { label: "Open source", href: "/#open-source" },
  { label: "Security", href: "/security" },
  { label: "Docs", href: site.docsUrl },
];
