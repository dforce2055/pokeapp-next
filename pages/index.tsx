import { NextPage, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { pokemonApi } from '../api'
import MainLayout from '../layouts/MainLayout'
import PokemonCard from '../components/pokemon/PokemonCard'
import { PokemonListAPI, POKEMON_LIMIT, SmallPokemon } from '../types'
import ToastError from '../components/ui/ToastError'

interface Props {
  pokemons: SmallPokemon[]
}


const HomePage: NextPage<Props> = ({ pokemons }) => {
  const router = useRouter()
  const { error, id, name } = router.query
  const errorMessage = id ? `Error! Pokemon id: ${ id } not found.` : `Error! Pokemon name: ${ name } not found.`
  
  return (
    <MainLayout title="Home">
      {
        error &&  <ToastError message={errorMessage} />
      }
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 content-center">
        {pokemons.map(pokemon => (
          <PokemonCard
            key={ pokemon.id }
            pokemon={pokemon}
            
          />
        )) }
      </div>
    </MainLayout>
  )
}

// Call backend build time
// https://nextjs.org/docs/basic-features/data-fetching/get-static-props

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const splitLimit = 7

    const result = await pokemonApi.get<PokemonListAPI>(`/pokemon?limit=${ POKEMON_LIMIT }`)
    const { data } = result
    const pokemons = data?.results.map(item => {
      const id = item.url.split('/', splitLimit).pop()
      return {
        id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
        name: item.name,
        sprites: item.sprites || ['']
      }
    })


    return {
      props: {
        pokemons
      }, // will be passed to the page component as props
    }
  } catch (error) {
    return { props: {} }
  }
}

export default HomePage