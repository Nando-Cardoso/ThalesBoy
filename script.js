
const gameOnAndOff = () => {
    let light = document.getElementById('led')
    let screen = document.getElementById('iframeScreen')

    //If videogame is on
    if(light.classList.contains('on')){
        screen.style.backgroundColor = 'rgb(105, 116, 99)';
        light.style.backgroundColor = 'rgb(34, 34, 34)'
        light.classList.remove('on')
    }
    //If videogame is off
    else{
        screen.style.backgroundColor = 'rgb(208, 228, 197)';
        light.style.backgroundColor = 'red'
        light.classList.add('on')
    }

}