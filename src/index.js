const sections = document.getElementsByTagName("section");

// This should probably be throttled.
// Especially because it triggers during smooth scrolling.
// https://lodash.com/docs/4.17.10#throttle
// You could do like...
// window.addEventListener("scroll", () => {
//    _.throttle(doThatStuff, 100);
// });
// Only not doing it here to keep this dependency-free.

window.addEventListener("scroll", () => {
  const fromTop = window.scrollY + 20;
  // NOTE: This follows the original site's pattern of waiting until the section reaches the top to set the active NavBar state.
  Array.prototype.forEach.call(sections, section => {
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      document.getElementById(`liNav_${section.id}`).classList.add("active");
      document.getElementById(`aNav_${section.id}`).classList.add("active");
    } else {
      document.getElementById(`liNav_${section.id}`).classList.remove("active");
      document.getElementById(`aNav_${section.id}`).classList.remove("active");
    }
  });
});
