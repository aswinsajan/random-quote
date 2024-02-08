import React, { useState } from 'react'
import  './RandomQuote.css'

const RandomQuote = () => {

    let quotes = [];

    async function loadQuotes() {
    const response = await fetch("http://type.fit/api/quotes");
    quotes = await response.json();
    }
    

    const random = ()=>{
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select);
    }
    
    const [quote,setQuote]= useState({
        text:"Difficulties increase the nearer we get to the goal.",
        author:"Johann Wolfgang von Goethe",
    });

    loadQuotes();
  return (

    <div className='Container'>
<div className="quote">{quote.text}</div>
<div>
<div className="line"></div>
<div className="bottom">
    <div className="author">- {quote.author.split(',')[0]}</div>
    <div className="icons">
        <img src="https://www.freeiconspng.com/thumbs/reload-icon/reload-icon-5.png" onClick={()=>{random()}} alt="" />
    </div>
</div>
</div>
    </div>
  )
}

export default RandomQuote