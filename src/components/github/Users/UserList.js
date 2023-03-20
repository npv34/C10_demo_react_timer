import {useEffect, useState} from "react";
import Card from "react-bootstrap/Card";
import {Button, ButtonGroup, Dropdown, Image, Table} from "react-bootstrap";
import axios from "axios";
import {Box, CircularProgress} from "@mui/material";

const countUserPage = [10, 20, 50, 100];

function UserList() {
    const [data, setData] = useState([])
    const [countUser, setCountUser] = useState(100)
    const changeCounterUserPage = (number) => {
        setCountUser(number);
    }

    useEffect(() => {
        axios.get('https://api.github.com/users?per_page=100').then(res => {
            setData(res.data)
        })
    }, [countUser])





    return (
        <>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    { data.length == 0 ? (
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>
                        ) : (
                        <>
                            <Dropdown as={ButtonGroup}>
                                <Button variant="outline-secondary">{countUser}</Button>

                                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    { countUserPage.map((item,index) => (
                                            <Dropdown.Item key={index} onClick={() => changeCounterUserPage(item)}>{item}</Dropdown.Item>
                                        )
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Table striped>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Photo</th>
                                    <th>Username</th>
                                    <th>Url</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.map((user,index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td><Image width="50" thumbnail roundedCircle src={user.avatar_url}/></td>
                                        <td>{user.login}</td>
                                        <td><a href={user.html_url}>{user.html_url}</a></td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </>
                    )}
                </Card.Body>
            </Card>
        </>
    )
}

export default UserList;
