var timeDisplayEl = $("#currentDay");

// targets the specific items to save to localStorage
$(".saveBtn").on("click", function() {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});

// displays current date on the header
var rightNow = dayjs().format("dddd, MMMM D");
timeDisplayEl.text(rightNow);

var currenttime = dayjs();
var currenthour = currenttime.format("H");

// creates a loop to add a class by comparing the current time 
for (i = 9; i <= 17; i++) {
  var hournumber = "#hour-" + i;
  if (currenthour < i) {
  $(hournumber).addClass("future");
} else if (currenthour > i) {
  $(hournumber).addClass("past");
} else if (currenthour = i) {
  $(hournumber).addClass("present");
}
};

// gets the item from localStorage for the text to stay after refresh
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));