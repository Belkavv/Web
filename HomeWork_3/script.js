function massage(login, password){
alert(`Log: ${login} 
Pas: ${password}`);
}

let login = prompt("Логин: ");
let password = prompt("Пароль: ");

massage(login, password)

if (confirm("Вы увереены?"))
    alert("Мы рады, что вы уверены!");
else
    alert("Жаль, что вы не уверены");
