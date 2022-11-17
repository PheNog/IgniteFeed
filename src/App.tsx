import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

// author : { avatarUrl: "", name: "", role: "" }
// publishedAt : Date 
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/PheNog.png",
      name: 'Phelipe Nogueira de Lima',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal!' },
      { type: 'paragraph', content: 'Acabando de subir mais um projeto no meu portifolio, é um projeto que fiz na NLW copa!' },
      { type: 'link', content: 'phenog/nlwcopa' },
    ],
    publishedAt: new Date('2022-05-16 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: 'Diego Fernandes',
      role: 'CTO RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Melhor feed de todos!' },
      { type: 'link', content: '#neverStopLearning' },
    ],
    publishedAt: new Date('2022-05-18 10:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: 'Educador @RocketSeat'
    },
    content: [
      { type: 'paragraph', content: 'Isso ai! Foguete não tem ré!' },
      { type: 'link', content: '#neverStopLearning' },
    ],
    publishedAt: new Date('2022-05-18 13:00:00')
  },
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
