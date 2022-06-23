const api_url = "https://paa-product-4.herokuapp.com/product";
const riview_url = "https://paa-review.herokuapp.com/review/?productId=2";
  
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
          <img src="img/laptop3.png" alt="gambar" class="card-img-top">
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
          <img src="img/laptop1.png" alt="gambar" class="card-img-top">
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


//  Page 3 

// // Defining async function
// async function getapi(url) {
    
//     // Storing response
//     const response = await fetch(url);
    
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data[0]["product_id"]);
//     if (response) {
//         hideloader();
//     }
//     showPage3(data);

// }
// // Calling that async function
// getapi(riview_url);
  
// // Function to hide the loader
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function showPage3(data) {
//     let tab = ``
  
//   for (let i of data) {
//     tab += 
//       `
//       <table border=0>
//           <tr>
//               <th><img src=${i.photo}" width="100" height="100"></th>
//               <td>
//                   <p>${i.user_id}</p>
//                   <p>
//                       <span class="fa fa-star checked"></span>
//                       <span class="fa fa-star checked"></span>
//                       <span class="fa fa-star checked"></span>
//                       <span class="fa fa-star"></span>
//                       <span class="fa fa-star"></span>
//                   </p>
//                   <p>
//                       <font color="grey"> 20-07-2021 14.30</font>
//                   </p>
//               </td>
//           </tr>
//           <tr>
//               <th></th>
//               <td>
//                   <p>${i.review}</p>
//               </td>
//           </tr>
//           <tr>
//               <th></th>
//               <th>
//                   <p><button class="button">
//                           <font color="grey">Kualitas barang bagus</font>
//                       </button>
//                       <button class="button">
//                           <font color="grey">Harga produk sangat baik</font>
//                       </button>
//                   </p>
//               </th>
//           </tr>
//       </table>
//     `;
  
    
//   }
//     // Setting innerHTML as tab variable
//     document.getElementById("page3").innerHTML = tab;
// }