import AddForm from "../add-form/AddForm";
import DayList from "../day-list/DayList";
import Edit from "../edit/Edit";
import styles from "./List.module.css";
import { useState } from "react";

export default function List() {
    const [showForm, setShowForm] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const dayButtonClickHandler = () => {
        setShowForm(true);
    };
    const taskClickHandler = () => {
        setShowEdit(true);
    };
    const closeFormClickHandler = () => {
        setShowForm(false);
    }
    const closeEditClickHandler = () => {
        setShowEdit(false);
    }
    return (
        <div className={styles["list"]}>
            <DayList
                onPlus={dayButtonClickHandler}
                onEdit={taskClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onEdit={taskClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onEdit={taskClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onEdit={taskClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onEdit={taskClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onEdit={taskClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onEdit={taskClickHandler}
            />

            {showForm && <AddForm onClose={closeFormClickHandler} />}
            {showEdit && <Edit onClose={closeEditClickHandler} />}
        </div>
    )
}
