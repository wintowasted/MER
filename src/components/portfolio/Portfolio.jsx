import './portfolio.scss'
import PortfolioList from './PortfolioList'
import { useState, useEffect } from 'react';
import {featuredPortfolio, contentPortfolio, designPortfolio, mobilePortfolio, webPortfolio} from '../../data.js';

const Portfolio = () => {

  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  useEffect(() => {
   
    switch(selected){
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'content':
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
    
  }, [selected])
  

  const portList = [{
    id: "featured",
    title: 'Featured'
  },
  {
    id: 'web',
    title: 'Web App'
  },
  {
    id: 'mobile',
    title: 'Mobile App'
  },
  {
    id: 'design',
    title: 'Design'
  },
  {
    id: 'content',
    title: 'Content'
  },
]


  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {portList.map(item => (<PortfolioList key={item.id} title={item.title} active={item.id === selected} setSelected={setSelected} id={item.id} />))}
      </ul>
      <div className="container">
        {data.map(item => (
          <div key={item.id} className="item">
            <img src={item.img} alt="data" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio