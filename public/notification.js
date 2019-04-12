function Notice (){
  this.canNotice = false
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  // 检查用户是否同意接受通知
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    this.canNotice = true;
  }

  // 否则我们需要向用户获取权限
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // 如果用户同意，就可以向他们发送通知
      if (permission === "granted") {
        this.canNotice = true;
      }
    });
  } 
  let that = this
  Notice.prototype.sendNotification = function(title,option,onclick){
    if(!that.canNotice)return;
    let notification = new Notification(title,option);
    if (typeof onclick == 'function'){
      notification.onclick = onclick
    }
  } 
};
 