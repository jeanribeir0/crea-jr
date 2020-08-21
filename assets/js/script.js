let day_two = document.getElementById("day_two");
let day_one = document.getElementById("day_one");
if (day_one.classList.contains('active')) {
    document.getElementById('second-day').style.display = "none";
    document.getElementById('first-day').style.display = "flex";
}

day_two.addEventListener("click", function select() {
    day_two.classList.add('active');
    day_one.classList.remove('active');
    if (day_two.classList.contains('active')) {
        document.getElementById('first-day').style.display = "none";
        document.getElementById('second-day').style.display = "flex";
    }

})

day_one.addEventListener("click", function select() {
    day_one.classList.add('active');
    day_two.classList.remove('active');
    if (day_one.classList.contains('active')) {
        document.getElementById('second-day').style.display = "none";
        document.getElementById('first-day').style.display = "flex";
    }

})