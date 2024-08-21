import React from 'react'
import { SeccionPruebas } from './SeccionPruebas'
import { Sidebar } from './Sidebar'

export const Home = () => {
  return (
    <>
    <div className="center">
        <SeccionPruebas />

        <Sidebar />
      </div>
    </>
  )
}
