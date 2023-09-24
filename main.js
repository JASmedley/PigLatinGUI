let usersWord = "";
let evenList = document.getElementById("list");


const updateWord = (element) => {
  usersWord = element.value;
  console.log(usersWord);
};

const confuscateIt = () => {
  let newListItem = document.createElement("li");
  newListItem.innerText = pigLatin(usersWord);
  if (usersWord.length === 0) {
    alert("Please enter at least one letter.");
    return;
  }
  
  evenList.appendChild(newListItem);
 
  usersWord = "";
  document.getElementById("pig-latin-form").reset();
};


//PigLatin Stuff
//this function gets the index of the first vowel of a word
const indexOfFirstVowel = (usersWord) => {
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < usersWord.length; i++) {
    if (vowel.includes(usersWord[i])) {
      return i;
    }
  }
  return -1; 
}

//this function should return the pig latin translation of the word passed in. 
const pigLatin = (usersWord) => {
  let indexOfVowel = indexOfFirstVowel(usersWord);
  let part1 = usersWord.substring(0,indexOfVowel);
  let part2 = usersWord.slice(indexOfVowel);

  if(indexOfVowel ==0) {
    return usersWord.toLowerCase().trim()+"yay";
  }

  if(indexOfVowel ==-1){
    return usersWord.toLowerCase().trim()+"ay";
  }

  return part2.toLowerCase().trim()+part1.toLowerCase().trim()+"ay"
}