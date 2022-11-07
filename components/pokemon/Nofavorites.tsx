import Image from "next/image"

const NoFavorites = () => {
  return (
    <div className="card w-full mx-auto shadow-xl bg-gray-50 dark:bg-gray-700">
      <h1 className="text-4xl mx-auto text-center p-4">No favorites!</h1>
      <Image
        className="w-64 h-64 m-2 mx-auto opacity-10"
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
        alt='No favorites'
        width={175}
        height={175}
      />
    </div>
  )
}

export default NoFavorites