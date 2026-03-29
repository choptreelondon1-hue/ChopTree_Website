export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  borough: string;
  image: string;
  readTime: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
};

export const articles: Article[] = [
  {
    slug: "tree-surgery-ealing-homeowner-guide",
    title: "Tree Surgery in Ealing: A Homeowner's Practical Guide",
    description:
      "A practical guide for Ealing homeowners on when to book tree surgery, what work involves, and how to keep trees healthy and safe year-round.",
    publishedAt: "2026-03-29",
    updatedAt: "2026-03-29",
    borough: "Ealing",
    image: "/images/tree-surgery.jpg",
    readTime: "6 min read",
    sections: [
      {
        heading: "When Tree Surgery Is Worth Doing",
        paragraphs: [
          "In Ealing, many gardens have mature trees close to fences, garages, and neighbouring boundaries. Tree surgery is not just about appearance; it is mainly about safety, structure, and long-term tree health.",
          "If you are seeing dead wood, heavy overhang near footpaths, poor light in the garden, or branches rubbing on buildings, it is usually the right time to get professional advice.",
        ],
        bullets: [
          "Deadwood in canopy",
          "Overextended limbs above roofs or paths",
          "Dense canopies reducing light",
          "Storm damage and split unions",
        ],
      },
      {
        heading: "What Professional Tree Surgery Includes",
        paragraphs: [
          "Good tree surgery should follow British Standard recommendations and balance safety with the tree's natural form. The aim is to reduce risk while preserving healthy growth.",
          "Typical works include crown thinning, crown reduction, selective pruning, and removal of unsafe branches. Every tree should be assessed individually rather than using one fixed template.",
        ],
      },
      {
        heading: "How to Prepare for a Site Visit",
        paragraphs: [
          "To get a faster and more accurate quote, send clear photos from different angles and include your postcode. Mention access constraints like narrow side passages or overhead cables.",
          "This helps estimate labor time, equipment requirements, and waste handling before the team arrives.",
        ],
      },
      {
        heading: "Final Tip for Ealing Properties",
        paragraphs: [
          "Routine maintenance is usually cheaper than emergency callouts. If your trees have not been reviewed for a few years, a proactive inspection can prevent bigger costs later.",
        ],
      },
    ],
  },
  {
    slug: "tree-removal-london-cost-access-and-safety",
    title: "Tree Removal in London: Cost, Access, and Safety Explained",
    description:
      "Understand how tree removal projects are priced in London, what affects access and safety, and how to avoid surprise costs.",
    publishedAt: "2026-03-29",
    updatedAt: "2026-03-29",
    borough: "London",
    image: "/images/tree-removal.jpg",
    readTime: "7 min read",
    sections: [
      {
        heading: "Why Removal Sometimes Becomes Necessary",
        paragraphs: [
          "Not every problematic tree needs full removal, but in some cases it is the safest and most sensible option. Common reasons are structural instability, severe disease, root issues, or unsuitable placement.",
          "In compact London plots, controlled dismantling is often preferred over straight felling to protect nearby structures and neighbouring properties.",
        ],
      },
      {
        heading: "What Drives Removal Cost",
        paragraphs: [
          "Tree size is only one factor. Access restrictions, rigging complexity, traffic considerations, and disposal volume can significantly affect pricing.",
        ],
        bullets: [
          "Height and stem diameter",
          "Distance from buildings and fences",
          "Side access width",
          "Waste volume and haul-away",
          "Need for specialist rigging",
        ],
      },
      {
        heading: "Safety and Planning",
        paragraphs: [
          "A safe removal job starts with a method plan. This includes drop zones, controlled lowering points, and communication between team members.",
          "Professional teams should also leave the site clean and remove all arisings unless agreed otherwise.",
        ],
      },
      {
        heading: "Avoiding Surprises",
        paragraphs: [
          "Ask for a clear written scope that confirms what is included: removal method, waste removal, stump handling, and final tidy-up.",
          "That one page prevents misunderstandings and helps you compare quotes properly.",
        ],
      },
    ],
  },
  {
    slug: "stump-grinding-london-what-homeowners-should-know",
    title: "Stump Grinding in London: What Homeowners Should Know",
    description:
      "A practical guide to stump grinding after tree removal, including depth, cleanup, replanting readiness, and pricing factors.",
    publishedAt: "2026-03-29",
    updatedAt: "2026-03-29",
    borough: "West London",
    image: "/images/stump-removal.jpg",
    readTime: "5 min read",
    sections: [
      {
        heading: "Why Remove a Stump",
        paragraphs: [
          "Leaving a stump can cause practical and visual issues in small gardens. It takes up useful space, can attract pests over time, and makes future landscaping awkward.",
          "Stump grinding removes the visible obstacle and lets you level, turf, or replant the area.",
        ],
      },
      {
        heading: "How Stump Grinding Works",
        paragraphs: [
          "A grinder chips down the stump below ground level. The exact depth depends on your intended use for the area, such as turfing, paving, or planting.",
          "Most residential jobs can be completed quickly when access is straightforward.",
        ],
        bullets: [
          "Stump ground below surface level",
          "Chips cleared or retained by request",
          "Area left tidy and ready for next step",
        ],
      },
      {
        heading: "When to Do It",
        paragraphs: [
          "You can grind stumps soon after removal. In many cases, doing both jobs close together is more efficient and reduces disruption.",
          "If you plan hard landscaping, mention this during quoting so depth and finish are set correctly.",
        ],
      },
      {
        heading: "Pricing Factors",
        paragraphs: [
          "Diameter, root flare size, and machine access are the main factors. Photos and postcode usually allow an accurate initial estimate before a final site check.",
        ],
      },
    ],
  },
  {
    slug: "crown-lifting-for-light-clearance-and-tree-health",
    title: "Crown Lifting for Light, Clearance, and Tree Health",
    description:
      "Learn when crown lifting is beneficial for gardens, roads, and pathways, and how to do it without damaging a tree's long-term structure.",
    publishedAt: "2026-03-29",
    updatedAt: "2026-03-29",
    borough: "Greater London",
    image: "/images/crown-lifting.jpg",
    readTime: "6 min read",
    sections: [
      {
        heading: "What Crown Lifting Actually Means",
        paragraphs: [
          "Crown lifting removes selected lower branches to increase clearance under the canopy. It is useful near drives, walkways, roads, and buildings where low limbs become a practical issue.",
          "Done properly, crown lifting improves access and light while preserving the tree's natural shape.",
        ],
      },
      {
        heading: "Common Reasons London Homeowners Choose It",
        paragraphs: [
          "In urban gardens, crown lifting can open up space and improve usability without removing the tree. It is often a better alternative to aggressive pruning.",
        ],
        bullets: [
          "More natural light to garden and windows",
          "Clearance for pedestrians and vehicles",
          "Cleaner sightlines near paths and roads",
          "Better airflow under dense canopies",
        ],
      },
      {
        heading: "Health and Structure Considerations",
        paragraphs: [
          "Over-lifting can stress a tree, so branch selection matters. A balanced approach keeps enough lower growth to support structural stability and healthy development.",
          "Professional assessment ensures lifting height is appropriate for species, age, and site conditions.",
        ],
      },
      {
        heading: "Planning Your Quote",
        paragraphs: [
          "If you want a quick estimate, send photos showing the full tree and the area where clearance is needed. Include any specific target height if known.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
