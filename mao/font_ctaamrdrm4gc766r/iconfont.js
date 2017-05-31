;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M682.667008 47.65184 341.984256 47.65184c-42.635264 0-77.44 34.884608-77.44 77.436928l0 774.513664c0 42.59328 34.804736 77.44 77.44 77.44l340.682752 0c42.597376 0 77.441024-34.84672 77.441024-77.44L760.108032 125.087744C760.108032 82.536448 725.264384 47.65184 682.667008 47.65184zM465.854464 109.584384l92.944384 0c8.556544 0 15.545344 6.946816 15.545344 15.504384 0 8.602624-6.987776 15.504384-15.545344 15.504384l-92.944384 0c-8.51968 0-15.422464-6.90176-15.422464-15.504384C450.432 116.5312 457.33376 109.584384 465.854464 109.584384zM512.285696 946.034688c-25.637888 0-46.470144-20.754432-46.470144-46.43328s20.832256-46.512128 46.470144-46.512128c25.757696 0 46.512128 20.83328 46.512128 46.512128S538.044416 946.034688 512.285696 946.034688zM729.220096 822.162432 295.552 822.162432 295.552 202.528768l433.668096 0L729.220096 822.162432z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M991.0656 709.0944 406.6944 709.0944c-39.5648 0-49.1136-25.472-50.7392-30.8864-0.9216-3.3024-5.4528-19.3664-12.3136-43.6352L936.9856 561.536c29.8624 0 54.08-24.2048 54.08-54.0032L991.0656 317.0304c0-29.8624-24.2176-54.0416-54.08-54.0416L238.6816 262.9888c-16.5632-58.0736-29.44-103.2192-33.8944-117.9776C187.5456 84.7488 143.3856 77.952 138.432 77.3888L32.9856 77.1712c-18.1888 0-32.9856 14.7584-32.9856 32.9856 0 18.1888 14.7968 32.9472 32.9856 32.9472l96.5376 0c2.5472 1.6 8 6.4768 12.032 20.4544 3.8272 12.992 14.5792 50.3552 28.5312 99.4432 32.448 114.0864 82.688 292.0448 107.392 379.7248 8.9216 31.6416 14.5024 51.6608 14.7968 52.416 6.8608 27.6608 39.7056 79.936 114.432 79.936l584.3712 0c18.1888 0 32.9728-14.7584 32.9728-32.9856C1024.0384 723.8912 1009.2544 709.0944 991.0656 709.0944z"  ></path>' +
    '' +
    '<path d="M373.6448 839.68c-29.5936 0-53.5808 23.9488-53.5808 53.5808 0 29.5808 23.9872 53.5808 53.5808 53.5808 29.5808 0 53.5808-24 53.5808-53.5808C427.2256 863.6288 403.2256 839.68 373.6448 839.68z"  ></path>' +
    '' +
    '<path d="M876.6848 839.68c-29.5808 0-53.5808 23.9488-53.5808 53.5808 0 29.5808 24 53.5808 53.5808 53.5808 29.5936 0 53.5808-24 53.5808-53.5808C930.2656 863.6288 906.2784 839.68 876.6848 839.68z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xin1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M740.236174 68.06207c108.41343 0 196.615769 88.77428 196.615769 197.878761 0 26.625846-7.491034 53.821486-20.057643 72.727736-69.303601 104.413061-306.442419 340.957405-403.433122 436.159316-96.986411-95.183669-334.105914-331.728013-403.453511-436.159316-12.554806-18.90625-20.04584-46.10189-20.04584-72.727736 0-109.103408 88.205558-197.878761 196.62328-197.878761 72.682668 0 139.183435 40.186109 173.505269 104.851943 10.538525 19.816205 31.035051 32.198248 53.370801 32.198248 22.330385 0 42.83013-12.382043 53.36329-32.198248C601.045228 108.247106 667.545995 68.06207 740.236174 68.06207M740.236174 7.1777c-98.28696 0-183.599547 55.539456-226.874997 137.058775C470.083581 62.717156 384.764555 7.1777 286.485107 7.1777c-142.019533 0-257.122421 115.826131-257.122421 258.762057 0 38.030331 10.544964 76.886918 30.25279 106.550597 92.134032 138.777818 453.745701 487.09427 453.745701 487.09427s361.603085-348.316452 453.743555-487.09427c19.700314-29.663679 30.246351-68.520267 30.246351-106.550597C997.351084 123.004904 882.248195 7.1777 740.236174 7.1777L740.236174 7.1777z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M887.260709 232.849232c-96.93575-96.936773-254.116605-96.936773-351.037005 0l-24.7548 24.761963-24.769127-24.761963c-96.93575-96.936773-254.102279-96.936773-351.022679 0-96.950076 96.92654-96.950076 254.084882 0 351.020632l24.755824 24.7548 351.035982 298.873971 351.021655-298.873971 24.77015-24.755824C984.182133 486.934115 984.182133 329.775772 887.260709 232.849232L887.260709 232.849232z" fill="#d81e06" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-daohang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M130.048 348.16h92.16V256h-92.16v92.16z m212.48-92.16v92.16h552.96V256h-552.96z m-1.536 302.08h552.96V465.92h-552.96v92.16zM220.672 465.92h-92.16v92.16h92.16V465.92z m120.32 302.08h552.96v-92.16h-552.96v92.16z m-210.944 0h92.16v-92.16h-92.16v92.16z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)