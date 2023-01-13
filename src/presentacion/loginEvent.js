import { useState } from 'react'
import validacion from './validacion'

const LoginEvent = (initialData) => {

    const [form,setForm] = useState(initialData)
    const [errors, setErrors] = useState({})

    const  onChange = (event) =>{

        const {name, value} = event.target
        setForm({...form, [name]:value})
    }

    const handleBlur = (event) =>{
        onChange(event);
        setErrors(validacion(form));
    }

    const handleSubmit = (event) =>{
        
        event.preventDefault()
        
        console.log("Enviando formulario")
    }

    

  return { form, errors, handleBlur,onChange, handleSubmit}
}

export default LoginEvent