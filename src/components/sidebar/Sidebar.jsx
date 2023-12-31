// ICONE DE EDITAR PERFIL
import { PencilLine } from 'phosphor-react'
import { Avatar } from "../avatar/Avatar";
import styles from './Sidebar.module.css'

export function Sidebar(){

  return(
    <aside className={styles.sidebar}>

      {/*img de capa*/}
      <img className={styles.cover}
           src={'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
      />

      <div className={styles.profile}>

        {/*TRAZENDO AS PROPRIEDADE DO AVATAR QUE ESTAO NO COMPONENTE AVATAR*/}
        <Avatar
          hasBorder
          src={'https://github.com/FilipeRabelo.png'}
        />
        <strong>Filipe Rabelo</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href={"#"}>
          <PencilLine size={18}/>
          Editar seu Perfil
        </a>
      </footer>

    </aside>
  )

}