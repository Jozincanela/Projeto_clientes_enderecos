const BASE_URL = "http://127.0.0.1:8000/Cliente"

verificador_de_Numero = function(value) {

    return /^\d+(?:\.\d+)?$/.test(value);

}

let Todos_Clientes = async()=>{
    const Response_Clientes = await fetch(BASE_URL, {mode:"cors"})
    const Todos_Clientes = await Response_Clientes.json()
    const Tabela_Clientes = document.querySelector("#Tabela_Geral")

    for(let id=0; id<Todos_Clientes[0].length; id++){

        let Linha = document.createElement("tr")
        Linha.id = "Linha_Atributos_Cliente"

        let Acoes = document.createElement("td")
        Acoes.id = "Botoes"
        
        let Botao_delete = document.createElement("button")
        Botao_delete.className = "Botoes_alteracao"
        Botao_delete.id="Botao_delete"
        Botao_delete.innerText = "Apagar"

        let Botao_atualizar = document.createElement("button")
        Botao_atualizar.className = "Botoes_alteracao"
        Botao_atualizar.id = "Botao_att"
        Botao_atualizar.innerText = "Atualizar"

        let ID = document.createElement("td")
        ID.className = "Atributos"
        ID.id = "ID_Cliente"
        ID.innerText = Todos_Clientes[1][id]['id']
        Botao_delete.addEventListener("click", () => {Deletar_cliente(Todos_Clientes[1][id]['id'])})
        Botao_atualizar.addEventListener("click", () =>{Atualizar_cliente(Todos_Clientes[1][id]['id'],Todos_Clientes[0][id]['Nome'],Todos_Clientes[0][id]['CPF'], Todos_Clientes[0][id]['Email'], Todos_Clientes[0][id]['Telefone'], Todos_Clientes[0][id]['Data_nascimento'], Todos_Clientes[1][id]['Cep'], Todos_Clientes[1][id]['Logradouro'] ,Todos_Clientes[1][id]['Bairro'], Todos_Clientes[1][id]['Cidade'] ,Todos_Clientes[1][id]['Estado'], Todos_Clientes[1][id]['Complemento'] )})


        let Nome = document.createElement("td")
        Nome.className = "Atributos"
        Nome.id = "Nome_Cliente"
        Nome.innerText = Todos_Clientes[0][id]['Nome']
        
        let Cpf = document.createElement("td")
        Cpf.className = "Atributos"
        Cpf.id = "Cpf_Cliente"
        Cpf.innerText = Todos_Clientes[0][id]['CPF']

        let Email = document.createElement("td")
        Email.className = "Atributos"
        Email.id = "Email_Cliente"
        Email.innerText = Todos_Clientes[0][id]['Email']

        let Telefone = document.createElement("td")
        Telefone.className = "Atributos"
        Telefone.id = "Telefone_Cliente"
        Telefone.innerText = Todos_Clientes[0][id]['Telefone']

        let Data_nascimento = document.createElement("td")
        Data_nascimento.className = "Atributos"
        Data_nascimento.id = "Data_nascimento_Cliente"
        Data_nascimento.innerText = Todos_Clientes[0][id]['Data_nascimento']

        let Cep = document.createElement("td")
        Cep.className = "Atributos"
        Cep.id = "Cep_Cliente"
        Cep.innerText = Todos_Clientes[1][id]['Cep']

        let Logradouro_Bairro = document.createElement("td")
        Logradouro_Bairro.className = "Atributos"
        Logradouro_Bairro.id = "Logradouro_Bairro_Cliente"
        Logradouro_Bairro.innerText = Todos_Clientes[1][id]['Logradouro'] + "," + Todos_Clientes[1][id]['Bairro']

        let Cidade_Estado = document.createElement("td")
        Cidade_Estado.className = "Atributos"
        Cidade_Estado.id = "Cidade_Estado_Cliente"
        Cidade_Estado.innerText = Todos_Clientes[1][id]['Cidade'] + "-" + Todos_Clientes[1][id]['Estado']


        let Complemento = document.createElement("td")
        Complemento.className = "Atributos"
        Complemento.id = "Complemento_Cliente"
        Complemento.innerText = Todos_Clientes[1][id]['Complemento']


        Acoes.appendChild(Botao_atualizar)
        Acoes.appendChild(Botao_delete)
        Linha.appendChild(ID)
        Linha.appendChild(Nome)
        Linha.appendChild(Cpf)
        Linha.appendChild(Email)
        Linha.appendChild(Telefone)
        Linha.appendChild(Data_nascimento)
        Linha.appendChild(Cep)
        Linha.appendChild(Logradouro_Bairro)
        Linha.appendChild(Cidade_Estado)
        Linha.appendChild(Complemento)
        Linha.appendChild(Acoes)
        Tabela_Clientes.appendChild(Linha)
    }
}



