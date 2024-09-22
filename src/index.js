module.exports = function check(str, bracketsConfig) {
  const stack = []; //исп. stack, врем. хранение данных
  for (let item of str) {
    let matchFound = false; // соответствие найдено - по умолч. фолс.
    //проверкк каждой пары на соответствие
    for(let[key, value] of bracketsKonfig) {
      if (item === key) {
        stack.push(item); //если это ключ добав его на вершину стека
        matchFound = true;
        break;
      } else if (item === value) {
        //если это значение то проверяем верхний эл-т стека
        const last = stack.pop(); //pop - удаление эл-та с верш стека
        if (last === undefined || last !== key) {
          return false; // если в стеке не было эл-та или он не равен ключу
        }
        matchFound = true;
      }
    }
  }

}
