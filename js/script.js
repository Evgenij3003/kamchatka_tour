/*==========================================================================================================================================================================*/
/* Проверка устройства, на котором открыта страница */
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};


function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}
if (isIE()) {
    document.querySelector("body").classList.add("ie");
}
if (isMobile.any()) {
    document.querySelector("body").classList.add("_touch");
}


function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector("body").classList.add("_webp");
    } else {
        document.querySelector("body").classList.add("_no-webp");
    }
});



/*==========================================================================================================================================================================*/
/* Menu Burger */
let iconMenu = document.querySelector(".header__menu-icon");
if (iconMenu != null) {
    let delay = 500;
    let body = document.querySelector("body");
    let menuBody = document.querySelector(".header__menu");
    iconMenu.addEventListener("click", function (e) {
        if (!body.classList.contains("_wait")) {
            body_lock(delay);
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        }
    });
};


// Закрытие Меню-Бургер:
function menu_close() {
    let iconMenu = document.querySelector(".menu-header__icon");
    let menuBody = document.querySelector(".header__menu");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}


function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains("_lock")) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}
let unlock = true;


function body_lock_remove(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = "0px";
            }
            body.style.paddingRight = "0px";
            body.classList.remove("_lock");
        }, delay);
        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}


function body_lock_add(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
        }
        body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
        body.classList.add("_lock");
        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}



/*==========================================================================================================================================================================*/
/* Slider Swiper */
window.onload = function() {
    if (document.querySelector(".main__slider")) {
        let sliderMain = new Swiper(".main__slider", {
            navigation: {
                prevEl: ".slider-main__button-prev",
                nextEl: ".slider-main__button-next",
            },
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
			autoplay: {                                                               
                delay: 5000,                                                              		
            },
            speed: 1500,
			slidesPerView: "auto",
			loop: true,
			loopSlides: 3,	
			mousewheel: {																	
				sensitivity: 1,	
				eventsTarget: ".main__slider"										
			},
        })
    }


	if (document.querySelector(".day-one__slider")) {
		let sliderDayOne = new Swiper(".day-one__slider", {
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
			navigation: {
                prevEl: ".day-one .slider-day__button-prev",
                nextEl: ".day-one .slider-day__button-next",
            },
            slidesPerView: "auto",
            speed: 1500,
            autoplay: {                                                               
                delay: 5000,                                                              		
            },
			loop: true,
			loopSlides: 3,	
		}
	)}


	if (document.querySelector(".day-three__slider")) {
		let sliderDayThree = new Swiper(".day-three__slider", {
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
			navigation: {
                prevEl: ".day-three .slider-day__button-prev",
                nextEl: ".day-three .slider-day__button-next",
            },
			loop: true,
			loopSlides: 3,
            slidesPerView: "auto",
            speed: 1500,
            autoplay: {                                                               
                delay: 5000,
				reverseDirection: false,
				centeredSlides: false,                                                              		
            },
			breakpoints: {
				1200: {
					autoplay: {                                                               
						delay: 5000,
						reverseDirection: false,                                                              		
					},
				},
				centeredSlides: true,
			},	
		}
	)}


	if (document.querySelector(".day-four__slider")) {
		let sliderDayFour = new Swiper(".day-four__slider", {
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
			navigation: {
                prevEl: ".days__four .slider-day__button-prev",
                nextEl: ".days__four .slider-day__button-next",
            },
			loop: true,
			loopSlides: 3,	
			slidesPerView: "auto",
            speed: 1500,
            autoplay: {                                                               
                delay: 5000,                                                              		
            },	
		}
	)}


	if (document.querySelector(".day-five__slider")) {
		let sliderDayFive = new Swiper(".day-five__slider", {
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
			navigation: {
                prevEl: ".days__five .slider-day__button-prev",
                nextEl: ".days__five .slider-day__button-next",
            },
			loop: true,
			loopSlides: 3,
            slidesPerView: "auto",
            speed: 1500,
            autoplay: {                                                               
                delay: 5000,
				reverseDirection: false,
				centeredSlides: false,                                                              		
            },
			breakpoints: {
				1200: {
					autoplay: {                                                               
						delay: 5000,
						reverseDirection: false,                                                              		
					},
				},
				centeredSlides: true,
			},	
		}
	)}


	if (document.querySelector(".day-six__slider")) {
		let sliderDaySix = new Swiper(".day-six__slider", {
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
			navigation: {
                prevEl: ".days__six .slider-day__button-prev",
                nextEl: ".days__six .slider-day__button-next",
            },
			loop: true,
			loopSlides: 3,
            slidesPerView: "auto",
            speed: 1500,
            autoplay: {                                                               
                delay: 5000,                                                             		
            },	
		}
	)}


	if (document.querySelector(".day-seven__slider")) {
		let sliderDaySix = new Swiper(".day-seven__slider", {
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true,
            },
			navigation: {
                prevEl: ".day-seven .slider-day__button-prev",
                nextEl: ".day-seven .slider-day__button-next",
            },
			loop: true,
			loopSlides: 3,
            slidesPerView: "auto",
            speed: 1500,
            autoplay: {                                                               
                delay: 5000,
				reverseDirection: false,
				centeredSlides: false,                                                              		
            },
			breakpoints: {
				1200: {
					autoplay: {                                                               
						delay: 5000,
						reverseDirection: false,                                                              		
					},
				},
				centeredSlides: true,
			},	
		}
	)}
}



