import { FC } from "react"
import { SmallPokemon } from "../../types"
import Image from "next/image"
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/name/${ pokemon.name }`)
  }


  return (
    <div className="card w-96 mx-auto shadow-xl bg-gray-50 dark:bg-gray-700 hover:glass transition-all ease-out delay-75">
      <figure>
        <Image
          className="h-30 w-32 m-4"
          src={pokemon.image}
          alt={pokemon.name}
          width={30}
          height={30}
          priority
        />
      </figure>
    <div className="card-body">
        <h2 className="card-title capitalize"># { pokemon.id } - { pokemon.name }</h2>
      {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p> */}
        <div className="card-actions justify-end">
          <div className="rounded-md bg-gradient-to-r p-[2px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
            <button
              onClick={onClick}
              className="btn btn-sm hover:bg-transparent hover:border-none hover:text-gray-100 "
            >
              More info
            </button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default PokemonCard