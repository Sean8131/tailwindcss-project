import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Hello World</h1>
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <p>
          This is a test page for tailwindcss!
        </p>
      </div>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        I'm using tailwind css to  build a page that uses white-on-black for light mode and black-on-white for dark mode.
      </p>
    </>
  )
}

export default App
