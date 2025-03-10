function checkKazakhAnswer() {
    const answer = document.getElementById('kazakh-answer').value.toLowerCase();
    const result = document.getElementById('kazakh-result');
    if (answer.trim() === 'в') {
      result.textContent = 'Дұрыс!';
      result.style.color = 'green';
    } else {
      result.textContent = 'Қате. Тағы бір рет ойланыңыз.';
      result.style.color = 'red';
    }
  }
  
  function checkReadingAnswer() {
    const answer = document.getElementById('reading-answer').value;
    const result = document.getElementById('reading-result');
    if (answer.trim() === '3') {
      result.textContent = 'Жарайсыз!';
      result.style.color = 'green';
    } else {
      result.textContent = 'Қате. Тағы бір рет ойланыңыз.';
      result.style.color = 'red';
    }
  }
  
  function checkMathAnswer() {
    const answer = document.getElementById('math-answer').value;
    const result = document.getElementById('math-result');
    if (answer.trim() === '9') {
      result.textContent = 'Дұрыс!';
      result.style.color = 'green';
    } else {
      result.textContent = 'Қате. Тағы бір рет ойланыңыз.';
      result.style.color = 'red';
    }
  }
  
  function checkWorldAnswer() {
    const answer = document.getElementById('world-answer').value.toLowerCase();
    const result = document.getElementById('world-result');
    if (answer.trim() === 'қыс') {
      result.textContent = 'Дұрыс!';
      result.style.color = 'green';
    } else {
      result.textContent = 'Қате. Тағы бір рет ойланыңыз.';
      result.style.color = 'red';
    }
  }
  
  function checkSelfAwarenessAnswer() {
    const answer = document.getElementById('self-awareness-answer').value;
    const result = document.getElementById('self-awareness-result');
    if (answer.trim().length > 0) {
      result.textContent = 'Рахмет! Сенің пікірің маңызды.';
      result.style.color = 'green';
    } else {
      result.textContent = 'Жауап беріңіз.';
      result.style.color = 'red';
    }
  }
  
  function checkWritingAnswer() {
    const answer = document.getElementById('writing-answer').value.toLowerCase();
    const result = document.getElementById('writing-result');
    if (answer.trim() === 'ана') {
      result.textContent = 'Жарайсыз!';
      result.style.color = 'green';
    } else {
      result.textContent = 'Қате. Тағы бір рет ойланыңыз.';
      result.style.color = 'red';
    }
  }
  
  function checkNatureAnswer() {
    const answer = document.getElementById('nature-answer').value.toLowerCase();
    const result = document.getElementById('nature-result');
    if (answer.includes('жер')) {
      result.textContent = 'Дұрыс!';
      result.style.color = 'green';
    } else {
      result.textContent = 'Қате. Тағы бір рет ойланыңыз.';
      result.style.color = 'red';
    }
  }