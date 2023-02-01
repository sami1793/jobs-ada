const BASE_URL = 'https://63d43b6fc52305feff602c07.mockapi.io/api';

//Obtener todos los trabajos
const getJobs = () =>{
    fetch(`${BASE_URL}/jobs`)
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        console.log(data[0]);
    })
}

//Renderizar los trabajos
const renderJobs = (jobs) =>{

}
