;(function($) {
	$(document).on('ready', function() {
		initJCF();
		initJCFnoDrop();
		lightbox();
		initClosePopup();
		initInputNumber();
	});

	function initInputNumber() {

		$('.field-main-in').on('keyup', function(e) {
			_this = this;
			setTimeout(function() {
				if( _this.value.indexOf(',') !== -1 ) {
					_this.value = _this.value.replace(/\,/g,'.');
					_this.value = parseFloat( isNaN(_this.value) ? 0 : _this.value ).toFixed(2);
					_this.value = _this.value.replace(/\./g,',');
				} else {
					if(_this.value === '' || isNaN(_this.value)) {
						_this.value = '';
					} else {
						_this.value = parseFloat(_this.value).toFixed(2)
					}
				}
			}, 700);
		});
	}

	function initClosePopup() {
		$(document).on('click', function(e) {
			if($(e.target).closest('.jcf-select').length != 0) return false;
			$('.jcf-select-drop').remove();
			$('.jcf-select ').removeClass('jcf-drop-active');
		});
	}

	function lightbox() {
		$('.cancel-popup').on('click', function() {
			jQuery.fancybox.close()
		});

		$("[data-fancybox]").fancybox({
			clickOutside : false,
			clickSlide : false
		});
	}

	function initJCFnoDrop() {

		jcf.setOptions('Select', {
			wrapNative: true,
			fakeDropInBody: true,
			wrapNativeOnMobile: true
		});

		jcf.replaceAll('.select-no-drop');
	}

	function initJCF() {

		jcf.setOptions('Select', {
			wrapNative: false,
			fakeDropInBody: false
		});

		jcf.replaceAll('.select-drop')
	}

})(jQuery);