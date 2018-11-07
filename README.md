# Washington iGEM Wiki 2018

## Installation
1. Clone repo `git clone https://github.com/uwigem/wiki2018.git`
2. Make sure you are on the latest version of node to match my settings, along with the same npm version
    * Check using `npm -v` and `node -v`
    * My versions are npm version 6.1.0, and node version v10.4.1
3. Install npm packages `cd wiki2018` then `npm install`
4. You're ready to start modifying and testing
    * You will find `npm start` useful, and also `npm run build`

## Do not push to master
* Please push to your own branch first (`git checkout -b newbranchname`, `git checkout newbranchname`, and `git push origin newbranchname`), and make an issue and a pull request for features to add.
* Only William is allowed to push to master, unless it's a very minimal change. If you're unsure, just ask.
* New features should be fairly robust/standalone, meaning they won't iterfere with existing objects or objects that will be created.
    * This requires thought and planning. The programming is trivial compared to the data flow and architecture.
* Only William should ever be modifying the Washington iGEM Javascript and CSS templates, but in case I cannot, here is the procedure:

## Building and deploying
1. `npm run build`
2. `open build` on mac or `explorer build` on windows (just opens the folder in file navigation)
3. navigate to the "static" folder, and open css/_____.css and copy paste it to http://2018.igem.org/Template:Washington/CSS
4. navigate to the js folder and copy paste the contents of the javascript file to http://2018.igem.org/Template:Washington/Javascript
5. Note, if you don't update any CSS files, you shouldn't need to update the CSS template.
6. You should also add the base template to all the pages that exist (base template can be found currently on the /ASDFTest page on our iGEM site, but it still requires updates)

-----

## Important pieces of code

### HTML Base (Goes into templates like http://2018.igem.org/Template:Washington/Base to be used later under Page base.)

```html
<html>

<!-- Set up mobile viewport and meta tag -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no">
<!-- Import CSS -->
<link href="http://2018.igem.org/Template:Washington/CSS?action=raw&ctype=text/css" type="text/css" rel="stylesheet" />

<!-- Create root div for React to inject information into -->
<div id="root">Please enable JavaScript to view this page. If you are viewing this page with javascript enabled, please contact wkwok16@uw.edu and send a screenshot of the developer console. Here is our project abstract:<br /><br />

<h1>Chemically Induced Dimerization of Nanobodies for the Development of Versatile Biosensors</h1>

Chemically induced dimerization (CID), in which two proteins dimerize only in the presence of a small molecule, has been widely used to control cell signaling, regulatory, and metabolic pathways, and used as logic gates for biological computation in living mammalian cells. However, few naturally occuring CID systems and their derivatives are currently available. Creating a CID system with desired affinity and specificity for any given small molecule remains an unsolved problem for computational design and other protein engineering approaches. To address this challenge, we have used a novel strategy to select CID binders from a vastly diverse combinatorial nanobody library. We have created new CID systems that can sense cholecalciferol and artemisinin. We are validating CID biosensors by a yeast three-hybrid system and built structural models to understand the small molecule-induced dimerization. Our work is a proof-of-concept that can be generalized to create CID systems for many applications.

</div>

<!-- Add on-page javascript for destroying default iGEM CSS and adding a loading animation -->
<!-- I do it twice to run once so the page loading animation gets correct styling the first run -->
<!-- Second run is just to make sure everything gets ran -->
<script type="text/javascript">
    $('link[rel="shortcut icon"]').attr('href','http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png');
    $('div#content').removeAttr('id').attr('id', 'contentBox');
    $('a#top').remove();
    $('div#top_title').remove();
    $('div#HQ_page').removeAttr('id');
    $('div.mw-body').removeAttr('class');
    $('div#mw-content-text').removeAttr('id');
    $('div#bodyContent').removeAttr('id');
    $('div.mw-content-ltr>p').addClass('meta');
    $('div.mw-content-ltr').removeAttr('class');
    document.getElementById("root").innerText = "Page loading...";
    $(document).ready(function () {
        $('link[rel="shortcut icon"]').attr('href','http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png');
        $('div#content').removeAttr('id').attr('id', 'contentBox');
        $('a#top').remove();
        $('div#top_title').remove();
        $('div#HQ_page').removeAttr('id');
        $('div.mw-body').removeAttr('class');
        $('div#mw-content-text').removeAttr('id');
        $('div#bodyContent').removeAttr('id');
        $('div.mw-content-ltr>p').addClass('meta');
        $('div.mw-content-ltr').removeAttr('class');
    })
</script>

<!-- Import React Javascript -->
<script src="http://2018.igem.org/Template:Washington/Javascript?action=raw&ctype=text/javascript" type="text/javascript"></script>

</html>
```

