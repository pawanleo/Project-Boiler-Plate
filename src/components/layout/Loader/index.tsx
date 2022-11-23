import React from "react";
import classes from "./loader.module.scss"
import { bool } from 'prop-types';
interface Props  {
    transparent: boolean
  }
const Loader =({transparent}:Props)=>{
return (
    <div className={`loader-container ${transparent ? 'transparent' : ''}`}>
    <h2 className="logo">
      <div className="loader" />
    </h2>
  </div>
)
}

  
  Loader.defaultProps = {
    transparent: false,
  };
export default Loader