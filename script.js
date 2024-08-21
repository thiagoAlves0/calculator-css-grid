function adicionarCaracter(caracter){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput + caracter
}

function clean(){
    document.querySelector('.display').value = ''
}

// 47:00