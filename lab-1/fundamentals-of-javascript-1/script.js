function getMonthName(monthNumber) {
    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];

    if (!Number.isInteger(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        return 'Некорректный номер месяца';
    }

    return months[monthNumber - 1];
}

function getFirstNPrimes(n) {
    if (!Number.isInteger(n) || n <= 0) {
        return 'Некорректное число';
    }

    const primes = [];
    let candidate = 2;

    while (primes.length < n) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(candidate); i += 1) {
            if (candidate % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(candidate);
        }

        candidate += 1;
    }

    return primes.join(' ');
}

const Counter = {
    count: 0,
    add(value) {
        this.count += value;
    },
    sub(value) {
        this.count -= value;
    }
};

function replaceCommasWithDots(input) {
    return input
        .split(',')
        .map(word => word.trim())
        .filter(word => word.length > 0)
        .join('.');
}

function isPalindrome(text) {
    const normalized = text
        .toLowerCase()
        .replace(/[^a-zа-я0-9]/gi, '');

    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}

function runTask2() {
    const input = prompt('Задание 2. Введите номер месяца от 1 до 12:');
    const monthNumber = Number(input);
    alert(getMonthName(monthNumber));
}

function runTask3() {
    const input = prompt('Задание 3. Введите натуральное число n:');
    const n = Number(input);
    alert(getFirstNPrimes(n));
}

function runTask4() {
    Counter.count = 0;

    const addValue = Number(prompt('Задание 4. Введите значение для add(value):'));
    Counter.add(addValue);

    const subValue = Number(prompt('Введите значение для sub(value):'));
    Counter.sub(subValue);

    alert(`Текущее значение count: ${Counter.count}`);
}

function runTask5() {
    const input = prompt('Задание 5. Введите слова через запятую:');
    alert(replaceCommasWithDots(input || ''));
}

function runTask6() {
    const input = prompt('Задание 6. Введите строку:');
    alert(isPalindrome(input || '') ? 'Да' : 'Нет');
}

function run() {
    const task = prompt(
        'Выберите задание: 2, 3, 4, 5 или 6.\n2: Месяц по его номеру\n3: n простых чисел\n4: Работа с объектом Counter\n5: Замена запятых на точки\n6: Проверка строки на палиндром'
    );

    switch (task) {
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
        case '6':
            runTask6();
            break;
        default:
            alert('Некорректный номер задания');
    }
}

run();