# Collection of bookmarklets

## Introduction
I either maintain or find these bookmarklets.
There aren't a lot and they aren't very complicated because beyond a certain point a complex userscript, website or extension would do a better job.
I suck at Javascript and generally cobble these together on a needs-basis, so feel free to open a pull request. Readability and grokability is at a premium though.

## Loader
The general bookmarklet that loads scripts is
`javascript:(function (){document.getElementsByTagName('head')[0].appendChild(document.createElement('script')).src='https://raw.githubusercontent.com/goober444/bookmarklets/scripts/$$$$.js?'+Math.random();}());`
with `$$$$.js` being replaced with whatever script you want to load.
It appends to `head` to get our script high in the hierarchy and `Math.random` is there because of caching dumbness.

## Scripts
Following URLs are the above loader with the respective script URL already inserted.
Make a new bookmark, name it whatever you want to trigger it with and then copy any one of the URLs into the URL part.
