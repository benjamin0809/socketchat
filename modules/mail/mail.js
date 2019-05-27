const nodemailer = require('nodemailer');


// 设置邮件内容（谁发送什么给谁）
const defaultMailOptions = {
  from: '"benjamin 👻" <benjamin_0809@163.com>', // 发件人
  to: '894306909@qq.com', // 收件人
  subject: 'Hello ✔', // 主题
  text: '这是一封来自 Node.js 的测试邮件', // plain text body
  html: '<b>这是一封来自 Node.js 的测试邮件</b>' // html body
  // 下面是发送附件，不需要就注释掉 
};
class Mail{
   
  constructor(){
    this.mailTransport = nodemailer.createTransport({
      host: 'smtp.163.com',
      port: 25,
      auth: {
          user: 'benjamin_0809@163.com',
          pass: 'Mrz08090'
      }
    });
  }

  
  sendEmail(from, to, subject, text, html){ 
    let param = {
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html
    }
    return new Promise((resolve, reject) =>{
      this.mailTransport.sendMail(param, (error, info) => {
        if (error) {
            console.error(error);
            reject(error)
            return;
        } 
        resolve(info);
    });
    }) 
  }

  /**
   * 发送邮件到带附件
   * @param {*} from 
   * @param {*} to 
   * @param {*} subject 
   * @param {*} text 
   * @param {*} html 
   * @param {*} attachments 
   */
  sendEmailWithAttachments(from, to, subject, text, html, attachments ){ 
    let param = {
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html,
      attachments: attachments
    }
    return new Promise((resolve, reject) =>{
      this.mailTransport.sendMail(param, (error, info) => {
        if (error) {
            console.error(error);
            reject(error)
            return;
        } 
        resolve(info);
      }); 
    })  
  }
}
 
module.exports = Mail