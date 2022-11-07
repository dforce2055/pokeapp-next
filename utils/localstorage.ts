const idFavorites = 'favorites'

export const toggleFavorites = (id: number) => {
  if (typeof window.localStorage !== 'undefined') {
    let favorites: number[]

    favorites = JSON.parse(localStorage.getItem(idFavorites) || '[]')

    if (favorites.includes(id))
      favorites = favorites.filter(itemId => itemId !== id)
    else
      favorites.push(id)
    
    localStorage.setItem(idFavorites, JSON.stringify(favorites))
  }
}

export const isFavorite = (id: number): boolean => {
  if (typeof window.localStorage !== 'undefined') {
    const favorites = JSON.parse(localStorage.getItem(idFavorites) || '[]')
    return favorites.includes(id)
  } else 
    return false
}

export const getFavorites = (): number[] => {
  if (typeof window.localStorage === 'undefined')
    return []
  
  return JSON.parse(localStorage.getItem(idFavorites) || '[]')
}