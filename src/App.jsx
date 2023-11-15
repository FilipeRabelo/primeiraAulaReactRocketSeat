import { Post    } from "./components/post/Post.jsx";
import { Header  } from "./components/header/Header.jsx";
import { Sidebar } from "./components/sidebar/Sidebar.jsx";

// CLASSE WRAPPER - PARA PUXAR A DIV PRINCIPAL //
import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>

        <Sidebar/>

        <main>

          <Post/>
          <Post/>

          {/*  <Post*/}
          {/*    author='Filipe & Daniela'*/}
          {/*    content='orem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.*/}
          {/*Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido*/}
          {/*pegou uma prova de tipos e a misturou para fazer um livro de espécimes de tipos.'*/}
          {/*  />*/}

          {/*  <Post*/}
          {/*    author='Rafa & Giulia'*/}
          {/*    content='orem Ipsum é simplesmente um texto fictício da indústria de impressão e composição tipográfica.*/}
          {/*Lorem Ipsum tem sido o texto fictício padrão da indústria desde 1500, quando um impressor desconhecido pegou*/}
          {/*uma prova de tipos e a misturou para fazer um livro de espécimes de tipos.'*/}
          {/*  />*/}

        </main>

      </div>
    </div>
  )
}