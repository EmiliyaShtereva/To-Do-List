import AddForm from "../add-form/AddForm";
import DayList from "../day-list/DayList";
import Details from "../details/Details";
import Edit from "../edit/Edit";
import styles from "./List.module.css";
import { useEffect, useState } from "react";
import * as tasksService from '../../services/tasksService';

export default function List() {
    const [showForm, setShowForm] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [mondayTasks, setMondayTasks] = useState([]);
    const [tuesdayTasks, setTuesdayTasks] = useState([]);
    const [wednesdayTasks, setWednesdayTasks] = useState([]);
    const [thursdayTasks, setThursdayTasks] = useState([]);
    const [fridayTasks, setFridayTasks] = useState([]);
    const [saturdayTasks, setSaturdayTasks] = useState([]);
    const [sundayTasks, setSundayTasks] = useState([]);

    useEffect(() => {
        tasksService.getMonday()
            .then(result => {
                setMondayTasks(result);
            })
            .catch(err => console.log(err));

        tasksService.getTuesday()
            .then(result => {
                setTuesdayTasks(result);
            })
            .catch(err => console.log(err));

        tasksService.getWednesday()
            .then(result => {
                setWednesdayTasks(result);
            })
            .catch(err => console.log(err));

        tasksService.getThursday()
            .then(result => {
                setThursdayTasks(result);
            })
            .catch(err => console.log(err));

        tasksService.getFriday()
            .then(result => {
                setFridayTasks(result);
            })
            .catch(err => console.log(err));

        tasksService.getSaturday()
            .then(result => {
                setSaturdayTasks(result);
            })
            .catch(err => console.log(err));

        tasksService.getSunday()
            .then(result => {
                setSundayTasks(result);
            })
            .catch(err => console.log(err));
    }, []);

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
                tasks={mondayTasks}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
                tasks={tuesdayTasks}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
                tasks={wednesdayTasks}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
                tasks={thursdayTasks}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
                tasks={fridayTasks}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
                tasks={saturdayTasks}
            />
            <DayList
                onPlus={() => setShowForm(true)}
                onDetails={detailsClickHandler}
                tasks={sundayTasks}
            />

            {showForm && <AddForm onClose={() => setShowForm(false)} />}
            {showDetails && <Details onClose={() => setShowDetails(false)} onEdit={editClickHandler} />}
            {showEdit && <Edit onClose={() => setShowEdit(false)} onDetails={detailsClickHandler} />}
        </div>
    )
}
