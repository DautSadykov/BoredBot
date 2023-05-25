

function changeActivity () {
  fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
        document.getElementById("activity_name").textContent = data.activity
      })
}

      
const button = document.getElementById("myButton")
button.addEventListener("click", function() {
  changeActivity();
});