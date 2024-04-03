// Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, 
// то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".

{
    const btn1 = document.querySelector(".hw1_button1");

    btn1.addEventListener("click", () => {
        const inp1 = document.querySelector(".hw1_input1");
        const inp2 = document.querySelector(".hw1_input2");
        if(inp1.value && inp2.value) {
            alert('Обидва поля заповнені');
        } else{
            alert('Не всі поля заповнені');
        }
    });
}

// Створити розмітку  з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", 
// якщо ні — "Сума менша або дорівнює 10".

{
    const btn2 = document.querySelector(".hw2_button1");

    btn2.addEventListener("click", () => {
        const inp1 = document.querySelector(".hw2_input1");
        const inp2 = document.querySelector(".hw2_input2");
        if((Number(inp1.value) + Number(inp2.value)) > 10) {
            alert('Сума більша за 10');
        } else{
            alert('Сума менша або дорівнює 10');
        }
    });
}

// Створити розмітку  з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, 
// то виводити повідомлення "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".

{
    const btn3 = document.querySelector(".hw3_button1");

    btn3.addEventListener("click", () => {
        const inp1 = document.querySelector(".hw3_input1");
        if(inp1.value.includes('JavaScript') ) {
            alert('Текст містить слово JavaScript');
        } else{
            alert('Текст не містить слово JavaScript');
        }
    });
}

// Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, 
// то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".

{
    const btn4 = document.querySelector(".hw4_button1");

    btn4.addEventListener("click", () => {
        const inp1 = document.querySelector(".hw4_input1");
        const num = Number(inp1.value) 
        if( num >= 10 && num <= 20) {
            alert('Число входить в діапазон від 10 до 20');
        } else{
            alert('Число не входить в діапазон від 10 до 20');
        }
    });
}

// Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, 
// то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, 
// email містить символ @ та крапку після неї, пароль містить не менше 6 символів.

{
    const btn5 = document.querySelector(".hw5_button1");

    btn5.addEventListener("click", () => {
        const inp1 = document.querySelector(".hw5_input1");
        const inp2 = document.querySelector(".hw5_input2");
        const inp3 = document.querySelector(".hw5_input3");
        const indexAT = inp2.value.indexOf('@');
        if(inp1.value.trim().length >= 3 && indexAT !== -1 && inp2.value.indexOf('.', indexAT)!=-1 && inp3.value.length >= 6) {
            window.location.href = 'https://edu.goiteens.com/';
        } else{
            alert('Не всі поля заповнені вірно');
        }
    });
}
