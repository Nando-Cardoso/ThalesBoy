let gameIsOn = false;
let timer : ReturnType<typeof setTimeout>;
let onSound = new Audio('../audio/thalesboyOn.mp3');


const gameOnAndOff = () => {

    if(document.readyState === 'complete'){
        const light: HTMLElement | null = document.getElementById('led')
        const screen: HTMLElement | null = document.getElementById('screen')

        if (light !== null && screen !== null) {
            //If videogame is on
            if (light.classList.contains('on')) {
                screen.style.backgroundColor = 'rgb(105, 116, 99)';
                light.style.backgroundColor = 'rgb(34, 34, 34)'
                light.classList.remove('on')
                gameIsOn = false;
                switchGameOff()
            }
            //If videogame is off
            else {
                screen.style.backgroundColor = 'rgb(208, 228, 197)';
                light.style.backgroundColor = 'red'
                light.classList.add('on')
                gameIsOn = true;
                switchGameOn()

            }
        }
    }  
}


const switchGameOn = () => {
    if (document.readyState === 'complete') {
        const screen = document.getElementById('screen') as HTMLCanvasElement
        const context = screen?.getContext('2d')

        context?.beginPath();
        context?.moveTo(150, 50);
        context?.lineTo(125, 150)
        context?.stroke();

        /*AUDIO ON*/
        onSound.loop = false;
        onSound.volume = 0.5;
        onSound.play();

        const gameOnAnim = document.getElementById('gameOnAnim') as HTMLImageElement

        if (gameOnAnim !== null) {

            gameOnAnim.src = ''
            gameOnAnim.src = '../img/thalesboygif.gif'
            gameOnAnim.style.display = 'block'

            timer = setTimeout(() => gameOnAnim.style.display = 'none', 5000);
        }
    }
   
}

const switchGameOff = () => {
    if (document.readyState === 'complete') {
        const screen = document.getElementById('screen') as HTMLCanvasElement
        const context = screen?.getContext('2d')

        context?.clearRect(0,0,screen.width, screen.height);

        onSound.pause();
        onSound.currentTime = 0;

        const gameOnAnim: HTMLElement | null = document.getElementById('gameOnAnim')

        if (gameOnAnim !== null) {
            gameOnAnim.style.display = 'none'
            clearTimeout(timer)
        }
    }
}




