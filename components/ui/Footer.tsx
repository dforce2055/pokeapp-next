import { FC } from "react"
import Image from 'next/image'

interface Props {
  author: string
}


const Footer: FC<Props> = ({ author }) => {
  return (
    <footer className="text-gray-600 body-font  bg-gray-100
        border-t-sky-100 border-t-2">
        <div className="
        flex justify-center
        w-full
        mx-auto
        p-2
        text-center
        align-middle
        ">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by {author}
            <span className="flex justify-center my-2 px-2">
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </div>
      </footer>
  )
}

export default Footer