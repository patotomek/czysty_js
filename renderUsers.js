export function renderUserTable(users) {
  const docToGenerate = document.getElementById("lol");
  console.log(users);
  const header = `<table class="lol_table">
    <tr class="lol_table">
      <th class="lol_table">ID</th>
      <th class="lol_table">Nazwa uzytkownika</th>
    </tr>`;
  let body = "";
  for (const user of users) {
    console.log(user);
    body += `
    <tr><td>${user.id}</td><td class="lol_table">${user.userName} <button onclick="showUserName('${user.id}')">Info</button></td></tr>`;
  }
  docToGenerate.innerHTML = header + body + "</table>";
}
