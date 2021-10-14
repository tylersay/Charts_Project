import React from 'react'
import { useState, useEffect } from 'react'
import { consPriceURL } from '../API'

const initialStart = {};

export const useConsPriceFetch = () => {
  const [ consPriceData, setConsPriceData] = useState (initialStart);
  const[ drop, setDrop] = useState ([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 
  // Search
  useEffect(() => {
    const fetchConsPriceData = async () => {
      setLoading(true);
      setError(false);

      try{
        const res = await fetch(consPriceURL);
        const data = await res.json();
        
       

        console.log('Data', data)
      
       

        setLoading(false);
        setConsPriceData(data)
        // const initialDrop = data.records[0].fields.Variables
        // console.log('initialDrop', initialDrop)
        // setDrop(initialDrop);
        

        // const dropData = CPdata.map((data) => data.records.fields.Variables)
        // const testdata = CPdata.records.map((data) => console.log(data))
        
        // console.log('dropData', dropData)
       
        
        

        const initialDrop = data.records[0].fields.Variables
        console.log('initialDrop', initialDrop)
        setDrop(initialDrop);

      } catch (error) {
        setError(true);
      }
    }; fetchConsPriceData();
  }, [])

  console.log('consPriceData', consPriceData)
  console.log('drop', drop)
  // console.log(data)
  // console.log('initialDrop', drop)
  return { consPriceData, loading, drop}


};