import styles from "./AddForm.module.css";

export default function AddForm({onClose}) {
    return (
        <div className={styles['modal']}>
            <form className={styles['form']}
            >
                <button className={styles['close-btn']} type="button" onClick={onClose}>&times;</button>
                <div className={styles['container']}>
                    <p className={styles['label']}>Time</p>
                    <input
                        type="text"
                        id="beginningTime"
                        name="beginning"
                        placeholder="00:00"
                    /> - <input
                        // ref={emailInputRef}
                        type="text"
                        id="endTime"
                        name="end"
                        placeholder="00:00"
                    />
                </div>
                <div className={styles['container']}>
                    <p className={styles['label']}>Task</p>
                    <textarea
                        rows="5"
                        cols="10"
                        name="text"
                        placeholder="To Do"
                    >
                    </ textarea>
                </div>
                <button
                    className={styles['submit-btn']}
                    type="submit"
                >
                    Add
                </button>
            </form>
        </div>
    )
}