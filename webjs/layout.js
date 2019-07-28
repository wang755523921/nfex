$(function() {
	var winW = $(window).width();
	var winH = $(window).height();
	var headerH = $(".header").innerHeight();
	var footerH = $(".footer").innerHeight();

	function mainerh() {
		$(".mainer").css({
			"min-height": winH - headerH - footerH
		});
	}
	mainerh();
	$(window).resize(function() {
		winW = $(window).width();
		winH = $(window).height();
		mainerh();
	})

	$(".headmember").hover(function(){
		$(this).find(".headmemberbtns").stop().slideDown()
	},function(){
		$(this).find(".headmemberbtns").stop().slideUp()
	})
	
	$(".memberleftnav ul li").each(function(){
		if($(this).find(".twoa a").length>0){
			$(this).addClass("hastwo");
		}
		if($(this).find(".twoa a.cur").length>0){
			$(this).find(".twoa").show();
			$(this).addClass("show");
		}
	})
	$(".memberleftnav ul li.hastwo .onea").click(function(){
		var _this=$(this).parents("li");
		var _thisP=$(this).parents("ul");
		if(_this.hasClass("show")){
			_this.removeClass("show");
			_this.find(".twoa").stop().slideUp();
		}else{
			_thisP.find("li").removeClass("show");
			_thisP.find(".twoa").stop().slideUp();
			_this.addClass("show");
			_this.find(".twoa").stop().slideDown();
			
		}
	})

	function textroll() {
		$(".indexpublicity ul").animate({
			"margin-top": "-36px"
		}, 500, function() {
			$(".indexpublicity ul li:first").appendTo($(".indexpublicity ul"));
			$(".indexpublicity ul").css({
				"margin-top": 0
			});
		})
	}
	if($(".indexpublicity ul li").length > 1) {
		var indexT = setInterval(function() {
			textroll()
		}, 3000);

		$(".indexpublicity ul").hover(function() {
			clearInterval(indexT)
		}, function() {
			indexT = setInterval(function() {
				textroll()
			}, 3000);
		})
	}
	
	$(".indexlump1T ul li,.financialzoneM .investmentsection,.financialzoneM .transfersection,.noticelist dl,.infeedflow2 ul li,.datalist1 li,.groupbtns1 li").eq(0).addClass("firsti");
	
	$(".progressbar").each(function(){
		var ltop1=$(this).offset().top;
		var winS=$(window).scrollTop();
		if(ltop1>10){
			if(winS>ltop1-winH*3/4){
				var num1=parseFloat($(this).attr("num"));
				if(num1>100){num1=100};
				$(this).find(".bar").animate({"width":num1+"%"},800);
				$(this).addClass("showt");
			}
		}
	})
	$(window).scroll(function(){
		$(".progressbar").each(function(){
			if(!$(this).hasClass("showt")){
				var ltop1=$(this).offset().top;
				var winS=$(window).scrollTop();
				if(winS>ltop1-winH*3/4){
					var num1=parseFloat($(this).attr("num"));
					if(num1>100){num1=100};
					$(this).find(".bar").animate({"width":num1+"%"});
				}
			}
		})
	})
	
	$(".financialzone").each(function(){
		$(this).find(".yieldcutbtn a").eq(0).addClass("cur");
		$(this).find(".financialzoneM .cutlump").eq(0).show();
		$(this).find(".yieldcutbtn a").hover(function(){
			$(this).addClass("cur").siblings().removeClass("cur");
			$(this).parents(".financialzone").find(".financialzoneM .cutlump").hide();
			$(this).parents(".financialzone").find(".financialzoneM .cutlump").eq($(this).index()).show();
		})
	})
	
	$(".imgcutbox6").each(function(){
		var _this=$(this);
		clickHonce4(".prevbtn", ".nextbtn", _this, 6);
	})
	$(".rightfloat a.telbox").hover(function(){
		$(this).find(".tel").stop().animate({"width":128},300);
	},function(){
		$(this).find(".tel").stop().animate({"width":0},300);
	})
	$(".returntopbtn").click(function(){
		$("html,body").stop().animate({scrollTop:0},300);
	})
	function rightfloatp(){
		if(winW>1440){
			$(".rightfloat").removeClass("small");
		}else{
			$(".rightfloat").addClass("small");
		}
	}
	rightfloatp();
	$(window).resize(function() {
		rightfloatp();
	})

	$(document).on("click",".passwordlabel .cbtn1",function(){
		var _this=$(this).parents(".passwordlabel").find("input");
		var _thisP=$(this).parents(".passwordlabel");
		var val1=_this.val();
		val1=val1.replace(/\W/g,"");
		if($(this).hasClass("ligt")){
			$(this).removeClass("ligt");
			_this.attr("type","password");
			_this.val(val1);
		}else{
			$(this).addClass("ligt");
			_this.attr("type","text");
			_this.val(val1);
			_this.attr("value",val1);
		}
	})
	$(document).on("blur",".passwordlabel input[type=text]",function(){
		var val1=$(this).val();
		val1=val1.replace(/\W/g,"");
		console.log(val1);
		$(this).attr("value",val1);
		$(this).val(val1);
	})
	$(".infeedflow").each(function(){
		$(this).find("ul li:first-child").addClass("firsti");
		$(this).find("ul li:last-child").addClass("lasti");
	})
	$(document).on("click",".selectbox .name1",function(){
		var _thisP=$(this).parents(".selectbox");
		if(_thisP.hasClass("show")){
			_thisP.removeClass("show")
			_thisP.find(".select").stop().slideUp();
		}else{
			_thisP.addClass("show")
			_thisP.find(".select").stop().slideDown();
		}
	})
	$(document).on("mouseleave",".selectbox",function(){
		$(this).removeClass("show")
		$(this).find(".select").stop().slideUp();
	})
	$(document).on("click",".selectbox .select li",function(){
		var _thisP=$(this).parents(".selectbox");
		var html1=$(this).html();
		_thisP.find(".select").stop().slideUp();
		_thisP.find(".name1").html(html1);
	})
	$(document).on("click",".uploadM img",function(){
		$(this).parents(".uploadM").find("input").click();
	})
	$(".checkbox").each(function(){
		var _this=$(this);
		if($(this).find("input[type=checkbox]").is(':checked')){
			_this.addClass("cur");
		}else{
			_this.removeClass("cur");
		}
	})
	$(document).on("click",".checkbox input[type=checkbox]",function(){
		var _this=$(this).parents(".checkbox");
		if(_this.find("input[type=checkbox]").is(':checked')){
			_this.addClass("cur");
		}else{
			_this.removeClass("cur");
		}
	})
	$(".checkbox2").each(function(){
		var _this=$(this);
		if($(this).find("input[type=checkbox]").is(':checked')){
			_this.addClass("cur");
		}else{
			_this.removeClass("cur");
		}
	})
	$(document).on("click",".checkbox2 input[type=checkbox]",function(){
		var _this=$(this).parents(".checkbox2");
		if(_this.find("input[type=checkbox]").is(':checked')){
			_this.addClass("cur");
		}else{
			_this.removeClass("cur");
		}
	})
	$(".myloan").find(".infeedcutbox2 ul li").eq(0).addClass("cur");
	$(".myloan").find(".cutlump").eq(0).show();
	$(".myloan").find(".infeedcutbox2 ul li").click(function(){
		var _thisP=$(this).parents(".myloan");
		$(this).addClass("cur").siblings().removeClass("cur");
		_thisP.find(".cutlump").hide();
		_thisP.find(".cutlump").eq($(this).index()).show();
	})
	cutP();
	
	$(".filterbtn").click(function(){
		if($(".filterlist").is(":hidden")){
			$(".filterlist").slideDown();
		}else{
			$(".filterlist").slideUp();
		}
	})
	$(document).on("click",".slideupbtn",function(){
		$(this).parents(".filterlist").slideUp();
	})
	$(".starbox6").each(function(){
		var _this=$(this);
		var nums=_this.attr("num");
		for(var i=0;i<nums;i++){
			_this.find(".star").eq(i).addClass("cur");
		}
	})
	if($(".Line").length>0){
		$(".Line").each(function(){
			var _this=$(this);
			_this.attr("bolExec",false);
			numscroll(_this);
		})
		$(window).scroll(function () {
			$(".Line").each(function(){
				var _this=$(this);
				numscroll(_this);
			})
	
	    })
	}
	function numscroll(_this){
        var Current = _this.offset().top;
		var bolExec=_this.attr("bolExec");
		
        if ($(document).scrollTop() > Current- winH*2 / 3 && bolExec == "false") {
            var line = _this;
            function Animate() {
                var  a = 0, v = _this.attr("num") - 0, _time = 100, vLen = (v + "").length;
                var t = setInterval(function () {
                    a += 1;
                    var pi = parseInt(v / 100 * a);
                    var text = "";
                    for (var j = 0; j < vLen - (pi + "").length; j++)
                        text += 0;
                    _this.text(text + pi);
                    if (a >= _time)
                        clearInterval(t);
                }, 1);
            }
            Animate();

            _this.attr("bolExec",true);
        }
    }
	if($(".increasnum").length>0){
		$(".increasnum").each(function(){
			var _this=$(this);
			_this.attr("bolExec",false);
			numscroll2(_this);
		})
		$(window).scroll(function () {
			$(".increasnum").each(function(){
				var _this=$(this);
				numscroll2(_this);
			})
	
	    })
	}
	function numscroll2(_this){
        var Current = _this.offset().top;
		var bolExec=_this.attr("bolExec");
		
        if ($(document).scrollTop() > Current- winH*5 / 6 && bolExec == "false") {
            var line = _this;
            function Animate() {
                var  a = 0, v = _this.attr("num") - 0, _time = 100, vLen = (v + "").length;
                var t = setInterval(function () {
                    a += 1;
                    var pi = parseInt(v / 100 * a);
                    var text = "";
                    var piL=(pi+"").length;
                    if(piL>6){
                    	pi=(pi+"").replace(/(.{1,99})(.{6})/g,'$1,$2');
                    }
                    if(piL>3){
                    	pi=(pi+"").replace(/(.{1,99})(.{3})/g,'$1,$2');
                    }
                    for (var j = 0; j < vLen - (pi + "").length; j++)
                        text += 0;
                    _this.text(text + pi);
                    if (a >= _time)
                        clearInterval(t);
                }, 20);
            }
            Animate();

            _this.attr("bolExec",true);
        }
    }
	if($(".increasnum2").length>0){
		$(".increasnum2").each(function(){
			var _this=$(this);
			_this.attr("bolExec",false);
			numscroll3(_this);
		})
		$(window).scroll(function () {
			$(".increasnum").each(function(){
				var _this=$(this);
				numscroll3(_this);
			})
	
	    })
	}
	function numscroll3(_this){
        var Current = _this.offset().top;
		var bolExec=_this.attr("bolExec");
		
        if ($(document).scrollTop() > Current- winH*5 / 6 && bolExec == "false") {
            var line = _this;
            function Animate() {
                var  a = 0, v = _this.attr("num") - 0, _time = 100, vLen = (v + "").length;
                var t = setInterval(function () {
                    a += 1;
                    var pi = parseInt(v / 100 * a);
                    var text = "";
                    var piL=(pi+"").length;
                    if(piL>2){
                    	pi=(pi+"").replace(/(.{1,99})(.{2})/g,'$1,$2');
                    }
                    for (var j = 0; j < vLen - (pi + "").length; j++)
                        text += 0;
                    _this.text(text + pi);
                    if (a >= _time)
                        clearInterval(t);
                }, 20);
            }
            Animate();

            _this.attr("bolExec",true);
        }
    }
	
	//产品详情的输入框 加加减减
	$(".purchasecon").each(function(){
		var _this=$(this);
		var num1=parseInt(_this.find("input[type=text]").val());
		if(num1!=num1){num1=0};
		if(num1<0){num1=0};
		$(this).find(".pur-top").click(function(){
			num1+=100;
			_this.find("input[type=text]").val(num1)
		})
		$(this).find(".pur-bottom").click(function(){
			if(num1>=100){
				num1-=100;
				_this.find("input[type=text]").val(num1)
			}
		})
		_this.find("input[type=text]").blur(function(){
			var nval=$(this).val();
			if(nval!=""){
				nval=parseInt(nval);
				if(nval!=nval){nval=0};
				if(nval<0){nval=0};
				$(this).val(nval);
			}
		})
	})
})

