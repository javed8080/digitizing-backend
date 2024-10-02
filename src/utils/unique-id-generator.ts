// src/utilities/unique-id-generator.ts
import { v4 as uuidv4 } from 'uuid';

export const generateUniqueInteger = () => Math.floor(new Date().getTime() / 1000) + Math.floor(Math.random() * 1000);




export const currentTime = () => {
    const currentDate = new Date();
    const timestamp = currentDate.getTime();
    console.log(timestamp , 'dateString');
    return timestamp;
};



