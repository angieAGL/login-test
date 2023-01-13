import React from 'react'
import '../css/login.css'
import { Boton } from './common/Boton'
import LoginEvent from '../../presentacion/loginEvent'

export const Login = () => {

  const initialData = { usuario: "", contraseña: "" };
  const { register, handleSubmit,onSubmit, errors, mensajes } = LoginEvent(initialData)

  return (
    <div className='container-fluid wrapper'>
      <div className='row login'>
        <h2 className='mb-3'>Iniciar sesion </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form group mb-2'>
            <label className='form-label'>
              Usuario
            </label>
            <input
              type='text'
              className={errors.usuario ?"form-control error":"form-control" }
              placeholder='Ingrese el usuario'
              name='usuario'
              {...register('usuario',{
                required:mensajes.usuario
              })}
            />
          </div>         
          { <p style={{color:"var(--color-error)"}}> {errors?.usuario?.message}</p>}
          <div className='form group mb-2'>
            <label className='form-label'>
              Contraseña
            </label>
            <input
              type="password"
              className={errors.contraseña ?"form-control error":"form-control" }
              placeholder='Ingrese la contraseña'
              name='contraseña'
              {...register('contraseña',{
                required:mensajes.contraseña
              })}
            />
          </div>         
          { <p style={{color:"var(--color-error)"}}> {errors?.contraseña?.message}</p>}
          

          <Boton text={"Entrar"} className={"btn w-100 mt-2"} ></Boton>
        </form>
      </div>
    </div>
  )
}
