import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import {  useState, useEffect } from "react";

function Userdata()
{
    const [userData, setUserdata]= useState([]); 
    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("http://localhost:9090/api/v1/tabletwo");
            const resData= await reqData.json();
            setUserdata(resData);
           console.log(resData);
        }
        getUserdata();
    },[]);
 
    return(
        <div className="mt-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                
              >
                Active
              </th>
              <th
                scope="col"
                
              >
                Index
              </th>
              <th
                scope="col"
                
              >
                Pri
              </th>

              <th
                scope="col"
                
              >
                Size
              </th>
              
              
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userData.map((item,index)=><tr>
              <th
                scope="col"
                
              >
                {item.active}
              </th>
              <th
                scope="col"
                
              >
                {item.index}
              </th>
              <th
                scope="col"
                
              >
            {item.pri}
              </th>

              <th
                scope="col"
                
              >
                {item.size}
              </th>
              
             
            </tr>) }
          </tbody>
        </table>
      </div>
    );
}


export default Userdata;