$(document).ready(function () {
  $("form#favorites").submit(function(event){
    event.preventDefault();
    const age = parseInt($("#age").val());
    const food = ($("select#food").val());
    const dog = ($("select#dog").val());

    const allValues = [age, food, dog];
    console.log(allValues);

    console.log(allValues[0]);
    const newArray = [];

    newArray.push(allValues[0], allValues[2]);
    console.log(newArray);

    $("#ans1").text(allValues[0])
    $("#ans2").text(allValues[2])
  });
});