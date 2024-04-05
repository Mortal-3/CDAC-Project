let extraData = document.getElementById("dataTable").childNodes[1];

setTimeout(() => {
  extraData.forEach((element) => {
    console.log(element);
  });
}, 8000);
