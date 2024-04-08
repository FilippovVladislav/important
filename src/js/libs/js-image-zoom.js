function ImageZoom(container, opts) {
    "use strict";
    var options = opts;
    if (!container) {
        return;
    }
    var data = {
        sourceImg: {
            element: null,
            width: 0,
            height: 0,
            naturalWidth: 0,
            naturalHeight: 0
        },
        zoomedImgOffset: {
            vertical: 0,
            horizontal: 0
        },
        zoomedImg: {
            element: null,
            width: 0,
            height: 0
        },
        zoomLens: {
            element: null,
            width: 0,
            height: 0
        }
    };

    var div = document.createElement('div');
    var lensDiv = document.createElement('div');
    var scaleX;
    var scaleY;
    var offset;
    data.zoomedImgOffset = {
        vertical: options.offset && options.offset.vertical ? options.offset.vertical : 0,
        horizontal: options.offset && options.offset.horizontal ? options.offset.horizontal : 0
    };
    data.zoomPosition = options.zoomPosition || 'right';
    data.zoomContainer = (options.zoomContainer) ? options.zoomContainer : container;
    function getOffset(el) {
        if (el) {
            var elRect = el.getBoundingClientRect();
            return {left: elRect.left, top: elRect.top};
        }
        return {left: 0, top: 0};
    }

    function leftLimit(min) {
        return options.width - min;
    }

    function topLimit(min) {
        return options.height - min;
    }

    function getValue(val, min, max) {
        if (val < min) {
            return min;
        }
        if (val > max) {
            return max;
        }
        return val;
    }

    function getPosition(v, min, max) {
        var value = getValue(v, min, max);
        return value - min;
    }

    function zoomLensLeft(left) {
        var leftMin = data.zoomLens.width / 2;
        return getPosition(left, leftMin, leftLimit(leftMin));
    }

    function zoomLensTop(top) {
        var topMin = data.zoomLens.height / 2;
        return getPosition(top, topMin, topLimit(topMin));
    }

    function setZoomedImgSize(options, data) {
        if (options.scale) {
            data.zoomedImg.element.style.width = options.width * options.scale + 'px';
            data.zoomedImg.element.style.height = options.height * options.scale + 'px';
        } else if (options.zoomWidth) {
            data.zoomedImg.element.style.width = options.zoomWidth + 'px';
            data.zoomedImg.element.style.height = data.sourceImg.element.style.height;
        } else {
            data.zoomedImg.element.style.width = '100%';
            data.zoomedImg.element.style.height = '100%';
        }
    }

    function onSourceImgLoad() {
        // use height determined by browser if height is not set in options
        options.height = options.height || data.sourceImg.element.height;
        data.sourceImg.element.style.height = options.height + 'px';

        // use width determined by browser if width is not set in options
        options.width = options.width || data.sourceImg.element.width;
        data.sourceImg.element.style.width = options.width + 'px';

        setZoomedImgSize(options, data);

        data.sourceImg.naturalWidth = data.sourceImg.element.naturalWidth;
        data.sourceImg.naturalHeight = data.sourceImg.element.naturalHeight;
        data.zoomedImg.element.style.backgroundSize = data.sourceImg.naturalWidth + 'px ' + data.sourceImg.naturalHeight + 'px';

        if (options.zoomStyle) {
            data.zoomedImg.element.style.cssText += options.zoomStyle;
        }
        if (options.zoomLensStyle) {
            data.zoomLens.element.style.cssText += options.zoomLensStyle;
        } else {
            data.zoomLens.element.style.background = 'white';
            data.zoomLens.element.style.opacity = '0.4';
        }

        scaleX = data.sourceImg.naturalWidth / options.width;
        scaleY = data.sourceImg.naturalHeight / options.height;
        offset = getOffset(data.sourceImg.element);

        // set zoomLens dimensions
        // if custom scale is set
        if (options.scale) {
            data.zoomLens.width = options.width / (data.sourceImg.naturalWidth / (options.width * options.scale));
            data.zoomLens.height = options.height / (data.sourceImg.naturalHeight / (options.height * options.scale));
        }

        // else if zoomWidth is set
        else if (options.zoomWidth) {
            data.zoomLens.width = options.zoomWidth / scaleX;
            data.zoomLens.height = options.height / scaleY;
        }

        // else read from the zoomedImg
        else {
            data.zoomedImg.element.style.display = 'block';
            data.zoomLens.width = data.zoomedImg.element.clientWidth / scaleX;
            data.zoomLens.height = data.zoomedImg.element.clientHeight / scaleY;
            data.zoomedImg.element.style.display = 'none';
        }

        data.zoomLens.element.style.position = 'absolute';
        data.zoomLens.element.style.width = data.zoomLens.width + 'px';
        data.zoomLens.element.style.height = data.zoomLens.height + 'px';
        data.zoomLens.element.pointerEvents = 'none';
    }

    function setup() {
        // create sourceImg element
        if (options.img) {
            var img = document.createElement('img');
            img.src = options.img;
            data.sourceImg.element = container.appendChild(img);
        }

        // or get sourceImg element from specified container
        else {
            data.sourceImg.element = container.children[0];

            // if sourceImg is not an img (might be a picture element), try to find one
            if (data.sourceImg.element.nodeName !== "IMG") {
                data.sourceImg.element = data.sourceImg.element.querySelector('img');
            }
        }

        options = options || {};
        container.style.position = 'relative';
        data.sourceImg.element.style.width = options.width ? options.width + 'px' : 'auto';
        data.sourceImg.element.style.height = options.height ? options.height + 'px' : 'auto';

        data.zoomLens.element = container.appendChild(lensDiv);
        data.zoomLens.element.style.display = 'none';
        data.zoomLens.element.classList.add('js-image-zoom__zoomed-area');

        data.zoomedImg.element = data.zoomContainer.appendChild(div);
        data.zoomedImg.element.classList.add('js-image-zoom__zoomed-image');
        data.zoomedImg.element.style.backgroundImage = "url('" + data.sourceImg.element.src + "')";
        data.zoomedImg.element.style.backgroundRepeat = 'no-repeat';
        data.zoomedImg.element.style.display = 'none';

        switch (data.zoomPosition) {
            case 'left':
                data.zoomedImg.element.style.position = 'absolute';
                data.zoomedImg.element.style.top = data.zoomedImgOffset.vertical + 'px';
                data.zoomedImg.element.style.left = data.zoomedImgOffset.horizontal - (data.zoomedImgOffset.horizontal * 2) + 'px';
                data.zoomedImg.element.style.transform = 'translateX(-100%)';
                break;

            case 'top':
                data.zoomedImg.element.style.position = 'absolute';
                data.zoomedImg.element.style.top = data.zoomedImgOffset.vertical - (data.zoomedImgOffset.vertical * 2) + 'px';
                data.zoomedImg.element.style.left = 'calc(50% + ' + data.zoomedImgOffset.horizontal + 'px)';
                data.zoomedImg.element.style.transform = 'translate3d(-50%, -100%, 0)';
                break;

            case 'bottom':
                data.zoomedImg.element.style.position = 'absolute';
                data.zoomedImg.element.style.bottom = data.zoomedImgOffset.vertical - (data.zoomedImgOffset.vertical * 2) + 'px';
                data.zoomedImg.element.style.left = 'calc(50% + ' + data.zoomedImgOffset.horizontal + 'px)';
                data.zoomedImg.element.style.transform = 'translate3d(-50%, 100%, 0)';
                break;

            case 'original':
                data.zoomedImg.element.style.position = 'absolute';
                data.zoomedImg.element.style.top = '0px';
                data.zoomedImg.element.style.left = '0px';
                break;

            // Right Position
            default:
                data.zoomedImg.element.style.position = 'absolute';
                data.zoomedImg.element.style.top = data.zoomedImgOffset.vertical + 'px';
                data.zoomedImg.element.style.right = data.zoomedImgOffset.horizontal - (data.zoomedImgOffset.horizontal * 2) + 'px';
                data.zoomedImg.element.style.transform = 'translateX(100%)';
                break;
        }


        // setup event listeners
        container.addEventListener('mousemove', events, false);
        container.addEventListener('mouseenter', events, false);
        container.addEventListener('mouseleave', events, false);
        data.zoomLens.element.addEventListener('mouseenter', events, false);
        data.zoomLens.element.addEventListener('mouseleave', events, false);
        window.addEventListener('scroll', events, false);

        return data;
    }

    function kill() {

        // remove event listeners
        container.removeEventListener('mousemove', events, false);
        container.removeEventListener('mouseenter', events, false);
        container.removeEventListener('mouseleave', events, false);
        data.zoomLens.element.removeEventListener('mouseenter', events, false);
        data.zoomLens.element.removeEventListener('mouseleave', events, false);
        window.removeEventListener('scroll', events, false);

        // remove dom nodes
        if (data.zoomLens && data.zoomedImg) {
            container.removeChild(data.zoomLens.element);
            data.zoomContainer.removeChild(data.zoomedImg.element);
        }

        if (options.img) {
            container.removeChild(data.sourceImg.element);
        } else {
            data.sourceImg.element.style.width = '';
            data.sourceImg.element.style.height = '';
        }

        return data;
    }

    var events = {
        handleEvent: function (event) {
            switch (event.type) {
                case 'mousemove':
                    return this.handleMouseMove(event);
                case 'mouseenter':
                    return this.handleMouseEnter(event);
                case 'mouseleave':
                    return this.handleMouseLeave(event);
                case 'scroll':
                    return this.handleScroll(event);
            }
        },
        handleMouseMove: function (event) {
            var offsetX;
            var offsetY;
            var backgroundTop;
            var backgroundRight;
            var backgroundPosition;
            if (offset) {
                offsetX = zoomLensLeft(event.clientX - offset.left);
                offsetY = zoomLensTop(event.clientY - offset.top);
                backgroundTop = offsetX * scaleX;
                backgroundRight = offsetY * scaleY;
                backgroundPosition = '-' + backgroundTop + 'px ' + '-' + backgroundRight + 'px';
                data.zoomedImg.element.style.backgroundPosition = backgroundPosition;
                data.zoomLens.element.style.cssText += 'top:' + offsetY + 'px;' + 'left:' + offsetX + 'px;display: block;';

            }
        },
        handleMouseEnter: function () {
            data.zoomedImg.element.style.display = 'block';
            data.zoomLens.element.style.display = 'block';

        },
        handleMouseLeave: function () {
            data.zoomedImg.element.style.display = 'none';
            data.zoomLens.element.style.display = 'none';
        },
        handleScroll: function () {
            offset = getOffset(data.sourceImg.element);
        }
    };

    // Setup/Initialize library
    setup();

    if (data.sourceImg.element.complete) {
        onSourceImgLoad();
    } else {
        data.sourceImg.element.onload = onSourceImgLoad;
    }

    return {
        setup: function () {
            setup();
        },
        kill: function () {
            kill();
        },
        _getInstanceInfo: function () {
            return {
                setup: setup,
                kill: kill,
                onSourceImgLoad: onSourceImgLoad,
                data: data,
                options: options
            }
        }
    }
}

window.addEventListener('load', function (){


    if(document.querySelector('.gallery-big')){
        document.querySelectorAll('.gallery-big .swiper-slide').forEach((item) => {
            const optionsZoom = {
                "width": item.clientWidth,
                "height": item.clientHeight,
                "zoomWidth": item.clientWidth * 2,
                fillContainer: true,
                "img": item.getAttribute('href'),
                "zoomPosition": "original"
            }
            new ImageZoom(item, optionsZoom);
        })
    }
})
