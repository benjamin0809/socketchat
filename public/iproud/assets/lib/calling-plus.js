var calling = {};

var em = null 
if(typeof EventEmitter != "undefined"){
  em = new EventEmitter(); 
}

const ThemeableBrowserReg = /app\/iproud(.*?)\/ThemeableBrowser/ig
if(navigator.userAgent.match(ThemeableBrowserReg)){
  console.log('support ThemeableBrowser interface')
  var AndroidNativeApi = window.Android;
  (function () {
    function setTitle(text, color) {
      var o = { textEmpty: false, text: text, color: color}
      if(!text) {
        o.textEmpty = true
      }
      if(!color) {
        o.color = ''
      }
      AndroidNativeApi.setTitle(JSON.stringify(o))
    }

    
  function longToast() {
    var o = { content: 'longToast', duration: 1}
    AndroidNativeApi.showToast(JSON.stringify(o))
  }

  function shortToast() {
    var o = { content: 'shortToast', duration: 0}
    AndroidNativeApi.showToast(JSON.stringify(o))
  }

  function setWebviewTop() {
    AndroidNativeApi.setWebviewTop(100)
  }

  function setStatusbarTextDark() {
    AndroidNativeApi.setStatusbarTextDark(100)
  }

  function setContentFullscreen(fullscreen) {
    var o = {
      fullscreen: fullscreen
    }
    AndroidNativeApi.setContentFullscreen(JSON.stringify(o))
  } 
  function setToolBarBackground(transparent, backgroundColor) {
    var o = {
      transparent: transparent,
      backgroundColor: backgroundColor
    }
    if(!backgroundColor) {
      o.backgroundColor = ''
    }
   
    AndroidNativeApi.setToolBarBackground(JSON.stringify(o))
  } 

  function setHeaderColor(backgroundColor) {
    setToolBarBackground(false,backgroundColor)
  }
  function setStatusBarColor() {
    AndroidNativeApi.setStatusBarColor('')
  } 

  function setStatusbarTextDark(fontIconDark) {
    var o = {
      fontIconDark: fontIconDark
    }
    AndroidNativeApi.setStatusbarTextDark(JSON.stringify(o))
  } 

  function closeWindow() {
    AndroidNativeApi.closeWindow()
  }  
  function reload() {
    AndroidNativeApi.reload()
  }  
  function back() {
    AndroidNativeApi.back()
  }  


  function undefinedFunc () {
    console.log('undefined method')
  }
    calling.closeWindow = closeWindow;
    calling.reload = reload;
    calling.back = back;

    calling.setTitle = setTitle; 
    calling.toggleContentFullscreen = setContentFullscreen;
    calling.toggleHeaderTransparent = setToolBarBackground;
    calling.setStatusBarTextDark = setStatusbarTextDark;
    calling.showToast = shortToast;
    calling.setHeaderColor = setHeaderColor; 
    calling.setIframeIosCss = closeWindow;

    calling.setIframeOuterCss = undefinedFunc;
    calling.previewPicture = undefinedFunc;
    calling.shareToWechat = undefinedFunc; 
    calling.shareWxTimeLine = undefinedFunc;
    calling.shareWxSession = undefinedFunc;
    calling.iProgressStart = undefinedFunc;
    calling.iProgressDone = undefinedFunc;
    calling.setHeaderVisibility = undefinedFunc;
    calling.toggleBrowserPopover = undefinedFunc;
    calling.enabledWebpageReload = undefinedFunc; 
    calling.showLoading= undefinedFunc; 
    calling.enableComplaint= undefinedFunc; 

  })();


  var pathname = document.location.pathname.split("/").pop();
      var hideHeaderPages = ["Index", "MemberHomePage","VideoDetail"];
      var hideHeader = hideHeaderPages.some(function (item) {
        return pathname === item;
      }); 
      toggleContentFullscreen(hideHeader);
      toggleHeaderTransparent(hideHeader);


  window.onbeforeunload = function (e) {
    calling.setTitle("");
  };

  /**离开页面时事件 ios专用 */
  window.onpagehide = function (event) {
    calling.setTitle("");
  };

} else {
  (function () {
    // var init = function () {
    window.addEventListener(
      "message",
      function (event) {
        var _event$data = event.data,
          method = _event$data.method,
          params = _event$data.params;
  
        if (method == "keyHeight") {
          window.keyboardHeight = params.keyHeight > window.keyboardHeight ? keyboardHeight : window.keyboardHeight
        } else if (method == "HeaderHeight") {
          
          window.headerHeight = params.headerHeight;
          var old = ~~localStorage.getItem("iproud-browser-header-height");
          if (params.headerHeight > 0) {
            window.headerHeight = Math.max(old, params.headerHeight)
            localStorage.setItem(
              "iproud-browser-header-height",
              window.headerHeight
            );
          } 
          setTimeout(function(){ 
            em.emit("HeaderHeight"); 
          },1)
         
        } else if (method == "shareToWechat") {
          if (params.success) { 
            em.emit("share");
          }
        } else if (method == "ReloadEvent") {
          location.reload()
        } else if (method == "openComplaint") { 
          var postID = new URL(location.href).searchParams.get('postId')
          if(postID > 0){
            location.href = '/Community/Post/Complaint?postId=' + postID
          } 
        }
      },
      false
    ); // }
    // init()
  
    /**
     * 發送消息到員寶APP內
     * @param {*} method
     * @param {*} data
     */
  
    var postMessage = function postMessage(method, data) {
      if (!method) return;
      var postdata = {
        method: method,
        params: {
          currentUrl: window.location.href
        }
      };
  
      if (data && Object.keys(data).length > 0) {
        Object.assign(postdata.params, data);
      }
  
      top.postMessage(postdata, "*");
    };
    /**
     * 開始加載滾動條
     * 注： 調用此方法必須調用iProgressDone 完成滾動條
     */
  
    var iProgressStart = function iProgressStart() {
      postMessage("iProgressStart");
    };
    /**
     * 結束滾動條
     */
  
    var iProgressDone = function iProgressDone() {
      postMessage("iProgressDone");
    };
    /**
     * 設置員寶內iframe內容為全屏
     * @param {*} fullscreen
     */
  
    var toggleContentFullscreen = function toggleContentFullscreen(fullscreen) {
      postMessage("setContentFullscreen", {
        fullscreen: fullscreen
      });
    };
    /**
     * 設置員寶內iframe頭部為透明
     * @param {*} fullscreen
     */
  
    var toggleHeaderTransparent = function toggleHeaderTransparent(transparent) {
      postMessage("setHeaderTransparent", {
        transparent: transparent
      });
    };
    /**
     * 分享到朋友圈
     * @param {*} title
     * @param {*} description
     * @param {*} thumb
     * @param {*} resource
     */
  
    var shareWxTimeLine = function shareWxTimeLine(
      title,
      description,
      thumb,
      resource
    ) {
      _share("shareWxTimeLine", title, description, thumb, resource);
    };
    /**
     *  分享到微信
     * @param {*} title 標題
     * @param {*} description 描述
     * @param {*} thumb 縮略圖
     * @param {*} resource 要分享的鏈接
     */
  
    var _share = function _share(type, title, description, thumb, resource) {
      postMessage(type, {
        title: title,
        //标题
        description: description,
        //描述，
        thumb: thumb,
        //缩略图
        resource: resource //图片url或网页url
      });
    };
    /**
     * 分享到朋友圈
     * @param {*} title
     * @param {*} description
     * @param {*} thumb
     * @param {*} resource
     */
  
    var shareWxSession = function shareWxSession(
      title,
      description,
      thumb,
      resource
    ) {
      _share("shareWxSession", title, description, thumb, resource);
    };
    /**
     * 關閉當前窗口
     */
  
    var closeWindow = function closeWindow() {
      postMessage("close");
    };
    /**
     * 設置標題
     * @param {*} title
     * @param { string } style
     */
  
    var setTitle = function setTitle(title, style) {
      document.title = title
      postMessage("setTitle", {
        title: title,
        style: style
      });
    };
    /**
     * 設置iframe頭部是否顯示
     * @param {*} visibility
     */
  
    var setHeaderVisibility = function setHeaderVisibility(visibility) {
      postMessage("setHeaderVisibility", {
        visibility: visibility
      });
    };
    /**
     * 設置iframe 選項是否顯示
     * @param {*} show
     */
  
    var toggleBrowserPopover = function toggleBrowserPopover(show) {
      postMessage("toggleBrowserPopover", {
        show: show
      });
    };
    /**
     * 設置頭部顏色
     * @param {*} bgcolor eg:rgba(255,255,255,1)
     */
  
    var setHeaderColor = function setHeaderColor(bgcolor) {
      postMessage("setHeaderColor", {
        bgcolor: bgcolor
      });
    };
  
    var refreshLocation = function refreshLocation() {
      postMessage("refreshLocation", {});
    };
    /**
     * 获取browser内高度
     * @param {*} bgcolor eg:rgba(255,255,255,1)
     */
  
    var getBrowserHeight = function getBrowserHeight() {
      postMessage("getBrowserHeight", {});
    };
    /**
     * 获取browser内高度
     * @param {*} bgcolor eg:rgba(255,255,255,1)
     */
  
    var setIframeOuterCss = function setIframeOuterCss(style) {
      postMessage("setIframeOuterCss", {
        style: style
      });
    };
    /**
     * 获取browser内高度
     * @param {*} bgcolor eg:rgba(255,255,255,1)
     */
  
    var setIframeIosCss = function setIframeIosCss(style) {
      postMessage("setIframeIosCss", {
        style: style
      });
    };
    /**
     * 预览图片
     * @param  {Array<{pictureUrl: string} } images eg: [{pictureUrl: http://xxxx}]
     * @param {*} index 从第几张开始预览
     */
  
    var previewPicture = function previewPicture(images, index) {
      postMessage("previewPicture", {
        images: images,
        index: index
      });
    };
  
    /**
     * 是否启用网页自动刷新
     * @param enabled 
     */
    var enabledWebpageReload = function (enabled) {
      postMessage("enabledWebpageReload", {
        enabled: enabled,
      });
    };
  
    /**
     * 是否显示loading
     * @param show 
     */
    var showLoading = function (show) {
      postMessage("showLoading", {
        show: show,
      });
    };
  
    
    /**
     * 显示toast
     * @param desc 
     */
    var showToast = function (desc) {
      postMessage("showToast", {
        desc: desc,
      });
    };
  
  
    
  
    /**
     * 
     * @param {*} shareMessage 
     *  let ShareMessage = {
        title: string  //标题
        description?: string //描述
        thumb?: string; //缩略图
        resource: string //图片url或网页url
      } 
     * @param {*} navigationDockTargetMapIds  //數組為空時默認顯示全部類型:1-微信 2-朋友圈 3-微博 4-刷新 5-複製鏈接 6-收藏
     * @param {*} qrcode 是否显示二维码
     * @param {*} isShareImage 是否分享图片
     */
  
    var shareToWechat = function shareToWechat(
      shareMessage,
      navigationDockTargetMapIds,
      qrcode,
      isShareImage
    ) {
      postMessage("shareToWechat", {
        shareModel: {
          shareMessage: shareMessage,
          navigationDockTargetMapIds: navigationDockTargetMapIds,
          qrcode: qrcode,
          isShareImage: isShareImage
        }
      });
    };
    /**
     * 设置状态栏颜色
     * @param {*} dark 是否为dark
     */
  
    var setStatusBarTextDark = function setStatusBarTextDark(dark) {
      postMessage("setStatusBarTextDark", {
        dark: dark
      });
    };
  
    /**
     * 顯示投訴按鈕
     * @param {*} show 
     */
    var enableComplaint = function(show) {
      postMessage("enableComplaint", {
        show: show
      });
    };
  
    var setHeaderHeight = function (){
      var height = localStorage.getItem("iproud-browser-header-height") || (44 + 20 + (isIphoneX() ? 24 : 0));
      document.body && (document.body.style.paddingTop = height + "px");
    }
    calling = {
      iProgressStart: iProgressStart,
      iProgressDone: iProgressDone,
      toggleContentFullscreen: toggleContentFullscreen,
      toggleHeaderTransparent: toggleHeaderTransparent,
      shareWxTimeLine: shareWxTimeLine,
      shareWxSession: shareWxSession,
      closeWindow: closeWindow,
      setTitle: setTitle,
      setHeaderVisibility: setHeaderVisibility,
      toggleBrowserPopover: toggleBrowserPopover,
      setHeaderColor: setHeaderColor,
      setIframeIosCss: setIframeIosCss,
      setIframeOuterCss: setIframeOuterCss,
      previewPicture: previewPicture,
      shareToWechat: shareToWechat,
      setStatusBarTextDark: setStatusBarTextDark,
      enabledWebpageReload: enabledWebpageReload,
      showLoading: showLoading,
      showToast: showToast,
      enableComplaint: enableComplaint
    };
  
    if (window !== top) {
      showLoading(false)
      getBrowserHeight();
      refreshLocation();
      enabledWebpageReload(true)
      enableComplaint()
      var pathname = document.location.pathname.split("/").pop();
      var hideHeaderPages = ["Index", "MemberHomePage","VideoDetail"];
      var hideHeader = hideHeaderPages.some(function (item) {
        return pathname === item;
      }); 
      toggleContentFullscreen(hideHeader);
      toggleHeaderTransparent(hideHeader);
  
      if (!hideHeader) { 
        em.once("HeaderHeight",function(){ 
          if( window.isVideoPage) return
          setHeaderHeight()
          setStatusBarTextDark(true); 
        });   
        //setHeaderHeight() 
  
      } else {
        setStatusBarTextDark(false);
      }
  
      window.onload = function () {
        iProgressDone();
      }
  
  
      /**离开页面时事件  */
      window.onbeforeunload = function (e) {
        iProgressStart();
        setTitle("");
      };
  
      /**离开页面时事件 ios专用 */
      window.onpagehide = function (event) {
        iProgressStart();
        setTitle("");
      };
    }
  })();
}