/*==========================================================================================================================================================================*/
/* Динамический Адаптив */
(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll("[data-da]");
	let daElementsArray = [];
	let daMatchMedia = [];
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute("data-da");
			if (daMove != "") {
				const daArray = daMove.split(",");
				const daPlace = daArray[1] ? daArray[1].trim() : "last";
				const daBreakpoint = daArray[2] ? daArray[2].trim() : "767";
				const daType = daArray[3] === "min" ? daArray[3].trim() : "max";
				const daDestination = document.querySelector("." + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute("data-da-index", number);
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector("." + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;
			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}


	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;
			if (daMatchMedia[index].matches) {
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === "first") {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === "last") {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
	}
	dynamicAdapt();


	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute("data-da-index");
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace["parent"];
		const indexPlace = originalPlace["index"];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}


	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}


	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				if (childrenElement.getAttribute("data-da") == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}


	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) {
				return -1
			} else {
				return 1
			}
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) {
				return 1
			} else {
				return -1
			}
		});
	}
}());



/*==========================================================================================================================================================================*/
/* Quantity */
function quantity() {
	let quantityButtons = document.querySelectorAll(".quantity__button");
	if (quantityButtons.length > 0) {
		for (let index = 0; index < quantityButtons.length; index++) {
			let quantityButton = quantityButtons[index];
			if (parseInt(quantityButton.closest(".quantity").querySelector("._input").value) === 1) {
				document.querySelector(".quantity__button_minus").classList.add("_disabled");
			}
			quantityButton.addEventListener("click", function (e) {
				let value = parseInt(quantityButton.closest(".quantity").querySelector("._input").value);
				if (this.parentElement.classList.contains("quantity__input")) {
					if (quantityButton.classList.contains("quantity__button_plus")) {
						value++;
						document.querySelector(".quantity__button_minus").classList.remove("_disabled");
					} else {
						value--;
						if (value < 1) {
							value = 1;
						}
					}
					quantityButton.closest(".quantity").querySelector("input").value = value;
				};
				if (value == 1) {
					document.querySelector(".quantity__button_minus").classList.add("_disabled");
				}
			})
		};
	}
}
quantity();



/*==========================================================================================================================================================================*/
/* Анимация при Скролле */
window.addEventListener("DOMContentLoaded", function () {
	const options = {
		root: null,
		rootMargin: "0% 0% -35%",
		threshold: 1,
	}


	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("_active");
			} else {
				entry.target.classList.remove("_active");
			}
		})
	}, options);
	document.querySelectorAll("._days-ball").forEach(item => {
		observer.observe(item);
	});



/*==========================================================================================================================================================================*/
/* Lazy Loading */
	const optionsLazy = {
		root: null,
		rootMargin: "600px",
	}


	const observerLazy = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				if (entry.target.querySelector("source")) {
					let pictureSource = entry.target.querySelector("source");
					pictureSource.srcset = pictureSource.dataset.srcset;
				}
                let pictureImage = entry.target.querySelector("img");
                pictureImage.src = pictureImage.dataset.src;
				observerLazy.unobserve(entry.target);
			}
		})
	}, optionsLazy);
	document.querySelectorAll("._lazy").forEach(item => {
		observerLazy.observe(item);
	})
})



/*==========================================================================================================================================================================*/
/* Select */
let selects = document.getElementsByTagName('select');
if (selects.length > 0) {
	selects_init();
}


function selects_init() {
	for (let index = 0; index < selects.length; index++) {
		const select = selects[index];
		select_init(select);
	}
	document.addEventListener('click', function (e) {
		selects_close(e);
	});
	document.addEventListener('keydown', function (e) {
		if (e.which == 27) {
			selects_close(e);
		}
	});
}


function selects_close(e) {
	const selects = document.querySelectorAll('.select');
	if (!e.target.closest('.select')) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			select.classList.remove('_active');
			_slideUp(select_body_options, 200);
		}
	}
}


function select_init(select) {
	const select_parent = select.parentElement;
	const select_modifikator = select.getAttribute('class');
	const select_selected_option = select.querySelector('option:checked');
	select.setAttribute('data-default', select_selected_option.value);
	select.style.display = 'none';
	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');
	let new_select = select.parentElement.querySelector('.select');
	new_select.appendChild(select);
	select_item(select);
}


