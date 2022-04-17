import { useEffect, useContext } from "react"
import { Context } from '../../hooks/Context'
import { useNavigate } from "react-router-dom"

function ReaderAccount() {
  const context = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if (context.role === 0 || context.role === 1) {
      navigate('/')
    }
  })

  return (
    <div>ReaderAccount</div>
  )
}

export default ReaderAccount