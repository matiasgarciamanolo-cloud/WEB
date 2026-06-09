// Javascript String constants for translation
PARALLELS_GLOBALS["strings"] = {
	bookmark_add: 		"Add the bookmark",
	bookmark_added:		"Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab &#039;Bookmarks&#039;",
	bookmark_del: 		"Delete this bookmark",
	bookmark_title:		"Enter bookmark title",
	bookmark_exists:	"Current page already exists in the bookmarks list",
	search_error:		"Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
	email_confirm:		"On the e-mail address &lt;b&gt;%s&lt;/b&gt; we sent a confirmation email.&lt;br&gt;Please, open it and click on the link.",
	reviews_vote:		"Thanks for your vote! New average rating is:",
	reviews_error:		"Error saving your vote! Please, try again later.",
	error_like:			"Error saving your like! Please, try again later.",
	error_global:		"Global error text",
	name_empty:			"The name can&#039;t be empty",
	name_long:			"Too long name",
	email_empty:		"Too short (or empty) email address",
	email_long:			"Too long email address",
	email_not_valid:	"Invalid email address",
	subject_empty:		"The subject can&#039;t be empty",
	subject_long:		"Too long subject",
	text_empty:			"The message text can&#039;t be empty",
	text_long:			"Too long message text",
	send_complete:		"Send message complete!",
	send_error:			"Transmit failed!",
	login_empty:		"The Login field can&#039;t be empty",
	login_long:			"Too long login field",
	login_success:		"Login success! The page will be reloaded in 3 sec.",
	login_failed:		"Login failed!",
	password_empty:		"The password can&#039;t be empty and shorter then 4 characters",
	password_long:		"Too long password",
	password_not_equal:	"The passwords in both fields are not equal",
	registration_success:"Registration success! Please log in!",
	registration_failed:	"Registration failed!",
	geocode_error:		"Geocode was not successful for the following reason:",
	googlemap_not_avail:	"Google map API not available!",
	editor_save_success:	"Post content saved!",
	editor_save_error:	"Error saving post data!",
	editor_delete_post:	"You really want to delete the current post?",
	editor_delete_post_header:"Delete post",
	editor_delete_success:	"Post deleted!",
	editor_delete_error:		"Error deleting post!",
	editor_caption_cancel:	"Cancel",
	editor_caption_close:	"Close"
};

if (typeof PARALLELS_GLOBALS == 'undefined') var PARALLELS_GLOBALS = {};

// Theme base font
if (PARALLELS_GLOBALS['theme_font']=='') PARALLELS_GLOBALS['theme_font'] = 'Hind';
PARALLELS_GLOBALS['theme_font']		= 'Hind';
PARALLELS_GLOBALS['theme_font_widget_title']	= 'Ubuntu';
PARALLELS_GLOBALS['vc_edit_mode']		= false;

// Theme skin
PARALLELS_GLOBALS['theme_skin']			= 'default';
PARALLELS_GLOBALS['theme_skin_color']		= '#232a34';
PARALLELS_GLOBALS['theme_skin_bg_color']	= '#ffffff';

// AJAX parameters
PARALLELS_GLOBALS['ajax_url']			 = '#';
PARALLELS_GLOBALS['ajax_nonce']		 = '2f250b48fb';
PARALLELS_GLOBALS['ajax_nonce_editor'] = 'bc5dbfe06d';

// Site base url
PARALLELS_GLOBALS['site_url']			= '#';

// Slider height
PARALLELS_GLOBALS['slider_height']	= 100;

// System message
PARALLELS_GLOBALS['system_message']	= {
	message: '',
	status: '',
	header: ''
};

// User logged in
PARALLELS_GLOBALS['user_logged_in']	= false;

// Show table of content for the current page
PARALLELS_GLOBALS['toc_menu']		= 'float';
PARALLELS_GLOBALS['toc_menu_home']	= true;
PARALLELS_GLOBALS['toc_menu_top']	= true;

// Fix main menu

if (jQuery("body.no_fix_mainmenu").length > 0) {
	PARALLELS_GLOBALS['menu_fixed']		= false;
}else {
	PARALLELS_GLOBALS['menu_fixed']		= true;
}

