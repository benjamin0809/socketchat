function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}


function getLanguage() {
    return localStorage.getItem('lang') || navigator.language.toLowerCase()
}

function generateData() {
    var steps = ~~(Math.random() * 10) + 5
    console.log(Date.now() )
    for(var i = 0; i < steps; i ++ ) { 
    }

    var data = [{
        datatime: '02-22 07:15',
        status: '已下单',
        desc: '您的订单开始处理'
    },
    {
        datatime: '02-22 09:15',
        status: '已出库',
        desc: '您的包裹已出库'
    },
    {
        datatime: '02-22 09:18',
        status: '已发货',
        desc: '包裹正在等待揽收'
    },
    {
        datatime: '02-22 15:12',
        status: '已揽件',
        desc: '河北省石家庄市深泽县公司 已收件'
    },
    {
        datatime: '02-22 16:38',
        status: '',
        desc: '河北省石家庄市深泽县公司 已打包'
    }
    ,
    {
        datatime: '02-22 16:45',
        status: '',
        desc: '【河北省石家庄市深泽县】 已发出 下一站 【石家庄转运中心】'
    }
    ,
    {
        datatime: '02-22 20:55',
        status: '',
        desc: '【石家庄转运中心公司】 已收入'
    }
    ,
    {
        datatime: '02-23 05:08',
        status: '',
        desc: '【石家庄转运中心】 已发出 下一站 【深圳转运中心】'
    } 

    ]
    return data.reverse()
}