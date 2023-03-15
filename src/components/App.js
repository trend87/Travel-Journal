import React from "react"
import Header from "./Header"
import Main from "./Main"
import Data from "./Data"


function App() {

  const location = Data.map((item) => {
    return <Main 

            key={item.key}
            item={item}
    
        
            
            />
  })

  return(
    <div>
      <Header />
      {location}
    </div>
  )
}

export default App