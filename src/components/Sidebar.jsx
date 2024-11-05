import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react'

export function Sidebar(){
    return(
    <>
    <aside className={styles.sidebar}>
        <img 
            className={styles.cover}
            src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt='Profile cover'/>

        <div className={styles.profile}>

            <img className={styles.profileImg} 
                 src="https://github.com/Mat-Nishi.png" 
                 alt="Profile img" />

            <strong>Mateus Nishimura</strong>
            <span>Developer</span>

            <footer>
                <a href="#placeholder"> 
                    <PencilLine size={20} />
                    Editar perfil
                </a>
            </footer>

        </div>
    </aside>
    </>)
}