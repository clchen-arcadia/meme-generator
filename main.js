let form=document.querySelector("#meme-form");

form.addEventListener("submit", function(event){
  event.preventDefault();
  if(document.querySelector('#link').value==""){
    return;
  }
  createMeme();
  form.reset();
});


function createMeme(){
  let container = document.createElement("div");
  let topText = document.createElement('div');
  let bottomText = document.createElement('div');
  let image = document.createElement('img');

  image.onload = function(){
    container.style.width= image.width.toString()+'px';
    container.style.height= image.height.toString()+'px';
  };

  image.src = document.querySelector('#link').value;
  topText.innerText = document.querySelector('#top-text').value.toUpperCase();
  bottomText.innerText = document.querySelector('#bottom-text').value.toUpperCase();

  container.appendChild(image);
  container.appendChild(topText);
  container.appendChild(bottomText);

  container.style.position = 'relative';


  image.style="position: absolute; left: 50%; transform: translateX(-50%);"

  topText.style="font-family: Impact, san-serif; color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; font-size: 100px; position: absolute; top: 10px; left: 50%; transform: translateX(-50%); background-color: none;";
  bottomText.style="font-family: Impact, san-serif; color: white; text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; font-size: 100px; position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); background-color: none;";

  container.classList.add('meme');
  container.addEventListener("click", function(){container.remove()});

  document.body.querySelector('form').insertAdjacentElement('afterend',container);
}
