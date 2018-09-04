export default class Data {
    /**
     * getNavbarData returns all the navbar data from the object down below
     * @return {object array} with a title, list of names, and list of links
     *         where list of names and links are equal in length.
     */
    getNavbarData() {
        return navbarData;
    }

    /**
     * getDisplayConstants 
     * @param {string} pageTitle page title (ie "/ASDFTest")
     * @return {object} all the display constants from the object down below.
     *                  Default colors if not found.
     */
    getDisplayConstants(pageTitle) {
        if (displayConstants.globalColor) {
            return displayConstants;
        } else {
            let pageSpecificString = this.getNavbarDataTitleFromLink(pageTitle);
            if (pageSpecificString === "") {
                return displayConstants;
            } else {
                let specificPage = displayConstants.pageSpecificColors[pageSpecificString];
                if (specificPage) {
                    return specificPage;
                } else {
                    return displayConstants;
                }
            }
        }
    }

    /**
     * helper method for getDisplayConstants
     * @param {string} pageTitle page title (ie "/ASDFTest")
     * @return {string} title of navigation bar parent. Empty string if not found
     */
    getNavbarDataTitleFromLink(pageTitle) {
        let returnString = "";
        navbarData.forEach((d) => {
            if (d.links.indexOf(pageTitle) > -1 || d.names.indexOf(pageTitle.split("/")[1]) > -1) {
                returnString = d.title;
            }
        });
        return returnString;
    }

    /**
     * @return {string} url to logo image
     */
    getLogo() {
        return displayConstants.logo;
    }

    /**
     * @return {string} button vertical height from top
     */
    getButtonHeight() {
        return displayConstants.buttonHeight;
    }

    getContentData() {
        return contentData;
    }
}

