import { useEffect, useContext } from "react"
import { Context } from '../../hooks/Context'
import { useNavigate } from "react-router-dom"

function Cart() {
  const context = useContext(Context)
  const navigate = useNavigate()

  useEffect(() => {
    if (context.role === 0 || context.role === 2) {
      navigate('/')
    }
  })

  return (
    <div>Cart</div>
  )
}

export default Cart