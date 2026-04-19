const Brain = {
    // Анализируем историю и обновляем данные пользователя
    processStats: (history) => {
        // Пример базового анализа для темы ID 10 (ПРЕ/ПРИ)
        const prePriAnswers = history.filter(h => h.id === 10);
        
        if (prePriAnswers.length === 0) {
            return { score: 0, stability: 0, count: 0 };
        }

        const correctOnes = prePriAnswers.filter(h => h.correct === 1).length;
        const score = Math.round((correctOnes / prePriAnswers.length) * 100);
        
        // Стабильность — это точность последних 10 ответов
        const last10 = prePriAnswers.slice(-10);
        const last10Correct = last10.filter(h => h.correct === 1).length;
        const stability = last10.length > 0 ? (last10Correct / last10.length) * 100 : 0;

        return { score, stability, count: prePriAnswers.length };
    }
};
