let amount = 100;

let monday = [
  ["Write a tutorial", 180],
  ["Some web development", 120],
];

let tuesday = [
  ["Keep writing that tutorial", 240],
  ["Some more web development", 180],
  ["A whole lot of nothing", 240],
];

let tasks = [monday, tuesday];

// Для массива tasks необходимо выполнить следующую цепочку методов:
// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Отфильтровать задачи, на выполнение, которых ушло два часа или больше.
// Умножить результат на часовую ставку.

// Вывести в html таблицу, которая состоит из ячеек с отфильтрованными задачами в виде:
// <tr>
//   <td>Task name: Write a tutorial</td>
//   <td>Taks duration: 3 hours</td>
//   <td>Task amount: $300</td>
// </tr>

let newTasks = tasks.map(function (item) {
  return item
    .map(function (element) {
      element[1] = element[1] / 60;
      return element;
    })
    .filter(function (element) {
      return element[1] >= 2;
    })
    .map(function (element) {
      element[1] = element[1] * amount;
      return element;
    });
});

let final = newTasks.map(function (item) {
  return item.map(function (element) {
    return `<tr>
    <td>Task name: ${element[0]}</td>
    <td>Taks duration: ${element[1] / amount} hours</td>
    <td>Task amount: $${element[1]}</td>
</tr>`;
  });
});

document.write(`<table border="1">
	${final}
</table>`);
