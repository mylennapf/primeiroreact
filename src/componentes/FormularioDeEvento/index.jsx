import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";
import './formulario-de-evento.estilos.css';

export function FormularioDeEvento({ temas, aoSubmeter }) {
  
  // CORRIGIDO: nome da função e parâmetro
  function aoFormSubmetido(evento) {
    evento.preventDefault(); // IMPEDE O RECARREGAMENTO DA PÁGINA
    
    console.log('Opa, tá na hora de criar um novo evento');
    
    // Pega os dados do formulário
    const formData = new FormData(evento.target);
    
    const novoEvento = {
      titulo: formData.get('nomeEvento'),
      capa: formData.get('capa'),
      data: new Date(formData.get('dataEvento')),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema'); // Usa == ao invés de === para comparar número com string
      })
    }
    
    console.log("Novo evento criado:", novoEvento);
    aoSubmeter(novoEvento);
    
    // Opcional: limpa o formulário
    evento.target.reset();
  }

  return (
    <form className="form-evento" onSubmit={aoFormSubmetido} > {/* MUDOU de action para onSubmit */}
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
            required
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
            required
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
            required
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="tema">
            Tema do evento
          </Label>
          <ListaSuspensa 
            id="tema" 
            name="tema" 
            itens={temas} 
            required
          />
        </CampoDeFormulario>
      </div>
      <div className='acoes'>
        <Botao className='botao' type="submit">
          Criar evento
        </Botao>
      </div>
    </form>
  )
}