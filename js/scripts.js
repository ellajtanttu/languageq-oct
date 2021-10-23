//Business Logic:

let go = 0;
let js = 0;
let cs = 0;
let noExp = 0;

function resultCount(res) {
  if (res === "go") {
    return (go += 1);
  } else if (res === "js") {
    return (js += 1);
  } else if (res === "cs") {
    return (cs += 1);
  } else if (res === "noExp") {
    return (noExp += 1);
  } else {
    return "unknown variable";
  }
}

//User Interface Logic:

$(document).ready(function () {
  $("#quizForm").submit(function (event) {
    event.preventDefault();
    const userName = $("input#name").val();
    $(".userName").text(userName);
    const expLevel = $("#inputExp").val();
    const qOne = $("input:radio[name=q1]:checked").val();
    const qTwo = $("input:radio[name=q2]:checked").val();
    const qThr = $("input:radio[name=q3]:checked").val();
    const qFour = $("input:radio[name=q4]:checked").val();
    const qFive = $("input:radio[name=q5]:checked").val();
    const qSix = $("input:radio[name=q6]:checked").val();
    resultCount(expLevel);
    resultCount(qOne);
    resultCount(qTwo);
    resultCount(qThr);
    resultCount(qFour);
    resultCount(qFive);
    resultCount(qSix);
    if (noExp === 1) {
      $(".expAlert").show();
      go = 0;
      js = 0;
      cs = 0;
      noExp = 0;
    } else {
      $(".results").show();
      $("#reTake").show();
      $(".quiz").hide();
      $(".intro").hide();
      if (go > js && go > cs) {
        $("#resCs").hide();
        $("#resJs").hide();
        $("#resGo").show();
      } else if (js > cs && js > go) {
        $("#resCs").hide();
        $("#resGo").hide();
        $("#resJs").show();
      } else if (cs > go && cs > js) {
        $("#resJs").hide();
        $("#resGo").hide();
        $("#resCs").show();
      } else {
        $(".oops").show();
      }
    }
  });

  $("#again").submit(function (event) {
    event.preventDefault();
    location.reload(true);
  });
});
