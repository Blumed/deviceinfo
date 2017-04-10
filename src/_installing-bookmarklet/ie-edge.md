---
layout: page
title: Installing Bookmarklets On IE Edge
---
 <p>I'm sorry but the browser you're using does not support Bookmarklets very easily. In order to use them you'll need to edit files deep inside IE to do so. This fact goes against the idea of a quick and easy tool. If your're using this for bug testing use the copy button above and revise the url. 
    <span>
        <a href=http://www.itworld.com/article/2954526/personal-technology/how-to-manually-install-bookmarklets-in-microsoft-edge.html>Here is a link that shows you how to add this bookmarklet to IE Edge if you would like to continue on</a>
    </span>
</p>

{% highlight javascript %}
javascript: function loadScript(scriptURL) {
            var scriptElem = document.createElement('SCRIPT');
            scriptElem.setAttribute('language', 'JavaScript');
            scriptElem.setAttribute('src', scriptURL);
            document.body.appendChild(scriptElem); }
        loadScript('https://deviceinfo.io/assets/javascript/bookmarklet.js');
{% endhighlight %}