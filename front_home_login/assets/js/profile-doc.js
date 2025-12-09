const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const spec = params.get("spec");
const image = params.get("image");

document.getElementById("docName").textContent = name;
document.getElementById("docSpec").textContent = spec;
document.getElementById("docImage").src = image;
