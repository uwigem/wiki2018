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

    getImgsToPrefetch() {
        return imgs;
    }
}


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

var imgs = [
    'http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png',
    "http://2018.igem.org/wiki/images/5/58/T--Washington--AerilynnTeam.jpg",
    "http://2018.igem.org/wiki/images/2/2f/T--Washington--AlanPic.jpg",
    "http://2018.igem.org/wiki/images/b/bc/T--Washington--AnastasiaTeam.jpg",
    "http://2018.igem.org/wiki/images/c/ce/T--Washington--AndrewTeam.jpg",
    "http://2018.igem.org/wiki/images/a/ac/T--Washington--AngelTeam.jpg",
    "http://2018.igem.org/wiki/images/1/1a/T--Washington--CharlieTeam.jpg",
    "http://2018.igem.org/wiki/images/5/5d/T--Washington--ChemayTeam.jpg",
    "http://2018.igem.org/wiki/images/5/50/T--Washington--DallasTeam.jpg",
    "http://2018.igem.org/wiki/images/9/99/T--Washington--SauroTeam.jpg",
    "http://2018.igem.org/wiki/images/2/20/T--Washington--GuTeam.jpg",
    "http://2018.igem.org/wiki/images/d/de/T--Washington--TPhotoDreycey.jpg",
    "http://2018.igem.org/wiki/images/1/1d/T--Washington--GraceTeam.jpg",
    "http://2018.igem.org/wiki/images/6/6c/T--Washington--HannahTeam.jpg",
    "http://2018.igem.org/wiki/images/f/fb/T--Washington--IshiraTeam.jpg",
    "http://2018.igem.org/wiki/images/e/e6/T--Washington--JayTeam.jpg",
    "http://2018.igem.org/wiki/images/4/49/T--Washington--JoshuaTeam.jpg",
    "http://2018.igem.org/wiki/images/e/e7/T--Washington--KarlTeam.jpg",
    "http://2018.igem.org/wiki/images/b/b2/T--Washington--KrithiTeam.jpg",
    "http://2018.igem.org/wiki/images/c/ca/T--Washington--RenaldoTeam.jpg",
    "http://2018.igem.org/wiki/images/7/77/T--Washington--SairandriTeam.jpg",
    "http://2018.igem.org/wiki/images/e/ec/T--Washington--SeaEunTeam.jpg",
    "http://2018.igem.org/wiki/images/7/7d/T--Washington--VeraTeam.jpg",
    "http://2018.igem.org/wiki/images/0/0c/T--Washington--WilliamTeam.jpg",
    "http://2018.igem.org/wiki/images/4/40/T--Washington--YoshiTeam.jpg",
    // 'http://2018.igem.org/wiki/images/3/3d/T--Washington--PNWMeetup.png',
    // "http://2018.igem.org/wiki/images/7/78/T--Washington--CollabKeynoteSpeech.png",
    // "http://2018.igem.org/wiki/images/2/2d/T--Washington--Panel.png",
    // "http://2018.igem.org/wiki/images/c/c0/T--Washington--Ingrid.png",
    // "http://2018.igem.org/wiki/images/5/5e/T--Washington--David.png",
    // 'http://2018.igem.org/wiki/images/5/5b/T--Washington--CindyWu.png',
    // 'http://2018.igem.org/wiki/images/4/45/T--Washington--Regina.png',
    // 'http://2018.igem.org/wiki/images/e/ec/T--Washington--RoyaTalk.png',
    // 'http://2018.igem.org/wiki/images/b/b1/T--Washington--Hirschberg.jpg',
    // 'http://2018.igem.org/wiki/images/b/b7/T--Washington--GuTalk.jpg',
    // 'http://2018.igem.org/wiki/images/2/28/T--Washington--AmbassadorTalk.jpg',
    // 'http://2018.igem.org/wiki/images/5/5f/T--Washington--SimulationsWorkshop.jpg',
    // 'http://2018.igem.org/wiki/images/4/48/T--Washington--FundraisingWorkshop.jpg',
    // 'http://2018.igem.org/wiki/images/3/3b/T--Washington--Outreach1.jpg',
    // "http://2018.igem.org/wiki/images/6/61/T--Washington--Outreach2.jpg",
    // 'http://2018.igem.org/wiki/images/4/4b/T--Washington--Outreach3.jpg',
    // 'http://2018.igem.org/wiki/images/5/53/T--Washington--TacomaPresentation.jpg',
    // "http://2018.igem.org/wiki/images/2/25/T--Washington--iTeslaPresentation.jpg",
    // 'http://2018.igem.org/wiki/images/5/55/T--Washington--WashingtonPresentation.jpg',
    // "http://2018.igem.org/wiki/images/7/70/T--Washington--Poster2.jpg",
    // "http://2018.igem.org/wiki/images/a/ac/T--Washington--Poster3.jpg",
    // "http://2018.igem.org/wiki/images/1/1c/T--Washington--Poster1.jpg",
    // "http://2018.igem.org/wiki/images/1/10/T--Washington--AngeliTesla.jpg",
    // "http://2018.igem.org/wiki/images/1/16/T--Washington--KaraliTesla.jpg",
    // "http://2018.igem.org/wiki/images/e/e8/T--Washington--iTesla.jpg",
    // "http://2018.igem.org/wiki/images/f/f2/T--Washington--wetlabbiopanningprojectdesign.png",
    // "http://2018.igem.org/wiki/images/f/fb/T--Washington--elisa.png",
    // "http://2018.igem.org/wiki/images/d/d2/T--Washington--plamid.png",
    // "http://2018.igem.org/wiki/images/c/c9/T--Washington--biosensor.png",
    // "http://2018.igem.org/wiki/images/b/bd/T--Washington--1aa.png",
    // "http://2018.igem.org/wiki/images/2/2e/T--Washington--2aa.png",
    // "http://2018.igem.org/wiki/images/0/0f/T--Washington--3aa.png",
    // "http://2018.igem.org/wiki/images/7/72/T--Washington--4aa.png",
    // "http://2018.igem.org/wiki/images/d/d8/T--Washington--5aa.png",
    // "http://2018.igem.org/wiki/images/f/f0/T--Washington--6.png",
    // "http://2018.igem.org/wiki/images/a/ac/T--Washington--7.png",
    // "http://2018.igem.org/wiki/images/7/79/T--Washington--8.png",
    // "http://2018.igem.org/wiki/images/e/ef/T--Washington--9.png",
    // "http://2018.igem.org/wiki/images/d/dc/T--Washington--10.png",
    // "http://2018.igem.org/wiki/images/6/66/T--Washington--11.png",
    // "http://2018.igem.org/wiki/images/8/8e/T--Washington--12.png",
    // "http://2018.igem.org/wiki/images/9/9e/T--Washington--13.png",
    // "http://2018.igem.org/wiki/images/a/aa/T--Washington--14.png",
    // "http://2018.igem.org/wiki/images/9/91/T--Washington--15.png",
    // "http://2018.igem.org/wiki/images/2/22/T--Washington--16.png",
    // "http://2018.igem.org/wiki/images/f/f1/T--Washington--17.png",
    // "http://2018.igem.org/wiki/images/f/f7/T--Washington--18.png",
    // "http://2018.igem.org/wiki/images/6/66/T--Washington--RotaryCad.png",
    // "http://2018.igem.org/wiki/images/b/b6/T--Washington--Shoreline3.jpg",
    // "http://2018.igem.org/wiki/images/d/d6/T--Washington--Shoreline1.jpg",
    // "http://2018.igem.org/wiki/images/0/05/T--Washington--Shoreline2.jpg",
    // "http://2018.igem.org/wiki/images/4/49/T--Washington--MathFestival3.jpg",
    // "http://2018.igem.org/wiki/images/5/59/T--Washington--MathFestival2.jpg",
    // "http://2018.igem.org/wiki/images/3/33/T--Washington--MathFestival1.jpg",
    // "http://2018.igem.org/wiki/images/6/6a/T--Washington--IntroduceAGirlToBIOE1.jpg",
    // "http://2018.igem.org/wiki/images/a/a1/T--Washington--IntroduceAGirlToBIOE2.jpg",
    // "http://2018.igem.org/wiki/images/3/3e/T--Washington--IntroduceAGirlToBIOE3.jpg",
    // "http://2018.igem.org/wiki/images/a/a2/T--Washington--Northgate1.jpg",
    // "http://2018.igem.org/wiki/images/3/30/T--Washington--Northgate2.jpg",
    // "http://2018.igem.org/wiki/images/2/2e/T--Washington--Northgate3.jpg",
    // "http://2018.igem.org/wiki/images/7/72/T--Washington--InternationalSchool1.jpg",
    // "http://2018.igem.org/wiki/images/c/c3/T--Washington--InternationalSchool2.jpg",
    // "http://2018.igem.org/wiki/images/d/d7/T--Washington--InternationalSchool3.jpg",
    // "http://2018.igem.org/wiki/images/e/e0/T--Washington--Sadhana1.jpg",
    // "http://2018.igem.org/wiki/images/a/ab/T--Washington--Sadhana2.jpg",
    // "http://2018.igem.org/wiki/images/3/39/T--Washington--Sadhana3.jpg",
    // "http://2018.igem.org/wiki/images/c/c4/T--Washington--KentMeridian1.jpg",
    // "http://2018.igem.org/wiki/images/b/b3/T--Washington--KentMeridian2.jpg",
    // "http://2018.igem.org/wiki/images/4/4e/T--Washington--KentMeridian3.jpg",
    // "http://2018.igem.org/wiki/images/8/87/T--Washington--Rainier1.jpg",
    // "http://2018.igem.org/wiki/images/b/bc/T--Washington--Rainier2.jpg",
    // "http://2018.igem.org/wiki/images/1/1b/T--Washington--Rainier3.jpg",
    // "http://2018.igem.org/wiki/images/a/a2/T--Washington--AutismCamp1.jpg",
    // "http://2018.igem.org/wiki/images/e/ea/T--Washington--AutismCamp2.jpg",
    // "http://2018.igem.org/wiki/images/3/39/T--Washington--AutismCamp3.jpg",
    // "http://2018.igem.org/wiki/images/c/cb/T--Washington--1a.png",
    // "http://2018.igem.org/wiki/images/7/7e/T--Washington--2a.png",
    // "http://2018.igem.org/wiki/images/b/b6/T--Washington--3a.png",
    // "http://2018.igem.org/wiki/images/c/c6/T--Washington--4a.png",
    // "http://2018.igem.org/wiki/images/9/99/T--Washington--SitDownSynbio1.jpg",
    // "http://2018.igem.org/wiki/images/8/83/T--Washington--SitDownSynbio2.jpg",
    // "http://2018.igem.org/wiki/images/d/db/T--Washington--SitDownSynbio3.jpg",
    // "http://2018.igem.org/wiki/images/9/99/T--Washington--ClassGradingScale.png",
    // "http://2018.igem.org/wiki/images/b/bc/T--Washington--Givebutterlogo.jpg",
    // "http://2018.igem.org/wiki/images/f/fb/T--Washington--BusinessTeamLogo.png",
    // "http://2018.igem.org/wiki/images/9/96/T--Washington--LumenLogo.jpg",
    // "http://2018.igem.org/wiki/images/thumb/7/73/T--Washington--LumenVisit.jpg/800px-T--Washington--LumenVisit.jpg",
    // "http://2018.igem.org/wiki/images/a/a3/T--Washington--ISBLogo.png",
    // "http://2018.igem.org/wiki/images/c/c7/T--Washington--ISBVisit.jpg",
    // "http://2018.igem.org/wiki/images/6/6d/T--Washington--AmyrisLogo.png",
    // "http://2018.igem.org/wiki/images/a/ae/T--Washington--JustLogo.jpg",
    // "http://2018.igem.org/wiki/images/thumb/7/70/T--Washington--JustVisit.jpg/800px-T--Washington--JustVisit.jpg",
    // "http://2018.igem.org/wiki/images/7/7f/T--Washington--SlackUsage.jpg",
    // "http://2018.igem.org/wiki/images/a/ab/T--Washington--ZulipScreenshot.jpg",
    // "http://2018.igem.org/wiki/images/0/0a/T--Washington--ZulipBugs.jpg",
    // "http://2018.igem.org/wiki/images/2/28/T--Washington--Zulipusage.jpg",
    "http://2018.igem.org/wiki/images/b/b1/T--Washington--RehaanTeam.jpg",
    "http://2018.igem.org/wiki/images/1/1a/T--Washington--AimeeTeam.jpg",
    "http://2018.igem.org/wiki/images/e/e2/T--Washington--EdTeam.jpg",
    "http://2018.igem.org/wiki/images/5/54/T--Washington--JoanneTeam.jpg",
    "http://2018.igem.org/wiki/images/a/ac/T--Washington--KatekaTeam.jpg",
    "http://2018.igem.org/wiki/images/d/da/T--Washington--ShubTeam.jpg",
    "http://2018.igem.org/wiki/images/e/e8/T--Washington--biochemlogo.png",
    "http://2018.igem.org/wiki/images/e/e7/T--Washington--Genscriptlogo.png",
    "http://2018.igem.org/wiki/images/9/9e/T--Washington--IDTlogo.png",
    "http://2018.igem.org/wiki/images/0/01/T--Washington--CSElogo.png",
    "http://2018.igem.org/wiki/images/0/00/T--Washington--Zuliplogo.png",
    "http://2018.igem.org/wiki/images/d/d5/T--Washington--bioinfologo.png",
    "http://2018.igem.org/wiki/images/8/8f/T--Washington--BioElogo.png",
    "http://2018.igem.org/wiki/images/a/a6/T--Washington--IPDlogo.png",
    "http://2018.igem.org/wiki/images/d/d3/T--Washington--PvPlogo.png",
    "http://2018.igem.org/wiki/images/8/89/T--Washington--biologo.png",
    "http://2018.igem.org/wiki/images/5/54/T--Washington--appliedmathlogo.png",
    "http://2018.igem.org/wiki/images/b/b5/T--Washington--chemlogo.png",
    "http://2018.igem.org/wiki/images/4/49/T--Washington--NEBlogo.png",
    "http://2018.igem.org/wiki/images/5/5e/T--Washington--microbiologo.png",
    "http://2018.igem.org/wiki/images/0/0d/T--Washington--msebiologo.png",
]

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
        names: ["Project Description", "Design", "Experiments", "Notebook", "InterLab", "Model", "Results", "Parts", "Hardware"],
        links: ["/Description", "/Design", "/Experiments", "/Notebook", "/InterLab", "/Model", "/Results", "/Parts", "/Hardware"]
    },
    {
        title: "Human Practices",
        names: ["Overview", "Integrated HP", "Collaborations", "Education & Engagement", "Entrepreneurship", "HP Design", "Team Development"],
        links: ["/Human_Practices", "/Integrated_Human_Practices", "/Collaborations", "/Public_Engagement", "/Entrepreneurship", "/HP_Design", "/Team_Development"]
    },
    {
        title: "Safety",
        names: ["Safety"],
        links: ["/Safety"]
    },
    {
        title: "People",
        names: ["Team", "Attributions", "Sponsors", "Gallery"],
        links: ["/Team", "/Attributions", "/Sponsors", "/Gallery"]
    },
    {
        title: "Judging",
        names: ["Medal Requirements"],
        links: ["/Medal_Requirements"]
    },
];

