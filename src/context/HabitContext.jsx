import { createContext, useState } from "react";

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
    const [habits, setHabits] = useState([{
        id: 1,
        name: "Learn React",
        timeOfDay: "Any Time",
        time: "Today",
        goal: "1 times Daily",
        repeat: "Daily",
    },]);
    const [archiveHabits, setArchiveHabits] = useState([]);

    const addHabit = (habitDetails) => {
        setHabits([...habits, habitDetails]);
    };

    const deleteHabit = (id) => {
        setHabits((prev) => prev.filter((habit) => habit.id !== id));
    };

    const deleteArchiveHabit = (id) => {
        setArchiveHabits((prev) => prev.filter((habit) => habit.id !== id));
    };

    const archiveHabit = (id) => {
        const habit = habits.find((habit) => habit.id === id);
        setArchiveHabits([...archiveHabits, habit]);
        setHabits((prev) => prev.filter((habit) => habit.id !== id));
    };

    const editHabit = (habitDetails, id) => {
        const updatedHabit = habits.map((habit) => {
            if (habit.id === id) {
                return habitDetails;
            }
            return habit;
        });
        setHabits(updatedHabit);
    };

    return (
        <HabitContext.Provider
            value={{
                habits,
                addHabit,
                deleteHabit,
                archiveHabits,
                archiveHabit,
                editHabit,
                deleteArchiveHabit
            }}
        >
            {children}
        </HabitContext.Provider>
    );
};
