import React from 'react'
import { useAuth } from './auth'

function LogoutPage() {
  const auth = useAuth()
  const logout = (e) => {
    e.preventDefault()
    auth.logout()
  }
  return (
    <>
      <h1>logout </h1>
      <form onSubmit={logout}>
        <label>Seguro quiere salir</label>
        <button type="submit">Salir</button>
      </form>
    </>
  )
}

export { LogoutPage }
