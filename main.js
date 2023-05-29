const button1 = document.getElementById("one");
button1.addEventListener('click', () => {
    button1.textContent = 'Ho!';
    button1.addEventListener('click', () => {
        button1.textContent = 'Lets Go!';
    })
})

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

function three() {
    document.getElementById('change').style.background = "darkred"
}

const button4 = document.getElementsByClassName("four")[0];
button4.addEventListener('click', () => {
    button4.textContent = '4'
})