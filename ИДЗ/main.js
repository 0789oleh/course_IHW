function main(){
	alert('Be prepared. There will be so many dialogs');

let home = prompt('Давате назовем Ваш дом', '');
let location = prompt('А теперь давайте придумаем, где Вы будете жить', '');
let myНome = new Home (home, location);
let room = prompt('В доме есть инимум одна комната. Придумайте ей имя', '');
let square = prompt('Оперделитесь с желаемой площадью. Это должно быть число', '');
let myRoom = new Room (room, square);
myHome.add(myRoom);
alert('Нажимате f12 и продолжайте');
console.log('Успешно создан дои'+ myHome + ', добавленна первая комнта'+ myRoom);
}
