import Image from 'next/image';
import React, { section } from 'react';
import classes from './MeetupDetail.module.css'
const MeetupDetail = (props) => {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt="" />
           <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>The meetup description</p>
        </section>


    );
};

export default MeetupDetail;