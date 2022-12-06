import SectionCard from "./SectionCard";

function TotalSection({
  totalViewCount,
  totalRevenue,
}: {
  totalViewCount: number;
  totalRevenue: number;
}) {
  return (
    <div>
      <SectionCard type="revenue" content={totalRevenue} />
      <SectionCard type="view" content={totalViewCount} />
    </div>
  );
}

export default TotalSection;
