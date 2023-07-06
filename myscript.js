window.onload = function () {
  document.getElementById("toggle").onclick = function () {
    if (document.getElementById("toggle").checked) {
      document.getElementById("mobile_navigation").style.height = "292px";
    } else {
      document.getElementById("mobile_navigation").style.height = "56px";
    }
  };

  document.getElementById("answer1").onclick = function () {
    if (document.getElementById("answer1").checked) {
      document.getElementById("answer1").style.height = "60px";
    } else {
      document.getElementById("answer1").style.height = "40px";
    }
  };
};
