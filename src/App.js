import React from 'react'
import { Sidebar } from './components'
import { Accounts, Analytics, Dashboard, Files, Inbox, Schedule, Search, Settings } from './pages'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='flex' >
      <Sidebar />

      <div className='p-7 flex-1 h-screen'>

        <Routes>
          <Route path='/' element="Ecommerce hello" />
          <Route path='/dashboard' element={(<Dashboard />)} />
          <Route path='/inbox' element={(<Inbox />)} />
          <Route path='/accounts' element={(<Accounts />)} />
          <Route path='/schedule' element={(<Schedule />)} />
          <Route path='/search' element={(<Search />)} />
          <Route path='/analytics' element={(<Analytics />)} />
          <Route path='/files' element={(<Files />)} />
          <Route path='/setting' element={(<Settings />)} />
        </Routes>
        {/* <h1 className='p-7 text-2xl font-semibold flex-1 h-screen'>Hello U</h1> */}
      </div>

    </div>
  );
}

export default App;
