let form=document.querySelector("#meme-form");

form.addEventListener("submit", function(event){
  event.preventDefault();
  createMeme();
});

function createMeme(){
  let div = document.createElement("div");

  let img = document.createElement('img');
  img.src = document.querySelector('#link').value;

  div.style.width = "300px";
  div.style.height = "300px";
  div.style.position = 'relative';

  div.appendChild(img);

  document.body.appendChild(div);
}
