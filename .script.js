/*const openmodal = {
    open(){
        document.querySelector(".modal-container").classList.add('active')
    },
    close(){
        document.querySelector('.modal-container').classList.remove('active')
    },
    send(){
        cheackvaluesinputs();
    }
}


function cheackvaluesinputs(){
inputname = document.querySelector('.name-input');
inputgmail = document.querySelector('.email.input');

const Name = inputname.value;
const email = inputgmail.value;

if(Name == '' || email == ''    ){ alert('Complete todas as etapas por favor !!')}

else{ alert(`Obrigado pelo interesse,${Name}`) 
document.querySelector(".modal-container").classList.remove('active')

}

}
cheackvaluesinputs()


const formatarzero = (digito) =>`0${digito}`.slice;



const load = (time) => {
    const seconds = document.querySelector('#seconds')
    const minutes = document.querySelector('#minutes')
    const  hours = document.querySelector('#hours')
    const days  = document.querySelector('#days')

const quamtift  =  time % 60;
const quantifMinutes = Math.floor((time % (60*60))/60);
const quantifHours = Math.floor((time % (60*60*24))/ (60*60));
const quantifDays = Math.floor(time / (60*60));


seconds.textContent = formatarzero(quamtift)
minutes.textContent = formatarzero(quantifMinutes)
hours.textContent = formatarzero(quantifHours)
days.textContent = formatarzero(quantifDays)
}

const countDown = (time) => {
    const stopCounting = () => clearInterval(id);

    const count = () => {
        if (time === 0) {
            stopCounting();
        }
        load(time);
        time--;

//a cada segundo ele exxecutara uma callback 
const id = setInterval(() => {
   count(); 
}, 1000);


    }


const resTime = () => {
    const eventDate = new Date ('2022-2-28')
    const today = Date.now();
    return Math.floor((eventDate - today) / 1000)
} 

countDown(resTime());


*/
const openModal = {
    open() {
        document.querySelector(".modal-container").classList.add('active')
    },
    close() {
        document.querySelector(".modal-container").classList.remove('active')
    },
    send() {
        checkValuesInputs();
    }
}

function checkValuesInputs() {
    inputName = document.querySelector('.name-input')
    inputEmail = document.querySelector('.email-input')

    const Name = inputName.value;
    const Email = inputEmail.value;

    if (Name == '' || Email == '') {
        alert('Preencha todos os dados antes')
    } else {
        alert(`Obrigado ${Name}, avisaremos quando o foguete for lançado`)
        document.querySelector(".modal-container").classList.remove('active')
    }
}

const formatZero = (digito) => `0${digito}`.slice(-2);

const load = (time) => {
    const seconds = document.querySelector('#seconds');
    const minutes = document.querySelector('#minutes');
    const hours = document.querySelector('#hours');
    const days = document.querySelector('#days');

    const quantitySeconds = time % 60;
    const quantityMinutes = Math.floor((time % (60 * 60)) / 60);
    const quantityHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const quantityDays = Math.floor(time / (60 * 60 * 24));

    seconds.textContent = formatZero(quantitySeconds);
    minutes.textContent = formatZero(quantityMinutes);
    hours.textContent = formatZero(quantityHours);
    days.textContent = formatZero(quantityDays);
}

const countDown = (time) => {
    const stopCounting = () => clearInterval(id);

    const count = () => {
        if (time === 0) {
            stopCounting();
        }
        load(time);
        time--;
    }

    // a cada segundo ele executa um callback
    const id = setInterval(count, 1000);
}

const restTime = () => {
    const eventDate = new Date ('2022-2-29 20:22:00');
    const today = Date.now();
    return Math.floor((eventDate - today) / 1000);
}

countDown(restTime());


for(let i = -5 ; i<=7 ; i *=3){
    console.log(i)
}