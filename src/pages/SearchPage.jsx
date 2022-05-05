import React, { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  function handleOnSubmit(e) {
    e.preventDefault();
    const payload = { query };
    console.log(query);
    const url = "http://localhost:8000/fund/search";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => setResult(data.results));
  }

  //   if (!result) {
  //     return <p>Please log in</p>;
  //   }

  return (
    <>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>

      {result &&
        result.map((item, index) => {
          return (
            <div className="" key={index}>
              <p>◦ {item.fundName}</p>
            </div>
          );
        })}
    </>
  );
}
