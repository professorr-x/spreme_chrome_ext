

var myHeaders = new Headers();
const categories = ["Tops/Sweaters"]
const keywords = ["Split Logo"]
var itemID = [];
var product_object = [];

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

function atc(id,size,product_id) {
  myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"");
  myHeaders.append("Accept", "*/*;q=0.5, text/javascript, application/javascript, application/ecmascript, application/x-ecmascript");
  myHeaders.append("X-CSRF-Token", "TvILl0sJbIpOMvnpGbj3Mpi2Zh6CmBtJBAlA4gDJ0La3blDGtLOZW0UCFtQ2ANY5BqhXoXk2YpvcLVOHlfxU2Q==");
  myHeaders.append("X-Requested-With", "XMLHttpRequest");
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  myHeaders.append("Sec-Fetch-Site", "same-origin");
  myHeaders.append("Sec-Fetch-Mode", "cors");
  myHeaders.append("Sec-Fetch-Dest", "empty");
  myHeaders.append("Cookie", `request_method=POST; cart=1+item--${size}%2C${id}; _session_id=ellVeThWdVZUbC8ySWU1dk1KcEhETkltLzJJM0d4YjNITE9vMUFBQ244NThPMm91Tk9oRTJHalRLS2p5cU1mYkxKdkxqelZRTjVNTXpDcGVyNFEvL1pmMjFMbFN5NytIY3J1b1RkNGZFSjBZNmpsM1hpc3NGcWpYY1NSbGk5NzlxVWhDR2RrVGhpM3ovOEtCR0RldFBCblcyTDB2MU5GS0V0bHljNXVDaThkZTVDMVFpWUdmRDRtaExOQTRnT3RBWDVVZ3RvN1lBK0dEa212V25QRjQ1MGFhUVZHQ21Jd3dVa2YvMlBVVmtRUGlSelFkT3ozalZiVFQxSGFmWFRZYlhRYzRGSlhKYmRISDdSWS9SNWczNDgyNGl6TGMyUmRkTnY4di9rLzlZN2VISWV1bE1ERDBqOW9lSWZtcHlzVmxNdlJjaGdydVNtUHFmNHBIWFBOT01SajcvWWY5a1ZRNHBQRXIvbnFkeW9UMnI1Szk1NHUvTWEyN0QyR3RwTGNYLS1NSnNJNDh2Um1uWmVNZCtMM0o4ZkZnPT0%3D--d9a5f8d5ab3b8115bfcf7c134056c66c61a92770; serv=16166171318f1a915a6d67b579a20f0750d48d0f9cd6cdef41b41ddab688f1d4c10f08b837; hnkdtrace=9dd761cb16b01a38076f2b4b1f4af04b785d12a41a7fc217282fbcba1131cacdf83598eadbcb07bf80b539c331c31015a3c6eaf6a7acfdf97241dd50106137bc233f87b94e6f2e741a728f1f8371319f507821345d90d62342289f888b7db2ded49e26e94c25fcf3f85bc047197af40e2e68ed928c5a73b16180ef9a7ea220b24c07b5dec98095a17b75683667188185919ae9af2502730e5822321b2438a2a98d5df9efe94037435f8417172c052cd6bf855466dfd6c011364ef887b38609e41b409f95214a7ed16d437862217862d7c0bacd96a1a63026b01c21dd0ad2ed373e719891fbe6e9dbba6a3b16298debb1c547a34e247d6d3542fd23815fa794a49d5f104bf4388771e754bbb0d3395fa005ac1da31bce45f93cf785153f3a40d7d1fb42db35bc2df28cc7eaf1ae0c08a9979ee4267632583d25b00ac33c58135654d4853fa9b2bc8165fe6b74803fe7dc0c24f5ee3d91ebad9d7b019fb7440e93791ea0e2440f291fd99e071a8d1d3f0f341eb661a2e733c6e3a0f6418324d64bd662b3a30e3ab860dda10953b895f43c; _state=e5e6196b95142cf7030dcf2e60c6c5a5284fa540af2ed02ef2f30a6b7456bbb52632b9c4a4009849e0c81d88453571fd70296fc0a7382170f7fe78a0a95b227304904aa5392054c8ae6b2029e1d1fae4409c1cd8b32b237a1b7ae04bc1e9283d58f405499c9c9a04533ca7daf7cf64196b384af167152cd4fcacb6b7ed8f3f27af425bbc747da2c74531fea625afad747327acd51700707aaaf00851dca24063df1867c390bb3edb1941a881483a38c5c6d9cdd8356f30a4be97f7890781806dc58b1c6949121aa799b9bb9abd520f85fc03aa3d69815ef1e50a5af1b98f22f822308f04a6b6b1b59e4b48133b8502ddc74cf4aca561e4b331fd4a5d5bf2fa16ab51a54c652a6ccd09fe0a6089af974725dadbad4675128e97d53b96a4aa88fb306116240c34c4adae1feab985120a79523b794cb554002a0a10d24711a3423ec07acd88acfa8c53e9ff9e51f44354edac6bf7b75475590cf79d91b014515af9c0a7a6248c82b8c09983de92770e9fd0947308ff139428ea0e75bf0295a58259ff00d6c0fe2dd8f4d66819ecb01ce99dd637dabfbbfd2df095b1793749be5526`);

  var urlencoded = new URLSearchParams();
  urlencoded.append("commit", "add to basket");
  urlencoded.append("size", `${size}`);
  urlencoded.append("style", `${id}`);
  urlencoded.append("utf8", "✓");

  var requestOption = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  fetch(`https://www.supremenewyork.com/shop/${product_id}/add`, requestOption)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const mobile_json_data = fetch("https://www.supremenewyork.com/mobile_stock.json", requestOptions)
  .then( response => response.json())
  .then ((result) => {
    return result.products_and_categories
  })

const data = () => {
  mobile_json_data.then((a) => {
    for (var category of categories) {
      const item_dict = a[category]
      for (var line in item_dict) {
        const name = a[category][line]["name"]
        const item_id = a[category][line]["id"]
        for (var keyword in keywords) {
          if (name.includes(keywords[keyword])) {
            itemID.push(item_id)
          }
        }
      }
    }
  }
  ). then(() => {
    for (var item in itemID) {
      const article_id = itemID[item];
      var url = `https://www.supremenewyork.com/shop/${article_id}.json`
      fetch(url, requestOptions)
      .then(response => response.json())
      .then((result) => {
        for (var style in result["styles"]){
          var id = result["styles"][style]["id"];
          for (var size in result["styles"][style]["sizes"]) {
            if (result["styles"][style]["sizes"][size]["stock_level"] != 0){
              var style_id = result["styles"][style]["sizes"][size]["id"]
              var style_name = result["styles"][style]["sizes"][size]["name"]
              product_object.push({"article_id" : article_id, "url": url, "id": id, "style_name": style_name, "style_id": style_id});
            }
          }
        }
      })
    }
    return product_object
  }).then((data) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * data.length);
      const product_id = data[random]["article_id"]
      const size = data[random]["style_id"]
      const id = data[random]["id"]
      atc(id,size,product_id)
      chrome.runtime.sendMessage({redirect: "https://www.supremenewyork.com/checkout"});
    },500);
  });
}


data()