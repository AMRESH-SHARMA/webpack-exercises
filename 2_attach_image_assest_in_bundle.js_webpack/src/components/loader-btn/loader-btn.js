import "./loader-btn-css.css"

function btnjs() {
    const button = document.createElement("button");
    button.innerHTML = "LOADER";
    document.querySelector("body").appendChild(button);
  

    button.addEventListener("click", function() {
      button.classList.add("loader-btn-css");
      const p = document.createElement("p");
      p.innerHTML = "button clicked";
      document.querySelector("body").appendChild(p);
    });

    const arrow = () => {console.log("es6")}
  }
  
  export default btnjs;
  