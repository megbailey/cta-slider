var contactEl;
var toggleBtn;
var contactElHidden = true;
var toggled = false;

$(function() {
    contactEl = $('#cta-slider');
    toggleBtn = contactEl.find('.cta-opener');

    toggleBtn.click(_toggleContactEl);
    $(window).scroll(_onScroll);
    toggleBtn.focus(_toggleContactEl);

});

function _toggleContactEl() {
    TweenLite.to(contactEl, 0.3, {
        x: contactElHidden ? '0%' : '100%'
    });
    contactElHidden = !contactElHidden;
}

function _onScroll() {
	// scrolled half-way
    if ($(window).scrollTop() > $(document).height() * 0.5) {
        //only opens once upon scroll
        if (contactElHidden && !toggled) {
            _toggleContactEl();
            toggled = true;
        }
    }
}
