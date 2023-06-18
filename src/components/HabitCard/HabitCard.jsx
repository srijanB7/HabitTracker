import { Button, Modal, Box, Typography } from "@mui/material";
import "./HabitCard.css";
import React, { useContext, useState } from "react";
import { HabitContext } from "../../context/HabitContext";

export const HabitCard = ({ id, name, timeOfDay, time, goal, repeat }) => {

    const { editHabit } = useContext(HabitContext); 
    const [showHabit, setShowHabit] = useState(false);
    const [edit, setEdit] = useState(false);
    const [updatedName, setUpdatedName] = useState(name);
    const [updatedTimeOfDay, setUpdatedTimeOfDay] = useState(timeOfDay);
    const [updatedTime, setUpdatedTime] = useState(time);
    const [updatedGoal, setUpdatedGoal] = useState(goal);
    const [updatedRepeat, setUpdatedRepeat] = useState(repeat);
    const { deleteHabit, archiveHabit } = useContext(HabitContext);
    const handleClose = () => setShowHabit(false);

    const handleDelete = () => {
        deleteHabit(id);
    };

    const handleArchive = () => {
        archiveHabit(id);
    };
    const handleEdit = () => {
        setEdit(true);
    };

    function handleTimeOfDay(event) {
        setUpdatedTimeOfDay(event.target.value);
    }
    function handleTime(event) {
        setUpdatedTime(event.target.value);
    }
    function handleGoal(event) {
        setUpdatedGoal(event.target.value);
    }
    function handleRepeat(event) {
        setUpdatedRepeat(event.target.value);
    }
    function handleName(event) {
        setUpdatedName(event.target.value);
    }

    const handleSave = () => {
        if(updatedName === "") {
            alert("enter name");
            return;
        }
        setShowHabit(false);
        const habitDetails = {
            id,
            name: updatedName,
            timeOfDay: updatedTimeOfDay,
            time: updatedTime,
            goal: updatedGoal,
            repeat: updatedRepeat,
        };
        editHabit(habitDetails, id);
        setEdit(false)
    };

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
        <div className="container">
            <h2>{name}</h2>
            <div className="btn-container">
                <Button variant="contained" onClick={() => setShowHabit(true)}>Show More</Button>
                <Button
                    variant="contained"
                    color="error"
                    onClick={handleDelete}
                >
                    Delete
                </Button>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleArchive}
                >
                    Archive
                </Button>
            </div>
            <Modal
                open={showHabit}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                        {edit ? (
                            <div className="fields">
                                <div className="name">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        onChange={handleName}
                                        value={updatedName}
                                    />
                                </div>
                                <div className="repeatations">
                                    <div className="repeat-child">
                                        <label>Repeat</label>
                                        <select
                                            onChange={handleRepeat}
                                            value={updatedRepeat}
                                        >
                                            <option>Daily</option>
                                            <option>Weekly</option>
                                            <option>Monthly</option>
                                        </select>
                                    </div>
                                    <div className="repeat-child">
                                        <label>Goal</label>
                                        <select
                                            onChange={handleGoal}
                                            value={updatedGoal}
                                        >
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
                                            value={updatedTimeOfDay}
                                        >
                                            <option>Any Time</option>
                                            <option>Morning</option>
                                            <option>Evening</option>
                                            <option>Night</option>
                                        </select>
                                    </div>
                                    <div className="time-child">
                                        <label>Start Date</label>
                                        <select
                                            onChange={handleTime}
                                            value={updatedTime}
                                        >
                                            <option>Today</option>
                                            <option>Tomorrow</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="buttons">
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={handleSave}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h2>Name: {name}</h2>
                                <p>Time of Day: {timeOfDay}</p>
                                <p>time: {time}</p>
                                <p>goal: {goal}</p>
                                <p>repeat: {repeat}</p>
                            </div>
                        )}
                    </div>
                    {
                        !edit &&
                        <Button variant="contained" onClick={handleEdit}>Edit</Button>
                    }
                </Box>
            </Modal>
        </div>
    );
};
