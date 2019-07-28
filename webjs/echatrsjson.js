var Pieoption = {
    series: [{
        name: '股东及占股比例',
        type: 'pie',
        radius: [30, 120],
        center: ['50%', '50%'],
        roseType: 'area',
        data: [{
                value: 4,
                name: '北京麦顿投资管理有限公司  4%'
            },
            {
                value: 3,
                name: '深圳前海大方资产管理有限公司  3%'
            },
            {
                value: 1,
                name: '江苏省可再生能源行业协会  1%'
            },
            {
                value: 3,
                name: '迪盛四联新能源有限公司  3%'
            },
            {
                value: 4,
                name: '北京优航金服科技有限责任公司  4%'
            },
            {
                value: 6,
                name: '深圳市正阳投资发展有限公司  6%'
            },
            {
                value: 33,
                name: '浙江宏伟供应链集团股份有限公司  33%'
            },
            {
                value: 8,
                name: '深圳核新投资有限公司  8%'
            },
            {
                value: 10,
                name: '国新华信（上海）资产管理有限公司  10%'
            },
            {
                value: 28,
                name: '中核高光宏通（深圳）有限公司   28%'
            }
        ],
        itemStyle: {
            normal: {
                color: function (params) { // 传入的是数据项 seriesIndex, dataIndex, data, value 等各个参数。
                    var colorList = ['#39C8C8', '#B6A2DC', '#5EB2ED', '#FDB884', '#D67981', '#8D98B2', '#E4CF30', '#98B558', '#94706E', '#DA68A9'];
                    return colorList[params.dataIndex];

                },
            },

        }

    }]
};
// 使用刚指定的配置项和数据显示图表。
if ($('#partnermain').length>0) {
	var istrue1=true;
	var winH=$(window).height();
	var offset1=$("#partnermain").offset().top;
	$(window).resize(function(){
		winH=$(window).height();
	})
	if(istrue1){
		if($(window).scrollTop()>offset1-winH*3/4){
		    var PieChart = echarts.init(document.getElementById('partnermain'));
		    PieChart.setOption(Pieoption);
		    istrue1=false;
	   	}else{
	   		$(window).scroll(function(){
	   			if(istrue1){
	   				if($(window).scrollTop()>offset1-winH*3/4){
					    var PieChart = echarts.init(document.getElementById('partnermain'));
					    PieChart.setOption(Pieoption);
					    istrue1=false;
				   	}
	   			}
	   		})
	   	}
   	}
}

//平台数据
var Investmentoption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    textStyle: {
        lineHeight: 30,
        color: "#999999",
        fontSize: 14
    },
    legend: {
        show: false
    },
    grid: {
        left: '8.6%',
        right: '4%',
        bottom: '6.34%',
        containLabel: false
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: "#c5cdcc"
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
        type: 'value',
        name: '投资金额（万元）',
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: "#c5cdcc"
            }
        }
    },
    series: [{
            type: 'line',
            areaStyle: {
                normal: {
                    color: 'rgba(141,216,200,.1)'
                    // color: '#8bd8c8'
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgba(141,216,200,1)'
                }
            },
            symbolSize: 8,
        }
    ]
};
var AmountInvestmentData = {
    yAxis: {
        name: '投资金额（万元）',
    },
    series: [{
        name: '投资金额表',
        data: [3000, 5000, 4900, 6000, 5500, 7800, 7400, 8200, 10800, 9000, 8900, 12800],
    }]
}
var NumberInvestmentData = {
    yAxis: {
        name: '投资笔数（笔）',
    },
    series: [{
        name: '投资笔数表',
        data: [10, 2, 1, 20, 1, 5, 7, 4, 8, 11, 21, 18],
    }]
}
var AmountInvestmentoption = $.extend(true,{}, Investmentoption, AmountInvestmentData);
var NumberInvestmentoption = $.extend(true,{}, Investmentoption, NumberInvestmentData);

// 投资金额表  投资笔数表
if ($('#Investment-panel').length) {
    var chartpanel = echarts.init(document.getElementById('Investment-panel'));
    // default
    chartpanel.setOption(AmountInvestmentoption);
    // 点击切换
    $('.investment-tab a').on('click',function(){
        $(this).addClass('cur').siblings().removeClass('cur');
        var clickInvestment = !$(this).index()? AmountInvestmentoption : NumberInvestmentoption;
        chartpanel.setOption(clickInvestment);
    });
    //  时间切换
    // $('.Investment-box .select-year').on('change', function () {
    //     chartpanel.setOption(Investmentoption);
    // });
}