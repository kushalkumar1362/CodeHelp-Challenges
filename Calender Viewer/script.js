const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevNextIcon = document.querySelectorAll(".header div");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const renderCalendar = () => {
    let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
    let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let liTag = "";

    for (let i = firstDayofMonth; i >= 1; i--) {
        liTag += `<li class="inactive"> ${lastDateofLastMonth - i + 1} </li>`;
    }
 
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = (i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear()) ? "active" : "";
        liTag += `<li class="${isToday}"> ${i} </li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive"> ${i - lastDayofMonth + 1} </li>`;
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
};
renderCalendar();

prevNextIcon.forEach((icon, index) => {
    icon.addEventListener("click", () => {
        if (index === 0) { 
            currMonth--;
            if (currMonth < 0) {
                currMonth = 11;
                currYear--;
            }
        } else { 
            currMonth++;
            if (currMonth > 11) {
                currMonth = 0;
                currYear++;
            }
        }
        renderCalendar();
    });
});

