import {  Post   } from "./components/post/Post.jsx";
import { Header  } from "./components/header/Header.jsx";
import { Sidebar } from "./components/sidebar/Sidebar.jsx";

import styles from './App.module.css' // CLASSE WRAPPER - PARA PUXAR A DIV PRINCIPAL //
import './global.css'

// AUTHOR ( avatar_url: ' ', name: ' ', role: ' ' ) - STRINGs - informações que variam de um post ao outro
// PUBLISHEDAT: date - data de publicação
// CONTENT - conteudo do post = string


                      // ARRAY COM OBJETOS, ARRAY COM VARIOS POSTS //
const posts =[

  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/FilipeRabelo.png',
      name: 'Filipe Rabelo',
      role: "Web Developer"        // CARGO //
    },
    content: [  /* CONTEUDO DO POST */
      {type: 'paragraph', content: 'Fala galeraa 👋'},

      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu GitHub.'},

      {type: 'link', content: '👉 github.com/FilipeRabelo/primeiraAulaReactRocketSeat'}
    ],
    publishedAt: new Date('2023/11/17 12:49:04')   // DATA DE PUBLICAÇÂO //
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Giulia e Rafael',
      role: "Kids Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Haaaaa eu conseguir finalizar o App uhuuu 👋'},

      {type: 'paragraph', content: 'Ate que enfim eu acabei de finalizar o aplicativo, Feliz demais uhuuuu.'},

      {type: 'link', content: '👉 github.com/FilipeRabelo/primeiraAulaReactRocketSeat'}
    ],
    publishedAt: new Date('2023/11/06 18:05:00')
  },

];



export function App() {
  return (
    <div>

      <Header/>

      <div className={styles.wrapper}>

        <Sidebar/>

        {/* CONTEUDO PRINCIPAL */}
        <main>
          {posts.map(post => {   {/* ITERAÇÂO - PRECORRER O ARRAY */}
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
        {/* FIM CONTEUDO PRINCIPAL */}

      </div>

    </div>
  )
}