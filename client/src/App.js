import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Getaddress from './Pages/Getaddress';
import Addaddress from './Pages/Addaddress';

import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <div>
  <BrowserRouter>
    <Toaster position='top-right' toastOptions={{duration: 2000}} />
    <Routes>
      <Route path='/' element={<Getaddress />} />
      <Route path='/add' element={<Addaddress />} />
    </Routes>
  </BrowserRouter>
</div>

  )
}

export default App
