import React, { useContext } from "react";
import { HabitContext } from "../context/HabitContext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Archive = () => {
    const { archiveHabits, deleteArchiveHabit } = useContext(HabitContext);
    const handleDelete = (id) => {
        deleteArchiveHabit(id)
    }

    return (
        <div className="archive-container">
            <nav className="nav">
                <h1>Build Habits and Take Control of your life</h1>

                <Link to="/" style={{ marginTop: "12px" }}>
                    Go to All Habits
                </Link>
            </nav>
            <div className="archive-habits-container">
                {archiveHabits.length > 0 ? (
                    archiveHabits.map((habit) => (
                        <div className="habit" key={habit.id}>
                            <h2>Name: {habit.name}</h2>
                            <p>Time of Day: {habit.timeOfDay}</p>
                            <p>time: {habit.time}</p>
                            <p>goal: {habit.goal}</p>
                            <p>repeat: {habit.repeat}</p>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => handleDelete(habit.id)}
                            >
                                Delete
                            </Button>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: "center" }}>
                        No Archive Habits Present
                    </p>
                )}
            </div>
        </div>
    );
};
