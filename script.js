var timer 
var clear


document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div id="hello">Привет! Чтобы начать игру нажмите пробел</div>')
var hello_text = document.getElementById('hello')
hello_text .style.position = 'blok'
hello_text .style.textAlign = 'center'
hello_text .style.fontSize = 60 + 'pt'


document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src=free-icon-monkey-5089354.png id="monkey">')
var monkey = document.getElementById('monkey')
monkey.style.position = 'fixed'
monkey.style.display = 'none'

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<img src=free-icon-banana-3480354.png id="banana">')
var banana = document.getElementById('banana')
banana.style.position = 'fixed'
banana.style.display = 'none'

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div id="timer_counter"></div>')
var counter = document.getElementById('timer_counter')
counter.style.position = 'center'
counter.style.textAlign = 'center'
counter.style.fontSize = 72 + 'pt'
counter.style.display = 'none'

document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd','<div id="score"></div>')
var score = document.getElementById('score')
score.style.position = 'center'
score.style.textAlign = 'center'
score.style.fontSize = 72 + 'pt'
score.style.display = 'none'



var mouse_move = function(event){mouseMoveFunc(event)}
/*document.addEventListener("mousemove", mouse_move)*/

var press_button = function(event){start(event)}
document.addEventListener("keydown", press_button)

function start(event){
    if (event.keyCode == 32)
    score_counter = 0
    timer = 9
    set_score(score_counter)
    hello_text.style.display = 'none'
    monkey.style.display = 'block'
    banana.style.display = 'block'
    score.style.display = 'block'
    counter.style.display = 'block'
    count_down()
    

    document.removeEventListener("keydown", press_button)
    document.addEventListener("mousemove", mouse_move)


    
    clear = setInterval(function(){count_down()}, 1000)
}

function count_down(){

    timer -=1
    counter.innerHTML = "Осталось времени " + timer

    if (timer == 0){
        clearInterval(clear)
        hello_text.style.display = 'block'
        monkey.style.display = 'none'
        banana.style.display = 'none'
        score.style.display = 'none'
        counter.style.display = 'none'

        hello_text.innerHTML = "Игра окончена. Ваш результат " + score_counter + " очков. Чтобы начать заново нажмите пробел"
        document.addEventListener("keydown", press_button)
        document.removeEventListener("mousemove", mouse_move)


    }
}





function spawn(){
    while(Math.sqrt(Math.pow(monkey.offsetLeft - banana.offsetLeft, 2) + Math.pow(monkey.offsetTop - banana.offsetTop,2)) < 128)
    {
        banana.style.left = Math.random()*(window.innerWidth - 128) + 'px'
        banana.style.top = Math.random()*(window.innerHeight - 128) + 'px'
    }
}

function mouseMoveFunc(event){
    monkey.style.left = event.clientX - 64 + 'px'
    monkey.style.top = event.clientY - 64 + 'px'
     check()
}

function check(){
    if (
        Math.sqrt(Math.pow(monkey.offsetLeft - banana.offsetLeft, 2) + Math.pow(monkey.offsetTop - banana .offsetTop,2)) < 128
    ){
        spawn()
        score_counter++
        set_score(score_counter)
    }
}


var score_counter = 0;

function set_score(score_counter){
    score.innerHTML = "Ваш счёт " + score_counter}



