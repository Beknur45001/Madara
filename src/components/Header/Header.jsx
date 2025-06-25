import React from 'react'
// import { Link } from 'react-router-dom'
import "./Header.scss"
import apple from "../../assets/apple.svg"
import cart from "../../assets/cart.svg"
import like from "../../assets/like.svg"


function Header() {
  return (
    <div className='Header'>
<img src={apple} alt="" />
<ul>
  <li>iPhon 11</li>
  <li>iPhon 12</li>
  <li>iPhon 13</li>
  <li>iPhon 14</li>
</ul>
<div>
  <img src={like} alt="" />
  <img src={cart} alt="" />
</div>
    </div>
  )
}

export default Header
