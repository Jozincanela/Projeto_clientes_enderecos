from database import Base
from sqlalchemy import *
from pydantic import BaseModel
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

class Endereco(Base):
    __tablename__ = 'endereco'
    id = Column(Integer, primary_key=True, index=True)
    Cep = Column(String)
    Logradouro = Column(String)
    Complemento = Column(String)
    Bairro = Column(String)
    Cidade = Column(String)
    Estado = Column(String)
    cliente = relationship('Cliente', back_populates='endereco')

class Cliente(Base):
    __tablename__ = 'cliente'
    Nome = Column(String)
    CPF = Column(String)
    Email = Column(String)
    Telefone = Column(String)
    Data_nascimento = Column(String)
    Endereco_id = Column(Integer, ForeignKey('endereco.id'), primary_key=True)
    endereco = relationship('Endereco', back_populates='cliente')

    
class Cliente_Request (BaseModel):
    Nome: str
    CPF: str
    Email : str
    Telefone: str
    Data_nascimento:str
    Cep :str
    Logradouro :str
    Complemento :str
    Bairro :str
    Cidade :str
    Estado :str

    class Config:
        json_schema_extra =  {
            "example": {
                "Nome": "dasdadd",
                "CPF": "12345678900",
                "Email": "emailteste@gmail.com",
                "Telefone": "(00)12341234",
                "Data_nascimento": "dd/mm/aaaa",
                "Cep": "12345678",
                "Logradouro": "Rua das Flores, 123",
                "Complemento": "apto xxx",
                "Bairro": "Bairro Jardim Primavera",
                "Cidade": "Cidade",
                "Estado": "Estado",
            }
        }




