import styles from './Post.module.css'

import { Comment } from '../comment/Comment.jsx'
import { Avatar } from "../avatar/Avatar";

export function Post(){
  return (
    <article className={styles.post}>

      { /* INICIO HEADER AUTHOR - avatar, nome, cargo e data de publicação */}
      <header>

        { /* DIV AUTHOR */}
        <div className={styles.author}>
          <Avatar hasBorder src={'https://github.com/FilipeRabelo.png'} alt={"avatar"}/>
          <div className={styles.authorInfo}>  { /* NOME E CARGO DO AUTHOR */}
            <strong>Filipe Rabelo</strong>
            <span>Web Developer</span>
          </div>
        </div>
        { /* FIM DIV AUTHOR */}

        <time title={'13 novembro às 12:00'} dateTime={'2023-11-13 12:00:00'}>Publicado a 1 Hora</time>

      </header>
      { /* FIM HEADER AUTHOR */}

      {/* CONTEUDO DO POST */}
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu GitHub.
          É um projeto que fiz durante as aulas da RocketSeat. <br/> O nome do projeto é Fundamentos do React 🚀
        </p>
        <p>👉 {' '}<a href={'https://github.com/FilipeRabelo/primeiraAulaReactRocketSeat'} target={'_blank'}>filiperabelo/github/</a> </p>
        <p>💻 {' '}
          <a href={'https://www.rocketseat.com.br/'} target={'_blank'}>#novoprojeto</a>{' '}
          <a href={'https://www.rocketseat.com.br/'} target={'_blank'}>#nlw</a>{' '}
          <a href={'https://www.rocketseat.com.br/'} target={'_blank'}>#rocketseat</a>
        </p>
      </div>
      {/* FIM CONTEUDO DO POST */}

      {/* INICIO COMENTARIOS */}
      <form className={styles.commentForm}>
        <strong>Deixe seu Comentario</strong>
        <textarea
          placeholder={"Deixe Seu Comentario"}
        />
        <footer>
          <button type={"submit"}>Publicar</button>
        </footer>
      </form>
      {/* FIM COMENTARIOS */}

      {/*trazendo o componente dos comentarios */}
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>

    </article>
  )
}