import styles from "./Details.module.css";

export default function Details({ onClose, onEdit }) {
    return (
        <div className={styles['modal']}>
            <div className={styles['backdrop']} onClick={onClose}></div>
            <div className={styles['details']}>
                <button className={styles['close-btn']} onClick={onClose}>&times;</button>
                <div className={styles['container']}>
                    <p className={styles['label']}>Time:</p>
                    <p className={styles['time']}>00:00 - 00:00</p>
                </div>
                <div className={styles['container']}>
                    <p className={styles['label']}>Task:</p>
                    <p className={styles['text']}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit sit illum dolor laborum ea, reprehenderit corrupti possimus in qui aspernatur asperiores, ipsa consequuntur itaque optio. Perspiciatis aliquid iusto quae.</p>
                </div>
                <button
                    className={styles['edit-btn']}
                    onClick={onEdit}
                >
                    Edit
                </button>
            </div>
        </div>
    )
}