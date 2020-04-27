=== Aos Wordpress Hoc ===
Contributors:      Bowriverstudio, Maurice Tadros, Disnel and 
Tags:              block
Requires at least: 5.4
Tested up to:      5.4
Stable tag:        0.1.0
Requires PHP:      7.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Adds attributes to support Animations on Scroll (AOS) library.


== Description ==

This plugin enqueues the javascript and css from AOS and adds the ability to 

For details on the library itself please read: https://github.com/michalsnik/aos


== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Demo ==

http://michalsnik.github.io/aos/


== Installation ==

Standard Install

1. Upload the plugin files to the `/wp-content/plugins/aos-wordpress-hoc` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress



== Frequently Asked Questions ==

= CSS Filter =

By default the AOS css is enqueue from:  https://unpkg.com/aos@next/dist/aos.css

To remove this use:

```add_filter('aos-enqueue-style', '__return_false');```



= JS Library Filter =

By default the AOS js is enqueued from: https://unpkg.com/aos@next/dist/aos.js
To remove this use:

```add_filter('aos-enqueue-script', '__return_false');```

= JS Library Init =

The AOS init script is:

```
AOS.init( {
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 1000, // values from 0 to 3000, with step 50ms
	easing: 'ease-out-back', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
} );
```
It can be removed by:

```add_filter('aos-enqueue-init-script', '__return_false');```


== Changelog ==

= 0.1.0 =
* Release

== Support ==

Please open an issue on github: 
https://github.com/Bowriverstudio/aos-wordpress-hoc/issues

== Github  ==

https://github.com/Bowriverstudio/aos-wordpress-hoc
