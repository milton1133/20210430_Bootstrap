var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性"
]

var startDate = new Date();
function setMonthAndDay(startMoth,startDay){
    startDate.setMonth(startMoth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    
}