import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src='https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'></img>
            
            <div className={styles.profile}>
                <Avatar url='https://github.com/PheNog.png' />
                <strong>Phelipe Nogueira de Lima</strong>
                <span>Software Engineer</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine 
                    size={20}
                    />
                    Editar seu perfil
                </a>
            </footer>
        
        </aside>
    )
}