import { useEffect, useState } from "react";

const AlertError = () => {
  const [showMessage, setShowMessage] = useState(true)

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
          ? <div
              className={
                showMessage
                  ? 'alert alert-error shadow-lg mb-4 transition-all delay-75 opacity-1'
                  : 'alert alert-error shadow-lg mb-4 transition-all delay-75 opacity-0'
                }>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Error! Pokemon not found.</span>
              </div>
              <div className="flex-none">
                <button
                  onClick={onClose}
                  className="btn btn-circle"
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              </div>
            </div >
          : ''
      }
    </>
  )
}

export default AlertError