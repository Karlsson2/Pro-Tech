document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        // Räkna ut progress
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        const progress = (scrollTop / scrollHeight) * 100;

        // Uppdatera width på pregressbaren
        document.getElementById('progress-bar').style.width = progress + '%';

        // Defined breakpoints för color & transition
        const ranges = [
            { start: 0, end: 20, color: '#DBFF4B' },
            { start: 20, end: 45, color: '#DBFF4B' },
            { start: 45, end: 74, color: '#DBFF4B' },
            { start: 74, end: 100, color: '#DBFF4B' },
        ];

        // Add color and transition based on progress range
        const letters = document.querySelectorAll('.pages h2');
        const numbers = document.querySelectorAll('.numbers h2');
        console.log(letters);

        letters.forEach((letter, index) => {
            const range = ranges[index];

            if (range && progress >= range.start && progress <= range.end) {
                letter.style.transition = 'color 0.3s'; 
                letter.style.color = range.color;
            } else {
                letter.style.transition = 'color 0.3s'; 
                letter.style.color = '#FFF';
            }
        });

        numbers.forEach((number, index) => {
            const range = ranges[index];

            if (range && progress >= range.start && progress <= range.end) {
                number.style.transition = 'color 0.3s'; 
                number.style.color = range.color;
            } else {
                number.style.transition = 'color 0.3s'; 
                number.style.color = '#FFF';
            }
        });
    });
});
