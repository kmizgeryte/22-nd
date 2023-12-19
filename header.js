// header.js
function addHeaderToApp(app) {
    // Standartinis HTML su inline CSS
    const headerHTML = `
      <header ">
        <h1>Header</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed molestias explicabo neque reiciendis, nesciunt, quidem, fugit minus cumque voluptatem accusamus ea. Blanditiis ex sunt maiores cumque vitae odit officiis atque.</p>
      </header>
    `;
  
    // Pridedame header'į prie app.innerHTML
    app.innerHTML += headerHTML;
  }
  
  export default  addHeaderToApp ;
  