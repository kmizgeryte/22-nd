// cars.js
function addCarsToApp(app) {
    // Masyvas su automobilių pavadinimais
    const carsArray = ["BMW", "VW", "AUDI", "MB"];
  
    // Sukuriame HTML su <ul> ir <li> elementais
    const carsHTML = `
      <ul>
        ${carsArray.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    `;
  
    // Pridedame automobilių sąrašą prie app.innerHTML
    app.innerHTML += carsHTML;
  }
  
  export default addCarsToApp;
  