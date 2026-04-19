const Storage = {
    // Сохраняем ответ: ID темы (например, 10 для ПРЕ/ПРИ), правильный или нет (1 или 0)
    saveAnswer: (topicId, isCorrect) => {
        let history = JSON.parse(localStorage.getItem('ege_data')) || [];
        history.push({
            id: topicId,
            correct: isCorrect ? 1 : 0,
            t: Date.now()
        });
        // Ограничим историю, чтобы телефон не тормозил (последние 300 ответов)
        if (history.length > 300) history.shift();
        localStorage.setItem('ege_data', JSON.stringify(history));
    },

    // Метод для получения всей истории ответов
    getHistory: () => JSON.parse(localStorage.getItem('ege_data')) || []
};
