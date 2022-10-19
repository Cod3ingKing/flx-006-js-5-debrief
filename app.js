

let names = [ 'Bob','Sam','Justin','Craig','Ashley','Shania','Phil','Sophia','Nadia','Delia',


]

let buttonClick = document.getElementById ('randButton');
let buttonClear = document.getElementById ('clearButton')

const getNames = () => {
    const numNames = prompt("How many names?", '0');
    const randomNames = []
    if (numNames > 20){ alert('enter a number below 20') }else {
        
        for (let i = 0; i < parseInt(numNames); i++) {
        const name = names [Math.floor(Math.random()* names.length)];
        randomNames.push(name)
      }
    };
   
    
    

      document.getElementById('hello')
      .textContent = randomNames.join(', ')
    
    };

buttonClick.addEventListener('click',getNames)


const clearNames = () => {
    
    if (buttonClear){document.getElementById('hello').innerHTML='' };
    
    }
    buttonClear.addEventListener('click',clearNames)
    

