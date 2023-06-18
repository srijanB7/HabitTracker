import React, { useContext, useState } from "react";
import { HabitContext } from "../context/HabitContext";
import { Box, Button, Modal, Typography, TextField } from "@mui/material";
import { HabitCard } from "../components/HabitCard/HabitCard";
import { Link } from "react-router-dom";

export const Home = () => {
    const { habits, addHabit } = useContext(HabitContext);
    const [showModal, setShowModal] = useState(false);

    
    const [name, setName] = useState("");
    const [timeOfDay, setTimeOfDay] = useState("Any Time");
    const [time, setTime] = useState("Today");
    const [goal, setGoal] = useState("1 times Daily");
    const [repeat, setRepeat] = useState("Daily");

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => setShowModal(false);
    const handleDiscard = () => setShowModal(false);
    const handleSave = () => {
        if(name === "") {
            alert("enter name");
            return;
        }
        setShowModal(false);
        const habitDetails = {
            id: crypto.randomUUID(),
            name,
            timeOfDay,
            time,
            goal,
            repeat,
        };
        addHabit(habitDetails);
        setName("");
    };

    function handleTimeOfDay(event) {
        setTimeOfDay(event.target.value);
    }
    function handleTime(event) {
        setTime(event.target.value);
    }
    function handleGoal(event) {
        setGoal(event.target.value);
    }
    function handleRepeat(event) {
        setRepeat(event.target.value);
    }
    function handleName(event) {
        setName(event.target.value);
    }

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
    };
    return (
        <div className="home-container">
            <nav className="nav">
                <h1>Build Habits and Take Control of your life</h1>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleClick}
                >
                    Add Habbit
                </Button>
                <Link to="/archive" style={{ marginTop: "12px" }}>
                    Go to Archives
                </Link>
            </nav>
            <div>
                <Modal open={showModal} onClose={handleClose}>
                    <Box sx={style}>
                        <h1>New Habit</h1>
                        <div className="fields">
                            <div className="name">
                                <label>Name</label>
                                <input
                                    type="text"
                                    onChange={handleName}
                                    value={name}
                                />
                            </div>
                            <div className="repeatations">
                                <div className="repeat-child">
                                    <label>Repeat</label>
                                    <select
                                        onChange={handleRepeat}
                                        value={repeat}
                                    >
                                        <option>Daily</option>
                                        <option>Weekly</option>
                                        <option>Monthly</option>
                                    </select>
                                </div>
                                <div className="repeat-child">
                                    <label>Goal</label>
                                    <select onChange={handleGoal} value={goal}>
                                        <option>1 times Daily</option>
                                        <option>2 times Daily</option>
                                        <option>3 times Daily</option>
                                    </select>
                                </div>
                            </div>
                            <div className="time">
                                <div className="time-child">
                                    <label>Time of day</label>
                                    <select
                                        onChange={handleTimeOfDay}
                                        value={timeOfDay}
                                    >
                                        <option>Any Time</option>
                                        <option>Morning</option>
                                        <option>Evening</option>
                                        <option>Night</option>
                                    </select>
                                </div>
                                <div className="time-child">
                                    <label>Start Date</label>
                                    <select onChange={handleTime} value={time}>
                                        <option>Today</option>
                                        <option>Tomorrow</option>
                                    </select>
                                </div>
                            </div>
                            <div className="buttons">
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={handleDiscard}
                                >
                                    Discard
                                </Button>
                                <Button
                                    variant="contained"
                                    color="success"
                                    onClick={handleSave}
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>

            <div className="habits-container">
                {habits.length > 0 ? (
                    habits.map((habit) => (
                        <HabitCard key={habit.id} {...habit} />
                    ))
                ) : (
                    <p>No Habits Found add a Habit</p>
                )}
            </div>
        </div>
    );
};
