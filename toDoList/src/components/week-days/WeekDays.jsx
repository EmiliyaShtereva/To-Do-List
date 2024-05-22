import styles from "./WeekDays.module.css";

export default function WeekDays() {
    return (
        <div className={styles["week-days"]}>
            <div className={styles["days"]}>Monday</div>
            <div className={styles["days"]}>Tuesday</div>
            <div className={styles["days"]}>Wednesday</div>
            <div className={styles["days"]}>Thursday</div>
            <div className={styles["days"]}>Friday</div>
            <div className={styles["days"]}>Saturday</div>
            <div className={styles["days"]}>Sunday</div>
        </div>
    )
}