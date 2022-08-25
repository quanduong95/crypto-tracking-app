import React,{useState,useEffect} from 'react'
import './Featured.css'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import axios from 'axios';

const Featured = () => {
  const [data, setData] = useState(null);


  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';


  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
      .catch(error => {
        console.log(error);
    })
  }, [])
  
  console.log(data);
  if (!data) return null;

  return (
    <div className='featured'>
      <div className='container'>
        <div className='left'>
          <h2>Explore top Crypto's like Bitcoin, Ethereum and Dodgecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFTs</p>
          <button className='btn'>See More Coins</button>
        </div>
        <div className='right'>
          <div className='top'>
            <img src={data[0].image} alt="" />
          </div>
          <div>
            <h5>{data[0].name}</h5>
            <p>${data[0].current_price.toLocaleString()}</p>
          </div>
          <span><FiArrowUpRight/>2.5%</span>
        </div>
      </div>
    </div>
  )
}

export default Featured