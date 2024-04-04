import React, { useEffect } from "react";
import styles from "./home.module.css";
import { Events } from "@/assets/Props";
import { getAllImages, getImagesByEvent } from "@/service/imageAPIsService";
import ImageCard from "./imageCard.module";
import BootstrapCarousel from "./carousel.module";

const HomePage = () => {
    const [activeEvent, setActiveEvent] = React.useState<any>({
        title: "All",
        filter: null
    });
    const [images, setImages] = React.useState<any[]>([]);
    const [openCarousal, setOpenCarousal] = React.useState<boolean>(false);
    const [carouselStartItem, setCarouselStartItem] = React.useState<any>({
        attributes: {
            imgURL: "",
            occassion: "",
            date: new Date()
        }
    });

    useEffect(() => {
        // call api to get images based on activeEvent
        if (activeEvent.title === "All") {
            getAllImages().then((resp: any) => {
                setImages(resp.data);
            }).catch((error) => {
                console.log(error);
            })
        } else {
            // get images based on activeEvent
            const encodedEventName = encodeURIComponent(activeEvent.filter);
            getImagesByEvent(encodedEventName).then((resp: any) => {
                setImages(resp.data);
            }).catch((error) => {
                console.log(error);
            })
        }
    }, [activeEvent])

    const handleCardClick = (image: any) => {
        setOpenCarousal(true);
        setCarouselStartItem(image);
    }

    return (
        <div className={styles.homePageBody}>
            {openCarousal && <BootstrapCarousel 
                carouselStartItem={carouselStartItem}
                setOpenCarousal={setOpenCarousal}
                images={images} />}
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
                        <ImageCard key={index} 
                            eventDetails={image.attributes} 
                            handleCardClick={() => {handleCardClick(image)}}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default HomePage;