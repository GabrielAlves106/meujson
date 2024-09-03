function dados(){
    const ds = [ 
        { id: 1, login: "gabriel", password: "1234@", email: "gabriel@gmail.com"},//[0]
        { id: 2, login: "amanda", password: "12345@", email: "amanda@gmail.com"},//[1]
        { id: 3, login: "ladygaga", password: "123456@", email: "ladygaga@gmail.com"}//[2]
     ]
     return ds
}

const usuarios = dados()
//console.log( "Seu login é: " + usuarios[2].login + "\n A sennha sua é: " + usuarios[2].password)
//let log = document.querySelector("login").value
//let senha = document.querySelector('password').value

function login(){
    let log = document.querySelector("#login").value
    let senha = document.querySelector('#password').value
    //laço for
        for(let i = 0;i < usuarios.length; i++){
            if(log == usuarios[i].login && senha == usuarios[i].password){
                console.log("voce logou no sistema :) ")
                alert("Voce logou")
            }
}       
}
