import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function DetailPage(props) {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const url = `http://localhost:8000/fund/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data.data));
  }, []);

  return (
    <div>
      <h2>Fund: {id} </h2>

      {detail &&
        detail.map((item, index) => {
          return (
            <div key={index}>
              <p>Fundname: {item.fundName}</p>
              <p>Holdnings date: {item.holdingsDate}</p>
              <p>Fund Company name: {item.fundCompanyName}</p>
              <br />
            </div>
          );
        })}
    </div>
  );
}
