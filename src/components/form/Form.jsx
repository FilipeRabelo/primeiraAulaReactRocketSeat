import style from "./form.module.css"

export function Form(){
  return(

    <div>
      <form>

        <div className={style.form}>
          <label className={style.label} htmlFor={"nome"}>Nome</label>
          <input className={style.input} type={"text"} id={"nome"} name={"nome"}/>
        </div>

        <div className={style.form}>
          <label className={style.label} htmlFor={"nome"}>Idade</label>
          <input className={style.input2} type={"text"} id={"nome"} name={"nome"}/>
        </div>

        <div className={style.form}>
          <label className={style.label}  htmlFor={"nome"}>Sexo</label>
          <input className={style.input3} type={"text"} id={"nome"} name={"nome"}/>
        </div>

      </form>
    </div>


  )
}