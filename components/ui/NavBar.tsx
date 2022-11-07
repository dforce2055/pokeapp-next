
import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import { MenuItem } from "../../types"
import Logo from "./Logo"

interface Props {
  menuItems: MenuItem[]
}


const NavBar: FC<Props> = ({ menuItems }) => {
  const { asPath } = useRouter()


  return (
    <section className="dark:bg-gray-800 mb-4 shadow-lg">
      <nav className="flex container mx-auto items-baseline justify-start px-2 py-0 gap-3">
        <div className="flex-1">
          <Logo />

          { menuItems.map((menuItem, index) => (
              <Link
                key={index}
                href={menuItem.href}
                className={
                  asPath === menuItem.href ?
                    "mr-2 text-sky-400 underline font-bold" :
                    "mr-2 text-gray-500 hover:text-sky-400 transition-all delay-75"
                  }
              >
              { menuItem.text }
              </Link>
            ))
          }
        </div>

        <Link
          href="/favorites"
          className="flex-none inline-flex flex-wrap items-center text-center mr-2 text-gray-500 hover:text-amber-400 transition-all delay-75"
        >
          <>
            <svg
              height={24}
              viewBox="0 0 24 24"
              className="text-center"
            >
              <path fill="currentColor" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            <span className="pl-1 pt-1">Favorites</span>
          </>
        </Link>
      </nav>
    </section>
  );
}

export default NavBar