function select_item(select) {
	const select_parent = select.parentElement;
	const select_items = select_parent.querySelector('.select__item');
	const select_options = select.querySelectorAll('option');
	const select_selected_option = select.querySelector('option:checked');
	const select_selected_text = select_selected_option.text;
	const select_type = select.getAttribute('data-type');
	if (select_items) {
		select_items.remove();
	}
	let select_type_content = '';
	if (select_type == 'input') {
		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
	} else {
		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
	}
	select_parent.insertAdjacentHTML('beforeend',
		'<div class="select__item">' +
		'<div class="select__title">' + select_type_content + '</div>' +
		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
		'</div></div>');
	select_actions(select, select_parent);
}


function select_actions(original, select) {
	const select_item = select.querySelector('.select__item');
	const select_body_options = select.querySelector('.select__options');
	const select_options = select.querySelectorAll('.select__option');
	const select_type = original.getAttribute('data-type');
	const select_input = select.querySelector('.select__input');
	select_item.addEventListener('click', function () {
		let selects = document.querySelectorAll('.select');
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			const select_body_options = select.querySelector('.select__options');
			if (select != select_item.closest('.select')) {
				select.classList.remove('_active');
				_slideUp(select_body_options, 200);
			}
		}
		_slideToggle(select_body_options, 200);
		select.classList.toggle('_active');
	});
	for (let index = 0; index < select_options.length; index++) {
		const select_option = select_options[index];
		const select_option_value = select_option.getAttribute('data-value');
		const select_option_text = select_option.innerHTML;
		if (select_type == 'input') {
			select_input.addEventListener('keyup', select_search);
		} else {
			if (select_option.getAttribute('data-value') == original.value) {
				select_option.style.display = 'none';
			}
		}
		select_option.addEventListener('click', function () {
			for (let index = 0; index < select_options.length; index++) {
				const el = select_options[index];
				el.style.display = 'block';
			}
			if (select_type == 'input') {
				select_input.value = select_option_text;
				original.value = select_option_value;
			} else {
				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
				original.value = select_option_value;
				select_option.style.display = 'none';
			}
		});
	}
}


function select_get_options(select_options) {
	if (select_options) {
		let select_options_content = '';
		for (let index = 0; index < select_options.length; index++) {
			const select_option = select_options[index];
			const select_option_value = select_option.value;
			if (select_option_value != '') {
				const select_option_text = select_option.text;
				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
			}
		}
		return select_options_content;
	}
}


function select_search(e) {
	let select_block = e.target.closest('.select ').querySelector('.select__options');
	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
	let select_search_text = e.target.value.toUpperCase();
	for (let i = 0; i < select_options.length; i++) {
		let select_option = select_options[i];
		let select_txt_value = select_option.textContent || select_option.innerText;
		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
			select_option.style.display = "";
		} else {
			select_option.style.display = "none";
		}
	}
}


function selects_update_all() {
	let selects = document.querySelectorAll('select');
	if (selects) {
		for (let index = 0; index < selects.length; index++) {
			const select = selects[index];
			select_item(select);
		}
	}
}



/*==========================================================================================================================================================================*/
/* Slide Toggle */
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + "ms";
	target.style.height = target.offsetHeight + "px";
	target.offsetHeight;
	target.style.overflow = "hidden";
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = "none";
		target.style.removeProperty("height");
		target.style.removeProperty("padding-top");
		target.style.removeProperty("padding-bottom");
		target.style.removeProperty("margin-top");
		target.style.removeProperty("margin-bottom");
		target.style.removeProperty("overflow");
		target.style.removeProperty("transition-duration");
		target.style.removeProperty("transition-property");
		target.classList.remove("_slide");
	}, duration);
}


let _slideDown = (target, duration = 500) => {
	target.style.removeProperty("display");
	let display = window.getComputedStyle(target).display;
	if (display === "none")
		display = "block";
	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = "hidden";
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + "ms";
	target.style.height = height + "px";
	target.style.removeProperty("padding-top");
	target.style.removeProperty("padding-bottom");
	target.style.removeProperty("margin-top");
	target.style.removeProperty("margin-bottom");
	window.setTimeout(() => {
		target.style.removeProperty("height");
		target.style.removeProperty("overflow");
		target.style.removeProperty("transition-duration");
		target.style.removeProperty("transition-property");
		target.classList.remove("_slide");
	}, duration);
}


let _slideToggle = (target, duration = 500) => {
    if (!target.classList.contains("_slide")) {
        target.classList.add("_slide");
        if (window.getComputedStyle(target).display === "none") {
            return _slideDown(target, duration);
        } else {
            return _slideUp(target, duration);
        }
    }
}