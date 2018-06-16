'use strict';

class Data {
    constructor() {

    }

    /**
     * getNavbarData returns all the navbar data from the object down below
     * @return array of objects with a title, list of names, and list of links
     *         where list of names and links are equal in length.
     */
    getNavbarData() {
        return navbarData;
    }

    /**
     * getDisplayConstants 
     * @return all the display constants from the object down below
     */
    getDisplayConstants() {
        return displayConstants;
    }
}

/**
 * display constants. This has a very different use case than CSS does.
 * Mainly will be used for certain material-ui elements.
 */
var displayConstants = {
    primaryColor: "#4B2E83",
    secondaryColor: "#330066"
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
        names: ["Design", "BioBricks", "InterLab"],
        links: ["/Design", "/BioBricks", "/InterLab"]
    },
    {
        title: "Human Practices",
        names: ["Summary", "Collaborations", "Engagement"],
        links: ["/Summary", "/Collaborations", "/Engagement"]
    },
    {
        title: "Team",
        names: ["Members", "Attributions"],
        links: ["/Members", "/Attributions"]
    },
    {
        title: "Medal Criteria",
        names: [""]

    }
];

exports.Data = Data;