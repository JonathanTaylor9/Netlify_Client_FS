import './App.css';
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("https://adcadb1.azurewebsites.net/posts").then((response) => {
// Below config is for Heroku
//    axios.get("https://full-stack-api-jt.herokuapp.com/posts").then((response) => {
// This line was just used for testing      console.log(response.data);
      setListOfPosts(response.data);
    });
  }, []);
  return (
    <div className="App">
      {listOfPosts.map((value, key) => {
       return (
        <div className="post">
          <div className="title">{value.title} </div>
          <div className="body">{value.postText} </div>
          <div className="footer">{value.username} </div>        
        </div>
       );
    })}
    </div>
  );
}

export default App;

//nonesense to trigger git