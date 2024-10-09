window.onload = function () {
  const promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise
    .then((res) => {
      console.log(res.data.content);
      const arrSneaker = res.data.content;
      const productList = document.getElementById("product_list");
      let result = "";
      for (let sneaker of arrSneaker) {
        const { id, name, image, price } = sneaker;
        result += `
             <div class="top_interesting_item col-12 col-md-6 col-lg-4">
                <img src="${image}" alt="" />
                <div class="top_interesting_text">
                  <p class="subtitle">SPORTY</p>
                  <h3 class="text-uppercase">${name}</h3>
                  <p>$${price}.00</p>
                  <a href="./detail/?sneakerid=${id}"><button class="buy_now">Buy Now</button> </a>
                </div>
              </div>
        `;
      }
      productList.innerHTML = result;
    })
    .catch((err) => {
      console.log(err);
    });
};
