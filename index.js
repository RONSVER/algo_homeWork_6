// динамик массив

class DynamicArray {
  constructor() {
    this.array = [];
  }

  // Метод для добавления элемента в конец массива
  append(element) {
    this.array.push(element);
  }

  // Метод для получения элемента по индексу
  get(index) {
    if (index < 0 || index >= this.array.length) {
      return null; // Индекс вне диапазона массива
    }
    return this.array[index];
  }

  // Метод для удаления элемента по индексу
  removeAt(index) {
    if (index < 0 || index >= this.array.length) {
      return null; // Индекс вне диапазона массива
    }
    return this.array.splice(index, 1)[0];
  }

  // Метод для получения текущей длины массива
  size() {
    return this.array.length;
  }
}

// Пример использования:
const dynamicArray = new DynamicArray();
dynamicArray.append(1);
dynamicArray.append(2);
dynamicArray.append(3);
console.log(dynamicArray.get(1)); // Выведет: 2
dynamicArray.removeAt(0);
console.log(dynamicArray.size()); // Выведет: 2

// частотный словарь букв русского (или английского)

function buildFrequencyDictionary(text) {
  const frequencyDictionary = {};

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase(); // Приводим к нижнему регистру
    if (/[a-zа-я]/.test(char)) {
      // Проверяем, что символ является буквой
      if (frequencyDictionary[char]) {
        frequencyDictionary[char]++;
      } else {
        frequencyDictionary[char] = 1;
      }
    }
  }

  return frequencyDictionary;
}

// Пример использования:
const textToAnalyze = "Hello, world! Привет, мир!";
const frequencyDict = buildFrequencyDictionary(textToAnalyze);

console.log(frequencyDict);
