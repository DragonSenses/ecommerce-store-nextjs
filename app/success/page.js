import Link from "next/link";

export default function SuccessPage() {
  return(
    <div className="">
      Success!
      <Link href={'/'}>Back home!</Link>
    </div>
  )
}