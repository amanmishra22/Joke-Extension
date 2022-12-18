fetch('https://api.chucknorris.io/jokes/random')
  .then(data =>data.json())
  .then(jokedata =>{
    const joketext= jokedata.value;
    const jokeelem=document.getElementById('elem');
    jokeelem.innerHTML=joketext;
  })