let i = 0;
let txt = 'Hi, I am Adrian fullstack developer'; /* The text */
let speed = 60; 

const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }else{
    return txt;
  }
}

export default typeWriter;