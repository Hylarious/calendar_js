const app = {
  initDate: function () {
    const thisApp = this;
    thisApp.currDateElem = document.querySelector(".current-date");
    thisApp.currentDate = new Date();
    thisApp.currYear = thisApp.currentDate.getFullYear();
    thisApp.currMonth = thisApp.currentDate.getMonth();
    console.log(thisApp.currentDate, thisApp.currYear, thisApp.currMonth);
  },
  renderCalendar: function () {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const thisApp = this;
    thisApp.currDateElem.innerText = `${months[thisApp.currMonth]}`
  },
  init: function () {
    const thisApp = this;
    thisApp.initDate();
    thisApp.renderCalendar();
  },
};
app.init();
