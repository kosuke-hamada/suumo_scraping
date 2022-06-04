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
      //const list_count = $(this).find(".searchitem-list-value").length;

      const chiba_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("-----------千葉中古マンション--------------")
  
      var a = chiba_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })

  axios(chiba_chukoikkodate_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
        const chiba_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
        chiba_chukoikkodate.push(chiba_itemlist);
        console.log("-----------千葉中古戸建て--------------")
        var a = chiba_itemlist.split(',')
        var json_list = JSON.stringify(a)
        console.log(json_list)
    });
  })

  axios(chiba_tochi_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
      const chiba_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("-----------千葉土地--------------")
      var a = chiba_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })

  axios(chiba_ikkodate_URL)
  .then((response) => {
    const htmlParser = response.data;
    // console.log(htmlParser);
    const $ = cheerio.load(htmlParser);

    $(".searchtable", htmlParser).each(function () {
      const chiba_itemlist = $(this).find(".searchitem-list-value").text().replace(/\)/g ,'').replace(/\(/g ,',').slice(1);
      console.log("-----------千葉新築戸建て--------------")
      var a = chiba_itemlist.split(',')
      var json_list = JSON.stringify(a)
      console.log(json_list)
    });
  })


  .catch((error) => console.log(error));
