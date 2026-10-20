import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import DocLayout from '../layout/DocLayout'
import DocsPage from '../pages/DocsPage'

const AppRoutes = () => {
  return (
   <Routes>
     <Route path='/' element={<HomePage/>}/>

     <Route path='/docs/:category' element={<DocLayout />}>
      <Route index element={<DocsPage />}/>
      <Route path=':topic' element={<DocsPage />}/>
     </Route>

   </Routes>
  )
}

export default AppRoutes