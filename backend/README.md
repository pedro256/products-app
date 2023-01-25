  
  
  

# RUN APPLICATION

* RUN DATABASE (DOCKER):

    docker-compose up

* ENTER IN PIPENV

  dir : /backend>
  pipenv shell
  


* RUN DATABASE INITAL SCRIPTS:

    python init_db.py

* RUN APLICATION:

    uvicorn main:app --port 8080 --reload

# ANOTATIONS

pip 22.2.2

python 3.10.7
