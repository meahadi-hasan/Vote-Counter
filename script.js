let henVotes = 0;
let speakerVotes = 0;
let fanVotes = 0;

function vote(candidate) {
    if (candidate === 'hen') {
        henVotes++;
        document.getElementById('henVotes').innerText = henVotes;
    } else if (candidate === 'speaker') {
        speakerVotes++;
        document.getElementById('speakerVotes').innerText = speakerVotes;
    } else if (candidate === 'fan') {
        fanVotes++;
        document.getElementById('fanVotes').innerText = fanVotes;
    }
}