function parseNaturalNumbers(input) {
    return input
        .split(/[ ,]+/)
        .map(value => Number(value.trim()))
        .filter(value => Number.isInteger(value) && value > 0);
}

function sortAscending(numbers) {
    return [...numbers].sort((a, b) => a - b);
}

function getRemaindersByFive(numbers) {
    return numbers.map(number => number % 5);
}

function median(...numbers) {
    if (numbers.length === 0) {
        return null;
    }

    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

function isCorrectBracketSequence(sequence) {
    const stack = [];

    for (const symbol of sequence) {
        if (symbol === '(') {
            stack.push(symbol);
        } else if (symbol === ')') {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
}

function deepCopy(value) {
    if (value === null || typeof value !== 'object') {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(item => deepCopy(item));
    }

    const result = {};

    for (const key in value) {
        if (Object.prototype.hasOwnProperty.call(value, key)) {
            result[key] = deepCopy(value[key]);
        }
    }

    return result;
}

function runTask1() {
    const input = prompt('Задание 1. Введите натуральные числа через пробел или запятую:');
    const numbers = parseNaturalNumbers(input || '');
    alert(sortAscending(numbers).join(' '));
}

function runTask2() {
    const input = prompt('Задание 2. Введите натуральные числа через пробел или запятую:');
    const numbers = parseNaturalNumbers(input || '');
    alert(getRemaindersByFive(numbers).join(' '));
}

function runTask3() {
    const input = prompt('Задание 3. Введите числа через пробел или запятую:');
    const numbers = input
        ? input.split(/[ ,]+/).map(value => Number(value.trim())).filter(value => !Number.isNaN(value))
        : [];

    const classicCallResult = median(10, 7, 2, 18, 4);
    const spreadCallResult = median(...numbers);

    alert(
        `Медиана при обычном вызове median(10, 7, 2, 18, 4): ${classicCallResult}\n` +
        `Медиана при вызове через распаковку: ${spreadCallResult}`
    );
}

function runTask4() {
    const input = prompt('Задание 4. Введите строку из круглых скобок:');
    alert(isCorrectBracketSequence(input || '') ? 'Правильная' : 'Неправильная');
}

function runTask5() {
    const source = {
        name: 'Gary',
        course: {
            title: 'Frontend',
            lab: 1
        },
        scores: [5, 4, 5],
        meta: {
            active: true,
            tags: ['html', 'javascript']
        }
    };

    const copy = deepCopy(source);
    copy.course.lab = 2;
    copy.scores[0] = 1;
    copy.meta.tags.push('copy');

    alert(
        `Исходный объект: ${JSON.stringify(source)}\n\n` +
        `Копия объекта: ${JSON.stringify(copy)}`
    );
}

function run() {
    const task = prompt('Выберите задание: 1, 2, 3, 4 или 5\n1: Сортировка списка\n2: Массив остатков от деления на 5\n3: медиана числового ряда\n4: Проверка строки из скобочек на правильность\n5: Возврат глубокой копии объекта');

    switch (task) {
        case '1':
            runTask1();
            break;
        case '2':
            runTask2();
            break;
        case '3':
            runTask3();
            break;
        case '4':
            runTask4();
            break;
        case '5':
            runTask5();
            break;
        default:
            alert('Некорректный номер задания');
    }
}

run();