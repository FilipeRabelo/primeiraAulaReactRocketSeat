import styles from './Post.module.css'

export function Post(){
  return (
    <article className={styles.post}>

      <header>  { /* HEADER AUTHOR - avatar, nome, cargo e data de publicação */}

        { /* DIV AUTHOR */}
        <div className={styles.author}>
          <img className={styles.avatar} src={'https://github.com/FilipeRabelo.png'} alt={"avatar"} />
          <div className={styles.authorInfo}>  { /* NOME E CARGO DO AUTHOR */}
            <strong>Filipe Rabelo</strong>
            <span>Web Developer</span>
          </div>
        </div>
        { /* FIM DIV AUTHOR */}

        <time title={'13 novembro às 12:00'} dateTime={'2023-11-13 12:00:00'}>Publicado a 1 Hora</time>
      </header>


      {/* CONTEUDO DO POST */}
      <div className={styles.content}>

        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa.
          É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 <a href={'#'}>filiperabelo/github/</a> </p>
        <p>#novoprojeto #nlw #rocketseat</p>

      </div>
      {/* FIM CONTEUDO DO POST */}


    </article>
  )
}