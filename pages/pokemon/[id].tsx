import { useEffect, useState } from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Image from "next/image"
import MainLayout from '../../layouts/MainLayout'
import { POKEMON_LIMIT, PokemonDetailsAPI } from '../../types'
import confetti from 'canvas-confetti'

import { toggleFavorites, isFavorite, getPokemonDetails } from '../../utils'

interface Props {
  pokemon: PokemonDetailsAPI
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(false)
  const router = useRouter()
  const { id } = router.query
  
  const onToggleFavorites = () => {
    toggleFavorites(pokemon.id)
    setIsInFavorites(!isInFavorites)

    if (!isInFavorites)
      confetti({
        particleCount: 100,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: 1,
          y: 0
        }
      })
  }

  useEffect(() => {
    if (isFavorite(pokemon.id))
      setIsInFavorites(true)
    else
      setIsInFavorites(false)

  }, [isInFavorites, pokemon.id])
  

  return (
    <MainLayout title={ pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1) }>
      <section>
        
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 xl:grid-cols-6 gap-2 content-center mx-1">
          <div className="card w-full lg:col-span-1 mx-auto p-4 shadow-xl bg-gray-50 dark:bg-gray-700">
            <figure>
              <Image
                className="m-2"
                src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                alt={pokemon.name}
                width={250}
                height={250}
                priority
              />
            </figure>
          </div>
          <div className="card w-full mx-auto lg:col-span-5 shadow-xl bg-gray-50 dark:bg-gray-700">
            <div className="card-body">
              <div className="flex justify-between mb-3 items-center">
                <span className="card-title capitalize lg:text-4xl text-xl">#{id} - {pokemon.name}</span>
                <div className="card-actions">
                  <div className="rounded-md bg-gradient-to-r p-[2px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
                  <button className="btn btn-sm hover:bg-transparent hover:border-none hover:text-gray-100">
                      <span
                        className=""
                        onClick={onToggleFavorites}
                      >
                        {isInFavorites ? 'Remove from favorites' : 'Add to favorites'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 items-center text-center">
                <Image
                  className="w-24 h-24 m-2 mx-auto"
                  src={pokemon.sprites?.front_default}
                  alt={pokemon.name}
                  width={175}
                  height={175}
                />
                <Image
                  className="w-24 h-24 m-2 mx-auto"
                  src={pokemon.sprites?.back_default}
                  alt={pokemon.name}
                  width={175}
                  height={175}
                />
                <Image
                  className="w-24 h-24 m-2 mx-auto"
                  src={pokemon.sprites?.front_shiny}
                  alt={pokemon.name}
                  width={175}
                  height={175}
                />
                <Image
                  className="w-24 h-24 m-2 mx-auto"
                  src={pokemon.sprites?.back_shiny}
                  alt={pokemon.name}
                  width={175}
                  height={175}
                />
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

// https://nextjs.org/docs/basic-features/data-fetching/get-static-paths
// pokemon/[id].js

// Generates `/pokemon/1` and `/pokemon/2`
export const getStaticPaths: GetStaticPaths  = () => {

  
  const pokemons = [...Array(POKEMON_LIMIT)].map((item, index) => {
    return {
      params: {
        id: `${index + 1}`
      }
    }
  })
  return {
    paths: [ ...pokemons],
    fallback: 'blocking', // can also be true or 'blocking' on false, show errors on get id undefined on paths
  }
}

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try { 
    const { id } = params as { id: string }

    const pokemon = await getPokemonDetails(id)
    if (!pokemon)
      return {
        redirect: {
          destination: `/?error=true&id=${ id }`, // sino existe data en el servidor, redirige al home
          permanent: false
        }
      }
  
    return {
      // Passed to the page component as props
      props: {
        pokemon
      },
      revalidate: 86400 // 60 sec * 60 min * 24 hs
    }
  } catch (error) {
    return {
      // Passed to the page component as props
      props: { pokemon: {} },
    }
  }
}


export default PokemonPage