Fairly standard. Note the `$('link[rel="sortcut icon"])` in the jQuery code. That is what replaces the **favicon**. In the future, this code may be deprecated once the iGEM wiki (hopefully) moves away from jQuery. It is up to future people working on this to figure out a new way to do change the favicon. Shouldn't be too bad, but it makes the website look just that much better.

In addition, note the `?action=raw&ctype=text/javascript` and similar for CSS.

### Page base

Currently the iGEM Wiki uses MediaWiki to link templates to allow you to use HTML from one page to another by putting a simple reference. In the above, that HTML was put in `Template:Washington/Base`. To access this, you would put the below on any page like so:

```HTML
{{Washington/Base}}
<html></html>
```

This also shares the JavaScript and CSS from the template. The empty `html` tags are **critical** because if they are not there on **judged pages**, it will not qualify us for the judging for some reason. 

### Gallery images

A random script for mass inserting gallery images using the content creator for this year-- this may change in the future

```js
let a = `` // insert links with newline breaks in between here (in dev console)

data = a.split('\n');
let final = [];
data.forEach(d => {
    let img = new Image();
    img.onload = function () {
        final.push(`src=${d};width=${this.width};height=${this.height}`)
    }
    img.src = d;
});
final.join('\n') // run this function after waiting a little for chrome to actually download images
```

### Internet Explorer or Edge

We use a package called `detect-browser`. Check the `package.json` to see the version, but this package shouldn't change drastically. This code is pretty self explanatory.

```js
import { detect } from 'detect-browser';
const browser = detect();

const nSupp = (a) => {
    alert(`${a.toUpperCase()} is not entirely supported by Team Washington's Team Wiki. For best performance please use Firefox or Google Chrome! 
    
You may continue to use the site, but please note that there will be bugs and poor performance. Sorry for any inconvenience, and thank you!`);
}

document.title = "Washington iGEM";

let IEOREDGE = false;

switch (browser && browser.name) {
    case 'edge':
        IEOREDGE = true;
        nSupp(browser.name);
        break;
    case 'ie':
        IEOREDGE = true;
        nSupp(browser.name);
        break;
    default:
        IEOREDGE = false;
        break;
}
```

### Alert message for latest year's wiki.

We currently highly believe that a judge accidentally viewed last year's wiki for their judging. In order to counterract this, we use this script to have an alert message pop up for if the date is past a certain date. In this case, I set the date a few months before the upcoming Jamboree. 

The time uses Unix Epoch Milliseconds time, and converters can be found easily online. 

This script will always link the the year that they are visiting.

```js
const currAccessDate = Date.now();

// Ensure that people are at the correct year.
// Unix epoch time here is for June 14, 2019
// 1560556800000
if (currAccessDate > 1560556800000) {
    let year = new Date(currAccessDate);
    year = year.getFullYear();

    // Triple check.
    if (Number(year) <= 2018) {
        year = 2019;
    }
    alert(`You are currently viewing our 2018 project.
    
Check out our ${year} project over at the link below!

http://${year}.igem.org/Team:Washington.`)
}
```