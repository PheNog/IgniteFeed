import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export const Comment = () => {
    return (
        <div className={styles.comment} >
            <Avatar hasBorder={false} url="https://github.com/diego3g.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title='14 de novembro de 2022 as 08:50h' dateTime='2022-11-14 08:50:25' >Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentario'>
                            <Trash
                                size={24}
                            />
                        </button>
                    </header>
                    <p>Muito bom Phe, parabéns!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp
                            size={20}

                        />
                        Aplaudir 
                        <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}