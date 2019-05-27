const nodemailer = require('nodemailer');

const config = require('../../config/dev.conf')
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
    // this.mailTransport = nodemailer.createTransport({
    //   host: 'smtp.163.com',
    //   port: 25,
    //   auth: {
    //       user: 'benjamin_0809@163.com',
    //       pass: 'Mrz08090'
    //   }
    // });

    this.mailTransport = nodemailer.createTransport({
      // host: 'smtp.ethereal.email',
      service: 'qq', // 使用了内置传输发送邮件 查看支持列表：https://nodemailer.com/smtp/well-known/
      port: 465, // SMTP 端口
      secureConnection: true, // 使用了 SSL
      auth: {
        user: config.mail.user,
        // 这里密码不是qq密码，是你设置的smtp授权码
        pass: config.mail.pass,
      }
    }); 
    
  }

  
  sendEmail(aliasName, to, subject, text, html, attachments){  
    aliasName = aliasName ? `${aliasName}<${config.mail.user}>` : config.mail.user
    let param = {
      from: aliasName,
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