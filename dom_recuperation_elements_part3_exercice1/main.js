let h22 = document.querySelector('h2').textContent
console.log(h22)

h22.innerHTML = <i>Grrr BAM</i>

let h2 = document.querySelector("h2");
let p = h2.nextElementSibling;
if (p.tagName === "P") {
console.log(p);
}

let pd = document.querySelector("p");
pd.innerHTML = "Nouveau contenu ajouté";

let section = document.querySelector("section");
console.log(section.id);

let h1 = document.querySelector("h1");
console.log(h1.className);

let h1s = document.querySelectorAll("h1");
h1s.forEach(function(h1) {
console.log(h1.className);
});

let input = document.querySelector("input");
let attributes = input.attributes;
console.log(attributes);

console.log(input.value)

let inputId = document.querySelector('#inputPassword3')
inputId.type = "password"

document.querySelector("input").type = "color";
