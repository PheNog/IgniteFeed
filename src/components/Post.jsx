import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'


export const Post = (props) => {

    return (
        <article className={styles.post} >
            <header>
                <div className={styles.author}>
                    <Avatar url="https://github.com/PheNog.png" />
                    <div className={styles.authorInfo} >
                        <strong>Phelipe Nogueira de Lima</strong>
                        <span>Software Engineer</span>
                    </div>
                </div>

                <time title='14 de novembro de 2022 as 08:50h' dateTime='2022-11-14 08:50:25' >Publicado há 1h</time>
            </header>
            <div className={styles.content} >
                <p> Fala pessoal!</p>
                <p> Acabando de subir mais um projeto no meu portifolio, é um projeto que fiz na NLW copa!</p>
                <p><a>phenog.github/nlwcopa</a></p>
                <p> 
                    <a>#novoprojeto</a>{' '}
                    <a>#nlwcopa </a>{' '}
                    <a>#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong> Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit"> Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}