var contentData = [
    {
        "content": [
            {
                "data": "HOMEPAGE\nBACKGROUND=http://2018.igem.org/wiki/images/f/f8/T--Washington--PhotoCollage.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=30\nTITLEHEIGHT=9\nSUBTITLEHEIGHT=5\nBLUR=2\nTITLE=STRONGER TOGETHER\nSUBTITLE=An efficient, generalizable approach to design biosensors for small molecules\nBUTTONTEXT=Overview\nCONTENTTITLE=Washington iGEM 2018\nCONTENTSUBTITLE=Chemically Induced Dimerization of Nanobodies for the Development of Versatile Biosensors\nCONTENT=Chemically induced dimerization (CID), in which two proteins dimerize only in the presence of a small molecule, has been widely used to control cell signaling, regulatory, and metabolic pathways, and used as logic gates for biological computation in living mammalian cells. However, few naturally occuring CID systems and their derivatives are currently available. Creating a CID system with desired affinity and specificity for any given small molecule remains an unsolved problem for computational design and other protein engineering approaches. To address this challenge, we have used a novel strategy to select CID binders from a vastly diverse combinatorial nanobody library. We have created new CID systems that can sense cholecalciferol and artemisinin. We are validating CID biosensors by a yeast three-hybrid system and built structural models to understand the small molecule-induced dimerization. Our work is a proof-of-concept that can be generalized to create CID systems for many applications.",
                "type": "SPECIAL"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/f/fb/T--Washington--elisa.png;LINK=http://2018.igem.org/Team:Washington/Design;TITLE=Design\nPICTURE=http://2018.igem.org/wiki/images/1/1a/T--Washington--CIDdiagram.png;LINK=http://2018.igem.org/Team:Washington/Description;TITLE=Project Description\nPICTURE=http://2018.igem.org/wiki/images/e/e0/T--Washington--Sadhana1.jpg;LINK=http://2018.igem.org/Team:Washington/Public_Engagement;TITLE=Education & Engagement\nPICTURE=http://2018.igem.org/wiki/images/7/73/T--Washington--LigDockAnim.gif;LINK=http://2018.igem.org/Team:Washington/Model;TITLE=Model\nPICTURE=http://2018.igem.org/wiki/images/b/bb/T--Washington--DNA_Gel_figure.png;LINK=http://2018.igem.org/Team:Washington/Results;TITLE=Results\nPICTURE=http://2018.igem.org/wiki/images/5/57/T--Washington--Gasworks2.jpg;LINK=http://2018.igem.org/Team:Washington/Integrated_Human_Practices;TITLE=Integrated Human Practices\nPICTURE=http://2018.igem.org/wiki/images/2/2d/T--Washington--Panel.png;LINK=http://2018.igem.org/Team:Washington/Collaborations;TITLE=Collaborations\nPICTURE=http://2018.igem.org/wiki/images/thumb/7/73/T--Washington--LumenVisit.jpg/800px-T--Washington--LumenVisit.jpg;LINK=http://2018.igem.org/Team:Washington/Entrepreneurship;TITLE=Entrepreneurship\nPICTURE=http://2018.igem.org/wiki/images/d/d2/T--Washington--Leads.jpg;LINK=http://2018.igem.org/Team:Washington/Team;TITLE=Team;YPOS=0",
                "type": "SPECIAL"
            }
        ],
        "pageTitle": ""
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=INTERLAB\nBACKGROUND=http://2018.igem.org/wiki/images/1/1f/T--Washington--LabBG.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\noverview\nOverview",
                "type": "SPECIAL"
            },
            {
                "data": "# Overview\n\nSince 2014, the iGEM Measuring Committee has been dedicated to developing a robust and repeatable measurement procedure for Green Fluorescent Protein (GFP). To do so, iGEM has held the Interlab Study for several years, utilizing the international reach of the competition to test their procedures and collect data. We are proud to have participated in this study so that this ongoing effort can come closer to developing a universal way to measure GFP regardless of machinery and resources.\n\nThe main protocol for the 2018 Interlab Study was provided by iGEM headquarters and can be found [here](http://2018.igem.org/Measurement/InterLab/Plate_Reader).\n\nWe followed the Plate Reader and CFU protocol with the tools provided by iGEM.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nexperience\nExperience",
                "type": "SPECIAL"
            },
            {
                "data": "# Experience\nThe protocol was simple to follow. We made a few adjustments to the protocol due to limitations on supplies:\n\n1. Use of clear plates instead of black bottom plates\n1. Use of 15 mL conical tubes covered in foil instead of 50 mL conical tubes\n\nWe also ran into some issues with growing up the cultures as our incubator/shaker could only hold the conical tubes upright instead of slanted, which may have affected how well they were able to grow. Overall, the protocols were not too challenging, and it gave us an opportunity to work heavily with plate readers and learn how to set up the readings in various ways.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncalibration1\nCalibration 1",
                "type": "SPECIAL"
            },
            {
                "data": "# Calibration 1: OD₆₀₀ Reference Point using LUDOX\n\nLUDOX Reference Point\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/b/bd/T--Washington--1aa.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "LUDOX CL-X was used as a point reference to turn ABS₆₀₀ measurements into OD₆₀₀ measurements.  LUDOX solution was used due to its low absorbance value. This calibration was necessary because plate reader measurements of absorbance are volume dependent as the depth of the fluid in the well changes path length of light passing through the sample. \n\nOur results over four replicates were extremely close which showed consistency in pipetting and machine reading. Calibration 1 was repeated three times in order to check for consistency.\nOur OD₆₀₀/Abs₆₀₀ correction factor turned out to 3.247. For all cell density readings using this instrument with the same settings and volume, we converted to OD₆₀₀ by multiplying by 3.247.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncalibration2\nCalibration 2",
                "type": "SPECIAL"
            },
            {
                "data": "# Calibration 2: Microspheres\n\nThe point of using monodisperse silica microspheres was that their size and optical characteristics are similar to cells and we know the exact number of spheres we have. This allows us to use a standard curve of particle concentration, which we can use to convert to ABS₆₀₀ measurements for the estimated number of cells.\n\nSpecs used:\n* 530 nm emission\n* 485 nm excitation\n\nMicrosphere Absorbance in Serial Dilutions Raw Data",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/2/2e/T--Washington--2aa.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "Particle Standard Curve",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/0/0f/T--Washington--3aa.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "Particle Standard Curve on a Log Scale",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/7/72/T--Washington--4aa.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "Particles / OD",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/d/d8/T--Washington--5aa.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "The data was consistent over four replicates, suggesting that the readings were done quickly enough before the microspheres settled to the bottom of the well, as they will settle after a short period of time. We thought an automix feature on the machine would help mix the beads better, but the results turned out to be worse and had clumps of beads at the bottom. To counter this problem, we pipetted up and down four times in a circle around the well, ending with the more concentrated wells. After checking that there was no bead pellet, we received the expected results. We know that this is expected because each well’s total number of particles should have been half of the previous well’s value, as the concentration was cut in half for each well. The particle standard curve on the log scale, although supposed to be 1:1, turned out to be an exponential curve. We suspect that this may be due to a machine error. Throughout six trials, with the technique of pipetting up and down three times, the log curve was still a straight line.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncalibration3\nCalibration 3",
                "type": "SPECIAL"
            },
            {
                "data": "# Calibration 3: Fluorescein standard curve\n\nThe data was consistent over four replicates, showing that there was no error in pipetting or diluting. A fluorescein experiment was used as the third calibration to create a standard curve - this was done so that any difference in how plate readers reported fluorescence could be compared between different teams’ data, regardless of the brand of the plate reader used. This will be used to convert the cell-based readings to an equivalent concentration\n\n* 530 nm emission\n* 485 nm excitation\n\nFluorescein Raw Data",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/f/f0/T--Washington--6.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "http://2018.igem.org/wiki/images/a/ac/T--Washington--7.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "http://2018.igem.org/wiki/images/7/79/T--Washington--8.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "Fluorescein / a.u.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/e/ef/T--Washington--9.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "Colony Raw Plate Readings",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/d/dc/T--Washington--10.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "http://2018.igem.org/wiki/images/6/66/T--Washington--11.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "Fluorescence per OD Experimental Values\n\nThe Unit Scaling Factors determined by the calibration is\n\nOD₆₀₀/Abs₆₀₀ = 3.25\n\nμM Fluorescein/a.u. = 4.49E-4\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/8/8e/T--Washington--12.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "http://2018.igem.org/wiki/images/9/9e/T--Washington--13.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "http://2018.igem.org/wiki/images/a/aa/T--Washington--14.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "Fluorescence per Particle Experimental Values\n\nUnit Scaling Factors determined by the calibration is:\n\nParticles/Abs₆₀₀ = 2.52E8\n\nMEFL/a.u = 2.71E9\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/9/91/T--Washington--15.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "http://2018.igem.org/wiki/images/2/22/T--Washington--16.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "http://2018.igem.org/wiki/images/f/f1/T--Washington--17.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "Plate Culture Count and CFU Values",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/f/f7/T--Washington--18.png,,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Notebook;LEFTNAME=Notebook;RIGHT=http://2018.igem.org/Team:Washington/Model;RIGHTNAME=Model",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/InterLab"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=CraftY GirlZ\nBACKGROUND=http://2018.igem.org/wiki/images/1/1f/T--Washington--LabBG.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "CRAFTY\nCRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ ",
                "type": "SPECIAL"
            }
        ],
        "pageTitle": "/CraftyGirlz"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=Team\nBACKGROUND=http://2018.igem.org/wiki/images/5/5e/T--Washington--TeamBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nBLUR=3\nMINPADDINGTOP=120",
                "type": "SPECIAL"
            },
            {
                "data": "TEAM\nNAME=Anastasia Nicolov; ROLE=Adviser; PICTURE=http://2018.igem.org/wiki/images/b/bc/T--Washington--AnastasiaTeam.jpg; LINKEDIN=https://www.linkedin.com/in/anastasianicolov/; FILTER=Adviser; BIO=A Seattle native, Anastasia graduated from UW in 2017 with a B.S. in Bioengineering and currently works at Just Biotherapeutics as a bioreactor scientist. As a 5-year iGEM veteran, she acts as adviser to both the Washington and iTesla-SoundBio teams, and was a main organizer of the first-ever Pacific Northwest iGEM Meetup this year.\nNAME=William Kwok; ROLE=Drylab Lead Engineer, Wiki Developer; PICTURE=http://2018.igem.org/wiki/images/0/0c/T--Washington--WilliamTeam.jpg;GITHUB=https://github.com/kwokwilliam; LINKEDIN=https://linkedin.com/in/william-w-kwok/; PERSONAL=https://williamk.info; FILTER=Drylab,Leadership; BIO=Coming from tropical Hawaii, William is a current junior obtaining a BS in Informatics. His focus on the team was to organize the hardware and software teams and programming the Wiki. He currently is a teaching assistant for Client Side Development and works under Dr. Andy Ko in the Code and Cognition Lab. In his spare time, he enjoys playing video games with his friends and programming side projects.\nNAME=Kara de Leon; ROLE=Wetlab, Outreach; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; LINKEDIN=https://www.linkedin.com/in/karadeleon; FILTER=Wetlab, Outreach; BIO= Kara a third-year undergraduate bioengineering student. Driven by care and curiosity, she is passionate in her pursuit of gaining experience in different areas of Bioengineering and promoting diversity and STEM education. She is thrilled that iGEM allows her to do both alongside her hilarious and intelligent teammates in Wetlab and Outreach!\nNAME=Krithi Basu;ROLE=Director of Internal Affairs, Wetlab;PICTURE=http://2018.igem.org/wiki/images/b/b2/T--Washington--KrithiTeam.jpg;LINKEDIN=https://www.linkedin.com/in/krithi-basu/;FILTER=Wetlab, Leadership;BIO=Krithi is currently a junior majoring in Bioengineering and minoring in Law, Societies and Justice. This year, her main role as Director of Internal Affairs was to be the communication hub and interface between team members and leadership. She enjoys researching viral immunology, listening to music, talking about social issues, and watching horror movies.\nNAME=Andrew Hu; ROLE=Operational Administrative Lead; PICTURE=http://2018.igem.org/wiki/images/c/ce/T--Washington--AndrewTeam.jpg; GITHUB=https://github.com/andrewhu-uw; LINKEDIN=https://www.linkedin.com/in/andrew-hu/; FILTER=Drylab, Leadership; BIO=Andrew is a third-year Computer Science & Education double major. He led the curriculum team in creating a seminar to help team members prepare for the summer, and serves as an admin lead with Angel Wong.\nNAME=Angie Dang; ROLE=Wetlab, Design; PICTURE=http://2018.igem.org/wiki/images/9/9d/T--Washington--AngiePhoto.jpg; FILTER=Design, Wetlab; BIO=Born and raised in Washington, Angie is finishing her fourth year at UW - aiming for a B.A. in Biochemistry. Her role in iGEM was primarily working in lab and illustrating for design projects, such as the Synthetic Biology Activity Booklet. When she's off the clock, Angie is usually catching up on sleep.\nNAME=Joanne Wong; ROLE=Wetlab, Outreach; PICTURE=http://2018.igem.org/wiki/images/5/54/T--Washington--JoanneTeam.jpg; LINKEDIN=https://www.linkedin.com/in/joanneytwong/; FILTER=Wetlab, Outreach; BIO=All the way from Hong Kong, Joanne is currently a junior pursuing Chemical Engineering. Hoping to go into the field of research, she joined iGEM to get a taste of that! Other than that, she loves thinking about food during every waking moment.\nNAME=Chemay Shola;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/5/5d/T--Washington--ChemayTeam.jpg;LINKEDIN=https://www.linkedin.com/in/chemayshola/;FILTER=Wetlab;BIO=Born and raised in southern Washington, Chemay is a current sophomore in the Department of Bioengineering. His focus on the team was to conduct wetlab experiments. In his spare time, he enjoys running, reading, and meditating.\nNAME=Charlie Fisher; ROLE=Wetlab, Design, Presenter; PICTURE=http://2018.igem.org/wiki/images/1/1a/T--Washington--CharlieTeam.jpg; LINKEDIN=https://www.linkedin.com/in/charlie-fisher-028689167/; FILTER=Wetlab, Design, Presenters; BIO=Charlie is a third-year undergraduate student, majoring in electrical engineering. Her passion for physiology drew her to iGEM but the complexity of organisms made her stay. She loves the uncertainty of wetlab experiments and the creative possibilities in design. Catch her on hikes, at coffee shops, or in Boston as one of Washington iGEM’s presenters!\nNAME=Sea-Eun Lee; ROLE=Drylab; PICTURE=http://2018.igem.org/wiki/images/e/ec/T--Washington--SeaEunTeam.jpg; GITHUB=https://github.com/uwigem/Chromastat18/tree/seaeun/src/chromastat18; LINKEDIN= https://www.linkedin.com/in/seaeunlee/; FILTER=Drylab; BIO=Sea-Eun is a current sophomore, pursuing a BS in Computer Science. Her focus was improving the functionality and efficiency of the Chromastat with a small group of individuals. In her spare time, she likes to spend time with her family and friends and work out.\nNAME=Aimee Ellis;ROLE=Wetlab, Outreach, Collaborations;PICTURE=http://2018.igem.org/wiki/images/1/1a/T--Washington--AimeeTeam.jpg;FILTER=Wetlab, Outreach, Collaborations;BIO=Born in Minnesota and mostly raised in Washington, Aimee is currently a sophomore at the University of Washington intending to major in Biochemistry and Molecular Biology. Her role in iGEM is primarily working in lab and designing lessons for the Synthetic Biology Activity Booklet. In her free time, Aimee enjoys working out, teaching people how to swim, and singing along to current hits on the radio.\nNAME=Sairandri Sathyanarayanan; ROLE=Business, Outreach; PICTURE=http://2018.igem.org/wiki/images/7/77/T--Washington--SairandriTeam.jpg; FILTER=Business, Outreach; BIO=Sairandri Sathyanarayanan is a sophomore majoring in Molecular, Cellular and Developmental Biology. She is primarily involved with the business and outreach teams in iGEM. When she isn't working, she enjoys advocating for mental health, singing and reading.\nNAME=Dallas Warren;ROLE=Simulations, Outreach;PICTURE=http://2018.igem.org/wiki/images/5/50/T--Washington--DallasTeam.jpg;LINKEDIN=https://linkedin.com/in/dallaswarren/;FILTER=Drylab, Outreach; BIO=Dallas is a Washington local and rising senior majoring in Electrical Engineering. As a member of the team he helped develop outreach curriculum and created mathematical models using Tellurium. In his free time he enjoys listening to music.\nNAME=Aerilynn Nguyen; ROLE=Wetlab, Outreach; PICTURE=http://2018.igem.org/wiki/images/5/58/T--Washington--AerilynnTeam.jpg; FILTER=Wetlab, Outreach; BIO=Aerilynn is a senior studying molecular biology. When she isn't in lab, she's helping to organize and volunteer at outreach events with the hopes of making others just as excited about synthetic biology as she is. Aerilynn draws a lot of her inspiration and passion for synthetic biology from the fictional universe of Star Trek. When she's not watching Star Trek, she's working out, playing video games, or hanging out with her dogs.\nNAME=Karl Anderson; ROLE=Project Lead; PICTURE=http://2018.igem.org/wiki/images/e/e7/T--Washington--KarlTeam.jpg;LINKEDIN=https://www.linkedin.com/in/karlbanderson/; FILTER=Wetlab, Leadership; BIO=Karl is a junior studying Biochemistry and Molecular Biology. He has been responsible for overseeing the design and execution of this year’s project as well as managing the wetlab team. He spends a lot of time working in lab, but he also finds days to hike and sail in the Pacific Northwest.\nNAME=Yoshi Goto; ROLE=Adviser, Fundraising Manager; PICTURE=http://2018.igem.org/wiki/images/4/40/T--Washington--YoshiTeam.jpg; GITHUB=https://github.com/Yoshi8765; LINKEDIN=https://www.linkedin.com/in/yoshigoto/; FILTER=Adviser, Drylab; BIO=Yoshi has been involved in iGEM since his sophomore year at the University of Washington. Now three years later, he's still involved in iGEM.\\n Yoshi graduated from the University of Washington with a B.S. in Bioengineering and a minor in Applied Mathematics, specializing in Synthetic and Systems Biology. He now works at SoundBio Lab, Seattle's DIY Biohackerspace. He credits iGEM with that academic and career decision. He also worked at the Sauro lab at UW in the Center for Reproducible Biological Models. He started the simulations team in Team Washington. After being the Admin lead last year, he has now handed off the baton to others and is focusing on Funding for the team. He can't believe how far the team has gotten. He also is an adviser for the iTESLA-SoundBio team, also based in Seattle.\nNAME=Grace Soah-Yeon Kim;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/1/1d/T--Washington--GraceTeam.jpg;LINKEDIN=https://linkedin.com/in/grace-s-kim/;FILTER=Wetlab;BIO=Born and raised in the Greater Seattle Area, Grace is currently a sophomore majoring in Bioengineering. She joined iGEM to explore synthetic biology, learn wetlab techniques, and meet new people. Outside of iGEM, she enjoys researching about immunotherapy and food science, volunteering, hanging out with friends, having movie nights, and trying new food.\nNAME=Joshua Ip; ROLE=Simulations, Presenter; PICTURE=http://2018.igem.org/wiki/images/4/49/T--Washington--JoshuaTeam.jpg; GITHUB=https://github.com/joshuaipwork/; LINKEDIN=https://www.linkedin.com/in/joshua-i-877706128/; FILTER=Drylab, Presenters; BIO= Hailing from Pflugerville, Texas, Joshua is a Bioengineering sophomore intending to join a Bioengineering startup when he graduates. When not studying in the library, he can be found in the Comotion Makerspace working with the 3d printers, laser cutters, and CNC milling machines.\nNAME=Renaldo Sutanto;ROLE=Treasurer, Wetlab;PICTURE=http://2018.igem.org/wiki/images/c/ca/T--Washington--RenaldoTeam.jpg;FILTER=Leadership, Wetlab;BIO=Renaldo is a senior studying Molecular, Cellular, and Developmental Biology and Biochemistry, and minoring in Chemistry and Quantitative Science. His role in iGEM was primarily organizing all the budget that iGEM received from various departments and companies. Outside of iGEM, he either does his own research about parasite, Giardia lamblia, or hanging out with friends.\nNAME=AJ Kruse; ROLE=Business, Fundraising, Adviser; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; GITHUB=https://github.com/aj1118; LINKEDIN=https://www.linkedin.com/in/ajkruse/; FILTER=Business, Fundraising, Adviser; BIO=Studying Bioengineering and Neurobiology, AJ is a junior passionate about harnessing synthetic biology to improve medicine. She also loves entrepreneurship and networking, and can make a mean sales pitch--skills she applied to her work with the business and fundraising teams.\nNAME=Leo Yeh; ROLE=Business; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; LINKEDIN=https://www.linkedin.com/in/feng-yu-y-27142a155/; FILTER=Business; BIO=Leo is a third year undergraduate student majoring in Molecular, Cellular and Developmental Biology. He is primarily involved in the business team in iGEM. He enjoys playing baseball and is a huge New York Yankees fan.\nNAME=Jay Yung;ROLE=Collaborations Lead, Wetlab, Design;PICTURE=http://2018.igem.org/wiki/images/e/e6/T--Washington--JayTeam.jpg;LINKEDIN=https://www.linkedin.com/in/jay-yung-b56101170/;FILTER=Wetlab, Collaborations, Leadership, Design;BIO=Originally from California, Jay is currently a sophomore at the UW planning to major in Plant Biology. His focuses on the team are wetlab, graphic design, and coordinating collaboration efforts between our team and others. Aside from research, he enjoys looking at plants, dancing, playing music, and sleeping more than he should.\nNAME=Janae Chan;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;LINKEDIN=https://www.linkedin.com/in/janaechan;FILTER=Drylab;BIO=Janae is a fourth year bioengineering and computer science student. She is passionate about advancing medicine through technology, and works on designing point-of-care diagnostic systems. On the rare occasion she is not in lab or studying, she enjoys hiking and going on food excursions.\nNAME=Dreycey Albin;ROLE=Drylab Adviser;PICTURE=http://2018.igem.org/wiki/images/d/de/T--Washington--TPhotoDreycey.jpg;GITHUB=https://github.com/Dreycey;LINKEDIN=https://www.linkedin.com/in/dreycey/;FILTER=Drylab, Advisers;BIO=Dreycey Albin is a current first year PhD student studying synthetic biology at Rice University. During his time advising for the Washington iGEM team, he was an NIH-funded post-baccalaureate working on using computational and experimental methods for the elucidation of RNA structures in the lab of Dr. Gabriele Varani. Dreycey helped co-teach a UW-affiliated iGEM course focused on simulations in biology, ODEs for modeling biology, while also helping with basic advising. As for his PhD, he is interested in combining hardware (including basic robotics, microcomputers, and microfluidics) with research in synthetic biology. \nNAME=Ed van Bruggen; ROLE=Simulations, Collaborations, Outreach; PICTURE=http://2018.igem.org/wiki/images/e/e2/T--Washington--EdTeam.jpg; GITHUB=https://github.com/edvb; FILTER=Drylab, Outreach, Collaborations; BIO=Originally from the bay area, Ed is now a sophomore at UW pursuing a major in physics. He was a lead for the Drylab's Simulations team, in which he created computer models of protein folding using Rosetta. When he's not up all night programming you can find him playing music, cooking, or reading.\nNAME=Ishira Parikh; ROLE=Outreach Lead, Wetlab, Design;PICTURE=http://2018.igem.org/wiki/images/f/fb/T--Washington--IshiraTeam.jpg; FILTER=Outreach, Wetlab, Leadership, Design; BIO= A Washington native, Ishira is a second year undergraduate student hoping to major in neurobiology. This year, Ishira led the outreach team by organizing outreach events and headed the development of the Synthetic Biology Activity Booklet. She was also the main organizer of Washington iGEM’s first-ever synthetic biology panel event and a member of wetlab. Outside of iGEM, Ishira can be found making art, researching the neural mechanisms of breathing, or catching up on sleep.\nNAME=Frances Ingram-Bate; ROLE=Simulations; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; LINKEDIN= https://www.linkedin.com/in/frances-ibe/; FILTER=Drylab; BIO=A Washington native, Frances is a current junior pursuing a B.S. in Bioengineering. As a member of the simulations team, she contributed to mathematical modeling of chemical reaction networks using Tellurium. Outside of iGEM, Frances enjoys working as a math tutor, being involved with undergraduate research, listening to music, and going to improv shows.\nNAME=Angel Wong;ROLE=Project Administrative Lead;LINKEDIN=https://www.linkedin.com/in/angeltanwong/;PICTURE=http://2018.igem.org/wiki/images/a/ac/T--Washington--AngelTeam.jpg;FILTER=Wetlab, Leadership;BIO=Born and raised in sunny Southern California, Angel is currently a junior at UW earning a double degree in Bioengineering and Biochemistry with a minor in Dance. She has been involved in iGEM since her freshman year and served as a presenter for Team Washington at the 2017 Giant Jamboree. This year, Angel helped teach the course to prepare members for summer work and serves as an administrative lead along with Andrew Hu.\\nWhen she is not studying, sleeping, or surfing the iGEM website for the seventh time in the same day to make sure she hasn't missed a deadline, Angel enjoys ballet dancing, stargazing, doing jigsaw puzzles, and chasing pigeons.\nNAME=Hannah Redden; ROLE=Design Lead, Simulations; PICTURE=http://2018.igem.org/wiki/images/6/6c/T--Washington--HannahTeam.jpg; LINKEDIN=https://www.linkedin.com/in/hannah-redden-262b8a127/; FILTER=Design, Leadership, Drylab; BIO=Hannah is a junior double-majoring in Biochemistry and Bioengineering with a minor in Classical Studies. This year, Hannah developed a design team to explore interactions with art and science and to see how to improve scientific communication using visual methods. She enjoys traveling, reading, swimming, and trying out random craft projects as hobbies.\nNAME=Rehaan Bhimani;ROLE=Business Team Lead, Drylab;PICTURE=http://2018.igem.org/wiki/images/b/b1/T--Washington--RehaanTeam.jpg;GITHUB=https://github.com/bhimar;LINKEDIN=https://www.linkedin.com/in/rehaanbhimani;FILTER=Drylab, Leadership, Business;BIO=Rehaan is a sophomore hoping to double major in Computer Science and Applied Math. He leads Washington iGEM's business team and is also an engineer on the software team. When he isn't in class or writing code for his research, he loves to read, play guitar, and get those Fortnite victory royales.\nNAME=Richmon Lin;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;GITHUB=https://github.com/RichmonLin;LINKEDIN=https://www.linkedin.com/in/RichmonLin/;FILTER=Drylab;BIO=Richmon is a current sophomore in the Bioengineering department. He works on the hardware subteam and is interested in designing biomedical diagnostic tools. Outside of class he loves to snowboard and play video games.\nNAME=Nicholas Righi;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Drylab;BIO=Nicholas is a Bioengineering sophomore who focused on creating an open source test tube rotator for the Wetlab team. In his free time Nicholas enjoys weightlifting, spending time with friends, and playing Magic the Gathering.\nNAME=Alan Cabrera;ROLE=Wetlab Adviser;PICTURE=http://2018.igem.org/wiki/images/2/2f/T--Washington--AlanPic.jpg;LINKEDIN=https://www.linkedin.com/in/alan-cabrera-241532113;FILTER=Wetlab, Advisers;YPOS=0;BIO=Alan Cabrera was an adviser for the team. He helped during the project planning phase. Using his experimental experience, he stressed the importance of planning, research, and identifying support in project development. Alan is a synthetic biologist with training in the Seelig lab at UW. His hobbies include, competing in collegiate bike racing and roasting coffee. Alan graduated with his Bachelor's in Bioengineering this year, and has started the PhD program in the Bioengineering department at Rice University. He plans to get involved with iGEM at Rice next year. \nNAME=Dr. Herbert Sauro;ROLE=University of Washington Department of Bioengineering;PICTURE=http://2018.igem.org/wiki/images/9/99/T--Washington--SauroTeam.jpg;CUSTSIZE=100;YPOS=0;XPOS=50;FILTER=PIs;BIO=Dr. Sauro’s lab has been involved in a number of areas in systems as well as synthetic biology. He imitated the development of SBOL, the synthetic biology open language which is becoming the de facto language for describing synthetic designs. In systems biology he has developed a number of software tools, and standards most recently a Python based kit called Tellurium. He was cofounder of the SBML development teach. His modeling research involves developing new robust methods to develop more reliable predictive models that can simulate diseases such as cancer. Recently, he was appointed to lead a large Center for Reproducible Biomedical Modeling which was also recently awarded by the NIH.\nNAME=Dr. Liangcai Gu;ROLE=University of Washington Department of Biochemistry;PICTURE=http://2018.igem.org/wiki/images/2/20/T--Washington--GuTeam.jpg;CUSTSIZE=100;YPOS=25;XPOS=50;FILTER=PIs;BIO=Dr. Gu's lab use quantitative protein interaction profiling to understand molecular recognition and guide computational protein design. They develop protein interaction sequencing technologies by coupling ‘protein barcoding’ techniques—e.g., molecular attachment of proteins to barcoding DNAs, display of proteins on phage or cell surfaces, and indirect barcoding of unlabeled proteins by using DNA barcoded affinity reagents such as antibodies—to massively parallel 'in situ DNA sequencing' to quantitate protein interactions at a single-molecule or single-cell level. One example of protein interaction sequencing is a single-molecular-interaction sequencing (SMI-seq) technology (Gu, et al., Nature, 2014) for large-scale molecular counting of proteins and complexes. Our current research interests include (1) engineering of ligand-responsive protein assemblies, (2) human protein interactome profiling and drug screening, and (3) functional profiling of B-cell and T-cell receptors.\nNAME=Andrew Asakawa;ROLE=Lab Manager;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab, Leadership;BIO=Andrew is a junior majoring in Bioengineering. This year he was responsible for training new members at the beginning of the season, helping to manage the lab space and safety, and creating biobricks. Outside of iGEM he spends his time making and drinking coffee, cooking, and exploring the Seattle.\nNAME=Monica Mursch;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=\nNAME=Kateka Seth; ROLE=Simulations; PICTURE=http://2018.igem.org/wiki/images/a/ac/T--Washington--KatekaTeam.jpg;FILTER=Drylab;BIO=Kateka is a current junior double majoring in Biochemistry and Informatics. In the Simulations team, she worked to generate protein models using Rosetta. In her spare time she enjoys playing the guitar and hiking around Washington.\nNAME=Vera Okolo;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/7/7d/T--Washington--VeraTeam.jpg;FILTER=Drylab;BIO=Vera is a fourth year at the University of Washington double majoring in Molecular, Cellular, & Developmental Biology and Medical Anthropolgy & Global Health. Her role in iGEM was the contributing to the research for the beginnings of an educational game for elementary students as well as interviewing members of the public for their opinions on the growing field of synthetic biology. In spare moments of time, she reads any and all genres of books, bakes macarons, and practices singing and playing the piano.\nNAME=Shubhankar Seth;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/da/T--Washington--ShubTeam.jpg;FILTER=Drylab;BIO=\nNAME=Victor Lee;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=\nNAME=Kristine Leano;ROLE=Wetlab, Collaborations;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab, Collaborations;BIO=Kristine is a senior studying for a BS in Biochemistry. She performs lab tasks with the Wetlab team and led international collaborations with teams in Europe. In her spare time, she likes to learn languages, dance hip hop, and meet new people.\nNAME=Zachary McNulty;ROLE=Simulations;GITHUB=https://github.com/zackmcnulty/;LINKEDIN=https://www.linkedin.com/in/zacharymcnulty/;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Drylab;BIO=Zachary McNulty is a Junior majoring in Applied Computational Mathematical Sciences. He worked on modeling the chemical networks relevant to the team's project in Tellurium. His interests lie in computational biology with a focus on its applications in synthetic biology and neuroscience.\nNAME=Debbie Chen;ROLE=Outreach;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=",
                "type": "SPECIAL"
            }
        ],
        "pageTitle": "/Team"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=PROJECT DESCRIPTION\nBACKGROUND=http://2018.igem.org/wiki/images/1/1a/T--Washington--CIDdiagram.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=7\nSUBTITLEHEIGHT=7\nBLUR=3\nMINTITLEHEIGHT=5\nMINPADDINGTOP=120\nPADDINGTOP=120",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\noverview\nOverview",
                "type": "SPECIAL"
            },
            {
                "data": "# Overview\n\nChemically induced dimerization (CID), a biochemical process in which two proteins dimerize only in the presence of a small molecule, has been widely utilized to control cell signaling as well as alter regulatory and metabolic pathways. In addition, they can be used to create logic gates for biological computation in living mammalian cells [1]. However, few naturally occuring CID systems and their derivatives are currently available. Creating a CID system with desired affinity and specificity for any given small molecule remains an unsolved problem for computational design and other protein engineering approaches. To address this challenge, we have used a novel strategy to select CID binders from a vastly diverse combinatorial nanobody library. We have created new CID systems that can sense cholecalciferol and artemisinin. We are validating CID biosensors by using a yeast three-hybrid system and have built structural models to understand the small molecule-induced dimerization. Our work is a proof-of-concept that can be generalized to create CID systems for many applications.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/1/1a/T--Washington--CIDdiagram.png,CID Diagram,margin:auto,width:80%",
                "type": "IMAGE"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncholecalciferol\nCholecalciferol",
                "type": "SPECIAL"
            },
            {
                "data": "# Cholecalciferol\n\nCholecalciferol, otherwise known as vitamin D3, is a type of vitamin D that is on the World Health Organization’s List of Essential Medicines [2]. It is made naturally by the skin and can be obtained by eating certain foods or taking dietary supplements. Despite it being an essential part of a healthy, balanced lifestyle, about 41.6% of adults are deficient in vitamin D in the United States [3]. A lack of vitamin D has been linked to various cancers, heart disease, diabetes, rickets, and osteoporosis [4]. Even though there has been a push to increase awareness about vitamin D deficiency, current detection systems remain expensive and often inaccurate. A study from Loyola University Chicago Stritch School of Medicine found that at least 40% of the results in two newly-developed vitamin D tests were inaccurate as they tended to overestimate the degree of vitamin D deficiency. The more accurate detection method to date involves liquid chromatography/tandem mass spectrometry [5][6]. However, the machines involved in the process can cost 100,000 USD [7]. To address this, we seek to develop a more accurate and accessible detection system so that people everywhere can maintain adequate vitamin D levels. ",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nartemisinin\nArtemisinin",
                "type": "SPECIAL"
            },
            {
                "data": "# Artemisinin\n\nArtemisinin is a widely used and extremely efficient anti-malarial drug derived by Chinese scientists from the plant Artemisia annua in the 20th century [8]. The increasing demand for Artemisinin has caused its production cost to skyrocket, resulting in many turning to fake antimalarial drugs. As malaria is such a prevalent disease in many third-world countries, the World Health Organization has had difficulty tracking the sale and distribution of these counterfeit drugs since producers can easily vanish when suspected and start production in a new location [9]. Recently, synthetic biologists have developed a synthetic version of Artemisinin to combat demand but unfortunately, the production cost is much more expensive than naturally grown Artemisinin, making it an inadequate solution to prevent the production of counterfeits [10]. When counterfeit Artemisinin is illegally produced, it is poorly made and often increases the risk of not only developing resistance, but also death due to improper treatment and other toxic ingredients [9]. In order to combat this growing issue, we have decided to choose Artemisinin as another target molecule and provide a possible method of screening for Artemisinin levels in drugs. ",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncannabidiol\nCannabidiol",
                "type": "SPECIAL"
            },
            {
                "data": "# Cannabidiol\n\nCannabidiol (CBD) is a natural cannabinoid constituent of cannabis. Initially, it was not thought to have any biological activity, but recently the Food and Drug Administration (FDA) approved Epidiolex, a cannabidiol prescription drug used to treat pediatric epilepsy [12]. CBD has been reported to have antioxidative, anti-inflammatory, and neuroprotective effects [13]. For instance, CBD is more effective than vitamin C and E as a neuroprotective antioxidant and can ameliorate skin conditions such as acne. Unlike Tetrahydrocannabinol (THC), CBD is not a psychoactive drug [14]. Although many products such as oils and balms are marketed to contain CBD, some products do not contain the market CBD levels or any at all. An FDA warning letter was sent out to the public about this pressing issue in the cannabis market (Office of the Commissioner). Thus, determining if CBD is present is an issue that our team has addressed by designing a biosensor to qualitatively determine CBD concentrations in a product. ",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncitations\nCitations",
                "type": "SPECIAL"
            },
            {
                "data": "# Citations\n\n1. DeRose, R., Miyamoto, T. & Inoue, T. Manipulating signaling at will: chemically-inducible dimerization (CID) techniques resolve problems in cell biology. _Pflugers Arch_ **465**, 409–417 (2013).\n1. WHO. Essential medicines and health products. http://www.who.int/medicines/publications/essentialmedicines/en/ (accessed, 1 October 2018).\n1. Forrest KY. & Stuhldreher WL. Prevalence and correlates of vitamin D deficiency in US adults. _Nutrition Research._ **31**, 48-54 (2011).\n1. Endocrine Society. Two new vitamin D blood tests are often highly inaccurate, researchers say. _ScienceDaily_ www.sciencedaily.com/releases/2012/06/120625152310.htm (25 June 2012).\n1. Corliss, J. Vitamin D testing not recommended for most people. _Harvard Health Blog_. https://www.health.harvard.edu/blog/vitamin-d-testing-recommended-people-201411267547 (26 November 2014).\n1. Arneson, W. & Arneson D. Current Methods for Routine Clinical Laboratory Testing of Vitamin D Levels. _Laboratory Medicine_. **44**, e38-e42 (2013).\n1. Conquer Scientific. https://conquerscientific.com/lab-equipment/liquid-chromatographs-hplc/ (2018).\n1. Encyclopaedia Britannica. Artemisinin. https://www.britannica.com/science/artemisinin (2018). \n1. Ambroise-Thomas, P. The Tragedy Caused by Fake Antimalarial Drugs. _Mediterranean Journal of Hematology and Infectious Diseases_. **4(1)**, e2012027 (2012). \n1. Peplow, M. Synthetic biology’s first malaria drug meets market resistance. _Nature_.\n1. https://www.nature.com/news/synthetic-biology-s-first-malaria-drug-meets-market-resistance-1.19426 (23 February 2016). \n1. Mead, A. The legal status of cannabis (marijuana) and cannabidiol (CBD) under U.S. law. _Epilepsy & Behavior_. **70**, 288-291 (2017).\n1. Iffland, K., & Grotenhermen, F.  An Update on Safety and Side Effects of Cannabidiol: A Review of Clinical Data and Relevant Animal Studies. _Cannabis and Cannabinoid Research_. **2(1)**, 139-154 (2017).\n1. Atakan, Z.  Cannabis, a complex plant: Different compounds and different effects on individuals. _Therapeutic Advances in Psychopharmacology_. **2(6)**, 241-254 (2012).\n1. FDA. Warning Letters and Test Results for Cannabidiol-Related Products. https://www.fda.gov/newsevents/publichealthfocus/ucm484109.htm (2017). ",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nRIGHT=http://2018.igem.org/Team:Washington/Design;RIGHTNAME=Design",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/Description"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=DESIGN\nBACKGROUND=http://2018.igem.org/wiki/images/f/fb/T--Washington--elisa.png\nYPOS=50\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nMINPADDINGTOP=120\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nnanobodies\nNanobodies",
                "type": "SPECIAL"
            },
            {
                "data": "# Nanobodies\n\nFor our binders, we chose to use nanobodies, which are fragments from antibodies found in camelids and sharks [1]. They have small binding pockets compared to traditional antibodies, making them well suited for binding to small molecules. We used a highly diverse combinatorial library given to us by Dr. Gu from The Institute of Protein Design, who synthesized it using trinucleotide mutagenesis (TRIM) to alter the binding region of the nanobody [2]. The diversity of this library is estimated to be greater than 10^9 variants.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nbiopanningp1\nBiopanning Phase 1",
                "type": "SPECIAL"
            },
            {
                "data": "# Biopanning Phase 1\n\nBiopanning served as a selection method for the nanobodies that we hoped to identify and utilize as a part of a chemically induced dimer. The selection is possible because of streptavidin coated magnetic beads, which are used with a strong magnetic bar and various biotinylated components. A sample of our biotinylated molecules (Artemisinin and Vitamin D3), binds to the coated magnetic beads. We then utilized a “phage library,” which consists of an array of bacteriophages that are bound to a nanobody, which in turns bind to the target molecule. We incubated the phage library with the molecule-bead complex to allow for optimal binding and then subjected the beads to various washing stages, so that only the phages that bind to our small molecule would still be bound. After washing, the phage-molecule complex is eluted from the magnetic bead by suspending the complex in triethylamine. We then infected E. coli cultures with the phages in order to create a stock of the output. We used a serial selection process in which the phage outputs of the prior stage are used in the next round of selection. Each subsequent iteration of the method utilizes more stringent washing. At the end, the process should have isolated the nanobodies that have the highest binding affinity to our small molecule, which we tested through ELISA and Octet procedures.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/f/f2/T--Washington--wetlabbiopanningprojectdesign.png,Biopanning Project Design,margin:auto,width:80%,maxWidth:700px",
                "type": "IMAGE"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nelisa\nELISA",
                "type": "SPECIAL"
            },
            {
                "data": "# ELISA\n\nAfter narrowing down the possible selection of nanobodies through biopanning, we performed  indirect ELISA to quantify binding affinities of nanobodies to to the target molecule. From the biopanning phase, we picked out individual colonies of phage-infected TG1 E. Coli and expressed the phages using a helper phage. For a control, we also tested phage binding affinity to streptavidin and biotin. The conjugation of streptavidin and biotin is used to anchor the small molecule in the experimental plate, so this is a necessary control to assess whether phages bind to the molecule or the linker.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/f/fb/T--Washington--elisa.png,ELISA,width:95%,margin:auto,maxWidth:900px",
                "type": "IMAGE"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncloning\nCloning",
                "type": "SPECIAL"
            },
            {
                "data": "# Cloning\n\nAfter picking out suitable nanobody candidates from the biopanning affinity selection technique and verifying them with ELISA, our next step was to clone and express those nanobodies in higher quantities to purify and biotinylate them in the future. We cloned them into ADL-23c-Avi (3), the same phagemid vector the nanobodies were originally expressed in, but with an additional Avitag. The Avitag is an amino acid sequence that signals for a specific enzyme biotin ligase (BirA) to biotinylate the nanobody, which would be necessary for future steps (3). Our general cloning procedure entailed that we digest our vector and inserts and then ligate them. We then transformed the assembled plasmids into BL21 and WK6 competent cells. The M13 phage cannot be translated along with the nanobody in these strains because they recognize the amber stop codon. This allows us to express the nanobodies in high quantities without them being displayed on a phage.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/d/d2/T--Washington--plamid.png,pADL-23c-Avi,width:80%,margin:auto,maxWidth:700px",
                "type": "IMAGE"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nproteinpurification\nProtein Purification",
                "type": "SPECIAL"
            },
            {
                "data": "# Protein Purification\n\nWith our nanobodies in new vectors, we expressed the phages using Isopropyl β-D-1-thiogalactopyranoside, or IPTG. This compound mimics allolactose which prompts lac operon transcription. Since our phagemid was designed to have protein expression under the control of the lac operon, the addition of IPTG to a growing culture allowed nanobodies to be produced in high quantities for later purification. We used a nickel-resin based purification protocol with our his-tagged nanobodies. After isolating our nanobody, we performed a desalting procedure to replace the imidazole buffer from purification. We then biotinylated the nanobodies using BirA, which was possible because our nanobodies have an Avi-Tag. The result was our biotinylated protein that could be used for additional characterization experiments and for biopanning to identify dimer binders.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\noctetkinetics\nOctet Kinetics",
                "type": "SPECIAL"
            },
            {
                "data": "# Octet Kinetics\n\nIn order to quantify the binding affinity of our nanobodies to artemisinin and cholecalciferol, we used biolayer interferometry. With this optical technology, the amount of these small molecules bound to nanobodies can be quantified in real time with biosensors from Pall ForteBio by measuring the change in the interference pattern of white light reflected off of a layer of nanobodies bound to the sensor. \n\nThese biosensors have a thin layer at the tip of the sensor that is coated in streptavidin, which allows us to anchor our nanobodies conjugated with biotin. When small molecules are bound by the anchored nanobodies, the optical layer thickens. This causes a wavelength shift which provides a measurement for the amount of nanobodies bound to small molecules. By measuring the rate at which the nanobodies bind at varying concentrations of the small molecule, we can obtain dissociation constants. \n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nfuturesteps\nFuture Steps",
                "type": "SPECIAL"
            },
            {
                "data": "# Future Steps\n\n## Dimer Binder Identification\n\nNow that we have identified and characterized suitable anchor binders from the original library after completing all the procedures up to this point, the next step is to repeat the process to identify a dimer binder than binds to the small molecule-anchor binder complex. The protocols are nearly identical, except during biopanning and characterization the anchor binder is linked to magnetic beads via streptavidin-biotin conjugation rather than the small molecule. The procedure is also done with the anchor binder bound to the small molecule so that we only select for nanobodies that specifically bind to that complex. \n\n## Biosensor\n\nWith the nanobody pairs identified, we will apply them into a yeast three-hybrid system to generate an output for the concentration of the target molecule. Figure 2 shows how the dimerization system is adapted for creating a biosensor in which the transcription of a reporter is enhanced as the DNA binding domain and activating domains of the Gal4 promoter join together. We will be using yeast strains PJ69-4A , -4ɑ and PJ69 and vectors p0BD2 and pOAD [4]. The vectors contain Gal4 activating and DNA binding domains upstream of a multiple cloning site where we can insert our nanobody binders. Upon transforming these recombinant vectors into the two strains, we can perform lacZ colorimetric assays [1] . A higher concentration of the target molecule will lead to an increased signal. Parameters retrieved from in vivo and in silico experiments and analysis can be incorporated into biological kinetic simulations to predict the dynamic output range of our two-hybrid biosensor. This can be done with Systems biology software such as Tellurium and COPASI. ",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/c/c9/T--Washington--biosensor.png,Biosensor,width:100%,margin:auto",
                "type": "IMAGE"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncitations\nCitations",
                "type": "SPECIAL"
            },
            {
                "data": "# Citations\n\n1. Muyldermans, S. Nanobodies: Natural Single-Domain Antibodies. _Annu. Rev. Biochem._ **82**, 775–797 (2013).\n1. Yan, J., Li, G., Hu, Y., Ou, W. & Wan, Y. Construction of a synthetic phage-displayed Nanobody library with CDR3 regions randomized by trinucleotide cassettes for diagnostic applications. _Journal of Translational Medicine_ **12**, 343 (2014).\n1. Fairhead M, Howarth M. Site-specific biotinylation of purified proteins using BirA. *Methods in molecular biology (Clifton, NJ)*. 2015;1266:171-184.\n1. James, P. & Halladay, J. Genomic Libraries and a Host Strain Designed for Highly Efficient Two-Hybrid Selection in Yeast. _Genetics_ **144**, 1425–1436 (1996).\n1. Möckli, N. & Auerbach, D. Quantitative β-galactosidase assay suitable for high-throughput applications in the yeast two-hybrid system. _BioTechniques_ **36**, 872–876 (2004)",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Description;LEFTNAME=Project Description;RIGHT=http://2018.igem.org/Team:Washington/Experiments;RIGHTNAME=Experiments",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/Design"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=EXPERIMENTS\nBACKGROUND=http://2018.igem.org/wiki/images/7/71/T--Washington--ELISAChart.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINTITLEHEIGHT=6\nSUBTITLEHEIGHT=7\nMINPADDINGTOP=120\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nbiopanning\nBiopanning",
                "type": "SPECIAL"
            },
            {
                "data": "# Biopanning\n\nBiopanning served as a selection method for the nanobodies that we hoped to identify and utilize as a part of a chemically induced dimer. The selection is possible because of streptavidin coated magnetic beads, which are used with a strong magnetic bar and various biotinylated components. A sample of our biotinylated molecules (Artemisinin and Vitamin D3), binds to the coated magnetic beads. We then utilized a “phage library,” which consists of an array of bacteriophages that are bound to a nanobody, which in turns bind to the target molecule. We incubated the phage library with the molecule-bead complex to allow for optimal binding and then subjected the beads to various washing stages, so that only the phages that bind to our small molecule would still be bound. After washing, the phage-molecule complex is eluted from the magnetic bead by suspending the complex in triethylamine. We then infected E. coli cultures with the phages in order to create a stock of the output. We used a serial selection process in which the phage outputs of the prior stage are used in the next round of selection. Each subsequent iteration of the method utilizes more stringent washing. At the end, the process should have isolated the nanobodies that have the highest binding affinity to our small molecule, which we tested through ELISA and Octet procedures.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nelisa\nELISA",
                "type": "SPECIAL"
            },
            {
                "data": "# ELISA\n\n## Day 1: Phage inoculation\n\n### Plate 1: Helper Phage Plate\n1. Select 48 colonies from each of the 2 titered outputs. There are 2 outputs from the competitive elution and regular elution during round 5.\n\n    Plate Layout:\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/7/71/T--Washington--ELISAChart.png,Plate layout,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "2. In a 96-deep well plate, inoculate 500uL 2YT with Ampicillin(100 ug/mL) with the 96 total colonies selected. \n    * Grow until OD 0.5 ; First check after 2 hours- then check every ½ hour\n1. Prepare Phage stock Plate\n    * Take 5uL of cultures from the 96-deep well plate from step 2 and inoculate new 500 uL culture with Ampicillin in 96-deep well plate. **Clarification: Helper phage is not added to this plate\n    * Grow overnight at 25ºC, 250 rpm\n1. Add 5uL of 10-fold dilute Helper phage in PBS to first plate when OD 0.5\n    * Add 50uL phage to 450uL PBS. Distribute 5uL to PCR tubes by using a multichannel pipette.\n    * If wells appear very dense, add extra helper phage (10uL instead of 5uL). \n    * Measuring OD: Shouldn’t be clear, but also won’t be very dense. If some wells are very clear, it’s better to wait for those to become cloudy than inoculate early.\n1. Shake at 37°C 250 RPM for 45 minutes (infection period)\n1. Add 500uL of 2YT with Amp (100ug/mL) and Kan (50 ug/mL)\n    * Make large batch of media with these antibiotics from salts\n        * Mix 50mL 2YT with 5mg amp and 2.5mg of Kan salt\n1. Grow overnight at 250rpm 25°C\n\n\n\n\n",
                "type": "MARKDOWN"
            },
            {
                "data": "## Day 2: Stocks and Phage Isolation\n\nHelper Phage Plate:\n\n1. Spin down Helper phage plate at 2000 rpm for 20 mins\n1. Collect supernatant (500 uL) and add into new 96-deep well plate. This new plate will contain isolated phages for ELISA \n1. Store in cold room (also keep original 96 well plate)\n\nStock Plate:\n\n1. Store in cold room.\n\nPrepare ELISA Plates:\n\n1. Soak 96-well plates in streptavidin solution \n    * 5 ug/mL streptavidin (initial 1 mg/mL)\n    * Here’s how to make enough streptavidin solution for 1 plate (7 mL/plate)\n        * 35 uL streptavidin (5ug/mL)\n        * 6.965 mL coating buffer\n\n",
                "type": "MARKDOWN"
            },
            {
                "data": "## Day 3: Competitive Single Phage ELISA\n\nOverview: Perform ELISA on various controls to assess whether these selected nanobodies on phages are good binders. There are three plates total:\n\n1. Control: biotin-only 2 micromol (plate 1)\n    * For two control plates: 14mL2uM500uM=0.056mL or 56uL biotin \n    * Add to 13.95mL PBS\n    * 0.040g/mL244g/mol=0.001693mol/ml = 1.693mol/L \n    * 1.693M  X uL = 0.0005M  3000uL\n        * 3,386 fold dilution\n        * 0.886uL  ~ Add 1 uL biotin to 3mL PBS \n1. Biotinylated target 1.5 uM (plate 2)\n    * For two phage plates:14mL 1.5uM216uM=0.0972 mL or 97.2uL biotinylated target\n    * Add to 13.90 mL 1X PBS\n    * 2 plates Artemisinin: 14mL 1.5uM500uM= 0.042mL, or 43 uL\n        * Add to 14mL 1X PBS\n1. Non-Biotin (competitive elution). Target 1 mM (plate 3)\n    * Expect to see a decrease in the signal for the non-biotinylated one vs the biotinylated target\n4. Wash streptavidin plates (prepared Day 2) with 0.05% PBST 3 times\n5. Add target/molecule of interest (70 microliters into each well (basically make 7 ml))\n    * All diluted in PBS\n    * Plate 1: Biotin\n    * Plate 2: biotinylated target\n    * Plate 3: biotinylated target\n6. Incubate via rotation incubation at room temp for 1 hr\n7. Wash 5 times with 0.05% PBST\n8. Add 300 uL of casein (serves as a block) in each well \n9. Incubate via rotation incubation at room temp for 1 hr\n    * Start harvesting phage\n    * Spin down plate with helper phage (2000 G for 20 mins)\n    * Transfer 700 mL to new plate (at least 500mL)\n10. Wash 5x with PBST 0.05%\n11. Add phage particle to every plate (70mL each well - not the inoculation plate)\n12. Wait 1 hr\n    * If doing competitive plate: Make 1mM of non-biotinylated D3 \n        * 14 uL of D3 into 686 uL of DMSO\n        * Add this to 6.5 mL of PBS to make 7 mL of solution\n13. Minimum of 10 - 15 washes PBST 0.05% = 12 times!\n15. Wait 1 hr\n16. Wash 5x with PBST 0.05%\n17. Add 70uL of first antibody (anti-M13)\n    * 28 mL casein-PBS total (and 14uL antibody)\n    * 2000-fold dilution in 1% casein PBS\n18. Wait 1 hr\n19. Wash 5x with PBST 0.05%\n20. Add 70uL of second antibody (light sensitive) = goat anti mouse secondary antibody - HRP\n    * Put foil around tube when doing dilution (1000-fold dilution)\n        * Add casein first\n    * Cover plates with aluminum foil\n21. Wait 1 hr\n22. Wash 5x with PBST 0.05%\n23. Add 70uL of ELISA substrate TMB at room temperature (clear to blue)\n    * Take out of cold room\n    * 5 minute wait after adding substrate for each plate\n        * Let it sit in the dark\n    * If no change in color, store for additional 5 mins\n24. Add 70uL of 1M HCL (blue to yellow - stops reaction)\n25. Use plate reader to measure absorbance\n    * Open desktop\n    * Click for ELISA → HRP endpoint assay (name of the two enzymes we are using)\n    * Set setting for 450 nm\n    * A1 to the top left and then H12 bottom right (same machine as the spectrophotometer) \n    * File → Import / Export → Save in folder on desktop (txt document form → can be easily dragged into excel)\n    * Reopen the txt file and make sure that the file looks fine\n    * If there are any negative values, close the app, reopen it, and remeasure. \n26. Discard plates.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\noctet\nOctet",
                "type": "SPECIAL"
            },
            {
                "data": "# Octet\n\n1. Fill wells A1 and B1 of a 96-well plate with the appropriate buffer.\n1. Take the buffer-only well plate and place it into an empty sensor tray. Place two super streptavidin (SSA) biosensors into the A1 and B1 wells - only one biosensor should occupy each well - and let sit for 10 minutes.\n1. Dilute the nanobody to 200uM and fill the 96-well plate with 200uL of the dilution according to the following layout.\n    * Nb refers to “nanobody,” B refers to “buffer.”\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/4/40/T--Washington--Octet1.png,Octet 1,margin:auto,width:70%,boxShadow:5px 5px 10px gray,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "4. Make six serial dilutions of the protein, and fill 96-well plate with 200uL of each dilution according to the following layout.\n    * This should be in increasing concentration, so 1D refers to the least concentrated dilution and 6D is the most concentrated.\n    * Remaining wells should be filled with the appropriate buffer. \n    * If running an octet assay on more than one protein, the samples should be separated by a row of buffer.\n    * Our concentration ranges have been from 10mM to 32nM for our experiments.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/4/4b/T--Washington--Octet2.png,Octet 2,margin:auto,width:70%,boxShadow:5px 5px 10px gray,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "5. Program how the assay will run on the computer, making sure to define the correct plate layout, biosensors, and steps.\n    * You will need to run two assays - one for the nanobody and one for the protein; you should either set up both assays on the computer beforehand or set up the next one as the first one is running.\n1. Place the sensor tray and nanobody plate into the Octet machine, making sure that well A1 is oriented to the top right corner. Close the lid and let sit for 10 minutes.\n    * Wait for 10 minutes to allow the biosensors and assay plate to equilibrate to a stable temperature.\n1. Run the nanobody loading assay\n    * The first assay will be used to load the biotinylated nanobody to the sensor. This uses the first plate with the nanobody. A control sensor is used that is not immersed in the nanobody. Estimated time is 37 minutes.\n1. When the first assay is finished, replace the nanobody plate with the small molecule plate. Run the small molecule binding assay.\n    * The second assay immersed the sensor-bound nanobody into increasing concentrations of small molecule. For each concentration, there is an association, disassociation, and baseline step. This second assay typically takes 2 hours.\n1. When the assay completes, remove both the sensor tray and assay plate from the Octet. Dispose of the used biosensors in the waste drawer.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nproteinpurification\nProtein Purification",
                "type": "SPECIAL"
            },
            {
                "data": "# Protein Expression, Purification, and Biotinylation:\n\n## Expression and Lysis\n\nWe adapted a protocol from _ Pardon et al. 2014 _ . \n1. Inoculate wk6 starter culture in LB supplemented with 1mM Mgl2 and 0.5% glucose. Incubate overnight at 37°C 170 rpm. \n1. Inoculate 1-2L culture with ~400uL of the starter culture. The media was TB supplemented with 1mM MgCl2 and 0.1% glucose. Grow until OD 0.7 and induce with 1mM IPTG. Grow overnight at 28°C at 170 rpm\n    * The low percentage of glucose is important in order for the lac operon to work.\n1. Pellet the cells via centrifugation at 9000g for 15 minutes. \n1. Resuspend in 15mL TES buffer per liter of culture. Incubate on ice in orbital shaker for 1 hour. Then incubate in 30mL TES/4 for 45 minutes.\n1. Centrifuge at 10,000g for 30 minutes at 4°C. Collect supernatant, which is the clarified lysate. \n\n## Notes:\n\nTES Buffer: \n* 1L solution pH 8\n* 22.4g Tris\n* 0.19g EDTA\n* 171.15g sucrose\n* 1L ddH20\n\nTES/4: \n* Dilute TES buffer 4 fold\n\n",
                "type": "MARKDOWN"
            },
            {
                "data": "## Overview of Protein Purification and Biotinylating Procedures:\n\nWe used a nickel-resin based purification protocol with our his-tagged nanobodies. Specifically, used FPLC to wash and elute our nanobody once it is loaded into a Ni-resin column. After isolating our nanobody, we performed a desalting procedure to replace the imidazole buffer from purification. By running it through a desalting column, we can isolate our protein in PBS 5% glycerol buffer without imidazole. Then, we biotinylated the nanobodies using BirA, which is possible because our nanobodies have an Avi-Tag. Finally, we desalted our nanobodies again to isolate them from the substrates in the biotination reaction. In the end, we isolated our nanobodies in 1X PBS with 5% glycerol so they can be used for subsequent assays and procedures. ",
                "type": "MARKDOWN"
            },
            {
                "data": "## Specific Protocol Directions:\n\n### Purification\n\nWe will performed nickel-resin based purification protocol with our his-tagged nanobodies. Specifically, we used FPLC to wash and elute our protein from a lysate loaded into a ni-resin column. \n\n1. Running Lysate into column:\n    * Automated pump to load onto column in 556 far right corner. Pump lysate through into column, will take about 45mins. Once finished can remove column and bring to FPLC machine\n1. FPLC Elution:\n    * Wash the pumps for a few minutes to replace buffer in wiring, then add nickel column.\n    * First wash with wash buffer (sans imidazole) for about 8 minutes. This contains low imidazole concentration, 20mM. Flow rate can be 1mL/min. UV spectra over time will first have a spike, then should be constant.\n    * Add gradient to go to 100% buffer B over 8 minutes. The UV will increase at a constant rate due to imidazole. The imidazole concentration in the elution buffer is 250mM. \n        * Once the slope increases, this indicates the protein is being eluted. This will probably occur somewhere between 30-70% elution buffer, it has varied between experiments.\n        * Collect by executing “Fraction900” 5mL\n            * To stop collection early, change flow rate to 0mL\n        * Make sure the falcon tube is oriented correctly to collect the elution.\n    * Cleaning column:\n        * Let flow at 100% imidazole for a few minutes, then decrease to 0% imidazole. Let wash for 5-10 minutes to remove all imidazole. \n",
                "type": "MARKDOWN"
            },
            {
                "data": "### Desalting:\n\nDesalting was performed using an FPLC machine to quickly replace the elution buffer with 1X PBS and 5% glycerol.\n\n1. Preparation:\n    * Rinse off desalting injection column with milliQ water\n    * Adjust capacity to volume of elution of protein (ex: 5mL) and pour in. \n    * Screw in cap securely\n    * Add milliQ water to other side and screw in caps\n1. Secure injection column and desalting column with correct wiring orientation.\n1. Initiation\n    * Change flow-pump to “on”\n        * Adjust flow-pump to 2 mL/min, pressure should be no more than ~0.5 mAU\n        * This pumps water above the injection column and pushes the sample out.\n1. Once the sample is completely dispensed, change flow-pump back to “load”\n    * Important to do! Otherwise pressure in injection tube might break apparatus\n1. Watch UV for spike. First spike will be the protein, so collect that.\n    * Same collection method: “Frac900” execution, approximately same volume as elution volume\n1. Clean up:\n    * Let buffer continue washing to let imidazole flow out column. You can stop or do next protein once UV peak shows imidazole went through. \n1. Closing program:\n    * Flow-rate to 0mL\n    * Hit “End”\n    * Can turn off machine\n",
                "type": "MARKDOWN"
            },
            {
                "data": "\n## Biotinylation:\n\nWe used BirA enzyme to biotinylate our nanobodies which contain an Avi-tag. This is essential future experiments using these proteins because it allows us to bind them to  streptavidin-coated sensors for kinetic testing, and agarose beads for when we biopan for our second nanobody dimer binder.\n\nThis is similar to a DNA restriction digest because an enzyme catalyzes the reaction. You mix the following in some manner:\n\n1. Desalted nanobody\n1. BirA MixA, and BirA MixB  - the reaction buffers that also contain biotin\n1. BirA - The enzyme\n\nHere is a typical reaction recipe:\n\n1. 4mL of desalted nanobody \n1. 0.5 mL of BirA mixA\n1. 0.5 mL of BirA mixB\n1. 3uL BirA enzyme\n\nIncubation: Let incubate for one hour away from light at room temperature.\n\n### Desalting: \nPerform desalting of biotinylated protein identical to the previous method. The purpose of this is to isolate the protein in a buffer without the reagents from the biotinylation reaction (ATP, biotin, and other buffer components). \n\n## Citations\n\nPardon, E. et al. A general protocol for the generation of Nanobodies for structural biology. _Nature Protocols_ **9**, 674 (2014).\n    ",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ngeneral\nGeneral Protocols",
                "type": "SPECIAL"
            },
            {
                "data": "# General Protocols\n\n## YPD Media Recipe\n\nReagents needed for 1 L YPD Media:\n* 20 g Bacto peptone\n* 10 g Yeast extract\n* 50 mL sterile 40% glucose\n* 24 g Bacto agar (for agar plates only)\n\nProcedure (Liquid Media):\n\n1. Combine 20 g Bacto peptone and 10 g yeast extract in an autoclavable flask.\n1. Add 950 mL deionized H2O.\n1. Autoclave the mixture.\n1. Add 50 mL sterile 40% glucose and mix.\n1. Let cool before use.\n\nProcedure (Agar Plates):\n\n1. Combine 20 g Bacto peptone, 10 g yeast extract, and 24 g Bacto agar in an autoclavable flask.\n1. Add 950 mL deionized H2O.\n1. Autoclave the mixture.\n1. While stirring the autoclaved mixture on a magnetic stir plate, add 50 mL sterile 40% glucose.\n1. Pour media into plates while still warm.\n1. Allow mixture to cool and solidify.\n\n[Link](http://cshprotocols.cshlp.org/content/2010/9/pdb.rec12315.full)",
                "type": "MARKDOWN"
            },
            {
                "data": "## Epoch Miniprerp\n\nThis protocol should take around 45-75 minutes.\n\n1. From 2-6mL cultures grown 12-22 hrs in LB\n1. Pellet the cells by centrifuging for 1-2 min at 3500 rpm and decant off supernatant. Repeat this step twice.\n1. Remove the rest of the supernatant by pipet.\n1. Resuspend the pellet in 200uL of MX1 buffer by gently pipetting up and down or vortexing.\n1. Add 250 uL MX2 buffer and gently mix by inverting 4-5 times. Incubate for 5 minutes   00:05:00  . \n    * This step lyses the cells, thus it is important to not vortex as this could cause genomic DNA to contaminate the sample. \n1. _If the culture was centrifuged in falcon tubes transfer to a 1.5 mL eppendorf tube at this point._ \n1. Add 350 uL MX3 buffer to neutralize the lysate and gently mix the solution immediately.\n    * You should see a white precipitate form.\n1. Centrifuge for 5-10 (7.5*) minutes at 13000 rpm. Meanwhile set up and label GenCatch columns into collection tubes.\n1. Carefully transfer the supernatant to the column.\n1. Centrifuge 30-60 seconds at 5000 rpm. Discard flow-through.\n1. Wash the column once with 500 uL of WN buffer and centrifuge for 60 seconds at 9000 rpm. Discard flow-through.\n1. Wash the column once with 700 uL of WS buffer and centrifuge for 30 seconds at 9000 rpm. Discard flow-through.\n1. Centrifuge for 2 additional minutes at 13000 rpm. Discard flow-through.\n    * This removes additional ethanol\n1. Centrifuge for 1 additional minute at 13000 rpm for better results.\n1. Place the column in a new 1.5 mL eppendorf tube. Add 40 uL of Elution buffer (EB) directly onto the center of the membrane.\n    * The amount of EB used should vary based on your expected yield; higher yields use more EB to have more solution at a high concentration, lower yields use less EB to have a higher concentration at a lower volume.\n    * The EB should be directly placed on the membrane of the column (filter) in order to get good yields.\n1. Stand the column for 5 minutes at room temperature   00:05:00  .\n1. Centrifuge for 30 seconds at 13000 rpm to elute DNA.\n1. Measure the concentration using a NanoDrop ND-1000 to ascertain the DNA concentration of the sample at absorbance 260nm.\n1. Label the tube with the concentration and plasmid name (e.g. PSB1C3-mRFP), your initials, date, and concentration. For same day or short term store in the 4°C fridge, long term store in the -20°C fridge and log the location in the lab notebook.",
                "type": "MARKDOWN"
            },
            {
                "data": "## TSS Buffer Recipe\n\nReagents needed for 50 mL of TSS Buffer:\n* 5 g PEG 8000\n* 1.5 mL 1M MgCl2 (or 0.30g MgCl2⦁6H2O)\n* 2.5 mL DMSO\n* LB media\n\nProcedure:\n\n1. Combine 5 g PEG 8000, 1.5 mL 1M MgCl2 (or 0.30g MgCl2⦁6H2O), and 2.5 mL DMSO.\n1. Add LB media to 50 mL.\n1. Filter sterilize (0.22 μm filter).\n\nNotes:\n* PEG 3350 can be used instead of PEG 8000. According to the original  CT Chung paper, PEG 3350 produces better efficiency, and other sized PEGs can be used as well albeit with a slight loss in efficiency.\n* pH from original Chung CT paper calls for pH to be acidic (pH=6.5)..., be sure to pH solution before sterilization.\n* If using non-chemically resistant filters (e.g., cellulose nitrate), add DMSO after sterilization. DMSO should be sterile in and of itself, so it may be prudent to add it afterwards if you are unsure about the compatibility of your filters.\n\nStorage:\n* Store at 4°C or -20°C\n\n[Link](https://openwetware.org/wiki/TSS)\n\n## TB Media Recipe\n\nReagents needed for 1 L of TB Media:\n* 24 g Yeast Extract\n* 20 g Tryptone\n* 4 mL Glycerol\n* 100 mL Phosphate buffer (0.17 MKH2PO4, 0.72 M K2HPO4)\n\nProcedure:\n\n1. Add 900 mL of deionized water to 24 g of yeast extract, 20 g of tryptone, and 4 mL of glycerol.\n1. Stir or shake until solutes have dissolved.\n1. Autoclave for at least 20 minutes.\n1. Let cool until you can hold the container (around 60℃).\n1. Add 100 mL of sterile phosphate buffer.\n1. Store at RT.\n\n[Link](http://cshprotocols.cshlp.org/content/2015/9/pdb.rec085894.full?rss=1)\n",
                "type": "MARKDOWN"
            },
            {
                "data": "\n## PCR Q5\n\nWe recommend assembling all reaction components on ice and quickly transferring the reactions to a thermocycler preheated to the denaturation temperature (98°C). All components should be mixed prior to use. Q5 High-Fidelity DNA Polymerase may be diluted in 1X Q5 Reaction Buffer just prior to use in order to reduce pipetting errors.\n\n| Component | 25 ul Reaction | 50 ul Reaction | Final Concentration |\n|-|-|-|-|\n| Water (Milli-Q) | to 25 uL | to 50 uL |  | \n| Template DNA | variable | variable | <1,000 ng (<1 ng if plasmid/viral) |\n| Fwd Primer | 1.25 uL | 2.5 uL | 500 nM |\n| Rev Primer | 1.25 uL | 2.5 uL | 500 nM |\n| Q5 HF 2X Mastermix | 12.5 uL | 25 uL | 1X |\n\nGently mix the reaction. Collect all liquid to the bottom of the tube by a quick spin if necessary. Overlay the sample with mineral oil if using a PCR machine without a heated lid. \n\nTransfer PCR tubes to a PCR machine and begin thermocycling. \n\nThermocycling Conditions for a Routine PCR:\n\n| Step | Temp | Time | \n|-|-|-|\n| Initial Denaturation | 98C | 30 sec |\n| 25-35 Cycles | 98C | 5-10 sec |\n|  | 50-72C** | 10-30 sec |\n|  | 72C  | 20-30 sec/kb** |\n| Final Extensio | 72C | 2 minutes |\n| Hold | 4C  | Infinitely |\n\nOnce protocol set up, hit \"run\", and \"block\" rather than sample. \n",
                "type": "MARKDOWN"
            },
            {
                "data": "\n## LB Media Recipe\n\nReagents needed for 1 L LB Media:\n* 10 g Bacto-tryptone\n* 5 g Yeast extract\n* 10 g NaCl\n* 15 g agar (for LB agar plates)\n\nProcedure for LB Broth:\n\n1. Combine 10 g Bacto-tryptone, 5 g yeast extract, and 10 g NaCl in an autoclavable flask.\n1. Add 800 mL deionized water.\n1. Adjust pH to 7.5 with NaOH.\n1. Add deionized water to 1 L.\n1. Autoclave to sterilize.\n\nProcedure for LB Agar Plates:\n\n1. Combine 10 g Bacto-tryptone, 5 g yeast extract, and 10 g NaCl in an autoclavable flask.\n1. Add 800 mL deionized water.\n1. Adjust pH to 7.5 with NaOH.\n1. Add 15 g agar.\n1. Add deionized water to 1 L.\n1. Sterilize by autoclaving.\n\n[Liquid Media Recipe](http://www.thelabrat.com/protocols/11.shtml)\n[Agar Plates Recipe](http://www.thelabrat.com/protocols/LBAgar.shtml)\n",
                "type": "MARKDOWN"
            },
            {
                "data": "\n\n## Gel Extraction\n\n1. Cut out the DNA fragment of interest with a razor blade from the gel. Minimize the amount of excess gel in the gel slice.\n1. Measure weight of gel slice. (100-350 mg)\n1. Add 3 Volumes GEX Buffer to 1 Volume gel. (Assume 100mg gel = 100 ul)\n1. Incubate at 55C for 5 to 10 minutes until the gel is completely dissolved. \n    * Invert cube every 1-2 minutes during incubation.\n1. Place Gel Extraction Column onto a collection tube. \n1. Load no more than 0.7mL dissolved gel mixture onto the column.\n1. Centrifuge for 30 seconds at 5000 rpm. Discard flow through.\n1. Repeat step 5-7 for the rest of the mixture if the total volume of the dissolved gel slice is > 0.7 mL.\n1. Wash Column once with 0.5 mL WN Buffer by centrifuging for 30 seconds at 5000 rpm. Discard flow through.\n1. Centrifuge column at 12000 rpm for another 3 minutes to remove residual ethanol. Discard flow through.\n1. Repeat 10 but at 1 minute instead of 3. \n1. Place column onto a new 1.5 mL centrifuge tube.\n1. Add 20 uL of Elution Buffer (EB) onto the center of the membrane.\n1. Stand Column for 2 minutes.\n1. Centrifuge for 60 seconds at 12000 rpm to elute DNA.\n1. Measure the concentration using the nanodrop.\n1. Record the concentration and store at -20C.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "## Gel Electrophoresis\n\nTo prepare a 50 mL 1% (by weight) agarose gel:\n\n1. Measure 50 mL TAE buffer = 50 g. \n1. Add 0.5 g agarose (specifically labelled for gel extraction) \n1. Microwave the solution in a 250 mL Erlenmeyer flask covered with a cap for ~45 seconds or until boiling. Watch carefully.\n1. Remove the flask from the microwave using heat-protective mittens. \n1. Swirl and continue briefly microwaving until all the agarose is dissolved.\n1. Let the solution cool until it is safe to handle.\n1. Add 10,000X SYBR in fume hood and swirl the solution. \n    * For 50 mL  (= 50,000 uL) add 5 uL.\n1. Pour into a gel box. \n    * Set up so liquid sets into gel (90° off orientation when running).\n    * Place well template (\"comb\") into the gel. Alter the type of comb (varies by number of lanes or thickness of wells) as necessary.\n1. Once solidified, take out the comb and orient with wells next to black (-) electrode.\n1. Pour TAE buffer to the fill line.\n\nTo prepare the samples:\n\n1. Dilute samples with 6X purple loading dye.\n    * For example, for a 25 uL of sample, add 5 uL of loading dye.\n    * May need to add dye into ladder as well.\n\nTo load samples onto the gel:\n\n1. Add ladder in leftmost lane. \n1. If it doesn't contain loading dye, add desired quantity.\n1. Mix the sample with the pipette a few times. \n1. Dispense slowly into the desired well. \n1. Record the contents of each lane.\n1. Repeat 3-5 for the desired number of samples.\n1. If empty lanes remain, fill them with loading dye and water in the same total volume as the other samples.\n1. Run the Gel. Check for bubbles when the gel is running.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "## 2X YT Media Recipe\n\nReagents needed for 1 Liter of 2X YT media:\n* 16 g Tryptone  \n* 10 g Yeast Extract\n* 5 g NaCL\n\nNOTE: Make sure to use a bottle double the volume as the liquid being autoclaved, otherwise it will boil over!\n\nFor ½ Liter Agar Plates with Carbenicillin:\n\n1. Weigh and add directly to a 1 L container:\n    * 8 g Tryptone\n    * 5 g Yeast extract\n    * 2.5 g Nacl\n    * 7.5 g Agar\n1. Fill to 450 mL with milliQ H2O\n1. Autoclave for at least 20 minutes  \n1. Let cool until you can hold the container (around 60℃)\n1. Add 50 mL 20% Glucose and appropriate antibiotic:\n    * Carbenicillin: 100 ug/mL. For 500mL we will need 500 mL * 100 ug/mL=50000 ug, or 50 mg.\n\nGeneral Recipe for Plates:\n* Fill to 900 mL with ddH2O and adjust to pH 7 using 5M NaOH\n* Add 15 g/L Agar (assume 1 L total)\n* Autoclave to sterilize \n* After cooling to about 50°C add 100 mL 20% glucose and antibiotics to working concentration\n* Pour plates according to plate-making procedure\n\nPlate-Making Procedure:\n* Mix 16 g Tryptone, 10 g Yeast Extract, 5 g NaCl into at least a 1000 mL beaker\n    * Don’t use granulated tryptone\n* Fill to 900 mL with ddH2O, adjust to pH 7 using 5M NaOH\n* Add 3.75 g of Agar to 500 mL bottles (4 bottles with 3.75 g each)\n* Add Tryptone/yeast extract/NaCl/H2O mixture into bottles evenly (225 mL per bottle)\n    * Use grad. cylinder\n* Mix bottles\n* Autoclave\n* Add 25 mL of 20% glucose to each bottle\n* Add appropriate amount of working concentration of antibiotics to each bottle\n* Pour plates\n \nFor media:\n* Fill to 1L with ddH2O and adjust pH to 7 using 5N NaOH\n* Autoclave to sterilize",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Design;LEFTNAME=Design;RIGHT=http://2018.igem.org/Team:Washington/Notebook;RIGHTNAME=Notebook",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/Experiments"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=NOTEBOOK\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nMINPADDINGTOP=120\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "# Notebooks\n\n* [Biobricking](http://2018.igem.org/wiki/images/0/0e/T--Washington--BBnew.pdf)\n* [Biopanning Cholecalciferol](http://2018.igem.org/wiki/images/3/34/T--Washington--Biopanningd3.pdf)\n* [Biopanning Artemisinin](http://2018.igem.org/wiki/images/3/36/T--Washington--biopanningart.pdf)\n* [Cloning](http://2018.igem.org/wiki/images/2/25/T--Washington--c01new.pdf)\n* [Control ELISA](http://2018.igem.org/wiki/images/2/28/T--Washington--chr.pdf)\n* [Interlab](http://2018.igem.org/wiki/images/6/6a/T--Washington--interlab.pdf)\n* [Protein Purification](http://2018.igem.org/wiki/images/b/b2/T--Washington--pnew.pdf)",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Experiments;LEFTNAME=Experiments;RIGHT=http://2018.igem.org/Team:Washington/InterLab;RIGHTNAME=InterLab",
                "type": "SPECIAL"
            }
        ],
        "pageTitle": "/Notebook"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=MODEL\nBACKGROUND=http://2018.igem.org/wiki/images/7/73/T--Washington--LigDockAnim.gif\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nrosetta\nRosetta",
                "type": "SPECIAL"
            },
            {
                "data": "# Rosetta\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/a/af/T--Washington--RosettaLogo.png,Rosetta Logo,margin:auto,width:60%,maxWidth:300px",
                "type": "IMAGE"
            },
            {
                "data": "## Introduction\n\n[Rosetta](https://www.rosettacommons.org/software) is a powerful command-line program suite for computational macromolecular modeling developed by Dr. David Baker’s lab at the University of Washington.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/f/f0/T--Washington--ProtModel.png,Prot Model,margin:auto,width:50%,maxWidth:500px,boxShadow:5px 5px 10px gray",
                "type": "IMAGE"
            },
            {
                "data": "Proteins naturally fold into the lowest energy conformation, and this folded structure gives proteins their function. However, modeling this process on an atom-by-atom basis is NP-hard, meaning that it cannot be easily done without a supercomputer. [[1](#citations)]\n\nRosetta reduces the computational complexity of this problem by dividing the sequence into fragments and substituting fragments of common folding motifs into the protein. It simulates random conformations in space and performs a Monte Carlo algorithm to find the lowest energy conformation. Essentially, random conformations are simulated to reduced the free energy in an iterative process until optimal conformations are obtained. If the change reduced the free energy, Rosetta continues from the new conformation. If the change increased the free energy, the simulation reverts to the old conformation.\n\nFor our project, we are interested in modeling the nanobodies identified by wetlab’s biopanning process in order to better understand their molecular dynamics and increase their\nselectivity.  From this exploration we hope to be able to offer possible optimization of their sequences to produce even stronger binding nanobodies, as well as create detailed images and animations showcasing our project’s complex biochemistry.  We used anchor and dimer nanobodies designed by Dr Gu’s lab to bind to CBD to showcase how our methods can be used to model many other nanobodies found using our wetlab’s biopanning process.\n\n## Homology Modeling\n\nHomology modeling can be used to quickly and accurately predict the structure of a protein solely from its amino acid sequence. Homology modeling uses sequence information from other similar protein structures to see how differences between such known structures and a new protein of interest can aid in creating a novel mapping of this structurally unknown protein. The quality and accuracy of the models produced will depend on how similar the template structures are to the protein of interest. Proteins with high homology, especially those with less gaps in the protein sequence, lead to faster and more accurate results. Rosetta has built in homology modeling support through RosettaCM which we used to model our nanobodies.\n\nRosettaCM is an alternative to a different Rosetta protocol for de novo protein folding.  Instead of starting from a few base structures to build from, such as in homology simulations, de novo protein folding starts from scratch each time and uses a Monte Carlo simulation to predict the structure of your protein’s sequence. Because it has to start from nothing for each stochastic simulation, each model is not as accurate as homology models and thus requires many more models before a clear convergence can be seen. 50,000-100,000 is the recommended amount of predicted structures for the de novo protocol, while homology modeling only needs around 50-200. \n\nWhile de novo works for modeling novel proteins where there might not be many similar structures readily available, in our case many other homologous nanobodies have been studied. Therefore, we chose to use homology modeling as the more precise and faster alternative.\n\n### Methodology\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/6/62/T--Washington--CIDMod.png,PyMOL visualization of our CID complex in ribbon view,boxShadow: 5px 5px 10px gray,margin:auto,width:70%",
                "type": "IMAGE"
            },
            {
                "data": "Figure: PyMOL visualization of our CID complex in ribbon view",
                "type": "MARKDOWN"
            },
            {
                "data": "The first step in homology modeling is to make a FASTA file for the target protein sequence. This is simple and can be done manually. An example is shown below. Change `protein_name` to the name of the target protein. This should match the name of the file (eg `5vnv.fasta`).  \n\n```\n>protein_name\nEVQLQASGGGFVQPGGSLRLSCAASGSTSRQYDMGWFRQAPGKEREFVSAISSNQDQPPY\nADSVKGRFTISRDNSKNTVYLQMNSLRAEDTATYYCAFKQHHANGAYWGQGTQVTVSS\n```\n",
                "type": "MARKDOWN"
            },
            {
                "data": "The next step is to get 2-5 PDBs of similar proteins that will act as the template. This can be achieved using a NCBI website called [BLAST](https://blast.ncbi.nlm.nih.gov/Blast.cgi). Under protein BLAST, enter the target protein’s sequence, select to only show proteins from the Protein Data Bank, and press BLAST. This will query their database of known protein structures and find the ones with high homology.  Select proteins which have the highest match and the fewest gaps in their sequence comparison. Rosetta is less able to add in new amino acids compared to deleting or swapping them out, so it is often best to select sequences which have a lower similarity score but fewer gaps. Depending on the protein you are trying to simulate there might be many eligible structures to choose from but less than 5 templates is ideal for Rosetta.\n\nOnce the template proteins have been selected, their PDBs can be downloaded from the [Protein Data Bank](http://www.rcsb.org) website. However, this downloaded PDB will most likely contain more chains than the ones that were pinged by BLAST. Rosetta comes with a Python script called `clean_pdb.py` to get rid of any unwanted chains. This program will also produce a FASTA file for the template proteins which is needed in the next step.\n\nAnother website, [Clustal Omega](https://www.ebi.ac.uk/Tools/msa/clustalo/), is then used to combine and align all the template and target protein sequence FASTA files so they can be easily compared by Rosetta. Since the file output of Clustal Omega is not a reconized file type in Rosetta, we wrote a python script to convert this clustal file into a Grishin alignment file which Rosetta understands:",
                "type": "MARKDOWN"
            },
            {
                "data": "ACCORDION\n===\nCode\n```\n#!/usr/bin/env python\n\"\"\"\nConvert clustal alignment files to grishin for use in rosetta\nAuthor: Ed van Bruggen <edvb@uw.edu>\n\"\"\"\n\nimport sys\nimport argparse\nfrom argparse import RawTextHelpFormatter\n\nparser = argparse.ArgumentParser(description=__doc__, formatter_class=RawTextHelpFormatter)\nparser.add_argument('--file', type=str, required=True,\n                    help='input clustal alignment file')\nparser.add_argument('--target', metavar='POS', type=int, default=1,\n                    help='position of target protein (default: 1)')\nargs = parser.parse_args()\n\naln = open(args.file)\nproteins = []\n\nfor i, line in enumerate(aln):\n    if i == 0 or line == '\\n' or line[0] == ' ':\n        continue\n    words = line.split()\n    skip = 0\n    for protein in proteins:\n        if protein[0] == words[0]:\n            protein[1] += words[1]\n            skip = 1\n            continue\n    if not skip:\n        proteins.append([words[0], words[1]])\n\ntarget = proteins[args.target - 1]\n\nfor protein in proteins:\n    if protein == target:\n        continue\n    grishin = open(target[0] + \"_\" + protein[0] + \".grishin\", \"w\")\n    grishin.write(\"## %s %s_thread\\n#\\nscores from program: 0\\n0 %s\\n0 %s\\n\" %\n                  (target[0], protein[0], target[1], protein[1]))\n```",
                "type": "SPECIAL"
            },
            {
                "data": "To simplify the work Rosetta has to do for large proteins, fragment files can be utilized. Fragment files contain various motifs of protein folding for many amino acid sections in the given sequence. This allows Rosetta to test out sections of amino acids instead of examining one residue at a time. Fragment files can be generated by the [Robetta](http://www.robetta.org/) server. \n\nThe Grishin alignment files and the template PDBs are used as input to Rosetta’s `partial_thread` executable to generate threaded PDBs which contain a mix of a single template and the target nanobody. An example command is shown below. Each template PDB should have its own threaded PDB.\n\n```\nrosetta/main/source/bin/partial_thread.default.linuxgccrelease \n-in:file:fasta molxa3.fasta -in:file:alignment molxa3_6dbeA.grishin \n-in:file:template_pdb 6dbeA.pdb\n```\n\nThe threaded PDBs, target sequence FASTA file, target protein fragment files, and a RosettaCM XML file are then all given to the `rosetta_scripts` executable to generate the homology models of the target nanobody.  The XML file is a script which informs Rosetta on the specifics of how to run the desired protocol. An example for RosettaCM is displayed below.\n\n```\nrosetta/main/source/bin/rosetta_scripts.default.linuxgccrelease \n-in:file:fasta molxa3.fasta -parser:protocol hybridize.xml \n-default_max_cycles 200 -dualspace\n```\n",
                "type": "MARKDOWN"
            },
            {
                "data": "ACCORDION\n===\nRosettascript\n```\n<ROSETTASCRIPTS>\n\t<TASKOPERATIONS>\n\t</TASKOPERATIONS>\n\t<SCOREFXNS>\n    \t<ScoreFunction name=\"stage1\" weights=\"score3\" symmetric=\"0\">\n        \t<Reweight scoretype=\"atom_pair_constraint\" weight=\"1\"/>\n    \t</ScoreFunction>\n    \t<ScoreFunction name=\"stage2\" weights=\"score4_smooth_cart\" symmetric=\"0\">\n        \t<Reweight scoretype=\"atom_pair_constraint\" weight=\"0.5\"/>\n    \t</ScoreFunction>\n    \t<ScoreFunction name=\"fullatom\" weights=\"ref2015_cart\" symmetric=\"0\">\n        \t<Reweight scoretype=\"atom_pair_constraint\" weight=\"0.5\"/>\n    \t</ScoreFunction>\n\t</SCOREFXNS>\n\t<FILTERS>\n\t</FILTERS>\n\t<MOVERS>\n    \t<Hybridize name=\"hybridize\" stage1_scorefxn=\"stage1\" stage2_scorefxn=\"stage2\" fa_scorefxn=\"fullatom\" batch=\"1\" stage1_increase_cycles=\"1.0\" stage2_increase_cycles=\"1.0\" linmin_only=\"1\">\n        \t<Fragments three_mers=\"a2_3.frags\" nine_mers=\"a2_9.frags\"/>\n        \t<Template pdb=\"1vhpA_thread.pdb\" cst_file=\"AUTO\" weight=\"1.000\" />\n        \t<Template pdb=\"5vnvA_thread.pdb\" cst_file=\"AUTO\" weight=\"1.000\" />\n    \t</Hybridize>\n\t</MOVERS>\n\t<APPLY_TO_POSE>\n\t</APPLY_TO_POSE>\n\t<PROTOCOLS>\n    \t<Add mover=\"hybridize\"/>\n\t</PROTOCOLS>\n</ROSETTASCRIPTS>\n```\n",
                "type": "SPECIAL"
            },
            {
                "data": "It is recommended that 50-200 PDBs are generated, depending on how quickly the resulting models seem to converge. For our nanobodies, we generated around 150-200 PDB for each nanobody sequence. The top 10 lowest energy PDBs had a noticeable convergence in their structure and were therefore used in our further simulations. See the results section for details.",
                "type": "MARKDOWN"
            },
            {
                "data": "ACCORDION\n===\nThe Homology Modeling Workflow\n![The Homology Modeling Workflow](http://2018.igem.org/wiki/images/f/f0/T--Washington--HMWorkflow.png)",
                "type": "SPECIAL"
            },
            {
                "data": "## Genetic Algorithm Ligand Docking\n\nRosetta has a protocol called ligand docking to determine how a ligand will interact with a given protein structure. We used this protocol with the structures of our nanobodies found through homology modeling to see how our nanobodies interact with the respective molecules they are supposed to be binding to. We are able to predict and test where the binding pocket of the nanobody would be through this protocol. For our simulations, we tested the binding of a nanobody that bound to a molecule of CBD.\n\nWe originally ran a standard version of the ligand docking protocol that was in the stable release of Rosetta, but the resulting PDB models were not converging to a likely conformation and there was no obvious chemical interactions between the residues of the anchor nanobody to the ligand. The ligand was sitting too high in the binding pocket of the nanobodies and there was  little convergence in the ligand position as in Figure 1 and 2.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=2\nDESCRIPTION=Figure 1: Side angle of non convergence with traditional ligand docking in ribbon view;PICTURE=http://2018.igem.org/wiki/images/5/5e/T--Washington--LigDock1.png\nDESCRIPTION=Figure 2: Surface view of Figure 1;PICTURE=http://2018.igem.org/wiki/images/6/6e/T--Washington--LigDock2.png",
                "type": "SPECIAL"
            },
            {
                "data": "We re-ran the ligand docking simulation through a newly developed Rosetta protocol found in their recent weekly development release which utilizes a new novel algorithm. This gave us vastly improved results. The new Genetic Algorithm (GA) ligand docking protocol uses genetic evolution to create a pool of models, select the best one, mutate it, and from that mutated model create another pool of models. This continues for a number of iterations. The mutating process allows for diversity in the pool of models to be maintained, improving the protocols ability find low energy structures. Several of these stochastic pools are generated and only the best from each are compared since there is no convergence in a single diverse set.  The old ligand docking uses a Monte Carlo algorithm to move and rotate different conformations of the ligand to find a possible lowest energy position.  This new method dynamically changes both the ligand and the backbone structure throughout the simulation instead of relying on a given confirmation file generated externally.\n\n### Methodology\nThe first step in ligand docking is to get a PDB for the ligand, in our case we used CBD. Next, the ligand PDB should be combined with each of the target PDBs that you want to dock. We used the top 10 best models from our homology modeling to run through ligand docking. The Unix command `cat anchor.pdb ligand.pdb > anchor-ligand.pdb` can be used to concatenate the two PDB files together. This concatenated PDB is then opened in a molecular visualization tool such as PyMOL or Chimera. \n\nThe ligand needs to be manually positioned through this visualization software to the rough area predicted to be the binding pocket. Placing the ligand close to the location of the suspected binding pocket helps Rosetta narrow its search region and quickly produce more accurate results. For our nanobodies, we predicted that the CBD molecule will bind within the 3 varied loop regions. We manually placed our CBD molecule roughly in this area (Figure 3).  This new file with the nanobody and ligand can then be run through GA ligand docking.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/4/4d/T--Washington--LigDock3.png,Ligand docking,boxShadow: 5px 5px 10px gray,margin:auto,width:70%",
                "type": "IMAGE"
            },
            {
                "data": "Figure 3: Example of rough manual ligand placement in homology models to be inputted into Rosetta GA ligand docking",
                "type": "MARKDOWN"
            },
            {
                "data": "**Conformer file**\n\nThe `anchor-ligand.pdb` only contains one conformation of the ligand, therefore, in order to get a more accurate simulation, a conformer file might be necessary to provide Rosetta with various possible positions that the ligand can take. Having various conformations simulates a flexible binding pocket and leads to more accurate models. This step is only needed for the old ligand docking protocol as GA ligand docking will automatically sample various conformations internally and dynamically.\nThe conformer file can be generated with a program called [OpenBabel](http://openbabel.org/wiki/Main_Page). Use the command below to generate a conformer file for a ligand named `ligand_confs.pdb`.:\n\n```\nobabel ligand.pdb -O ligand_confs.pdb --confab --conf 1000 —writeconformer\n```\n\n**Params File**\n\nThe params file contains various information about the molecules chemical and geometric information that will be used to determine its amino acids’ connectivity to other amino acid residues. Rosetta needs a param file of the ligand in order to run its ligand docking protocol. The params file can be generated from a MOL2 file format of the ligand. A PDB file (a more common format) can be converted into a MOL2 format. However, PDB files are usually missing information about the hydrogens of a molecule since in many use cases they are not necessary. In order to convert PDB to MOL2, first use [phenix.reduce](https://www.phenix-online.org/documentation/reference/hydrogens.html) to add hydrogens to the PDB file. Then, use OpenBabal to convert the PDB to MOL2 file type. Finally, Rosetta provides a script to convert the MOL2 file into the params file. An example is shown below:\n\n```\npython rosetta/main/source/scripts/python/apps/public/molfile_to_params.py --keep-names\nligand.mol2 -p ligand -n ligand --conformers-in-one-file ligand_confs.pdb\n```\n\n**Dock XML**\n\nThe `dock.xml` file tells Rosetta Script what precise movers it needs to use. We used the following script to run GA ligand docking:\n\n",
                "type": "MARKDOWN"
            },
            {
                "data": "ACCORDION\n===\nRosettascript\n```\n<ROSETTASCRIPTS>\n  <SCOREFXNS>\n    <ScoreFunction name=\"genpot_soft\" weights=\"beta\">\n      <Reweight scoretype=\"fa_rep\" weight=\"0.2\"/>\n    </ScoreFunction>\n    <ScoreFunction name=\"genpot\" weights=\"beta_cart\">\n      <Reweight scoretype=\"coordinate_constraint\" weight=\"0.1\"/>    \n    </ScoreFunction>\n  </SCOREFXNS>\n\n  <TASKOPERATIONS>\n  </TASKOPERATIONS>\n\n  <FILTERS>\n  </FILTERS>\n\n  <MOVERS>\n    <GALigandDock name=\"dock\" scorefxn=\"genpot_soft\" \n         scorefxn_relax=\"genpot\" grid_step=\"0.25\" hashsize=\"8.0\" \n         subhash=\"3\" final_exact_minimize=\"bbsc1\"\t\t  \n         init_oversample=\"10\" rotprob=\"0.9\" rotEcut=\"100\"\n         padding=\"4.0\" sidechains=\"aniso\" sc_edge_buffer=\"0\" \n         favor_native=\"2\" fastrelax_script=\"relax.script\">      \n     <Stage repeats=\"10\" npool=\"100\" pmut=\"0.2\" smoothing=\"0.375\" rmsdthreshold=\"2\" maxiter=\"50\" pack_cycles=\"100\" ramp_schedule=\"0.1,1.0\"/>  \n    </GALigandDock>\n  </MOVERS>\n\n  <PROTOCOLS>\n    <Add mover=\"dock\"/>\n  </PROTOCOLS>\n  <OUTPUT scorefxn_relax=\"genpot\"/>\n</ROSETTASCRIPTS>\n```\n",
                "type": "SPECIAL"
            },
            {
                "data": "**Running the script**\n\nRosetta scripts should then be run with the following options in order to generate GA ligand docking models: \n\n```\nrosetta/main/source/bin/rosetta_scripts.default.linuxgccrelease\n\t-s input.pdb \n\t-parser:protocol dock.xml\n\t-beta_cart\n\t-extra_res_fa ligand.params \n\t-in::file::load_PDB_components false \n\t-nstruct 1\n```\n\n## Protein to Protein Docking\n\nThe last step of our simulation was to simulate the dimerization of the dimer nanobody to the anchor nanobody and ligand complex. This can be achieved through use of Rosetta’s protein to protein docking protocol. Docking two proteins together is a much harder process than docking a small molecule to a single nanobody due to the larger surface area causing exponentially more interactions between amino acid residues. We expected that the variable loop region of the dimerization nanobody would dock onto the ligand binding pocket of the anchor nanobody as shown in Figure 4.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/0/01/T--Washington--ConformModel.png,CID of dimer nanobody with ligand and anchor nanobody complex,boxShadow: 5px 5px 10px gray,margin:auto,width:70%",
                "type": "IMAGE"
            },
            {
                "data": "Figure 4: CID of dimer nanobody (blue) with the ligand (red) and anchor nanobody (green) complex. This is a conformation close to what we expected, but there was not adequate convergence to this conformation.\n\n### Methodology\n\nTo dock our dimerization nanobody to the ligand-anchor nanobody complex, we used the [RosettaDock](https://www.rosettacommons.org/manuals/archive/rosetta3.4_user_guide/d0/de4/docking_protocol.html) protocol. This protocol uses a similar Monte Carlo algorithm for sampling that the RosettaCM protocol used for homology modeling. This protocol requires a PDB that contains both the dimer nanobody and the ligand-anchor complex. This can be accomplished through concatenating the contents of the complex PDB file found through GA ligand docking, into the dimer nanobody PDB from homology modeling. This concatenation has to be done for the cross product of all the complex PDBs with all the dimerized PDBs since each possible combination of the best models has to be accounted for in our simulations. \n\nThis combined PDB first needs to be pre-packed using the [Docking Prepack](https://www.rosettacommons.org/manuals/archive/rosetta3.4_user_guide/de/d69/docking_prepack_protocol.html) protocol. In order for this protocol to work, the chain IDs of the CBD ligand and the anchor nanobody must be the same while chain ID of the dimerization nanobody should be different. This is because Rosetta will only dock proteins with different chain IDs. We created a script that renames the chain IDs and runs both protocols. Note that file names listed are general and must be renamed to work correctly. The `CBD.params` file generated in ligand docking will also be used here.",
                "type": "MARKDOWN"
            },
            {
                "data": "ACCORDION\n===\nScript\n```\n#!/bin/bash\n\n# Rename chains of the ligand and anchor nanobodies to match\nawk '{if ($1==\"ATOM\"||$1==\"HETATM\") print substr($0,0,21)\"A\"substr($0,23); else print $0}' complex.pdb > complex-relabeled.pdb\n\n# Rename chain of dimerization nanobody to be different. Rosetta docks different chain IDs.\nawk '{if ($1==\"ATOM\"||$1==\"HETATM\") print substr($0,0,21)\"B\"substr($0,23); else print $0}' dimer.pdb > dimer-relabeled.pdb\n\n# Concatenate both chains into one file\ncat complex-relabeled.pdb dimer-relabeled.pdb > combined.pdb\n\n# run pre-packing protocol\nrosetta/main/source/bin/docking_prepack_protocol.default.linuxgccrelease -s combined.pdb -in:file:extra_res_fa CBD.params\n\nrosetta/main/source/bin/docking_protocol.default.linuxgccrelease\n\t-nstruct 1\n\t-ex1\n\t-ex2aro\n```",
                "type": "SPECIAL"
            },
            {
                "data": "## Results\n\nThrough Rosetta’s homology modeling protocol we were successfully able to create accurate structures for several of our CBD anchor and dimer nanobodies without the expensive and time consuming process of crystallography.  With these predicted models we were then able to perform ligand docking with the anchor nanobodies to see how a CBD molecule will dock and bind to our nanobody.  After failing to find adequate convergence through the traditional docking protocol, we decided to use the newly developed GA ligand docking Rosetta protocol. Because this protocol uses a genetic algorithm as well as examining the different possible ligand conformations inside Rosetta, we were able to find a strong convergence of the ligand within a pocket of the anchor nanobodies.\n\nOur homology modeling showcased 3 variable loop regions in our anchor and dimerization nanobodies. A composite image of the top 10 best structures from our simulations of an anchor nanobody illustrates the relatively unchanging body of the protein along side the 3 variable loop regions. This is shown below in figure 5.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/f/f4/T--Washington--AnchorBody.gif,PyMOL animation,boxShadow: 5px 5px 10px gray,margin:auto,width:50%",
                "type": "IMAGE"
            },
            {
                "data": "Figure 5: PyMOL animation of the top homology models for a single anchor nanobody of CBD",
                "type": "MARKDOWN"
            },
            {
                "data": "The sequence in these loop regions are the most varied part between our nanobodies and the proteins found through BLAST since they govern what our proteins bind to. Our model reflects this in the relatively unconverged right and left loops. When there is no ligand present in the nanobodies their variable loops have nothing to bind to and so do not have as rigid of a structure, which is why we do not see as much convergence in two of the varied regions (the left and right loops) compared to the rest of the protein.  The third varied loop sees very good convergence compared to the other two regions since it is still rigid like the rest of the protein without the presence of a ligand.\n\nThe results from the old ligand docking protocol clearly showed the non-convergence between the best (lowest energy) models generated.  However, through GA ligand docking we were able to find a very tight convergence of the ligand into a single pocket as shown in Figure 6 depicting our top 5 models of CBD docking onto an anchor nanobody. This further confirms wetlab’s results of the anchor nanobody binding strongly to the CBD molecule. \n\nAs a control we also preformed homology modeling on a nanobody found through biopanning which did not show as high of a binding affinity to CBD compared to others.  We hope to be able to simulate ligand docking with this nanobody and find little convergence of CBD, confirming wetlab’s hypothesis that this different protein does not tightly bind to our ligand.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/7/73/T--Washington--LigDockAnim.gif,Ligand Docking Animation,boxShadow: 5px 5px 10px gray,margin:auto,width:50%",
                "type": "IMAGE"
            },
            {
                "data": "Figure 6: A surface view of the CDB ligand docking into the anchor nanobody with excellent convergence between the different models.\n\nOur last step of simulating the dimerization of the dimer nanobody to the ligand-anchor complex did not yield sensible results. There was also a lack of convergence between the different models generated from RosettaDock. A common problem was the ligand interfacing with the side of the dimer nanobody instead of the variable loops region as shown in Figure 7. Many low energy models also had the dimer nanobody connecting with a random side of the anchor nanobody, not anywhere near the ligand. We are continuing to refine our process and parameters for RosettaDock including tightening constraints of where the dimer nanobody can bind to the complex. Having more constraints will give Rosetta a smaller sample space, discouraging it from exploring wild non convergent structures.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/d/dd/T--Washington--liganchor.png,Dimer protein to ligand-anchor complex,boxShadow: 5px 5px 10px gray,margin:auto,width:70%",
                "type": "IMAGE"
            },
            {
                "data": "Figure 7: A model of the dimer protein to the ligand-anchor complex showing an unrealistic conformation, but one that was prevalent in our results.\n\n### Future Work\n\nWe hope to introduce more variables into our simulations in the future. Specifically, we want to simulate nanobodies with a mutation in the variable loop regions to see how it may affect ligand docking and the dimerization of the second nanobody. Being able to produce a relatively accurate depiction of binding affinity would help wetlab eliminate nanobodies that are unlikely to be good candidates to bind to a particular molecule. Mutations in the amino acid sequence can also be introduced and simulated in order to see which amino acids are affecting the binding strength the most. \n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ntellurium\nTellurium",
                "type": "SPECIAL"
            },
            {
                "data": "# Tellurium",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/2/2d/T--Washington--TelluriumLogo.png,Tellurium logo,margin:auto,width:70%,maxWidth:100px",
                "type": "IMAGE"
            },
            {
                "data": "## Introduction\n\n[Tellurium](https://tellurium.readthedocs.io/en/latest/index.html) is an open-source Python environment developed for kinetic mathematical modeling of biological networks, developed by the Sauro lab at the University of Washington. The backend of Tellurium is coded in C++, allowing it to be fast enough to be used for highly complex systems. It can model ODEs, PDEs, and stochastic differential equations. In many ways, Tellurium is our open-source, robust substitute for an expensive multi-paradigm numerical computing system such as MATLAB.\n\nTellurium is most useful for understanding the kinetics of a system, and our team used it to model the chemical networks relevant to our project. These kinetics give us insight into how fast a reaction proceeds and how certain parameters of the model affect the outcome. When applied to a gene network, we gain insight into rate-limiting steps, whether or not a system comes to a steady state, and how the system acts if it is perturbed. This information gives the Wetlab team some insights in the future about what they ought to expect from their experiments, and helped us determine likely sources of error. Furthermore, we would be able to directly compare different Wetlab procedures and assess them on desirable characteristics such as time to completion and resource-use efficiency.\n\nThe classic understanding of the kinetics of a system is that the rate-limiting step controls the rate at which the overall reaction proceeds. If you increase the rate of the rate-limiting step, then you increase the rate of the overall reaction. The rate limiting step has complete \"control\" over the overall reaction rate. However, real systems are rarely this simple, especially when a biological network has feedback loops. Control is typically shared unequally between multiple steps, and it is rarely easy to identify which steps have greater control than others. [[2](#citations)] Tellurium gives us an option for computing which can give us insights for how to efficiently manufacture a molecule of interest or how we can modify the gene network to make a cell produce more or less of a compound.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/8/8d/T--Washington--GenNetwork.png,Flow graph of chemical reaction network,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:800px",
                "type": "IMAGE"
            },
            {
                "data": "Figure 8: An example flow graph for easy visualization of a chemical reaction network.\n\nWe began with a basic model for nanobody dimerization. This model uses antibody kinetic data from [Bionumbers](http://bionumbers.hms.harvard.edu/) and assumes a pre-existing nanobody concentration.\n\n## Kinetic Modeling",
                "type": "MARKDOWN"
            },
            {
                "data": "ACCORDION\n===\nModel code\n```\nmodel feedback()\n  // Reactions:\n  J0: Nan1 + Mol -> Nan1Mol; (K1*Nan1*Mol);\n  J1: Nan1Mol -> Nan1 + Mol; (K_1*Nan1Mol); \n  J2: Nan1Mol + Nan2 -> Nan1MolNan2; (K2*Nan1Mol*Nan2)\n  J3: Nan1MolNan2 -> Nan1Mol + Nan2; (K_2*Nan1MolNan2)\n  J4: Nan1MolNan2 + GeneOff -> GeneOn; (K3*Nan1MolNan2*GeneOff);\n  J5: GeneOn -> Nan1MolNan2 + GeneOff; (K_3*GeneOn);\n \n  // Species initializations:\n  Nan1 = 0.0001692; Mol = 0.0001692/2; Nan2 = 0.0001692; Nan1Mol = 0;\n  Nan1MolNan2 = 0; GeneOff = 5*10^-5; GeneOn = 0;\n \n  // Variable initialization:\n  K1 = 6.1*10^5; K_1 = 8*10^-5; K2 = 3.3*10^5; K_2 = 5.7*10^-8; K3 = 1*10^5; K_3 = 0;\n```",
                "type": "SPECIAL"
            },
            {
                "data": "http://2018.igem.org/wiki/images/1/15/T--Washington--RegNetwork.png,Simulation of first constructed model for the CID nanobody system,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "Figure 9: The simulation of our first constructed model for the CID nanobody system showing concentration of the various molecules involved over time.\n\nThe benefit of this simple model was that it allowed us to look more closely at the individual interactions and their response to perturbations. Using parameter sweeping, we could step over a range of values for each parameter and inspect how that given change altered the overall output: the amount of our target gene activated. We see that K3, the parameter associated to the binding of the transcription factor (the nanobody dimer) to our gene, and K2, the parameter associated to dimerization, are the most sensitive to alterations, while K1, the parameter associated to the first/anchor nanobody binding to the target molecule, and the associated reverse reactions (K_1, K_2, and K_3) are less so. This told us that these two steps were the ones most prone to create experimental error in Wetlab, and that a strong dimerization is more important than a strong connection between the anchor and target molecule. As such, when panning for possible nanobodies and running our Rosetta docking simulations, we prioritized a strong dimerization over a strong anchor-binding.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/2/2b/T--Washington--ParamSweep.png,Parameter sweep,boxShadow: 5px 5px 10px gray,margin:auto,width:90%,maxWidth:1200px",
                "type": "IMAGE"
            },
            {
                "data": "Figure 10: The parameter sweep, where each subplot contains numerous simulations varying the parameter of interest. Wider distributions show that some parameters are more susceptible to uncertainty than others.\n\nWe expanded upon this basic model by introducing steps for the transcription and translation of the nanobodies, as was the case in our Wetlab experiments. Additionally, we added in the separate compartments involved in the process. This added in another constraint to the system by forcing the model to account for diffusion rates. \nFor this project, we used this model to help approximate the timespan over which our reactions occur, but in the future, we would like to use this model to perform more in-depth analysis of our system.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "ACCORDION\n===\nAdvanced Model\n```\nantimonyString = (\"\"\"    \n    J0: $AncDNA -> AncRNANuc ; a_rna * AncDNA\n    J1: $DimDNA -> DimRNANuc ; a_rna * DimDNA\n    # transcription\n    # units of (mRNA copies)/(sec)\n    J3: AncRNANuc -> AncRNACyt ; diffusion_rna * AncRNANuc - diffusion_rna * AncRNACyt   \n    J2: DimRNANuc -> DimRNACyt ; diffusion_rna * DimRNANuc - diffusion_rna * DimRNACyt\n    # mRNA transport out of the nucleus into the cytoplasm\n    # units of (mRNA copies)/(sec)\n    \n    J4: AncRNACyt -> ; d_rna * AncRNACyt\n    J5: DimRNACyt -> ; d_rna * DimRNACyt\n    J6: AncRNANuc -> ; d_rna * AncRNANuc\n    J7: DimRNANuc -> ; d_rna * DimRNANuc\n    # mRNA decay\n    # units of 1/(sec) * (mRNA copies) = (mRNA copies)/(sec)\n    J8: -> AncBinder ; a_nb * AncRNACyt\n    J9: -> DimBinder ; a_nb * DimRNACyt\n    # translation\n    # units of (protein copies)/(sec * mRNA copies) * (mRNA copies) = (protein copies / sec)\n        \n    J10: AncBinder -> ; d_nb * AncBinder\n    J11: DimBinder -> ; d_nb * DimBinder\n    J12: DimerCyt -> ; d_nb * DimerCyt\n    J13: DimerNuc -> ; d_nb * DimerNuc\n    # protein decay\n    # units of (1 / sec) * (protein copies) = (protein copies / sec)\n    \n    J14: MoleculeMedium -> MoleculeCyt ; (MoleculeMedium - MoleculeCyt) * diffusion_mol\n    \n    J29: MoleculeCyt + AncBinder -> Complex ;  k_on_anchor_binder * MoleculeCyt * AncBinder -  k_off_anchor_binder * Complex\n    # the anchor binder binds to molecule of interest to form a complex.\n    # nanobody complexes may dissociate over time\n    # units for forward reaction: (1 / (mols / liter) * sec) / (copies / mol)  / liters * copies * copies = copies / sec\n    # units for backwards reaction: (1 / sec) * copies = copies / sec\n    J15: Complex + DimBinder -> DimerCyt ; k_on_dimerization_binder * DimBinder * Complex - k_off_dimerization_binder * DimerCyt\n    # dimerization binder binds to complex to form dimers       \n    # dimers may dissociate, but much less often than complexes\n    # units for forward reaction: (1 / (mols / liter) * sec) / (copies / mol)  / liters * copies * copies = copies / sec\n    # units for backwards reaction: (1 / sec) * copies = copies / sec\n    \n    J16: DimerCyt -> DimerNuc; diffusion_nb * DimerCyt \n    J17: DimerNuc -> DimerCyt; diffusion_nb * DimerNuc\n    # dimer must be transported into the cell to act as a transcription factor\n    \n    J18: DimerNuc + GeneOff -> GeneOn; k_on_transcription_factor * DimerNuc * GeneOff - k_off_transcription_factor * GeneOn\n    # dimer acts as transcription factor for a gene\n    # units: (copies) / (copies)\n    \n    J19: -> RepRNANuc ; a_rna * GeneOn\n    J20: RepRNANuc -> RepRNACyt ; diffusion_rna * RepRNANuc - diffusion_rna * RepRNACyt\n    J22: RepRNANuc -> ; d_rna * RepRNANuc\n    J23: RepRNACyt -> ; d_rna * RepRNACyt\n    J24: -> Rep ; a_nb * RepRNACyt\n    J25: Rep -> ; d_nb * Rep\n    # the activated gene transcribes a reporter\n    \n    J26: GeneOn -> GeneOff ; d_nb * GeneOn\n    # The dimer can decay even while on the gene itself\n    \n    # *****************************************************************************************************************************\n    # Parameters\n    \n    AvoNum = 6.02 * 10^23;\n    \n    TotalCellVol = 30.3 * 10^(-6);\n    NucleusVol = 4.3 * 10^(-6);\n    CytoplasmVol = TotalCellVol - NucleusVol;\n    # all volumes given in units of L, \n    # volumes from http://bionumbers.hms.harvard.edu/bionumber.aspx?id=106557&ver=1&trm=yeast%20cytoplasm%20volume&org=\n    \n    scalingFactor = 1;\n    # since all our rates/rate constants are in seconds, we can scale time by multiplying each time-dependent parameter by a scaling factor\n    # this particular value scales the parameters for time units of hours\n    \n    a_rna = (0.002) * scalingFactor;\n    # median transcription rate = 0.12 mRNA molecules/min = 0.002 mRNA molecules/sec\n    # median transcription rate from http://bionumbers.hms.harvard.edu/bionumber.aspx?id=106766&ver=3&trm=transcription%20rate%20yeast&org=\n    # KEY ASSUMPTION: the rate of transcription of our nanobody gene is constant. \n    # in reality, it may not be safe to assume that our molecule is transcribed by the median transcription rate\n    \n    d_rna = 5.6 * 10^(-4) * scalingFactor;        \n    # 5.6 * 10 ^ -4 = mRNA decay rate constant in units of sec^-1\n    # mRNA decay constant found from http://bionumbers.hms.harvard.edu/bionumber.aspx?id=105510&ver=5&trm=mrna%20s.%20cerevisiae&org=\n    \n    a_nb = (0.0185) * scalingFactor;\n    # yeast has no rough ER, so translation occurs in the cytoplasm\n    # median time for translation initiation = 4.0 * 10^2 s * mRNA / protein\n    # median elongation rate = 9.5 aa/s\n    # nanobody average amino acids = 130 aa\n    # time for elongation = (130 aa / protein)/(9.5 aa/s) = 14 sec / protein\n    # total time for 1 mRNA transcript = 14 sec / protein + 40 sec = 54 sec\n    # rate at which mRNA is transcribed = 1 protein/(54 sec * 1 mRNA) / ~ 0.0185 protein/(sec mRNA)\n    # it is notable that translation initiation rate can vary between mRNA by orders of magnitude\n    # all data from https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3694300/\n    d_nb = 2.6 * 10^(-4) * scalingFactor;\n    # which shows that the median half-life of a protein in a budding yeast cell is 43 minutes\n    # median rate constant of degradation of proteins in a yeast cell = 2.6e-4 1/sec\n    # data from http://www.pnas.org/content/103/35/13004 (doi: https://doi.org/10.1073/pnas.0605420103) https://www.nature.com/articles/nature10098,\n    \n    K_d_anchor_binder = 20 * 10^-6 * scalingFactor;\n    k_on_anchor_binder = 4.0 * 10^5 * scalingFactor;\n    k_off_anchor_binder = K_d_anchor_binder * k_on_anchor_binder * scalingFactor;\n    # k_on of antibody-binding to cytochrome C = (4.0 +- 0.3) * 10^5 1/(M * sec)\n    # From gu's data, K_d of anchor binder binding = 20 * 10^-6, units of M\n    # K_d = k_off / k_on, therefore k_off = K_d * k_on\n    # 4.0 * 10^5 1/(M * sec) * (20 * 10^-6 M) = 80 * 10^-1 (sec^-1)\n    # this is one of the binding affinities that we will do a parameter sweep to learn more about\n    \n    K_d_dimerization_binder = 1 * 10^-7 * scalingFactor;\n    k_on_dimerization_binder = 4.0 * 10^5 * scalingFactor;\n    k_off_dimerization_binder = K_d_dimerization_binder * k_on_dimerization_binder * scalingFactor;\n    # k_on of antibody-binding to cytochrome C = (4.0 +- 0.3) * 10^5, units of 1/(M * sec)\n    # from Gu's data, K_d of dimerization binder binding = 100 * 10^-9, units of M\n    # K_d = k_off / k_on, therefore k_off = K_d * k_on\n    # 4.0 * 10^5 1/(M * sec) * (100 * 10^-6 M) = 400 * 10^-1 (sec^-1)\n    # this is one of the binding affinities that we will do a parameter sweep to learn more about\n        \n    k_on_transcription_factor = 1.0 * 10^4 * scalingFactor;\n    k_off_transcription_factor = 1.11 * 10^-3 * scalingFactor;\n    # k_on of Egr1 DNA binding domain =  1.0 * 10^9, units of 1/(sec * M)\n    # k_off of EGr1 DNA binding domain = 1.11 * 10^-3, units of 1/sec\n    # data from http://bionumbers.hms.harvard.edu/bionumber.aspx?s=n&v=5&id=104597\n    \n    diffusion_rna = 1.0 * 10^-1;     \n    diffusion_nb = 0.3; \n    diffusion_mol = 1.8 * 10^-2\n    \n    # *****************************************************************************************************************************************\n    # Initial values\n    # These are all in copies\n    AncDNA = 1; \n    DimDNA = 1;\n    Mol = 0;\n    GeneOff = 1;\n    MoleculeAdded = 0;\n    \n    # We don't strictly need to initialize all these additional variables, but doing so supresses errors when using gillespie for stochastic simulations\n    AncRNANuc = 0;\n    AncRNACyt = 0;\n    DimRNANuc = 0;\n    DimRNACyt = 0;\n    AncBinder = 0;\n    DimBinder = 0;\n    Complex = 0;\n    DimerCyt = 0;\n    DimerNuc = 0;\n    GeneOn = 0;\n    RepRNANuc = 0;\n    RepRNACyt = 0;\n    Rep = 0;    \n    MoleculeCyt = 0;\n    MoleculeMedium = 0;\n    \n    # this makes it so that the molecule is added at the appropriate time    \n    at time >= 5 * 60 * 60: MoleculeMedium = MoleculeAdded;\n    \n    \n\"\"\");\n```",
                "type": "SPECIAL"
            },
            {
                "data": "## Logic Gates\n\nThrough simulations, we explored some examples of how a CID nanobody system can be used to construct digital logic gates. We came up with one design for each basic gate (NOT, AND/NAND, OR/NOR). The basis of the CID nanobody gates is a biosensor where for each binding pair one nanobody is attached to a DNA binding domain, and the other nanobody is attached to a promoter. This anchoring of the promoter causes the upstream gene to be transcribed much more often. Transcription rarely happens when the promoter is not anchored.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/a/a2/T--Washington--LogicGateNOT.jpg,inverter,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "In this example the CID complex promotes the transcription of a repressor to make an inverter.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/a/aa/T--Washington--LogicGateAND.jpg,Logic gate and,boxShadow: 5px 5px 10px gray,margin:auto,width:80%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "For the AND/NAND gate, the first CID complex promotes transcription of the first nanobody for a second CID complex. This second CID complex then promotes transcription of a reporter or repressor.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/c/c5/T--Washington--LogicGateOR.jpg,OR/NOR gate,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "For the OR/NOR gate, both CID complexes promote transcription of the same reporter or the same repressor.\n\nWe also did some basic modelling on the AND and OR gates to get an idea of their behaviour. These were simple extensions of our basic model.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/9/94/T--Washington--ANDGateSimulation.jpg,And gates simulation,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "AND gate simulation. This shows the desired behaviour, but the timescale needs to be reconsidered in the future.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/2/2b/T--Washington--ORGateSimulation.jpg,or gate simulation,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "OR gate simulation. This also shows the desired behaviour and has the same timescale issue.\n\nFuture steps to take would be to use experimental kinetic data to create a more accurate model, and to compare that to similar models for existing implementations of digital logic gates. This would help us understand the viability of implementing logic functions using a CID nanobody system, and give us insight on what needs to be improved to make it comparably or more efficient.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nevents\nEvents",
                "type": "SPECIAL"
            },
            {
                "data": "# Events\n\nWe participated in a weekly student run class before the iGEM season began to learn about mathematical biology. In this class we became familiar with Tellurium and Rosetta, which would serve as the centerpieces of our modelling work done during the summer.  At the end of the quarter we made presentations about our preliminary findings.\n\nWe hosted two hackathon events to promote unity, share knowledge, and build teamwork for our modeling team. The first one was titled SSH, or “Simulations Saturday Hangout.” At this twelve-hour event we taught each other about various programming languages—including C++, Python, and LaTeX—did team building exercises, and had an ice-cream social. The second event “Simulations Saturday Hangout On A Tuesday,” or SSHOAT, had a similar itinerary—this time seven hours in length and including presentations on advanced Python programming and Vim editing.\n\nWe also taught about computational biology and the tools we used over the summer (Tellurium & Rosetta) during a modelling workshop at the Pacific Northwest iGEM meetup. In this workshop we introduced members from other iGEM teams to the basics of mathematical modeling, including basic overviews of ODEs and Monte Carlo simulations.  We then showed them how to create kinetic models of simple chemical reactions in Tellurium. Our hope was to inspire them to use the power of modeling in their future projects.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/6/61/T--Washington--MeetupSimWorkshop.jpg,PNW Meetup Simulations Workshop,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:800px",
                "type": "IMAGE"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncitations\nCitations",
                "type": "SPECIAL"
            },
            {
                "data": "# Citations\n\n1. Pierce, N. a & Winfree, E. Protein design is NP-hard. Protein Eng. 15, 779–782 (2002).\n2. Pages 142–144 in Sauro, H. M. Systems Biology: An Introduction to Metabolic Control Analysis. (Ambrosius Publishing, 2018).\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/InterLab;LEFTNAME=InterLab;RIGHT=http://2018.igem.org/Team:Washington/Results;RIGHTNAME=Results",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/Model"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=RESULTS\nBACKGROUND=http://2018.igem.org/wiki/images/b/bb/T--Washington--DNA_Gel_figure.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "# \n\n# ",
                "type": "MARKDOWN"
            },
            {
                "data": "Beginning in June, we performed five sequential rounds of biopanning to identify candidate anchor binders for our chosen target small molecules, cholecalciferol and artemisinin. Each round was a three-day process:\n\nOn the first day of each round, we exposed the phage library to the small molecule that was anchored to streptavidin-coated magnetic beads via a biotin label. For later rounds, we increased the stringency by washing the beads with a higher percentage of tween in the wash buffer and washing additional times. This was intended to isolate a larger proportion of strong binders in the output. After eluting the phages, we infected a TG1 culture and plated them with ampicillin as a selection marker. We counted the colonies the following day to get a sense of enrichment of binders. On the second day, we harvested all the colonies and infected them with helper phages to express the phages. On the final day, we isolated the phages from the cells via centrifugation to collect the supernatant, precipitation in PEG, and then resuspension in phosphate buffer. The overall yield of phages at the end were measured through absorbance at 268 nm on a NanoDrop spectrophotometer ND-1000. High concentrations were observed after each round, indicating successful expression of phages (**Figure 1**). We then repeated the 3-day round with the final phage library.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/3/32/T--Washington--PhageConc.png,Phage Concentrations,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "**Figure 1**: Phage concentrations following expression and isolation at the end of each round of biopanning.\n\nOnce we achieved consistent outputs of about 10^7 phage-infected colonies, we decided to perform single phage ELISA to screen individual phages. Nearly every colony we tested demonstrated strong binding to the small molecule and poor binding to streptavidin-biotin alone, as shown in **Figure 2**. These results indicate that the phages we have screened do successfully bind to the small molecules, and not to the linker that anchors them to the ELISA wells. ",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/9/96/T--Washington--elisa_art_figure2.png,elisa artimisinin figure 1,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "http://2018.igem.org/wiki/images/c/c7/T--Washington--elisa_D3_figure2.png,elisa screening figure 2,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "**Figure 2**: ELISA was performed on single phage colonies from the output of the fifth round of biopanning. There were two conditions tested: binding to streptavidin-biotin, and binding to the small molecule anchored to the ELISA wells with streptavidin-biotin. \n\nWe then performed sequencing on binders that appeared promising. We sequenced phage-infected colonies that had the highest binding to the molecule and worst binding to streptavidin-biotin. One issue we had was that many colonies had identical sequences. We wanted to identify at least six candidates for each molecule during this stage because there was a possibility that some may not express well freely in E. coli  without being displayed on a phage. As a result, we screened more colonies with ELISA and sequenced additional candidates. Eventually, we successfully identified twelve candidates for artemisinin and six candidates for cholecalciferol.\n \nTo prepare for protein expression, we inserted the nanobodies into pADL-23c-Avi via restriction digestion with BglI enzyme followed by ligation. We initially had some difficulty when the undigested vector resulted in false positive transformations. To overcome this, we used PCR amplification of the nanobodies to get higher yields, and used a 10:1 insert:vector ratio. This increased transformation efficiency, which we verified with PCR of the ligations as well as colony PCR. **Figure 3** shows 2 successful ligations on the right with the correct amplicon length of 550 base pairs more prominent, with some possible background of vector without the nanobody inserted. Three colony PCR results indicate correctly assembled plasmids, and these were confirmed with Sanger sequencing. We initially transformed into DH5-alpha E. coli for long term plasmid storage and then into wk6 E. coli for protein expression.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/b/bb/T--Washington--DNA_Gel_figure.png,Gel electrophoresis,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "**Figure 3**: Gel Electrophoresis of ligation and colony PCR reactions. All colony PCR reactions on the left show bands near the 550 base pair amplicon length, which matches what we would expect for a correctly assembled plasmid with a nanobody inserted.  \n\nTo express the nanobodies, we used IPTG to induce transcription. We initially ran the lysates on SDS-PAGE Gels and the nanobodies demonstrated variable levels of expression (**Figure 5**). For candidates with successful expression, we scaled up to 1-2 L cultures for purification. We purified the lysate using a Ni-NTA column. We used a FPLC machine to wash and elute our nanobodies. We measured the output protein via UV Absorbance at 280 nm, and we only collected the fraction of the eluent with our nanobody. We then used a desalting column to isolate our nanobodies in phosphate buffer. **Figure 5** shows one purified nanobody binder for artemisinin with high expression yield and purity.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/f/fe/T--Washington--SDS_PAGE_Gel.png,SDS-PAGE Gel,boxShadow: 5px 5px 10px gray,margin:auto,width:70%,maxWidth:600px",
                "type": "IMAGE"
            },
            {
                "data": "**Figure 5**: SDS-PAGE Gel. All sample lanes aside from the final one are lysates from cultures induced with IPTG. The final lane is of a purified sample for an artemisinin anchor binder, which show a molecular weight of 17kDA, matching the size of our nanobodies. ",
                "type": "MARKDOWN"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Model;LEFTNAME=Model;RIGHT=http://2018.igem.org/Team:Washington/Parts;RIGHTNAME=Parts",
                "type": "SPECIAL"
            }
        ],
        "isContent": false,
        "pageTitle": "/Results"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=PARTS\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nBLUR=3\nMINPADDINGTOP=120",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\noverview\nOverview",
                "type": "SPECIAL"
            },
            {
                "data": "# Overview\n\nThis year, we created a number of biobrick parts that have stemmed from our work with nanobody CID systems and biopanning. The parts that we have created are codon optimized and ready to be cloned into expression vectors, allowing for seamless integration of our foundational CID system into any other project.\n\nThe nanobodies submitted consist of dimerization binding pairs for Cannabidiol (CBD) that were selected by the Gu Lab at the University of Washington, including an anchor nanobody that binds to CBD and dimerization binders that bind to the CBD anchor binder complex. Together, these parts create the scaffold for future CID systems, such as a biosensor or a transcriptional switch. \n\nAdditionally, we submitted the anchor-binding nanobody for Artemisinin, which was identified by our lab after extensive biopanning through a synthetic library. This biobrick was characterized through ELISA, which demonstrated its high binding specificity for the small molecule Artemisinin. We also showed that this nanobody could be expressed well in WK6 _E. Coli_.\n\n| Part Name | Registry Number | Link to part |\n|-|-|-|\n| CBD Nanobody Anchor Binder | BBa_K2682000  | [Link](http://parts.igem.org/Part:BBa_K2682000)\n| CBD Nanobody Dimer Binder 1 | BBa_K2682001 | [Link](http://parts.igem.org/Part:BBa_K2682001)\n| CBD Nanobody Dimer Binder 3 | BBa_K2682002 | [Link](http://parts.igem.org/Part:BBa_K2682002)\n| Artemisinin Anchor Binder | BBa_K2682003 | [Link](http://parts.igem.org/Part:BBa_K2682003)\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncitations\nCitations",
                "type": "SPECIAL"
            },
            {
                "data": "# Citations\n\nYan, J., Li, G., Hu, Y., Ou, W. & Wan, Y. Construction of a synthetic phage-displayed Nanobody library with CDR3 regions randomized by trinucleotide cassettes for diagnostic applications. Journal of Translational Medicine 12, 343 (2014).",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Results;LEFTNAME=Results;RIGHT=http://2018.igem.org/Team:Washington/Hardware;RIGHTNAME=Hardware",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/Parts"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=HUMAN PRACTICES\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=9\nMINTITLEHEIGHT=6\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "# Human Practices - Introduction\n\nWith our theme of “Stronger Together” in mind, our team sought to integrate human practices into nearly every part of our project.  This was made possible by an extremely interdisciplinary team, with interests in not only science, but also business, design, communication, education, and public engagement.  In addition to thinking carefully and creatively about the impact of our project on our world, we actively engaged with stakeholders and the public about our project, and the dialogues we had informed and shaped the direction of our work.  Furthermore, as a team, we firmly believe in giving back to our community and that having a positive presence in our neighborhoods is essential to fostering a climate open to science and innovation. Thus, our work outside of the lab, including our education projects, events for the public, and collaborations with other teams, was extremely important to us.",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/5/57/T--Washington--Gasworks2.jpg;DESCRIPTION=This year, we aimed to engage stakeholders, examine our project’s economic and societal implications, and communicate our work effectively and transparently. Our lab work was largely shaped by our conversations with stakeholders and the public. We spoke with doctors about how vitamin D deficiency affects our local community and reached out to Amyris and other companies for ideas on valuable molecular targets that need detection. By taking a holistic approach to our research, we can make positive differences in multiple areas in our communities.;LINK=http://2018.igem.org/Team:Washington/Integrated_Human_Practices;TITLE=Integrated Human Practices;XPOS=100\nPICTURE=http://2018.igem.org/wiki/images/2/2d/T--Washington--Panel.png;DESCRIPTION=We believe that collaboration between teams is one of the most productive and fun aspects of iGEM because it allows us to hear about ideas and experiences from other teams as well as share our ideas with other excited scientists. This year, we collaborated with iTesla-SoundBio, our local high-school team, on training and InterLab, and hosted the first-ever Pacific Northwest iGEM Meetup for teams in our region. We also worked with teams abroad to translate our outreach booklet and implement our activities in their communities.;LINK=http://2018.igem.org/Team:Washington/Collaborations;XPOS=60;TITLE=Collaborations\nPICTURE=http://2018.igem.org/wiki/images/e/e0/T--Washington--Sadhana1.jpg;DESCRIPTION=Our outreach team’s goal was to increase science literacy, particularly relating to synthetic biology, among younger students and the general public. Our outreach efforts especially targeted underserved communities. We created a 100+ page synthetic biology activity booklet that was translated into multiple languages by other teams to aid in teaching synthetic biology to students around the world. Additionally, we organized many events, including visiting classrooms, teaching kids with autism, tabling at community events, and instructing students in Ahmedabad, India. We also created a dialogue with the general public through “man-on-the-street”-style interviews and a synthetic biology panel event.;LINK=http://2018.igem.org/Team:Washington/Public_Engagement;XPOS=25;TITLE=Education & Engagement\nPICTURE=http://2018.igem.org/wiki/images/thumb/7/73/T--Washington--LumenVisit.jpg/800px-T--Washington--LumenVisit.jpg;DESCRIPTION=Our business team was developed to engage with potential stakeholders, customers, and industry advisors about the feasibility of bringing our new technology to market. We consulted scientists from several well-known institutions to improve our understanding of issues they face and gauge the commercial value of our products. We assessed the needs of these potential customers by identifying small molecules that they have trouble detecting. Our team assimilated information that we gained from interviews and market research into a detailed business plan outlining our strategy for introducing our products to market.;LINK=http://2018.igem.org/Team:Washington/Entrepreneurship;XPOS=60;TITLE=Entrepreneurship\nPICTURE=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png;DESCRIPTION=The Design team’s goal was to help communicate our project more effectively to the outside world and spread the knowledge of synthetic biology and its potential impact. The art and design work we did allowed us to be more conscientious of our message and how to best portray that information for the intended audience. We worked on art for posters and flyers, designed logos for our project and events hosted by our team, and helped design competition deliverables including the figures, poster, presentation, and wiki. We also worked in partnership with the Outreach team to illustrate their synthetic biology activity booklet.;LINK=http://2018.igem.org/Team:Washington/HP_Design;XPOS=25;TITLE=Human Practices Design\nPICTURE=http://2018.igem.org/wiki/images/2/28/T--Washington--Zulipusage.jpg;DESCRIPTION=Because our team has grown so much in the last year and developed so many subteams, the complexity of our organization became too difficult to manage without making significant changes to our leadership structure and team communications. This year, we revamped administrative positions to better manage communication between leadership members and general team members, formalized channels for feedback on team management, and adopted a new communication platform to increase efficiency. Additionally, we formalized wetlab and drylab training programs by developing curriculum and teaching classes that students could receive credit for through our university.;LINK=http://2018.igem.org/Team:Washington/Team_Development;TITLE=Team Development;XPOS=80;YPOS=10",
                "type": "SPECIAL"
            }
        ],
        "pageTitle": "/Human_Practices"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=COLLABORATIONS\nBACKGROUND=http://2018.igem.org/wiki/images/3/34/T--Washington--CollabHeader.jpg\nYPOS=50\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nMINPADDINGTOP=120\nTEXTHEIGHT=9\nMINTITLEHEIGHT=5\nSUBTITLEHEIGHT=7\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\npnwmeetup\nPacific Northwest iGEM Meetup",
                "type": "SPECIAL"
            },
            {
                "data": "# Pacific Northwest iGEM Meetup",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/3/3d/T--Washington--PNWMeetup.png,Pacific Northwest iGEM Meetup,boxShadow:5px 5px 10px gray, margin:auto, width:60%",
                "type": "IMAGE"
            },
            {
                "data": "For the first time ever, the Washington iGEM hosted an iGEM meetup for Pacific Northwest teams on August 18-19. The Tacoma RAINMakers and the iTESLA-SoundBio teams participated in the event and made new connections with their fellow iGEM members. The event included a keynote speaker, a biotechnology industry panel, TEDx style guest talks, a talk given by the North American iGEM ambassadors, workshops, and an outreach event. Teams were also given an opportunity to practice their presentation for Jamboree during a practice presentation session. In addition, teams were able to practice their poster presenting skills during an open poster presentation.\n\nOur meetup booklet can be viewed [here](http://2018.igem.org/wiki/images/3/30/T--Washington--PNWMeetupBooklet.pdf).\n\n## Meet the teams:\n\n* [Tacoma RAINmakers](http://2018.igem.org/Team:Tacoma_RAINmakers)\n\n* [iTESLA-SoundBio](http://2018.igem.org/Team:iTesla-SoundBio)",
                "type": "MARKDOWN"
            },
            {
                "data": "## Keynote Speech",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/7/78/T--Washington--CollabKeynoteSpeech.png,Cindy Wu's keynote speech,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "Keynote speeches can be viewed here:\n* [Keynote Part 1](http://2018.igem.org/wiki/images/9/94/T--Washington--Cindy1.mp4)\n* [Keynote Part 2](http://2018.igem.org/wiki/images/3/3a/T--Washington--Cindy2.mp4)\n\nWe were honored to have Cindy Wu, a Washington iGEM alum and co-founder of [Experiment](https://experiment.com/), a crowdfunding platform for scientific research, as our keynote speaker. Cindy Wu’s keynote focused on the idea of “democratizing science” by opening up avenues of funding through crowdfunding via her startup.",
                "type": "MARKDOWN"
            },
            {
                "data": "## Biotechnology Panel",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/2/2d/T--Washington--Panel.png,Biotechnology panel,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "Panel discussions can be viewed here:\n* [Part 1](http://2018.igem.org/wiki/images/a/a7/T--Washington--indpanel1.mp4)\n* [Part 2](http://2018.igem.org/wiki/images/6/6f/T--Washington--indpanel2.mp4)\n* [Part 3](http://2018.igem.org/wiki/images/c/c3/T--Washington--indpanel3.mp4)\n* [Part 4](http://2018.igem.org/wiki/images/c/c9/T--Washington--indpanel4.mp4)\n\n## Description\n\nThe biotech panel included four leaders in the local startup and DIY Bio community, including three Washington iGEM alumni. They spoke about their experiences in academia, industry, non-profits, and what it was like to start their own endeavors. Some of the questions included:\n* What’s your educational background? Tell us a little bit about who you are, where you came from, how you got the idea to start your own organization or company.\n* What does your company do; what are the main goals?\n* We heard from Cindy about why she decided to start Experiment, but for the others, what motivated you in the beginning?\n* Where do you see your company/organization in 5 years?\n* What inspired you to do what you do? What excites you most about your field of work?  \n* For each of you, what are the biggest challenges you’ve faced? Was there ever a time you wanted to give up?\n* What worries do you have about the future of your field?\n* What fascinates or concerns you most about citizen science?\n\n## Speakers",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=4\nDESCRIPTION=Dr. Ingrid Pultz, Washington iGEM alum, PVP Biologics;PICTURE=http://2018.igem.org/wiki/images/c/c0/T--Washington--Ingrid.png;XPOS=50;YPOS=50\nDESCRIPTION=Dr. David Younger, Washington iGEM alum, A-Alpha Bio;PICTURE=http://2018.igem.org/wiki/images/5/5e/T--Washington--David.png\nDESCRIPTION=Cindy Wu, Washington iGEM alum, Experiment.com;PICTURE=http://2018.igem.org/wiki/images/5/5b/T--Washington--CindyWu.png\nDESCRIPTION=Regina Wu, SoundBio Lab;PICTURE=http://2018.igem.org/wiki/images/4/45/T--Washington--Regina.png",
                "type": "SPECIAL"
            },
            {
                "data": "## Guest Talks",
                "type": "MARKDOWN"
            },
            {
                "data": "### Roya Amini-Naieni\n\nWashington iGEM alum, Harvey Mudd College class of 2021",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/e/ec/T--Washington--RoyaTalk.png,Roya's talk on her experiences in iGEM,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "Roya Amini-Naieni's talk can be viewed here:\n\n[Roya's Talk](http://2018.igem.org/wiki/images/9/94/T--Washington--Roya.mp4)\n\nRoya talked about her experiences in iGEM as a high schooler and her journey to establishing a “biohackerspace” at Harvey Mudd. Her talk focused on the tenacity that one must have to be involved with science, and the fact that it is never too early to start developing an interest in the scientific world.",
                "type": "MARKDOWN"
            },
            {
                "data": "### Dr. David Hirschberg\n\nUniversity of Washington - Tacoma",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/b/b1/T--Washington--Hirschberg.jpg,David Hirschberg's talk,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "Dr. Hirschberg went back to the fundamentals of science and thinking about “nothing.” His talk focused on the impact that science has on the general population, and how we as students and future scientists could shape the future of the scientific world by being more accessible to those without formal training.",
                "type": "MARKDOWN"
            },
            {
                "data": "### Dr. Liangcai Gu\n\nUniversity of Washington - Seattle",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/b/b7/T--Washington--GuTalk.jpg,Dr. Gu's talk,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "Dr. Gu's talk can be viewed here:\n\n[Dr. Gu's talk](http://2018.igem.org/wiki/images/c/cb/T--Washington--Gu.mp4)\n\nDr. Gu talked about his research, specifically on the _in-situ_ DNA Sequencing that his lab has developed and utilizes to increase the efficiency of protein design as part of the Institute of Protein Design at the UW. His work is inspiring, and he showed students the innovation that can be achieved through science and inventive thinking.",
                "type": "MARKDOWN"
            },
            {
                "data": "## After iGEM Ambassadors",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/2/28/T--Washington--AmbassadorTalk.jpg,After iGEM Ambassadors talk,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "The iGEM Ambassadors’ talk can be viewed here:\n\n[iGEM Ambassador Talk Part 1](http://2018.igem.org/wiki/images/1/18/T--Washington--Ambassadors1.mp4)\n\n[iGEM Ambassador Talk Part 2](http://2018.igem.org/wiki/images/6/69/T--Washington--Ambassadors2.mp4)\n\nThe iGEM ambassadors talked about the jamboree and the After iGEM program. They also gave valuable feedback on poster presentations and the practice presentations. Their experiences with iGEM guided attendees in figuring out the ins and outs of Jamboree, and helped the teams prepare more thoroughly for the big competition.\n\n## Workshops\n\n### Simulations",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/5/5f/T--Washington--SimulationsWorkshop.jpg,Simulations workshop,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "A member of our Drylab Simulations team presenting on creating simulations through mathematical modeling. This workshop focused on an aspect of iGEM that many teams we’ve worked with struggle with: understanding the methods behind mathematical modeling and how to go about creating simulations.\n\n### Artistic Design",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/2/28/T--Washington--DesignWorkshop.jpg,Design Workshop,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "The artistic design workshop brainstorms ideas on how to creatively present ideas and concepts. The workshop was focused on making the design process approachable and clear while still emphasizing how different creative minds can collaborate to create something amazing.\n\n### Fundraising",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/4/48/T--Washington--FundraisingWorkshop.jpg,Fundraising Workshop,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "Our fundraising lead/team advisor presenting on fundraising and how to effectively fundraise. The workshop was especially helpful as all the teams at the meetup rely on fundraising as a means to fund their lab work and their involvement in iGEM.",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=2\nPICTURE=http://2018.igem.org/wiki/images/3/3b/T--Washington--Outreach1.jpg;XPOS=50;YPOS=50\nPICTURE=http://2018.igem.org/wiki/images/6/61/T--Washington--Outreach2.jpg;XPOS=50;YPOS=50",
                "type": "SPECIAL"
            },
            {
                "data": "http://2018.igem.org/wiki/images/4/4b/T--Washington--Outreach3.jpg,Outreach 3,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "As a joint outreach event all three teams traveled to Gasworks Park, a public park near the University of Washington, and set up activities for the general public to participate in. We also sent our members around the park to talk with the general public and ask questions about their knowledge of synthetic biology. A more detailed description can be read on the [outreach page](http://2018.igem.org/Team:Washington/Public_Engagement).\n\n## Practice Presentations",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=2\nPICTURE=http://2018.igem.org/wiki/images/5/53/T--Washington--TacomaPresentation.jpg;XPOS=50;YPOS=50\nPICTURE=http://2018.igem.org/wiki/images/2/25/T--Washington--iTeslaPresentation.jpg;XPOS=50;YPOS=50",
                "type": "SPECIAL"
            },
            {
                "data": "http://2018.igem.org/wiki/images/5/55/T--Washington--WashingtonPresentation.jpg,Washington Presentation,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "Each team gave a presentation on their project to the rest of the attendees, including the After iGEM Ambassadors. The presentations were both inspiring and insightful, and each team deeply valued the feedback they received through this session. For our team, it was our presenters’ first time speaking about our project to a large audience and it gave them an opportunity to think quick on their feet as they were asked questions in real time. Overall, this was one of the most helpful parts of the meetup as it allowed students who have never been to the Jamboree to experience a presentation setting.\n\n## Poster Session",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=2\nPICTURE=http://2018.igem.org/wiki/images/7/70/T--Washington--Poster2.jpg;XPOS=50;YPOS=50\nPICTURE=http://2018.igem.org/wiki/images/a/ac/T--Washington--Poster3.jpg;XPOS=50;YPOS=50",
                "type": "SPECIAL"
            },
            {
                "data": "http://2018.igem.org/wiki/images/1/1c/T--Washington--Poster1.jpg,Poster presentation,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "Teams were able to practice their poster presenting skills by presenting to other teams and the After iGEM Ambassadors. They made handmade posters during the meetup and presented the next day. This allowed every member besides the presenters to practice talking about their projects and answering questions in real time. It was especially helpful to experience the poster sessions in a low-stress environment to help newcomers get comfortable with the process.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\noutreachbooklet\nOutreach Booklet",
                "type": "SPECIAL"
            },
            {
                "data": "# Outreach Booklet\n\nThis year, our outreach team created an extensive booklet with activities that can be done with school children to teach them about synthetic biology. As part of our effort to reach multiple communities, we sought collaborations with teams around the world to translate our booklet into different languages so that our booklet could have a global impact. The teams that helped us in the endeavor are: [NUS Singapore-Science](http://2018.igem.org/Team:NUS_Singapore-Sci), [Sorbonne U Paris](http://2018.igem.org/Team:Sorbonne_U_Paris), [Evry Paris-Saclay](http://2018.igem.org/Team:Evry_Paris-Saclay), [Tec CEM](http://2018.igem.org/Team:TecCEM), and [ICT-Mumbai](http://2018.igem.org/Team:ICT-Mumbai). \n\nTheir translations of the booklet are included here:\n* [French (Evry Paris-Saclay)](http://2018.igem.org/File:T--Evry_Paris-Saclay--CollabDocBookletFrench.pdf)\n* [French (Sorbonne U Paris)](http://2018.igem.org/wiki/images/b/bb/T--Washington--Synbio_Activity_Booklet_Part2_French.pdf)\n* [Vietnamese (NUS Singapore-Science)](http://2018.igem.org/wiki/images/b/ba/T--Washington--Synbio_Activity_Booklet_Viet.pdf)\n* [Hindi (ICT-Mumbai)](http://2018.igem.org/wiki/images/d/d2/T--ICT-Mumbai--Washington-translation.pdf)\n* [Spanish (Tec CEM)](http://2018.igem.org/wiki/images/c/ca/T--Washington--Synbio_Activity_Booklet_Spanish.pdf)",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\niteslamentorship\niTESLA Mentorship",
                "type": "SPECIAL"
            },
            {
                "data": "# iTESLA Mentorship",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=2\nPICTURE=http://2018.igem.org/wiki/images/1/10/T--Washington--AngeliTesla.jpg;XPOS=50;YPOS=50\nPICTURE=http://2018.igem.org/wiki/images/1/16/T--Washington--KaraliTesla.jpg;XPOS=50;YPOS=50",
                "type": "SPECIAL"
            },
            {
                "data": "http://2018.igem.org/wiki/images/e/e8/T--Washington--iTesla.jpg,iTesla Mentorship,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "Like last year, we worked with the iTESLA-SoundBio team as a mentor team to help them with their trainings and their project. In the beginning of the summer, members of our wetlab team went to their lab to help train them in basic synthetic biology techniques. These techniques included cloning, PCR, and transformations. Our admin leads, Angel and Andrew, helped them select their presenters by reviewing their applications and critiquing their audition presentations.\n\nWe also helped them with human practices and future project development. As shown above, the first ever Pacific Northwest Meetup allowed for a chance to host a science outreach session for the iTESLA team and gave them a chance to talk to Holly Bowman, an iGEM Ambassador. Holly had worked on a very similar project in her iGEM team, and through our PNW Meetup, the iTESLA team was able to gain important insights into their project. Like Holly, many of our own members gave advice and opinions about iTESLA’s project this year.\n\nAdditionally, we were extensively involved in helping iTESLA complete interlab as well as their follow-up data as they did not have access to their own plate reader. They prepared plates for their calibrations which we then performed readings on, and they provided us with cultures to plate and read. We sent the raw data to their team, and let them know about any issues that we had.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nwikiprogrammingtips\nWiki Programming Tips",
                "type": "SPECIAL"
            },
            {
                "data": "# Wiki Programming Tips\n\nThis year, our wiki developer created a guide with wiki programming tips for iGEM teams new to the wiki-making process. We made this tool available to any team that contacted us for it, and in return, we asked that they give us feedback and critiques on the tutorial so that we can improve it for future use. Our goal with the wiki tips was to make the iGEM competition more accessible to new teams as the wiki is a daunting task for even well-established teams. A link can be found [here](http://students.washington.edu/wkwok16/wiki-tutorial/) for teams that want to use this tutorial in the future. It will be updated as we get more feedback, so don’t hesitate to contact us with your critiques!",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ngeneralcollab\nGeneral Collaborations",
                "type": "SPECIAL"
            },
            {
                "data": "# General Collaborations\n\n## Stanford\n\nWe worked with Stanford by sending one of our drylab members, Ed van Bruggen, down to Stanford University to talk to their team at the Stanford Poster Fair. They talked about each others’ projects and thought of new ideas and ways to expand upon both their and our existing project. One of these ways was by trying to simulate their system using our modeling method, but it unfortunately failed due to the size of the antibody in their system. The failure showed us the constraints of our current model, and is a limitation that we may try to improve upon in the coming years. In addition to this, Stanford was one of the only teams to give us feedback on our wiki tutorial, which was extremely helpful in making it more accessible and approachable to other teams. We hope to continue collaborating with Stanford iGEM in the future.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\notherteamscollaborations\nOther Team's Collaborations",
                "type": "SPECIAL"
            },
            {
                "data": "# Other Team's Collaborations\n\n## TecCEM “Labs Like You”\n\nWe participated in Tec CEM’s “Labs Like You” music video alongside the Tacoma RAINMakers and iTESLA Soundbio during our Pacific Northwest Meetup. The link to the video is [here](https://www.youtube.com/watch?v=R7vdiGLLJZA)\n\nThese are the teams that also collaborated in this worldwide project:\n\n1. iGEM IISER Bhopal (igemiiserb@gmail.com) \n2. IGEM AFCM ( igem.afcm@gmail.com) \n3. IGEM UNESP BRAZIL (igem.unesp.aqa@gmail.com) \n4. IGEM WASHINGTON (uwigem@uw.edu) \n5. IGEM Tust China (tustigem2018@163.com) \n6. iGEM team Bielefeld-CeBiTec (matthias.otto@uni-bielefeld.de) \n7. IISc-Bangalore iGEM Team (iisc.igem2018@gmail.com) \n8. IGEM BRAZIL USP (henriquedambrosioretti@gmail.com) \n9. IGEM DUSSELDORF (igem@hhu.de) \n10. IGEM GRONINGEN (igem2018rug@gmail.com) \n11. IGEM DALHOUSIE (igemdalhousie@gmail.com) \n12. IGEM LEIDEN (igem@science.leidenuniv.nl) \n13. Team UFLORIDA (igem@ufapsa.org) \n14. Tarta TUIT_IGEM (nargiz.k@yahoo.com) \n15. Toulouse INSA UPS (igem.toulouse@gmail.com ) \n16. IGEM MICHIGAN STATE (Michiganstateigem@gmail.com) \n17. Team UCHILE_Biotec (sebastian.farias@ug.uchile.cl) \n18. ECUADOR (bfmosquera1@espe.edu.ec) \n19. IGEM BRAZIL USP EEL (cbsin.eel@gmail.com) \n20. Tec-Guadalajara (team.tec.gdl@gmail.com) \n21. Tec-Chihuahua (igemtecchihuahua@gmail.com \n22. UCSC IGEM (ucsc.igem.18@gmail.com ) \n23. TecCEM (igem.tec.cem@gmail.com) \n24. iTESLA-SoundBio Team \n25. Tacoma RainMakers Team\n\n## Surveys\n\nIn addition to all of our other collaborations, members of our team also assisted other teams in their filling out the following surveys about various topics relevant to their research or iGEM as a whole.\n\n* [iGEM Bielefeld-CeBiTec’s survey on Dual Use and Dual Use Research of Concern](https://t.co/9sTFnuQW7a)\n* [UNL iGEM’s survey on invasive species](https://www.surveymonkey.com/r/TRJKVD8)\n* [Uppsala iGEM’s survey on mental health and burnout in iGEM](https://docs.google.com/forms/d/e/1FAIpQLSeWUVgq_Dm1nZTH6d8_JYZohyt8Gwf_sMTF1MaoWJLEjndQXg/formResponse)\n* [Imperial iGEM’s survey on team leadership, structure, and communication](https://docs.google.com/forms/d/e/1FAIpQLScj_2MJxT28Ta5bpP6KbsO-9dsiG4U4nq9GBq3tIVWi9tWbLw/viewform)\n\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Integrated_Human_Practices;LEFTNAME=Integrated HP;RIGHT=http://2018.igem.org/Team:Washington/Public_Engagement;RIGHTNAME=Education & Engagement",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/Collaborations"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=PUBLIC ENGAGEMENT\nBACKGROUND=http://2018.igem.org/wiki/images/e/e0/T--Washington--Sadhana1.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=8\nMINTITLEHEIGHT=6\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\noverallfocus\nOverall Focus",
                "type": "SPECIAL"
            },
            {
                "data": "# Overall Focus\n\nOur educational outreach efforts were focused on making scientific learning more accessible by targeting underserved groups, including lower income schools and children with disabilities. Seattle, Washington has one of the largest equity gaps in the United States with white students being almost ten times more likely than black students to attend a school with reading test scores in the city’s top 20th percentile. In general, lower income students are about four times as likely to attend low-performing schools [1]. In fact, over 6,000 students in Seattle alone were given low-income housing by the school district, and over 35,000 students were counted as homeless in Washington State [1]. Additionally, as the Special Olympics USA was held at the University of Washington over the summer, we had a greater awareness about the educational opportunities that children with intellectual disabilities often lack.\n\nAfter learning about these inequities, we wrote and illustrated a 100+ page multilingual synthetic biology booklet that is full of illustrations, especially designed for English Language Learners at lower income schools and for children with disabilities. We implemented the lessons from our booklet at school visits, both locally and internationally, specifically targeting lower income schools, which were determined by the percentage of students that are federally eligible for free or reduced lunch. Additionally, we taught a lesson about the central dogma of molecular biology to a summer camp for kids with autism.\n\nFurthermore, we created a dialogue with the general public by interviewing people about their opinions regarding synthetic biology at Gas Works Park, a famous park in Seattle. We also planned a synthetic biology panel event called “Sit Down with Synbio” that initiated a conversation between the general public and synthetic biology experts with approximately 100 people in attendance. The goal of this event was to raise awareness about synthetic biology and its value to the general public by giving people a chance to ask questions.\n\n1. https://www.seattletimes.com/seattle-news/education/pilot-project-to-help-seattle-schools-homeless-families-find-housing/\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SECTION\nevents\nEvents",
                "type": "SPECIAL"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "# Events\n\n## Community Events\n\n### Shoreline STEM Fest\n\nHeld at Shoreline Community College, this festival combines a traditional science fair servicing hundreds of K-12 students in the Shoreline School District with hands-on exhibits and demonstrations presented by university groups, research institutes, and industry professionals. At this fair, we conducted our Lego DNA/Jellybean Peptide Activity to teach kids about the central dogma of molecular biology.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/b/b6/T--Washington--Shoreline3.jpg;XPOS=75;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/d/d6/T--Washington--Shoreline1.jpg;XPOS=75;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/0/05/T--Washington--Shoreline2.jpg",
                "type": "SPECIAL"
            },
            {
                "data": "### Ben Franklin Elementary Math Fest\n\nThis event, presented by Prime Factor Math Circle School, engaged students aged 5-12 in hands-on activities, problem solving, and games about math, computer science, and other STEM disciplines. At this event, we used our Lego DNA/Jellybean Peptide Activity.",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/4/49/T--Washington--MathFestival3.jpg;XPOS=75;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/5/59/T--Washington--MathFestival2.jpg;XPOS=75;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/3/33/T--Washington--MathFestival1.jpg;YPOS=25",
                "type": "SPECIAL"
            },
            {
                "data": "### Introduce a Girl to BioE\n\nDue to the huge gender gap in engineering, this event aimed to introduce girls ages K-12 to the ever-expanding field of bioengineering. At this event, we introduced about 150 girls to the building blocks of life with our Lego DNA/Jellybean Peptide Activity.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/6/6a/T--Washington--IntroduceAGirlToBIOE1.jpg;XPOS=75;YPOS=12\nPICTURE=http://2018.igem.org/wiki/images/a/a1/T--Washington--IntroduceAGirlToBIOE2.jpg;XPOS=15;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/3/3e/T--Washington--IntroduceAGirlToBIOE3.jpg;YPOS=25",
                "type": "SPECIAL"
            },
            {
                "data": "### Gasworks\n\nDuring the Pacific Northwest iGEM Meetup, we conducted an outreach event at Gas Works Park, which is a famous park that was originally the site of a coal gasification plant and features a breathtaking view of the Seattle skyline. As families often spend their evening in the park, we engaged kids with synthetic biology using our Lego DNA/Jellybean Peptide Activity.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/2/21/T--Washington--Gasworks1.jpg;XPOS=75;YPOS=12\nPICTURE=http://2018.igem.org/wiki/images/5/57/T--Washington--Gasworks2.jpg;XPOS=15;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/f/f2/T--Washington--Gasworks3.jpg",
                "type": "SPECIAL"
            },
            {
                "data": "## School Visits\n\n### Elementary\n\nNorthgate Elementary is an underserved school near the University of Washington, where 86% of students receive free or reduced lunch and many students are from minority groups, including 43% Hispanic students and 24% black students. We introduced 4th and 5th grade students to synthetic biology with our Fruit DNA Extraction Activity and Gel Electrophoresis Bunny Activity. The students were excited that they got to do both a hands-on activity and an activity with real-life applications by solving a crime scene!\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/a/a2/T--Washington--Northgate1.jpg;XPOS=75;YPOS=12\nPICTURE=http://2018.igem.org/wiki/images/3/30/T--Washington--Northgate2.jpg;XPOS=15;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/2/2e/T--Washington--Northgate3.jpg;YPOS=25",
                "type": "SPECIAL"
            },
            {
                "data": "### Middle\n\n**International School**\n\nDuring our visit to the International School in Bellevue, Washington, we introduced the students to the building blocks of molecular biology. The students learned about the central dogma of molecular biology through the Lego DNA/Jellybean Peptide Activity and conducted a Fruit DNA Extraction, where they learned about experimental design. Additionally, they learned about our project, including the importance of vitamin D. \n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/7/72/T--Washington--InternationalSchool1.jpg;XPOS=75;YPOS=12\nPICTURE=http://2018.igem.org/wiki/images/c/c3/T--Washington--InternationalSchool2.jpg;XPOS=15;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/d/d7/T--Washington--InternationalSchool3.jpg;YPOS=25",
                "type": "SPECIAL"
            },
            {
                "data": "**Sadhana School in Ahmedabad, India**\n\nTo expand our outreach focus internationally, our Outreach Lead, Ishira, introduced students to synthetic biology at Sadhana School in Ahmedabad, India, which has some underserved students. Ishira taught students in grades 6-8 with the Lego DNA/Jellybean Peptide Activity and gave them a brief overview of the project. This event was interesting, because the students had a hard time understanding Ishira’s American accent. As a result, she taught most of the lesson in the local language, Gujarati, but received amusing questions from students such as what the phrase “kick butt” means in relation to a protein that is essential for fighting pathogens when one is sick. Additionally, instead of using puffed marshmallows as a “glue” to connect the jellybean “amino acids,” Ishira had to make icing, because the puffed marshmallows contain eggs, and Sadhana School is a vegetarian school. Overall, the students had a great time learning about international research and understood the basics of the central dogma of molecular biology!\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/e/e0/T--Washington--Sadhana1.jpg;XPOS=75;YPOS=12\nPICTURE=http://2018.igem.org/wiki/images/a/ab/T--Washington--Sadhana2.jpg;XPOS=15;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/3/39/T--Washington--Sadhana3.jpg;YPOS=25",
                "type": "SPECIAL"
            },
            {
                "data": "### High\n\n**Kent Meridian High School**\n\nKent Meridian High School is an underserved high school, where 60% of students receive free or reduced lunch. During our visit, we introduced students that are in grades 9-12 to synthetic biology with our Solving Global Problems Activity and CRISPR Ethics Activity. Additionally, we gave the students a brief overview of our project, highlighting the importance of vitamin D. \n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/c/c4/T--Washington--KentMeridian1.jpg;XPOS=75;YPOS=12\nPICTURE=http://2018.igem.org/wiki/images/b/b3/T--Washington--KentMeridian2.jpg;XPOS=15;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/4/4e/T--Washington--KentMeridian3.jpg;YPOS=25",
                "type": "SPECIAL"
            },
            {
                "data": "**Rainier Beach High School**\n\nAccording to a Seattle Times article,[1] Rainier Beach High School was once considered the worst high school in Seattle and had a reputation for gangs and lackluster academics. While the graduation rates have improved, almost 70% of students at Rainier Beach High School receive free or reduced lunch and the school has a significant minority enrollment with 58% of students identifying as black. During our visit, we introduced 11th and 12th grade students to synthetic biology through our Solving Global Problems Activity, discussed possible college majors and career options, and gave them an overview of our project.",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/8/87/T--Washington--Rainier1.jpg;XPOS=75;YPOS=12\nPICTURE=http://2018.igem.org/wiki/images/b/bc/T--Washington--Rainier2.jpg;XPOS=15;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/1/1b/T--Washington--Rainier3.jpg;YPOS=25",
                "type": "SPECIAL"
            },
            {
                "data": "### Citations\n\n1. https://www.seattletimes.com/education-lab/stunning-surge-in-graduation-rate-as-rainier-beach-gamble-pays-off",
                "type": "MARKDOWN"
            },
            {
                "data": "## Disability Events\n\n### Adventure Camp for Children with Autism\n\nWe introduced kids in grades 5-8 with autism to synthetic biology. We had many members volunteer at this event to give the students individualized attention and move at a slower pace. Additionally, our Lego DNA/Jellybean Peptide Activity has many images to aid learning. Overall, the students enjoyed learning about synthetic biology and enjoyed being engaged in a hands-on activity!",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/a/a2/T--Washington--AutismCamp1.jpg;XPOS=75;YPOS=12\nPICTURE=http://2018.igem.org/wiki/images/e/ea/T--Washington--AutismCamp2.jpg;XPOS=15;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/3/39/T--Washington--AutismCamp3.jpg;YPOS=25",
                "type": "SPECIAL"
            },
            {
                "data": "## UW Events\n\n### Engineering Discovery Days\nAt Engineering Discovery Days, students and faculty from all UW engineering departments share their work with students, teachers, families, and the community. This 2-day annual event is free, open to everyone, and is largely geared towards elementary school groups. Our team hosted an exhibit demonstrating a fruit DNA extraction. Over the course of the two-day event, we estimate that 400 students visited our booth.\n\n### Engineering Welcome\nAt UW’s Engineering Welcome, we engaged incoming freshman interested in engineering with discussions about synthetic biology, iGEM, our project, and the potential impact that synthetic biology has. This event was many students’ introduction to synthetic biology, so we encouraged them to attend our synthetic biology panel event, Sit Down with Synbio.\n\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/a/af/T--Washington--EngWelcome1.jpg;XPOS=0\nPICTURE=http://2018.igem.org/wiki/images/0/05/T--Washington--EngWelcome2.jpg\nPICTURE=http://2018.igem.org/wiki/images/8/88/T--Washington--EngWelcome3.jpg",
                "type": "SPECIAL"
            },
            {
                "data": "### Dawg Daze Event with DAWGMA\nWe partnered with DAWGMA, another synthetic biology club at UW, to give a talk about synthetic biology to incoming freshman interested in the field. We introduced the basic ideas of synthetic biology, our project, and advertised our synthetic biology panel event, Sit Down with Synbio.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=1\nPICTURE=http://2018.igem.org/wiki/images/0/03/T--Washington--DawgDaze.jpg",
                "type": "SPECIAL"
            },
            {
                "data": "\n### Red Square Tabling\nDuring UW’s annual club fair, we tabled at Red Square at UW. During this time, we introduced UW students to synthetic biology to recruit for the next iGEM season and promote our synthetic biology panel event, Sit Down with Synbio.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nbooklet\nSynthetic Biology Activity Booklet",
                "type": "SPECIAL"
            },
            {
                "data": "# Synthetic Biology Activity Booklet\n\nWashington iGEM’s Synthetic Biology Activity Booklet aims to embrace the spirit of iGEM by making scientific learning more accessible internationally. We spent more than 100 hours writing and graphically illustrating our 100+ page activity booklet. Although none of the members who wrote and illustrated this booklet are studying graphic design, we taught ourselves Adobe Illustrator to create informative and eye-catching visuals to make learning easier, especially for English Language Learners and children with disabilities. We also included instruction sheets for other iGEM teams/teachers to explain how each activity works.\n\nAfter writing our activity booklet, we collaborated with other iGEM teams to translate our booklet into languages such as Spanish, Vietnamese, French, and Hindi. Through the translations, we hope to provide copies of our activities to students in their native language, both in the Seattle area (for English Language Learners) and internationally.\n\nAdditionally, our curriculum has already been distributed to several schools in the Seattle area as well as a school in India. We are also meeting a UW professor in November to review our curriculum and ensure that it is ideal for effectively teaching synthetic biology to students from diverse backgrounds. Furthemore, we have coordinated a meeting to work with Washington State Senator Bob Hasegawa in the hope of administering our curriculum to a wider range of schools and the general public.\n\n## Quotes from Some Writers of the Booklet:\n* \"I don’t know about you guys, but I couldn’t read up to the fourth grade because I’m dyslexic. I would have loved having visual activities when I was younger. This is why I am so proud of our lessons for younger kids like the Lego DNA/Jellybean Peptide Activity and the Gel Electrophoresis Bunny Activity. These activities do an amazing job illustrating the concepts, allowing people who have a hard time reading have a better understanding of what is going on since they have visual diagrams and clues to follow along with while doing the activity.\" ~ Aimee Ellis\n\n* \"As awesome as synthetic biology is, or more broadly speaking - biology, it might not be for everyone. If you want to engage an audience you have to make them actively involved and not just lecture at them - this is especially true for younger groups. There are lots of textbooks out there that can teach people about biology, but not a lot of them are meant for the purpose of active learning. Our activity booklet is meant to get students actively involved and excited about biology no matter what kind of background they come from. Biology can be and IS for everyone.\" ~ Aerilynn Nguyen\n\n* \"Having grown up in a suburban “bubble” in the Seattle metropolitan area, I was shocked to learn about the inequities in the education system so close to my home. As I was looking at the statistics for students that received free and reduced lunch at potential schools that we were going to visit, the website would often compare the high percentage at those schools with the low percentage of students that needed free or reduced lunch at schools in the school district that I attended. This astonishing revelation was at the core of my desire to make scientific learning more equally accessible with the formation of this booklet.\" ~ Ishira Parikh\n\n## External links to the booklet\n* [English](http://2018.igem.org/wiki/images/4/45/T--Washington--Synbio_Activity_Booklet.pdf)\n* [Spanish](http://2018.igem.org/wiki/images/c/ca/T--Washington--Synbio_Activity_Booklet_Spanish.pdf) translated by [iGEM TecCEM](http://2018.igem.org/Team:TecCEM)\n* [CRISPR Sections in Vietnamese](http://2018.igem.org/wiki/images/b/ba/T--Washington--Synbio_Activity_Booklet_Viet.pdf) translated by [NUS Singapore-Sci](http://2018.igem.org/Team:NUS_Singapore-Sci)\n* [Engineer an Organism Activity in Hindi](http://2018.igem.org/wiki/images/d/d2/T--ICT-Mumbai--Washington-translation.pdf) translated by [ICT Mumbai](http://2018.igem.org/Team:ICT-Mumbai)\n* High School Level activities in French, [Part 1](http://2018.igem.org/File:T--Evry_Paris-Saclay--CollabDocBookletFrench.pdf) translated by [Evry Paris-Saclay](http://2018.igem.org/Team:Evry_Paris-Saclay) and [Part 2](http://2018.igem.org/wiki/images/b/bb/T--Washington--Synbio_Activity_Booklet_Part2_French.pdf) translated by [Sorbonne U Paris](http://2018.igem.org/Team:Sorbonne_U_Paris)\n\nHere are some snapshots of our activity booklet:\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=4\nPICTURE=http://2018.igem.org/wiki/images/c/cb/T--Washington--1a.png\nPICTURE=http://2018.igem.org/wiki/images/7/7e/T--Washington--2a.png\nPICTURE=http://2018.igem.org/wiki/images/b/b6/T--Washington--3a.png\nPICTURE=http://2018.igem.org/wiki/images/c/c6/T--Washington--4a.png",
                "type": "SPECIAL"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nsitdownwithsynbio\nSit Down with Synbio",
                "type": "SPECIAL"
            },
            {
                "data": "# Sit Down with Synbio\n\nTo initiate a dialogue between synthetic biology experts and the general public, Washington iGEM planned, organized, and hosted a synthetic biology panel event called “Sit Down with Synbio.” The two-hour event consisted of a keynote speech by Dr. Scott McIsaac, a Principal Investigator at the anti-aging Bay Area startup Calico Life Sciences, which is funded by Google. During the remainder of the event, the panelists answering pre-submitted questions and questions asked by the audience during the event. This event was extensively advertised to the community by putting up posters, posting on Facebook groups, and being featured on websites like [Geekwire](https://www.geekwire.com/calendar-event/sit-down-with-synbio/).\n\nSome of the topics discussed included GMOs, Artificial Intelligence in synthetic biology, ethics, and the diversity of skillsets needed in synthetic biology, much like on our own iGEM team!\n\nThis event required months of planning including reserving an auditorium and equipment, creating a website, making advertising material and a pamphlet. Ultimately, we estimate that about 100 people attended the event, and we were also featured on UW’s newspaper, The Daily!\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nPICTURE=http://2018.igem.org/wiki/images/9/99/T--Washington--SitDownSynbio1.jpg;XPOS=75;YPOS=12\nPICTURE=http://2018.igem.org/wiki/images/8/83/T--Washington--SitDownSynbio2.jpg;XPOS=15;YPOS=25\nPICTURE=http://2018.igem.org/wiki/images/d/db/T--Washington--SitDownSynbio3.jpg;YPOS=25",
                "type": "SPECIAL"
            },
            {
                "data": "## Footage\n\n* [Introduction](http://2018.igem.org/wiki/images/9/99/T--Washington--SitDownWithSynbio0.mp4)\n* [Answers to pre-submitted questions](http://2018.igem.org/wiki/images/7/70/T--Washington--SitDownWithSynbio1.mp4)\n* [Questions Asked During the Event Part 1](http://2018.igem.org/wiki/images/9/9d/T--Washington--SitDownWithSynbio2.mp4)\n* [Questions Asked During the Event Part 2](http://2018.igem.org/wiki/images/e/eb/T--Washington--SitDownWithSynbio3.mp4)\n\n## Other links\n* [Poster](http://2018.igem.org/wiki/images/8/8b/T--Washington--SitDownWithSynbioFlyer.pdf)\n* [Pamphlet](http://2018.igem.org/wiki/images/2/21/T--Washington--SitDownWithSynbioBrochure.pdf)\n* [Website](http://students.washington.edu/uwigem/sitdownsynbio/)\n* [UW Daily Article](http://www.dailyuw.com/science/article_906900ea-caa7-11e8-966d-ebed7823f5d2.html)\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncommunityinterviews\nCommunity Interviews",
                "type": "SPECIAL"
            },
            {
                "data": "# Community Interviews\n\nDuring the Pacific Northwest iGEM Meetup, we created a dialogue with the public at Gas Works Park. Gas Works Park is a famous park that was originally the site of a goal gasification plant and features a breathtaking view of the Seattle skyline.\nWe asked people enjoying the sunny day at the park about their knowledge of synthetic biology, the biotech industry, and their opinions on vitamin D and its detection to assess potential applications and consider the ethical and societal implications of our project.\n\n## What comes to mind when you think of synthetic biology?\n\n* “I think of farming and stem cells, stem cells research--things like that. I guess I think about things that are man made, not just things that naturally exist in the world..things that have been altered.”\n* “Something manmade, manmade stuff, not organic. Lab.”\n* “I think about biology--animals, plants. And it’s synthetic, so going along with genetic engineering that’s going on right now and expansion through technology.”\n* “Robot plants”\n\n## What do you know about vitamin D?  Do you think you get sufficient vitamin D?\n* “[Vitamin D intake] is lacking in Seattle. I felt it this winter. You leave work and the sun’s down..Every time I go in to the doctor about a general health issue, the doctor tells me that you might want to take vitamin D supplements. Every time I think of a vitamin D deficiency, I think of seasonal depression, I think of it affecting your mental health more than anything else.”\n* “I work 8 to 5, so I don’t think I get enough. Isn’t vitamin D deficiency linked to depression and anxiety? I have anxiety issues, so sometimes I think about whether or not I get vitamin D. It’s hard to pinpoint where the deficiency is.”\n* “I take vitamin D all the time when I get sick. I use my liquid drops when I get sick.”\n\n## Do you feel like you can easily predict when you have enough vitamin D?\n* “It pretty much just depends on how much I’ve literally been in the sun. I don’t think about anything else. I only started thinking about it when I moved it to Seattle, and I remember being like I should start taking supplements, because I’m  not seeing sunlight.”\n\n## What if there was a device or some way for you to easily tell how much vitamin D you have in your body; do you think that would actually help?\n* “Yeah I would love that but then I would be curious to see how that would then actually link up with my mental health.As someone who struggles from depression and anxiety off and on, I would be really curious to see if it gets worse with vitamin D levels...I would be interested if it actually had an impact on me.”\n* “Everyone thinks of seasonal depression but nobody thinks about how to measure it.”\n\n## They asked us a question:\n* “Do you believe that in academia that corporations should stay out of the picture because you are solving problems in the name of science first and foremost, not solving something for the bottom line of the corporation inside of an academic realm?”\n\nFrom these interviews, we came away with a few key insights about how synthetic biology is perceived by the public and concerns that members of the public have about ethics in scientific research. Additionally, we heard significant concerns about vitamin D deficiency and its effects on mental and physical health due to the lack of sunlight in our region.\n\nOne common misconception about synthetic biology is that it mainly deals with GMO agriculture. We explained that the field of synthetic biology is much broader than that, encompassing solutions to problems in areas as diverse as medicine, sustainable energy, and environmental cleanup. Our team does not currently focus on plant synthetic biology; we are using harmless bacteria to develop a detection system.\n\nAnother area of concern for people was regarding funding for academic research and potential conflicts of interest. One person we interviewed asked us: \n\n“Do you believe that in academia that corporations should stay out of the picture because you are solving problems in the name of science first and foremost, not solving something for the bottom line of the corporation inside of an academic realm?”\n\nWe think issues of bias and conflict of interest are important for all iGEM teams, and indeed all researchers, to consider, since funding sources often have disparate interests from researchers, especially those working on fundamental science advancements (not applied science).  A similar issue was discussed at our Sit Down with SynBio panel event, when funding from government agencies, such as the Department of Defense, was discussed in regard to duel use of fundamental technology.  It is essential that scientists weigh the implications of their research being used in ways that they may not approve of.\n\nFinally, as it relates to our project, we found that vitamin D insufficiency is a serious concern for Seattleites, especially in the winter and for those who work indoor jobs.  Many suspect that their experiences with fatigue, anxiety, and depression may be exacerbated by vitamin D deficiency, and are urged by their doctors to take supplements, but they currently do not possess the methods to determine for themselves whether they are receiving enough.  Furthermore, we realized that those we interviewed mainly think about getting vitamin D from sunlight, but did not mention a healthy diet can provide vitamin D as well. We think that educating people more about the importance of eating vitamin D-rich foods is an area for improvement in our region.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncrowdfunding\nCrowdfunding Campaign",
                "type": "SPECIAL"
            },
            {
                "data": "# Crowdfunding Campaign",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/b/bc/T--Washington--Givebutterlogo.jpg,Givebutter Logo adapted from givebutter.com,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
                "type": "IMAGE"
            },
            {
                "data": "In order to raise additional funds for our research and conference expenses, we worked with [Givebutter](https://givebutter.com/WashingtoniGEM2018), an innovative crowdfunding platform that is geared specifically towards student teams. This platform is unusual in that it allows people to make non-profit donations, donors have the option to cover platform fees, and all money raised goes towards the project, regardless of whether the campaign reaches its monetary goal. \n\nThrough this campaign, we were not only able to ensure that our students could move forward with their project, but we were also able to connect our friends and family to our work and show that our technology could help solve real-world problems they may face in their communities.",
                "type": "MARKDOWN"
            },
            {
                "data": "VIDEO\nhttp://2018.igem.org/wiki/images/6/69/T--Washington--crowdfunding.mp4",
                "type": "SPECIAL"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Collaborations;LEFTNAME=Collaborations;RIGHT=http://2018.igem.org/Team:Washington/Entrepreneurship;RIGHTNAME=Entrepreneurship",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/Public_Engagement"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=ENTREPRENEURSHIP\nBACKGROUND=http://2018.igem.org/wiki/images/8/80/T--Washington--Banner.png\nXPOS=50\nYPOS=25\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nMINPADDINGTOP=120\nTEXTHEIGHT=9\nMINTITLEHEIGHT=5\nSUBTITLEHEIGHT=7\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\noverview\nOverview",
                "type": "SPECIAL"
            },
            {
                "data": "http://2018.igem.org/wiki/images/f/fb/T--Washington--BusinessTeamLogo.png,SynSensora Logo,margin:auto,width:50%,maxWidth:400px",
                "type": "IMAGE"
            },
            {
                "data": "# Overview\n\nWashington iGEM’s business team is comprised not of business people or venture capitalists, but rather scientists and engineers passionate about bridging the gap between industry and the lab, thus enabling us to bring a unique perspective to our business endeavors.  We feel that while research is a positive avenue for new discoveries, additional entrepreneurship that brings our team’s product to the market will drastically increase the impact of our project. As our novel nanobody detection systems could catalyze powerful improvements in healthcare and research practices, Washington iGEM has created a business plan for a potential company called SynSensora. We envision SynSensora to be a startup company that provides small molecule detection systems to institutions and biotech companies for use in metabolic engineering, point of care diagnostics, and cell therapies.\n\n\nOur business team is collaborating with the Institute for Protein Design and a business mentor from the Buerk Center for Entrepreneurship at the University of Washington to develop not only biotechnology that will be valuable in market, but also a detailed business model detailing our plan to bring our venture to fruition. Our team has met with several potential customers, including Lumen Bioscience and the Institute for Systems Biology, and has received sponsorships from GenScript, PVP Biologics, and the Institute for Protein Design. We have learned much about business models and intellectual property protection, and our team is working with the Institute for Protein Design to establish a provisional patent for our SynSensora’s research and development protocol.\n\nSynSensora’s products are based on biological detection systems that take advantage of chemically induced dimerization, a process in which two proteins bind together in the presence of a specific molecule. SynSensora detection systems would be used for small molecules, which are historically much more difficult to detect than proteins. These detection systems range from point of care diagnostics to transcriptional biosensors for metabolic pathway optimization. As our team is currently investigating nanobody-based detection systems targeting Vitamin D3 and Artemisinin while also developing a biosensor for CBD, these proof of concept studies will lay the foundation for SynSensora’s product line. The positive feedback we received from potential customers lends confidence to the efficacy of our technology and encourages the expansion of our library of molecules for which we would develop sensors. Ultimately, SynSensora would provide efficient and affordable small molecule detection systems for its customers as well as custom system development. Using an incredibly diverse nanobody library containing around 10^9 variant binders from our partner, the Institute for Protein Design, we could theoretically create detection systems for any small molecule. Thus, as customers request specialized detection systems for various small molecules, our product line would grow. Our established products would be sold a la carte, and our custom development service would range in price depending on the product constraints and development cost.\n\nOur business team has synthesized research from potential customer interviews, database resources, and meetings about intellectual property to develop a plan to make SynSensora a reality. SynSensora has the potential to set a new standard for healthcare and research with affordable and effective small molecule biological detection systems.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nbusinessplan\nBusiness Plan",
                "type": "SPECIAL"
            },
            {
                "data": "# Business Plan",
                "type": "MARKDOWN"
            },
            {
                "data": "TAB\n===\nSummary\n# Summary\n\nThe business plan below is a thorough explanation of SynSensora that includes SynSensora’s purpose and motivation, strengths and weaknesses, operations, products, and our proposal on how to bring those products to market. It includes in depth analyses of several markets that SynSensora products will join and the opportunities and barriers to entry for each market. It also includes an industry analysis of SynSensora’s main competitors with comparisons of the strengths and weaknesses of each company. We have used this research to develop strategies for expanding SynSensora and generating revenue and profit. For ease of access, this page also includes key highlights of the business plan including a concise overview of our market and industry research findings as well as the current status and intended future development of SynSensora.\n\nOur business team used database resources from the University of Washington Buerk Center for Entrepreneurship to conduct in depth market and industry research. We also obtained guidance from the Gu lab at the Institute for Protein Design to ensure that our products and proposed manufacturing techniques were scientifically accurate. Additionally, we received feedback on initial drafts of our business plan from Dirk Smith, a biotech entrepreneur and previous scientific director at Amgen, whom we connected with via the MentorConnect program through the Buerk Center for Entrepreneurship.\n\n===\nIndustry Analysis\n# Industry Analysis\n\nOur company’s nanobody CID technology will translate into innovative tools for point of care (POC) diagnostics, metabolic engineering and pathway optimization, and the programming of therapeutic cells--all of which are lucrative, rapidly expanding sectors in industry. While the diverse applications of our product increase our number of competitors, they also enhance the company’s stability and flexibility by enabling us to utilize gains from less competitive markets to support efforts in more aggressive ones. Thus, concerning existing barriers to entry, due to the presence of both older companies with established substitutes and fresh start-ups with new technologies, our business will have to invest considerable time and effort into convincing customers to choose our more effective methods and products instead of other well-known approaches. Additionally, before we establish a strong market foothold with solid buyer trust, it will be crucial to set competitive pricing to attract buyers away from existing alternatives. Product prices should be flexible depending on the context of each deal and the amount of leverage we have compared to the buyer, with knowledgeable customers in larger markets possessing the most leverage and less savvy consumers in smaller markets having the least. \n\n| Strengths | Weaknesses |\n|-|-|\n| Diverse skill set | New market: must establish brand |\n| Product and market expertise | Steep learning curve for entering competitive target markets |\n| Product development: guidance from expert in field | Technology still new and undergoing R&D |\n| IP Patent-protected new technology: foundation for strong, unique pipeline structure/diverse array of services | Novel production methods will require considerable effort to perfect and scale up |\n\n| Opportunities | Threats |\n|-|-|\n| Novel technology can set new expectations, serve unique niche needs | Government regulations                                                    |\n| Rapidly expanding markets: biosensors, point of care diagnostics and cell therapy | High initial investment for equipment, materials, etc. |\n| Potential for expansion of product line - custom antibody service | Existing biotech companies with alternative methods                       |\n| Increased sensitivity and selectivity for detection of small analytes compared to current methods | Customer reluctance to try unknown products when older proven tech exists |\n===\nMarket Analysis\n# Market Analysis\nOur technology serves four rapidly expanding markets: biosensors, point of care diagnostics, cell therapies, and custom antibody services.\n\n## Biosensors\nInnovation in biosensors is an ongoing process that has application in new markets such as security, military biodefense, and automotive and aerospace industries. The main contributor to this market is research and development and the need to develop new platforms for accurate, highly sensitive and pain-free diagnostic biosensors. The market for biosensors is categorized as a growth market, with the amount of potential applications increasing as more novel biosensor technologies emerge. According to BCC Research, the global market for biosensors, valued at nearly $5.7 billion in 2017, is expected to increase to more than $6.3 billion in 2018 and to more than $12.1 billion in 2023, for a compound annual growth rate (CAGR) of 14.0% over the five-year period from 2018 through 2023.\n\n## Point of Care Diagnostics\nThe market for point of care diagnostics is quickly growing due to increasing investment in research and development, advancement of diagnostic laboratories, and adoption of automated lab systems.  According to Market Research Future, there is a healthy growth rate at a CAGR of 9.5% during a forecast period till 2023.  The market is segmented by types of products and by end users. Some of the types of products include glucose testing, cardiac makers, HbA1c testing and coagulation. Examples of end users include clinics, hospitals and home care.\n\n## Cell Therapy\nAnother market that we cater to is cell therapy. Using the tools of synthetic biology, we now have the technology to engineer our own body’s cells to respond to diseases that could impede our immune system. However, excessive immune activity and poor control over engineered T cells can cause severe toxicities. Our technology has the potential to address these problems and transform the cell therapy market. \n \n## Custom Nanobody Products\nBecause of the novelty of our nanobody products, our company is expanding our product line by manufacturing custom assays based on requests for specific target molecules. According to reports from BCC research, the global market for custom antibody service was estimated at $252 million in 2016 and is expected to grow to $424 million in 2022, with a 9.0% five year CAGR. This growth is mainly due to the lack of specific antibodies that are needed in large quantity, as the demands are usually higher in industrial settings. This lack of large supply benefits the custom antibody service companies that can provide a stable and reliable source of antibodies.\n\n===\nCurrent Status and Future Development\n# Current Status and Future Development\n\nSo far, our team has successfully identified nanobody binders for artemisinin and cholecalciferol from a large combinatorial library of nanobodies. The gene constructs of these nanobodies would be Synsensora’s minimal viable product for our target molecules. Additionally, we have characterized nanobodies for a biosensor for cannabidiol (CBD) using computer simulations, thus demonstrating SynSensora’s ability to optimize products. These studies are a proof of concept for our research and development strategy.\n\nFor the future, we would plan to expand our product base by commercializing the service of customizing nanobody binders. This can be done by communicating with interested companies to not only select target molecules for product development, but also to spread SynSensora’s influence to more customers. We are continuing our research and development for full products for artemisinin, cholecalciferol, and CBD before expanding Synsensora’s product base to other target molecules.",
                "type": "SPECIAL"
            },
            {
                "data": "PDF\nhttp://2018.igem.org/wiki/images/5/5e/T--Washington--BusinessPlan.pdf",
                "type": "SPECIAL"
            },
            {
                "data": "PDF not loading? Download it [here](http://2018.igem.org/wiki/images/5/5e/T--Washington--BusinessPlan.pdf).",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\npcinterviews\nPotential Customer Interviews",
                "type": "SPECIAL"
            },
            {
                "data": "# Potential Customer Interviews\n\nIn order to understand the market for SynSensora’s products and the needs of our potential consumers, our team met with several companies and institutions to discuss nanobody detection systems and their potential applications in the research of each organization as well as to learn about the science and manufacturing processes that could aid in SynSensora’s development. The organizations that we communicated with are Lumen Bioscience, the Institute for Systems Biology, Just Biotherapeutics, and Amyris. The first three organizations are located in the Seattle area, and the last organization is in California, where one of our team members has personal connections. We learned a great deal about how nanobody and CID-based detection systems can aid our potential customers in metabolic engineering and point of care diagnostics along with manufacturing and development techniques that could help expand SynSensora. To read what we learned from each individual organization, please click on the tabs below.",
                "type": "MARKDOWN"
            },
            {
                "data": "TAB\n===\nLumen BioScience\n# Lumen BioScience\n\n![Lumen BioScience Logo](http://2018.igem.org/wiki/images/9/96/T--Washington--LumenLogo.jpg)\n\nTo evaluate the marketability of SynSensora’s nanobody products, we discussed nanobody detection systems with scientists from a Seattle biotech startup company: Lumen Bioscience. Lumen Bioscience is a company that uses spirulina, a cyanobacterium, to produce biologics such as dyes and oral vaccines for fish.\n\nWe met with Dr. Jim Roberts, the Chief Scientific Officer, as well as other scientists from Lumen Bioscience. The researchers were already familiar with nanobodies but had never considered their use in metabolic engineering or point of care diagnostics. After our wetlab leads explained the science and applications of chemically induced dimerization (CID) of nanobodies, they were excited about the great potential of such a versatile technology. However, the researchers did express concern that the CID system would not work with Vitamin D3, one of our target molecules, because of its nonrigid structure.\n\nWhen asking the researchers at Lumen Bioscience how they would use a CID detection system, they proposed utilizing a nanobody CID system as a biosensor for microcystin, a class of toxins that all cyanobacteria products must be tested for because it is harmful to humans. They expressed their frustration with the microcystin testing process because although their products never have any trace of the toxin due to the manufacturing process, they must have a third party test their products to comply with legal regulations. Having an accurate biosensor would allow them to test their own products at a lower cost. This microcystin biosensor could also be used to measure water cleanliness, as cyanobacteria presence is used as a unit of water cleanliness (the more cyanobacteria, the less clean the water). They also were confident that nanobody CID systems could be applied in metabolic pathway optimization.\n\nThe scientists at Lumen Bioscience was very impressed by our project and were interested in keeping in touch. They sent us papers about small molecule biosensor construction and transcriptional biosensors used for metabolic engineering. Our visit to Lumen Bioscience helped us identify possible applications and limitations of SynSensora’s products and gave us a new, professional perspective on nanobody CID detection systems.\n\n![Lumen BioScience Visit](http://2018.igem.org/wiki/images/thumb/7/73/T--Washington--LumenVisit.jpg/800px-T--Washington--LumenVisit.jpg)\n===\nInstitute of Systems Biology\n# Institute of Systems Biology\n\n![ISB Logo](http://2018.igem.org/wiki/images/a/a3/T--Washington--ISBLogo.png)\n\nThe Washington iGEM Business Team had the opportunity to meet with Dr. Nitin Baliga, the Senior Vice President, Director and Professor at the Institute for Systems Biology (ISB) in June 2018. Dr. Baliga’s lab builds predictive models of complex biological phenomena that can be used to guide cells to perform a variety of functions such as fighting off infectious disease, generating clean energy, and remediating the environment. Through this opportunity, we were able to gain insight about the potential applications of SynSensora’s technology and better understand the types of molecules in his field that could use stronger methods for detection. \n\nAccording to Dr. Baliga, a possible application of our technology is the detection of lipoarabinomannan (LAM), a protein produced by Mycobacterium tubercolosis. This protein is one of the most promising candidate antigens whose detection would aid in the diagnosis of tuberculosis. He was intrigued by the possibility of creating a point-of-care diagnostic device that could detect LAM for a cheaper and quicker tuberculosis diagnosis. He also expressed enthusiasm for applications of our technology in metabolic engineering. For instance, pogostone is a precursor to many different molecules, such as patchouli oil, that have a strong insecticidal effect. He proposed that we could use our technology to improve pogostone production, thereby helping repel insects from agricultural products. He also suggested that we look into surface plasmon resonance, which is the principle behind many in vitro biosensors currently in use. .\n\nAt the end of the meeting, Dr. Baliga was interested in helping us with our project, both with its execution and with answering any additional questions we had. His postdoctoral student Vivek, whom Dr. Baliga describes as a “walking encyclopedia that can clone anything”, was also eager to help. The information that we learned from the meeting excited our team as professional researchers saw promise and potential impact in our project and in SynSensora.\n\n![ISB Visit](http://2018.igem.org/wiki/images/c/c7/T--Washington--ISBVisit.jpg)\n===\nAmyris\n# Amyris\n\n![Amyris Logo](http://2018.igem.org/wiki/images/6/6d/T--Washington--AmyrisLogo.png)\n\nAJ Kruse, a Washington iGEM team member, had personal connections to Dr. Victor Holmes, a senior staff scientist at Amyris, and reached out to him on behalf of the team for information about challenges they face and advice on potential molecular targets for our CID systems. Amyris is a successful metabolic engineering company based in Berkeley, CA that manufactures small molecules via synthetic yeast systems. One of their early products included artemisinin, a target molecule for our CID nanobody metabolite sensor, so the bulk of our email correspondence with Dr. Holmes involved asking him about Amyris’s artemisinin production and how our nanobodies could best improve it.\n\nDr. Holmes provided valuable details on what challenges companies like Amyris face when dealing with certain metabolites, enabling us to modify our nanobody sensors for improved efficacy in those applications. For instance, many of Amyris’s molecules of interest, like artemisinin, tend to have extremely high intracellular concentrations, so an effective sensor in this circumstance would only form a dimer in high concentrations of the desired substrate as opposed to a sensitive detection-related assay. He also explained the reasoning behind manufacturing artemisinin chemically instead of biologically: reactions involving oxygen have historically been very low yield in synthetic biology, since they require P450 enzymes which are membrane-bound and kinetically slow. Unfortunately, attempts to increase reaction speed tend to make them less specific. Furthermore, the final conversion steps of artemisinin production do not involve any stereochemistry, so the benefits of drawing upon biology to deal with tricky chirality would not apply here. Our correspondence with Amyris has been useful not only in guiding the technical aspects of our artemisinin CID detection system, but also in exposing our team to possible advantages and limitations of the CID system for use in metabolic engineering.\n===\nJust Biotherapeutics\n# Just Biotherapeutics\n\n![Just Biotherapeutics Logo](http://2018.igem.org/wiki/images/a/ae/T--Washington--JustLogo.jpg)\n\nTo learn more about manufacturing and how to scale up SynSensora, we visited a Seattle based biotech startup called Just Biotherapeutics. Just Biotherapeutics designs biologic products with the aim of reducing manufacturing cost, with their core strengths being molecular design, process and product design, and manufacturing plant design. We met with Anastasia Nicolov, one of our advisors who works at Just Biotherapeutics and received a tour of the facilities and an explanation of the uses of different labs and machines utilized in the company’s research.\n\nWe met with Just Biotherapeutics because they mainly develop antibody products and improve techniques for antibody production. We were introduced to small bioreactors used for testing and large bioreactors used for scaling up to production size. Anastasia was very knowledgeable about the difficulties with scaling up. The environment in a small-scale culture tube or small bioreactor is not proportionally scaled to a larger bioreactor, and the processes for controlling the environment may be different: for example, different scales use different control mechanisms for aeration, pH control, temperature control, and other variables. Though Anastasia clarified that she was not an expert on amplifying plasmids in cell culture, she gave us great insight into current methods for production of antibodies.\n\nOur visit to Just Biotherapeutics helped us understand that scaling up products is a difficult task. To optimize the design of a manufacturing plant, there must be many studies done to understand how the chamber environments of smaller bioreactors scale to larger bioreactors. Because large-scale manufacturing will be important for SynSensora, learning about the scale-up process from an innovator in reducing manufacturing costs was valuable to our team and will aid in our studies going forward and the growth of SynSensora.\n\n![Just Biotherapeutics Visit](http://2018.igem.org/wiki/images/thumb/7/70/T--Washington--JustVisit.jpg/800px-T--Washington--JustVisit.jpg)",
                "type": "SPECIAL"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nipmeeting\nIntellectual Property",
                "type": "SPECIAL"
            },
            {
                "data": "# Intellectual Property\n\nThe Washington iGEM business team met with Dr. Gu, who developed a novel protocol to perform massively high-throughput molecular detection using nanobodies at the Institute for Protein Design. We had multiple meetings with Dr. Gu for scientific guidance and to better understand how intellectual property (IP) protection works, since we are partnering with Dr. Gu to commercialize SynSensora’s products. Through our meetings, we had the opportunity to learn and provide insight on the process of writing a patent as Dr. Gu invited the Washington iGEM team to collaborate with him and his lab in the process of developing protection for his IP.\n\nDuring one of our meetings on July 17th, 2018, we began our first discussion on Dr. Gu’s IP protection. Dr. Gu first began our discussion by providing us with three potential applications for his novel method, which include point of care diagnostics, metabolic biosensors, and cell therapy. The actual proposed patent would be for the protocol for creating the chemically induced dimerization (CID). In our meeting, we also discussed the products that our business, SynSensora, would manufacture and sell, which includes the construct of the genes to produce the binding proteins as well as physical proteins for use in point of care diagnostics. \n\nThroughout the process of our research and development, we were in constant contact with Dr. Gu, so we could be sure to be on the same page regarding his protocol and SynSensora’s products. Meeting with Dr. Gu helped us identify the possibilities of what this novel technology can do and gave us a whole new perspective on the application of this technology. We have been invited to join the discussion about protecting Dr. Gu’s protocol with his lab and CoMotion, UW’s center for innovation and intellectual property protection, in late October. This experience has allowed us to learn about the importance of intellectual property protection, the barriers to gaining protection, and resources to aid in getting protection.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Public_Engagement;LEFTNAME=Education & Engagement;RIGHT=http://2018.igem.org/Team:Washington/HP_Design;RIGHTNAME=Human Practices Design",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/Entrepreneurship"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=SAFETY\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nlabsafety\nLab Safety",
                "type": "SPECIAL"
            },
            {
                "data": "# Lab Safety\n\nWe worked on a foundational project this season that primarily involved work with _E. coli_ (DH5-alpha and BL21 Cell Lines). These cell lines constitute BSL1 hazard level, and as a result, we took precautions in lab under this rating. This included always wearing gloves, sterilizing surfaces with ethanol, bleaching and autoclaving and collecting waste as needed, and enforcing the lab as a food and drink-free space. We received training at the beginning of the year through the Biochemistry Department at the University of Washington, which consisted of several online safety trainings. We also refreshed our safety periodically throughout the summer with all members in the lab. ",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\neanderisk\nEthical and Environmental Risk",
                "type": "SPECIAL"
            },
            {
                "data": "# Ethical and Environmental Risk\n\nThere are a number of applications for CID systems, including biosensors and genetic switches. There is a risk that this technology applied to a sensor could produce false positives due to inefficiencies in the system. Depending on how this information is used, this risk raises a number of ethical concerns for the technology, and requires that any end-user applications be rigorously tested. As is, the CID system demonstrated in our project is foundational and thus has little to no ethical bearing on the general public. Furthermore, we do not intend to work with animals or release this system into the environment.\n",
                "type": "MARKDOWN"
            }
        ],
        "isContent": true,
        "pageTitle": "/Safety"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=ATTRIBUTIONS\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3\nMINTITLEHEIGHT=6",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nprojectdevelopment\nProject Development",
                "type": "SPECIAL"
            },
            {
                "data": "# Project Development:\n\n## Gu Lab\n\n* Prof. Liangcai Gu, Assistant Professor, Department of Biochemistry, Institute of Protein Design\n* Dr. Shoukai Kang, Post-doctoral Fellow, Department of Biochemistry\n* Dr. Zhimin Huang, Post-doctoral Fellow, Department of Biochemistry\n* Li Sun, Research Engineer, Department of Biochemistry\n* Luis Castillo, Undergraduate Research Assistant, Department of Biochemistry\n* Jack Jiang, Undergraduate Research Assistant, Department of Biochemistry\n\n## Baker Lab\n\n* Prof. David Baker, Professor, Department of Biochemistry; Director, Institute of Protein Design; HHMI Investigator\n* Dr. Chunfu Xu, Senior Fellow, Institute of Protein Design\n* Dr. Matthew Bick, Senior Fellow, Institute of Protein Design\n* Jason Klima, Graduate Research Assistant, Institute of Protein Design\n* Dr. Lance Stewart, Sr. Director of Strategy, Institute of Protein Design\n\n## Others\n\n* Prof. Herbert Sauro, Associate Professor, Department of Bioengineering\n* Dr. Karen Thickman, Lecturer, Department of Microbiology, School of Medicine\n* Prof. James Carothers, Assistant Professor, Department of Chemical Engineering; Affiliated Investigator, NSF Synthetic Biology Engineering Research Center\n* Prof. Tomikazu Sasaki, Professor, Department of Chemistry\n* Brooke Angell, Lab Manager, Fields Lab, Department of Genome Sciences\n* Lucia Shumaker, Former Research Scientist/Engineer, Fields Lab, Department of Genome Sciences",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nwetlab\nWetlab",
                "type": "SPECIAL"
            },
            {
                "data": "# Wetlab:\n\n* Terra Vleeshouwer-Neumann, Research Scientist, Chen Lab, Department of Pathology\n* Texia Loh, Undergraduate Research Assistant, Chen Lab, Department of Pathology\n* Nick Terzopoulos, Assistant Research Scientist, Kaeberlein Lab, Department of Pathology\n* Brandy Tang, Research Associate, Human Photonics Lab, Department of Mechanical Engineering.\n* Andrew Francis, PhD Candidate, Fu lab, Department of Chemistry ",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nsimulations\nSimulations",
                "type": "SPECIAL"
            },
            {
                "data": "# Simulations:\n\n* Prof. Frank Dimaio, Assistant Professor, Department of Biochemistry, Institute of Protein Design\n* Prof. Herbert Sauro",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nbusiness\nBusiness",
                "type": "SPECIAL"
            },
            {
                "data": "# Business:\n\n* Dr. William Canestaro, Managing Director, Washington Research Foundation\n* Lumen Bioscience, Inc.\n* Institute of Systems Biology\n* Prof. Liangcai Gu\n* Dirk Smith, Founding Partner, Cascadia Drug Development Group\n* Just Biotherapeutics, Inc,\n* Amyris, Inc.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nfundraising\nFundraising",
                "type": "SPECIAL"
            },
            {
                "data": "# Fundraising:\n\n* Damien Chapman, Director for Corporate and Foundation Relations, UW Medicin",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\noutreach\nOutreach",
                "type": "SPECIAL"
            },
            {
                "data": "# Outreach:\n\n## Schools\n\n* International School, Bellevue, WA\n* Janet Roberts \n* Teacher: Cheryl McClure\n* Adventure Science Camp, Seattle, WA\n* Teachers: Sylwia Mazur Johnson & Zoe Leverso\n* Kent Meridian High School, Kent, WA\n* Jodie Spitze\n* Teacher: Brian Gabert\n* Rainier Beach High School, Seattle, WA\n* Kelly Rolón\n* Teacher: Karla Nyquist\n* Northgate Elementary School, Seattle, WA\n* Principal: Dedy Fauntleroy\n* Kea Ireland, Northgate Elementary Secretary\n* Guillermo Carvajal\n* Teacher: Jenny Tang\n* Sadhana School, Ahmedabad, India\n* Principal & Trustee: Pranav Mistry\n\n## “Sit Down with SynBio” Event\n\n* Dr. Scott McIsaac (keynote speaker and panelist), Principal Investigator, Calico Life Sciences\n* Dr. Jim Roberts (panelist), Chief Scientific Officer, Lumen Biosciences, Inc.\n* Prof. Jennifer Nemhauser (panelist), Professor, Department of Biology\n* Prof. Herbert Sauro (panelist)",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nadministration\nAdministration",
                "type": "SPECIAL"
            },
            {
                "data": "# Administration:\n\n* Kevin Lybarger, PhD Candidate, Department of Electrical Engineering\n* Prof. Brian Fabien, Associate Dean, Academic Affairs, College of Engineering; Professor, Department of Mechanical Engineering\n* Zulfiya Lafi, Administrator, Department of Biochemistry\n* Tonya Alan Hirtzel, Assistant to the Chair, Department of Biochemistry\n* Cynthia Acuario, Program Operations Analyst, Department of Biochemistry\n* John Doan, Budget/Fiscal Analyst, Department of Biochemistry\n* Tana Knight, Budget/Fiscal Analyst, Department of Biochemistry\n* Prof. Trisha Davis, Professor and Chair, Department of Biochemistry",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nmeetupvandv\nMeetup VIPs and Volunteers",
                "type": "SPECIAL"
            },
            {
                "data": "# Meetup VIPs and Volunteers\n\n## VIPs\n\n* Dr. Ingrid Swanson Pultz, Chief Scientific Officer, PvP Biologics\n* Regina Wu, Co-Founder, SoundBio Lab\n* Cindy Wu, Co-Founder, Experiment\n* Dr. David Younger, Founder & CEO, A-Alpha Bio, Inc.\n* Dr. David Hirschberg, Founder & CEO, RAIN Incubator; Affiliate Associate Professor, University of * Washington Tacoma\n* Dr. Liangcai Gu\n* Roya Amini-Naieni, Founder & Director, PolymerSpace; Undergraduate Student, Harvey Mudd College\n## iGEM Ambassadors\n* Holly Bowman, Ambassador for North America\n* Amy Chen, Ambassador for North America\n## Volunteers\n* Sophie Liu, High School Student, Newport High School\n",
                "type": "MARKDOWN"
            }
        ],
        "isContent": true,
        "pageTitle": "/Attributions"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=SPONSORS\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nMINPADDINGTOP=120\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "SPONSORS\nNAME=UW Biochemistry Department; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/e/e8/T--Washington--biochemlogo.png;LINK=https://depts.washington.edu/biowww/;FILTER=Diamond;CUSTSIZE=75\nNAME=Genscript; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/e/e7/T--Washington--Genscriptlogo.png;LINK=https://www.genscript.com/;FILTER=Diamond;CUSTSIZE=75\nNAME=IDT; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/9/9e/T--Washington--IDTlogo.png;LINK=https://www.idtdna.com;FILTER=Diamond;CUSTSIZE=75\nNAME=UW Paul G. Allen School of Computer Science & Engineering; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/0/01/T--Washington--CSElogo.png;LINK=https://www.cs.washington.edu/;FILTER=Diamond;CUSTSIZE=75\nNAME=UW Department of Biomedical Informatics and Medical Education; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/d/d5/T--Washington--bioinfologo.png;LINK=http://bime.uw.edu/;FILTER=Gold;CUSTSIZE=75\nNAME=UW Bioengineering Department; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/8/8f/T--Washington--BioElogo.png;LINK=https://bioe.uw.edu/;FILTER=Gold;CUSTSIZE=75\nNAME=Institute of Protein Design; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/a/a6/T--Washington--IPDlogo.png;LINK=http://www.ipd.uw.edu/;FILTER=Gold;CUSTSIZE=75\nNAME=PvP Biologics; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/d/d3/T--Washington--PvPlogo.png;LINK=https://www.pvpbio.com/;FILTER=Gold;CUSTSIZE=75\nNAME=Crowdfunding: Friends of Washington iGEM; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;FILTER=Gold;CUSTSIZE=75\nNAME=UW Biology Department; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/8/89/T--Washington--biologo.png;LINK=https://www.biology.washington.edu/;FILTER=Silver;CUSTSIZE=75\nNAME=UW Applied Math Department; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/5/54/T--Washington--appliedmathlogo.png;LINK=https://amath.washington.edu/;FILTER=Silver;CUSTSIZE=75\nNAME=UW Chemistry Department; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/b/b5/T--Washington--chemlogo.png;LINK=http://depts.washington.edu/chem/;FILTER=Silver;CUSTSIZE=75\nNAME=NEB; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/4/49/T--Washington--NEBlogo.png;LINK=https://www.neb.com/;FILTER=Silver;CUSTSIZE=75\nNAME=UW Microbiology Department; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/5/5e/T--Washington--microbiologo.png;LINK=https://microbiology.washington.edu/;FILTER=Bronze;CUSTSIZE=75\nNAME=UW Material Science and Engineering Department; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/0/0d/T--Washington--msebiologo.png;LINK=https://mse.washington.edu/;FILTER=Bronze;CUSTSIZE=75\nNAME=Zulip; SUBTEXT=;PICTURE=http://2018.igem.org/wiki/images/0/00/T--Washington--Zuliplogo.png;LINK=https://zulipchat.com/;FILTER=Diamond;CUSTSIZE=50",
                "type": "SPECIAL"
            }
        ],
        "pageTitle": "/Sponsors"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=GALLERY\nBACKGROUND=http://2018.igem.org/wiki/images/2/2f/T--Washington--teampic2.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nMINPADDINGTOP=120\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "GALLERY\nsrc=http://2018.igem.org/wiki/images/b/b1/T--Washington--humanAndrew.png;width=500;height=332\nsrc=http://2018.igem.org/wiki/images/a/ab/T--Washington--teampic1.jpg;width=2048;height=1365\nsrc=http://2018.igem.org/wiki/images/1/13/T--Washington--hannahhum.png;width=600;height=399\nsrc=http://2018.igem.org/wiki/images/7/7d/T--Washington--angelhum.png;width=650;height=432\nsrc=http://2018.igem.org/wiki/images/a/a2/T--Washington--renaldohum.png;width=538;height=816\nsrc=http://2018.igem.org/wiki/images/2/2f/T--Washington--teampic2.jpg;width=2048;height=1365\nsrc=http://2018.igem.org/wiki/images/5/5b/T--Washington--karalhum.png;width=330;height=500\nsrc=http://2018.igem.org/wiki/images/a/a7/T--Washington--williamhum.png;width=600;height=400\nsrc=http://2018.igem.org/wiki/images/7/7a/T--Washington--leadgal1.jpg;width=2048;height=1365\nsrc=http://2018.igem.org/wiki/images/e/e0/T--Washington--leadgal2.jpg;width=2048;height=921\nsrc=http://2018.igem.org/wiki/images/9/99/T--Washington--krithigallery.png;width=550;height=328\nsrc=http://2018.igem.org/wiki/images/c/ca/T--Washington--noodle.jpg;width=3264;height=2448\nsrc=http://2018.igem.org/wiki/images/2/22/T--Washington--pnw1.jpg;width=480;height=640\nsrc=http://2018.igem.org/wiki/images/d/d2/T--Washington--Leads.jpg;width=800;height=422\nsrc=http://2018.igem.org/wiki/images/c/c8/T--Washington--saigon.jpg;width=3088;height=2320\nsrc=http://2018.igem.org/wiki/images/d/d9/T--Washington--pnw2.jpg;width=480;height=640\nsrc=http://2018.igem.org/wiki/images/4/45/T--Washington--yoshihum.png;width=600;height=400\nsrc=http://2018.igem.org/wiki/images/7/79/T--Washington--rehaanteam.png;width=550;height=428\nsrc=http://2018.igem.org/wiki/images/2/2c/T--Washington--hic.png;width=422;height=600\nsrc=http://2018.igem.org/wiki/images/c/cd/T--Washington--AnastGallery.png;width=500;height=499\nsrc=http://2018.igem.org/wiki/images/c/cb/T--Washington--escaperoom.jpg;width=3662;height=2744\nsrc=http://2018.igem.org/wiki/images/6/68/T--Washington--drylabpres.png;width=808;height=370\nsrc=http://2018.igem.org/wiki/images/1/17/T--Washington--buttons.png;width=600;height=400\nsrc=http://2018.igem.org/wiki/images/e/ec/T--Washington--RoyaTalk.png;width=682;height=454\nsrc=http://2018.igem.org/wiki/images/b/b1/T--Washington--Hirschberg.jpg;width=500;height=333\nsrc=http://2018.igem.org/wiki/images/b/b7/T--Washington--GuTalk.jpg;width=300;height=200\nsrc=http://2018.igem.org/wiki/images/2/28/T--Washington--AmbassadorTalk.jpg;width=500;height=332\nsrc=http://2018.igem.org/wiki/images/1/14/T--Washington--XMAS.png;width=500;height=335\nsrc=http://2018.igem.org/wiki/images/5/5f/T--Washington--SimulationsWorkshop.jpg;width=560;height=371\nsrc=http://2018.igem.org/wiki/images/7/78/T--Washington--CollabKeynoteSpeech.png;width=685;height=456\nsrc=http://2018.igem.org/wiki/images/6/61/T--Washington--Outreach2.jpg;width=550;height=367\nsrc=http://2018.igem.org/wiki/images/4/48/T--Washington--FundraisingWorkshop.jpg;width=560;height=379\nsrc=http://2018.igem.org/wiki/images/4/4b/T--Washington--Outreach3.jpg;width=550;height=369\nsrc=http://2018.igem.org/wiki/images/3/3b/T--Washington--Outreach1.jpg;width=560;height=347\nsrc=http://2018.igem.org/wiki/images/3/3d/T--Washington--PNWMeetup.png;width=683;height=455\nsrc=http://2018.igem.org/wiki/images/5/55/T--Washington--WashingtonPresentation.jpg;width=692;height=460\nsrc=http://2018.igem.org/wiki/images/7/70/T--Washington--Poster2.jpg;width=540;height=358\nsrc=http://2018.igem.org/wiki/images/2/25/T--Washington--iTeslaPresentation.jpg;width=704;height=392\nsrc=http://2018.igem.org/wiki/images/5/53/T--Washington--TacomaPresentation.jpg;width=703;height=466\nsrc=http://2018.igem.org/wiki/images/b/b6/T--Washington--Shoreline3.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/1/1c/T--Washington--Poster1.jpg;width=550;height=365\nsrc=http://2018.igem.org/wiki/images/1/16/T--Washington--KaraliTesla.jpg;width=520;height=391\nsrc=http://2018.igem.org/wiki/images/d/d6/T--Washington--Shoreline1.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/0/05/T--Washington--Shoreline2.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/1/10/T--Washington--AngeliTesla.jpg;width=520;height=390\nsrc=http://2018.igem.org/wiki/images/5/59/T--Washington--MathFestival2.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/4/49/T--Washington--MathFestival3.jpg;width=500;height=666\nsrc=http://2018.igem.org/wiki/images/6/6a/T--Washington--IntroduceAGirlToBIOE1.jpg;width=500;height=666\nsrc=http://2018.igem.org/wiki/images/e/e8/T--Washington--iTesla.jpg;width=520;height=388\nsrc=http://2018.igem.org/wiki/images/a/a1/T--Washington--IntroduceAGirlToBIOE2.jpg;width=500;height=333\nsrc=http://2018.igem.org/wiki/images/3/3e/T--Washington--IntroduceAGirlToBIOE3.jpg;width=500;height=281\nsrc=http://2018.igem.org/wiki/images/3/30/T--Washington--Northgate2.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/7/72/T--Washington--InternationalSchool1.jpg;width=500;height=333\nsrc=http://2018.igem.org/wiki/images/3/33/T--Washington--MathFestival1.jpg;width=500;height=666\nsrc=http://2018.igem.org/wiki/images/2/2e/T--Washington--Northgate3.jpg;width=500;height=666\nsrc=http://2018.igem.org/wiki/images/d/d7/T--Washington--InternationalSchool3.jpg;width=500;height=333\nsrc=http://2018.igem.org/wiki/images/c/c3/T--Washington--InternationalSchool2.jpg;width=500;height=333\nsrc=http://2018.igem.org/wiki/images/a/a2/T--Washington--Northgate1.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/3/39/T--Washington--Sadhana3.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/a/ab/T--Washington--Sadhana2.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/c/c4/T--Washington--KentMeridian1.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/b/b3/T--Washington--KentMeridian2.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/4/4e/T--Washington--KentMeridian3.jpg;width=500;height=666\nsrc=http://2018.igem.org/wiki/images/e/e0/T--Washington--Sadhana1.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/1/1b/T--Washington--Rainier3.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/8/87/T--Washington--Rainier1.jpg;width=500;height=666\nsrc=http://2018.igem.org/wiki/images/b/bc/T--Washington--Rainier2.jpg;width=500;height=666\nsrc=http://2018.igem.org/wiki/images/a/a2/T--Washington--AutismCamp1.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/e/ea/T--Washington--AutismCamp2.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/8/83/T--Washington--SitDownSynbio2.jpg;width=500;height=333\nsrc=http://2018.igem.org/wiki/images/9/99/T--Washington--SitDownSynbio1.jpg;width=500;height=333\nsrc=http://2018.igem.org/wiki/images/d/db/T--Washington--SitDownSynbio3.jpg;width=500;height=333\nsrc=http://2018.igem.org/wiki/images/3/39/T--Washington--AutismCamp3.jpg;width=500;height=375\nsrc=http://2018.igem.org/wiki/images/a/ac/T--Washington--Poster3.jpg;width=540;height=359\nsrc=http://2018.igem.org/wiki/images/8/8c/T--Washington--whiteboard1.png;width=640;height=323\nsrc=http://2018.igem.org/wiki/images/a/a9/T--Washington--Labphoto.jpg;width=650;height=365\nsrc=http://2018.igem.org/wiki/images/2/2e/T--Washington--whiteboard2.png;width=813;height=421",
                "type": "SPECIAL"
            }
        ],
        "pageTitle": "/Gallery"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=MEDAL REQUIREMENTS\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=8\nSUBTITLEHEIGHT=7\nBLUR=3\nMINPADDINGTOP=120\nMINTITLEHEIGHT=5",
                "type": "SPECIAL"
            },
            {
                "data": "This year, we have completed the requirements to receive a gold medal, and are eligible for a number of special awards.",
                "type": "MARKDOWN"
            },
            {
                "data": "SECTION\ngold\nGold",
                "type": "SPECIAL"
            },
            {
                "data": "# Gold\n\n✔ Integrated Human Practices - We engaged with stakeholders and the public and used what we learned to inform our project’s direction. Read more on our [Human Practices](http://2018.igem.org/Team:Washington/Human_Practices) page.\n\n✔ Model Your Project - Our project included a significant protein modeling component which tied in closely with our wetlab work. Learn more on our [Model](http://2018.igem.org/Team:Washington/Model) page.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nsilver\nSilver",
                "type": "SPECIAL"
            },
            {
                "data": "# Silver\n\n✔ Validated Part / Validated Contribution - We made four biobricks, some of which have characterization data. Visit our [Parts](http://2018.igem.org/Team:Washington/Parts) page to learn more.\n\n✔ Collaboration - We collaborated with multiple teams on InterLab, human practices, surveys, and through hosting the first-ever PNW iGEM Meetup. Read more on our [Collaborations](http://2018.igem.org/Team:Washington/Collaborations) page.\n\n✔ Human Practices Silver - We thought creatively and carefully about how our project could affect our world.  Read more on our [Human Practices](http://2018.igem.org/Team:Washington/Human_Practices) page.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nbronze\nBronze",
                "type": "SPECIAL"
            },
            {
                "data": "# Bronze\n\n✔ Registration and Giant Jamboree Attendance - We registered and are attending the Jamboree!\n\n✔ Competition Deliverables - We filled out our judging form and completed our wiki, poster, and presentation by the competition deadlines.\n\n✔ [Attributions](http://2018.igem.org/Team:Washington/Attributions) - Thank you again to everyone who helped us with our project!\n\n✔ Characterization / Contribution - We successfully completed the InterLab study, and our results are posted on our [InterLab page](http://2018.igem.org/Team:Washington/InterLab).",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nel_sp_awards\nEligible Special Awards",
                "type": "SPECIAL"
            },
            {
                "data": "# Eligible Special Awards \n\n* Best Supporting Entrepreneurship Award\n* Best Model Award\n* Best Education & Public Engagement Award\n* Best Integrated Human Practices\n* Best Wiki\n* Best Poster\n* Best Presentation\n\n\n",
                "type": "MARKDOWN"
            }
        ],
        "isContent": true,
        "pageTitle": "/Medal_Requirements"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=HUMAN PRACTICES DESIGN\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=8\nSUBTITLEHEIGHT=7\nBLUR=3\nMINPADDINGTOP=70\nMINTITLEHEIGHT=6",
                "type": "SPECIAL"
            },
            {
                "data": "# Intro\n\nIf a picture paints a thousand words, the motivation behind the design team was to paint our project as clearly as possible. Our aim was to create a team that would help bridge our team to the outside world – to both other scientists and non-scientific members of the community alike – to spread the knowledge of synthetic biology as well as our year-long research. This opportunity allowed us to be more conscientious of what we want our message to be and how to best portray that information for the intended audience.\n\nWe worked to illustrate materials for many events and projects throughout the year, from designing recruitment posters to creating the team logo, illustrating a logo and materials for the PNW Meetup, and illustrating the pages of the Outreach Booklet. We also made our project more presentable for the competition by designing and composing figures for the wiki and putting together the presentation poster. Ultimately, we formed a small team of scientists who were willing to teach themselves design skills using programs on Adobe such as Photoshop, Illustrator, and After Effects to undertake projects deemed valuable for sharing the story of CID dimerization and synthetic biology overall.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "# Outreach Booklet\n\nThis year, Washington iGEM wrote and compiled a series of synthetic biology-related activities that were translated into several languages and utilized globally. The Outreach and Design teams collaborated on this project to create the most legible and engaging activity booklet possible.\n\nThe members of the Design team aimed to produce artistic works that were both aesthetically pleasing and extremely easy to read. To accomplish this, we chose sans-serif fonts, which are more legible at smaller sizes. Additionally, because much of the activity booklet is intended for younger demographics, such as elementary students, a sans-serif font would aid in reading text more smoothly as a consequence of its simple font anatomy.\n\nThere was no particular color scheme for this booklet, as the intent of the design was simply to catch the eye of the reader. We aimed to introduce variety into each activity by altering the color of the header title and supplementing the pages with various artworks. More importantly, we wanted to portray synbio topics in a manner that was not intimidating or complicated. The booklet was created with the intent of introducing synthetic biology to a wide audience, including students with intellectual disabilities and English Language Learners. We wanted the readers to be able to take the topics out of a classroom context and relate it to their own lives. Our primary goal was to separate “synthetic biology” from a “textbook definition.”\n\nWhile we are immensely proud of the final product, the Design team understands that further improvements in the booklet could be made in the future to ensure higher quality work. Specifically, in the translations by other teams, some of the fonts and formatting were changed due to the constraints of online PDF editors. Thus, the Design team at Washington iGEM aims to work more diligently to create more enticing and cohesive professional works. With the academic year just starting, Washington iGEM hopes to incorporate more unique and effective lessons for young, aspiring scientists to learn about synthetic biology!\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "# Gallery",
                "type": "MARKDOWN"
            },
            {
                "data": "GALLERY\nsrc=http://2018.igem.org/wiki/images/3/35/T--Washington--HuskyLogo1.png;width=648;height=792\nsrc=http://2018.igem.org/wiki/images/e/ec/T--Washington--HuskyLogo2.png;width=648;height=792\nsrc=http://2018.igem.org/wiki/images/d/d4/T--Washington--HuskyLogo3.png;width=612;height=792\nsrc=http://2018.igem.org/wiki/images/0/05/T--Washington--SynbioBrochure1.png;width=792;height=612\nsrc=http://2018.igem.org/wiki/images/9/9e/T--Washington--SynbioBrochure2.png;width=792;height=612\nsrc=http://2018.igem.org/wiki/images/2/22/T--Washington--SynbioBooklet1.png;width=612;height=792\nsrc=http://2018.igem.org/wiki/images/3/3e/T--Washington--SynbioBooklet2.png;width=612;height=792\nsrc=http://2018.igem.org/wiki/images/c/c3/T--Washington--SynbioBooklet3.png;width=612;height=792\nsrc=http://2018.igem.org/wiki/images/6/6b/T--Washington--SynbioBooklet4.png;width=612;height=792\nsrc=http://2018.igem.org/wiki/images/8/81/T--Washington--PNW1.png;width=800;height=800\nsrc=http://2018.igem.org/wiki/images/3/35/T--Washington--PNW2.png;width=904;height=626",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Entrepreneurship;LEFTNAME=Entrepreneurship;RIGHT=http://2018.igem.org/Team:Washington/Team_Development;RIGHTNAME=Team Development",
                "type": "SPECIAL"
            }
        ],
        "isContent": false,
        "pageTitle": "/HP_Design"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=TEAM DEVELOPMENT\nBACKGROUND=http://2018.igem.org/wiki/images/7/7f/T--Washington--SlackUsage.jpg\nYPOS=90\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=8\nMINTITLEHEIGHT=6\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nteamcommunications\nTeam Communications",
                "type": "SPECIAL"
            },
            {
                "data": "# Team Communications: A crucial aspect of an iGEM team\n\nAs of 2017, the University of Washington has over 45,000 enrolled students, of which about 40% are commuters, with a campus size of over 2.56km². On a campus like this, sometimes meeting together is close to impossible. Throughout the years of operating an iGEM team at the University of Washington, one of the biggest issues with team cohesion, morale, and success has been **communication**. Our advisers especially noted that this was true among the 3+ years they have been involved, and it remains a problem regardless of team size. With our unusually large team this year, it is an _especially_ large problem. Our team has experimented with various communication platforms that can fit with the fluidity and multi-faced nature of an iGEM team.\n\n## Trying different platforms\n\nOur team has tried many different methods of communication but most platforms fell short because they did not meet our criteria for our ideal communication platform. In the past, we have used Google Hangouts Chat, Facebook Messenger, and Slack Free edition. Based on this experience, we have identified shortcomings of these platforms. At the start of the season, the leadership team that continued from the 2017 team discussed what we wanted in a communication platform:\n\nBased on our past experience, our ideal platform would:\n\n* Be **portable and accessible**: The program should work on multiple operating systems (Windows, MacOS, Linux) and also be available on mobile apps (Android, iOS). \n* Be **stable**: The programs should be able to reliably send and receive messages and files, in any form, and not fail to send messages we type.\n* Be **affordable**: We do not have a budget that we can allocate to our communication platform, so we were ideally looking for an open-source free solution. Slack is expensive at $7/user/month. \n* Be **organized**: The platform should have a good way to organize many topics and discussion at the same time. One problem with Facebook Messenger and Google Hangouts was the lack of threading or separation by topics.\n* Be **searchable**: We send many messages every day. We need a way to search all messages in case we need to get back to it.\n* Have a layer of **privacy**: We have a complicated team structure. We need private and public channels, as well as the ability to privately message other users.\n* Have **long-term storage**: One issue with Slack is that our team easily reached our maximum message number limit, and halfway through the season, we started to lose crucial messages.\n\nWe have tried multiple messaging platforms listed below:\n\n| Platform | Comments |\n|-|-|\n| Rocket.chat | $10/month for the whole server, but limited threading capabilities. |\n| Ryver | Free, but the layout is confusing. It seems to be trying to be Slack and Trello in one. |\n| Trello | Great layout for task management, but it’s not intuitive for quick communication. |\n| Chanty | Too early in its development and lacks a lot of features that other programs have. |\n| HipChat | Too expensive! |\n| Bitrix24 | Too expensive! |\n| MatterMost | The platform is very good and intuitive, but is $150/month for 50 users. We could not find a server to host an instance. |\n| Slack | Slack was what we used last season, but the biggest complaints were that discussions couldn’t be sustained, and there was a maximum message retention limit. |\n| Google Hangouts | Very ubiquitous, but does not support threading or easy messaging of users. |\n| Facebook | Everyone uses Facebook, but often for personal, “non-work” uses, and many team members said they wanted to keep iGEM “business” separate from their personal social media. Messenger has the same problem as Google Hangouts. |\n| IRC | IRC is too niche and too minimalist. The messages that people send will also not be visible if they are offline. |\n| SnapChat | Too casual and won’t be conducive to working. |\n| Zoom | Works great as a video messaging system, but it’s too simple and doesn’t have features necessary for the team. |\n| GroupMe, WeChat, LINE, Kakotalk, Whatsapp | Instant messaging platforms like these are too casual and has the same problem as Google Hangouts. |",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/7/7f/T--Washington--SlackUsage.jpg,Slack usage,boxShadow: 5px 5px 10px gray,margin:auto,width:90%",
                "type": "IMAGE"
            },
            {
                "data": "Figure 1. Our analytics of Slack usage last year. We went well over 10 times the amount of free messages we had.\n\nAfter lots of experimentation, we found a relatively new platform called Zulip.",
                "type": "MARKDOWN"
            },
            {
                "data": "## Zulip\n\nZulip is a very different communication platform developed at MIT (just like iGEM!) in 2012 as a startup. In 2014, it was acquired by Dropbox while in private beta, where it met favorable opinions from beta users. In late 2015, it was released as open source software. The Zulip project is now one of the world’s largest active open source projects. There is now a company dedicated to developing Zulip, as well as a hosted server service funded by the National Science Foundation. [1] The core team developing Zulip includes former and current Dropbox employees, MIT and Stanford graduates, and core Python contributors. [2]\n\nZulip has an innovative approach to chat styling: They combine Slack’s immediacy and portability with an email threading model. This allows teams to immediately address completely different discussions, while keeping organization and neatness. Zulip wonderfully hits almost all of our criteria. [3]\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/a/ab/T--Washington--ZulipScreenshot.jpg,Zulip desktop,boxShadow: 5px 5px 10px gray,margin:auto,width:90%",
                "type": "IMAGE"
            },
            {
                "data": "Figure 2. A screenshot of Zulip, desktop program version, Windows, dark mode. Note its email-threading method of showing multiple discussions at once.\n\n| Criteria | Zulip feature |\n|-|-|\n| Portable + Accessible | Zulip was built on a platform supported by all OSes, and if the desktop app doesn’t work, it can be used in the browser, just like Slack. It also has an Android and iOS app. |\n| Stable | Zulip was originally still the beta version when we started using it. Since then, stability of the desktop and mobile apps have improved dramatically to almost no issues. |\n| Cheap | Zulip has the same pricing plan as Slack. But, unlike Slack, they offer their premium plan to non-profit groups. After asking them, they immediately offered us a premium plan for free! |\n| Organized | Zulip is organized into “streams” (akin to “channels”) and “topics” within the streams. Their home window can show multiple topics within streams at once. Our team members have really responded well, and it has created efficient and rapid communication possible. |\n| Searchable | Zulip has a global search bar that can search every single post ever, which works almost immediately. |\n| Privacy | Zulip allows for private streams, private messages, and group private messages. |\n| Long-term Storage | With the premium plan, we are able to keep every single message, as well as 10GB of storage for every single member! |\n\nSince the beginning of the season, we have been using Zulip. In the winter, Zulip had many issues and their Android app was almost completely unusable. Contrary to almost all other messaging platforms and the companies that run them, the **Zulip development team is extremely transparent**. Almost all of their development discussion among workers and volunteers happens on a public Zulip chat server. This means that our members can **report bugs directly to the staff**, and get a reply often within minutes, with a fix implemented in days, sometimes **immediately**.",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/0/0a/T--Washington--ZulipBugs.jpg,Zulip Bug reporting,boxShadow: 5px 5px 10px gray,margin:auto,width:90%",
                "type": "IMAGE"
            },
            {
                "data": "http://2018.igem.org/wiki/images/2/28/T--Washington--Zulipusage.jpg,Zulip usage statistics,boxShadow: 5px 5px 10px gray,margin:auto,width:97%",
                "type": "IMAGE"
            },
            {
                "data": "Figure 4: Our Zulip analytics for the whole season. We reached almost 60,000 messages with an average of 60 users. By the end of our season, we had 44 active members in the team using Zulip.\n\nAfter we stressed the importance of the android app to our team, the lead developers surveyed other teams utilizing Zulip, and greatly prioritized stability of the app. Within a few months, the android app now works as well as the mature desktop app. The **openness** and **accessibility** of the development team was extremely refreshing to our team. We realized that this kind of culture was something to emulate within our iGEM team as well. We strongly recommend Zulip for iGEM teams in the future.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nteamopsandmgmt\nTeam Operations & Management",
                "type": "SPECIAL"
            },
            {
                "data": "# Team Operations and Management\n\nWhen managing a team of over 40 members, it is essential to keep every member engaged, informed, and motivated to contribute to the project. This year, our operations team, comprised of our two Administrative Leads, Andrew Hu and Angel Wong, and our Director of Internal Affairs, Krithi Basu, worked hard with the help of our advisors, Yoshi Goto and Anastasia Nicolov, to ensure that each team member felt comfortable voicing their questions and concerns and was generally excited to be in iGEM. \n\nAt the beginning of the summer, individual check-ins were conducted with every single member on the team. We felt that these check-ins were essential to not only understanding members’ experiences on the team thus far, but also being receptive to new ideas regarding the project or general team structure and operations. During these check-ins, a variety of questions were asked, some specific to members’ subteams and others about understanding of the project, information access and organization on Zulip, and feedback and suggestions for how leadership can better manage the team. At the end of these check-ins, our Director of Internal Affairs had a _26-page document_ compiling each members’ responses, complete with summaries of observations and feedback for every subteam lead to read and adjust their leadership style accordingly. \n\nUpon concluding the check-ins and listening to everyone’s evaluations, it became apparent that there was too much of a divide between subteams--most people had yet to meet every person on the team! This isolation resulted in a lack of communication and awareness of the work in different aspects of the team. The operations team took members’ suggestions for improvement and created a weekly updates stream on Zulip where every subteam lead would post an update every week about what their subteam had accomplished over the week and their goals for the upcoming week. We received lots of positive reactions from members after instituting this stream, indicating that we succeeded in improving communication and awareness across the whole team. Additionally, to further combat isolation between subteams, we began to hold social events, including weekly optional lunches, an Escape Room, and an evening outing at a boba cafe! \n\nThroughout the season, our Director of Internal Affairs performed periodic check-ins with members who became inactive for long periods of time without communication. These check-ins helped determine whether inactive members required more guidance, needed to take a break due to other commitments, or simply lost motivation. The concerns of such members were immediately passed on to the relevant leadership members who would provide more instruction and guidance for how they can continue to contribute. We also created an anonymous team management survey as a sort of virtual check-in at the beginning of fall to collect members’ latest opinions, feedback, questions, and concerns about the way various subteams and the overall team was run through the summer. Based on the responses, some improvements that we will incorporate for the team next season are more frequent all-team meetings, better delegation of work, and stronger communication between leadership and general members. Furthermore, to create a more continuous channel of feedback from team members, we will be creating and advertising an anonymous feedback form throughout the season. \n\nAs this year’s season ends, we have learned that to successfully run a large team, the most important priority is clear and constant communication between each part of the team. For other teams, we recommend the use of individual check-ins, anonymous feedback surveys, weekly updates from all subteams (including administration), and social events to create a positive community where every individual feels comfortable asking questions and expressing any concerns or suggestions for improvement. Such an environment is ideal for optimal learning, collaboration, productivity, and overall fun in an iGEM team! \n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nclass\nClass",
                "type": "SPECIAL"
            },
            {
                "data": "# Class\n\n## Purpose\n\nAt the end of last season, Washington iGEM was left with very few training resources to teach the next season’s new members. As for what was there, our returning members were frustrated with the old training process. The result was a conviction to overhaul the training process for wetlab and drylab going into the next season.\n\n## Classes\n\nWe needed to train members differently based on which team they would be joining, so we created four different classes for our subteams. Each of these classes were run by returning members who had expertise in that area.\n\nWetlab - Angel Wong & Karl Anderson\n\nSoftware - Andrew Hu\n\nHardware - William Kwok\n\nSimulations - Yoshi Goto\n\n## Curriculum\n\nSyllabi:\n\n[Wetlab class](https://docs.google.com/document/d/1ECTl_-AO9TruBBa3VTglOg6EfFbIAS5S5LSUVEm5-fs/edit?usp=sharing)\n\n[Drylab classes](https://docs.google.com/document/d/1qhnRhazDiDUfX2lLycewbArTvVEK0hvELHkfC5zJbjA/edit?usp=sharing)\n\nYou can see the course website for all of the drylab courses [here](http://students.washington.edu/uwigem/18sp/)\n\n## Background\n\nCreating a new class is difficult, as it involves synthesizing learning objectives, curriculum activities, and assessments. If any one of these is not given appropriate consideration, it can create a very unsatisfying learning experience for students. We started to develop the structure by splitting up the classes, creating syllabi, and planning out content one quarter before the classes would start.\n\nThe biggest problem during curriculum development was the fact that we were still figuring out what our project this year would be at that time, meaning that we could not be sure of the best content to teach, especially in the drylab classes. Last year, we recruited many drylab members to work on our hardware/software project: the Chromastat. However, this year, we were unsure if we would use that same project, and if not, we did not know what we would be doing. We guessed early that we would be doing something with microfluidics, in coordination with an early idea for a wetlab project involving aptamers, but this idea was ultimately rejected. As a result, we went into teaching the class with a very general curriculum planned out. Software taught a general software engineering course, Simulations gave an introduction to various techniques and tools in modeling, and Hardware used the Chromastat as an example of biotech hardware and continued to work on it.\n\nWe continually asked for anonymous feedback from students but received relatively little. The suggestions we did receive mostly related to the problems already discussed.\n\nSince students received a grade for the courses, we had to create a rubric to assess their performance over the quarter. It was difficult to validate these scores in an objective way because our curriculum was not structured around exams or homework. Our grades mostly consisted of participation both in class and on the project. We ended up giving full credit to those who always showed up in class and put in the required amount of hours. The more difficult issue to address was determining the grades to give to those who did not meet these standards. We graded attendance and out of class participation linearly based on how much work they did, and then used the University of Washington’s recommended percentage score to GPA conversion table shown below\n",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/9/99/T--Washington--ClassGradingScale.png,Class grading scale,boxShadow: 5px 5px 10px gray,margin:auto,width:80%",
                "type": "IMAGE"
            },
            {
                "data": "## Results\n\nWe were able to get through almost all of the originally planned content across all four of the classes, and we found that some of our pedagogical methods were more effective than others. In particular, students generally responded poorly to lecture-style classes. Additionally, the fact that our generalized curriculum did not directly reference our project for this year caused some members to be confused as to how the content we were teaching them was relevant to our project.\n\nBy contrast, when we gave them self-guided projects, they were forced to become more engaged in the course work to finish the project. However, students were resistant to this more free-form style of learning, meaning that it took more preparation and effort on the teachers’ end.\n\n## Analysis\n\nIn the end, the iGEM class was able to fulfill our original goal of training our new members in a more rigorous and formal setting, but we learned through the process of running the class that iGEM does not necessarily need something as straightforward as a class. \n\nThe classroom is the most structured environment where learning can occur, but humans learn every day, by observing their environment and the people in it. Learning happens long after we leave school, especially in the workplace, whether through official training or self-managed trial and error.\n\nHowever, iGEM as an activity is unstructured by nature: students must organize themselves into a team, find experts to work with, create or adapt a synthetic biology project, learn how to do all of the necessary procedures, do literature review, and execute the project all by themselves, while balancing classes and summer commitments! The ideal iGEM training must match how iGEM itself operates, in an environment driven by the passion and curiosity of the students involved.\n\nNext year, we seek to create a more student-driven training, involving project-based learning. Additionally, any classroom-based instruction should use active learning to engage students to drive the experience. Our teachers will facilitate students experimenting with working on their own, given a framework for a project. Through trial and error they will gain the hands-on experience required to effectively run an iGEM project. This will also address the issue of members being confused as to how the course content would fit into the project. \n\n## Establishment as a Vertically Integrated Project (VIP)\n\nWe originally believed that we would just teach the class ourselves by reserving classroom space as a club, but we found out about a relatively recent project at the UW called Vertically Integrated Projects (VIP), which gives support to hands-on projects for undergraduates. By becoming a VIP, we were able to not only reserve class space, but also give our members graded credits for working in iGEM.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncitations\nCitations",
                "type": "SPECIAL"
            },
            {
                "data": "# Citations\n\n* [https://zulipchat.com/history/](https://zulipchat.com/history/)\n* [https://zulipchat.com/team/](https://zulipchat.com/team/)\n* [https://zulipchat.com/features/](https://zulipchat.com/features/)",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/HP_Design;LEFTNAME=Human Practices Design",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/Team_Development"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=HARDWARE\nBACKGROUND=http://2018.igem.org/wiki/images/6/66/T--Washington--RotaryCad.png\nYPOS=15\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=9\nSUBTITLEHEIGHT=7\nBLUR=3\nMINTITLEHEIGHT=7\nMINPADDINGTOP=120\nPADDINGTOP=120",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\noverview\nOverview",
                "type": "SPECIAL"
            },
            {
                "data": "# Overview\n\nThis year, Washington iGEM has created a **cheap, modular, open source** rotary tool for our Wetlab team. Tube rotators can cost [over $200](http://www.southwestscience.com/STR200_Tube_Rotators.html), even though it is simply a motor attached to a base that is powered by a battery. We designed our system around using [this](https://www.sciencedirect.com/science/article/pii/S2468067216300049?via%3Dihub) open source rotator on ScienceDirect as a starting point. We augmented our device to allow for more control than the original version, by introducing an LCD display and a 3D printed housing unit that accommodate the larger Arduino Uno.",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncadfiles\nCAD Files",
                "type": "SPECIAL"
            },
            {
                "data": "# CAD Files",
                "type": "MARKDOWN"
            },
            {
                "data": "http://2018.igem.org/wiki/images/6/66/T--Washington--RotaryCad.png,CAD Display,boxShadow: 5px 5px 10px gray,margin:auto,width:40%",
                "type": "IMAGE"
            },
            {
                "data": "The ScienceDirect version only provided the printing files, and not files we could easily modify. We chose to print out the original version, take measurements, and reverse engineer the CAD into Autodesk Fusion 360 in order to make the modifications we required. Through iterative design, we came up with this housing that allows the LCD display to sit nicely on the top, and for the internals to be hidden from the user. This design also allows the users enough room to make their own modifications as needed. \n\nThe CAD files can be found [here](http://2018.igem.org/wiki/images/b/b2/T--Washington--RotatorToolFiles.zip).",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP\n",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncode\nCode",
                "type": "SPECIAL"
            },
            {
                "data": "# Code\n\nIn order to control the spinner, we found [code written by Angelo Fiorillo](https://www.hackster.io/i-and-myself/arduino-kitchen-timer-db8ba6) to display output to the LCD screen and modified it slightly to work with our relay. The modified code can be found below (click to expand). ",
                "type": "MARKDOWN"
            },
            {
                "data": "ACCORDION\n===\nCode\n```\n/**************************************************\n * Arduino Rotary UW iGEM 2018\n * \n * Using:\n * Arduino Kitchen Timer v1.0 - 2016/01/27\n * By Angelo Fiorillo (Rome, IT)\n * This work is distributed under the GNU General \n * Public License version 3 or later (GPL3+)\n * Please include this credit note if you want to \n * re-use any part of this sketch. Respect my work \n * as I'll do with yours.\n * Feel free to contact me: afiorillo@gmail.com\n * ************************************************/\n \n#include <LiquidCrystal.h>\n#include <TimeLib.h>\nLiquidCrystal lcd(13,12,2,3,4,5);\n\nlong setupHours = 0;     // How many hours will count down when started\nint setupMinutes = 0;   // How many minutes will count down when started\nint setupSeconds = 0;   // How many seconds will count down when started\ntime_t setupTime = 0;\ntime_t currentTime = 0;\ntime_t pauseTime = 0;\ntime_t startTime = 0;\ntime_t pauseRemainTime = 0;\ntime_t elapsedTime = 0;\n\nlong switchButtonLongPressCounter = 0;\nint switchButtonState = LOW;\nint upButtonState = LOW;\nint downButtonState = LOW;\nint switchButtonPrevState = LOW;\nint upButtonPrevState = LOW;\nint downButtonPrevState = LOW;\nbool switchButtonLongPressed = false;\nbool switchButtonPressed = false;\nbool downButtonPressed = false;\nbool upButtonPressed = false;\n\nconst int MODE_SETUP = 0;\nconst int MODE_RUNNING = 1;\nconst int MODE_COUNTING = 2;\nconst int MODE_PAUSED = 3;\nconst int MODE_RINGING = 4;\n\nint lastMode; //for storing last mode state when paused\nint currentMode = MODE_SETUP;\nint dataSelection = 0;  // Currently selected data for edit (setup mode, changes with Start/Stop)\n                        // 0=hours (00-99) 1=minutes (00-59) 2=seconds (00-59)\n\nvoid setup() {\n  lcd.begin(16, 2);\n  pinMode(8, INPUT); //switchButtonPin\n  pinMode(9, INPUT); //upButtonPin\n  pinMode(10, INPUT); //downButtonPin\n  pinMode(11, OUTPUT); //buzzerPin\n  pinMode(1, OUTPUT); //relay\n}\n\nvoid loop() {\n  switchButtonPressed = false;\n  upButtonPressed = false;\n  downButtonPressed = false;\n  \n//-----BUTTON MANAGEMENT------//\n  //switch/reset button\n  switchButtonPressed = false;\n  switchButtonLongPressed = false;\n  switchButtonState = digitalRead(8); //switchButtonPin\n  if(switchButtonState != switchButtonPrevState)\n  {\n    switchButtonPressed = switchButtonState == HIGH;\n    switchButtonPrevState = switchButtonState;\n  } \n  if(switchButtonState == HIGH) //longpress button management\n  {\n    switchButtonLongPressCounter++;\n    if(switchButtonLongPressCounter == 80)\n    {\n      switchButtonPressed = false;\n      switchButtonLongPressed = true;\n      switchButtonLongPressCounter = 0;\n    }\n  }\n  else\n  {\n    switchButtonLongPressCounter = 0;\n    switchButtonPressed = false;\n    switchButtonLongPressed = false;\n  }  \n\n  //up button\n  upButtonPressed = false;\n  upButtonState = digitalRead(9); //upButtonPin\n  if(upButtonState != upButtonPrevState)\n  {\n    upButtonPressed = upButtonState == HIGH;\n    upButtonPrevState = upButtonState;\n  }\n\n  //downbutton\n  downButtonPressed = false;\n  downButtonState = digitalRead(10); //downButtonPin\n  if(downButtonState != downButtonPrevState)\n  {\n    downButtonPressed = downButtonState == HIGH;\n    downButtonPrevState = downButtonState;\n  }\n  \n//-----MODE MANAGEMENT------//\n  switch(currentMode)\n  {\n    case MODE_SETUP:\n      if(switchButtonLongPressed)\n      {\n        fullReset();\n      }\n      if(digitalRead(6)==HIGH)\n      {\n        currentMode = MODE_RUNNING;\n        startTime = now();\n        setupTime = setupSeconds + (60 * setupMinutes) + (3600 * setupHours);\n      } \n      if(digitalRead(7)==HIGH)\n      {\n        currentMode = MODE_COUNTING;\n        startTime = now();\n\n      }   \n      if(downButtonPressed)\n      {\n        switch(dataSelection)\n        {\n          case 0: // hours\n            setupHours--;\n            if(setupHours == -1)\n            {\n              setupHours = 23;\n            }\n            break;\n          case 1: // minutes\n            setupMinutes--;\n            if(setupMinutes == -1)\n            {\n              setupMinutes = 59;\n            }\n            break;\n          case 2: // seconds\n            setupSeconds--;\n            if(setupSeconds == -1)\n            {\n              setupSeconds = 59;\n            }\n            break;\n        }\n      }\n      \n      if(upButtonPressed)\n      {\n        switch(dataSelection)\n        {\n          case 0: // hours\n            setupHours++;\n            if(setupHours == 24)\n            {\n              setupHours = 0;\n            }\n            break;\n          case 1: // minutes\n            setupMinutes++;\n            if(setupMinutes == 60)\n            {\n              setupMinutes = 0;\n            }\n            break;\n          case 2: // seconds\n            setupSeconds++;\n            if(setupSeconds == 60)\n            {\n              setupSeconds = 0;\n            }\n            break;\n        }\n      }\n      \n      if(switchButtonPressed)\n      {\n        dataSelection++;\n        if(dataSelection == 3)\n        {\n          dataSelection = 0;\n        }\n      }\n      break;\n    case MODE_RUNNING:\n      if(switchButtonPressed)\n      {\n        currentMode = MODE_PAUSED;\n        lastMode = MODE_RUNNING;\n      }\n      if(digitalRead(6)==LOW && digitalRead(7)==LOW)\n      {\n        currentMode = MODE_SETUP;\n      }\n      break;\n    case MODE_PAUSED:\n      if(switchButtonPressed)\n      {\n        currentMode = lastMode;\n      }\n      if(digitalRead(6)==LOW && digitalRead(7)==LOW)\n      {\n        currentMode = MODE_SETUP;\n        reset();\n      }\n      break;\n    case MODE_RINGING:\n      if(digitalRead(6)==LOW && digitalRead(7)==LOW)\n      {\n        currentMode = MODE_SETUP;\n      }\n      break;\n    case MODE_COUNTING:\n      if(switchButtonPressed)\n      {\n        currentMode = MODE_PAUSED;\n        lastMode = MODE_COUNTING;\n      }\n      if(digitalRead(6)==LOW && digitalRead(7)==LOW)\n      {\n        currentMode = MODE_SETUP;\n        currentTime = 0;\n      }\n      break;\n  }\n\n//-----TIME MANAGEMENT------//\n  switch(currentMode)\n  {\n    case MODE_SETUP:\n      // NOP\n      break;\n    case MODE_PAUSED:\n      pauseRemainTime = currentTime;\n      pauseTime = now();\n      break;\n    case MODE_RUNNING:\n      if(pauseRemainTime != 0)\n      {\n        currentTime = pauseRemainTime - (now() - pauseTime);\n        if(currentTime <= 0)\n        {\n          currentMode = MODE_RINGING;\n        }\n      }\n      else\n        currentTime = setupTime - (now() - startTime); \n        if(currentTime <= 0)\n        {\n          currentMode = MODE_RINGING;\n        }\n      break;\n    case MODE_RINGING:\n      analogWrite(11, 20); //buzzerPin is 10\n      delay(250);\n      analogWrite(11, 0); //buzzerPin is 10\n      delay(350);\n      pauseRemainTime = 0;\n      break;\n    case MODE_COUNTING:\n      if(pauseRemainTime != 0)\n      {\n        currentTime =  pauseRemainTime + (now() - pauseTime);\n      }\n      else\n      {\n        currentTime = now()- startTime;\n      }      \n  }\n\n//-----LCD MANAGEMENT------//\n  lcd.setCursor(0, 0);\n  switch(currentMode)\n  {\n    case MODE_SETUP:\n      lcd.print(\"READY    H  M  S\");\n      lcd.setCursor(0, 1);  \n      switch(dataSelection)\n      {\n        case 0:\n          lcd.print(\"HRS\");\n          break;\n        case 1:\n          lcd.print(\"MIN\");\n          break;\n        case 2:\n          lcd.print(\"SEC\");\n        break;\n      }    \n      if (setupMinutes <10) lcd.print(\"0\");\n      lcd.print(setupMinutes);\n      lcd.print(\":\");\n      if (setupSeconds <10) lcd.print(\"0\");\n      lcd.print(setupSeconds);\n      break;\n      \n    case MODE_PAUSED:\n      lcd.print(\"PAUSED   H  M  S\");\n      lcd.setCursor(8, 1);\n      if(hour(currentTime) < 10) lcd.print(\"0\");\n      lcd.print(hour(currentTime));\n      lcd.print(\":\");\n      if(minute(currentTime) < 10) lcd.print(\"0\");\n      lcd.print(minute(currentTime));\n      lcd.print(\":\");\n      if(second(currentTime) < 10) lcd.print(\"0\");\n      lcd.print(second(currentTime));\n    case MODE_RUNNING:\n      lcd.print(\"RUNNING  H  M  S\");\n      lcd.setCursor(0, 1);\n      if(minute(currentTime) < 10) lcd.print(\"0\");\n      lcd.print(minute(currentTime));\n      lcd.print(\":\");\n      if(second(currentTime) < 10) lcd.print(\"0\");\n      lcd.print(second(currentTime));\n      break;\n    case MODE_RINGING:\n      lcd.print(\"   RING-RING!   \");\n      lcd.setCursor(0, 1);\n      lcd.print(\"    TIMES UP    \");\n      break;\n     case MODE_COUNTING:\n      lcd.print(\"COUNTING H  M  S\");\n      lcd.setCursor(0,1);\n      lcd.print(minute(currentTime));\n      lcd.print(\":\");\n      \n      if(second(currentTime) < 10) lcd.print(\"0\");\n      lcd.print(second(currentTime));\n      break;    \n  }\n  delay(10);\n\n  if(currentMode == MODE_RUNNING || currentMode == MODE_COUNTING) digitalWrite(1,HIGH); //relay pin\n  else digitalWrite(1,LOW);\n}\n  \nvoid reset()\n{\n  currentMode = MODE_SETUP;\n  pauseRemainTime = 0;\n  pauseTime = 0;\n}\n\nvoid fullReset()\n{\n  currentMode = MODE_SETUP;\n  setupHours = 0;    \n  setupMinutes = 0;   \n  setupSeconds = 0;   \n  setupTime = 0;\n  currentTime = 0;\n  pauseRemainTime = 0;\n  pauseTime = 0;\n  startTime = 0;\n  elapsedTime = 0;\n}\n\n```",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Parts;LEFTNAME=Parts",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/Hardware"
    },
    {
        "content": [
            {
                "data": "HEADER\nTEXT=INTEGRATED HP\nBACKGROUND=http://2018.igem.org/wiki/images/5/57/T--Washington--Gasworks2.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=8\nSUBTITLEHEIGHT=7\nBLUR=3\nMINPADDINGTOP=120\nMINTITLEHEIGHT=5",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\noverview\nOverview",
                "type": "SPECIAL"
            },
            {
                "data": "# Overview\n\nThis year, we aimed to engage stakeholders, examine our project’s economic and societal implications, and communicate our work effectively and transparently. Our lab work was shaped by our conversations with stakeholders and the public. We spoke with doctors about how vitamin D deficiency affects our local community, interviewed the general public about their perception regarding vitamin D and detection systems, investigated the relevance of CBD detection with evolving regulations, and reached out to Amyris and other companies for ideas on valuable molecular targets that need detection. By taking a holistic approach to our work, we can make a practical difference in our communities.  \n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ninterviews\nInterviews",
                "type": "SPECIAL"
            },
            {
                "data": "# Interviews with Experts on Vitamin D\n\nFirst, we did some initial literature research on Cholecalciferol, or Vitamin D3. Our summary of this work can be found [here](http://2018.igem.org/Team:Washington/Description).\n\nTo learn more about the significance of Vitamin D insufficiency and deficiency, especially in our local community, we interviewed 3 local doctors about their experiences.\nDr. Bradley Anawalt is an endocrinologist & chief of medicine at the University of Washington Medical Center.\nDr. Amy Baernstein is an Internist and Primary Care Physician specializing in Women’s Health at the University of Washington Medical Center.\nDr. Emily Myers is a neurodevelopmental pediatrician at Seattle Children’s Hospital\n\nHere is our interview with Dr. Bradley Anawalt:\n",
                "type": "MARKDOWN"
            },
            {
                "data": "VIDEO\nhttp://2018.igem.org/wiki/images/6/67/T--Washington--Doc1.mp4",
                "type": "SPECIAL"
            },
            {
                "data": "Here is our interview with Dr. Amy Baernstein:",
                "type": "MARKDOWN"
            },
            {
                "data": "VIDEO\nhttp://2018.igem.org/wiki/images/2/29/T--Washington--Doc2.mp4",
                "type": "SPECIAL"
            },
            {
                "data": "**Dr. Emily Myers wrote the following in response to our questions:**\n\n1. How prevalent are the effects of vitamin D deficiency in your own clinical experience?\n\n    _Nearly 100% of my patients are vitamin D insufficient unless they are on supplementation either with vitamin D or on pediasure or other formula. A smaller proportion are vitamin D deficient, I would say 25%. We commonly see the effects of vitamin D deficiency in our clinic, particularly in our nonambulatory patients, with fractures being all too common from decreased bone mineral density._\n\n2. What are the effects of vitamin D deficiency on childhood development (neurodevelopmental or broader)?\n\n    _Vitamin D is an ubiquitously needed vitamin, it is important for brain development and mood. But also critical for bone health. Severe deficiency coupled with Ricketts can lead to seizures (from hypocalcemia) and brain damage._\n\n3. What are some clinical observations on current vitamin D detection methods (i.e. cost, availability, relevance, risks)? What would you like to see in a vitamin D deficiency detection system?\n\n    _We check annual labs on all of our patients who are non-ambulatory, have restricted diets for a variety of developmental or behavioral reasons, or who are at increased nutritional risk. We check vitamin D yearly, and have standardized assessment and treatment recommendations for children in our clinic. I would like to see more standard guidelines across institutions and through the American Academy of Pediatrics to guide clinical care._\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ndiscussingvd\nDiscussing Vitamin D Deficiency",
                "type": "SPECIAL"
            },
            {
                "data": "# Discussing Vitamin D Deficiency with the General Public\n\nTo learn more about public perceptions of vitamin D deficiency, as well as synthetic biology and genetic engineering in general, we conducted interviews at a popular local park. Read more about this project [here](http://2018.igem.org/Team:Washington/Public_Engagement) under _Community Interviews_.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\nartemisinin\nConversations about Artemisinin",
                "type": "SPECIAL"
            },
            {
                "data": "# Conversations about Artemisinin \n\nFirst, we investigated through literature research the importance of artemisinin in the developing world as it is a leading malaria drug. A summary of this work can be found [here](http://2018.igem.org/Team:Washington/Description) under _Artemisinin_.\n\nOur business team also talked extensively with representatives from Amyris, a company based in the Bay Area that pioneered the production of artemisinin using synthetic biology.  You can read about their insight and how it guided our project’s focus [here](http://2018.igem.org/Team:Washington/Entrepreneurship) under _Potential Customer Interviews_.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncannabidiol\nResearch on Cannabidiol",
                "type": "SPECIAL"
            },
            {
                "data": "# Research on Cannabidiol\n\nPrevious work in the Gu lab has developed nanobody CID binders for cannabidiol, or CBD, which are sensitive enough to distinguish between this medicinal component of cannabis and THC, the psychoactive component. This is especially relevant in the United States and Canada, where regulations surrounding CBD and THC are evolving. Thus, the ability to distinguish between them is becoming more important.  A summary of our investigation into CBD can be found [here](http://2018.igem.org/Team:Washington/Description) under _Cannabidiol_.\n\nBecause the CID nanobodies for CBD had already been developed by the Gu lab, our decision to use them in our project and develop parts of this system as biobricks was not influenced by research or interviews we did with stakeholders. However, through discussions with Dr. Gu, we learned that his decision to use CBD as a target for his proof-of-concept CID system was based on CBD’s practical relevance in in our community.  In addition to being able to distinguish between CBD and the structurally-similar THC, a biosensor would also be useful in testing for “counterfeit” CBD products, which are advertised to contain CBD but actually contain little or none.[1]  Such a biosensor would be of interest to manufacturers and sellers, who are often held legally responsible for the quality of their products, but also to law enforcement in areas where CBD is legal but THC is not.\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "SECTION\ncitations\nCitations",
                "type": "SPECIAL"
            },
            {
                "data": "# Citations\n\nOffice of the Commissioner. (n.d.). Public Health Focus - Warning Letters and Test Results for Cannabidiol-Related Products. Retrieved from [here](https://www.fda.gov/newsevents/publichealthfocus/ucm484109.htm)\n",
                "type": "MARKDOWN"
            },
            {
                "data": "SEP",
                "type": "SPECIAL"
            },
            {
                "data": "NAVIGATION\nLEFT=http://2018.igem.org/Team:Washington/Human_Practices;LEFTNAME=Human Practices;RIGHT=http://2018.igem.org/Team:Washington/Collaborations;RIGHTNAME=Collaborations",
                "type": "SPECIAL"
            }
        ],
        "isContent": true,
        "pageTitle": "/Integrated_Human_Practices"
    }
]