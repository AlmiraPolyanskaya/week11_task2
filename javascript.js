// Получаем необходимые элементы DOM
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Обработчик события клика на кнопку "Добавить"
addButton.addEventListener('click', function createTask() {
    //Получаем значение, введенное в поле ввода
    const taskText = taskInput.value;

    //Создаём новый элемент списка
    const newTask = document.createElement('li');

    //Устанавливаем текст задачи внутри созданного элемента списка
    newTask.textContent = taskText;

    //Добавляем созданный элемент списка в нужное место на странице
    taskList.append(newTask);

    //Очищаем поле ввода после добавления задачи
    taskInput.value = '';
});

// Добавляем событие keypress для поля ввода
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addButton.click();
    }
});

// Создайте обработчик события клика, в котором проверьте, что целевым элементом (event.target) является элемент <li>. Если это условие выполняется, то добавьте или удалите класс 'completed' у этого элемента. Задачи должны менять свой стиль, отображаясь как выполненные с зачеркнутым текстом или обратно.

taskList.addEventListener('click', function checkTask(event) {
    if (event.target.tagName === 'LI') {
        // Код, который будет выполнен при клике на элемент <li>
        event.target.classList.toggle('completed');

        // Проверяем, содержит ли элемент класс 'completed' и выводим alert :)
        if (event.target.classList.contains('completed')) {
            alert('Ты молодец! Продолжай в том же духе!');
        }
    }
});