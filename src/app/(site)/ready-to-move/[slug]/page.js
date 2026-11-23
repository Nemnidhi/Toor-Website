import { notFound } from "next/navigation";
import PageShell from "@/components/site/PageShell";
import BuildingDetail from "@/components/site/BuildingDetail";
import { getBuilding } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const building = await getBuilding("ready-to-move", slug);
  if (!building) return { title: "Not found | TheOfficeOnRent" };
  return { title: `${building.name} | Ready-to-Move Office in Indore`, description: building.description.slice(0, 300) };
}

export default async function ReadyToMoveBuildingPage({ params }) {
  const { slug } = await params;
  const building = await getBuilding("ready-to-move", slug);
  if (!building) notFound();
  return (
    <PageShell>
      <BuildingDetail building={building} />
    </PageShell>
  );
}
