import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Loading from "./Loading";
import Tours from "./Tours";
import "./index.css";

const url = "https://pahadihub-30010-default-rtdb.firebaseio.com/appData.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      const data = [];
      for (const key in tours) {
        data.push({
          id: key,

          name: tours[key].name,
          info: tours[key].info,
          image: tours[key].image,
          price: tours[key].price,
        });
      }
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <>
      <Header />
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;
