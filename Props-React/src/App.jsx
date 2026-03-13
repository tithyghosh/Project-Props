import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
    <Card user = 'Shrabony Ghosh' img = 'https://i.pinimg.com/736x/32/3d/2c/323d2c6418903fff972308c37b6d251d.jpg'/>
    <Card user='Nithiya Ghosh' img ='https://i.pinimg.com/736x/c2/35/c6/c235c65bf3e1d05834dabc8b98ebf952.jpg'/>
    <Card user='Anwita Deb'img='https://i.pinimg.com/736x/c9/ef/8b/c9ef8bf4a50ef8d51ecaf756ecfb7550.jpg'/>
    </div>
  )
}

export default App