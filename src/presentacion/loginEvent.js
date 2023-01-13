import {useForm} from 'react-hook-form'
import { INGRESE_USUARIO ,INGRESE_CONTRASEÑA } from '../cross-cutting/constant';
const LoginEvent = (initialData) => {

    const { register, handleSubmit, formState:{errors}} = useForm ({defaultValues:initialData});

    const mensajes ={
        usuario: INGRESE_USUARIO,
        contraseña: INGRESE_CONTRASEÑA
    }
    const onSubmit = (data) => {
        console.log(data);
    }
    
  return { mensajes, register,errors, handleSubmit,onSubmit }
}

export default LoginEvent