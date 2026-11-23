import Image from "next/image";
import Link from "next/link";

/** Location tiles scrolling sideways (CSS marquee; pauses on hover, still for reduced motion). */
export default function LocationsCarousel({ locations }) {
  const tiles = (duplicate = false) =>
    locations.map((location) => (
      <Link
        key={`${duplicate ? "duplicate-" : ""}${location.name}`}
        href={`/contact?location=${encodeURIComponent(location.name)}`}
        tabIndex={duplicate ? -1 : undefined}
        className="group relative aspect-[4/3] w-[72vw] max-w-[270px] shrink-0 overflow-hidden rounded-xl bg-slate-100 shadow-[0_10px_28px_rgba(8,24,39,0.1)] sm:w-[250px] lg:w-[260px]"
      >
        <Image src={location.image} alt={duplicate ? "" : `Commercial workspace near ${location.name}, Indore`} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" sizes="270px" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071225]/95 via-[#071225]/60 to-transparent px-5 pb-4 pt-14">
          <h3 className="text-lg font-black text-white">{location.name}</h3>
        </div>
      </Link>
    ));
  return (
    <div aria-label="Prime locations in Indore" className="location-marquee mt-7 overflow-hidden py-2">
      <div className="location-marquee-track flex w-max">
        <div className="flex gap-4 pr-4">{tiles()}</div>
        <div className="flex gap-4 pr-4" aria-hidden="true">
          {tiles(true)}
        </div>
      </div>
    </div>
  );
}
