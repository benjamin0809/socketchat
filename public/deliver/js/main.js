
    var passed = '&#xe63f;'
    var current = '&#xe617;'
    if (IsPC()) {
      //  若果是pc端
      document.body.classList.add('desktop')
    } else {
      //  移动端
      document.body.classList.add('mobile')  
    }

    function saveReport() {
        $('#submit').attr('disabled', true)
      $('#data').empty()
      // $('.result-list').empty()  
      submitForm().then(data => {
        successAppend(data)
        // newAppend(data)
        $('#submit').attr('disabled', false)
      }).catch(err => {
        failedAppend()
        $('#submit').attr('disabled', false)
      })
      return false; // 必须返回false，否则表单会自己再做一次提交操作，并且页面跳转
    }
 
    function successAppend(data) {
      for (var i = 0; i < data.length; i++) {
        var str = `<li class="layui-timeline-item">
              <i class="layui-icon layui-timeline-axis">${i == 0 ? current : passed}</i>
              <div class="layui-timeline-content layui-text">
                <h3 class="layui-timeline-title">${data[i].datatime}</h3>
                <p>${data[i].desc}
                </p> 
              </div>
            </li>`
        $('#data').append(str)
      }
    }


    // function newAppend(data) {
    //   for (var i = 0; i < data.length; i++) {
    //     var str = `<li class="${i == 0 ? 'last' : ''}">
    //         <div class="time">
    //           <div>${data[i].datatime}</div>
    //           <div>${data[i].datatime}</div>
    //         </div>
    //         <div class="dot"></div>
    //         <div class="text">${data[i].desc}</div>
    //       </li>`
    //     $('.result-list').append(str)
    //   }
    // }
    
    function failedAppend() {
      var str = ` 
              <div class="layui-timeline-content layui-text nodata">
                  未追踪到订单
              </div> `
      $('#data').append(str)
    }

    function submitForm() {
      return new Promise((resolve, reject) => {
        if (Math.random() > 0.3) {
          setTimeout(function () {
            resolve(generateData())
          }, Math.random() * 1000)
        } else {
          reject(false)
        }
      })
    }

    var searchParams = new URLSearchParams(location.search)
    var nu = searchParams.get('nu')
    if (nu) {
      $('#queryno').val(nu)
      saveReport()
    }
