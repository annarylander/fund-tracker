import { createContext, useState, useEffect } from "react";

const FundContext = createContext();

export const FundProvider = ({ children }) => {
  const [funds, setFunds] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFunds = async () => {
    const res = await fetch("http://localhost:8000/fund");
    console.log("fetched funds");
    const data = await res.json();
    setFunds(data.data);
    setLoading(false);
  };

  return (
    <FundContext.Provider value={{ funds, loading, fetchFunds }}>
      {children}
    </FundContext.Provider>
  );
};

export default FundContext;
