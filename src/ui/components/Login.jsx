import React from 'react'
import '../css/login.css'
import { Boton } from './common/Boton'
import LoginEvent from '../../presentacion/loginEvent'

export const Login = () => {

  const initialData = { usuario: "", contraseña: "" };
  const { form,errors, onChange, handleSubmit,handleBlur} = LoginEvent(initialData)

  return (
    <div className='container-fluid wrapper'>
      <div className='row login'>
        <h2 className='mb-3'>Iniciar sesion </h2>
        <form className='needs-validation' noValidate=''>
          <div className='form group mb-2'>
            <label className='form-label'>
              Usuario
            </label>
            <input
              type='text'
              className='form-control'
              placeholder='Ingrese el usuario'
              name='usuario'
              value={form.usuario}
              onBlur={handleBlur}
              onChange={onChange}
              required=''
            />
          </div>
          {errors.usuario && <div className='error'>
            {errors.usuario}
          </div>}
         
          <div className='form group mb-2'>
            <label className='form-label'>
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              placeholder='Ingrese la contraseña'
              name='contraseña'
              value={form.contraseña}
              onBlur={handleBlur}
              onChange={onChange}
            />
          </div>
          {errors.contraseña && <div className='error'>
            {errors.contraseña}
          </div>}
          <Boton text={"Entrar"} className={"btn w-100 mt-2"} onClick={handleSubmit}></Boton>
        </form>
      </div>
    </div>
  )
}
