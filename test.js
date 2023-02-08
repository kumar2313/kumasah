function myFunction() {
  let t1 = document.getElementById("t1");
  let p1 = document.createElement("p")
  p1.innerHTML = document.getElementById("fname").value;
  t1.appendChild(p1)
}