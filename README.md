e621p
=======

A full screen E621 presentation or slide show.

https://dorkandanerd.github.io/e621p/

Hotkeys
-------

* a - toggles auto-next (play/pause)
* t - collapse/uncollapse title
* c - collapse/uncollapse controls
* i - open image in a new tab
* r - open comments in a new tab 
* f - toggle full screen mode
* Arrow keys, pgup/pgdown, spacebar change slides
* Swipe gestures on phones

Features
--------

* Supports all tags, including order: date, count or name, rating: e, q, s and combining tags such as "wolf+rating:s"
  + You can search specific tags by specifying ?tags= in the URL e.g. /?tags=wolf&page=1&limit=10 /?tags=wolf+rating:s&page=1&limit=10 
  + You can skip to a specific page specifying ?page= in the URL e.g. /?tags=wolf&page=1&limit=10
  + You can specify how many images to load per cycle by specifying ?limit= in the URL e.g. /?tags=wolf&page=1&limit=10
* Number of items loaded per Ajax request can be changed for optimal performance on all internet connections.
* Ability to switch between NSFW and SFW content at a click of a button. (This relies on the images being tagged correctly on E621.net)
* You can save the html file locally and use it, just make sure you add a separator e.g. the question mark in file://path/to/e621p/index.html?tags=fox so the browser knows to pick up the right file and get the correct tags.

Sources:
	* RedditP - Made by Ubershmekel http://uberpython.wordpress.com/ - https://github.com/ubershmekel/redditp

