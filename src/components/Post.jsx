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
                <time title="4 de Novembro às 22:53" datetime="2024-11-04 22:53:43">Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera 👋</p>´
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus iusto quia sed sunt repudiandae esse! Repudiandae vitae repellat, blanditiis unde aspernatur doloribus accusantium earum? Dignissimos atque quibusdam rem alias quaerat?</p>
                <p><a href="#placeholder">#novoprojeto </a><a href="#placeholder">#nlw </a><a href="#placeholder">#rocketseat</a></p>
            </div>

        </article>
    )
}