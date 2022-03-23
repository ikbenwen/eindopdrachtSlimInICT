function makeMessage() {
    var name = document.getElementById('fname');
    var email = document.getElementById('email');
    var para = document.getElementById('confirm-message');
    var message = '';

    if( name.value !== '' && email.value !== '') {
        message = `Dank u, ${name.value} voor uw interesse. 
                   Uw boodschap is verstuurd. 
                   U krijgt hiervan een bevestiging op ${email.value}.`
    }else{
        message = 'Vul aub uw gegevens in.'
    }
    para.innerHTML = message;
}

function showConfirmMessage(e){
    e.preventDefault();//zorgt dat de boodschap niet direct weer van het scherm verdwijnt.
    var messageDiv = document.getElementById('confirm-message-container');
    messageDiv.style.display = 'flex';

    makeMessage()
}

function hideMessage(e) {
    var messageDiv = document.getElementById('confirm-message-container');
    messageDiv.style.display = 'none';
}

var submitButton = document.getElementById('submit-button');
submitButton.addEventListener("click", showConfirmMessage);

var confirmButton = document.getElementById('confirm-message-button');
confirmButton.addEventListener('click', hideMessage);

