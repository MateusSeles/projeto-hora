function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var h1 = window.document.getElementById('h1')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var dia = data.getDate()
    var mes = (data.getMonth() + 1)
    var ano = data.getUTCFullYear()
    //var hora =  
    msg.innerHTML = `<strong>Agora são ${hora}:${min}<br>${dia}/${mes}/${ano}`
    document.body.style.background = 'blue'
    if (hora >= 0 && hora < 12) {
        // bom dia
        msg.innerHTML += `<br>Tenha um ótimo dia!! Good Morning!!`
        img.src = 'imagens/dia.png.jpg'
        h1.innerText = 'Bom dia!'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        msg.innerHTML += `<br>Tenha uma ótima tarde! Good Evening!!`
        img.src = 'imagens/tarde.png.jpg'
        document.body.style.background = 'Darkorange'
        h1.innerText = 'Boa Tarde!'
    } else {
        // boa noite
        msg.innerHTML += `<br>Boa noite flor da noite`
        img.src = 'imagens/noite.png.jpg'
        document.body.style.background = 'black'
        h1.innerText = 'Boa Noite!'
    }

}