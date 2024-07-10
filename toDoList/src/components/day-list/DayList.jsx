import styles from "./DayList.module.css";

export default function DayList({
    onPlus
}) {
    return (
        <div className={styles["day-list"]}>
            <button onClick={onPlus}>+</button>
            <div className={styles["task"]}>
                <p className={styles["time"]}>1:00 - 2:00</p>
                <p className={styles["description"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit sit illum dolor laborum ea, reprehenderit corrupti possimus in qui aspernatur asperiores, ipsa consequuntur itaque optio. Perspiciatis aliquid iusto quae.</p>
            </div>
            <div className={styles["task"]}>
                <p className={styles["time"]}>1:00 - 2:00</p>
                <p className={styles["description"]}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit sit illum dolor laborum ea, reprehenderit corrupti possimus in qui aspernatur asperiores, ipsa consequuntur itaque optio. Perspiciatis aliquid iusto quae.</p>
            </div>
        </div>
    )
}