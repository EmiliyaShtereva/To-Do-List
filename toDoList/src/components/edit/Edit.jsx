import styles from "./Edit.module.css";

export default function Edit({ onClose, onDetails }) {
    return (
        <div className={styles['modal']}>
            <div className={styles['backdrop']} onClick={onClose}></div>
            <form className={styles['form']}
            // onSubmit={onSubmit}
            >
                <button className={styles['close-btn']} type="button" onClick={onClose}>&times;</button>
                <div className={styles['container']}>
                    <p className={styles['label']}>Time:</p>
                    <input
                        type="text"
                        id="beginningTime"
                        name="beginning"
                        placeholder="00:00"
                    // value={values.email}
                    // onChange={onChange}
                    // onBlur={emailValidator}
                    // className={errors.email && styles['input-error']}
                    /> - <input
                        // ref={emailInputRef}
                        type="text"
                        id="endTime"
                        name="end"
                        placeholder="00:00"
                    // value={values.email}
                    // onChange={onChange}
                    // onBlur={emailValidator}
                    // className={errors.email && styles['input-error']}
                    />
                    {/* {errors.email && <p className={styles['error-message']}>{errors.email}</p>} */}
                </div>
                <div className={styles['container']}>
                    <p className={styles['label']}>Task:</p>
                    <textarea
                        rows="5"
                        cols="10"
                        name="text"
                        placeholder="To Do"
                    // value={values.password}
                    // onChange={onChange}
                    // onBlur={passwordValidator}
                    // className={errors.password && styles['input-error']}
                    >
                    </ textarea>
                    {/* {errors.password && <p className={styles['error-message']}>{errors.password}</p>} */}
                </div>
                <div className={styles['buttons']}>
                    <button
                        className={styles['submit-btn']}
                        type="button"
                        onClick={onDetails}
                    >
                        Details
                    </button>
                    <button
                        className={styles['submit-btn']}
                        type="submit"
                    // disabled={Object.values(errors).some(x => x)}
                    >
                        Edit
                    </button>
                </div>
                {/* {errorMessage && <p className={styles['error-message']}>{errorMessage}</p>} */}
            </form>
        </div>
    )
}