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
        "data": "HEADER\nTEXT=LOREM IPSUM\nSUBTITLE=lorem ipsum my duders\nBACKGROUND=http://2018.igem.org/wiki/images/1/1f/T--Washington--LabBG.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\noverview\nOverviewA",
        "type": "SPECIAL"
    }, {
        "data": "# Overview\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur fermentum tortor vitae cursus. Ut convallis ultricies quam, non viverra orci auctor non. In auctor gravida interdum. Pellentesque nec ligula vehicula, porttitor tellus eu, iaculis dolor. Morbi eget faucibus sapien. Donec pretium pellentesque tempus. Aliquam ut ipsum feugiat, dapibus nibh ac, mattis est. Suspendisse a convallis ipsum. Vestibulum erat sem, aliquam mattis lorem id, ornare euismod magna.\n\nDuis laoreet magna at vehicula luctus. Quisque congue purus maximus eros egestas posuere. In eu felis sed sem aliquam dignissim sed vitae risus. Etiam eget tellus dictum enim ultrices gravida eget in ex. Etiam viverra nulla vel varius malesuada. Mauris iaculis lobortis diam, sed eleifend orci vulputate aliquet. Aliquam scelerisque tempus nisl. Integer pharetra, nisl quis feugiat scelerisque, ex justo pretium purus, rhoncus aliquet diam sem eu ligula. Aenean eu turpis vitae neque molestie ornare ac in sem. Nam vitae malesuada velit. Quisque eget bibendum mi. Fusce vitae aliquam eros. Curabitur sodales nibh vitae euismod scelerisque.\n\nAenean at urna vel justo eleifend tempor. Suspendisse rutrum ut odio a condimentum. Nullam vel ex tempus, efficitur justo malesuada, maximus nisl. Donec tincidunt eros et auctor rhoncus. Aliquam erat volutpat. Maecenas eget tempor dolor. Fusce varius quam id nisl scelerisque, eget lobortis enim ornare. Vestibulum ex nisi, convallis et augue sed, dictum ultricies magna. Aliquam erat volutpat. Proin tincidunt tortor sit amet bibendum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam faucibus lectus vitae augue volutpat, vel lacinia nisi aliquet.\n\nVestibulum quis purus vulputate, imperdiet mauris in, congue mi. Sed varius sapien quis rhoncus ultrices. Donec nec molestie libero. Praesent fringilla sagittis arcu, non hendrerit sem iaculis et. Ut hendrerit accumsan ex, ac euismod enim maximus vitae. Vivamus vel dui arcu. Maecenas id felis eget enim tincidunt scelerisque. Nam non pulvinar nisl. Morbi urna libero, elementum eu aliquet non, pellentesque semper nunc. Vestibulum eros nunc, dapibus vel mi eget, scelerisque vehicula augue. Cras at nisi at elit gravida malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nVivamus facilisis justo nisl, eget commodo neque aliquam eu. Morbi ut tempus metus. In sodales commodo tortor, eu finibus odio hendrerit vel. Phasellus aliquet auctor sodales. Etiam vitae justo blandit, pulvinar massa id, vulputate nulla. Donec gravida aliquam purus, ac dapibus leo mollis ut. Pellentesque tempus, augue a efficitur vehicula, libero augue vehicula nibh, vitae posuere magna mi at nunc. Donec varius augue vitae tortor ultricies, nec pellentesque odio condimentum. Cras scelerisque viverra tempus. Donec in arcu a urna eleifend eleifend vitae ac arcu. Proin sed pretium magna.",
        "type": "MARKDOWN"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nsection-1\nVery long section title. Lorem ipsum dolor sit amet, consectetur",
        "type": "SPECIAL"
    }, {
        "data": "# sect 1\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur fermentum tortor vitae cursus. Ut convallis ultricies quam, non viverra orci auctor non. In auctor gravida interdum. Pellentesque nec ligula vehicula, porttitor tellus eu, iaculis dolor. Morbi eget faucibus sapien. Donec pretium pellentesque tempus. Aliquam ut ipsum feugiat, dapibus nibh ac, mattis est. Suspendisse a convallis ipsum. Vestibulum erat sem, aliquam mattis lorem id, ornare euismod magna.\n\nDuis laoreet magna at vehicula luctus. Quisque congue purus maximus eros egestas posuere. In eu felis sed sem aliquam dignissim sed vitae risus. Etiam eget tellus dictum enim ultrices gravida eget in ex. Etiam viverra nulla vel varius malesuada. Mauris iaculis lobortis diam, sed eleifend orci vulputate aliquet. Aliquam scelerisque tempus nisl. Integer pharetra, nisl quis feugiat scelerisque, ex justo pretium purus, rhoncus aliquet diam sem eu ligula. Aenean eu turpis vitae neque molestie ornare ac in sem. Nam vitae malesuada velit. Quisque eget bibendum mi. Fusce vitae aliquam eros. Curabitur sodales nibh vitae euismod scelerisque.\n\nAenean at urna vel justo eleifend tempor. Suspendisse rutrum ut odio a condimentum. Nullam vel ex tempus, efficitur justo malesuada, maximus nisl. Donec tincidunt eros et auctor rhoncus. Aliquam erat volutpat. Maecenas eget tempor dolor. Fusce varius quam id nisl scelerisque, eget lobortis enim ornare. Vestibulum ex nisi, convallis et augue sed, dictum ultricies magna. Aliquam erat volutpat. Proin tincidunt tortor sit amet bibendum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam faucibus lectus vitae augue volutpat, vel lacinia nisi aliquet.\n\nVestibulum quis purus vulputate, imperdiet mauris in, congue mi. Sed varius sapien quis rhoncus ultrices. Donec nec molestie libero. Praesent fringilla sagittis arcu, non hendrerit sem iaculis et. Ut hendrerit accumsan ex, ac euismod enim maximus vitae. Vivamus vel dui arcu. Maecenas id felis eget enim tincidunt scelerisque. Nam non pulvinar nisl. Morbi urna libero, elementum eu aliquet non, pellentesque semper nunc. Vestibulum eros nunc, dapibus vel mi eget, scelerisque vehicula augue. Cras at nisi at elit gravida malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nVivamus facilisis justo nisl, eget commodo neque aliquam eu. Morbi ut tempus metus. In sodales commodo tortor, eu finibus odio hendrerit vel. Phasellus aliquet auctor sodales. Etiam vitae justo blandit, pulvinar massa id, vulputate nulla. Donec gravida aliquam purus, ac dapibus leo mollis ut. Pellentesque tempus, augue a efficitur vehicula, libero augue vehicula nibh, vitae posuere magna mi at nunc. Donec varius augue vitae tortor ultricies, nec pellentesque odio condimentum. Cras scelerisque viverra tempus. Donec in arcu a urna eleifend eleifend vitae ac arcu. Proin sed pretium magna.",
        "type": "MARKDOWN"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "SUBIMAGES\nMAXIMAGESPERROW=3\nDESCRIPTION=Lorem ipsum duis laoreet magna at vehicula luctus. Quisque congue purus maximus eros egestas posuere. In eu felis sed sem aliquam dignissim sed vitae risus.;PICTURE=http://2017.igem.org/wiki/images/f/f6/T--Washington--DesignEnclosure.jpg;XPOS=25;YPOS=25;LINK=http://google.com\nDESCRIPTION=Lorem2 ipsum duis laoreet magna at vehicula luctus. Quisque congue purus maximus eros egestas posuere. In eu felis sed sem aliquam dignissim sed vitae risus.;PICTURE=http://2017.igem.org/wiki/images/f/f6/T--Washington--DesignEnclosure.jpg\nDESCRIPTION=Lorem3 ipsum duis laoreet magna at vehicula luctus. Quisque congue purus maximus eros egestas posuere. In eu felis sed sem aliquam dignissim sed vitae risus.;PICTURE=http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image-300x225.jpg",
        "type": "SPECIAL"
    }, {
        "data": "SUBIMAGES\nMAXIMAGESPERROW=6\nDESCRIPTION=Lorem ipsum duis laoreet magna at vehicula luctus. Quisque congue purus maximus eros egestas posuere. In eu felis sed sem aliquam dignissim sed vitae risus.;PICTURE=http://2017.igem.org/wiki/images/f/f6/T--Washington--DesignEnclosure.jpg;XPOS=25;YPOS=25;LINK=http://google.com\nDESCRIPTION=Lorem2 ipsum duis laoreet magna at vehicula luctus. Quisque congue purus maximus eros egestas posuere. In eu felis sed sem aliquam dignissim sed vitae risus.;PICTURE=http://2017.igem.org/wiki/images/f/f6/T--Washington--DesignEnclosure.jpg\nDESCRIPTION=Lorem3 ipsum duis laoreet magna at vehicula luctus. Quisque congue purus maximus eros egestas posuere. In eu felis sed sem aliquam dignissim sed vitae risus.;PICTURE=http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image-300x225.jpg\nDESCRIPTION=Lorem2 ipsum duis laoreet magna at vehicula luctus. Quisque congue purus maximus eros egestas posuere. In eu felis sed sem aliquam dignissim sed vitae risus.;PICTURE=http://2017.igem.org/wiki/images/f/f6/T--Washington--DesignEnclosure.jpg\nDESCRIPTION=Lorem2 ipsum duis laoreet magna at vehicula luctus. Quisque congue purus maximus eros egestas posuere. In eu felis sed sem aliquam dignissim sed vitae risus.;PICTURE=http://2017.igem.org/wiki/images/f/f6/T--Washington--DesignEnclosure.jpg\nDESCRIPTION=Lorem2 ipsum duis laoreet magna at vehicula luctus. Quisque congue purus maximus eros egestas posuere. In eu felis sed sem aliquam dignissim sed vitae risus.;PICTURE=http://2017.igem.org/wiki/images/f/f6/T--Washington--DesignEnclosure.jpg",
        "type": "SPECIAL"
    }, {
        "data": "TAB\n===\nTITLE OF TAB 1\n# markdown content begins here\n\nasdf\n\nasdf\n\nasdf\n===\nTITLE OF TAB 2\n# markdown content begins here 2\n\nasdf\nasdf\nasdf\nasdf\nasd\nf",
        "type": "SPECIAL"
    }, {
        "data": "This is a test list\n\n* a 123 lorem ipsum\n* b 123 lorem ipsum\n* c 123 lorem ipsum",
        "type": "MARKDOWN"
    }, {
        "data": "SECTION\nsection-2\n2 title!",
        "type": "SPECIAL"
    }, {
        "data": "# sect 2\n\nThis is a ttest testtest test setset est se tse tes tes tset se tse t\n\n1. abc\n2. 123\n3. res",
        "type": "MARKDOWN"
    }, {
        "data": "\n| **Data Type**    | **Example**                        | **Description**                                        |\n|------------------|------------------------------------|--------------------------------------------------------|\n| integer (number) |       ```test\\n test test ```      | Number that does not have a decimal point              |\n| float (number)   | `1.0, 3.1415`                      | Number with a decimal point                            |\n| string           | `\"Hello\", 'hello', \"123\", \"%+1+2\"` | Characters surrounded by quotes ('single' or \"double\") |\n| boolean          | `True, False`                      | Truth values (can only be True or False)               |",
        "type": "MARKDOWN"
    }, {
        "data": "```javascript\nfunction a(a,b) {\n    console.log(a+b);\n}\n```",
        "type": "MARKDOWN"
    }, {
        "data": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg,test,width:100px,margin:auto,border:2px solid red,borderRadius:20,margin:auto,marginTop: 20",
        "type": "IMAGE"
    }, {
        "data": "SECTION\nsection-3\ntest",
        "type": "SPECIAL"
    }, {
        "data": "\n\n\nasdfasdfa\nasdf\nasdf\nasdf\nsadf\nsaf\ndsaf\na\nasdfasdfa\nasdf\nasdf\nasdf\nsadf\nsaf\ndsaf\na\n\nasdfasdfa\nasdf\nasdf\nasdf\nsadf\nsaf\ndsaf\na\n\n\nasdfasdfa\nasdf\nasdf\nasdf\nsadf\nsaf\ndsaf\na\n\n\nasdfasdfa\nasdf\nasdf\nasdf\nsadf\nsaf\ndsaf\na\n",
        "type": "MARKDOWN"
    }, {
        "data": "SECTION\nsection-4\ntest2",
        "type": "SPECIAL"
    }, {
        "data": "a\n \na\n\na\n\na\n \na\n\na\n\na\n \na\n\na\n\na\n \na\n\na\n\na\n \na\n\na\n\na\n \na\n\na\n\na\n \na\n\na\n\na\n \na\n\na\n\na\n \na\n\na\n\na\n \na\n\na\n\na\n \na\n\na\n\na\n \na\n\na\n\n",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/ContentTest"
}, {
    "content": [{
        "data": "HOMEPAGE\nBACKGROUND=http://2018.igem.org/wiki/images/5/58/T--Washington--MB.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=70\nTITLEHEIGHT=12\nSUBTITLEHEIGHT=7\nTITLE=Stronger Together\nSUBTITLE=An efficient, generalizable approach to design biosensors for small molecules\nBUTTONTEXT=Overview\nCONTENTTITLE=Washington iGEM 2018 Project Abstract\nCONTENTSUBTITLE=Chemically Induced Dimerization of Nanobodies for the Development of Versatile Biosensors\nCONTENT=One of the pressing challenges of modern science is the detection of small molecule targets. This has applications in a variety of fields, such as point-of-care diagnostics and metabolic engineering. Although most small molecules can be detected through Enzyme-Linked Immunosorbent Assay (ELISA), accessibility is limited by the time-consuming nature of the procedure. We hope to use a chemically induced dimerization system of nanobodies to detect small molecule targets and apply this system to the development of simple diagnostic assays, such as lateral flow assays or fluorescent microarrays, and innovations in metabolic engineering.;Nanobodies are antibody fragments from single domain antibodies found in camelids and sharks. They are the variable regions of antibodies that are responsible for specific binding to target molecules. Researchers in the Institute for Protein Design (IPD) at the University of Washington have created extensive libraries of phages displaying nanobodies for high throughput screening of binding targets, making them a versatile tool for molecule detection. We have partnered with Dr. Liangcai Gu from the IPD to investigate novel applications of a high-throughput nanobody library numbering ten billion unique types. In our project, we will identify specific nanobodies that bind to desired target molecules of high importance and demonstrate the application of nanobody technology to the development of a biosensor.;Traditionally, monoclonal antibodies have been used to detect specific molecules and used in products such as ELISA kits. However, one significant barrier to developing new monoclonal antibodies is that they require introduction of an antigen to an animal before large scale production can begin. We are bypassing this expensive and time-consuming step and the associated ethical concerns by screening through a pre-existing library of nanobodies to rapidly identify those that can bind desired target molecules with high specificity.;Our team will be screening our nanobody library against two chosen molecules to find binding nanobodies. Then, we will screen the library for secondary nanobodies that bind to the primary nanobody-antigen complex, thus forming a dimer. After identifying these nanobodies, these nanobodies can be fused to other proteins to form biosensors. Specifically, we intend to repurpose activating and DNA binding domain proteins used in yeast 2-hybrid systems to create a transcriptional biosensor.",
        "type": "SPECIAL"
    }],
    "pageTitle": "/TempMain"
}, {
    "content": [{
        "data": "HOMEPAGE\nBACKGROUND=http://2018.igem.org/wiki/images/5/58/T--Washington--MB.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=70\nTITLEHEIGHT=9\nSUBTITLEHEIGHT=5\nTITLE=STRONGER TOGETHER\nSUBTITLE=An efficient, generalizable approach to design biosensors for small molecules\nBUTTONTEXT=Overview\nCONTENTTITLE=Washington iGEM 2018 Project Abstract\nCONTENTSUBTITLE=Chemically Induced Dimerization of Nanobodies for the Development of Versatile Biosensors\nCONTENT=Chemically induced dimerization (CID), in which two proteins dimerize only in the presence of a small molecule, has been widely used to control cell signaling, regulatory, and metabolic pathways, and used as logic gates for biological computation in living mammalian cells. However, few naturally occuring CID systems and their derivatives are currently available. Creating a CID system with desired affinity and specificity for any given small molecule remains an unsolved problem for computational design and other protein engineering approaches. To address this challenge, we have used a novel strategy to select CID binders from a vastly diverse combinatorial nanobody library. We have created new CID systems that can sense cholecalciferol and artemisinin. We are validating CID biosensors by a yeast three-hybrid system and built structural models to understand the small molecule-induced dimerization. Our work is a proof-of-concept that can be generalized to create CID systems for many applications.",
        "type": "SPECIAL"
    }],
    "pageTitle": ""
}, {
    "content": [{
        "data": "HEADER\nTEXT=INTERLAB\nBACKGROUND=http://2018.igem.org/wiki/images/1/1f/T--Washington--LabBG.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "FOURPICTURES",
        "type": "SPECIAL"
    }],
    "isContent": true,
    "pageTitle": "/InterLab"
}, {
    "content": [{
        "data": "HEADER\nTEXT=CraftY GirlZ\nBACKGROUND=http://2018.igem.org/wiki/images/1/1f/T--Washington--LabBG.jpg\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "CRAFTY\nCRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ CRAFTY GIRLZ ",
        "type": "SPECIAL"
    }],
    "pageTitle": "/CraftyGirlz"
}, {
    "content": [{
        "data": "HEADER\nTEXT=Team\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nBLUR=3\nMINPADDINGTOP=120",
        "type": "SPECIAL"
    }, {
        "data": "TEAM\nNAME=Anastasia Nicolov; ROLE=Adviser; PICTURE=http://2018.igem.org/wiki/images/b/bc/T--Washington--AnastasiaTeam.jpg; LINKEDIN=https://www.linkedin.com/in/anastasianicolov/; FILTER=Adviser; BIO=A Seattle native, Anastasia graduated from UW in 2017 with a B.S. in Bioengineering and currently works at Just Biotherapeutics as a bioreactor scientist. As a 5-year iGEM veteran, she acts as adviser to both the Washington and iTesla-SoundBio teams, and was a main organizer of the first-ever Pacific Northwest iGEM Meetup this year.\nNAME=William Kwok; ROLE=Drylab Lead Engineer, Wiki Developer; PICTURE=http://2018.igem.org/wiki/images/0/0c/T--Washington--WilliamTeam.jpg;GITHUB=https://github.com/kwokwilliam; LINKEDIN=https://linkedin.com/in/william-w-kwok/; PERSONAL=https://williamk.info; FILTER=Drylab,Leadership; BIO=Coming from tropical Hawaii, William is a current junior obtaining a BS in Informatics. His focus on the team was to organize the hardware and software teams and programming the Wiki. He currently is a teaching assistant for Client Side Development and works under Dr. Andy Ko in the Code and Cognition Lab. In his spare time, he enjoys playing video games with his friends and programming side projects.\nNAME=Kara de Leon; ROLE=Wetlab, Outreach; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; LINKEDIN=https://www.linkedin.com/in/karadeleon; FILTER=Wetlab, Outreach; BIO= Kara a third-year undergraduate bioengineering student. Driven by care and curiosity, she is passionate in her pursuit of gaining experience in different areas of Bioengineering and promoting diversity and STEM education. She is thrilled that iGEM allows her to do both alongside her hilarious and intelligent teammates in Wetlab and Outreach!\nNAME=Krithi Basu;ROLE=Director of Internal Affairs, Wetlab Member;PICTURE=http://2018.igem.org/wiki/images/b/b2/T--Washington--KrithiTeam.jpg;LINKEDIN=https://www.linkedin.com/in/krithi-basu/;FILTER=Wetlab, Leadership;BIO=Krithi is currently a junior majoring in Bioengineering and minoring in Law, Societies and Justice. This year, her main role as Director of Internal Affairs was to be the communication hub and interface between team members and leadership. She enjoys researching viral immunology, listening to music, talking about social issues, and watching horror movies.\nNAME=Andrew Hu; ROLE=Operational Administrative Lead; PICTURE=http://2018.igem.org/wiki/images/c/ce/T--Washington--AndrewTeam.jpg; GITHUB=https://github.com/andrewhu-uw; LINKEDIN=https://www.linkedin.com/in/andrew-hu/; FILTER=Drylab, Leadership; BIO=Andrew is a third-year Computer Science & Education double major. He led the curriculum team in creating a seminar to help team members prepare for the summer, and serves as an admin lead with Angel Wong.\nNAME=Angie Dang; ROLE=Wetlab, Design; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; FILTER=Design, Wetlab; BIO=Born and raised in Washington, Angie is finishing her fourth year at UW - aiming for a B.A. in Biochemistry. Her role in iGEM was primarily working in lab and illustrating for design projects, such as the Synthetic Biology Activity Booklet. When she's off the clock, Angie is usually catching up on sleep.\nNAME=Joanne Wong; ROLE=Wetlab, Outreach; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; LINKEDIN=https://www.linkedin.com/in/joanneytwong/; FILTER=Wetlab, Outreach; BIO=All the way from Hong Kong, Joanne is currently a junior pursuing Chemical Engineering. Hoping to go into the field of research, she joined iGEM to get a taste of that! Other than that, she loves thinking about food during every waking moment.\nNAME=Chemay Shola;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/5/5d/T--Washington--ChemayTeam.jpg;LINKEDIN=https://www.linkedin.com/in/chemayshola/;FILTER=Wetlab;BIO=Born and raised in southern Washington, Chemay is a current sophomore in the Department of Bioengineering. His focus on the team was to conduct wetlab experiments. In his spare time, he enjoys running, reading, and meditating.\nNAME=Charlie Fisher; ROLE=Wetlab, Design, Presenter; PICTURE=http://2018.igem.org/wiki/images/1/1a/T--Washington--CharlieTeam.jpg; LINKEDIN=https://www.linkedin.com/in/charlie-fisher-028689167/; FILTER=Wetlab, Design, Presenters; BIO=Charlie is a third-year undergraduate student, majoring in electrical engineering. Her passion for physiology drew her to iGEM but the complexity of organisms made her stay. She loves the uncertainty of wetlab experiments and the creative possibilities in design. Catch her on hikes, at coffee shops, or in Boston as one of Washington iGEM’s presenters!\nNAME=Sea-Eun Lee; ROLE=Drylab; PICTURE=http://2018.igem.org/wiki/images/e/ec/T--Washington--SeaEunTeam.jpg; GITHUB=https://github.com/uwigem/Chromastat18/tree/seaeun/src/chromastat18; LINKEDIN= https://www.linkedin.com/in/seaeunlee/; FILTER=Drylab; BIO=Sea-Eun is a current sophomore, pursuing a BS in Computer Science. Her focus was improving the functionality and efficiency of the Chromastat with a small group of individuals. In her spare time, she likes to spend time with her family and friends and work out.\nNAME=Aimee Ellis;ROLE=Wetlab, Outreach, Collaborations;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab, Outreach, Collaborations;BIO=Born in Minnesota and mostly raised in Washington, Aimee is currently a sophomore at the University of Washington intending to major in Biochemistry and Molecular Biology. Her role in iGEM is primarily working in lab and designing lessons for the Synthetic Biology Activity Booklet. In her free time, Aimee enjoys working out, teaching people how to swim, and singing along to current hits on the radio.\nNAME=Sairandri Sathyanarayanan; ROLE=Business, Outreach; PICTURE=http://2018.igem.org/wiki/images/7/77/T--Washington--SairandriTeam.jpg; FILTER=Business, Outreach; BIO=Sairandri Sathyanarayanan is a sophomore majoring in Molecular, Cellular and Developmental Biology. She is primarily involved with the business and outreach teams in iGEM. When she isn't working, she enjoys advocating for mental health, singing and reading.\nNAME=Dallas Warren;ROLE=Simulations, Outreach;PICTURE=http://2018.igem.org/wiki/images/5/50/T--Washington--DallasTeam.jpg;LINKEDIN=https://linkedin.com/in/dallaswarren/;FILTER=Drylab, Outreach; BIO=Dallas is a Washington local and rising senior majoring in Electrical Engineering. As a member of the team he helped develop outreach curriculum and created mathematical models using Tellurium. In his free time he enjoys listening to music.\nNAME=Aerilynn Nguyen; ROLE=Wetlab, Outreach; PICTURE=http://2018.igem.org/wiki/images/5/58/T--Washington--AerilynnTeam.jpg; FILTER=Wetlab, Outreach; BIO=Aerilynn is a senior studying molecular biology. When she isn't in lab, she's helping to organize and volunteer at outreach events with the hopes of making others just as excited about synthetic biology as she is. Aerilynn draws a lot of her inspiration and passion for synthetic biology from the fictional universe of Star Trek. When she's not watching Star Trek, she's working out, playing video games, or hanging out with her dogs.\nNAME=Karl Anderson; ROLE=Project Lead; PICTURE=http://2018.igem.org/wiki/images/e/e7/T--Washington--KarlTeam.jpg;LINKEDIN=https://www.linkedin.com/in/karlbanderson/; FILTER=Wetlab, Leadership; BIO=Karl is a junior studying Biochemistry and Molecular Biology. He has been responsible for overseeing the design and execution of this year’s project as well as managing the wetlab team. He spends a lot of time working in lab, but he also finds days to hike and sail in the Pacific Northwest.\nNAME=Yoshi Goto; ROLE=Adviser, Fundraising Manager; PICTURE=http://2018.igem.org/wiki/images/4/40/T--Washington--YoshiTeam.jpg; GITHUB=https://github.com/Yoshi8765; LINKEDIN=https://www.linkedin.com/in/yoshigoto/; FILTER=Adviser, Drylab; BIO=Yoshi has been involved in iGEM since his sophomore year at the University of Washington. Now three years later, he's still involved in iGEM.\\n Yoshi graduated from the University of Washington with a B.S. in Bioengineering and a minor in Applied Mathematics, specializing in Synthetic and Systems Biology. He now works at SoundBio Lab, Seattle's DIY Biohackerspace. He credits iGEM with that academic and career decision. He also worked at the Sauro lab at UW in the Center for Reproducible Biological Models. He started the simulations team in Team Washington. After being the Admin lead last year, he has now handed off the baton to others and is focusing on Funding for the team. He can't believe how far the team has gotten. He also is an adviser for the iTESLA-SoundBio team, also based in Seattle.\nNAME=Grace Soah-Yeon Kim;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/1/1d/T--Washington--GraceTeam.jpg;LINKEDIN=https://linkedin.com/in/grace-s-kim/;FILTER=Wetlab;BIO=Born and raised in the Greater Seattle Area, Grace is currently a sophomore majoring in Bioengineering. She joined iGEM to explore synthetic biology, learn wetlab techniques, and meet new people. Outside of iGEM, she enjoys researching about immunotherapy and food science, volunteering, hanging out with friends, having movie nights, and trying new food.\nNAME=Joshua Ip; ROLE=Simulations, Presenter; PICTURE=http://2018.igem.org/wiki/images/4/49/T--Washington--JoshuaTeam.jpg; GITHUB=https://github.com/joshuaipwork/; LINKEDIN=https://www.linkedin.com/in/joshua-i-877706128/; FILTER=Simulations, Presenters; BIO= Hailing from Pflugerville, Texas, Joshua is a Bioengineering sophomore intending to join a Bioengineering startup when he graduates. When not studying in the library, he can be found in the Comotion Makerspace working with the 3d printers, laser cutters, and CNC milling machines.\nNAME=Renaldo Sutanto;ROLE=Treasurer, Wetlab;PICTURE=http://2018.igem.org/wiki/images/c/ca/T--Washington--RenaldoTeam.jpg;FILTER=Leadership, Wetlab;BIO=Renaldo is a senior studying Molecular, Cellular, and Developmental Biology and Biochemistry, and minoring in Chemistry and Quantitative Science. His role in iGEM was primarily organizing all the budget that iGEM received from various departments and companies. Outside of iGEM, he either does his own research about parasite, Giardia lamblia, or hanging out with friends.\nNAME=AJ Kruse; ROLE=Business, Fundraising, Adviser; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; GITHUB=https://github.com/aj1118; LINKEDIN=https://www.linkedin.com/in/ajkruse/; FILTER=Business, Fundraising, Adviser; BIO=Studying Bioengineering and Neurobiology, AJ is a junior passionate about harnessing synthetic biology to improve medicine. She also loves entrepreneurship and networking, and can make a mean sales pitch--skills she applied to her work with the business and fundraising teams.\nNAME=Leo Yeh; ROLE=Business; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; LINKEDIN=https://www.linkedin.com/in/feng-yu-y-27142a155/; FILTER=Business; BIO=Leo is a third year undergraduate student majoring in Molecular, Cellular and Developmental Biology. He is primarily involved in the business team in iGEM. He enjoys playing baseball and is a huge New York Yankees fan.\nNAME=Jay Yung;ROLE=Collaborations Lead, Wetlab, Design;PICTURE=http://2018.igem.org/wiki/images/e/e6/T--Washington--JayTeam.jpg;LINKEDIN=https://www.linkedin.com/in/jay-yung-b56101170/;FILTER=Wetlab, Collaborations, Leadership, Design;BIO=Originally from California, Jay is currently a sophomore at the UW planning to major in Plant Biology. His focuses on the team are wetlab, graphic design, and coordinating collaboration efforts between our team and others. Aside from research, he enjoys looking at plants, dancing, playing music, and sleeping more than he should.\nNAME=Janae Chan;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;LINKEDIN=https://www.linkedin.com/in/janaechan;FILTER=Drylab;BIO=Janae is a fourth year bioengineering and computer science student. She is passionate about advancing medicine through technology, and works on designing point-of-care diagnostic systems. On the rare occasion she is not in lab or studying, she enjoys hiking and going on food excursions.\nNAME=Dreycey Albin;ROLE=Drylab Adviser;PICTURE=http://2018.igem.org/wiki/images/d/de/T--Washington--TPhotoDreycey.jpg;GITHUB=https://github.com/Dreycey;LINKEDIN=https://www.linkedin.com/in/dreycey/;FILTER=Drylab, Advisers;BIO=Dreycey Albin is current first year PhD student studying synthetic biology at Rice University. During his time advising for the Washington iGEM team, he was an NIH-funded post-baccalaureate working on using computational and experimental methods for the elucidation of RNA structures in the lab of Dr. Gabriele Varani. Dreycey helped co-teach a UW-affiliated iGEM course focused on simulations in biology, ODEs for modeling biology, while also helping with basic advising. As for his PhD, he is interested in combining hardware (including basic robotics, microcomputers, and microfluidics) with research in synthetic biology. \nNAME=Ed van Bruggen; ROLE=Simulations; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; GITHUB=https://github.com/edvb; FILTER=Drylab, Outreach, Collaborations; BIO=Originally from the bay area, Ed is now a sophomore at UW pursuing a major in physics. He was a lead for the Drylab's Simulations team, in which he created computer models of protein folding using Rosetta. When he's not up all night programming you can find him playing music, cooking, or reading.\nNAME=Ishira Parikh; ROLE=Outreach Lead, Wetlab, Design;PICTURE=http://2018.igem.org/wiki/images/f/fb/T--Washington--IshiraTeam.jpg; FILTER=Outreach, Wetlab, Leadership, Design; BIO= A Washington native, Ishira is a second year undergraduate student hoping to major in neurobiology. This year, Ishira led the outreach team by organizing outreach events and headed the development of the Synthetic Biology Activity Booklet. She was also the main organizer of Washington iGEM’s first-ever synthetic biology panel event and a member of wetlab. Outside of iGEM, Ishira can be found making art, researching the neural mechanisms of breathing, or catching up on sleep.\nNAME=Hannah Redden; ROLE=Design Lead, Simulations; PICTURE=http://2018.igem.org/wiki/images/6/6c/T--Washington--HannahTeam.jpg; LINKEDIN=https://www.linkedin.com/in/hannah-redden-262b8a127/; FILTER=Design, Leadership, Drylab;CUSTSIZE=100; BIO=Hannah is a junior double-majoring in Biochemistry and Bioengineering with a minor in Classical Studies. This year, Hannah developed a design team to explore interactions with art and science and to see how to improve scientific communication using visual methods. She enjoys traveling, reading, swimming, and trying out random craft projects as hobbies.\nNAME=Frances Ingram-Bate; ROLE=Simulations; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; LINKEDIN= https://www.linkedin.com/in/frances-ibe/; FILTER=Drylab; BIO=A Washington native, Frances is a current junior pursuing a B.S. in Bioengineering. As a member of the simulations team, she contributed to mathematical modeling of chemical reaction networks using Tellurium. Outside of iGEM, Frances enjoys working as a math tutor, being involved with undergraduate research, listening to music, and going to improv shows.\nNAME=Angel Wong;ROLE=Project Administrative Lead;LINKEDIN=https://www.linkedin.com/in/angeltanwong/;PICTURE=http://2018.igem.org/wiki/images/a/ac/T--Washington--AngelTeam.jpg;FILTER=Wetlab, Leadership;BIO=Born and raised in sunny Southern California, Angel is currently a junior at UW earning a double degree in Bioengineering and Biochemistry with a minor in Dance. She has been involved in iGEM since her freshman year and served as a presenter for Team Washington at the 2017 Giant Jamboree. This year, Angel helped teach the course to prepare members for summer work and serves as an administrative lead along with Andrew Hu.\\nWhen she is not studying, sleeping, or surfing the iGEM website for the seventh time in the same day to make sure she hasn't missed a deadline, Angel enjoys ballet dancing, stargazing, doing jigsaw puzzles, and chasing pigeons.\nNAME=Rehaan Bhimani;ROLE=Business Team Lead, Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;LINKEDIN=www.linkedin.com/in/rehaanbhimani;FILTER=Drylab, Leadership, Business;BIO=Rehaan is a sophomore hoping to double major in Computer Science and Applied Math. He leads Washington iGEM's business team and is also an engineer on the software team. When he isn't in class or writing code for his research, he loves to read, play guitar, and get those Fortnite victory royales.\nNAME=Richmon Lin;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;GITHUB=https://github.com/RichmonLin;LINKEDIN=https://www.linkedin.com/in/RichmonLin/;FILTER=Drylab;BIO=Richmon is a current sophomore in the Bioengineering department. He works on the hardware subteam and is interested in designing biomedical diagnostic tools. Outside of class he loves to snowboard and play video games.\nNAME=Nicholas Righi;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Drylab;BIO=Nicholas is a Bioengineering sophomore who focused on creating an open source test tube rotator for the Wetlab team. In his free time Nicholas enjoys weightlifting, spending time with friends, and playing Magic the Gathering.\nNAME=Alan Cabrera;ROLE=Wetlab Adviser;PICTURE=http://2018.igem.org/wiki/images/2/2f/T--Washington--AlanPic.jpg;LINKEDIN=https://www.linkedin.com/in/alan-cabrera-241532113;FILTER=Wetlab, Advisers;YPOS=0;BIO=Alan Cabrera was an adviser for the team. He helped during the project planning phase. Using his experimental experience, he stressed the importance of planning, research, and identifying support in project development. Alan is a synthetic biologist with training in the Seelig lab at UW. His hobbies include, competing in collegiate bike racing and roasting coffee. Alan graduated with his Bachelor's in Bioengineering this year, and has started the PhD program in the Bioengineering department at Rice University. He plans to get involved with iGEM at Rice next year. \nNAME=Dr. Herbert Sauro;ROLE=Principle Investigator;PICTURE=http://2018.igem.org/wiki/images/9/99/T--Washington--SauroTeam.jpg;CUSTSIZE=100;YPOS=0;XPOS=50;FILTER=PIs;BIO=Dr. Sauro’s lab has been involved in a number of areas in systems as well as synthetic biology. He imitated the development of SBOL, the synthetic biology open language which is becoming the de facto language for describing synthetic designs. In systems biology he has developed a number of software tools, and standards most recently a Python based kit called Tellurium. He was cofounder of the SBML development teach. His modeling research involves developing new robust methods to develop more reliable predictive models that can simulate diseases such as cancer. Recently, he was appointed to lead a large Center for Reproducible Biomedical Modeling which was also recently awarded by the NIH.\nNAME=Andrew Asakawa;ROLE=Wetlab Lead;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab, Leadership;BIO=\nNAME=Monica Mursch;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=\nNAME=Kateka Seth;ROLE=Simulations;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Drylab;BIO=\nNAME=Adam Alayli;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=\nNAME=Vera Okolo;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Drylab;BIO=\nNAME=Shubhankar Seth;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Drylab;BIO=\nNAME=Victor Lee;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=\nNAME=Kristine Leano;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=\nNAME=Zachary McNulty;ROLE=Simulations;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Drylab;BIO=\nNAME=Debbie Chen;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=",
        "type": "SPECIAL"
    }],
    "pageTitle": "/Team"
}, {
    "content": [{
        "data": "HEADER\nTEXT=PROJECT DESCRIPTION\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=7\nSUBTITLEHEIGHT=7\nBLUR=3\nMINTITLEHEIGHT=5\nMINPADDINGTOP=120\nPADDINGTOP=120",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Description"
}, {
    "content": [{
        "data": "HEADER\nTEXT=DESIGN\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nMINPADDINGTOP=120\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Design"
}, {
    "content": [{
        "data": "HEADER\nTEXT=EXPERIMENTS\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINTITLEHEIGHT=6\nSUBTITLEHEIGHT=7\nMINPADDINGTOP=120\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Experiments"
}, {
    "content": [{
        "data": "HEADER\nTEXT=NOTEBOOK\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nMINPADDINGTOP=120\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Notebook"
}, {
    "content": [{
        "data": "HEADER\nTEXT=MODEL\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Model"
}, {
    "content": [{
        "data": "HEADER\nTEXT=RESULTS\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Results"
}, {
    "content": [{
        "data": "HEADER\nTEXT=PARTS\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nBLUR=3\nMINPADDINGTOP=120",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Parts"
}, {
    "content": [{
        "data": "HEADER\nTEXT=HUMAN PRACTICES\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=9\nMINTITLEHEIGHT=6\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Human_Practices"
}, {
    "content": [{
        "data": "HEADER\nTEXT=COLLABORATIONS\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nMINPADDINGTOP=120\nTEXTHEIGHT=9\nMINTITLEHEIGHT=5\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Collaborations"
}, {
    "content": [{
        "data": "HEADER\nTEXT=PUBLIC ENGAGEMENT\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=8\nMINTITLEHEIGHT=6\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Public_Engagement"
}, {
    "content": [{
        "data": "HEADER\nTEXT=ENTREPRENEURSHIP\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nMINPADDINGTOP=120\nTEXTHEIGHT=9\nMINTITLEHEIGHT=5\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\noverview\nOverview",
        "type": "SPECIAL"
    }, {
        "data": "# Overview\n\nLorem ipsum",
        "type": "MARKDOWN"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nbusinessplan\nBusiness Plan",
        "type": "SPECIAL"
    }, {
        "data": "# Business Plan",
        "type": "MARKDOWN"
    }, {
        "data": "TAB\n===\nSummary\n# Summary\n\nLorem ipsum\n===\nMarket/Industry Analysis\n# Market/Industry Analysis\n\nLorem ipsum\n\na\n\na\n\na\n===\nCurrent Status and Future Development\n# Current Status and Future Development\n\nLorem ipsum\n\na\n\na\n\na\n\na\n\na\n\na\n\na",
        "type": "SPECIAL"
    }, {
        "data": "PDF\nhttp://2018.igem.org/wiki/images/0/0c/T--Washington--PDFContentTest.pdf",
        "type": "SPECIAL"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\ncompanies\nCompanies",
        "type": "SPECIAL"
    }, {
        "data": "# Company Correspondence",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Entrepreneurship"
}, {
    "content": [{
        "data": "HEADER\nTEXT=SAFETY\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Safety"
}, {
    "content": [{
        "data": "HEADER\nTEXT=ATTRIBUTIONS\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3\nMINTITLEHEIGHT=6",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Attributions"
}, {
    "content": [{
        "data": "HEADER\nTEXT=SPONSORS\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nMINPADDINGTOP=120\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Sponsors"
}, {
    "content": [{
        "data": "HEADER\nTEXT=GALLERY\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=12\nSUBTITLEHEIGHT=7\nMINPADDINGTOP=120\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "GALLERY\nsrc=https://via.placeholder.com/300/09f/fff.png;width=300;height=300\nsrc=https://www.blackfootfamilydentistry.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png;width=1920;height=1080\nsrc=https://via.placeholder.com/300/09f/fff.png;width=300;height=300\nsrc=https://www.blackfootfamilydentistry.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png;width=1920;height=1080\nsrc=https://via.placeholder.com/300/09f/fff.png;width=300;height=300\nsrc=https://www.blackfootfamilydentistry.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png;width=1920;height=1080\nsrc=https://via.placeholder.com/300/09f/fff.png;width=300;height=300",
        "type": "SPECIAL"
    }],
    "pageTitle": "/Gallery"
}, {
    "content": [{
        "data": "HEADER\nTEXT=MEDAL REQUIREMENTS\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=8\nSUBTITLEHEIGHT=7\nBLUR=3\nMINPADDINGTOP=120\nMINTITLEHEIGHT=5",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nlorem\nloremip",
        "type": "SPECIAL"
    }, {
        "data": "# Lorem\n\nLorem ipsum",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Medal_Requirements"
}]

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
        names: ["Project Description", "Design", "Experiments", "Notebook", "InterLab", "Model", "Results", "Parts"],
        links: ["/Description", "/Design", "/Experiments", "/Notebook", "/InterLab", "/Model", "/Results", "/Parts"]
    },
    {
        title: "Human Practices",
        names: ["Human Practices", "Collaborations", "Education & Engagement", "Entrepreneurship"],
        links: ["/Human_Practices", "/Collaborations", "/Public_Engagement", "/Entrepreneurship"]
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
