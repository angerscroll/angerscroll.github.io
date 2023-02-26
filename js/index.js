import larr from "./file.js";


const app = document.getElementById("app");

const searchBar = document.querySelector(".searchBar");

const listBar = document.querySelector(".listBar");

const action = () => {
  const result = generateRandomNumbers(larr);

  // result.forEach(e => {
  //   let text = e.toString();
  //   console.log(text);
  //   contents+`<div></div>`;
  // });

  let newDiv = document.createElement('div');
  newDiv.setAttribute('class','ul');

  result.forEach(e => {
    const content = e;
    let innerDiv = document.createElement('div');
    innerDiv.setAttribute('type','text');
    innerDiv.setAttribute('class','li_num');
    innerDiv.textContent= content;
    newDiv.appendChild(innerDiv);
  })

  listBar.appendChild(newDiv);
}

const generateRandomNumbers = (numbers,count) => {
  let result = [];
  const arrResult = [];
  const cnt = count || 1;
  for(let i = 0 ;i<cnt;i++){
    while (result.length < 6) {
      const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      if (!result.includes(randomNumber)) {
        result.push(randomNumber); 
      }
    }
    arrResult.push(result);
    result = [];
  }
  if(cnt==1) return arrResult[0];
  return arrResult;
}

const init = () => {
  searchBar.addEventListener("click",action);
  if (!larr) alert('gg');

}

init();

