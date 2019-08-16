const Spider = require('../utils/spider')
const FileUtils = require('../utils/file-utils')
const dateUtils = require('../utils/date.utils')
const DownloadManager = require('../modules/download-manager')
const path = require('path')
const proxy = 'http://F2846595:mrz0809@10.191.131.156:3128';

// (async () => {
//   try { 

//     const base_url = 'https://bbs.hupu.com/selfie'

//     for(let i = 0; i < 5; i++){
//       const http_url = i > 0 ? base_url : base_url + '-' + (i+ 1); 
//       const array = await Spider.getHupuImages(http_url,proxy);
//       let outPath = path.resolve('./base64/' + +new Date() + '/');  
//       array && array.forEach(element => {
//         if(element.startsWith('http')){
//           let url = element;
//           let opts = {
//             url: url,
//             proxy: proxy
//           };  
//           FileUtils.downloadImage(opts, outPath, element.split('/').slice(-1))
//         }else { 
//           FileUtils.saveBase64(element)
//         }
//       }); 
//     }


//   }
//   catch (e) {
//     console.log(e);
//   }
// })()


// (async () => {
//   try { 

//     const array = await Spider.getHupuImages('https://bbs.hupu.com/selfie'); 
//     console.log(array);

//   }
//   catch (e) {
//     console.log(e);
//   }
// })()


(async () => {
  try {
    // const url = 'https://i4.hoopchina.com.cn/hupuapp/bbs/437/32266437/thread_32266437_20190815213753_s_438435_w_1080_h_1440_91387.jpg?x-oss-process=image/resize,w_800/format,webp'

    // const result = await FileUtils.getImageInfo(url)
    // console.dir(result);
    const spider = new Spider()

    const ids = [{
      id: 20912691,
      desc: '情迷帕米尔/航拍'
    },{
      id: 20423157,
      desc: '红海船宿-远洋白鳍鲨篇'
    },{
      id: 20347261,
      desc: 'anilao'
      
    },{
      id: 6245425,
      desc: '水下魅影'
    },{
      id: 21015694,
      desc: '意大利风光'
    },{
      id: 20927953,
      desc: '篮球'
      
    },{
      id:21029233,
      desc: '随风'
    },{
      id: 21025219,
      desc: '一世浮生一刹那，一程山水一年华'
    },{
      id: 21024596,
      desc: '《旧》'
    }]

    const idss = [{
      id: 21033595,
      desc: '【有映画】夏语'
    },{
      id: 21025872,
      desc: '潇潇'
    }]

    const load = new DownloadManager()
    idss.forEach( (item, index) =>{
      setTimeout(async () => {
        const { id, desc } = item
        const array = await spider.getPocoImages(`http://www.poco.cn/works/detail?works_id=${id}`, proxy); 
  
        let subfix = '../public/upload/' +  dateUtils.getCurrentDate() + '/' + desc + '/'
        let outPath = path.resolve(__dirname, subfix); 
        array.map((url, index) => {
          //const result = await FileUtils.getImageInfo(url)  
          load.downloadImage({ url, proxy }, outPath, index + '-'+ url.split('/').slice(-1))
        }) 
      },index * 1000 * 60)
      
    }) 
    
  }
  catch (e) {
    console.log(e);
  }
})()