// Use responsive version for main menu
PARALLELS_GLOBALS['menu_relayout']	= 960;
PARALLELS_GLOBALS['menu_responsive']	= 480;
PARALLELS_GLOBALS['menu_slider']     = true;

// Right panel demo timer
PARALLELS_GLOBALS['demo_time']		= 0;

// Video and Audio tag wrapper
PARALLELS_GLOBALS['media_elements_enabled'] = true;

// Use AJAX search
PARALLELS_GLOBALS['ajax_search_enabled'] 	= true;
PARALLELS_GLOBALS['ajax_search_min_length']	= 3;
PARALLELS_GLOBALS['ajax_search_delay']		= 200;

// Css Animation
PARALLELS_GLOBALS['css_animation']      = true;
PARALLELS_GLOBALS['menu_animation_in']  = 'none';
PARALLELS_GLOBALS['menu_animation_out'] = 'none';

// Popup windows engine
PARALLELS_GLOBALS['popup_engine']	= 'pretty';

// E-mail mask
PARALLELS_GLOBALS['email_mask']		= '^([a-zA-Z0-9_\-]+\.)*[a-zA-Z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$';

// Messages max length
PARALLELS_GLOBALS['contacts_maxlength']	= 1000;
PARALLELS_GLOBALS['comments_maxlength']	= 1000;

// Remember visitors settings
PARALLELS_GLOBALS['remember_visitors_settings']	= false;
PARALLELS_GLOBALS['admin_mode']			= false;
PARALLELS_GLOBALS['isotope_resize_delta']	= 0.3;
PARALLELS_GLOBALS['error_message_box']	= null;
PARALLELS_GLOBALS['viewmore_busy']		= false;
PARALLELS_GLOBALS['video_resize_inited']	= false;
PARALLELS_GLOBALS['top_panel_height']		= 0;

jQuery(document).ready(function() {
    "use strict";
	main_slider_init();
	esg_init();
	price_filter();
	hover_mobile();
	woo_review_star();
	woo_ship_calc();
});

