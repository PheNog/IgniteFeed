import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'
import { CommentProps } from '../@types/CommentProps'



export const Comment = ({ content, onDeleteComment }: CommentProps) => {
    const [likeCount, setLikeCount] = useState(0)

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    const handleLikeCount = () => {
        setLikeCount((likes) => { // sempre que for fazer uma atualização 
            return likes + 1      // de valor em um estado, é legal passar nesse padrão onde dentro do parenteses puxa o valor mais atualizado do estado
        })
    }

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
                        <button onClick={handleDeleteComment} title='Deletar comentario'>
                            <Trash
                                size={24}
                            />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp
                            size={20}

                        />
                        Aplaudir 
                        <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}