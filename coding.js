let display=document.getElementById('display');

let buttons=Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
  button.addEventListener('click', (e)=> {
    if(display.innerText=="Enter Values"){
      display.innerText=' ';
    }
    if(display.innerText=="Error!"){
      display.innerText=' ';
    }
    switch (e.target.innerText) {
      case 'C':
        display.innerText=' ';
        break;
      case 'DEL':
        display.innerText=display.innerText.slice(0,-1);
        break;
        case '=':
          if(display.innerText==''){
            display.innerText="Enter Values";
          }
          else{
          try{
            display.innerText=eval(display.innerText);
          }catch{
            display.innerText='Error!';
          }
        }
          break;
      default:
        display.innerText += e.target.innerText;
        break;
       
    }
  });
});
