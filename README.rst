============================================
Ad preferences property for the web browser.
============================================

-------------
What is this?
-------------

It is a `userscript`_ that adds information to your browser
about what advertising you want from websites you visit.

.. _userscript: User_Advertising_Preferences.user.js

-----------------------
Surely you are jesting?
-----------------------

On the contrary, I am in earnest.

I agree it sounds odd.

--------------------------------------------------------------------------------
Do we really want to make it easier for websites to gather personal information?
--------------------------------------------------------------------------------

Yes and no.

From the standpoint of how `easy`_ and `profitable`_ it is
to collect peoples' information online and then `sell`_ `them`_ `ads`_,
the `obstacles`_ to online privacy are `seemingly`_ `insurmountable`_.

But what about voluntarily telling websites what ads you want to see,
instead of making them guess?

It would at least give website owners an alternative to "`user analytics`_"
(i.e. helping ad companies stalk and build dossiers people online).

.. _easy: https://signup.clicksor.com/advertise_here.php
.. _profitable: https://www.google.com/adwords/
.. _sell: https://en.wikipedia.org/wiki/Outbrain
.. _them: https://en.wikipedia.org/wiki/DoubleClick
.. _ads: https://en.wikipedia.org/wiki/AdSense
.. _obstacles: https://panopticlick.eff.org/
.. _seemingly: http://boingboing.net/2015/06/08/internet-users-care-about-thei.html
.. _insurmountable: http://www.washingtonpost.com/business/technology/verizon-atandt-tracking-their-users-with-super-cookies/2014/11/03/7bbbf382-6395-11e4-bb14-4cfea1e742d5_story.html
.. _user analytics: https://support.google.com/adwords/answer/1704341?hl=en

----------------------------------------------
Will people be honest about their preferences?
----------------------------------------------

Even if the people visiting the website aren't honest about their preferences,
it's still a cheap and potentially useful datapoint for the owner of the website.

--------------------------------
I just use ad-blocking software.
--------------------------------

So do I, but I sometimes worry about unintended consequences
and longer-term problems.

Adblock Plus, for example, `permits "non-intrusive" ads`_,
and ad-blockers are helpless against things like `native advertising`_.

.. _permits "non-intrusive" ads: https://adblockplus.org/en/acceptable-ads
.. _native advertising: http://www.targetmarketingmag.com/post/why-advertisers-need-think-native/all/

---------------------------------------------------------
Is this basically a decentralized list of Facebook likes?
---------------------------------------------------------

That is one way it could be used,
although it needn't become that.

As currently implemented,
there is a simple ``yes`` and ``no`` list,
which could be interpreted as likes and dislikes.

-------------------------------------------------------------------
Is it wise to include "dislikes"? Won't that encourage griefing?
-------------------------------------------------------------------

Griefers gonna grief.
Don't visit those websites,
or block the ads.

-----------------
How does it work?
-----------------

It's a Greasemonkey userscript
that adds a ``userAdPrefs`` property
to the standard ``window.navigator`` browser object.

It runs `before the DOM content is loaded`_
so that scripts can access it.

.. _before the DOM content is loaded: http://wiki.greasespot.net/Metadata_Block#.40run-at

-----------------------------------
Is this userscript actually useful?
-----------------------------------

Not at the moment.

No websites besides the `example site`_ actually look for ``navigator.userAdPrefs``,
so it's useless, but not expensively so.

The only way to change the preferences data is to edit the userscript by hand;
that's a little awkward to do on a regular basis.

.. _example site: index.html
