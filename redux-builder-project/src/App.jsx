import React from "react";
import Counter from "./Components/Counter";
import Theme from "./Components/Theme";
import { useSelector } from "react-redux";

const App = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      
      style={{  height: "200px", textAlign: "center",width:"30%" ,margin:"auto",textAlign:"center",marginTop:"50px"}}
    >
      <Theme />
      <Counter className={theme === "light" ? "light_theme" : "dark_theme"} />

      <style>{`


        .light_theme {
          background-color: white;
          color: black;
         
        }
        .dark_theme {
          background-color: #121212;
          color: white;
          height:200px

        
        }
       
      `}</style>
    </div>
  );
};

export default App;
