import React from 'react'
import { useState } from 'react'

const Voting = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    
    const handleCount = (action) => {
        if(action === 'vote1') {
            setCount1(count1 => count1 + 1);
        }
        else if(action === 'vote2') {
            setCount2(count2 => count2 + 1);
        }
        else if(action === 'vote3') {
            setCount3(count3 => count3 + 1);
        }
    }
    console.log(count1);
  return (
    <div className="container">
        <div className="card">
            <img className="img" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png" alt="fc-barcelona" />
            <p className="name">FC Barcelona</p>
            <button onClick={() => handleCount('vote1')} className="btn1">Vote</button>
            <p className="bottom">Vote count: <span className="count1">{count1}</span></p>
        </div>
        <div className="card">
            <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Juventus_FC_2017_logo.svg/1031px-Juventus_FC_2017_logo.svg.png" alt="juventus-fc" />
            <p className="name">Juventus F.C.</p>
            <button onClick={() => handleCount('vote2')} className="btn2">Vote</button>
            <p className="bottom">Vote count: <span className="count2">{count2}</span></p>
        </div>
        <div className="card">
            <img className="img" src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png" alt="manchester-united-fc" />
            <p className="name">Manchester United F.C.</p>
            <button onClick={() => handleCount('vote3')} className="btn3">Vote</button>
            <p className="bottom">Vote count: <span className="count3">{count3}</span></p>
        </div>
    </div>
  )
}

export default Voting