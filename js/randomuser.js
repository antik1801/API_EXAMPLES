const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(response => response.json())
    .then(data => displayUser(data))
}
loadUser()

const displayUser = user =>{
    // gender
    const genderTag = document.getElementById('gender');
    genderTag.innerHTML = user.results[0].gender;
    // full name
    const name = `${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}` 
    const fullName = document.getElementById('name');
    fullName.innerHTML = name;
    // profile picture
    const dp = document.getElementById('dp');
    const picture = user.results[0].picture.large; 
    dp.innerHTML = `<img src="${picture}"></img>`;
}