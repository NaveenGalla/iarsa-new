import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-[#006fe6] text-white text-[12.5px] font-normal px-[5%] py-[10px] flex justify-center items-center gap-3.5 relative z-[1000] tracking-[0.01em]">
      <span className="w-[7px] h-[7px] bg-white/80 rounded-full animate-pulse flex-shrink-0" />
      <span>
        Enrolments open for June batch &middot;{" "}
        <strong className="font-semibold">Shivaji Park, MVP Colony</strong>
      </span>
      <Link
        href="/contact"
        className="font-semibold border-b border-white/40 hover:border-white transition-[border-color] pb-px"
      >
        Enquire →
      </Link>
    </div>
  );
}
