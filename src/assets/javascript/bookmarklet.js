javascript:(function() {
    function checkthisthingout() {
        var showmewhoiamnow = document.createElement('div'),
            showmetimenow = document.createElement('div');

        showmewhoiamnow.setAttribute('id', 'showmewhoiamnow');
        showmetimenow.setAttribute('id', 'showmetimenow');
        showmewhoiamnow.style.color = 'black';
        showmewhoiamnow.style.position = 'fixed';
        showmewhoiamnow.style.textAlign = 'center';
        showmewhoiamnow.style.zIndex = '1000000';
        showmewhoiamnow.style.left = '0';
        showmewhoiamnow.style.right = '0';
        showmewhoiamnow.style.backgroundColor = '#eee';
        showmewhoiamnow.style.padding = '1rem';
        showmewhoiamnow.style.fontSize = '18px';
        showmewhoiamnow.style.fontFamily = 'Helvetica';
        showmewhoiamnow.style.fontWeight = '100';

        {
            var unknown = '-';


            var screenSize = '';
            if (screen.width) {
                width = (screen.width) ? screen.width : '';
                height = (screen.height) ? screen.height : '';
                screenSize += '' + width + ' x ' + height;
            }


            var nVer = navigator.appVersion;
            var nAgt = navigator.userAgent;
            var browser = navigator.appName;
            var version = '' + parseFloat(navigator.appVersion);
            var majorVersion = parseInt(navigator.appVersion, 10);
            var nameOffset, verOffset, ix;


            if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 6);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            }

            if ((verOffset = nAgt.indexOf('OPR')) != -1) {
                browser = 'Opera';
                version = nAgt.substring(verOffset + 4);
            } else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                browser = 'Internet Explorer';
                version = nAgt.substring(verOffset + 5);
            } else if (nAgt.indexOf('Trident/') != -1) {
                browser = 'Internet Explorer';
                version = nAgt.substring(nAgt.indexOf('rv:') + 3);
            } else if (nAgt.indexOf('Edge/') != -1) {
                browser = 'Internet Explorer Edge';
                version = '';
            } else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                browser = 'Chrome';
                version = nAgt.substring(verOffset + 7);
            } else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                browser = 'Safari';
                version = nAgt.substring(verOffset + 7);
                if ((verOffset = nAgt.indexOf('Version')) != -1) {
                    version = nAgt.substring(verOffset + 8);
                }
            } else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
            } else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                browser = nAgt.substring(nameOffset, verOffset);
                version = nAgt.substring(verOffset + 1);
                if (browser.toLowerCase() == browser.toUpperCase()) {
                    browser = navigator.appName;
                }
            }

            if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
            if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

            majorVersion = parseInt('' + version, 10);
            if (isNaN(majorVersion)) {
                version = '' + parseFloat(navigator.appVersion);
                majorVersion = parseInt(navigator.appVersion, 10);
            }


            var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);


            var orientation = '';
            if (screen.width < screen.height) {
                orientation = 'portrait';
            } else {
                orientation = 'landscape';
            }


            var url = window.location.href;


            var os = unknown;
            var clientStrings = [
                { s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/ },
                { s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/ },
                { s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/ },
                { s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/ },
                { s: 'Windows Vista', r: /Windows NT 6.0/ },
                { s: 'Windows Server 2003', r: /Windows NT 5.2/ },
                { s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/ },
                { s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/ },
                { s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/ },
                { s: 'Windows 98', r: /(Windows 98|Win98)/ },
                { s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/ },
                { s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
                { s: 'Windows CE', r: /Windows CE/ },
                { s: 'Windows 3.11', r: /Win16/ },
                { s: 'Nexus', r: /Nexus/ },
                { s: 'Samsung', r: /SM-|GT-/ },
                { s: 'Android', r: /Android/ },
                { s: 'Open BSD', r: /OpenBSD/ },
                { s: 'Sun OS', r: /SunOS/ },
                { s: 'Linux', r: /(Linux|X11)/ },
                { s: 'iPad', r: /(iPad)/ },
                { s: 'iPhone', r: /(iPhone|iPod)/ },
                { s: 'Mac OS X', r: /Mac OS X/ },
                { s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
                { s: 'QNX', r: /QNX/ },
                { s: 'UNIX', r: /UNIX/ },
                { s: 'BeOS', r: /BeOS/ },
                { s: 'OS/2', r: /OS\/2/ },
                { s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ }
            ];
            for (var id in clientStrings) {
                var cs = clientStrings[id];
                if (cs.r.test(nAgt)) {
                    os = cs.s;
                    break;
                }
            }

            var osVersion = unknown;

            if (/Windows/.test(os)) {
                osVersion = /Windows (.*)/.exec(os)[1];
                os = 'Windows';
            }

            switch (os) {
                case 'Mac OS X':
                    osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'Android':
                    osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                    break;

                case 'OS':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
                case 'iPhone':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
                case 'iPad':
                    osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                    osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                    break;
            }
            console.log(os);
            console.log(osVersion);
        }

        if (browser === 'Internet Explorer Edge') {
            majorVersion = '';
        }

        window.jscd = {
            screen: screenSize,
            browser: browser,
            browserVersion: version,
            browserMajorVersion: majorVersion,
            url: url,
            mobile: mobile,
            orientation: orientation,
            os: os,
            osVersion: osVersion,
        };

        var date = new Date(),
            month = date.getMonth() + 1,
            day = date.getDate(),
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds(),
            meanTime;
        month = (month < 10 ? '0' : '') + month, day = (day < 10 ? '0' : '') + day, meanTime = hour >= 12 ? ' P.M.' : ' A.M.', hour = hour > 12 ? hour - 12 : hour, min = (min < 10 ? '0' : '') + min, sec = (sec < 10 ? '0' : '') + sec;
        var timeStamp = 'Date: ' + month + '-' + day + '-' + date.getFullYear() + ' ' + 'Time: ' + hour + ':' + min + ':' + sec + meanTime;



        showmetimenow.innerHTML = timeStamp;
        showmewhoiamnow.innerHTML = 
        'OS: ' + jscd.os + ' ' + jscd.osVersion + '\n' + '<br>' +
            'Browser: ' + jscd.browser + ' ' + jscd.browserMajorVersion + '<br>' +
            ' ' + 'Mobile: ' + jscd.mobile + '<br>' +
            'Screen Size: ' + jscd.screen + '<br>' +
            'Orientation: ' + jscd.orientation + '<br>' +
            'Url: ' + jscd.url + '<br>' +
            timeStamp;
        document.body.insertBefore(showmewhoiamnow, document.body.firstChild);

    }

    function removeDiv() {
        var showmewhoiamnow = document.getElementById('showmewhoiamnow');
        showmewhoiamnow.style.display = 'none';
    }
    checkthisthingout(), setTimeout(removeDiv, 10000);
}());
