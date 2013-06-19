// When DOM is fully loaded
jQuery(document).ready(function($) {

	/* ---------------------------------------------------------------------- */
	/*	Detect Touch Screen devices
	/* ---------------------------------------------------------------------- */
	
	(function() {
		if (isTouchScreenDevice) {
			$('body').addClass('touch-screen');
		}
		if (isAndroid) {
			$('body').addClass('android-device');
		}
	})();
	

	/* ---------------------------------------------------------------------- */
	/*	Main Navigation
	/* ---------------------------------------------------------------------- */
	/*
	 * Superfish v1.4.8 - jQuery menu widget
	 * Copyright (c) 2008 Joel Birch
	 *
	 * Dual licensed under the MIT and GPL licenses:
	 * 	http://www.opensource.org/licenses/mit-license.php
	 * 	http://www.gnu.org/licenses/gpl.html
	 *
	 * CHANGELOG: http://users.tpg.com.au/j_birch/plugins/superfish/changelog.txt
	 */
	 
	(function($){$.fn.superfish=function(op){var sf=$.fn.superfish,c=sf.c,$arrow=$(['<span class="',c.arrowClass,'"></span>'].join('')),over=function(){var $$=$(this),menu=getMenu($$);clearTimeout(menu.sfTimer);$$.showSuperfishUl().siblings().hideSuperfishUl()},out=function(){var $$=$(this),menu=getMenu($$),o=sf.op;clearTimeout(menu.sfTimer);menu.sfTimer=setTimeout(function(){o.retainPath=($.inArray($$[0],o.$path)>-1);$$.hideSuperfishUl();if(o.$path.length&&$$.parents(['li.',o.hoverClass].join('')).length<1){over.call(o.$path)}},o.delay)},getMenu=function($menu){var menu=$menu.parents(['ul.',c.menuClass,':first'].join(''))[0];sf.op=sf.o[menu.serial];return menu},addArrow=function($a){$a.addClass(c.anchorClass).append($arrow.clone())};return this.each(function(){var s=this.serial=sf.o.length;var o=$.extend({},sf.defaults,op);o.$path=$('li.'+o.pathClass,this).slice(0,o.pathLevels).each(function(){$(this).addClass([o.hoverClass,c.bcClass].join(' ')).filter('li:has(ul)').removeClass(o.pathClass)});sf.o[s]=sf.op=o;$('li:has(ul)',this)[($.fn.hoverIntent&&!o.disableHI)?'hoverIntent':'hover'](over,out).each(function(){if(o.autoArrows)addArrow($('>a:first-child',this))}).not('.'+c.bcClass).hideSuperfishUl();var $a=$('a',this);$a.each(function(i){var $li=$a.eq(i).parents('li');$a.eq(i).focus(function(){over.call($li)}).blur(function(){out.call($li)})});o.onInit.call(this)}).each(function(){var menuClasses=[c.menuClass];if(sf.op.dropShadows&&!($.browser.msie&&$.browser.version<7))menuClasses.push(c.shadowClass);$(this).addClass(menuClasses.join(' '))})};var sf=$.fn.superfish;sf.o=[];sf.op={};sf.IE7fix=function(){var o=sf.op;if($.browser.msie&&$.browser.version>6&&o.dropShadows&&o.animation.opacity!=undefined)this.toggleClass(sf.c.shadowClass+'-off')};sf.c={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',arrowClass:'sf-sub-indicator',shadowClass:'sf-shadow'};sf.defaults={hoverClass:'sfHover',pathClass:'overideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},speed:'normal',autoArrows:true,dropShadows:true,disableHI:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};$.fn.extend({hideSuperfishUl:function(){var o=sf.op,not=(o.retainPath===true)?o.$path:'';o.retainPath=false;var $ul=$(['li.',o.hoverClass].join(''),this).add(this).not(not).removeClass(o.hoverClass).find('>ul').hide().css('visibility','hidden');o.onHide.call($ul);return this},showSuperfishUl:function(){var o=sf.op,sh=sf.c.shadowClass+'-off',$ul=this.addClass(o.hoverClass).find('>ul:hidden').css('visibility','visible');sf.IE7fix.call($ul);o.onBeforeShow.call($ul);$ul.animate(o.animation,o.speed,function(){sf.IE7fix.call($ul);o.onShow.call($ul)});return this}})})(jQuery);
	
	// Initialise plugin
	$('#main-menu').superfish({
		delay: 200,									// delay on mouseout 
		animation: {opacity:'show', height:'show'},	// fade-in and slide-down animation
		speed: 'fast',								// animation speed
		autoArrows: true,							// enable/disable generation of arrow mark-up
		onInit: function(){
			if (isTouchScreenDevice && $(window).width() >= 768) {
				hideOnTouchOutside();
			}
			// Position last item submenu
			var $this = $(this),
				$lastItemWidth = $this.children('li:last-child').width(),
				$itemPadding = parseInt($this.children('li').find('a').css('padding-left')),
				$lastItemSubmenu = $this.children('li:last-child').children('ul'),
				$lastItemSubmenuWidth = $lastItemSubmenu.width();
			$lastItemSubmenu.css('left', ($lastItemWidth - $lastItemSubmenuWidth + $itemPadding) + 'px');
		}
	});
	
	// (For touch screens) Hide opened submenus when the user clicks outside the menu's area
	function hideOnTouchOutside() {
		$('html').on('touchend', function(e) {
			$('#main-menu > li.sfHover').mouseout();
		});
		$('#main-menu').on('touchstart touchend', function(e){
			e.stopPropagation();
		});
	}
	
	// Responsive menu
	(function() {
		selectnav('main-menu', {
			activeclass: 'current',
			autoselect: false,
			nested: true,
			indent: '-',
			label: 'Select a page...'
		});		
	})();
	
	// Wide menu positioning
	(function() {
		
		var navMarginTop = $('#navigation').css('margin-top');
		
		function positionMainMenu() {
			
			if ($(window).width() >= 768) {
				var header_width = $('#header .container').width() - 20,
					logo_width = $('#logo img').width() + parseInt($('#logo').css('margin-left')),
					menu_width = 0;
					
				$('#main-menu > li').each(function() {
					menu_width += $(this).width();
				});
				
				if (logo_width + menu_width > header_width) {
					$('#logo, #navigation, #primary-nav').css('float', 'none');
					$('#navigation').css('margin-top', '10px');
				} else {
					$('#logo').css('float', 'left');
					$('#navigation, #primary-nav').css('float', 'right');
					$('#navigation').css('margin-top', navMarginTop);
				}
			} else {
				$('#logo, #navigation, #primary-nav').css('float', 'none');
			}
		}
	
		positionMainMenu();
		
		$(window).on('resize', function() {
			positionMainMenu();
		});
		
	})();
	// ***
	
	$('.ie #primary-nav ul ul li:last-child').css('border-bottom', 'none');
	
	
	/* ---------------------------------------------------------------------- */
	/*	Image Overlay functionality (for touch screens)
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		if (isTouchScreenDevice) {
			$('.item-picture').on('touchend', function(e) {
				var $current = $(this);
				
				// not to be applied to image gallery slider or projects carousel
				if (!$current.parent().parent().is('.flexslider, #projects-carousel')) {
					e.stopPropagation();
					
					$('.item-picture').each(function(index) {
						if ($(this)[0] !== $current[0]) {
							// not to be applied to image gallery slider or projects carousel
							if (!$(this).parent().parent().is('.flexslider, #projects-carousel')) {
								$('.image-overlay', this).css('background', 'rgba(0, 0, 0, 0)');
								$('.image-overlay span', this).css({'display': 'none', 'opacity': '0'});
							}
						}
					});
					
					if ($('.image-overlay span', this).css('display') == 'none') {
						e.preventDefault();
						$('.image-overlay', this).css('background', 'rgba(0, 0, 0, 0.5)');
						$('.image-overlay span', this).css({'display': 'block', 'opacity': '1'});
					}	
				}
			});
			
			$('html').on('touchend', function() {
				$('.item-picture').each(function() {
					// not to be applied to image gallery slider or projects carousel
					if (!$(this).parent().parent().is('.flexslider, #projects-carousel')) {
						$('.image-overlay', this).css('background', 'rgba(0, 0, 0, 0)');
						$('.image-overlay span', this).css({'display': 'none', 'opacity': '0'});
					}
				});
			});
		}
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Sticky Footer
	/* ---------------------------------------------------------------------- */
	/*
	* Sticks the footer to the bottom of the page if the page content is less than the browser window height
	* (http://www.codicode.com/art/the_best_sticky_footer.aspx)
	*/
	
	(function() {
		
		window.positionFooter = function () {
		
			var footer = $('#footer'),
				footer_bottom = $('#footer-bottom'),
				page_wrapper = $('#page-wrapper'),
				bwf_height = $('#header').height() + $('#main').height(), // body without footers
				fTop = 0;
			
			if (((bwf_height + footer.outerHeight(true) + footer_bottom.outerHeight(true)) < $(window).height() && footer.css('position') == 'fixed') || ($(document.body).height() < $(window).height() && footer.css('position') != 'fixed')) {
				fTop = footer_bottom.outerHeight(true) + 'px';
				footer_bottom.css({'position': 'fixed', 'bottom': '0'});
				footer.css({position: 'fixed', 'bottom': fTop});
				page_wrapper.css('height', $(window).height()+'px');
			} else {
				if (footer.css('position') != 'static') {
					footer.css('position', 'static');
					footer_bottom.css('position', 'static');
					page_wrapper.css('height', 'auto');
				}
			}
		};
		
		$(window).load(function() {
			positionFooter();
		});
		
		$(window).on('resize', function() {
			positionFooter();
		});
		
		$('html').on('click', function() {
			positionFooter();
		});
		
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Scroll Top
	/* ---------------------------------------------------------------------- */
	
	$('span.scroll-top').click(function() {
		$('html, body').animate({scrollTop: 0}, 400, 'easeInOutQuint');
		return false;
	});
	
	
	/* ---------------------------------------------------------------------- */
	/*	Categories Menu (in sidebar)
	/* ---------------------------------------------------------------------- */
	
	$('ul.categories li a').hover(function() {
		$(this).parent().addClass('aHover');
	}, function() {
		$(this).parent().removeClass('aHover');
	});
	
	
	/* ---------------------------------------------------------------------- */
	/*	Projects Carousel
	/* ---------------------------------------------------------------------- */

	(function() {
		
		var $carousel = $('#projects-carousel');
		
		function getWindowWidth() {
			if ($(window).width() < 768) { // for small-screen mobile devices
				visibleSlides = animationStep = 1;
			} else if ($(window).width() < 960) { // for a width of 768px
				if (fullWidth) { visibleSlides = animationStep = 3; }
				else { visibleSlides = animationStep = 2; }
			} else if ($(window).width() < 1200) { // for a width of 1024px
				if (fullWidth && carouselClass == 'four-slides') { visibleSlides = animationStep = 4; }
				else { visibleSlides = animationStep = 3; }
			} else { // for a width of 1280px and higher
				if (carouselClass == 'three-slides') { visibleSlides = animationStep = 3; }
				else if (carouselClass == 'four-slides') { visibleSlides = animationStep = 4; }
			}
		}
		
		function adjustCarousel() {
			getWindowWidth();
			if (visibleSlides != carousel.settings.visibleSlides) {
				carousel.update({
					animation: {step: animationStep},
					visibleSlides: visibleSlides
				});
			}
		}
		
		if ($carousel.length) {
		
			var animationStep, visibleSlides,
				carouselClass = $carousel.hasClass('four-slides') ? 'four-slides' : 'three-slides',
				fullWidth = $('#pContent').hasClass('sixteen columns') ? true : false;
			
			// Init carousel
			getWindowWidth();
			var carousel = new Carousel($carousel, {animation: {step: animationStep}, visibleSlides: visibleSlides});
			carousel.init();
			
			// Window resize
			$(window).on('resize', function() {
				var timer = window.setTimeout(function() {
					window.clearTimeout(timer);
					adjustCarousel();
				}, 30);
			});
		}

	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Testimonials Carousel
	/* ---------------------------------------------------------------------- */

	(function() {
		
		var $carousel = $('.testimonials-carousel');
		
		if ($carousel.length) {
			// Init carousel
			var carousel = new Carousel($carousel, {animation: {duration: 300, step: 1}, visibleSlides: 1});
			carousel.init();
		}

	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Accordion
	/* ---------------------------------------------------------------------- */

	(function() {

		var $trigger = $('.accordion .toggle-trigger'),
			$container = $('.accordion .toggle-container');
			
		$container.stop(true,true).hide();
		$('.accordion .toggle-trigger.active').next().show();

		$trigger.on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			if ($this.next().is(':hidden')) {
				$this.siblings('.toggle-trigger').removeClass('active').next().slideUp(300);
				$this.toggleClass('active').next().slideDown(300);
			}
			return false; // IE9 hack
		});
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Toggle
	/* ---------------------------------------------------------------------- */

	(function() {

		var $trigger = $('.toggle .toggle-trigger'),
			$container = $('.toggle .toggle-container');
			
		$container.stop(true,true).hide();
		$('.toggle .toggle-trigger.active').next().show();

		$trigger.on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			$this.toggleClass('active');
			if ($this.next().is(':hidden')) {
				$this.next().slideDown(300);
			} else {
				$this.next().slideUp(300);
			}
			return false; // IE9 hack
		});
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Tabs
	/* ---------------------------------------------------------------------- */
	
	(function() {

		var $tabsNav = $('.tabs-nav'),
			$tabsNavLis = $tabsNav.children('li'),
			$tabContent = $('.tab-content');

		$tabsNav.each(function() {
			var $this = $(this);
			$this.next().children('.tab-content').stop(true,true).hide();
			if ($this.children('li').hasClass('active')) {
				var $li_active = $this.children('li.active');
				$li_active.parent().next().children('.tab-content').siblings( $li_active.find('a').attr('href') ).show();
			} else {
				$this.next().children('.tab-content').first().show();
				$this.children('li').first().addClass('active').stop(true,true).show();
			}
			// for sidebar tabs (if the browser window width is 768px and higher)
			if ($this.parent().parent().is('#sidebar') && $this.children('li').css('padding-right') == '0px') {
				$this.children('li.active').prev().find('a').addClass('border-right-colored');
			}
		});

		$tabsNavLis.on('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			if ($this.not('.active')) {
				$this.siblings().removeClass('active').end().addClass('active');
				$this.parent().next().children('.tab-content').stop(true,true).hide()
															.siblings( $this.find('a').attr('href') ).show(); // or fadeIn()
			}
			// for sidebar tabs (if the browser window width is 768px and higher)
			if ($this.parent().parent().parent().is('#sidebar') && $this.css('padding-right') == '0px') {
				$this.siblings().find('a').removeClass('border-right-colored');
				$this.prev().find('a').addClass('border-right-colored');
			}
			return false; // IE9 hack
		});

	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Message Boxes
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		window.setMsgBoxClosable = function (element) {
			var msgBox = $(element),
				closeBtn = $('<a class="close" href="#"></a>');
			
			closeBtn.appendTo(element);
			closeBtn.click(function() {
				msgBox.fadeTo(300, 0, function() {
					msgBox.animate({height: 0, padding: 0, margin: 0}, 300);
				});
				if ($('html').hasClass('ie8')) {
					closeBtn.fadeOut(300); // IE8 hack
				}
				return false;
			});
		};
		
		$('.message-box.closable').each(function() {
			setMsgBoxClosable(this);
		});
	
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Add iframe with YouTube/Vimeo player to a portfolio item preview (or gallery item) of the video type
	/*	(for small-screen mobile devices)
	/* ---------------------------------------------------------------------- */
	
	(function() {
	
		function getYouTubeParam(name, url) {
			name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
			var regexS = "[\\?&]"+name+"=([^&#]*)",
				regex = new RegExp( regexS ),
				results = regex.exec( url );
			return ( results == null ) ? "" : results[1];
		}
	
		// -- Add iframe with youtube player
		$('.portfolio-item-preview div[data-type="youtube-video"], .gallery-item div[data-type="youtube-video"]').each(function() {
			// regular youtube link
			var movie_id = getYouTubeParam('v', $('a', this).attr('href'));
			// youtu.be link
			if (movie_id == "") {
				movie_id = $('a', this).attr('href').split('youtu.be/');
				movie_id = movie_id[1];
				if (movie_id.indexOf('?') > 0) {
					movie_id = movie_id.substr(0, movie_id.indexOf('?')); // strip anything after the ?
				}
				if (movie_id.indexOf('&') > 0) {
					movie_id = movie_id.substr(0, movie_id.indexOf('&')); // strip anything after the &
				}
			}
			$('<iframe>', {src: 'http://www.youtube.com/embed/'+movie_id+'?wmode=transparent&amp;rel=0&amp;showinfo=0', frameborder: '0'}).appendTo(this);
			
			// gallery item with video
			if ($(this).parent().hasClass('gallery-item')) {
				var imgWidth = $(this).attr('data-tn-width'),
					imgHeight = $(this).attr('data-tn-height');
				$('iframe', this).css({'width': imgWidth+'px', 'height': imgHeight+'px'});
			}
		});
			
		// -- Add iframe with vimeo player
		$('.portfolio-item-preview div[data-type="vimeo-video"], .gallery-item div[data-type="vimeo-video"]').each(function() {
			var movie_id = $('a', this).attr('href'),
				regExp = /http:\/\/(www\.)?vimeo.com\/(\d+)/,
				match = movie_id.match(regExp);
			$('<iframe>', {src: 'http://player.vimeo.com/video/'+match[2]+'?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff', frameborder: '0'}).appendTo(this);
			
			// gallery item with video
			if ($(this).parent().hasClass('gallery-item')) {
				var imgWidth = $(this).attr('data-tn-width'),
					imgHeight = $(this).attr('data-tn-height');
				$('iframe', this).css({'width': imgWidth+'px', 'height': imgHeight+'px'});
			}
		});
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	HTML5 video resizing
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		var resizeContainer = function() {
			$('.html5-video-container').each(function() {
				var containerWidth = $(this).parent().width(),
					containerHeight,
					aspectRatio = $(this).attr('data-aspect-ratio');
					
				containerHeight = Math.floor(containerWidth/aspectRatio);
				$(this).css({'width': containerWidth + 'px', 'height': containerHeight + 'px'});
			});
		};
		
		resizeContainer();
		
		// Window resize
		$(window).on('resize', function() {
			var timer = window.setTimeout(function() {
				window.clearTimeout(timer);
				resizeContainer();
			}, 30);
		});
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Pricing Tables
	/* ---------------------------------------------------------------------- */
	
	(function() {
	
		$('html:not(.ie) .pricing-table .table-column.featured').next().find('.header, .features, .footer').css('border-left', 'none');
		$('.ie .pricing-table .table-column .features').find('li:odd').css('background-color', '#fafafa');
		$('.ie7 .pricing-table').each(function() {
			$('.table-column:first', this).find('.header, .features, .footer').css('border-left', 'none');
		});
		
	})();
	
	/* ---------------------------------------------------------------------- */
	/*	Google Maps
	/* ---------------------------------------------------------------------- */
	
	(function() {
	
		var $gmap = $('#map');

		if ($gmap.length) {
			
			// posType: "coordinates" - use geographical coordinates (latitude and longitude),
			//          "address" - use geographical address
			
			var posType = 'address',
				address = '1730 San Antonio Ave, Alameda, CA 94501', // map and marker address
				mapCoords = {lat: 37.7668, lng: -122.2579}, // map coordinates
				markerCoords = {lat: 37.7668, lng: -122.2579}, // marker coordinates
				mapZoom = 15,
				infoTitle = 'Some title goes here..',
				infoString = '<h5 class="small">ABC Ipsum Studios</h5><p class="remove-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
				infoMaxWidth = 250,
				mapPosition,
				markerPosition;
			
			var initialize = function() {
				
				var map,
					mapOptions = {
						zoom: mapZoom,
						center: mapPosition,
						backgroundColor: '#ffffff',
						mapTypeId: google.maps.MapTypeId.ROADMAP
					};
				map = new google.maps.Map(document.getElementById('map'), mapOptions);
				
				var marker = new google.maps.Marker({
					position: markerPosition,
					map: map,
					title: infoTitle
				});
				
				var infowindow = new google.maps.InfoWindow({
					content: infoString,
					maxWidth: infoMaxWidth
				});
				
				google.maps.event.addListener(marker, 'click', function() {
					infowindow.open(map, marker);
				});
				
				// Window resize
				$(window).on('resize', function() {
					var timer = window.setTimeout(function() {
						window.clearTimeout(timer);
						map.panTo(marker.getPosition()); // pan back to the marker
					}, 30);
				});
			};
			
			google.maps.event.addDomListener(window, 'load', function(results, status) {
				if (posType == 'coordinates') {
					mapPosition = new google.maps.LatLng(mapCoords.lat, mapCoords.lng);
					markerPosition = new google.maps.LatLng(markerCoords.lat, markerCoords.lng);
					initialize();
				}
				if (posType == 'address') {
					geocoder = new google.maps.Geocoder();
					geocoder.geocode({'address': address}, function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
							mapPosition = markerPosition = results[0].geometry.location;
							initialize();
						} else {
							$gmap.text('Geocode was not successful for the following reason: '+status);
						}
					});
				}
			});
		}
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Blog Post Comments
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		var $commentReplyLink = $('.blog #comments .comment article a.reply'),
			$messageField = $('.blog #comment-form textarea[name="message"]');
			
		$commentReplyLink.on('click', function(e) {
			e.preventDefault();
			
			var $this = $(this),
				author = $this.parent().find('h6, .title, strong').text(),
				date = $this.parent().find('.date').text();
				
			$messageField.focus().val('').val('Reply to: ' + author + ' (posted on ' + date + ')\n\n');
			
			// scroll to the top of the reply form section
			var topDiff = $('.blog #submit-comment').offset().top - $(window).height();
			if (topDiff > 0) {
				$('html, body').animate({ scrollTop: $('.blog #submit-comment').offset().top});
			}
			
			return false; // IE9 hack
		});
		
	})();
	
	
	/* ---------------------------------------------------------------------- */
	/*	Contact/Comment Form
	/* ---------------------------------------------------------------------- */
	
	(function() {
		
		var $form = $('#contact-form, #comment-form');
		
		if ($form.length) {
			var $loader = $('<img>', {src: 'images/icons/ajax-loader.gif', width: '16', height: '11', alt: 'Loading...'})
						.appendTo('#submit-button', $form).hide(),
				$messageBox = $('<div class="message-box short">').appendTo($form).hide(),
				success_msg,
				error_msg1,
				error_msg2;
			
			// Success and error notification messages for contact form
			if ($form.attr('id') == 'contact-form') {
				success_msg = 'Your message has been sent. Thank you!';
				error_msg1 = 'There was an error sending the email! Please try again later.';
				error_msg2 = 'Sorry, unexpected error. Please try again later.';
			}
			
			// Success and error notification messages for comment form
			if ($form.attr('id') == 'comment-form') {
				success_msg = 'Your comment has been sent and is awaiting moderation. Thank you!';
				error_msg1 = 'There was an error sending the comment! Please try again later.';
				error_msg2 = 'Sorry, unexpected error. Please try again later.';
			}
			
			$form.on('click', 'input[type="submit"]', function(e) {
				e.preventDefault();
				var hasError = false;
				
				// reset error notifications, hide loader and message box
				$form.find('input, textarea, select').removeClass('error').siblings('label').find('span').removeClass('error');
				$loader.hide();
				$messageBox.hide();
				
				$form.find('input[type="text"], input[type="email"], input[type="checkbox"], textarea, select').each(function() {
					var $this = $(this),
						fieldValue = $.trim($this.val());
					
					if ($this.attr('required')) {
						
						// check if the checkbox is checked
						if ($this.attr('type') == 'checkbox' && $this.is(':checked') == false) {
							$this.next('label').find('span').addClass('error');
							hasError = true;
						}
						
						// check if the field has an empty value
						else if (fieldValue == '' || fieldValue.length < 2) {
							$this.addClass('error').prev('label').find('span').addClass('error');
							hasError = true;
						}
					}
					
					// email address validation
					if ($this.attr('type') == 'email' && fieldValue.length > 0) {
						// regex - http://fightingforalostcause.net/misc/2006/compare-email-regex.php
						var regex=/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
						if (!regex.test(fieldValue)) {
							$this.addClass('error').prev('label');
							hasError = true;
						}
					}
				});
				
				// AJAX request 
				if (!hasError) {
					var localDate = new Date(),
						localTimezoneOffset = localDate.getTimezoneOffset(), // in minutes
						form_data = $form.serialize() + '&timezone_offset=' + localTimezoneOffset;
					
					if ($form.attr('id') == 'comment-form') { // for comment form only
						var postTitle = $('.blog .single-post .post-content').find('h3, .title').text(),
							postDay = $('.blog .single-post .post-date').find('.day').text(),
							postMonth = $('.blog .single-post .post-date').find('.month').text(),
							postYear = $('.blog .single-post .post-date').find('.year').text(),
							postDate = postDay + ' ' + postMonth + ' ' + postYear;
						form_data += '&post_title=' + postTitle + '&post_date=' + postDate;
					}
					
					$loader.show();
					
					var request = $.post($form.attr('action'), form_data, function(data) {
						$loader.hide();
						if (data.indexOf('success') !== -1) {
							showMessageBox(success_msg, 'success');
							$form.find('input[type="text"], input[type="email"], textarea, select').val('').end()
								.find('input[type="checkbox"]').attr('checked', false);
						} else if (data.indexOf('error') !== -1) {
							showMessageBox(error_msg1, 'error');
						} else {
							showMessageBox(error_msg2, 'error');
						}
					})
					.fail(function() {
						$loader.hide();
						showMessageBox(error_msg2, 'error');
					});
				}
				
				return false; // IE9 hack
				
			});
			
		}
		
		function showMessageBox(msg, type) {
			$messageBox.html('<p>'+msg+'</p>').removeClass('success error').addClass(type).show();
			
			// scroll to the bottom of the form to show a notification message
			var bottomDiff = $form.offset().top + $form.outerHeight() - $(window).height();
			if ($(document).scrollTop() < bottomDiff) {
				$('html, body').animate({ scrollTop: bottomDiff});
			}
		}
	
	})();
	
});