/*Main slider*/
function main_slider_init() {
    if (jQuery("#mainslider_1").length > 0) {
    	"use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_8_1');
				e.gridwidth = [1900];
				e.gridheight = [890];
						
				e.sliderLayout = "fullwidth";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
					jQuery(sliderID).show().html(errorMessage);
			}
					var tpj=jQuery;
		
		var revapi8;
		if(tpj("#rev_slider_8_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_8_1");
		}else{
			revapi8 = tpj("#rev_slider_8_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"on",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 50,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					arrows: {
						style:"hesperiden",
						enable:true,
						hide_onmobile:true,
						hide_under:600,
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						tmp:'',
						left: {
							h_align:"left",
							v_align:"center",
							h_offset:30,
							v_offset:0
						},
						right: {
							h_align:"right",
							v_align:"center",
							h_offset:30,
							v_offset:0
						}
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:true,
						hide_under:600,
						style:"hephaistos",
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:30,
						space:5,
						tmp:''
					}
				},
				gridwidth:1900,
				gridheight:890,
				lazyType:"none",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50],
				},
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:1,
				stopAtSlide:0,
				shuffle:"off",
				autoHeight:"off",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:769,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"on",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	}

	if (jQuery("#mainslider_2").length > 0) {
    	"use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_9_1');
				e.gridwidth = [1820];
				e.gridheight = [840];
						
				e.sliderLayout = "fullwidth";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br> <br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong> <b>Put JS Includes To Body</b> </strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
					jQuery(sliderID).show().html(errorMessage);
			}
					var tpj=jQuery;
		
		var revapi9;
		if(tpj("#rev_slider_9_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_9_1");
		}else{
			revapi9 = tpj("#rev_slider_9_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"on",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 50,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					arrows: {
						style:"hesperiden",
						enable:true,
						hide_onmobile:true,
						hide_under:600,
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						tmp:'',
						left: {
							h_align:"left",
							v_align:"center",
							h_offset:30,
							v_offset:0
						},
						right: {
							h_align:"right",
							v_align:"center",
							h_offset:30,
							v_offset:0
						}
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:true,
						hide_under:600,
						style:"hephaistos",
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:30,
						space:5,
						tmp:''
					}
				},
				gridwidth:1820,
				gridheight:840,
				lazyType:"none",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50],
				},
				shadow:0,
				spinner:"off",
				stopLoop:"on",
				stopAfterLoops:1,
				stopAtSlide:0,
				shuffle:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"on",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:769,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"on",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	}

	if (jQuery("#mainslider_3").length > 0) {
    	"use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_10_1');
				e.gridwidth = [1920];
				e.gridheight = [955];
						
				e.sliderLayout = "fullwidth";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
					jQuery(sliderID).show().html(errorMessage);
			}
					var tpj=jQuery;
		
		var revapi10;
		if(tpj("#rev_slider_10_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_10_1");
		}else{
			revapi10 = tpj("#rev_slider_10_1").show().revolution({
				sliderType:"hero",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
				},
				gridwidth:1920,
				gridheight:955,
				lazyType:"none",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50],
					disable_onmobile:"on"
				},
				shadow:0,
				spinner:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"on",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:769,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"on",
					disableFocusListener:false,
				}
			});
		}
	}

	if (jQuery("#mainslider_4").length > 0) {
    	"use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_11_1');
				e.gridwidth = [1920];
				e.gridheight = [890];
						
				e.sliderLayout = "fullwidth";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br> <br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong> <b>Put JS Includes To Body</b> </strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
					jQuery(sliderID).show().html(errorMessage);
			}
					var tpj=jQuery;
		
		var revapi11;
		if(tpj("#rev_slider_11_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_11_1");
		}else{
			revapi11 = tpj("#rev_slider_11_1").show().revolution({
				sliderType:"hero",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
				},
				gridwidth:1920,
				gridheight:890,
				lazyType:"none",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50],
				},
				shadow:0,
				spinner:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"on",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:769,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"on",
					disableFocusListener:false,
				}
			});
		}
	}

	if (jQuery("#mainslider_5").length > 0) {
    	"use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_12_1');
				e.gridwidth = [1920];
				e.gridheight = [955];
						
				e.sliderLayout = "fullwidth";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br> <br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong> <b>Put JS Includes To Body</b> </strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
					jQuery(sliderID).show().html(errorMessage);
			}
					var tpj=jQuery;
		
		var revapi12;
		if(tpj("#rev_slider_12_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_12_1");
		}else{
			revapi12 = tpj("#rev_slider_12_1").show().revolution({
				sliderType:"standard",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"fullwidth",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
					keyboardNavigation:"off",
					keyboard_direction: "horizontal",
					mouseScrollNavigation:"off",
					onHoverStop:"on",
					touch:{
						touchenabled:"on",
						swipe_threshold: 75,
						swipe_min_touches: 50,
						swipe_direction: "horizontal",
						drag_block_vertical: false
					}
					,
					arrows: {
						style:"hesperiden",
						enable:true,
						hide_onmobile:true,
						hide_under:600,
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						tmp:'',
						left: {
							h_align:"left",
							v_align:"center",
							h_offset:30,
							v_offset:0
						},
						right: {
							h_align:"right",
							v_align:"center",
							h_offset:30,
							v_offset:0
						}
					}
					,
					bullets: {
						enable:true,
						hide_onmobile:true,
						hide_under:600,
						style:"hephaistos",
						hide_onleave:true,
						hide_delay:200,
						hide_delay_mobile:1200,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:30,
						space:5,
						tmp:''
					}
				},
				gridwidth:1920,
				gridheight:955,
				lazyType:"smart",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50],
				},
				shadow:0,
				spinner:"off",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:769,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"on",
					nextSlideOnWindowFocus:"off",
					disableFocusListener:false,
				}
			});
		}
	}

	if (jQuery("#mainslider_6").length > 0) {
    	"use strict";
		var setREVStartSize=function(){
			try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
				e.c = jQuery('#rev_slider_14_1');
				e.gridwidth = [1420];
				e.gridheight = [840];
						
				e.sliderLayout = "auto";
				if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
			}catch(d){console.log("Failure at Presize of Slider:"+d)}
		};
					
			
		setREVStartSize();
		function revslider_showDoubleJqueryError(sliderID) {
				var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
				errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
				errorMessage += "<br> <br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong> <b>Put JS Includes To Body</b> </strong> option to true.";
				errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
				errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>"
					jQuery(sliderID).show().html(errorMessage);
			}
					var tpj=jQuery;
		
		var revapi14;
		if(tpj("#rev_slider_14_1").revolution == undefined){
			revslider_showDoubleJqueryError("#rev_slider_14_1");
		}else{
			revapi14 = tpj("#rev_slider_14_1").show().revolution({
				sliderType:"hero",
				jsFileLocation:"js/vendor/revslider/public/assets/js/",
				sliderLayout:"auto",
				dottedOverlay:"none",
				delay:9000,
				navigation: {
				},
				gridwidth:1420,
				gridheight:840,
				lazyType:"smart",
				parallax: {
					type:"mouse",
					origo:"slidercenter",
					speed:2000,
					levels:[2,3,4,5,6,7,12,16,10,50],
				},
				shadow:0,
				spinner:"off",
				autoHeight:"off",
				disableProgressBar:"on",
				hideThumbsOnMobile:"off",
				hideSliderAtLimit:0,
				hideCaptionAtLimit:769,
				hideAllCaptionAtLilmit:0,
				debugMode:false,
				fallbacks: {
					simplifyAll:"on",
					disableFocusListener:false,
				}
			});
		}
	}

}

