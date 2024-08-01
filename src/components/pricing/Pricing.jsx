import React, { Fragment} from "react";
import pricing from './pricing.module.css'
import price from '../../assets/img-2.jpg'
import '../../header.css'
import Header from '../Header.jsx'
const {headDiv,info,img,details,title,p,test}=pricing

const Pricing = () => {
  
  
  return (
    <Fragment>
      <div className={headDiv}>
        <div className={test}>
        <Header/>
        </div>
        <div className={info}>
         <div className={details}>
            <h3 className={title}>Simple pricing.<br/>Just $9/month.</h3>
            <p className={p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel labore mollitia iusto. Recusandae quos provident, laboriosam fugit voluptatem iste.</p>  
         </div>
         <div>
            <img className={img} src={price}/>
         </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Pricing;
