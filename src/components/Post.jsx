import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/Mat-Nishi.png"
                         alt=""
                         className={styles.profileImg}/>
                    <div className={styles.authorInfo}>
                        <strong>Mateus Nishimura</strong>
                        <span>Developer</span>
                    </div>
                </div>
            </header>
        </article>
    )
}