function esg_init() {
    
    if (jQuery("#esg-grid-4-1-wrap").length > 0) {
    	"use strict";
		var essapi_4;
		essapi_4 = jQuery("#esg-grid-4-1").tpessential({
	        gridID:4,
	        layout:"even",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:3,
	        loadMoreAjaxToken:"57f708b194",
	        loadMoreAjaxUrl:"#",
	        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        ajaxContentTarget:"ess-grid-ajax-container-",
	        ajaxScrollToOffset:"0",
	        ajaxCloseButton:"off",
	        ajaxContentSliding:"on",
	        ajaxScrollToOnLoad:"on",
	        ajaxNavButton:"off",
	        ajaxCloseType:"type1",
	        ajaxCloseInner:"false",
	        ajaxCloseStyle:"light",
	        ajaxClosePosition:"tr",
	        space:50,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        forceFullWidth:"on",
	        evenGridMasonrySkinPusher:"off",
	        lightBoxMode:"single",
	        animSpeed:300,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-4",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        aspectratio:"3:3",
	        responsiveEntries: [
							{ width:1400,amount:4},
							{ width:1170,amount:4},
							{ width:1024,amount:3},
							{ width:960,amount:3},
							{ width:778,amount:2},
							{ width:640,amount:1},
							{ width:480,amount:1}
							]
		});

		try{
			jQuery("#esg-grid-4-1 .esgbox").esgbox({
				padding : [0,0,0,0],
		      afterLoad:function() { 
		 		if (this.element.hasClass("esgboxhtml5")) {
				   var mp = this.element.data("mp4"),
				      ogv = this.element.data("ogv"),
				      webm = this.element.data("webm");
		         this.content ='<div style="width:100%;height:100%;"> <video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"> <source src="'+mp+'" type="video/mp4"> <source src="'+webm+'" type="video/webm"> <source src="'+ogv+'" type="video/ogg"> </video> </div>';
				   var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
				   };
				 },
				beforeShow : function () { 
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title="";
		   		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
					}
				},
				afterShow : function() {
				},
				openEffect : 'fade',
				closeEffect : 'fade',
				nextEffect : 'fade',
				prevEffect : 'fade',
				openSpeed : 'normal',
				closeSpeed : 'normal',
				nextSpeed : 'normal',
				prevSpeed : 'normal',
				helpers : {
					media : {},
				    title : {
						type:""
					}
				}
			});
		} catch (e) {}
	}

	if (jQuery("#esg-grid-1-1-wrap").length > 0) {
    	"use strict";
		var essapi_1;
		essapi_1 = jQuery("#esg-grid-1-1").tpessential({
	        gridID:1,
	        layout:"masonry",
	        forceFullWidth:"off",
	        lazyLoad:"on",
	        lazyLoadColor:"#FFFFFF",
	        row:9999,
	        // loadMoreAjaxToken:"57f708b194",
	        // loadMoreAjaxUrl:"#",
	        // loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        // ajaxContentTarget:"ess-grid-ajax-container-",
	        // ajaxScrollToOffset:"0",
	        // ajaxCloseButton:"off",
	        // ajaxContentSliding:"on",
	        // ajaxScrollToOnLoad:"on",
	        // ajaxNavButton:"off",
	        // ajaxCloseType:"type1",
	        // ajaxCloseInner:"false",
	        // ajaxCloseStyle:"light",
	        // ajaxClosePosition:"tr",
	        space:50,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        lightBoxMode:"single",
	        animSpeed:300,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-1",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        responsiveEntries: [
							{ width:1400,amount:3},
							{ width:1170,amount:3},
							{ width:1024,amount:3},
							{ width:960,amount:2},
							{ width:778,amount:1},
							{ width:640,amount:1},
							{ width:480,amount:1}
							]
		});

	}

	if (jQuery("#esg-grid-2-1-wrap").length > 0) {
    	"use strict";
		var essapi_2;
		essapi_2 = jQuery("#esg-grid-2-1").tpessential({
	        gridID:2,
	        layout:"cobbles",
	        forceFullWidth:"off",
	        lazyLoad:"on",
	        lazyLoadColor:"#FFFFFF",
	        row:9999,
	        // loadMoreAjaxToken:"57f708b194",
	        // loadMoreAjaxUrl:"#",
	        // loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        // ajaxContentTarget:"ess-grid-ajax-container-",
	        // ajaxScrollToOffset:"0",
	        // ajaxCloseButton:"off",
	        // ajaxContentSliding:"on",
	        // ajaxScrollToOnLoad:"on",
	        // ajaxNavButton:"off",
	        // ajaxCloseType:"type1",
	        // ajaxCloseInner:"false",
	        // ajaxCloseStyle:"light",
	        // ajaxClosePosition:"tr",
	        space:0,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        lightBoxMode:"single",
	        animSpeed:300,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-2",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        aspectratio:"4:3",
	        responsiveEntries: [
							{ width:1400,amount:6},
							{ width:1170,amount:6},
							{ width:1024,amount:6},
							{ width:960,amount:4},
							{ width:778,amount:4},
							{ width:640,amount:2},
							{ width:480,amount:2}
							]
		});

		try{
		jQuery("#esg-grid-2-1 .esgbox").esgbox({
			padding : [0,0,0,0],
	      afterLoad:function() { 
	 		if (this.element.hasClass("esgboxhtml5")) {
			   var mp = this.element.data("mp4"),
			      ogv = this.element.data("ogv"),
			      webm = this.element.data("webm");
	         this.content ='<div style="width:100%;height:100%;"> <video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"> <source src="'+mp+'" type="video/mp4"> <source src="'+webm+'" type="video/webm"> <source src="'+ogv+'" type="video/ogg"> </video> </div>';
			   var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
			   };
			 },
			beforeShow : function () { 
				this.title = jQuery(this.element).attr('lgtitle');
				if (this.title) {
					this.title="";
	   		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
				}
			},
			afterShow : function() {
			},
			openEffect : 'fade',
			closeEffect : 'fade',
			nextEffect : 'fade',
			prevEffect : 'fade',
			openSpeed : 'normal',
			closeSpeed : 'normal',
			nextSpeed : 'normal',
			prevSpeed : 'normal',
			helpers : {
				media : {},
			    title : {
					type:""
				}
			}
		});

		 } catch (e) {}

	}

	if (jQuery("#esg-grid-3-1-wrap").length > 0) {
    	"use strict";
		function eggbfc(winw,resultoption) {
			var lasttop = winw,
			lastbottom = 0,
			smallest =9999,
			largest = 0,
			samount = 0,
			lamoung = 0,
			lastamount = 0,
			resultid = 0,
			resultidb = 0,
			responsiveEntries = [
								{ width:1400,amount:2},
								{ width:1170,amount:2},
								{ width:1024,amount:2},
								{ width:960,amount:2},
								{ width:778,amount:1},
								{ width:640,amount:1},
								{ width:480,amount:1}
								];
			if (responsiveEntries!=undefined && responsiveEntries.length>0)
				jQuery.each(responsiveEntries, function(index,obj) {
					var curw = obj.width != undefined ? obj.width : 0,
						cura = obj.amount != undefined ? obj.amount : 0;
					if (smallest>curw) {
						smallest = curw;
						samount = cura;
						resultidb = index;
					}
					if (largest<curw) {
						largest = curw;
						lamount = cura;
					}
					if (curw>lastbottom && curw<=lasttop) {
						lastbottom = curw;
						lastamount = cura;
						resultid = index;
					}
				})
				if (smallest>winw) {
					lastamount = samount;
					resultid = resultidb;
				}
				var obj = new Object;
				obj.index = resultid;
				obj.column = lastamount;
				if (resultoption=="id")
					return obj;
				else
					return lastamount;
			}
		if ("even"=="even") {
			var coh=0,
				container = jQuery("#esg-grid-3-1");
			var	cwidth = container.width(),
				ar = "4:3",
				gbfc = eggbfc(jQuery(window).width(),"id"),
			row = 3;
		ar = ar.split(":");
		aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
		coh = cwidth / aratio;
		coh = coh/gbfc.column*row;
			var ul = container.find("ul").first();
			ul.css({display:"block",height:coh+"px"});
		}
		var essapi_3;
		essapi_3 = jQuery("#esg-grid-3-1").tpessential({
	        gridID:3,
	        layout:"even",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:3,
	        // loadMoreAjaxToken:"37b424aba9",
	        // loadMoreAjaxUrl:"http://parallels.themerex.net/wp-admin/admin-ajax.php",
	        // loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        // ajaxContentTarget:"ess-grid-ajax-container-",
	        // ajaxScrollToOffset:"0",
	        // ajaxCloseButton:"off",
	        // ajaxContentSliding:"on",
	        // ajaxScrollToOnLoad:"on",
	        // ajaxNavButton:"off",
	        // ajaxCloseType:"type1",
	        // ajaxCloseInner:"false",
	        // ajaxCloseStyle:"light",
	        // ajaxClosePosition:"tr",
	        space:0,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        evenGridMasonrySkinPusher:"off",
	        lightBoxMode:"single",
	        animSpeed:300,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-3",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        aspectratio:"4:3",
	        responsiveEntries: [
							{ width:1400,amount:2},
							{ width:1170,amount:2},
							{ width:1024,amount:2},
							{ width:960,amount:2},
							{ width:778,amount:1},
							{ width:640,amount:1},
							{ width:480,amount:1}
							]
		});
	}

	if (jQuery("#esg-grid-5-1-wrap").length > 0) {
    	"use strict";
		var essapi_5;
		essapi_5 = jQuery("#esg-grid-5-1").tpessential({
	        gridID:5,
	        layout:"masonry",
	        forceFullWidth:"off",
	        lazyLoad:"on",
	        lazyLoadColor:"#FFFFFF",
	        row:9999,
	        // loadMoreAjaxToken:"37b424aba9",
	        // loadMoreAjaxUrl:"http://parallels.themerex.net/wp-admin/admin-ajax.php",
	        // loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        // ajaxContentTarget:"ess-grid-ajax-container-",
	        // ajaxScrollToOffset:"0",
	        // ajaxCloseButton:"off",
	        // ajaxContentSliding:"on",
	        // ajaxScrollToOnLoad:"on",
	        // ajaxNavButton:"off",
	        // ajaxCloseType:"type1",
	        // ajaxCloseInner:"false",
	        // ajaxCloseStyle:"light",
	        // ajaxClosePosition:"tr",
	        space:50,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        lightBoxMode:"single",
	        animSpeed:300,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-5",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        responsiveEntries: [
							{ width:1400,amount:3},
							{ width:1170,amount:3},
							{ width:1024,amount:3},
							{ width:960,amount:2},
							{ width:778,amount:1},
							{ width:640,amount:1},
							{ width:480,amount:1}
							]
		});
	}
}

