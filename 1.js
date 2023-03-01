// 1.1
function lowerize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

let str = 'hELLO';
console.log(lowerize(str));


// 1.2
function normalizeString(str) {

  return str.replace(/[.,;!?"]/g, '$& ')
    .replace(/ +(\.|\,|\;|\!|\?|\")/g, '$1')
    .replace(/\s+/g, ' ');
}

let wrongSpacesString = 'Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.'

console.log(normalizeString(wrongSpacesString));


// 1.3
function wordCounter(str) {
  return normalizeString(str).split(' ').length;
}

console.log(wordCounter('My name is Alex'));


// 1.4
function wordCounterPro(str) {
  let allWords = str.toLowerCase().replace(/[.,;!?"]/g, '').split(' ');
  let result = allWords.reduce((words, word) => {
    if (!(word in words)){
      words[word] = 1;
    } else {
      words[word]++;
    }
    return words;
  }, {});
  return result;
}

console.log(wordCounterPro('Текст, в котором слово текст несколько раз встречается и слово тоже'))
