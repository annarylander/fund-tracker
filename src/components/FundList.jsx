import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function FundList() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("use effect ran");
    const url = "http://localhost:8000/";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setList(data.data));
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <div> Is loading... </div>}
      {list &&
        list.map((item, index) => {
          return (
            <div key={index}>
              <Link to={`/fund/${item}`}>{item} </Link>
            </div>
          );
        })}
    </div>
  );
}
