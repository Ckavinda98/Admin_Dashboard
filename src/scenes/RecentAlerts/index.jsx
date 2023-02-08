import {  useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
// import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
// import Table from 'react-bootstrap/Table';
import { getAllRecords } from "../../admin/action/Tableone";
import {  useState, useEffect } from "react";

function Userdata()
{
    const [userData, setUserdata]= useState([]); 
    useEffect( ()=>{
        const getUserdata= async()=>{
            const reqData= await fetch("http://localhost:9090/api/v1/tableone");
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
                index
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                active
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
              >
                date
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                deployment
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                ns
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                prefix
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                pre
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                size
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
              >
                system
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userData.map((item,index)=><tr>
              <th
                scope="col"
                
              >
                {item.index}
              </th>
              <th
                scope="col"
                
              >
                {item.active}
              </th>
              <th
                scope="col"
                
              >
            {item.date}
              </th>

              <th
                scope="col"
                
              >
                {item.deployment}
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
                {item.pre}
              </th>
              <th
                scope="col"
                
              >
                {item.size}
              </th>
              <th
                scope="col"
                
              >
                system
              </th>
            </tr>) }
          </tbody>
        </table>
      </div>
    );
}


export default Userdata;