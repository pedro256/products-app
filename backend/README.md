  
  
  

# RODAR A APLICAÇÃO

* RODAR BANCO DE DADOS (DOCKER):

    docker-compose up

* ENTRAR NO AMBIENTE DO PIPENV

  dir : /backend>
  pipenv shell
  


* RODA OS SCRIPTS PARA A GERAÇÃO DO BANCO DE DADOS:

    python init_db.py

* RODA O BACKEND:

    uvicorn main:app --port 8080 --reload

# ANOTAÇÕES
pip 22.2.2
python 3.10.7

