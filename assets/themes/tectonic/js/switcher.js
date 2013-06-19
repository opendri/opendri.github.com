/* ---------------------------------------------------------------------- */
/*	Style Switcher
/* ---------------------------------------------------------------------- */

var enable_switcher = false;

jQuery(document).ready(function($) {

	if (enable_switcher) {

		var currentColorScheme = getCookie("color_scheme"),
			currentBodyBgClass = getCookie("body_bg_class"),
			currentBodyBgType = getCookie("body_bg_type");
		
		if (currentColorScheme) {
			$('#color-scheme' ).attr('href', 'css/colors/' + currentColorScheme + '.css');
		} else {
			currentColorScheme = 'brown';
		}
		
		if (currentBodyBgClass && currentBodyBgType) {
			removeBodyBgClass();
			$('body').addClass('body-bg-' + currentBodyBgClass + ' ' + currentBodyBgType);
		} else {
			currentBodyBgClass = 'image1';
			currentBodyBgType = 'image-background';
		}

		var $switcher = $('<div id="style-switcher"> \
								<span class="toggle-button"></span> \
								<h5 style="margin-top: 10px">Color Scheme</h5> \
								<ul id="colors" class="thumbs clearfix"> \
									<li><a href="#" class="brown" title="Brown"></a></li> \
									<li><a href="#" class="navy" title="Navy"></a></li> \
									<li><a href="#" class="red" title="Red"></a></li> \
									<li><a href="#" class="green" title="Green"></a></li> \
									<li><a href="#" class="sea-green" title="Sea Green"></a></li> \
									<li><a href="#" class="dark-yellow" title="Dark Yellow"></a></li> \
									<li><a href="#" class="orange" title="Orange"></a></li> \
									<li><a href="#" class="blue" title="Blue"></a></li> \
									<li><a href="#" class="maroon" title="Maroon"></a></li> \
									<li><a href="#" class="violet" title="Violet"></a></li> \
									<li><a href="#" class="olive-green" title="Olive Green"></a></li> \
									<li><a href="#" class="beige" title="Beige"></a></li> \
								</ul> \
								<h5>Background Image</h5> \
								<ul id="image-background" class="thumbs clearfix"> \
									<li><a href="#" class="image1" title="Background Image 1"></a></li> \
									<li><a href="#" class="image2" title="Background Image 2"></a></li> \
									<li><a href="#" class="image3" title="Background Image 3"></a></li> \
									<li><a href="#" class="image4" title="Background Image 4"></a></li> \
								</ul> \
								<h5>Background Pattern</h5> \
								<ul id="pattern-background" class="thumbs clearfix"> \
									<li><a href="#" class="pattern1" title="45 degree fabric"></a></li> \
									<li><a href="#" class="pattern2" title="Grunge wall"></a></li> \
									<li><a href="#" class="pattern3" title="Wine Cork"></a></li> \
									<li><a href="#" class="pattern4" title="Project Papper"></a></li> \
									<li><a href="#" class="pattern5" title="Scribble Light"></a></li> \
									<li><a href="#" class="pattern6" title="Chruch"></a></li> \
									<li><a href="#" class="pattern7" title="Old husks"></a></li> \
									<li><a href="#" class="pattern8" title="Fabric (Plaid)"></a></li> \
									<li><a href="#" class="pattern9" title="Light aluminum"></a></li> \
									<li><a href="#" class="pattern10" title="Bright Squares"></a></li> \
									<li><a href="#" class="pattern11" title="Brushed Alum"></a></li> \
									<li><a href="#" class="pattern12" title="Smooth Wall"></a></li> \
								</ul> \
								<h5>Background Color</h5> \
								<ul id="solid-background" class="thumbs clearfix"> \
									<li><a href="#" class="solid1" title="Solid Background 1"></a></li> \
									<li><a href="#" class="solid2" title="Solid Background 2"></a></li> \
									<li><a href="#" class="solid3" title="Solid Background 3"></a></li> \
								</ul> \
								<a href="#" id="reset">Reset styles</a> \
							</div>');
		$switcher.insertAfter('#footer-bottom');
		$switcher.find('#colors li a.' + currentColorScheme).addClass('active');
		$switcher.find('#image-background li a.' + currentBodyBgClass).addClass('active');
		$switcher.find('#pattern-background li a.' + currentBodyBgClass).addClass('active');
		$switcher.find('#solid-background li a.' + currentBodyBgClass).addClass('active');
		
		$switcher.find('.toggle-button').click(function() {
			if ($switcher.css('left') === '-175px') {
				$switcher.animate({left: '0px'});
			} else {
				$switcher.animate({left: '-175px'});
			}
			return false;
		});
		
		// Change the color scheme
		$switcher.find('#colors li a').click(function() {
			var colorName = $(this).attr('class');
			$('#color-scheme' ).attr('href', 'css/colors/' + colorName + '.css' );
			$(this).parent().siblings().find('a').removeClass('active');
			$(this).addClass('active');
			
			var expiry = new Date();
			expiry.setTime(expiry.getTime() + 30*60*1000);
			setCookie("color_scheme", colorName, expiry.toGMTString(), "/");
			
			return false;
		});	
		
		// Change the body background image
		$switcher.find('#image-background li a').click(function() {
			var bodyBgClassName = $(this).attr('class');
			removeBodyBgClass();
			$('body').addClass('body-bg-' + bodyBgClassName + ' image-background');
			
			$(this).parent().siblings().find('a').removeClass('active');
			$switcher.find('#pattern-background li a, #solid-background li a').removeClass('active');
			$(this).addClass('active');
			
			var expiry = new Date();
			expiry.setTime(expiry.getTime() + 30*60*1000);
			setCookie("body_bg_class", bodyBgClassName, expiry.toGMTString(), "/");
			setCookie("body_bg_type", 'image-background', expiry.toGMTString(), "/");
			
			return false;
		});	
		
		// Change the body background pattern
		$switcher.find('#pattern-background li a').click(function() {
			var bodyBgClassName = $(this).attr('class');
			removeBodyBgClass();
			$('body').addClass('body-bg-' + bodyBgClassName + ' pattern-background');
			
			$(this).parent().siblings().find('a').removeClass('active');
			$switcher.find('#image-background li a, #solid-background li a').removeClass('active');
			$(this).addClass('active');
			
			var expiry = new Date();
			expiry.setTime(expiry.getTime() + 30*60*1000);
			setCookie("body_bg_class", bodyBgClassName, expiry.toGMTString(), "/");
			setCookie("body_bg_type", 'pattern-background', expiry.toGMTString(), "/");
			
			return false;
		});	
		
		// Change the body solid background
		$switcher.find('#solid-background li a').click(function() {
			var bodyBgClassName = $(this).attr('class');
			removeBodyBgClass();
			$('body').addClass('body-bg-' + bodyBgClassName + ' pattern-background');
			
			$(this).parent().siblings().find('a').removeClass('active');
			$switcher.find('#image-background li a, #pattern-background li a').removeClass('active');
			$(this).addClass('active');
			
			var expiry = new Date();
			expiry.setTime(expiry.getTime() + 30*60*1000);
			setCookie("body_bg_class", bodyBgClassName, expiry.toGMTString(), "/");
			setCookie("body_bg_type", 'pattern-background', expiry.toGMTString(), "/");
			
			return false;
		});	
		
		// Reset the color scheme
		$switcher.find('#reset').click(function() {
			$('#color-scheme' ).attr('href', 'css/colors/brown.css' );
			$switcher.find('#colors li a').removeClass('active');
			$switcher.find('#colors li a.brown').addClass('active');
			deleteCookie("color_scheme", "/");
			
			removeBodyBgClass();
			$('body').addClass('body-bg-image1 image-background');
			
			$switcher.find('#image-background li a, #pattern-background li a, #solid-background li a')
					.removeClass('active');
			$switcher.find('#image-background li a.image1').addClass('active');
			deleteCookie("body_bg_class", "/");
			deleteCookie("body_bg_type", "/");
			
			return false;
		});
		
	}
	
});

function removeBodyBgClass() {
	$('body').removeClass('pattern-background image-background body-bg-image1 body-bg-image2 body-bg-image3 body-bg-image4 body-bg-pattern1 body-bg-pattern2 body-bg-pattern3 body-bg-pattern4 body-bg-pattern5 body-bg-pattern6 body-bg-pattern7 body-bg-pattern8 body-bg-pattern9 body-bg-pattern10 body-bg-pattern11 body-bg-pattern12 body-bg-solid1 body-bg-solid2 body-bg-solid3');
}

function setCookie (name, value, expires, path, domain, secure) {
	document.cookie = name + "=" + escape(value) +
		(expires ? "; expires=" + expires : "") +
		(path ? "; path=" + path : "") +
		(domain ? "; domain=" + domain : "") +
		(secure ? "; secure" : "");
}

function getCookie(name) {
	var prefix = name + "=";
	var cookieStartIndex = document.cookie.indexOf(prefix);
	if (cookieStartIndex == -1) return null;
	var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
	if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length;
	return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
}
function deleteCookie(name, path, domain) {
	if (getCookie(name)) {
		document.cookie = name + "=" + (path ? "; path=" + path : "") + (domain ? "; domain=" + domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}