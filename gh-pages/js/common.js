;
(function($) {
	$(function() {
		//文字轮播
		var lunboindex = 0;
		var lunbo1timer = setInterval(function() {
			move1();
		}, 1000)
		//滚动函数
		function move1() {
			lunboindex++;
			panduan1();
			$(".lunbo1_gun").stop().animate({
				left: lunboindex * -212
			})
		}
		//第四张图与第一张图的偷换
		function panduan1() {
			if(lunboindex >= 4) {
				$(".lunbo1_gun").stop()
				$(".lunbo1_gun").css({
					left: 0
				})
				lunboindex = 1;
			}
		}
		//文字轮播左按钮
		$(".lunbo1_left").click(function() {
			clearInterval(lunbo1timer);
			if(lunboindex <= 0) {
				lunboindex = 3;
				$(".lunbo1_gun").stop()
				$(".lunbo1_gun").css({
					left: -3 * 212
				})
			}
			lunboindex -= 2;
			move1();
			lunbo1timer = setInterval(function() {
				move1();
				panduan1();
			}, 1000)
		})
		//文字轮播右按钮
		$(".lunbo1_right").click(function() {
			clearInterval(lunbo1timer);
			if(lunboindex >= 3) {
				$(".lunbo1_gun").stop()
				$(".lunbo1_gun").css({
					left: 0
				})
				lunboindex = 0;
			}
			move1();
			lunbo1timer = setInterval(function() {
				move1();
				panduan1();
			}, 1000)
		})
		//搜索栏吸顶和悬浮按钮出现
		if(window.location.pathname!="/html/car.html")
		xtop();
		function xtop(){
			var $searchtop = $(".search").offset().top;
		$(window).scroll(function() {
			//悬浮按钮
			if($("body").scrollTop() > 100) {
				$("#fixedbtn").show().stop().animate({
					opacity: 1
				})
			} else {
				$("#fixedbtn").hide().stop().animate({
					opacity: 0
				})
			}
			//搜索栏吸顶
			if($("body").scrollTop() > $searchtop) {
				$("#head").css({
					position: 'fixed',
					padding: '5px 0 5px',
					'z-index': 11,
					top: 0,
					height: '47px',
					'border-bottom': '1px solid #ddd'
				})
				$(".topyc").hide();
				$(".topxs").css({
					position: 'absolute',
					width: '550px',
					left: '30%',
					top: '-10px'

				});
			} else {
				$("#head").css({
					position: 'relative',
					top: 0,
					padding: 0,
					height: 'auto'
				})
				$(".topxs").css({
					margin: 'auto',
					'min - width': '1190px',
					width: '100%',
					height: '92px',
					position: 'relative',
					top:0,
					left:0,
				})
				$(".topyc").show();
			}
		})
		}
		//TOP按钮动画
		$(".btn_top").click(function() {
			$("body").stop().animate({
				scrollTop: 0
			}, 1000)
		})
		//自动获取购物车物品数量
		if(!getCookie("car"))
			{var cook = [];}
			else 
			{var cook = JSON.parse(getCookie("car"));}
			var COUNT = 0;
			$.each(cook, function(index,dat) {
				COUNT = parseInt(COUNT)+parseInt(dat.count)
			});
			$(".carsum").text(COUNT);
		//自动获取已登录用户名	
		if(getCookie("username"))
		{
			var username = JSON.parse(getCookie("username"));
			$(".header1_login span").html(username+"，欢迎来永辉超市");
			$(".header1_login a").not(2).hide().eq(2).show();
		}
		else{
			$(".header1_login span").html("Hi，欢迎来永辉超市&nbsp;&nbsp;&nbsp;");
			$(".header1_login a").not(2).show().eq(2).hide();
		}
		$(".exitbtn").click(function(){
			alert("退出登录成功")
			removeCookie("username");
		})
	})
})(jQuery);