const form = document.getElementById('browser-quiz');
const resultBox = document.getElementById('quiz-result');
const resetBtn = document.getElementById('reset-btn');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let score = 0;
    const totalQuestions = 5;
    let reviewHTML = "";

    // Grade answers
    const q1Answer = document.getElementById('q1').value.trim().toLowerCase().replace(/\s+/g, '');
    if (q1Answer == 'worldwideweb') {
        score++;
    } else {
        reviewHTML += `<li><strong>Question 1:</strong> Your answer was incorrect. The correct answer is WorldWideWeb.</li>`;
    }

    const q2Selected = document.querySelector('input[name="q2"]:checked');
    if (q2Selected && q2Selected.value == 'Mosaic') {
        score++;
    } else {
        reviewHTML += `<li><strong>Question 2:</strong> Incorrect. The correct answer is <strong>Mosaic</strong>.</li>`;
    }

    const q3Selected = document.querySelector('input[name="q3"]:checked');
    if (q3Selected && q3Selected.value == 'Blink') {
        score++;
    } else {
        reviewHTML += `<li><strong>Question 3:</strong> Incorrect. The correct answer is <strong>Blink</strong>.</li>`;
    }

    const q4Selected = document.querySelector('input[name="q4"]:checked');
    if (q4Selected && q4Selected.value == 'JIT') {
        score++;
    } else {
        reviewHTML += `<li><strong>Question 4:</strong> Incorrect. The correct technique is <strong>Just-In-Time (JIT) Compilation</strong>..</li>`;
    }

    const q5a = document.getElementById('q5-a').checked;
    const q5b = document.getElementById('q5-b').checked;
    const q5c = document.getElementById('q5-c').checked;
    const q5d = document.getElementById('q5-d').checked;

    if (q5a && !q5b && q5c && !q5d) {
        score++;
    } else {
        reviewHTML += `<li><strong>Question 5:</strong> Incorrect. Multi-process architectures are designed for <strong>tab crash isolation</strong> and maximizing <strong>multi-core CPU usage</strong>.</li>`;
    }

    resultBox.style.display = 'block';
    let summaryHTML = `<h3>Your Score: ${score}/${totalQuestions}</h3>`;

    if (score === totalQuestions) {
        resultBox.className = "success-box";
        summaryHTML += `<p>Perfect score!</p>`;
    } else {
        resultBox.className = "fail-box";
        summaryHTML += `<p>Please review the incorrect items below:</p><ul style="padding-left: 20px; text-align: left;">${reviewHTML}</ul>`;
    }

    resultBox.innerHTML = summaryHTML;
});

resetBtn.addEventListener('click', function () {
    form.reset(); // Clear all user fields automatically
    resultBox.style.display = 'none';
    resultBox.innerHTML = '';
});