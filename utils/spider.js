const superagent = require('superagent'); //获取网页dom树
require('superagent-proxy')(superagent);
const cheerio = require('cheerio'); //nodejs JQuery 
const url = require('url');
const request = require('request')
const fs = require('fs')
const path = require('path')
const HupuDao = new (require('../modules/hupu/hupu'))()
const FileUtils = require('./file-utils')
const dateUtils = require('./date.utils')
const FileDao = require('../modules/file/file')
const Qiniu = require('../modules/qiniu/qiniu')
class Sipder {
  constructor() {
    this.filedao = new FileDao() // 新建一个 FileDao 实例
  }

  static run(spider_url, proxy) {
    let result = [];
    let allUrl = [];
    superagent.get(spider_url)
      .proxy(proxy)
      .end((err, res) => {
        err && console.error(err)

        let $ = cheerio.load(res.text);

        let browserTilte = $('head title').attr('text')
        let articleTitle = $('.article-header h1').text();
        let articleSubTitle = $('.article-header .subtitle').text();

        $('img').each((idx, element) => {
          let $element = $(element);
          let h = $element.attr('src')
          let href = url.resolve(spider_url, h)
          allUrl.push(href)
        })
        console.log(allUrl)
      })
  }
  getImages(spider_url, proxy) {
    return new Promise((resolve, reject) => {
      let allUrl = [];
      superagent.get(spider_url)
        .proxy(proxy)
        .end((err, res) => {
          err && console.error(err)
          let $ = cheerio.load(res.text);

          let imgs = $('img')
          imgs.each((idx, element) => {
            let $element = $(element);
            let h = $element.attr('src') || $element.attr('data-src');
            let href = url.resolve(spider_url, h);
            allUrl.push(href);
          })
          resolve(allUrl);
        })
    })
  }

  getPocoImages(spider_url, proxy) {
    return new Promise((resolve, reject) => {
      let allUrl = [];
      superagent.get(spider_url)
        .proxy(proxy)
        .end((err, res) => {
          err && console.error(err)
          let $ = cheerio.load(res.text);

          let imgs = $('.vw_h img')
          imgs.each((idx, element) => {
            let $element = $(element);

            //  console.log($element.attr('src')) 
            //  console.log($element.attr('data-src')) 
            let h = $element.attr('src') || $element.attr('data-src');
            //  let h = $element.attr('data-src')
            if (!h) return
            let href = url.resolve(spider_url, h);
            console.dir(href)

            let  filters = ['logo_down_c6789b4.jpg','poli_8a53b90.png','code-img_e4da165.jpg']

            let filename = href.split('/').pop()
            if(!filters.some(x => x == filename)){
              allUrl.push(href);
            }
           
          })
          resolve(allUrl);
        })
    })
  }

  getTmallImages(spider_url) {
    return new Promise((resolve, reject) => {
      let outPath = path.resolve('./base64/taobao/' + dateUtils.getCurrentDate() + '/');
      superagent.agent().get(spider_url).end((err, res) => {
        if (err) {
          console.error(err);
          reject(err)
          return;
        }

        let $ = cheerio.load(res.text);

        let firstCatchList = $('.product a ');
        firstCatchList.each((idx, element) => {
          let $element = $(element);
          let href = $element.attr('href');
          if (href && !href.startsWith('http:') && href.indexOf('detail') > -1) {
            href = "https:" + href;
            superagent.agent().get(href).end((err, res) => {
              if (err) {
                console.error(err);
                reject(err)
              }

              let $ = cheerio.load(res.text);
              let secondCatchList = $('img');
              secondCatchList.each((idx, element) => {
                let $element = $(element);
                let src = $element.attr('src') || $element.attr('data-src');
                // console.log(src)
                src = 'https:' + src
                let url = src;
                let opts = {
                  url: url
                };
                FileUtils.downloadImage(opts, outPath, idx + '-' + src.split('/').slice(-1))
              })
            })
          }
        })
      })
    })
  }

  getTaobaoImages(spider_url) {
    return new Promise((resolve, reject) => {
      let outPath = path.resolve('./base64/taobao/' + dateUtils.getCurrentDate() + '/');
      superagent.get(spider_url).end((err, res) => {
        if (err) {
          console.error(err);
          reject(err)
          return;
        }

        let $ = cheerio.load(res.text);

        let firstCatchList = $('.product a ');
        firstCatchList.each((idx, element) => {
          let $element = $(element);
          let h = $element.attr('href');
          console.log(h)
        })
      })
    })
  }
 
