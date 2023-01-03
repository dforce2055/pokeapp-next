import { FC, useEffect, useState } from "react"

interface Props {
  message: string
}

const AlertError: FC<Props> = ({ message }) => {
  const [showMessage, setShowMessage] = useState(true)
  const formatedMessage = message ? message : 'Error! Pokemon not found.'

  const onClose = () => {
    setShowMessage(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(false)
    }, 5500)
  }, [])
  
  return (
    <>
      {
        showMessage
          ? <div className="toast toast-top toast-end">
              <div className="alert alert-error">
              <div>
                <div
                  onClick={onClose}
                  className="btn btn-ghost rounded-full text-gray-100 hover:text-gray-800 hover:bg-transparent transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <span>{ formatedMessage }</span>
                </div>
              </div>
            </div>
          : ''
      }
    </>
  )
}

export default AlertError

