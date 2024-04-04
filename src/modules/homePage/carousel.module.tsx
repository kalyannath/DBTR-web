import React from "react";
import styles from "./carousel.module.css";
import { BsCalendar2, BsXLg } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { Events } from "@/assets/Props";
import dayjs from 'dayjs';

const BootstrapCarousel = ({ ...props }) => {
    const [items, setItems] = React.useState<any[]>([]);
    const [activeItem, setActiveItem] = React.useState<any>({
        attributes: {
            imgURL: "",
            occassion: "",
            date: new Date()
        }
    });
    React.useEffect(() => {
        console.log("images::::::::::", props.images);
        if (props.images && props.images.length > 0) {
            setItems(props.images);
            setActiveItem(props.carouselStartItem);
        }
    }, [props.images]);

    const formatDate = (date: Date): string => {
        return dayjs(date).format("DD MMM YYYY");
    };

    const handleNext = () => {
        // infinite loop
        const currentIndex = items.findIndex((item) => item === activeItem);
        if (currentIndex < items.length - 1) {
            setActiveItem(items[currentIndex + 1]);
        } else {
            setActiveItem(items[0]);
        }
    };

    const handlePrev = () => {
        // infinite loop
        const currentIndex = items.findIndex((item) => item === activeItem);
        if (currentIndex > 0) {
            setActiveItem(items[currentIndex - 1]);
        } else {
            setActiveItem(items[items.length - 1]);
        }
    };

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselContent}>
                <div className={styles.carouselHeader}>
                <button
                    onClick={() => props.setOpenCarousal(false)}
                    className={styles.closeBtn}
                >
                    <BsXLg />
                </button>
                </div>
                <div className={styles.carouselBody}>
                    <button 
                        onClick={() => handlePrev()}
                        className={styles.controlBtn}><BsChevronLeft  className={styles.controlBtnIcon}/></button>
                    {activeItem && <div className={styles.itemContainer}>
                        <img src={activeItem.attributes.imgURL} alt="event" className={styles.carouselImagePic}/>
                        <div className={styles.itemDetails}>
                            <div className={styles.itemEvent}>
                                {Events.find(event => event.filter === activeItem.attributes.occassion)?.title}
                            </div>
                            <div className={styles.itemDate}>{formatDate(new Date(activeItem.attributes.date))}
                            </div>
                        </div>
                    </div>}
                    <button 
                        onClick={() => handleNext()}
                        className={styles.controlBtn}><BsChevronRight  className={styles.controlBtnIcon}/></button>
                </div>
            </div>
        </div>
    );
};

export default BootstrapCarousel;
