fetch("https://dog.ceo/api/breed/hound/list")
.then((response) => response.json())
.then((data) => console.log(data.message));

