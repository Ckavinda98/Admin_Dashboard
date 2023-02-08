// import { Box, useTheme } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataInvoices } from "../../data/mockData";
// import Header from "../../components/Header";
// import Table from 'react-bootstrap/Table';

// export default RecentAlerts;


// function Userdata()
// {
//     const [userData, setUserdata]= useState([]); 
//     useEffect( ()=>{
//         const getUserdata= async()=>{
//             const reqData= await fetch("http://localhost:9090/api/tablethree/allrecodrs");
//             const resData= await reqData.json();
//             setUserdata(resData);
//            // console.log(resData);
//         }
//         getUserdata();
//     },[]);
 
//     return(
//         <React.Fragment>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-12">
//                     <h5 className="mt-2">index data</h5>
//                        <div className="d-grid d-md-flex justify-content-md-end mb-3">
//                         {/* <Link to="/adduser" className="btn btn-warning">Add New User</Link> */}
//                        </div>
//                        <table className="table table-bordered table-striped">
//                         <thead>
//                         <tr>
//                         <th>Sr. No</th>
//                         <th>Username</th>
//                         <th>Email</th>
//                         <th>Phone No</th>
//                         <th>Address</th>
//                         <th>Status</th>
//                         <th>Action</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                          { userData.map( (userData, index)=>(                           
//                         <tr key={index}>
//                         <td>{deployment} </td>
//                         <td>{ userData.ns } </td>
//                         <td>{ userData.indexPolicy } </td>
//                         <td>{ userData.isUser } </td>
//                         <td>{ userData.isUserRole } </td>
//                         <td>{ userData.prefix} </td>
//                         <td>{ userData.system} </td>
//                         {/* <td>
//                          <Link to={"/editUser/"+userData.userid} className="btn btn-success mx-2">Edit</Link>
//                          <Link to="/deleteUser" className="btn btn-danger">Delete</Link>
//                         </td> */}
//                         </tr>
//                         )) 
//                         }                        
//                         </tbody>
//                         </table>                            
//                     </div>
//                 </div>
//             </div>
            
//         </React.Fragment>
//     );
// }
