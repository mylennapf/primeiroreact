import './card-evento.estilos.css'

export function CardEvento({ evento }) {
    return (
        <div className='card-evento'>
            <img src={evento.capa} alt={evento.titulo} />
            <div className="corpo">
                <p className="tag"></p>
                {evento.tema.nome}
                <p className="data">
                    {evento.data.toLocaleDateString('pt-BR')}
                </p>
                <h4 className="titulo">{evento.titulo}</h4>
            </div>
        </div>
    )
}