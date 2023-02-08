import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import {  useState, useEffect } from "react";

function Userdata()
{
    const [userData, setUserdata]= useState([]); 
    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("http://localhost:9090/api/v1/tablethree");
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
                Deployment
              </th>
              <th
                scope="col"
                
              >
                IsIndexPolicy
              </th>
              <th
                scope="col"
                
              >
                IsUser
              </th>

              <th
                scope="col"
                
              >
                IsUserRole
              </th>
              <th
                scope="col"
                
              >
                NS
              </th>
              <th
                scope="col"
                
              >
                Prefix
              </th>
              <th
                scope="col"
                
              >
                System
              </th>
              
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userData.map((item,index)=><tr>
              <th
                scope="col"
                
              >
                {item.deployment}
              </th>
              <th
                scope="col"
                
              >
                {item.isIndexPolicy}
              </th>
              <th
                scope="col"
                
              >
            {item.isUser}
              </th>

              <th
                scope="col"
                
              >
                {item.isUserRole}
              </th>
              <th
                scope="col"
                
              >
                {item.ns}
              </th>
              <th
                scope="col"
                
              >
                {item.prefix}
              </th>
              <th
                scope="col"
                
              >
                {item.system}
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