function cutP() {
	$(".cutP").each(function() {
		var _this = $(this);
		_this.find(".cutbtns").find("a").eq(0).addClass("cur");
		_this.find(".cutlump").eq(0).show();
		_this.find(".cutbtns").find("a").click(function() {
			$(this).addClass("cur").siblings().removeClass("cur");
			_this.find(".cutlump").hide();
			_this.find(".cutlump").eq($(this).index()).show();
		})
	})
}

function swidthnum(b) {
	var distance = b.width() +
		parseFloat(b.css("margin-right")) +
		parseFloat(b.css("padding-right")) +
		parseFloat(b.css("padding-left"));
	return distance;
}

function clickHonce(leftBtn, rightBtn, _this, num) {
	var lenLi = _this.find("ul li").length;
	var distance = swidthnum(_this.find("ul li"));
	_this.find("ul").css("width", distance * lenLi);
	var i = 0;
	_this.find(leftBtn).click(function() {
		distance = swidthnum(_this.find("ul li"));
		if(lenLi > num) {
			if(!_this.find("ul").is(":animated")) {
				if(i > 0) {
					i -= num;
				} else {
					return false;
				}
				_this.find("ul").animate({
					"margin-left": -distance * i
				}, 500);
				
			}
		}
	})
	_this.find(rightBtn).click(function() {
		distance = swidthnum(_this.find("ul li"));
		if(lenLi > num) {
			if(!_this.find("ul").is(":animated")) {
				if(i < lenLi - num) {
					i += num;
				} else {
					return false;
				}
				_this.find("ul").animate({
					"margin-left": -distance * i
				}, 500);
			}
		}
	})
}
function clickHonce2(leftBtn, rightBtn, _this, num) {
	var lenLi = _this.find("ul").length;
	var distance = swidthnum(_this.find("ul"));
	_this.find("ul").css("width", distance * lenLi);
	var i = 0;
	_this.find(leftBtn).click(function() {
		distance = swidthnum(_this.find("ul li"));
		if(lenLi > num) {
			if(!_this.find("ul").is(":animated")) {
				if(i > 0) {
					i -= num;
				} else {
					return false;
				}
				_this.find("ul").animate({
					"margin-left": -distance * i
				}, 500);
				
			}
		}
	})
	_this.find(rightBtn).click(function() {
		distance = swidthnum(_this.find("ul li"));
		if(lenLi > num) {
			if(!_this.find("ul").is(":animated")) {
				if(i < lenLi - num) {
					i += num;
				} else {
					return false;
				}
				_this.find("ul").animate({
					"margin-left": -distance * i
				}, 500);
			}
		}
	})
}
function clickHonce3(leftBtn, rightBtn, _this, num) {
	var lenLi = _this.find("ul li").length;
	var distance = swidthnum(_this.find("ul li"));
	_this.find("ul").css("width", distance * lenLi);
	var i = 0;
	_this.find("ul li").each(function(){
		if($(this).hasClass("cur")){
			i=$(this).index();
			if(i >= lenLi - num) {
				i=lenLi - num;
				_this.find(rightBtn).hide();
			}
			if(i>0){
				_this.find(leftBtn).show();
			}
			_this.find("ul").animate({
				"margin-left": -distance * i
			}, 500);
		}
		
	})
	_this.find(leftBtn).click(function() {
		distance = swidthnum(_this.find("ul li"));
		if(lenLi > num) {
			if(!_this.find("ul").is(":animated")) {
				if(i > 0) {
					i --;
				} else {
					return false;
				}
				_this.find("ul").animate({
					"margin-left": -distance * i
				}, 500);
				_this.find(rightBtn).show();
				if(i == 0){
					_this.find(leftBtn).hide();
				}
			}
		}
	})
	_this.find(rightBtn).click(function() {
		distance = swidthnum(_this.find("ul li"));
		if(lenLi > num) {
			if(!_this.find("ul").is(":animated")) {
				if(i < lenLi - num) {
					i ++;
				} else {
					return false;
				}
				_this.find("ul").animate({
					"margin-left": -distance * i
				}, 500);
				_this.find(leftBtn).show();
				if(i < lenLi - num){
					_this.find(rightBtn).show();
				}else{
					_this.find(rightBtn).hide();
				}
			}
		}
	})
}
function clickHonce4(leftBtn, rightBtn, _this, num) {
	var lenLi = _this.find("ul li").length;
	var distance = swidthnum(_this.find("ul li"));
	_this.find("ul").css("width", distance * lenLi);
	var i = 0;
	_this.find(leftBtn).click(function() {
		distance = swidthnum(_this.find("ul li"));
		if(lenLi > num) {
			if(!_this.find("ul").is(":animated")) {
				_this.find("ul").find("li:last").prependTo(_this.find("ul"));
				_this.find("ul").css({"margin-left":-distance});
				_this.find("ul").animate({
					"margin-left": 0
				}, 500);
			}
		}
	})
	_this.find(rightBtn).click(function() {
		distance = swidthnum(_this.find("ul li"));
		if(lenLi > num) {
			if(!_this.find("ul").is(":animated")) {
				_this.find("ul").animate({
					"margin-left": -distance
				}, 500,function(){
					_this.find("ul").find("li:first").appendTo(_this.find("ul"));
					_this.find("ul").css({"margin-left":0});
				});
			}
		}
	})
	function func1(){
		_this.find("ul").animate({
			"margin-left": -distance
		}, 500,function(){
			_this.find("ul").find("li:first").appendTo(_this.find("ul"));
			_this.find("ul").css({"margin-left":0});
		});
	}
	var set1=setInterval(func1,2000);
	_this.hover(function(){
		clearInterval(set1);
	},function(){
		set1=setInterval(func1,2000);
	})
}
$(function(){
	//加入我们
	$(document).on("click",".join-list li .join-top",function(){
		if($(this).next().is(":hidden")){
			$(".join-bottom").slideUp(300);
			$(".join-list li").removeClass("cur");
			$(this).parents("li").addClass("cur");
			$(this).next().slideDown(300);
		}else{
			$(this).parents("li").removeClass("cur");
			$(this).next().slideUp(300);
		}
	});
	
	//注册认证列表
	$(".problemcoment ul li").eq(0).addClass("cur");
		$(".CommonproblemContent").eq(0).show();
		$(document).on("click",".problemcoment ul li h3",function(){
			if($(this).next().is(":hidden")){
				$(".CommonproblemContent").slideUp(300);
				$(".problemcoment li").removeClass("cur");
				$(this).parents("li").addClass("cur");
				$(this).next().slideDown(300);
			}else{
				$(this).parents("li").removeClass("cur");
				$(this).next().slideUp(300);
			}
	});
		
		//左侧导航事件
		$(".onenav-box").each(function(){
			if($(this).find("ul li.cur").length>0){
				$(this).parents(".common-nav").addClass("show");
				$(this).find("ul").show();
			}
		})
		$(".onenav-box h3").click(function(){
			var _this=$(this);
			if($(this).next().is(":hidden")){
				$(".onenav-box ul").stop().slideUp(300,function(){
					$(".onenav-box").removeClass("cur");
				})
				$(this).next().stop().slideDown(300,function(){
					$(this).parents(".onenav-box").addClass("cur");
				});
				
			}
			else{
				$(this).next().slideUp(300,function(){
					_this.parent().removeClass("cur");
				});
			}
		});
		
		//高管介绍
		$(".exe-list li:last-child,.organ-image dl:last-child,.Major-nav li:last-child").addClass("last");//最后一个元素去掉虚线

		
		$(".Major-nav ul li:eq(0)").addClass("cur");
		$(".Major-events ul:eq(0)").show();
		$(".Major-nav ul li").each(function(index){
			$(this).click(function(){
				$(this).addClass("cur").siblings().removeClass("cur");
				$(".Major-events ul").eq(index).show().siblings().hide();
			});
		});
	
	//平台数据
	$(".Progress-con").each(function(){
		var num1=parseFloat($(this).attr("pro-num"));
		if(num1>100){num1=100};
		$(this).find(".Progress-bar").css({"width":num1+"%"});
		if(num1<30){
			$(this).find(".pro-num").addClass("left0");
		}
	})
	
	/*二级下拉*/
	$(".nav ul li").hover(function(){
	  $(this).find(".headersub").stop().slideDown()
	},function(){
		$(this).find(".headersub").stop().slideUp()
	})
	
	
		
})
/* 图表开始 */

