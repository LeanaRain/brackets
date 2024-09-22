module.exports = function check(str, bracketsConfig) {
  const stack = []; //исп. stack, врем. хранение данных
  for (let item of str) {
    let matchFound = false; // соответствие найдено - по умолч. фолс.
    //проверкк каждой пары на соответствие
    for(let[key, value] of bracketsConfig) {
      if (item === key) {
        // после && добав. проверка если символы одинаковые
        if (key === value && stack[stack.length - 1] === key) {
          stack.pop();
        } else {
          stack.push(item); //если это ключ добав его на вершину стека
        }
        matchFound = true;
        break;
      } else if (item === value) {
        //если это значение то проверяем верхний эл-т стека
        const last = stack.pop(); //pop - удаление эл-та с верш стека
        if (last === undefined || key === value && last !== key) { // добав. проверка если символы одинаковы
          return false; // если в стеке не было эл-та или он не равен ключу
        } else if (last !== key) {
          stack.push(last);
          return false; // если пара не совпала
        }
        matchFound = true;
        break;
      }
    }
    //если ни ключ ни знач-ие не найдены поиск дальше
    if(!matchFound) {
      return false;
    }
  }
  //если стек пуст, то все пары найдены корректно
return stack.length === 0;
}
