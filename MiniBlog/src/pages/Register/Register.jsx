import styles from "./Register.module.css"
import { useState, useEffect } from "react"

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuario e compartilhe sua historia</p>
      <form>
        <label>
          <span>Nome</span>
          <input type="text" name="displayNome" required placeholder="Digite seu nome"/>
        </label>
        <label>
          <span>E-mail</span>
          <input type="email" name="Email" required placeholder="Digite seu nome E-mail"/>
        </label>
        <label>
          <span>Senha</span>
          <input type="password" name="password" required placeholder="insira sua senha"/>
        </label>
        <label>
          <span>Confirme sua senha</span>
          <input type="password" name="confirmPassword" required placeholder="Confirme a sua senha"/>
        </label>
        <button className="btn">Cadastrar</button>
      </form>
    </div>
  )
}

export default Register
