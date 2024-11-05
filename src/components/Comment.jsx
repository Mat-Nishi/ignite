import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar src="https://github.com/Mat-Nishi.png" hasBorder={false}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.infoWrapper}>
                            <strong>John Doe</strong>
                            <time datetime="2024-11-05 10:42:33">Publicado há 1 hora</time>
                        </div>
                        <button title='Deletar comentário' type='button'> <Trash size={24}/> </button>
                    </header>
                    <p>Muito bom! Parabéns! 👏👏</p>
                </div>
                <footer>
                    <button type='button'> <ThumbsUp /> Aplaudir <span>20</span> </button>
                </footer>
            </div>

        </div>
    )
}