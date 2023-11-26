async function showUserName(user) {
  console.log(user);
  const response = await fetch(`http://localhost:3000/users/${user}`, {
    method: "DELETE", // or 'PUT'
  });
}
