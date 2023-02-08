import axios from "axios";

import {
    MainPath,
    tablethree
} from "./api";

export const getAllRecords = async () => {
    try{
        const res = await axios.get(MainPath + tablethree);
        return res.data;
    } catch (error) {
        console.log(error);

    }
};