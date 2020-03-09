//$(function () {
//    $("#cover").fadeOut(1000);
//});

/**
 * Command to watch video in a modal.
 * It is a workaround to dismount the video, because otherwise it keeps playing even if closed.
 */
var $saved;
function watchVideo() {
	if ($saved) {
		$('body').prepend($saved);
	} else {
		var $tag = $('#watch-the-video');
        $saved = $tag;
        $tag.css('opacity', '1');
		$tag.css('z-index', '100000000');
	}
}
function hideVideo() {
	$saved.remove();
}

/**
 * HotJar
 */
(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 1095061, hjsv: 6 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

/**
 * Google Analytics
 * Requires this script tag: <script async src="https://www.googletagmanager.com/gtag/js?id=UA-51367222-1"></script>
 */
(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'UA-51367222-1');
})();