$(function () {
	if ($('#pie-myloan').length) {
		var pieMyloan = echarts.init(document.getElementById('pie-myloan'));
		var optionMyloan = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: '52.4%',
				y: '14.7%',
				selectedMode: false,
				itemWidth: 18,
				itemHeight: 18,
				itemGap: 20,
				//formatter:'Legend {name} {c} ({d}%)',
				data: ['已还本金', '已还利息', '投标中借款', '应还本金', '应还利息', '应还滞纳金'],
				textStyle: {
					fontSize: 14,
					padding: [0, 0, 0, 15]
				}
			},
			series: [{
				name: '我的借款',
				type: 'pie',
				// radius: ['55%', '66%'],
				radius: ['50%', '66%'],
				// center: [210, '50%'],
				center: [210, 155],
				avoidLabelOverlap: false,
				startAngle: 90,
				itemStyle: {
					color: function (params) { // 传入的是数据项 seriesIndex, dataIndex, data, value 等各个参数。
						var colorList = ['#8bd8c8', '#8ca8dc', '#daaad4', '#ffd93f', '#f59631', '#f53a31'];
						return colorList[params.dataIndex];
					},
					// shadowColor: 'rgba(0, 0, 0, 0.5)',
					// shadowBlur: 10  // 没办 只做外边框
				},
				label: {
					normal: { //显示方式二选一
						show: false,
						position: 'inside',
						formatter: '{b} {d}%',
						textStyle: {
							fontSize: '14',
						}
					},
					emphasis: {
						show: true,
						position: 'inside',
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
						value: 52500,
						name: '已还本金'
					},
					{
						value: 50500,
						name: '已还利息'
					},
					{
						value: 25500,
						name: '投标中借款'
					},
					{
						value: 32500,
						name: '应还本金'
					},
					{
						value: 32500,
						name: '应还利息'
					},
					{
						value: 32500,
						name: '应还滞纳金'
					}
				]
			}]
		};
		pieMyloan.setOption(optionMyloan);
	}
	// 总资产
	if ($('#pie-total-assets').length) {
		var pieAssets0 = echarts.init(document.getElementById('pie-total-assets'));
		var optionAssets0 = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: '52.4%',
				y: '14.7%',
				selectedMode: false,
				itemWidth: 18,
				itemHeight: 18,
				itemGap: 20,
				//formatter:'Legend {name} {c} ({d}%)',
				data: ['可用余额', '投资本金', '投标冻结', '待收加息奖励', '待收收益'],
				textStyle: {
					fontSize: 14,
					padding: [0, 0, 0, 15]
				}
			},
			series: [{
				name: '总资产',
				type: 'pie',
				// radius: ['55%', '66%'],
				radius: ['50%', '66%'],
				// center: [210, '50%'],
				center: [210, 155],
				avoidLabelOverlap: false,
				startAngle: 90,
				itemStyle: {
					color: function (params) { // 传入的是数据项 seriesIndex, dataIndex, data, value 等各个参数。
						var colorList = ['#8bd8c8', '#8ca8dc', '#daaad4', '#fcbc77', '#f53a31'];
						return colorList[params.dataIndex];
					},
					// shadowColor: 'rgba(0, 0, 0, 0.5)',
					// shadowBlur: 10  // 没办 只做外边框
				},
				label: {
					normal: { //显示方式二选一
						show: false,
						position: 'inside',
						formatter: '{b} {d}%',
						textStyle: {
							fontSize: '14',
						}
					},
					emphasis: {
						show: true,
						position: 'inside',
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
						value: 52500,
						name: '可用余额'
					},
					{
						value: 50500,
						name: '投资本金'
					},
					{
						value: 25500,
						name: '投标冻结'
					},
					{
						value: 32500,
						name: '待收加息奖励'
					},
					{
						value: 32500,
						name: '待收收益'
					}
				]
			}]
		};
		pieAssets0.setOption(optionAssets0);
	}
	// 总收益 颜色不同
	if ($('#pie-total-income').length) {
		var pieAssets1 = echarts.init(document.getElementById('pie-total-income'));
		var optionAssets1 = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: '52.4%',
				y: '14.7%',
				selectedMode: false,
				itemWidth: 18,
				itemHeight: 18,
				itemGap: 20,
				//formatter:'Legend {name} {c} ({d}%)',
				data: ['已赚取收益', '待收收益', '理财师奖励', '代金券折扣', '累积加息奖励'],
				textStyle: {
					fontSize: 14,
					padding: [0, 0, 0, 15]
				}
			},
			series: [{
				name: '总收益',
				type: 'pie',
				// radius: ['55%', '66%'],
				radius: ['50%', '66%'],
				// center: [210, '50%'],
				center: [210, 155],
				avoidLabelOverlap: false,
				startAngle: 90,
				itemStyle: {
					color: function (params) { // 传入的是数据项 seriesIndex, dataIndex, data, value 等各个参数。
						var colorList = ['#8ca8dc', '#f6b0a5', '#a7e1fb', '#8bd8c8', '#f7eb86'];
						return colorList[params.dataIndex];
					},
					// shadowColor: 'rgba(0, 0, 0, 0.5)',
					// shadowBlur: 10  // 没办 只做外边框
				},
				label: {
					normal: { //显示方式二选一
						show: false,
						position: 'inside',
						formatter: '{b} {d}%',
						textStyle: {
							fontSize: '14',
						}
					},
					emphasis: {
						show: true,
						position: 'inside',
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data: [{
						value: 52500,
						name: '已赚取收益'
					},
					{
						value: 50500,
						name: '待收收益'
					},
					{
						value: 25500,
						name: '理财师奖励'
					},
					{
						value: 32500,
						name: '代金券折扣'
					},
					{
						value: 32500,
						name: '累积加息奖励'
					}
				]
			}]
		};
		pieAssets1.setOption(optionAssets1);
	}
	// 总资产 总收益切换
	$('.m-jstotal-hook .m-jstotal-titles .title').on('click', function () {
		$(this).addClass('cur').siblings().removeClass('cur');
		var pieAssets = $(this).index() ? pieAssets0 : pieAssets1;
		$('.m-jstotal-hook .total-item').eq($(this).index()).css('visibility', 'visible').siblings().css('visibility', 'hidden');
		// var optionAssets = $(this).index()? optionAssets0: optionAssets1;
		// $('.assets-chart .total-item').eq($(this).index()).show(function(){
		// 	pieAssets.setOption(optionAssets);
		// }).siblings().hide();
	});
	// 理财师 好友分布
	if ($('#pie-friendsmap').length) {
		var pieFriendsmap = echarts.init(document.getElementById('pie-friendsmap'));
		var optionFriendsmap = {
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b}: {c} ({d}%)"
			},
			legend: {
				show: false,
			},
			label: {
				normal: {
					show: true
				},
				emphasis: {
					show: true
				}
			},
			series: [{
				name: '好友分布',
				type: 'pie',
				radius: ['47.2%', '64.5%'],
				center: ['50%', '50%'],
				avoidLabelOverlap: false,
				startAngle: 90,
				itemStyle: {
					color: function (params) { // 传入的是数据项 seriesIndex, dataIndex, data, value 等各个参数。
						var colorList = ['#8ca8dc', '#8bd8c8', '#daaad4'];
						return colorList[params.dataIndex];
					},
				},
				data: [{
						value: 42,
						name: '忠实粉丝'
					},
					{
						value: 46,
						name: '铁杆粉丝'
					},
					{
						value: 12,
						name: '新人粉丝'
					}
				]
			}]
		};
		pieFriendsmap.setOption(optionFriendsmap);
	}
	// 资产明细   切换 12月份的折线图
	if ($('#line-addup').length) {
		var lineAddup = echarts.init(document.getElementById('line-addup'));
		var optionLineAddup = {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					label: {
						backgroundColor: '#6a7985'
					}
				}
			},
			legend: {
				show: false,
				data: ['邮件营销']
			},
			textStyle: {
				lineHeight: 30,
				color: "#999999",
				fontSize: 14
			},
			grid: {
				// left: '3%',
				// right: '4%',
				// bottom: '3%',
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
				axisTick: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: "#fff"
					}
				}
			},
			series: [{
				name: '累计加息奖励',
				type: 'line',
				areaStyle: {
					normal: {
						normal: {
							color: 'rgba(141,216,200,.1)'
						}
					}
				},
				itemStyle: {
					normal: {
						color: 'rgba(141,216,200,1)'
					}
				},
				symbolSize: 8,
				data: [120, 132, 101, 134, 90, 230, 210, 564, 132, 101, 134, 230, 210]
			}]
		};
		lineAddup.setOption(optionLineAddup);
	}
});
