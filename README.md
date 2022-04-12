This project was bootstrapped with Nodejs.

This project is Webservices Restfull and SOAP.

First you need to install the dependencies in the folder, you can run: ### npm install

To run de project, you can run: ### npm run start

Available Scripts

Runs the app in the development mode.
Open http://localhost:8000 to view it in the browser.

You can search your postal codes with that link ### http://localhost:8000/consulta/YOUR POSTAL CODE

With Postman you can test access CRUD from api carros, you can run: ### http://localhost:8000/api/carros/ or http://localhost:8000/api/carros/classicos, http://localhost:8000/api/carros/esportivos, http://localhost:8000/api/carros/luxo

Obs: GET to list carros 
     GET to list type of carros
     GET to consult carro with id 
     DELETE to delete a carro 
     PUT to update a carro

To delete a carro, you can run: ### exemplo http://localhost:8000/api/carros/3 (id = 1 to 30)

To update a carros, you can run: ### exemplo http://localhost:8000/api/carros/ {
        "id": 32,
        "nome": "FERRARI",
        "descricao": "Descrição Rolls Royce Phantom",
        "url_foto": "http://www.livroandroid.com.br/livro/carros/luxo/Rolls_Royce_Phantom.png",
        "url_video": "http://www.livroandroid.com.br/livro/carros/luxo/rolls_royce.mp4",
        "latitude": "-23.564224",
        "longitude": "-46.653156",
        "tipo": "luxo"
    }

The page will reload if you make edits.
You will also see any lint errors in the console.