// Price range slider
function price_filter() {
   	"use strict";
    if (jQuery("#slider-range").length > 0) {
        jQuery("#slider-range").slider({
            range: true,
            min: 0,
            max: 250,
            values: [0, 250],
            slide: function(event, ui) {
                jQuery("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        jQuery("#amount").val("$" + jQuery("#slider-range").slider("values", 0) +
            " - $" + jQuery("#slider-range").slider("values", 1));
    }
}

// Hover effects on mobile
function hover_mobile() {
   	"use strict";
    if (jQuery("#mobile_tap_hover").length > 0) {
        $('a.taphover').on("touchstart", function(e) {
            var link = $(this); //preselect the link
            if (link.hasClass('hover')) {
                return true;
            } else {
                link.addClass("hover");
                //$(this).parent().css({'z-index': 1});
                $('a.taphover').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        });

        $('.imgNav.taphover').on("touchstart", function(e) {
            var link = $(this); //preselect the link
            if (link.hasClass('hover')) {
                $('.itemNext.taphover').not(this).removeClass("hover");
                $('.itemPrev.taphover').not(this).removeClass("hover");
                return true;
            } else {
                link.addClass("hover");
                $('.imgNav.taphover').not(this).removeClass("hover");
                e.preventDefault();
                return false; //extra, and to make sure the function has consistent return points
            }
        });
    }
}

// Select review stars
function woo_review_star() {
   	"use strict";
    if (jQuery(".stars", "#review_form").length > 0) {
        $(".stars").find("a").on("click", function() {
            $("a.active").removeClass("active");
            $(this).addClass("active");
            return false;
        });
    }
}

function woo_ship_calc() {
   	"use strict";
	if (jQuery("#shipping_method_0").length > 0) {
		jQuery('.shipping-calculator-button').on('click' ,function(e){
			"use strict";
			if (jQuery('.shipping-calculator-form').hasClass('open-shipping-calculator-form'))
				jQuery('.shipping-calculator-form').removeClass('open-shipping-calculator-form');
			else {
				jQuery('.shipping-calculator-form').addClass('open-shipping-calculator-form');
			}
			e.preventDefault();
			return false;
		});
	}
	if (jQuery("body.woocommerce-checkout").length > 0) {
		jQuery(".showlogin", ".woocommerce-info").on('click' ,function(e){
			"use strict";
			if (jQuery('.login_woo_checkout','.woocommerce').hasClass('open_login_woo_checkout'))
				jQuery('.login_woo_checkout','.woocommerce').removeClass('open_login_woo_checkout');
			else {
				jQuery('.login_woo_checkout','.woocommerce').addClass('open_login_woo_checkout');
			}
			e.preventDefault();
			return false;
		});

		jQuery(".showcoupon", ".woocommerce-info").on('click' ,function(e){
			"use strict";
			if (jQuery('.coupon_woo_checkout','.woocommerce').hasClass('open_coupon_woo_checkout'))
				jQuery('.coupon_woo_checkout','.woocommerce').removeClass('open_coupon_woo_checkout');
			else {
				jQuery('.coupon_woo_checkout','.woocommerce').addClass('open_coupon_woo_checkout');
			}
			e.preventDefault();
			return false;
		});

		jQuery('#ship-to-different-address-checkbox').change(function(){
			if (jQuery('.shipping_woo_address','.woocommerce-shipping-fields').hasClass('open_shipping_woo_checkout'))
				jQuery('.shipping_woo_address','.woocommerce-shipping-fields').removeClass('open_shipping_woo_checkout');
			else {
				jQuery('.shipping_woo_address','.woocommerce-shipping-fields').addClass('open_shipping_woo_checkout');
			}
		});
		jQuery('#createaccount').change(function(){
			if (jQuery('.create-woo-account','.woocommerce-billing-fields').hasClass('open-create-woo-account'))
				jQuery('.create-woo-account','.woocommerce-billing-fields').removeClass('open-create-woo-account');
			else {
				jQuery('.create-woo-account','.woocommerce-billing-fields').addClass('open-create-woo-account');
			}
		});
	}
}