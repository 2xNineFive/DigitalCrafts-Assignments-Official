const getAllBreeds = async () => {
    const x = await fetch("https://dog.ceo/api/breeds/list/all")
    const response = await x.json();
    const data = response.message;
    console.log(data);
    return data;
}; 

// getAllBreeds();

async function getBreedAndSubBreedCount() {
    const data = await getAllBreeds();
    // console.log(data);

    // array of strings - which are the keys of data
    const breeds = Object.keys(data);
    // console.log(breeds);


    let emptyArray = []

    breeds.forEach(breed => {
        // console.log(data[breed]);
        // console.log(data[breed].length);
        if(data[breed].length < 1) {
            emptyArray.push(`${breed} - 1`);
        } else {
            emptyArray.push(`${breed} - ${data[breed].length}`);
        }
    });

console.log(emptyArray);
}

getBreedAndSubBreedCount();