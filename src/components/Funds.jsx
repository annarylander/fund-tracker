import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: #000;
  line-height: 0.6;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: #1dce80;
  }
`;

const Funds = ({ funds, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-10 mt-10">
      {funds.map((fund, index) => (
        <div key={index}>
          <StyledLink to={`/fund/${fund}`}>
            {" "}
            <p>{fund}</p>{" "}
          </StyledLink>
        </div>
      ))}
    </ul>
  );
};

export default Funds;
