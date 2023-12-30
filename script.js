let currentBpm = 0;

function calculateBPM() {
    let bpm = parseFloat(document.getElementById('bpmInput').value);
    if (bpm < 60 || bpm > 200) {
        alert("Invalid BPM. Please enter a value between 60 and 200.");
        return;
    }
    if (bpm <= 120) {
        currentBpm = bpm / 0.75;
    } else {
        currentBpm = (bpm / 0.75) / 2;
    }
    document.getElementById('result').innerText = `Calculated Transition BPM: ${currentBpm}`;
}

function adjustBPM(operation) {
    if (operation === 'halve') {
        currentBpm /= 2;
    } else if (operation === 'double') {
        currentBpm *= 2;
    }
    document.getElementById('result').innerText = `Adjusted BPM: ${currentBpm}`;
}
