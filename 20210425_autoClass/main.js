$(function () {
   $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>")

   let topicCount = topic.length;

   let millisecsPerDay = 24 * 60 * 60 * 1000;

   for (var x = 0; x < topicCount; x++) {
      $("#courseTable").append("<tr>");
      // $("#coutselTable").append("<td>"+(x+1)+"</td>");
      $("#courseTable").append(`<td class="${x}">${x + 1}</td>`);
      $("#courseTable").append(`<td class="${x}">${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString()}</td>`);

      //.slice(5)，切割前面五個字元
      // $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);

      // $("#courseTable").append(`<td>${starDate}</td>`);
      $("#courseTable").append(`<td class="${x}">${topic[x]}</td>`);
      $("#courseTable").append("/<tr>");

     
      if (x%2==0) {  
         $(`.${x}`).css("background-color", "yellow");
      }
   }
  
});