var contentData = [{
    "content": [{
        "data": "20156        ",
        "type": "LATEX"
    }, {
        "data": "Insert textfdsa",
        "type": "MARKDOWN"
    }, {
        "data": "Insert textsdfsdfs",
        "type": "MARKDOWN"
    }, {
        "data": "fdsa",
        "type": "MARKDOWN"
    }, {
        "data": "Insert text",
        "type": "MARKDOWN"
    }, {
        "data": "Insert text",
        "type": "MARKDOWN"
    }, {
        "data": "Insert text",
        "type": "MARKDOWN"
    }, {
        "data": "Insert text",
        "type": "MARKDOWN"
    }, {
        "data": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg,test,width:100px,margin:auto,border:2px solid red,borderRadius:20,margin:auto,marginTop: 20",
        "type": "IMAGE"
    }, {
        "data": "CRAFTY,CRAFTY GIRLZ",
        "type": "SPECIAL"
    }],
    "pageTitle": "/ContentTest"
}, {
    "content": [{
        "data": "HOMEPAGE\nBACKGROUND=http://2018.igem.org/wiki/images/5/58/T--Washington--MB.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=70\nTITLEHEIGHT=12\nSUBTITLEHEIGHT=7\nTITLE=Stronger Together\nSUBTITLE=The Power of Chemically Induced Dimerization\nBUTTONTEXT=Overview\nCONTENTTITLE=Washington iGEM 2018 Project Abstract\nCONTENTSUBTITLE=Chemically Induced Dimerization of Nanobodies for the Development of Versatile Biosensors\nCONTENT=One of the pressing challenges of modern science is the detection of small molecule targets. This has applications in a variety of fields, such as point-of-care diagnostics and metabolic engineering. Although most small molecules can be detected through Enzyme-Linked Immunosorbent Assay (ELISA), accessibility is limited by the time-consuming nature of the procedure. We hope to use a chemically induced dimerization system of nanobodies to detect small molecule targets and apply this system to the development of simple diagnostic assays, such as lateral flow assays or fluorescent microarrays, and innovations in metabolic engineering.;Nanobodies are antibody fragments from single domain antibodies found in camelids and sharks. They are the variable regions of antibodies that are responsible for specific binding to target molecules. Researchers in the Institute for Protein Design (IPD) at the University of Washington have created extensive libraries of phages displaying nanobodies for high throughput screening of binding targets, making them a versatile tool for molecule detection. We have partnered with Dr. Liangcai Gu from the IPD to investigate novel applications of a high-throughput nanobody library numbering ten billion unique types. In our project, we will identify specific nanobodies that bind to desired target molecules of high importance and demonstrate the application of nanobody technology to the development of a biosensor.;Traditionally, monoclonal antibodies have been used to detect specific molecules and used in products such as ELISA kits. However, one significant barrier to developing new monoclonal antibodies is that they require introduction of an antigen to an animal before large scale production can begin. We are bypassing this expensive and time-consuming step and the associated ethical concerns by screening through a pre-existing library of nanobodies to rapidly identify those that can bind desired target molecules with high specificity.;Our team will be screening our nanobody library against two chosen molecules to find binding nanobodies. Then, we will screen the library for secondary nanobodies that bind to the primary nanobody-antigen complex, thus forming a dimer. After identifying these nanobodies, these nanobodies can be fused to other proteins to form biosensors. Specifically, we intend to repurpose activating and DNA binding domain proteins used in yeast 2-hybrid systems to create a transcriptional biosensor.",
        "type": "SPECIAL"
    }],
    "pageTitle": "/TempMain"
}, {
    "content": [{
        "data": "HOMEPAGE",
        "type": "SPECIAL"
    }, {
        "data": "Test",
        "type": "MARKDOWN"
    }],
    "pageTitle": ""
}, {
    "content": [{
        "data": "Hi",
        "type": "MARKDOWN"
    }, {
        "data": "FOURPICTURES",
        "type": "SPECIAL"
    }],
    "pageTitle": "/InterLab"
}, {
    "content": [{
        "data": "CRAFTY\nCRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ ",
        "type": "SPECIAL"
    }],
    "pageTitle": "/CraftyGirlz"
}, {
    "content": [{
        "data": "TEAM\nNAME=William Kwok; ROLE=Drylab Lead Engineer, Wiki Developer; PICTURE=http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image-300x225.jpg;GITHUB=https://github.com/kwokwilliam; LINKEDIN=https://linkedin.com/in/william-w-kwok/; PERSONAL=https://williamk.info; BIO=Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris mauris. Aliquam orci lorem, sodales ut cursus sit amet, scelerisque at ante. Praesent quis quam vel sem sodales tincidunt. Vestibulum dictum bibendum sem, ac porttitor lectus aliquam quis. Curabitur euismod nulla est, vitae dapibus neque sollicitudin congue. Pellentesque non eleifend nibh. Maecenas vitae felis ultrices lectus sodales pharetra quis quis lacus. Suspendisse potenti. Pellentesque hendrerit nisi id cursus consectetur. Morbi venenatis vulputate quam et facilisis. Proin viverra semper tempor. Morbi tincidunt tellus non nibh maximus bibendum. Morbi id nunc ultricies, volutpat tortor ut, posuere diam. Donec lobortis felis quis risus lacinia, euismod sagittis orci maximus. Nullam quis accumsan ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nNAME=William Kwok; ROLE=Drylab Lead Engineer, Wiki Developer; PICTURE=http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image-300x225.jpg;GITHUB=https://github.com/kwokwilliam; LINKEDIN=https://linkedin.com/in/william-w-kwok/; PERSONAL=https://williamk.info; BIO=Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris mauris. Aliquam orci lorem, sodales ut cursus sit amet, scelerisque at ante. Praesent quis quam vel sem sodales tincidunt. Vestibulum dictum bibendum sem, ac porttitor lectus aliquam quis. Curabitur euismod nulla est, vitae dapibus neque sollicitudin congue. Pellentesque non eleifend nibh. Maecenas vitae felis ultrices lectus sodales pharetra quis quis lacus. Suspendisse potenti. Pellentesque hendrerit nisi id cursus consectetur. Morbi venenatis vulputate quam et facilisis. Proin viverra semper tempor. Morbi tincidunt tellus non nibh maximus bibendum. Morbi id nunc ultricies, volutpat tortor ut, posuere diam. Donec lobortis felis quis risus lacinia, euismod sagittis orci maximus. Nullam quis accumsan ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nNAME=William Kwok; ROLE=Drylab Lead Engineer, Wiki Developer; PICTURE=http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image-300x225.jpg;GITHUB=https://github.com/kwokwilliam; LINKEDIN=https://linkedin.com/in/william-w-kwok/; PERSONAL=https://williamk.info; BIO=Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget mauris mauris. Aliquam orci lorem, sodales ut cursus sit amet, scelerisque at ante. Praesent quis quam vel sem sodales tincidunt. Vestibulum dictum bibendum sem, ac porttitor lectus aliquam quis. Curabitur euismod nulla est, vitae dapibus neque sollicitudin congue. Pellentesque non eleifend nibh. Maecenas vitae felis ultrices lectus sodales pharetra quis quis lacus. Suspendisse potenti. Pellentesque hendrerit nisi id cursus consectetur. Morbi venenatis vulputate quam et facilisis. Proin viverra semper tempor. Morbi tincidunt tellus non nibh maximus bibendum. Morbi id nunc ultricies, volutpat tortor ut, posuere diam. Donec lobortis felis quis risus lacinia, euismod sagittis orci maximus. Nullam quis accumsan ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "type": "SPECIAL"
    }],
    "pageTitle": "/Team"
}];

/**
 * display constants. This has a very different use case than CSS does.
 * Mainly will be used for certain material-ui elements.
 */
var displayConstants = {
    primaryColor: "#420DAB",
    secondaryColor: "#6308b2",
    globalColor: false,
    pageSpecificColors: {
        Home: {
            primaryColor: "#FFFFFF",
            secondaryColor: "#FFFF00"
        },
        Project: {
            primaryColor: "#FF0000",
            secondaryColor: "#00FF00"
        }
    },
    logo: "http://2017.igem.org/wiki/images/e/e9/T--Washington--WLogo.png",
    buttonHeight: "16px"
};

/**
 * These are mostly ALL placeholder values. We will DEFINITELY CHANGE THIS.
 * http://2018.igem.org/Judging/Pages_for_Awards
 * TODO modify a lot!
 */
var navbarData = [
    {
        title: "Home",
        names: ["Home", "UW 2017", "UW 2016", "UW 2015", "UW 2014", "UW 2013", "UW 2012", "UW 2011", "UW 2010", "UW 2009", "UW 2008"],
        links: [
            "http://2018.igem.org/Team:Washington",
            "http://2017.igem.org/Team:Washington",
            "http://2016.igem.org/Team:Washington",
            "http://2015.igem.org/Team:Washington",
            "http://2014.igem.org/Team:Washington",
            "http://2013.igem.org/Team:Washington",
            "http://2012.igem.org/Team:Washington",
            "http://2011.igem.org/Team:Washington",
            "http://2010.igem.org/Team:Washington",
            "http://2009.igem.org/Team:Washington",
            "http://2008.igem.org/Team:Washington"
        ]
    },
    {
        title: "Project",
        names: ["Description", "Design", "Experiments", "Parts", "Protocols", "Notebook", "Safety", "BioBricks", "InterLab", "ASDFTest", "ASDFTestA"],
        links: ["/Description", "/Design", "/Experiments", "/Parts", "/Protocols", "/Notebook", "/Safety", "/Parts", "/InterLab", "/ASDFTest", "/ASDFTestA"]
        // note biobrick's page is named parts
        // look into basic part vs composite part vs part collection etc
        // maybe biobrick is split into its own section
    },
    {
        title: "Modeling",
        names: ["Model"],
        links: ["/Model"]
    },
    {
        title: "Human Practices",
        names: ["Human Practices", "Education & Engagement", "Entrepreneurship", "Collaborations"],
        links: ["/Human_Practices", "/Public_Engagement", "/Entrepreneurship", "/Collaborations"]
    },
    {
        title: "Team",
        names: ["Members", "Attributions"],
        links: ["/Team", "/Attributions"]
    }
];
