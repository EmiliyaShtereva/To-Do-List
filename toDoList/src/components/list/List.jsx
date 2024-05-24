import DayList from "../day-list/DayList";
import styles from "./List.module.css";

export default function List() {
    return (
        <div className={styles["list"]}>
            <DayList />
            <DayList />
            <DayList />
            <DayList />
            <DayList />
            <DayList />
            <DayList />
        </div>
    )
}
