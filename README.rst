========================================================
An advertising preferences property for the web browser.
========================================================

:Author: Nathaniel Beaver
:Date: $Date: 2014-06-14 (Sunday, 14 June 2015) $
:Copyright: This work is licensed under a `Creative Commons 4.0 International License`_.

.. _Creative Commons 4.0 International License: https://creativecommons.org/licenses/by/4.0/

.. contents::

-------------------
What is this about?
-------------------

Mainly a `userscript`_ that adds information to your browser
about what advertising you want from websites you visit.

.. _userscript: User_Advertising_Preferences.user.js

-----------------------
Surely you are jesting.
-----------------------

On the contrary, I am in earnest.

I agree that it sounds odd.

--------------------------------------------------------------------------------
Do we really want to make it easier for websites to gather personal information?
--------------------------------------------------------------------------------

Maybe make it easier in some ways and harder in others.

From the standpoint of how `easy`_ and `profitable`_ it is
to collect personal information online and then `sell`_ `people`_ `ads`_,
the `obstacles`_ to online privacy are `seemingly`_ `insurmountable`_.

But what about voluntarily telling websites what ads you want to see,
instead of making them guess?

It would at least give some websites a potential alternative
to making money by `helping ad companies stalk people and build dossiers of their online behavior`_.

.. _easy: https://signup.clicksor.com/advertise_here.php
.. _profitable: https://www.google.com/adwords/
.. _sell: https://en.wikipedia.org/wiki/Outbrain
.. _people: https://en.wikipedia.org/wiki/DoubleClick
.. _ads: https://en.wikipedia.org/wiki/AdSense
.. _obstacles: https://panopticlick.eff.org/
.. _seemingly: http://boingboing.net/2015/06/08/internet-users-care-about-thei.html
.. _insurmountable: http://www.washingtonpost.com/business/technology/verizon-atandt-tracking-their-users-with-super-cookies/2014/11/03/7bbbf382-6395-11e4-bb14-4cfea1e742d5_story.html
.. _helping ad companies stalk people and build dossiers of their online behavior: https://support.google.com/adwords/answer/1704341?hl=en

--------------------------------------
Why not just use ad-blocking software?
--------------------------------------

I do, but I sometimes worry about unintended consequences
and longer-term problems.

Adblock Plus, for example, `permits "non-intrusive" ads`_,
and ad-blockers are helpless against `native advertising`_.

I fear that `what happened to SourceForge`_ could happen to other sites.

.. _permits "non-intrusive" ads: https://adblockplus.org/en/acceptable-ads
.. _native advertising: http://www.targetmarketingmag.com/post/why-advertisers-need-think-native/all/
.. _what happened to SourceForge: http://arstechnica.com/information-technology/2015/05/sourceforge-grabs-gimp-for-windows-account-wraps-installer-in-bundle-pushing-adware/


--------------------------------------------------
Won't people be dishonest about their preferences?
--------------------------------------------------

Even if the people visiting the website aren't honest about their preferences,
it's still a cheap and potentially useful datapoint for the owner of the website.

-------------------------------------------------------------------
So this is sort of like Facebook likes, but built into the browser?
-------------------------------------------------------------------

I suppose it could could be used that way,
but I hope it doesn't become that.

As currently implemented,
there is a simple ``yes`` and ``no`` list,
which could be interpreted as likes and dislikes,
but that's just a proof of concept.

The browser can hold arbitrary JSON data,
so there is plenty of room for exploration.

Moreover, preferences are `decentralized`_ in a way that Facebook's silo of Likes are not.

Most importantly, though, the preferences are stored as data that only the browser's user can control.

.. _decentralized: http://techcrunch.com/2015/01/10/decentralize-all-the-things/

------------------------------------------------------------------------------------
Is it wise to include a field for ads you don't want? Won't that encourage griefing?
------------------------------------------------------------------------------------

Griefers gonna grief.
If a website is intentionally irritating its users,
unwanted ads are the least of its problems.

Don't visit those websites,
or block the ads entirely.

-----------------
How does it work?
-----------------

It's a Greasemonkey userscript
that adds a ``userAdPrefs`` property
to the standard ``window.navigator`` browser object.

It runs `before the DOM content is loaded`_
so that scripts can access it.

See the `example webpage`_
for a simple demonstration of how this can be used.

.. _example webpage: index.html
.. _before the DOM content is loaded: http://wiki.greasespot.net/Metadata_Block#.40run-at

-----------------------------------
Is this userscript actually useful?
-----------------------------------

Not at the moment.

No sites besides the `example webpage`_ actually look for ``navigator.userAdPrefs``,
so it's useless, but not in an obtrusive or expensive way.

Currently the only way to change the preferences data is to edit the userscript by hand;
that's a little awkward to do on a regular basis.
