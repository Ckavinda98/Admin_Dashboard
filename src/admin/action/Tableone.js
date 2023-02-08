import axios from "axios";

import {
    MainPath,
    tableone
} from "./api";

export const getAllRecords = async () => {
    try{
        const res = await axios.get(MainPath + tableone);
        return res.data;
    } catch (error) {
        console.log(error);

    }
};

