
import { useEffect, useState } from "react"
import Favorites from "../../components/pokemon/Favorites"
import NoFavorites from "../../components/pokemon/Nofavorites"
import MainLayout from "../../layouts/MainLayout"
import { getFavorites } from "../../utils"

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const favorites = getFavorites()
    setFavorites(favorites)

  }, [])
  

  return (
    <MainLayout title="Favorites">
      <section>
        {favorites.length > 0
          ? <Favorites pokemons={favorites}/>
          : <NoFavorites />
        }
      </section>
    </MainLayout>
  )
}

export default FavoritesPage