  getHupuImages(spider_url) {
    return new Promise((resolve) => {
      let subfix = '/public/upload/' + dateUtils.getCurrentDate() + '/'

      superagent.get(spider_url)
        .end((err, res) => {
          if (err) {
            console.error(err)
            return;
          }

          let $ = cheerio.load(res.text);

          let articalList = $('.titlelink a')
          let tasks = []
          articalList.each((idx, element) => {
            let $element = $(element);
            let articleHref = $element.attr('href');
            if (!articleHref) return;
            let href = url.resolve(spider_url, articleHref);
            tasks.push(this.getArticleDetails(href, articleHref, subfix))
          })

          Promise.all(tasks).then(res => {
            let result = {
              result: true,
              spiderUrl: spider_url,
              successCount: 0,
              failedCount: 0,
              error: []
            }
            res && res.forEach(item => {
              if (item.result) {
                result.successCount++
              } else {
                result.failedCount++;
                result.error.push(item)
              }
            })
            resolve(result)
          }).catch(error => {
            resolve({ result: false, message: 'spider action failed', error: error })
          })
        })
    })
  }

  getMobileHupuImages(spider_url) { 
    return new Promise((resolve) => {  
      superagent.get(spider_url)
        .end((err, res) => {
          if (err) {
            console.error(err)
            return;
          }

          let $ = cheerio.load(res.text);

          let articalList = $('.common-list a')
          let tasks = []
          articalList.each((idx, element) => {
            let $element = $(element);
            let articleHref = $element.attr('href');
            if (!articleHref) return;
            let href = url.resolve(spider_url, articleHref);
            tasks.push(this.getArticleDetails(href, articleHref))
          })

          Promise.all(tasks).then(res => {
            let result = {
              result: true,
              spiderUrl: spider_url,
              successCount: 0,
              failedCount: 0,
              error: []
            }
            res && res.forEach(item => {
              if (item.result) {
                result.successCount++
              } else {
                result.failedCount++;
                result.error.push(item)
              }
            })
            resolve(result)
          }).catch(error => {
            resolve({ result: false, message: 'spider action failed', error: error })
          })
        })
    })
  }

  insertArticle(article) {
    return new Promise(resolve => {
      HupuDao.insertHupuImages(article).then(res => {
        resolve({ result: true, message: 'insert into table ok' })
      }).catch(err => {
        resolve({ result: false, message: 'this item failed', error: err })
      })
    })
  }

  getArticleDetails(href, articleHref) { 

    const datePath = dateUtils.getCurrentDate();
    const staticPath = '../public'
    const webpath = '/upload/' + datePath + '/' 
    let subfix = staticPath + webpath
    let outPath = path.resolve(__dirname, subfix);  
    const qiniu = new Qiniu()
    //console.log('outPath', outPath)
    return new Promise( (resolve, reject) => {
      superagent.get(href)
        .end( async(error, resp) => {
          if (error) {
            console.error(error)
            resolve({
              href: href,
              error: error,
              result: false
            })
            return;
          }
          let $ = cheerio.load(resp.text);
          let title = $('header .headline').text(); // 帖子标题
          let avatar = $('.detail-content .detail-author img').attr('src'); // 用户头像
          let username = $('.detail-content .author-name a').text(); // 用户名称
 
          await qiniu.fetchWebUrl(avatar, username)
          avatar = await qiniu.getPublicDownloadUrl(username)

         
          let stime =  dateUtils.translateHupuTime($('header .times').text()); // 文章发帖时间  
          let timestamp = new Date().getTime().toString()
          let article = {
            id: Number(timestamp.substr(5, timestamp.length - 1) + articleHref.replace(/[^0-9]/ig, "")),
            articleid: Number(articleHref.replace(/[^0-9]/ig, "")) || +new Date(),
            title: title || '无标题',
            avatar: avatar,
            username: username,
            articleTime: stime,
            sourceUrl: href,
            images: []
          } 
          $('.article-content .article-deposit-pic').each(async (id, ele) => {
            let $ele = $(ele);
            let src = $ele.attr('src') || $ele.attr('data-src');
            let url = src.split('?x-oss-process=image').slice(0, 1).join('');
            let opts = { url };

            let fileName = article.articleid + '-' + id + '-' + url.split('/').slice(-1)

            let entity = this.filedao.getInstance()
            entity.filename = fileName
            entity.masterid = article.articleid
            entity.sourceUrl = src
            entity.path = outPath  + '/' + fileName
            entity.fullpath = webpath + fileName
            article.images.push(url)
            await this.saveIntoFile(entity, id, opts, outPath, fileName) 
          })
          resolve(this.insertArticle(article))
        })
    })
  }

  async saveIntoFile(entity, id, opts, outPath, fileName) {
    try {
      const qiniu = new Qiniu()
      // let res = await FileUtils.downloadImage(opts, outPath, fileName)
      const result = await FileUtils.getImageInfo(opts.url)
      let res = await qiniu.fetchWebUrlPlus(opts.url, fileName)
      entity.fullpath =  res.url
      entity.width = result.width
      entity.height = result.height
      entity.fileSize = ~~(result.length || res.length) 
      entity.filetype = res.type || result.mime
      setTimeout(() => {
        this.filedao.insertFile(entity).then(result => {
          //console.log(result)
        })
      }, id * 200)
    } catch (e) {
      console.error(e)
    } 
  }

}

module.exports = Sipder 
