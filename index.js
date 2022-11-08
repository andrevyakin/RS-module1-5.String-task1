const myName = "Андрей";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Команда Result School";
const reasonText = "Мне нечем больше заняться";
const numberOfMonth = 0;

let myInfoText = `Всем привет! Меня зовут ${myName}.
Сейчас я изучаю язык программирования ${programmingLanguage}
на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}.
До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев(а).
Я уверен(а), что пройду данный курс до конца!`;

console.log(myInfoText);

myInfoText = myInfoText.replaceAll("JavaScript", "javascript");
myInfoText = myInfoText.replaceAll("курс", "КУРС");
console.log(myInfoText);
console.log(`Размер строки ${myInfoText.length} символов`);
console.log(`Перый символ строки: "${myInfoText[0]}", последний символ строки: "${myInfoText[myInfoText.length - 1]}".`);

