import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [getdata, setgetdata] = useState([]);
  const [clicking, setclicking] = useState(-1);
  const [clicked, setclicked] = useState(0);

  const click = function (id) {
setclicked(1)
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(function (res) {
        return res.json();
      })
      .then(function (json) {
        setgetdata(json);
      });
  };

  const clickingg = function (id) {
    return function x() {
      setclicking(id);
    };
  };
  console.log(clicking);
  return (
    <div className="mainblok">
      <ul className="listul">
        {getdata.map(function (item, index) {
           if(clicked>0){
          return (
           
            <li onClick={clickingg(index)} key={index} className="mainlist">
              {item.title}
            </li>
          );}
        })}
      </ul>
      <ul>
        {getdata.map(function (item, index) {
          if (clicking === index) {
            return (
              <div className="mirrorblok" key={Math.random()}>
                <img src={item.image} className="nkar"></img>
                <ul >
                  <li  key={Math.random()} className="list">
                    {item.title}
                  </li>
                  <li  key={Math.random()} className="list">
                    {item.producer}
                  </li>
                  <li  key={Math.random()} className="list">
                    {item.director}
                  </li>
                  <li  key={Math.random()} className="list">
                    {item.release_date}
                  </li>
                </ul>
              </div>
            );
          }
        })}
      </ul>
        <div className="bl">
      <button onClick={click} className="btn">Get list</button>
      </div>
    </div>
  );
}

export default App;
