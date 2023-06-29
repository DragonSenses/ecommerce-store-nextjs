import Link from "next/link";

export default function SuccessPage() {
  return(
    <div className="flex flex-col">
      <div className="border border-solid border-slate-700
        text-xl m-4 p-6 uppercase grid place-items-center
        hover:opacity-60 cursor-pointer">
          Successsful Purchase!
      </div>
      <Link href={'/'} className="border border-solid border-slate-700
        text-xl m-4 p-6 uppercase grid place-items-center
        hover:opacity-60 cursor-pointer">
          Back home!
      </Link>
    </div>
  )
}