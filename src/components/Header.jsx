import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header(){

    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo of the ignite app, two green triangles overlapping, pointing to the upper right with a lighter green on the area they intersect" />
            <strong>Ignite feed</strong>
        </header>
    )
}