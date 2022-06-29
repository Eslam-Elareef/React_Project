import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { PortfolioSection , PortfolioTitle , Span , PortfolioList , 
  PortfolioItem , ImageRapper ,Image , Overlay , OverlaySpan } from './style.js'

const Portfolio = () =>  {

    const [ images , setImages ] = useState([])

    useEffect ( () => {
      axios.get('js/data.json').then( res => { setImages(res.data.portfolio) } )
    } , [] )

    const PortfolioImages = images.map( (imageItem) => {
      return (
        <ImageRapper key={imageItem.id}>
            <Image src={imageItem.image} alt="" />
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </ImageRapper>
      )
    }) 

    return (
      <PortfolioSection>
        <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
        <PortfolioList>
            <PortfolioItem active>All</PortfolioItem>
            <PortfolioItem>HTML</PortfolioItem>
            <PortfolioItem>Photoshop</PortfolioItem>
            <PortfolioItem>Wordpress</PortfolioItem>
            <PortfolioItem>Mobile</PortfolioItem>
        </PortfolioList>
        
        <div className='box'>
          {PortfolioImages}
        </div>

      </PortfolioSection>
    )
  }
  
  export default Portfolio;