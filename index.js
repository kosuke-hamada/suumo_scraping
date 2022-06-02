const PORT = 8000;


const express = require("express");
const axios = require("axios");

const cheerio = require("cheerio");

const app = express();
app.listen(PORT, () => console.log("running"));


// 千葉の物件情報
const chiba_ms_URL = "https://suumo.jp/ms/chuko/chiba/city/";
const chiba_chukoikkodate_URL = "https://suumo.jp/chukoikkodate/chiba/city/";
const chiba_ikkodate_URL = "https://suumo.jp/ikkodate/chiba/city/";
const chiba_tochi_URL = "https://suumo.jp/tochi/chiba/city/";
const chiba_ms = [];
const chiba_chukoikkodate = [];
const chiba_ikkodate = [];
const chiba_tochi = [];

axios(chiba_ms_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () { 
      const chiba_itemlist = $(this).find(".searchitem-list-value").text();
      chiba_ms.push(chiba_itemlist);
      console.log("-----------千葉中古マンション--------------")
      const json_chiba_ms = JSON.stringify(chiba_ms).replace(/\(/g, ',"').replace(/\)/g, '"').replace('"','').slice(2).slice(0,-2);
        console.log('['+json_chiba_ms+']');
    });
  })

  axios(chiba_chukoikkodate_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
        const chiba_itemlist = $(this).find(".searchitem-list-value").text();
        chiba_chukoikkodate.push(chiba_itemlist);
        console.log("-----------千葉中古戸建て--------------")
        const json_chiba_chukoikkodate = JSON.stringify(chiba_chukoikkodate).replace(/\(/g, ',"').replace(/\)/g, '"').replace('"','').slice(2).slice(0,-2);
        console.log('['+json_chiba_chukoikkodate+']');
    });
  })

  axios(chiba_tochi_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
      const chiba_itemlist = $(this).find(".searchitem-list-value").text();
      chiba_tochi.push(chiba_itemlist);
      console.log("-----------千葉土地--------------")
      const json_chiba_tochi = JSON.stringify(chiba_tochi).replace(/\(/g, ',"').replace(/\)/g, '"').replace('"','').slice(2).slice(0,-2);
      console.log('['+json_chiba_tochi+']');
    });
  })

  axios(chiba_ikkodate_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
      const chiba_itemlist = $(this).find(".searchitem-list-value").text();
      chiba_ikkodate.push(chiba_itemlist);
      console.log("-----------千葉新築戸建て--------------")
      const json_chiba_ikkodate = JSON.stringify(chiba_ikkodate).replace(/\(/g, ',"').replace(/\)/g, '"').replace('"','').slice(2).slice(0,-2);
      console.log('['+json_chiba_ikkodate+']');
    });
  })


  .catch((error) => console.log(error));
