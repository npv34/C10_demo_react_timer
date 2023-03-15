import './Timer.css';
import {useEffect, useState} from "react";
import {Box, Button, TextField} from "@mui/material";

function Timer() {
    // khai bao state
    const [hours, setHours] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [status, setStatus] = useState(false)

    function endTime() {
        return second === 0 && minute === 0 && hours === 0;
    }

    const start = () => {
        setStatus(true);
        let timer = setInterval(() => {
            if (endTime()) {
                setStatus(false)
            } else {
                if (second === 0) {
                    setSecond(59);
                    if (minute === 0) {
                        setMinute(59);
                        if (hours > 0) {
                            setHours(hours - 1);
                        }
                    } else {
                        setMinute(minute - 1);
                    }
                } else {
                    setSecond(second - 1)
                }
            }

            clearInterval(timer)
        }, 1000);
    }

    const stop = () => {
        setStatus(false)
    }

    useEffect(() => {
        if (status) {
            start();
        }
    }, [second, minute, status, hours]);

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-number"
                    label="Hrs"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setHours(+e.target.value)}
                />
                <TextField
                    id="outlined-number"
                    label="Min"
                    type="number"

                    InputLabelProps={{
                        shrink: true,
                    }}

                    onChange={(e) => setMinute(+e.target.value)}
                />
                <TextField
                    id="outlined-number"
                    label="Sec"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => setSecond(Number(e.target.value))}
                />
            </Box>
            <div>
                <Button onClick={start} variant="contained">Contained</Button>
                <button>Pause</button>
                <button onClick={stop}>Stop</button>
                <button>Reset</button>
            </div>
            <div>
                Timer: {hours} : {minute} : {second}
            </div>
            {status ? "" : (<audio autoPlay>
                <source src="https://www.w3schools.com/tags/horse.mp3"/>
            </audio>)}
        </>
    )
}

export default Timer;
