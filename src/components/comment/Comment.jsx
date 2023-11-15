import styles from './Comment.module.css'
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "../avatar/Avatar";

export function Comment(){
  return(
    <div  className={styles.comment}>

      {/*hasBorder={false} - propriedade  - para tirar a bordar pelo css*/}
      <Avatar hasBorder={false} src={'https://github.com/FilipeRabelo.png'} />

      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Kratos</strong>
              <time title={'13 novembro às 12:00'} dateTime={'2023-11-13 12:00:00'}>Cerca de 1h atrás</time>
            </div>
            <button title={"Deletar Comentário"}><Trash size={24}/></button>
          </header>
          <p>Muito bom Dev, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>
      {/*FIM DIV commentBox}*/}

    </div>
    // FIM DIV comment
  )
}