import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { PostProps } from '../@types/PostProps'

export const Post = ({ author, content, publishedAt }: PostProps) => {

    const [comments, setComments] = useState([
        ''
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleCreateNewComment = (event:FormEvent) => {
        event.preventDefault()
        // if (event.target.comment.value === '') return alert('você não pode enviar um comentario vazio')

        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    const handleNewCommentChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    const deleteComment = (commentToDelete: string) => {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentsWithoutDeletedOne)
    }

    const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatório.')
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post} >
            <header>
                <div className={styles.author}>
                    <Avatar url={author.avatarUrl} />
                    <div className={styles.authorInfo} >
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                
                <time
                    title={publishedDateFormatted}
                    dateTime={publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content} >
                {
                    content.map((item, index) => {
                        if (item.type === 'paragraph') return (
                            <p key={index}>{item.content}</p>
                        )
                        if (item.type === 'link') return (
                            <a key={index}>{item.content}</a>
                        )
                    })
                }
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong> Deixe seu feedback</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button
                        disabled={isNewCommentEmpty}
                        type="submit"
                    >
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {
                    comments.map((comment, index) => {
                        if(comment === '') return
                        return (
                            <Comment
                                onDeleteComment={deleteComment}
                                key={index}
                                content={comment}
                            />
                        )
                    })
                }
            </div>
        </article>
    )
}