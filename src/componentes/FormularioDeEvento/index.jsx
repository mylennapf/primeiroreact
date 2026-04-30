import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import './formulario-de-evento.estilos.css';

export function FormularioDeEvento({ temas, aoSubmeter }) {
  function aoFomrSubmetido(formData) {
    console.log('Opa, tá na hora de criar um novo evento', formData)
    const evento = {
      titulo: formData.get('nomeEvento'),
      capa: formData.get('capa'),
      data: new Date(formData.get('dataEvento')),
      tema: temas.find(function (item) {
        return item.id === formData.get('tema');
      })
    }
    aoSubmeter(evento)
  }

  return (
    <form className="form-evento" action={aoFomrSubmetido} >
      <TituloFormulario >
        Preencha para criar um evento:
      </TituloFormulario >
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual é o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder='Summer dev hits'
            name="nomeEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">
            Qual é o endereço da imagem de capa?
          </Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder='http://...'
            name="capa"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            name="dataEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="tema">
            Tema do evento
          </Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
      </div>
      <div className='acoes'>
        <Botao className='botao'>
          Criar evento
        </Botao>
      </div>
    </form>
  )
}