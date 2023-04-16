import './App.css';
import {useState} from 'react'

function App() {
  const [image,setImage]=useState([])


  const getImage = async()=>{
    const res=await fetch ("https://api.unsplash.com/search/photos?page=1&query=random&client_id=_eWhaCOKAKz2BSKjRj7o5yt7mRDbTm12zy6G5z3biBk")
    const data=await res.json()
    setImage(data.results)
  }

  return (
    <div className="App">
        <button onClick={getImage}>Get Images!</button>
        <div>
          {
            image.map((value,index)=>{
              return(
                <div className="container" style={{
                  width:"100%",
                  height:"100%",
                  backgroundColor:"lightblue",
                  justifyContent:"center"
                  
                }}>
                  <div className="card" style={{
                    
                  }}>

                  <img src={value.urls.small} key={index}></img>

                  </div>
                </div>
              )
            })
          }
        </div>
    </div>
  );
}

export default App;