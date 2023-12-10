import "./App.css";
import React, { useEffect } from 'react'
import Loading from "./Components/Loading/Spinner";
import Router from "./Router"

function App() {
  const [load, setLoad] = React.useState(true);

  window.onload = (event) => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  };

  useEffect(()=>{
    return ()=>{
      console.log("Cleaned")
    }
  }, [load])

  return (
    <>
      {/* {load ? (
        <>
        <Loading />
        </>
      ) : ( */}
        <div className="App">
            <Router/>
        </div>
        <div className="mobileApp">
          <h1>This site is not for mobile devices!!!</h1>
        </div>
      {/* )} */}
    </>
  );
}

export default App;