let Novo_cliente = async() =>{
    let dialog_criar = document.createElement("dialog");
    dialog_criar.id = "Dialog_criar";
    div_geral_dialog_criar = document.createElement("div")
    div_geral_dialog_criar.id="Div_dialog_criar"

    let Botoes = document.createElement("div")
    Botoes.id = "Botoes_criar"

    let formulario_criar = document.createElement("form")
    formulario_criar.method = "dialog"
    formulario_criar.id = "Formulario_criar"
    
    let Label_Nome = document.createElement("h4")
    Label_Nome.innerText = "Nome:"

    let input_Nome = document.createElement("input")
    input_Nome.type ="text"
    input_Nome.className = "Atributos_formulario"

    let Label_Cpf = document.createElement("h4")
    Label_Cpf.innerText = "Cpf:"

    let input_Cpf = document.createElement("input")
    input_Cpf.type = "text"
    input_Cpf.className ="Atributos_formulario"
    
    let Label_Email = document.createElement("h4")
    Label_Email.innerText = "Email:"

    let input_Email = document.createElement("input")
    input_Email.type = "text"
    input_Email.className ="Atributos_formulario"

    let Label_Telefone = document.createElement("h4")
    Label_Telefone.innerText = "Telefone:"

    let input_Telefone = document.createElement("input")
    input_Telefone.type = "text"
    input_Telefone.className ="Atributos_formulario"

    let Label_Data_nascimento = document.createElement("h4")
    Label_Data_nascimento.innerText = "Data_nascimento:"

    let input_Data_nascimento = document.createElement("input")
    input_Data_nascimento.type = "text"
    input_Data_nascimento.className ="Atributos_formulario"

    let Label_Cep = document.createElement("h4")
    Label_Cep.innerText = "Cep:"

    let input_Cep = document.createElement("input")
    input_Cep.type = "text"
    input_Cep.className ="Atributos_formulario"

    let Label_Logradouro = document.createElement("h4")
    Label_Logradouro.innerText = "Logradouro:"
    
    let input_Logradouro = document.createElement("input")
    input_Logradouro.type = "text"
    input_Logradouro.className ="Atributos_formulario"

    let Label_Bairro = document.createElement("h4")
    Label_Bairro.innerText = "Bairro:"

    let input_Bairro = document.createElement("input")
    input_Bairro.type = "text"
    input_Bairro.className ="Atributos_formulario"

    let Label_Cidade = document.createElement("h4")
    Label_Cidade.innerText = "Cidade:"

    let input_Cidade = document.createElement("input")
    input_Cidade.type = "text"
    input_Cidade.className ="Atributos_formulario"

    let Label_Estado = document.createElement("h4")
    Label_Estado.innerText = "Estado:"

    let input_Estado = document.createElement("input")
    input_Estado.type = "text"
    input_Estado.className ="Atributos_formulario"

    let Label_Complemento = document.createElement("h4")
    Label_Complemento.innerText = "Complemento:"
    
    let input_Complemento = document.createElement("input")
    input_Complemento.type = "text"
    input_Complemento.className ="Atributos_formulario"

    let botao_Enviar =  document.createElement("button")
    botao_Enviar.addEventListener("click", async ()=>{
        if(input_Nome.value== ""){
            alert("Nome Invalido")
        }
        else if(input_Cpf.value== "" || input_Cpf.value.length > 11 || verificador_de_Numero(input_Cpf.value)){
            alert("Cpf Invalido")
        }
        else if(input_Email.value== "" ){
            alert("Email Invalido")
        }
        else if(input_Telefone.value== "" || input_Telefone.value.length > 12 || verificador_de_Numero(input_Telefone.value)){
            alert("Telefone Invalido")
        }
        else if(input_Data_nascimento.value== "" || input_Data_nascimento.value.length > 8){
            alert("Data de Nascimento Invalida")
        }
        else if(input_Cep.Value== "" || input_Cep.Value.length > 8 || verificador_de_Numero(input_Cep.Value)){
            alert("Cep Invalido")
        }
        else if(input_Logradouro.Value== "" ){
            alert("Logradouro Invalido")
        }
        else if(input_Bairro.value== "" ){
            alert("Bairro Invalido")
        }
        else if(input_Cidade.value== ""){
            alert("Cidade Invalida")
        }
        else if(input_Estado.value== ""){
            alert("Estado Invalido")
        }
        else if(input_Complemento.value== ""){
            alert("Complemento Invalido")
        }
        else{
            let Novo_Cliente = 
            {
                "Bairro": input_Bairro.value,   
                "CPF": input_Cpf.value,
                "Cep": input_Cep.value,
                "Cidade": input_Cidade.value,
                "Complemento":  input_Complemento.value,
                "Data_nascimento": input_Data_nascimento.value,
                "Email": input_Email.value,
                "Estado": input_Estado.value,
                "Logradouro": input_Logradouro.value,
                "Nome": input_Nome.value,
                "Telefone": input_Telefone.value,
            }
            const RESPONSE_CREATE_Cliente = await fetch(BASE_URL, {
                method: "POST",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(Novo_Cliente) 
            });
        }

    })
    botao_Enviar.innerText ="Enviar"
    botao_Enviar.className ="Botao_submit"

    let botao_fechar =  document.createElement("button")
    botao_fechar.addEventListener("click", ()=>{dialog_criar.close()})
    botao_fechar.innerText ="Fechar"
    botao_fechar.className = "Botao_fechar_dialog"

    formulario_criar.appendChild(Label_Nome)
    formulario_criar.appendChild(input_Nome)
    formulario_criar.appendChild(Label_Cpf)
    formulario_criar.appendChild(input_Cpf)
    formulario_criar.appendChild(Label_Email)
    formulario_criar.appendChild(input_Email)
    formulario_criar.appendChild(Label_Telefone)
    formulario_criar.appendChild(input_Telefone)
    formulario_criar.appendChild(Label_Data_nascimento)
    formulario_criar.appendChild(input_Data_nascimento)
    formulario_criar.appendChild(Label_Cep)
    formulario_criar.appendChild(input_Cep)
    formulario_criar.appendChild(Label_Logradouro)
    formulario_criar.appendChild(input_Logradouro)
    formulario_criar.appendChild(Label_Bairro)
    formulario_criar.appendChild(input_Bairro)
    formulario_criar.appendChild(Label_Cidade)
    formulario_criar.appendChild(input_Cidade)
    formulario_criar.appendChild(Label_Estado)
    formulario_criar.appendChild(input_Estado)
    formulario_criar.appendChild(Label_Complemento)
    formulario_criar.appendChild(input_Complemento)
    Botoes.appendChild(botao_fechar)
    Botoes.appendChild(botao_Enviar)
    formulario_criar.appendChild(Botoes)
    div_geral_dialog_criar.appendChild(formulario_criar)

    dialog_criar.appendChild(div_geral_dialog_criar)
    document.body.appendChild(dialog_criar);
    dialog_criar.showModal();
}

