//Business Logic:

let go = 0;
let js = 0;
let cs = 0;
let noExp = 0;

function resultCount(res) {
  if (res === "go") {
    return go += 1;
  } else if (res === "js") {
    return js += 1;
  } else if (res === "cs") {
    return cs += 1;
  } else if (res === "noExp") {
    return noExp += 1;
  } else {
    return "unknown variable"
  }
};


//User Interface Logic:
$(document).ready(function () {
  $("#quizForm").submit(function (event) {
    event.preventDefault();

      const userName = $("input#name").val();
      $(".userName").text(userName);

      const expLevel = $("#inputExp").val();
      console.log("expLevel = " + expLevel);
      const qOne = $("input:radio[name=q1]:checked").val();
      console.log("qOne = " + qOne);
      const qTwo = $("input:radio[name=q2]:checked").val();
      console.log("qTwo = " + qTwo);
      const qThr = $("input:radio[name=q3]:checked").val();
      console.log("qThr = " + qThr);
      const qFour = $("input:radio[name=q4]:checked").val();
      console.log("qFour = " + qFour);
      const qFive = $("input:radio[name=q5]:checked").val();
      console.log("qFive = " + qFive);
      const qSix = $("input:radio[name=q6]:checked").val();
      console.log("qSix = " + qSix);
      const answersArray = [qOne, qTwo, qThr, qFour, qFive, qSix];
      console.log("answersArray = " + answersArray);
      resultCount(expLevel);
      resultCount(qOne);
      resultCount(qTwo);
      resultCount(qThr);
      resultCount(qFour);
      resultCount(qFive);
      resultCount(qSix);
      console.log("go = " + go + ", js = " + js + ", cs = " + cs, "noExp = " + noExp);

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
        if ((go > js) && (go > cs)) {
          $("#resCs").hide();
          $("#resJs").hide();
          $("#resGo").show();
        } else if ((js > cs) && (js > go)) {
          $("#resCs").hide();
          $("#resGo").hide();
          $("#resJs").show();
        } else if ((cs > go) && (cs > js)) {
          $("#resJs").hide();
          $("#resGo").hide();
          $("#resCs").show();
        } else {
          $(".oops").show();
        };
      };
  });

  $("#again").submit(function(event) {
    event.preventDefault();
    location.reload(true);
    console.log("page reloaded");
  })
});






/*
X UI Logic: When form is submitted, each question returns a single letter value: a, b, or c. 
X Business logic: function that will count the occurrences # of each letter.
X Business logic: function that will compare amounts of each and produce one value based on the highest number: this will be a branching statement.
X UI logic: function that runs the two business logic functions and produces the language name based on the value, shows the corresponding results div. 
X UI logic: Return name of user in the results div

Special Cases:
X-Make sure they have to answer every question
X-Make sure the variable reset every time the form is submitted, and that the results div is hidden again







----------
BRAINSTORM - PROBLEM SOLVING PRE-WORK

Three languages:
A Go
B Javascript
C C#

    Q1: Platforms:
    A Linux, macOS, FreeBSD, NetBSD, OpenBSD, Windows, Plan 9, DragonFly BSD, Solaris
    B Cross-platform
    C Common Language Infrastructure

    Q2: Developed by:
    A Google, Inc
    B Netscape Communications Corp, Mozilla Foundation, Ecma International
    C Microsoft

    Q3: Filename Extensions:
    A .go
    B .js
    C .cs

    Q4: First Appeared:
    A 2009
    B 1995
    C 2000

    Q5: Paradigm:
    A Compiled, concurrent, imperative, structured
    B Multi-paradigm: object-oriented (prototype-based), imperative, functional, event-driven
    C Multi-paradigm: procedural, functional, object-oriented, generic

    Q6: Inventor:
    A Robert Griesemer, Rob Pike, Ken Thompson
    B Brendan Eich
    C Microsoft




*/
