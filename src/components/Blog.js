import React from 'react'
import { Sidebar } from './Sidebar'

export const Blog = () => {
  return (
    <div className='center'>
        <section id="content">
            <h2>Bienvenido al blog</h2>
        </section>
        <Sidebar/>
        <div className="clearfix"></div>
    </div>
  )
}