botao_criar = document.querySelector("#Novo_Cliente")
botao_criar.addEventListener("click", () => {Novo_cliente()})

let Deletar_cliente = async (id) =>{
    const Response_Del_Cliente = await fetch(BASE_URL + "/" +id, {method: "DELETE", mode: 'cors' });
    const Del_Cliente = await Response_Del_Cliente.json();
    alert("Cliente apagado com sucesso!")
}

let Atualizar_cliente = async (id, Nome, Cpf, Email,Telefone,Data_nascimento,Cep,Logradouro, Bairro,Cidade, Estado, Complemento) =>{
    let dialog_att = document.createElement("dialog");
    dialog_att.id = "Dialog_att";
    div_geral_dialog_att = document.createElement("div")
    div_geral_dialog_att.id="Div_dialog_att"

    let Botoes = document.createElement("div")
    Botoes.id = "Botoes_att"

    let formulario_att = document.createElement("form")
    formulario_att.method = "dialog"
    formulario_att.id = "Formulario_att"
    
    let Label_Nome = document.createElement("h4")
    Label_Nome.innerText = "Nome:"

    let input_Nome = document.createElement("input")
    input_Nome.type ="text"
    input_Nome.value = Nome
    input_Nome.className = "Atributos_formulario"

    let Label_Cpf = document.createElement("h4")
    Label_Cpf.innerText = "Cpf:"

    let input_Cpf = document.createElement("input")
    input_Cpf.type = "text"
    input_Cpf.value = Cpf
    input_Cpf.className ="Atributos_formulario"
    
    let Label_Email = document.createElement("h4")
    Label_Email.innerText = "Email:"

    let input_Email = document.createElement("input")
    input_Email.type = "text"
    input_Email.value = Email
    input_Email.className ="Atributos_formulario"

    let Label_Telefone = document.createElement("h4")
    Label_Telefone.innerText = "Telefone:"

    let input_Telefone = document.createElement("input")
    input_Telefone.type = "text"
    input_Telefone.value = Telefone
    input_Telefone.className ="Atributos_formulario"

    let Label_Data_nascimento = document.createElement("h4")
    Label_Data_nascimento.innerText = "Data_nascimento:"

    let input_Data_nascimento = document.createElement("input")
    input_Data_nascimento.type = "text"
    input_Data_nascimento.value = Data_nascimento
    input_Data_nascimento.className ="Atributos_formulario"

    let Label_Cep = document.createElement("h4")
    Label_Cep.innerText = "Cep:"

    let input_Cep = document.createElement("input")
    input_Cep.type = "text"
    input_Cep.value = Cep
    input_Cep.className ="Atributos_formulario"

    let Label_Logradouro = document.createElement("h4")
    Label_Logradouro.innerText = "Logradouro:"
    
    let input_Logradouro = document.createElement("input")
    input_Logradouro.type = "text"
    input_Logradouro.value = Logradouro
    input_Logradouro.className ="Atributos_formulario"

    let Label_Bairro = document.createElement("h4")
    Label_Bairro.innerText = "Bairro:"

    let input_Bairro = document.createElement("input")
    input_Bairro.type = "text"
    input_Bairro.value = Bairro
    input_Bairro.className ="Atributos_formulario"

    let Label_Cidade = document.createElement("h4")
    Label_Cidade.innerText = "Cidade:"

    let input_Cidade = document.createElement("input")
    input_Cidade.type = "text"
    input_Cidade.value = Cidade
    input_Cidade.className ="Atributos_formulario"

    let Label_Estado = document.createElement("h4")
    Label_Estado.innerText = "Estado:"

    let input_Estado = document.createElement("input")
    input_Estado.type = "text"
    input_Estado.value = Estado
    input_Estado.className ="Atributos_formulario"

    let Label_Complemento = document.createElement("h4")
    Label_Complemento.innerText = "Complemento:"
    
    let input_Complemento = document.createElement("input")
    input_Complemento.type = "text"
    input_Complemento.value = Complemento
    input_Complemento.className ="Atributos_formulario"

    let botao_Enviar =  document.createElement("button")
    botao_Enviar.addEventListener("click", async ()=>{
        if(input_Nome== ""){
            alert("Nome Invalido")
        }
        else if(input_Cpf== "" || input_Cpf.length > 11 || verificador_de_Numero(input_Cpf)){
            alert("Cpf Invalido")
        }
        else if(input_Email== "" ){
            alert("Email Invalido")
        }
        else if(input_Telefone== "" || input_Telefone.length > 12 || verificador_de_Numero(input_Telefone)){
            alert("Telefone Invalido")
        }
        else if(input_Data_nascimento== "" || input_Data_nascimento.length > 8){
            alert("Data de Nascimento Invalida")
        }
        else if(input_Cep== "" || input_Cep.length > 8 || verificador_de_Numero(input_Cep)){
            alert("Cep Invalido")
        }
        else if(input_Logradouro== "" ){
            alert("Logradouro Invalido")
        }
        else if(input_Bairro== "" ){
            alert("Bairro Invalido")
        }
        else if(input_Cidade== ""){
            alert("Cidade Invalida")
        }
        else if(input_Estado== ""){
            alert("Estado Invalido")
        }
        else if(input_Complemento== ""){
            alert("Complemento Invalido")
        }
        else{
            let Att_Cliente = 
            {
                "Bairro": input_Bairro.value,
                "CPF": input_Cpf.value,
                "Cep": input_Cep.value,
                "Cidade": input_Cidade.value,
                "Complemento":  input_Complemento.value,
                "Data_nascimento": input_Data_nascimento.value,
                "Email": input_Email.value,
                "Estado": input_Estado.value,
                "Logradouro": input_Logradouro.value,
                "Nome": input_Nome.value,
                "Telefone": input_Telefone.value,
            }
            const RESPONSE_ATT_Cliente = await fetch(BASE_URL + "/" +id, {
                method: "PUT",
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(Att_Cliente) 
            });
            alert("atualizado com sucesso!")
            dialog_att.close()
        }

    })
    botao_Enviar.innerText ="Enviar"
    botao_Enviar.className ="Botao_submit"

    let botao_fechar =  document.createElement("button")
    botao_fechar.addEventListener("click", ()=>{dialog_att.close()})
    botao_fechar.innerText ="Fechar"
    botao_fechar.className = "Botao_fechar_dialog"

    formulario_att.appendChild(Label_Nome)
    formulario_att.appendChild(input_Nome)
    formulario_att.appendChild(Label_Cpf)
    formulario_att.appendChild(input_Cpf)
    formulario_att.appendChild(Label_Email)
    formulario_att.appendChild(input_Email)
    formulario_att.appendChild(Label_Telefone)
    formulario_att.appendChild(input_Telefone)
    formulario_att.appendChild(Label_Data_nascimento)
    formulario_att.appendChild(input_Data_nascimento)
    formulario_att.appendChild(Label_Cep)
    formulario_att.appendChild(input_Cep)
    formulario_att.appendChild(Label_Logradouro)
    formulario_att.appendChild(input_Logradouro)
    formulario_att.appendChild(Label_Bairro)
    formulario_att.appendChild(input_Bairro)
    formulario_att.appendChild(Label_Cidade)
    formulario_att.appendChild(input_Cidade)
    formulario_att.appendChild(Label_Estado)
    formulario_att.appendChild(input_Estado)
    formulario_att.appendChild(Label_Complemento)
    formulario_att.appendChild(input_Complemento)
    Botoes.appendChild(botao_fechar)
    Botoes.appendChild(botao_Enviar)
    formulario_att.appendChild(Botoes)
    div_geral_dialog_att.appendChild(formulario_att)

    dialog_att.appendChild(div_geral_dialog_att)
    document.body.appendChild(dialog_att);
    dialog_att.showModal();
}
Todos_Clientes()