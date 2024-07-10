import AddForm from "../add-form/AddForm";
import DayList from "../day-list/DayList";
import styles from "./List.module.css";
import { useState } from "react";

export default function List() {
    const [showForm, setShowForm] = useState(false);
    const dayButtonClickHandler = () => {
        setShowForm(true);
    };
    const closeClickHandler = () => {
        setShowForm(false);
    }
    return (
        <div className={styles["list"]}>
            <DayList
                onPlus={dayButtonClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
            />

            {showForm && <AddForm onClose={closeClickHandler} />}
        </div>
    )
}
