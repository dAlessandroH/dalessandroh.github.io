// Actualizar año del footer automáticamente
const yearSpan = document.getElementById("year");
if (yearSpan) {
  const year = new Date().getFullYear();
  yearSpan.textContent = year;
}
