import {Button} from "react-bootstrap";
import {useState} from "react";

function Item(props) {

    return (
        <>
            <tr>
                <td>{props.index + 1}</td>
                <td>{props.item.title}</td>
                <td>
                    { !props.item.complete ? (
                        <Button onClick={() => props.completeTask(props.item.id)}>Complete</Button>
                    ) : (
                        <Button variant="danger">Delete</Button>
                    )}
                </td>
            </tr>
        </>
    )
}

export  default Item;
