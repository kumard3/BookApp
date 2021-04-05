import React from 'react'
import './smallcard.css'
import barcode from '../icons/barcode.svg'
function SmallCard() {
    return (
        <div className="smallCard"> 
        <div className="smallcard__main">
            <div className="card__content" >
                <div className="icon_div">
                <img className="icons" src={barcode} alt="icon"/>
                <h3>Claim</h3>
                </div>
                <div className="icon_div">
                <img className="icons" src={barcode} alt="icon"/>
                <h3>Claim</h3>
                </div>
                <div className="icon_div">
                <img className="icons" src={barcode} alt="icon"/>
                <h3>Claim</h3>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SmallCard
