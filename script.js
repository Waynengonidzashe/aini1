function openEnvelope() {
    document.querySelector('.flap').style.transform = 'rotateX(180deg)';
    document.querySelector('.letter').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.response').classList.remove('hidden');
    }, 800); // Wait for envelope animation to complete
}

function showThanks(reply) {
    document.querySelector('.response').classList.add('hidden');
    document.querySelector('.thank-you').classList.remove('hidden');
}
