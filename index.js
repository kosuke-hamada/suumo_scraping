const PORT = 8000;


const express = require("express");
const axios = require("axios");

const cheerio = require("cheerio");

const app = express();
app.listen(PORT, () => console.log("running"));


console.log("\n--------------\n\n千葉の物件情報\n\n--------------\n")
const chiba_ms_URL = "https://suumo.jp/ms/chuko/chiba/city/";
const chiba_chukoikkodate_URL = "https://suumo.jp/chukoikkodate/chiba/city/";
const chiba_ikkodate_URL = "https://suumo.jp/ikkodate/chiba/city/";
const chiba_tochi_URL = "https://suumo.jp/tochi/chiba/city/";

async function chiba() {
  await axios(chiba_ms_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () { 
      //const list_count = $(this).find(".searchitem-list-value").length;

      const chiba_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("\n-----------千葉中古マンション--------------\n")
  
      var a = chiba_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })

  await axios(chiba_ikkodate_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
      const chiba_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("\n-----------千葉新築戸建て--------------\n")
      var a = chiba_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })

  await axios(chiba_chukoikkodate_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
        const chiba_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
        console.log("\n-----------千葉中古戸建て--------------\n")
        var a = chiba_itemlist.split(',')
        var json_list = JSON.stringify(a)
        console.log(json_list)
    });
  })

   await axios(chiba_tochi_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
      const chiba_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("\n-----------千葉土地--------------\n")
      var a = chiba_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })

} chiba()

  function aichi_settime(){
  console.log("\n--------------\n\n愛知の物件情報\n\n--------------\n")

  // 愛知の物件情報
  const aichi_ms_URL = "https://suumo.jp/ms/chuko/aichi/city/";
  const aichi_chukoikkodate_URL = "https://suumo.jp/chukoikkodate/aichi/city/";
  const aichi_ikkodate_URL = "https://suumo.jp/ikkodate/aichi/city/";
  const aichi_tochi_URL = "https://suumo.jp/tochi/aichi/city/";
  
  async function aichi() {

  await axios(aichi_ms_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () { 
      //const list_count = $(this).find(".searchitem-list-value").length;

      const aichi_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("\n-----------愛知中古マンション--------------\n")
  
      var a = aichi_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })
  
  await axios(aichi_ikkodate_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
      const aichi_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("\n-----------愛知新築戸建て--------------\n")
      var a = aichi_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })

  await axios(aichi_chukoikkodate_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
        const aichi_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
        console.log("\n-----------愛知中古戸建て--------------\n")
        var a = aichi_itemlist.split(',')
        var json_list = JSON.stringify(a)
        console.log(json_list)
    });
  })

  await axios(aichi_tochi_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
      const aichi_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("\n-----------愛知土地--------------\n")
      var a = aichi_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })


}
aichi()
}

setTimeout(() => {
  aichi_settime()
}, 2500);

function fukuoka_settime(){
  console.log("\n--------------\n\n福岡の物件情報\n\n--------------\n")

  // 愛知の物件情報
  const fukuoka_ms_URL = "https://suumo.jp/ms/chuko/fukuoka/city/";
  const fukuoka_chukoikkodate_URL = "https://suumo.jp/chukoikkodate/fukuoka/city/";
  const fukuoka_ikkodate_URL = "https://suumo.jp/ikkodate/fukuoka/city/";
  const fukuoka_tochi_URL = "https://suumo.jp/tochi/fukuoka/city/";
  
  async function fukuoka() {
  await axios(fukuoka_ms_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () { 
      //const list_count = $(this).find(".searchitem-list-value").length;

      const fukuoka_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("\n-----------福岡中古マンション--------------\n")
  
      var a = fukuoka_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })

  await axios(fukuoka_ikkodate_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
      const fukuoka_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("\n-----------福岡新築戸建て--------------\n")
      var a = fukuoka_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })

  await axios(fukuoka_chukoikkodate_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
        const fukuoka_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
        console.log("\n-----------福岡中古戸建て--------------\n")
        var a = fukuoka_itemlist.split(',')
        var json_list = JSON.stringify(a)
        console.log(json_list)
    });
  })
  
  await axios(fukuoka_tochi_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
      const fukuoka_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("\n-----------福岡土地--------------\n")
      var a = fukuoka_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })

}
fukuoka()
}

setTimeout(() => {
  fukuoka_settime()
}, 4000);


function shizuoka_settime() {
  console.log("\n--------------\n\n静岡の物件情報\n\n--------------\n")

  // 愛知の物件情報
  const shizuoka_ms_URL = "https://suumo.jp/ms/chuko/shizuoka/city/";
  const shizuoka_chukoikkodate_URL = "https://suumo.jp/chukoikkodate/shizuoka/city/";
  const shizuoka_ikkodate_URL = "https://suumo.jp/ikkodate/shizuoka/city/";
  const shizuoka_tochi_URL = "https://suumo.jp/tochi/shizuoka/city/";

  async function shizuoka() {
    await axios(shizuoka_ms_URL)
    .then((response) => {
      const htmlParser = response.data;
      // console.log(htmlParser);
      const $ = cheerio.load(htmlParser);
  
      $(".searchtable", htmlParser).each(function () { 
        //const list_count = $(this).find(".searchitem-list-value").length;
  
        const shizuoka_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
        console.log("\n-----------静岡中古マンション--------------\n")
    
        var a = shizuoka_itemlist.split(',')
        var json_list = JSON.stringify(a)
        console.log(json_list)
      });
    })

    await axios(shizuoka_ikkodate_URL)
    .then((response) => {
      const htmlParser = response.data;
      // console.log(htmlParser);
      const $ = cheerio.load(htmlParser);
  
      $(".searchtable", htmlParser).each(function () {
        const shizuoka_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
        console.log("\n-----------静岡新築戸建て--------------\n")
        var a = shizuoka_itemlist.split(',')
        var json_list = JSON.stringify(a)
        console.log(json_list)
      });
    })


    await axios(shizuoka_chukoikkodate_URL)
    .then((response) => {
      const htmlParser = response.data;
      // console.log(htmlParser);
      const $ = cheerio.load(htmlParser);
  
      $(".searchtable", htmlParser).each(function () {
          const shizuoka_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
          console.log("\n-----------静岡中古戸建て--------------\n")
          var a = shizuoka_itemlist.split(',')
          var json_list = JSON.stringify(a)
          console.log(json_list)
      });
    })

    await axios(shizuoka_tochi_URL)
    .then((response) => {
      const htmlParser = response.data;
      // console.log(htmlParser);
      const $ = cheerio.load(htmlParser);
  
      $(".searchtable", htmlParser).each(function () {
        const shizuoka_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
        console.log("\n-----------静岡土地--------------\n")
        var a = shizuoka_itemlist.split(',')
        var json_list = JSON.stringify(a)
        console.log(json_list)
      });
    })
  }
  shizuoka()
  }


setTimeout(() => {
  shizuoka_settime()
}, 5500);

//.catch((error) => console.log(error));