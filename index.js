const drums = document.querySelectorAll('.drum')

drums.forEach((drum) => {
    drum.addEventListener('click', () => {
        // const crash = new Audio('./sounds/crash.mp3')
        // crash.play()
        const buttonText = drum.textContent
        playBaraban(buttonText)
        animationButton(buttonText)

    })
})
document.addEventListener('keydown', (e) => {
    const keyboardKey = e.key
    playBaraban(keyboardKey)
    animationButton(buttonText)
})

    function playBaraban(key) {
        switch (key) {
            case 'w':
                const crash = new Audio('./sounds/crash.mp3') 
                crash.play() 
                break
            case 'a':
                const kickbass = new Audio('./sounds/kick-bass.mp3') 
                kickbass.play()
                break
            case 's':
                const snare = new Audio('./sounds/snare.mp3') 
                snare.play()
                break
            case 'd':
                const tom1 = new Audio('./sounds/tom-1.mp3') 
                tom1.play() 
                break 
            case 'j': 
                const tom2 = new Audio('./sounds/tom-2.mp3') 
                tom2.play() 
                break
            case 'k':
                const tom3 = new Audio('./sounds/tom-3.mp3') 
                tom3.play()
                break
            case 'l':
                const tom4 = new Audio('./sounds/tom-4.mp3') 
                tom4.play()
                default:
                console.log(key)  

        }
    }

    function animationButton(key) {
        const button = document.querySelector(`.${key}`)
        button.classList.add('pressed')
        setTimeout(() => {
            button.classList.remove('pressed')
        }, 100)
    }




        // SWITCH CASE li holat
        // switch (buttonText) {
        //     case 'w':
        //         const crash = new Audio('./sounds/crash.mp3') 
        //         crash.play() 
        //         break
        //     case 'a':
        //         const kickbass = new Audio('./sounds/kick-bass.mp3') 
        //         kickbass.play()
        //         break
        //     case 's':
        //         const snare = new Audio('./sounds/snare.mp3') 
        //         snare.play()
        //         break
        //     case 'd':
        //         const tom1 = new Audio('./sounds/tom-1.mp3') 
        //         tom1.play() 
        //         break 
        //     case 'j': 
        //         const tom2 = new Audio('./sounds/tom-2.mp3') 
        //         tom2.play() 
        //         break
        //     case 'k':
        //         const tom3 = new Audio('./sounds/tom-3.mp3') 
        //         tom3.play()
        //         break
        //     case 'l':
        //         const tom4 = new Audio('./sounds/tom-4.mp3') 
        //         tom4.play()
        //         default:
        //         console.log(buttonText)   
        // }  
// document.addEventListener('keydown', (e) =>{
//     const keyboardKey = e.key
//     switch (keyboardKey) {
//         case 'w':
//             const crash = new Audio('./sounds/crash.mp3') 
//             crash.play() 
//             break
//         case 'a':
//             const kickbass = new Audio('./sounds/kick-bass.mp3') 
//             kickbass.play()
//             break
//         case 's':
//             const snare = new Audio('./sounds/snare.mp3') 
//             snare.play()
//             break
//         case 'd':
//             const tom1 = new Audio('./sounds/tom-1.mp3') 
//             tom1.play() 
//             break 
//         case 'j': 
//             const tom2 = new Audio('./sounds/tom-2.mp3') 
//             tom2.play() 
//             break
//         case 'k':
//             const tom3 = new Audio('./sounds/tom-3.mp3') 
//             tom3.play()
//             break
//         case 'l':
//             const tom4 = new Audio('./sounds/tom-4.mp3') 
//             tom4.play()
//             default:
//             console.log(buttonText)   
//     }  
// })
       
      
//     })
// })



// KLAVIATURA UCHUN









// IF li holat
// if (buttonText == 'w') {
//     const crash = new Audio('./sounds/crash.mp3') 
//     crash.play()
// } else if (buttonText == 'a') {
//     const crash = new Audio('./sounds/kick-bass.mp3') 
//     crash.play()
// } else if (buttonText == 's') {
//     const crash = new Audio('./sounds/snare.mp3') 
//     crash.play()
// }  else if  (buttonText == 'd') {
//     const crash = new Audio('./sounds/tom-1.mp3') 
//     crash.play()
// } else if  (buttonText == 'j') {
//     const crash = new Audio('./sounds/tom-2.mp3') 
//     crash.play()
// } else if  (buttonText == 'k') {
//     const crash = new Audio('./sounds/tom-3.mp3') 
//     crash.play()
// } else if (buttonText == 'l') {
//     const crash = new Audio('./sounds/tom-4.mp3') 
//     crash.play()
// }