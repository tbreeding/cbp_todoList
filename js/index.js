$(document).ready(function() {
  $("li").click(function() {
    if($(this).hasClass("unchecked")) {
      $(this).toggleClass("unchecked");
      $(this).find("img").attr("src", "/img/check.svg"); 
    } else {
      $(this).toggleClass("unchecked");
      $(this).find("img").attr("src", "/img/uncheck.svg"); 
    }
  })
});

// $(document).ready(function() {
//   // Code to be executed when the DOM is ready
//   const listItems = $("li");
  
//   listItems.click((listItem) => {

//     let item = $(listItem.currentTarget);

//     if(item.hasClass("unchecked")) {
//       item.toggleClass("unchecked");
//       item.children("img")[0].src = "/img/check.svg"; 
//     } else {
//       item.toggleClass("unchecked");
//       item.children("img")[0].src = "/img/uncheck.svg"; 
//     }
//   })
// });