import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    
    useEffect(() => {

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json)
            .then((res) => setData(res[currency]))
    }, [currency])
    console.log(url);
    return data;
}

export default useCurrencyInfo
