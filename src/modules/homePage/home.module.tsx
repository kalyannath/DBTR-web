import React, { useEffect } from "react";
import styles from "./home.module.css";
import { Events } from "@/assets/Props";
import { getAllImages, getImagesByEvent } from "@/service/imageAPIsService";
import ImageCard from "./imageCard.module";

const HomePage = () => {
    const [activeEvent, setActiveEvent] = React.useState<any>({
        title: "All",
        filter: null
    });
    const [images, setImages] = React.useState<any[]>([]);

    useEffect(() => {
        console.log(activeEvent);
        // call api to get images based on activeEvent
        if (activeEvent.title === "All") {
            getAllImages().then((resp: any) => {
                console.log(resp.data);
                setImages(resp.data);
            }).catch((error) => {
                console.log(error);
            })
        } else {
            // get images based on activeEvent
            const encodedEventName = encodeURIComponent(activeEvent.filter);
            getImagesByEvent(encodedEventName).then((resp: any) => {
                console.log(resp.data);
                setImages(resp.data);
            }).catch((error) => {
                console.log(error);
            })
        }
    }, [activeEvent])

    return (
        <div className={styles.homePageBody}>
            <div className={styles.homePagePoster}>
                <div className={styles.posterTitle}>
                    Our events gallery
                </div>
                <div className={styles.posterDescription}>
                    Events at DBTR are filled with joyous occassions, cultural gatherings, and learning opportunities that bring us all together.
                </div>
                <div className={styles.posterBanner}>
                    <img src={"/images/lab.jpg"} alt="poster" className={styles.posterBannerPic}/>
                </div>
            </div>
            <div className={styles.eventsContainer}>
                {Events.map((event, index) => {
                    return (
                        <button key={index} 
                            onClick={() => setActiveEvent(event)}
                            className={`${styles.eventCapsule} ${event.title === activeEvent.title ? styles.activeEvent : ""}`}>
                            {event.title}
                        </button>
                    )
                })}
            </div>
            <div className={styles.imageCardContainer}>
                {images && images.map((image, index) => {
                    return (
                        <ImageCard key={index} eventDetails={image.attributes}/>
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage;