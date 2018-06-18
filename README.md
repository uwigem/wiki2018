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
3. navigate to the "static" folder, and open css/_____.css and copy paste it to http://2018.igem.org/Team:Washington/CSS
4. navigate to the js folder and copy paste the contents of the javascript file to http://2018.igem.org/Team:Washington/Javascript
5. Note, if you don't update any CSS files, you shouldn't need to update the CSS template.
6. You should also add the base template to all the pages that exist (base template can be found currently on the /ASDFTest page on our iGEM site, but it still requires updates)