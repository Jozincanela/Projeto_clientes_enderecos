from fastapi import FastAPI
import models
from database import engine
from fastapi.middleware.cors import CORSMiddleware
import logging
from typing import Annotated
from fastapi import Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db


from models import Endereco, Cliente,Cliente_Request

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8080",  
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)

db_dependency = Annotated[Session, Depends(get_db)]

@app.get('/Cliente',
         description='Retorna todos os Clientes')
async def all_cliente (db: db_dependency):
    return db.query(Cliente).all(), db.query(Endereco).all()

@app.post('/Cliente', 
          description='Cria um Cliente')
async def create_cliente (db: db_dependency, Cliente_request: Cliente_Request):
    try:
        endereco_model = Endereco(**Cliente_request.model_dump(exclude={"Nome", "CPF", "Email", "Telefone", "Data_nascimento"}))
        db.add(endereco_model)
        cliente_model = Cliente(**Cliente_request.model_dump(exclude={"Cep", "Logradouro", "Complemento", "Bairro", "Cidade", "Estado"}), endereco=endereco_model)
        db.add(cliente_model)
        db.commit()
        return "sucesso!"
    except Exception as e:
        logging.error(f"Erro ao criar cliente: {str(e)}")
        raise HTTPException(status_code=422, detail=f"Erro de validação: {str(e)}") 
    
@app.put('/Cliente/{id}',
         description='Atualiza um Cliente desejado atraves do seu id')
async def update_cliente (id:int, db: db_dependency, Cliente_request: Cliente_Request):
    Cliente_model = db.query(Cliente).filter(Cliente.Endereco_id == id).first()
    if Cliente_model is None:
        raise HTTPException(status_code=404, detail='brinquedo not found')
    Endereco_model = db.query(Endereco).filter(Endereco.id == id).first()
    if Endereco_model is None:
        raise HTTPException(status_code=404, detail='brinquedo not found')
    try:
        Cliente_model.Nome = Cliente_request.Nome
        Cliente_model.CPF = Cliente_request.CPF
        Cliente_model.Email = Cliente_request.Email
        Cliente_model.Telefone = Cliente_request.Telefone
        Cliente_model.Data_nascimento = Cliente_request.Data_nascimento

        Endereco_model.Cep = Cliente_request.Cep
        Endereco_model.Logradouro = Cliente_request.Logradouro
        Endereco_model.Complemento = Cliente_request.Complemento
        Endereco_model.Bairro = Cliente_request.Bairro
        Endereco_model.Cidade = Cliente_request.Cidade
        Endereco_model.Estado = Cliente_request.Estado

        db.add(Endereco_model)
        db.add(Cliente_model)
        db.commit()
        return "sucesso!"
    except Exception as e:
        logging.error(f"Erro ao alterar cliente: {str(e)}")
        raise HTTPException(status_code=422, detail=f"Erro de validação: {str(e)}") 
    
@app.delete('/Cliente/{id}',
            description='Apaga um Cliente baseado no id passado')
async def delete_Cliente(db: db_dependency,id: int):
    Endereco_model = db.query(Endereco).filter(Endereco.id == id).first()
    Cliente_model = db.query(Cliente).filter(Cliente.Endereco_id == id).first()
    if Cliente_model is None:
        raise HTTPException(status_code=404, detail='Cliente not found')    
    if Endereco_model is None:
        raise HTTPException(status_code=404, detail='Endereço not found')    
    db.query(Cliente).filter(Cliente.Endereco_id == id).delete()
    db.query(Endereco).filter(Endereco.id == id).delete()
    db.commit()
    return "sucesso!"