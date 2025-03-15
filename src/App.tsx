import { Header } from './components/header';  
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';


  const posts: PostType[] = [
    {
      id: 1,
      author:{
        avatarUrl: 'https://github.com/jrcarlos99.png',
        name: 'João Carlos',
        role: 'CTO @Rocketseat'
      },
      content:[
            { type: 'paragraph', content:'Fala galeraa 👋', },  
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2025-03-07  12:00'),
    },
    {
      id: 2,
      author:{
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @Rocketseat'
      },
      content:[
            { type: 'paragraph', content:'Fala galeraa 👋', },   
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2025-03-15  12:00'),
    },
  ];

export function App() {
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
                post={post}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}


