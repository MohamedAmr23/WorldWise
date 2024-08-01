import React, { Fragment } from 'react'
import pricing from '../pricing/pricing.module.css'
import product from './product.module.css'
import price from '../../assets/img-1.jpg'
import '../../header.css'
import Header from '../Header.jsx'
const {headDiv,info,img,details,p,test}=pricing
const {h3}=product
const Product = () => {
  return (
    <Fragment>
         <div className={headDiv}>
        <div className={test}>
        <Header/>
        </div>
        <div className={info}>
          <div>
              <img className={img} src={price}/>
          </div>
          <div className={details}>
              <h3 className={h3}>About WorldWide.</h3>
              <p className={p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est dicta illum vero culpa cum quaerat architecto sapiente eius non soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga perspiciatis?</p>
              <p className={p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.</p>  
          </div>
          
        </div>
      </div>
    </Fragment>
  )
}

export default Product