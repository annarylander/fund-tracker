import React, { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import Funds from "../components/Funds";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function ListPage() {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [fundsPerPage] = useState(30);

  useEffect(() => {
    console.log("use effect ran");
    const url = "http://localhost:8000/fund";

    fetch(url)
      .then((res) => res.json())
      .then((data) => setFunds(data.data));
    setLoading(false);
  }, []);

  // Get current posts
  const indexOfLastFund = currentPage * fundsPerPage;
  const indexOfFirstFund = indexOfLastFund - fundsPerPage;
  const currentFund = funds.slice(indexOfFirstFund, indexOfLastFund);
  console.log(funds, typeof funds);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1>Fonder</h1>
      <Funds funds={currentFund} loading={loading} />
      <Pagination
        fundsPerPage={fundsPerPage}
        totalFunds={funds.length}
        paginate={paginate}
      />
    </div>
  );
}
