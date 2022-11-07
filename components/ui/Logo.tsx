import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <div className="inline-block text-gray-300 hover:text-gray-100 transition-all cursor-pointer">
        <span className="text-[5em] relative">
          P
        </span>
        <Image
          className="inline-flex pb-2 -ml-8"
          src="/pokemon-logo.svg"
          alt="Pokemon App"
          width={ 30 }
          height={ 30 }
        />
        <span className="-ml-1 pr-2">
          kémon
        </span>
    </div>
    </Link>
  )
}
export default Logo