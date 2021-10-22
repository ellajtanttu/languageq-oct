//Business Logic:

let a = 0;
let b = 0;
let c = 0;

function resultCount(res) {
  if (res === "a") {
    return a += 1;
  } else if (res === "b") {
    return b += 1;
  } else if (res === "c") {
    return c += 1;
  }
};


//User Interface Logic:
$(document).ready(function () {
  $("#quizForm").submit(function (event) {
    event.preventDefault();
    $(".results").show();
    $("#reTake").show();
    $(".quiz").hide();
    $(".intro").hide();

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
    console.log("a = " + a + ", b = " + b + ", c = " + c);

    if ((a > b) && (a > c)) {
      $(".resGo").show();
    } else if ((b > c) && (b > a)) {
      $(".resJs").show();
    } else if ((c > a) && (c > b)) {
      $(".resCs").show();
    };
  });
});

/*
X UI Logic: When form is submitted, each question returns a single letter value: a, b, or c. 
X Business logic: function that will count the occurrences # of each letter.
X Business logic: function that will compare amounts of each and produce one value based on the highest number: this will be a branching statement.
X UI logic: function that runs the two business logic functions and produces the language name based on the value, shows the corresponding results div. 
X UI logic: Return name of user in the results div

Special Cases:
-Make sure they have to answer every question
-Make sure the variable reset every time the form is submitted, and that the results div is hidden again







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
