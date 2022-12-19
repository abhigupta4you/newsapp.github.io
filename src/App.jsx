import React, { useState } from "react";
import axios from "axios";



function App() {

  const [data, setData] = useState([]);
  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=98194c0f633a451984658ec29a48b661&q=india")
      .then((response) => {
        // console.log(response);
        setData(response.data.articles)
      })
  }


  return (
    <>
      <div className="bg-gradient-to-r p-3 md:p-8 from-cyan-500 to-cyan-400 items-center max-w-full mx-auto max-h-screen">
        <h2 className="font-bold text-center text-2xl overflow-hidden md:text-4xl text-white">Get Latest <span className="font-serif">News</span>Heading at One Click!</h2>
       <br /> <br /> <button onClick={getNews} className="p-1 rounded-sm mb-4 bg-white text-cyan-500 justify-center md:ml-6 font-bold text-xl md:text-2xl">Click! to Get News</button>
      </div>

      <div className="mt-6">

        {data.map((value) => {
          return (

            <div className=" mt-5 items-center">
              <div className="max-w-full rounded  bg-gradient-to-r  space-y-4 from-cyan-500 overflow-hidden shadow-lg">
              <div className="md:flex mx-8"> 
               <img className="w-auto p-3 md:rounded-none rounded-3xl md:w-1/3" src={value.urlToImage} alt="network issues" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{value.title}</div>
                  <p className="text-gray-700 text-base">
                    {value.description}
                  </p>
                  </div>
                </div>
              </div>
            </div>

          );
        })

        }

      </div>

    </>
  );
}


export default App;
