import axios from "axios";

import {
    MainPath,
    tabletwo
} from "./api";

export const getAllRecords = async () => {
    try{
        const res = await axios.get(MainPath + tabletwo);
        return res.data;
    } catch (error) {
        console.log(error);

    }
};