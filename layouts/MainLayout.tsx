import Head from 'next/head'
import NavBar from "../components/ui/NavBar"

import { FC } from "react"
import { menuItems } from '../_nav'
import Footer from '../components/ui/Footer';


interface Props {
  title?: string
  pokemon?: string
  children: React.ReactNode;
}

// const origin = typeof window === undefined ? '' : window.location.origin

const origin = (() => {
  try {
    if (typeof window.location !== 'undefined') {
      return window.location.origin
    }
  } catch (e) {
    return ''
  }
})()

const MainLayout: FC<Props> = ({ title, pokemon, children }) => {
  const fullTitle = title ? `${ title } | Pokemon Next App` : 'Pokemon Next App'
  let description = 'Pokemon Next App Generated by create NEXT app'
  description += pokemon ? ` | Info aboutPokemon: ${pokemon}` : ''
  
  return (
    <>
      <Head>
        <title>{ fullTitle }</title>
        <link rel="icon" href="/img/pokemon-logo.png" />
        <meta name="author" content="Diego Pérez" />
        <meta name="dev" content="dforce2055 dperez2055@gmail.com" />
        <meta name="description"  content={ description } />
        <meta name="keywords" content="pokemon, next, app, react, typescript, node" />
        <meta property="og:title" content={ fullTitle } />
        <meta property="og:description" content={ description } />
        <meta property="og:image" content={ `${origin}/img/banner.jpg`} />
      </Head>
      <NavBar menuItems={menuItems}/>
      <main className="container mx-auto px-4 content-center min-h-[870px]">
        { children }
      </main>
      <Footer author={"dforce2055"} />
    </>
  )
}

export default MainLayout