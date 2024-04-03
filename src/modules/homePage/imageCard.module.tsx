import React from "react";
import styles from "./imageCard.module.css";
import { Events } from "@/assets/Props";
import dayjs from 'dayjs';
import { BsCalendar2 } from "react-icons/bs";

const ImageCard = ({ ...props }) => {

    const formatDate = (date: Date): string => {
        return dayjs(date).format("DD MMM YYYY");
    };

    return (
        <div className={styles.imageCard} onClick={() => {props.setOpenCarousal(true)}}>
            <div className={styles.image}>
                <img src={props.eventDetails.imgURL} alt="event" className={styles.imageCardPic}/>
            </div>
            <div className={styles.eventDetails}>
                <div className={styles.eventTitle}>
                    {Events.find(event => event.filter === props.eventDetails.occassion)?.title}
                </div>
                <div className={styles.eventDate}>
                    <BsCalendar2 className={styles.calenderIcon}/> {formatDate(new Date(props.eventDetails.date))}
                </div>
            </div>
        </div>
    )
}

export default ImageCard;