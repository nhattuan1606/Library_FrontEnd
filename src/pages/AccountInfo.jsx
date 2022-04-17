import { useEffect, useContext } from "react"
import { Context } from '../hooks/Context'
import { useNavigate } from "react-router-dom"

function AccountInfo() {
  const context = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if (context.role === 0) {
      navigate('/')
    }
  })

  return (
    <div>AccountInfo</div>
  )
}

export default AccountInfo