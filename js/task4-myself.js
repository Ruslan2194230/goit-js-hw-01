// 1. На счету пользователя есть 23580 кредитов, значение хранится в переменной credits (создай и присвой).
//    Пользователь решает купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid (создай и присвой).

// 2. При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь хочет купить и сохранить в переменную.

// 3.Напиши скрипт который:

//   -Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'.
//   -В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
//   -Проверяет сможет ли пользователь оплатить заказ:
//    если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно средств на счету!'.
//    в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

let credits = 23580;
let pricePerDroid = 3000;
let numberOfOrderedDroid;
let total = 0;

const orderField = prompt("Введите желаемое кол-во дроидов для приобритения");

if (orderField === null) {
  console.log("Отменено пользователем!");
} else {
  numberOfOrderedDroid = Number(orderField);
  total += numberOfOrderedDroid;

  if(total >credits){
    console.log('Недостаточно средств на счету!');
  }
  if(total <= credits){
    credits -= total;
    console.log(`Вы купили ${numberOfOrderedDroid} дроидов, на счету осталось ${credits} кредитов.`);
  }
}
