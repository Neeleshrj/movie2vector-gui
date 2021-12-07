import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios";

import "./index.css";

import TextInput from "../../components/TextInput";

export default function Home() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [topic,setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  async function getData() {
    setLoading(true);
    
    await axios
      .post("http://127.0.0.1:8000/get_movies", {
        movie_desc: input,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setTimeout(()=> {
            setTopic(input);
            setInput("");
            setLoading(false);
            setData(res.data);
        },2000)
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="outer-container">
      <div className="outer-top-container">
        <h2 className="header-name">VectorMovies</h2>
        <p className="sub-header-name">Get Genuine Recommendations</p>
        <TextInput input={input} setInput={setInput}/>
        <div className="button-container">
          <div className="submit-button btn-grad" onClick={() => getData()}>
            <IoSearch className="icons" />
            <p>{loading ? "Finding...": "Find"}</p>
          </div>
        </div>
      </div>
      <div className="outer-bottom-container">
        <h2 className="header-name bottom-text">Movie Suggestions {topic.length !==0 ? `for ${topic}`: ""}</h2>
        <div className="movie-list-container">
        {data.length !=0 ? (
            data.map((obj) =>(
                <div className="movie-box">
                    <p className="header-name movie-text">{obj.name}</p>
                </div>
                
            ))
        ) : (
            <p className="header-name movie-text">Nothing to show....😞</p>
        )}
        </div>
        
      </div>
    </div>
  );
}
