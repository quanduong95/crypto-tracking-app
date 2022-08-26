import React,{useState,useEffect} from 'react'
import './Featured.css'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import axios from 'axios';

const Featured = () => {
  const [data, setData] = useState(null);


  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=false';

  useEffect(() => {
    axios.get(url)
      .then(res => setData(res.data))
      .catch(error => {
        console.log(error);
    })
  }, [])
  
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
          {data.map((coin,index) => (
            <div key ={index} className='card'>
              <div className='top'>
                <img src={coin.image} alt="" />
              </div>
              <div>
                <h5>{coin.name}</h5>
                <p>${coin.current_price.toLocaleString()}</p>
              </div>
              {coin.price_change_percentage_24h < 0 ?
              (<span className='red'><FiArrowDown /> {coin.price_change_percentage_24h.toFixed(2)}%</span>)
              :(<span className='green'><FiArrowUpRight />{coin.price_change_percentage_24h.toFixed(2)}%</span>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featured