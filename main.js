const axios = require('axios');

axios.get('https://github.com/Bradpk/sand-box.git')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

/* 
- const declares the variable. 
- button 1 is the name of the variable. 
- document.getElementById("one") sets the variable to be the element with the id that matches what is inside the parenthesis 
- button1.addEventListener() gives the variable an event handler, in this case "click"
- => {} declares the function and whatever is inside the curly braces will be what the function does
- button1.textContent = "Ho!" will change the original text that had the id="one" which in this case was the button tag that said "Hey".
*/
const button1 = document.getElementById("one");
button1.addEventListener('click', () => {
    button1.textContent = 'Ho!';
    button1.addEventListener('click', () => {
        button1.textContent = 'Lets Go!';
    })
})

//
const button2 = document.getElementById("two");
button2.addEventListener("click", async () => {
    await Tone.start();
    const synth = new Tone.Synth().toDestination();
    const now = Tone.now();
    synth.triggerAttackRelease("C4", "16n", now)
    synth.triggerAttackRelease("Eb4", "16n", now + 0.3)
    synth.triggerAttackRelease("G4", "16n", now + 0.6)
    synth.triggerAttackRelease("G#4", "16n", now + 0.9)
    synth.triggerAttackRelease("C5", "16n", now + 1.2)
    synth.triggerAttackRelease("G#4", "16n", now + 2.1)
    synth.triggerAttackRelease("G4", "16n", now + 2.4)
    synth.triggerAttackRelease("G#4", "16n", now + 3.3)
    synth.triggerAttackRelease("G4", "16n", now + 3.6)
    synth.triggerAttackRelease("G#4", "16n", now + 3.7)
    synth.triggerAttackRelease("G4", "16n", now + 3.8)
    synth.triggerAttackRelease("F4", "16n", now + 3.9)
    synth.triggerAttackRelease("G4", "16n", now + 4.2)
    synth.triggerAttackRelease("B3", "16n", now + 4.5)
    synth.triggerAttackRelease("C4", "16n", now + 4.8)
});

//
function three() {
    document.getElementById('change').style.background = "darkred"
}

//
const button4 = document.getElementsByClassName("four")[0];
button4.addEventListener('click', () => {
    button4.textContent = '4'
})

function five() {
    let randomNumber = Math.floor(Math.random() * 11)
    let interval = ''
    switch (randomNumber) {
        case 0:
            interval = "A"
            break;
        case 1:
            interval = "A#"
            break;
        case 2:
            interval = "B"
            break;
        case 3:
            interval = "C"
            break;
        case 4:
            interval = "C#"
            break;
        case 5:
            interval = "D"
            break;
        case 6:
            interval = "D#"
            break;
        case 7:
            interval = "E"
            break;
        case 8:
            interval = "F"
            break;
        case 9:
            interval = "F#"
            break;
        case 10:
            interval = "G"
            break;
        case 11:
            interval = "G#"
            break;
    }
    document.getElementById("random").textContent = interval;
}
