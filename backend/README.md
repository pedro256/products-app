
  

  A aplicação **backend** feita em python, **FASTAPI**, um CRUD de produtos e categorias
  usando **SQLALCHEMY** para integração com o Banco de Dados **MariaDB**, por meio de um container **docker**,
  usando também docker compose.
  

# RODAR A APLICAÇÃO

## * RODAR BANCO DE DADOS (DOCKER):

    dir : /backend>
    docker-compose up

## * INSTALAR AS DEPENDENCIAS PIPENV:

    dir : /backend>
    pipenv install

## * ENTRAR NO AMBIENTE DO PIPENV

      dir : /backend>
      pipenv shell

  

## * RODA OS SCRIPTS PARA A GERAÇÃO DO BANCO DE DADOS:

    dir : /backend>
    python init_db.py

## * RODA O BACKEND:

    dir : /backend>
    uvicorn main:app --port 8080 --reload

# ANOTAÇÕES
pip 22.2.2
python 3.10.7

