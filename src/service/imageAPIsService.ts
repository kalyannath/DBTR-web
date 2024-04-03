import { API_URL } from "@/assets/Props";

// get all images
export const getAllImages = async () => {
    const response = await fetch(`${API_URL}/images`);
    const data = await response.json();
    return data;
}

// get images based on event
export const getImagesByEvent = async (eventFilter: string) => {
    const response = await fetch(`${API_URL}/images?filters[occassion][$eq]=${eventFilter}`);
    const data = await response.json();
    return data;
}