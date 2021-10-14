import { useState, useEffect } from "react";
import React from "react";
import { COEURL } from "../API";

const initialStart = {};

export const useCoeFetch = () => {
  const [coeData, setCoeData] = useState([]);
  const [state, setState] = useState(initialStart);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  //Initial and search
  useEffect(() => {
    const fetchCoeData = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await fetch(COEURL);
        const data = await res.json();

        

        console.log("data", data);

        //sort data by id
        const newData = data.records.sort((a, b) => a.fields.ID - b.fields.ID);

        setLoading(false);
        setCoeData(newData);

        console.log("data", data);
        // console.log('offset'  , data.offset)

        // console.log("loading", loading);
      } catch (error) {
        setError(true);
      }
    };
    fetchCoeData();
  }, []);

  // console.log("coedata", coeData);

  return { coeData, loading, error };
};
