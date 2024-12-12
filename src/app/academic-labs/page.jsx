import AcadamicLab from "@/components/AcadamicLabs";
export const metadata = {
  title: "AI & ML Solutions for Academic Labs",
  description:
    "Optimize research with AI software engineers, machine learning developers, and MLOps experts. Tailored AI services empower academic labs to innovate, streamline workflows, and save time.",
  keywords:
    "academic labs, learning developer, ml ops engineer,ai services company,machine learning in research,ai software engineer,research software engineer",
};
export default function AcadamicLabs() {
  return (
    <section className="flex   flex-col items-center gap-4 justify-center ">
      <AcadamicLab />
    </section>
  );
}
