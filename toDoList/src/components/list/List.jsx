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
    const detailsClickHandler = () => {
        setShowDetails(true);
        setShowEdit(false);
    };
    const editClickHandler = () => {
        setShowDetails(false);
        setShowEdit(true);
    };


    return (
        <div className={styles["list"]}>
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
            />

            {showForm && <AddForm onClose={() => setShowForm(false)} />}
            {showDetails && <Details onClose={() => setShowDetails(false)} onEdit={editClickHandler} />}
            {showEdit && <Edit onClose={() => setShowEdit(false)} onDetails={detailsClickHandler} />}
        </div>
    )
}
