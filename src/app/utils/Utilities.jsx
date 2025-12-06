export const NavbarList = [
  { label: "Services", link: "#services" },
  { label: "Our Work", link: "#work" },
  { label: "Achievements", link: "#achievements" },
  { label: "FAQs", link: "#faqs" },
  { label: "Contact", link: "#contact" },
];

export function hexToRgba(hex, opacity) {
  let parsedHex = hex.replace('#', '');

  if (parsedHex.length === 3) {
    parsedHex = parsedHex.split('').map(char => char + char).join('');
  }

  const r = parseInt(parsedHex.substring(0, 2), 16);
  const g = parseInt(parsedHex.substring(2, 4), 16);
  const b = parseInt(parsedHex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
export const stepsForGettingStarted =  [
  {
      title: "Step 1",
      subtitle: "Share Your Vision",
      desc: "Tell us about your goals and project requirements—just reach out for a free consultation.",
      imageUrl: "/Step1.avif"
  },
  {
      title: "Step 2",
      subtitle: "Collaborate on a Solution",
      desc: "We work together to define the scope and strategy. You review and approve the plan before we begin.",
      imageUrl: "/Step2.avif"
  },
  {
      title: "Step 3",
      subtitle: "Watch Your Idea Come to Life",
      desc: "Our expert team gets to work, keeping you in the loop with consistent updates. Most projects are delivered promptly, ready for launch!",
      imageUrl: "/Step3.avif"
  },
]