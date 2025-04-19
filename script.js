// Запись данных в localStorage
// setItem - 
localStorage.setItem("anime", "Vinland saga, Attack on Titan, Demon slayer")
// Получить данные из локального хранилища
// getItem - принимает один параметр: ключ
console.log(localStorage.getItem('anime'));
localStorage.setItem("num1", "140")
localStorage.setItem("num2", "139")
localStorage.setItem("num3", "138")
let num1 = localStorage.getItem('num1')
let num2 = localStorage.getItem('num2')
let num3 = localStorage.getItem('num3')

console.log(+(num1) + +(num2) + +(num3));
document.querySelector('#btn').addEventListener('click', () => {
   localStorage.clear()
})

//delete specififc key
localStorage.removeItem('key')

//перезапись данных
localStorage.setItem('num1', 100)


// получить текущее значение счетчика из LS
let count = localStorage.getItem('reloadCount')
// если значения нет то устанавливаем 0
if (count === null) {
   count = 0;
} else {
   //Если такой ключ есть то преобразуем его значени5е преобразуем в числ о записываем в переменную
   count = +count;
}
// увеличить счетчик на единицу
count++

//сохраняем новое значение в LS
localStorage.setItem('reloadCount', count);
// вывод значение на страницу
document.querySelector('#counter').textContent = count;
if (count > 10) {
   count = 0;
   localStorage.setItem('reloadCount', count);
   document.querySelector('#counter').textContent = count;
} 
console.log('Amount of values in LS', localStorage.length);
// Получение ключа по номеру 
console.log(localStorage.key(0));

for(let i = 0; i < localStorage.length; i++) {
   let key = localStorage.key(i)
   let value = localStorage.getItem(key);
   console.log(value);
   
}
//получить все ключи из ЛС
console.log(Object.keys(localStorage));
//получить все значения из ЛС
console.log(Object.values(localStorage));
// вывод всех значний в консоль используя цикл
let values = Object.values(localStorage)

for(let value of values){
   console.log(value);
   
}