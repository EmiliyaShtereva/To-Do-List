import styles from "./DayList.module.css";

export default function DayList({
    onPlus,
    onDetails,
    tasks
}) {
    return (
        <div className={styles["day-list"]}>
            <button onClick={onPlus}>+</button>
            {tasks.map(t => (
                <div className={styles["task"]} onClick={onDetails}>
                <p className={styles["time"]}>{t.startTime} - {t.endTime}</p>
                <p className={styles["description"]}>{t.task}</p>
            </div>
            ))}
        </div>
    )
}