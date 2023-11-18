import { format, formatDistanceToNow } from 'date-fns';   /* IMPORTANDO A BIBLIOTECA DE DATAS - NPM I DATE-FNS*/
import ptbr from 'date-fns/locale/pt-br'

import { Comment } from '../comment/Comment.jsx';
import { Avatar } from "../avatar/Avatar";

import styles from './Post.module.css';

//export function Post( props ){ DESTRUTURAÇÃO
export function Post( {author, publishedAt, content} ){  // RECEBENDO AS INFORMAÇÕES DO POST

  // console.log(props)

  const publishedAtDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm' hrs'", {
    locale: ptbr
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptbr,
    addSuffix: true   /* sufixo - prefixo - há */
  })

  return (

    <article className={styles.post}>

      { /* INICIO HEADER AUTHOR - avatar, nome, cargo e data de publicação */}
      <header>

        { /* DIV AUTHOR */}
        <div className={styles.author}>

          <Avatar hasBorder src={author.avatarUrl} alt={"avatar"}/>

          <div className={styles.authorInfo}>  { /* NOME E CARGO DO AUTHOR */}
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>

        </div>
        { /* FIM DIV AUTHOR */}

        <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>

      </header>
      { /* FIM HEADER AUTHOR */}



      {/* CONTEUDO DO POST */}
      <div className={styles.content}>

        {content.map(linhaArray => {

          if(linhaArray.type == 'paragraph'){
            return <p>{linhaArray.content}</p>;
          }else if(linhaArray.type == 'link'){
            return <p><a href={'#'}><p>{linhaArray.content}</p></a></p>
          }

        })}

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