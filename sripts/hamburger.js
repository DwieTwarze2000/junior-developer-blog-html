const checkbox = document.getElementById("hamburgerCheckbox");
const navigation = document.getElementById("navigation");

if (window.innerWidth <= 691) {
  navigation.style.display = "none";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      navigation.style.display = "block";
    } else {
      navigation.style.display = "none";
    }
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 691) {
    navigation.style.display = "none";
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        navigation.style.display = "block";
      } else {
        navigation.style.display = "none";
      }
    });
  }
  if (window.innerWidth > 691) {
    navigation.style.display = "block";
    checkbox.checked = false;
  }
});
