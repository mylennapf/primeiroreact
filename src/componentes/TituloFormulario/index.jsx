import './titulo-formulario.estilos.css'
// no react, componentes são funções 
//props é um OBJETO
//props.algumacoisa
export function TituloFormulario ({children}) {
  return (
          <h2 className='titulo-form'>
            {children}
          </h2>
  )
}