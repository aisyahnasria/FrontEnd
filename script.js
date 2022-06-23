const api_url = "https://paa-product-4.herokuapp.com/product";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data[0]["name"]);
    if (response) {
        hideloader();
    }
    showPage4(data);
    showPage5(data);

}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function showPage4(data) {
    let tab = ``
  
  for (let i of data) {
    tab += 
      `
        <div class=" card">
          <img src="${i.image}" alt="gambar" class="card-img-top">
              <div class="card-body">
                  <h5 class="card-title">${i.name}</h5>
                  <p class="card-text">Rp ${i.price}</p>
                      <div class="row">
                            <p><i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                200 terjual
                            </p>
                            <p style="font-size:15px">KOTA JOGJA</p>
                      </div>
            </div>
        </div>

    `;
  
    
  }
    // Setting innerHTML as tab variable
    document.getElementById("page4").innerHTML = tab;
}

function showPage5(data) {
    let tab = ``
  
  for (let i of data) {
    tab += 
      `
        <div class=" card">
          <img src="${i.image}" alt="gambar" class="card-img-top">
              <div class="card-body">
                  <h5 class="card-title">${i.name}</h5>
                  <p class="card-text">Rp ${i.price}</p>
                      <div class="row">
                            <p><i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                200 terjual
                            </p>
                            <p style="font-size:15px">KOTA JOGJA</p>
                      </div>
            </div>
        </div>

    `;
  
    
  }
    // Setting innerHTML as tab variable
    document.getElementById("page5").innerHTML = tab;
}