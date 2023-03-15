import './UserList.css'
import {useState} from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {Button} from "@mui/material";

let users = [
    {
        id: 1,
        name: 'admin',
        email: 'admin@gmail.com',
        role: 1,
        phone: '000908787'
    },
    {
        id: 2,
        name: 'admin2',
        email: 'admin2@gmail.com',
        role: 1,
        phone: '000908787'
    },
    {
        id: 30,
        name: 'user',
        email: 'user@gmail.com',
        role: 2,
        phone: '000908787'
    }
]

function UserList() {

    const [data, setData] = useState(users);
    const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        {
            field: 'role',
            headerName: 'Role',
            width: 130,
            renderCell: (params) => {
                return params.row.role === 1 ? 'Admin' : 'User'
            }
        },
        {
            field: 'Action',
            headerName: 'Action',
            width: 130,
            renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking
                    let idUser = params.row.id;
                    deleteUser(idUser)
                }
                return <Button onClick={(e)  => onClick(e)} variant="outlined" color="error">Delete</Button>
            }},
    ];

    const deleteUser = (id) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure delete user?')) {
            // tim index theo id;
            let newData = data.filter(user => {
                return user.id !== id;
            })
            setData([...newData])
        }
    }

    return (
        <>
            <Button variant="contained">Create</Button>
            <div style={{ height: 100 * data.length, width: '50%' }}>
            { data && (
                <DataGrid
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            )}
            </div>

        </>
    )
}

export default UserList
