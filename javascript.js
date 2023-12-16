document.addEventListener('DOMContentLoaded', function () {
    // Находим необходимые элементы DOM и записываем в переменные
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Создаем функцию createTask()
    function createTask() {
        // Создаем новый элемент списка
        const newTask = document.createElement('li');

        // Присваиваем текст из поля ввода в качестве содержимого новой задачи
        newTask.textContent = taskInput.value;

        // Добавляем новую задачу в список
        taskList.appendChild(newTask);

        // Очищаем поле ввода
        taskInput.value = '';
    }

    // Создаем функцию checkTask()
    function checkTask(event) {
        // Проверяем, что кликнули на элемент списка
        if (event.target.tagName === 'LI') {
            // Переключаем состояние выполнения задачи
            event.target.classList.toggle('completed');
        }
    }

    // Добавляем функцию-обработчик к событию клика на кнопку
    addTaskBtn.addEventListener('click', createTask);

    // Добавляем функцию-обработчик к событию клика на список задач
    taskList.addEventListener('click', checkTask);
});