
//Ocultar-Mostrar trabajos
let hideJobs = () =>{
    $('#jobs-container').classList.add('is-hidden');
}
let showJobs = () =>{
    $('#jobs-container').classList.remove('is-hidden');
    getJobs();
}

//Ocultar-Mostrar UN trabajo
let hideJob = () =>{
    $('#job-container').classList.add('is-hidden');
}
let showJob = () =>{
    $('#job-container').classList.remove('is-hidden');
}

//Ocultar-Mostrar Finder
let hideFinder = () =>{
    $('#finder-jobs-view').classList.add('is-hidden');
}
let showFinder = () =>{
    $('#finder-jobs-view').classList.remove('is-hidden');
}

//Ocultar-Mostrar Modal Borrado
let showModal = () =>{
    $('#modal').classList.add('is-active');
}

let hideModal = () =>{
    $('#modal').classList.remove('is-active');
}


let goToCreateJob = () => {
    $('#new-job-modal').classList.remove('is-hidden');
    $('#finder-jobs-view').classList.add('is-hidden');
    hideJobs();
    hideJob();
}

let goToEditJob = () =>{
    $('#new-job-modal').classList.remove('is-hidden');
}

let goToHome = () =>{
    $('#new-job-modal').classList.add('is-hidden');
    $('#finder-jobs-view').classList.remove('is-hidden');
    showJobs();
    hideJob();
}

//Funcionamiento link Create Job
$('#create-job-link').addEventListener('click', goToCreateJob)

//Volver a Home
$('#home-link').addEventListener('click', goToHome)


// Funcionamiento menú burguer
$("#navbar-burguer").addEventListener("click", () => {
    $("#navbar-burguer").classList.toggle("is-active");
    $("#navbar").classList.toggle("is-active");
  });


//Funcionamiento de Search
$('#search-button').addEventListener('click', (e)=>{
    e.preventDefault();
    getJobsFiltered();
});

//Funcionamiento de Clear
$('#clear-button').addEventListener('click', getJobs);

// Funcionamiento Formulario en Create Job
$('#submit-create-job-button').addEventListener('click', (e) =>{
    e.preventDefault();
    if(isEditing){
        let id = $("#submit-create-job-button").getAttribute("data-id") 
        editJob(id)
    }
    else{
        createJob();
    }
    
})

//Funcionamiento Modal
$('#btn-modal-delete-close').addEventListener('click', hideModal);
$('#btn-modal-delete-cancel').addEventListener('click', hideModal);


