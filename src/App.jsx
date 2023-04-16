import './App.css';
import {useState} from 'react'

function App() {
  const [image,setImage]=useState([])


  const getImage = async()=>{
    const res=await fetch ("https://api.unsplash.com/search/photos?page=1&query=random&client_id=YY4q57s3846oDtv_PfZOaTH7ypUuzm5dqCHdFr1aAkw")
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
