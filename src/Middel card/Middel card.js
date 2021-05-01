import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import AddLocationOutlinedIcon from '@material-ui/icons/AddLocationOutlined';
import './Middel card.css'



function Card(title, imageUrl) {
    return (
        <div className='container1'>
            <div className='Card '>
                <div className="status-cont">
                    <div className='Red'>
                        COMiNG
                </div>
                    <p>SOON</p>
                </div>
                <div className="smalldivs">

                    <div className="one">
                        <p>03</p>
                        <p>DAYS</p>
                    </div>
                    <div className="two">
                        <p>12</p>
                        <p>HOURS</p>
                    </div>
                    <div className="three">
                        <p>30</p>
                        <p>MINS</p>

                    </div>

                </div>

                <div className="info-cont">

                    <h4>Bazar Name</h4>
                    <p>  <AddLocationOutlinedIcon className="icon" fontSize="inherit" />Turkey</p>
                    <p>Requests : 15</p>
                    <p>Shops : 15</p>


                </div>
            </div>
        </div>

    )
}
export default Card

