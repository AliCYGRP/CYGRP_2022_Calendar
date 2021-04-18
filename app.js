let calendar = document.querySelector(".calendar");

let calendar_footer_string = "";

const month_names = [
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

// Month, Day, Occasion
const dallas_holiday = [
  [0, 1, "New Year's Day"],
  [3, 2, "Good Friday"],
  [4, 31, "Memorial Day"],
  [6, 5, "Independence Day (observed)"],
  [8, 6, "Labor Day"],
  [10, 25, "Thanksgiving"],
  [10, 26, "Thanksgiving"],
  [11, 24, "Christmas Eve"],
  [11, 27, "Christmas (observed)"],
  [11, 31, "New Year’s Eve"],
];

generateCalendar = (month, year) => {
  let calendar_days = calendar.querySelector(".calendar-days");

  let days_of_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  calendar_days.innerHTML = "";

  let currDate = new Date();
  if (!month) month = currDate.getMonth();

  let curr_month = `${month_names[month]}`;
  month_picker.innerHTML = curr_month;

  // get first day of month

  let first_day = new Date(2021, month, 1);

  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
    let day = document.createElement("div");
    if (i >= first_day.getDay()) {
      day.classList.add("calendar-day-hover");
      day.innerHTML = i - first_day.getDay() + 1;
      day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`;

      day.onclick = () => {
        document.getElementById("calendar-footer").innerHTML =
          "<em>Nothing special this day</em>";
      };
      let date = i - first_day.getDay() + 1;
      if (date === currDate.getDate() && month === currDate.getMonth()) {
        day.classList.add("curr-date");
        day.onclick = () => {
          document.getElementById("calendar-footer").innerHTML =
            "Yesterday is History,<br>tomorrow is a mystery,<br>and today is a gift... <br>that's why they call it <b>present</b><br>~Master Oogway";
        };
      }
      // dallas holiday
      dallas_holiday.forEach((e, index) => {
        if (
          month == dallas_holiday[index][0] &&
          date == dallas_holiday[index][1]
        ) {
          day.classList.add("dallas-date");
          day.onclick = () => {
            document.getElementById("calendar-footer").innerHTML =
              "Dallas is celebrating " + dallas_holiday[index][2];
          };
        }
      });
      //indian holiday
    }
    calendar_days.appendChild(day);
  }
};

let month_list = calendar.querySelector(".month-list");

month_names.forEach((e, index) => {
  let month = document.createElement("div");
  month.innerHTML = `<div data-month="${index}">${e}</div>`;
  month.querySelector("div").onclick = () => {
    month_list.classList.remove("show");
    curr_month.value = index;
    generateCalendar(index, 2021);
  };
  month_list.appendChild(month);
});

let month_picker = calendar.querySelector("#month-picker");

month_picker.onclick = () => {
  month_list.classList.add("show");
};

let currDate = new Date();

let curr_month = { value: currDate.getMonth() };

generateCalendar(curr_month.value, 2021);

function myFunction() {
  document.getElementById("calendar-footer").innerHTML = "Something Special";
}

// function dallas_function(month, date) {
//   //   console.log("In dallas function\n");
//   dallas_holiday.forEach((e, index) => {
//     if (month == dallas_holiday[index][0] && date == dallas_holiday[index][1]) {
//       calendar_footer_string = dallas_holiday[index][2];
//       console.log("date=" + date + "dallas function returning true\n");
//       return 1;
//     }
//   });
//   return 0;
// }

// function temp(x) {
//   return x + 4;
// }
