const getData = async () => {
    const x = await fetch("https://dog.ceo/api/breeds/list/all")
    const response = await x.json();
    const data = response.message;
    // console.log(data);
    return data;
}; 

// let answer = [];

async function getKeys() {
    const data = await getData();
    const breedKeysArray = Object.keys(data);
    // console.log(breedKeysArray);
    return breedKeysArray;
}

async function getValues() {
    const data = await getData();
    const breedValuesArray = Object.values(data);
    // console.log(breedValuesArray);
    return breedValuesArray;
}

async function getSubBreedCount() {
    const data = await getValues();
    // console.log(data);
    let count = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].length < 1) {
            // console.log("there is only one subBreed " + data[i].length);
            count.push('1');
        } else {
            // console.log('there is more than one SubBreed ' + data[i].length);
            count.push(`${data[i].length}`);

        }
    }
    // console.log(count);
    return count;
}


async function combineBreedsAndSubBreedCounts() {
    const breeds = await getKeys();
    const subBreedCounts = await getSubBreedCount();

    // Technically line 49 is the correct answer, but I am having trouble getting it to work. 
    // let combined = [`${breeds[0]} - ${subBreedCounts[0]}`];

    // let combined = [];



    // I'm stuck here. Can you please help me??? I tried so many things but I cannot figure out how to merge two indices a into new index. 
    let isPush = true;

    if (isPush) {
        
    }
    for (let i = 0; i < breeds.length; i++) {
       const dope = combined.push(`${breeds[i]}`);
    }
    // console.log(combined);
    for (let j = 0; j < subBreedCounts.length; j++) {
        const dope = combined.push(`${subBreedCounts[j]}`);
    }


}


getData();

getKeys();

getValues();

getSubBreedCount();

combineBreedsAndSubBreedCounts(); 

