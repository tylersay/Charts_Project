import React from "react";
import Chart_1 from "./Chart_1";
import { useCoeFetch } from "./useCoeFetch";
import { useConsPriceFetch } from "./useConsPriceFetch";
import Spinner from "./Spinner";
import Dropdown from "./Dropdown";
import Footer from "./Footer";
// import {} from './NavBar'

const Home = () => {
  //props
  const { coeData, state, loading, error } = useCoeFetch();
  const xAxis = coeData.map((data) => data.fields.Date);
  const yAxis = coeData.map((data) => data.fields.Premium);

  const { consPriceData, drop } = useConsPriceFetch();
  console.log('home consPriceData', consPriceData)
  const initial = `{label: "${drop}"}`
  console.log('initial', initial)
  // const dropData = consPriceData.records[0].fields.Variables

  return (
    <div>
      {loading && <Spinner />}
      This is home
      <Dropdown initial={initial}
     
      />
      {<Chart_1 
        xAxis={xAxis} 
        yAxis={yAxis} 
      />}
      <Footer />
    </div>
  );
};

export default Home;
