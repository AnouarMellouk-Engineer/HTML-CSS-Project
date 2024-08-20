let search = document.getElementsByClassName("icon")[0];
let input = document.getElementById("sear");
search.onclick = () => {
  if (search.classList.contains("active")) {
    input.style.transform = " translateX(300px)";
    search.classList.remove("active");
  } else {
    search.classList.add("active");
    input.style.transform = " translateX(0)";
  }
};

// if (window.location.reload()) {
//   console.log("heelo");
// }
