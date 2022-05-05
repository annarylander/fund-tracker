import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const Links = styled.p``;

const Funds = ({ funds, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-10 mt-10">
      {funds.map((fund, index) => (
        <Links key={index}>
          <Link to={`/fund/${fund}`}>{fund} </Link>
        </Links>
      ))}
    </ul>
  );
};

export default Funds;
