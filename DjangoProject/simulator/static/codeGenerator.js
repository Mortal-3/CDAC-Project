document.addEventListener("DOMContentLoaded", function () {
  var permissionSelect = document.getElementById("permission");
  var myCodeDiv = document.getElementById("myCode");

  permissionSelect.addEventListener("change", function () {
    if (this.value === "write") {
      myCodeDiv.contentEditable = "true";
      myCodeDiv.style.display = "block"; // Show the div
      myCodeDiv.style.backgroundColor = "#f8f9fa";
      myCodeDiv.style.border = "1px solid #ced4da";
      editability;
      myCodeDiv.style.padding = "10px";
    } else {
      myCodeDiv.contentEditable = "false";
      myCodeDiv.style.display = "none"; // Hide the div
    }
  });
});
