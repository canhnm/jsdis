Home page: http://opensource.com.vn
Facebook: http://www.facebook.com/canhnm
Twitter: https://twitter.com/#!/canhnm
Contact : canhnm@opensource.com.vn

Store value in localStorage of browser in the way like redis.
See index.html for demo code!
Have fun!!!

--=========================================================================--
- The reason to use localStorage :
+ sessionStorage sets fields on the window. When the window is closed, 
	the session fields are lost, even if the site remains open in another window.
+ localStorage sets fields on the domain. Even when you close the browser, 
	reopen it, and go back to the site, it remembers all fields in localStorage.

So, I need a persistence data storage.

- The size of localStorage is limited by each browser, 
	if you want to control your own space let see Manifest!
--=========================================================================--