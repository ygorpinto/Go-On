import styles from '../styles/components/ToogleDarkMode.module.css'

export const ToogleDarkMode = () => {
    return (
        <>
        <label className={styles.switch}>
            <input type="checkbox"/>
            <span className={styles.slider}>
            </span>
        </label>
        </>   
    )
}