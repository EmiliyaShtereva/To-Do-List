import AddForm from "../add-form/AddForm";
import DayList from "../day-list/DayList";
import Details from "../details/Details";
import Edit from "../edit/Edit";
import styles from "./List.module.css";
import { useState } from "react";

export default function List() {
    const [showForm, setShowForm] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const dayButtonClickHandler = () => {
        setShowForm(true);
    };
    const detailsClickHandler = () => {
        setShowDetails(true);
        setShowEdit(false);
    };
    const editClickHandler = () => {
        setShowDetails(false);
        setShowEdit(true);
    };
    const closeFormClickHandler = () => {
        setShowForm(false);
    }
    const closeEditClickHandler = () => {
        setShowEdit(false);
    }
    const closeDettailsClickHandler = () => {
        setShowDetails(false);
    }
    return (
        <div className={styles["list"]}>
            <DayList
                onPlus={dayButtonClickHandler}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={dayButtonClickHandler}
                onDetails={detailsClickHandler}
            />

            {showForm && <AddForm onClose={closeFormClickHandler} />}
            {showDetails && <Details onClose={closeDettailsClickHandler} onEdit={editClickHandler} />}
            {showEdit && <Edit onClose={closeEditClickHandler} onDetails={detailsClickHandler} />}
        </div>
    )
}
