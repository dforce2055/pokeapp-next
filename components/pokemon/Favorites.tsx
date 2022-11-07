import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"

interface Props {
  pokemons: number[]
}

const Favorites: FC<Props> = ({ pokemons }) => {
  const router = useRouter()

  const onClick = (id: number) => {
    router.push(`/pokemon/${ id }`)
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-3 content-center">
      { pokemons.map((id, index) => (
        <div
          key={index}
          className="card w-full lg:col-span-1 mx-auto p-4 shadow-xl bg-gray-50 dark:bg-gray-700 hover:glass transition-all ease-out delay-75"
        >
          <figure>
            <Image
              onClick={() => onClick(id)}
              className="m-2 h-full w-full"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
              alt="favorite pokemon"
              width={140}
              height={140}
              priority
            />
            </figure>
        </div>
      ))
      }
  </div>
  )
}

export default Favorites