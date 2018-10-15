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
        "data": "ACCORDION\n===\nTITLE OF ACCORDION 1\n![image alt text goes here](http://2017.igem.org/wiki/images/f/f6/T--Washington--DesignEnclosure.jpg)\n\n\ndescription lorem ipsum blah blah\n===\nTITLE OF ACCORDION 2\n![image alt text goes here](http://2017.igem.org/wiki/images/f/f6/T--Washington--DesignEnclosure.jpg)\n\n\ndescription lorem ipsum blah blah",
        "type": "SPECIAL"
    }, {
        "data": "Insert text",
        "type": "MARKDOWN"
    }, {
        "data": "Insert text",
        "type": "MARKDOWN"
    }, {
        "data": "abc",
        "type": "MARKDOWN"
    }, {
        "data": "dc",
        "type": "MARKDOWN"
    }, {
        "data": "Insert text",
        "type": "MARKDOWN"
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
        "data": "http://2018.igem.org/wiki/images/4/4d/T--Washington--TestImage.png,testimage,margin:auto,width:100%",
        "type": "IMAGE"
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
        "data": "TEAM\nNAME=Anastasia Nicolov; ROLE=Adviser; PICTURE=http://2018.igem.org/wiki/images/b/bc/T--Washington--AnastasiaTeam.jpg; LINKEDIN=https://www.linkedin.com/in/anastasianicolov/; FILTER=Adviser; BIO=A Seattle native, Anastasia graduated from UW in 2017 with a B.S. in Bioengineering and currently works at Just Biotherapeutics as a bioreactor scientist. As a 5-year iGEM veteran, she acts as adviser to both the Washington and iTesla-SoundBio teams, and was a main organizer of the first-ever Pacific Northwest iGEM Meetup this year.\nNAME=William Kwok; ROLE=Drylab Lead Engineer, Wiki Developer; PICTURE=http://2018.igem.org/wiki/images/0/0c/T--Washington--WilliamTeam.jpg;GITHUB=https://github.com/kwokwilliam; LINKEDIN=https://linkedin.com/in/william-w-kwok/; PERSONAL=https://williamk.info; FILTER=Drylab,Leadership; BIO=Coming from tropical Hawaii, William is a current junior obtaining a BS in Informatics. His focus on the team was to organize the hardware and software teams and programming the Wiki. He currently is a teaching assistant for Client Side Development and works under Dr. Andy Ko in the Code and Cognition Lab. In his spare time, he enjoys playing video games with his friends and programming side projects.\nNAME=Kara de Leon; ROLE=Wetlab, Outreach; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; LINKEDIN=https://www.linkedin.com/in/karadeleon; FILTER=Wetlab, Outreach; BIO= Kara a third-year undergraduate bioengineering student. Driven by care and curiosity, she is passionate in her pursuit of gaining experience in different areas of Bioengineering and promoting diversity and STEM education. She is thrilled that iGEM allows her to do both alongside her hilarious and intelligent teammates in Wetlab and Outreach!\nNAME=Krithi Basu;ROLE=Director of Internal Affairs, Wetlab;PICTURE=http://2018.igem.org/wiki/images/b/b2/T--Washington--KrithiTeam.jpg;LINKEDIN=https://www.linkedin.com/in/krithi-basu/;FILTER=Wetlab, Leadership;BIO=Krithi is currently a junior majoring in Bioengineering and minoring in Law, Societies and Justice. This year, her main role as Director of Internal Affairs was to be the communication hub and interface between team members and leadership. She enjoys researching viral immunology, listening to music, talking about social issues, and watching horror movies.\nNAME=Andrew Hu; ROLE=Operational Administrative Lead; PICTURE=http://2018.igem.org/wiki/images/c/ce/T--Washington--AndrewTeam.jpg; GITHUB=https://github.com/andrewhu-uw; LINKEDIN=https://www.linkedin.com/in/andrew-hu/; FILTER=Drylab, Leadership; BIO=Andrew is a third-year Computer Science & Education double major. He led the curriculum team in creating a seminar to help team members prepare for the summer, and serves as an admin lead with Angel Wong.\nNAME=Angie Dang; ROLE=Wetlab, Design; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; FILTER=Design, Wetlab; BIO=Born and raised in Washington, Angie is finishing her fourth year at UW - aiming for a B.A. in Biochemistry. Her role in iGEM was primarily working in lab and illustrating for design projects, such as the Synthetic Biology Activity Booklet. When she's off the clock, Angie is usually catching up on sleep.\nNAME=Joanne Wong; ROLE=Wetlab, Outreach; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; LINKEDIN=https://www.linkedin.com/in/joanneytwong/; FILTER=Wetlab, Outreach; BIO=All the way from Hong Kong, Joanne is currently a junior pursuing Chemical Engineering. Hoping to go into the field of research, she joined iGEM to get a taste of that! Other than that, she loves thinking about food during every waking moment.\nNAME=Chemay Shola;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/5/5d/T--Washington--ChemayTeam.jpg;LINKEDIN=https://www.linkedin.com/in/chemayshola/;FILTER=Wetlab;BIO=Born and raised in southern Washington, Chemay is a current sophomore in the Department of Bioengineering. His focus on the team was to conduct wetlab experiments. In his spare time, he enjoys running, reading, and meditating.\nNAME=Charlie Fisher; ROLE=Wetlab, Design, Presenter; PICTURE=http://2018.igem.org/wiki/images/1/1a/T--Washington--CharlieTeam.jpg; LINKEDIN=https://www.linkedin.com/in/charlie-fisher-028689167/; FILTER=Wetlab, Design, Presenters; BIO=Charlie is a third-year undergraduate student, majoring in electrical engineering. Her passion for physiology drew her to iGEM but the complexity of organisms made her stay. She loves the uncertainty of wetlab experiments and the creative possibilities in design. Catch her on hikes, at coffee shops, or in Boston as one of Washington iGEM’s presenters!\nNAME=Sea-Eun Lee; ROLE=Drylab; PICTURE=http://2018.igem.org/wiki/images/e/ec/T--Washington--SeaEunTeam.jpg; GITHUB=https://github.com/uwigem/Chromastat18/tree/seaeun/src/chromastat18; LINKEDIN= https://www.linkedin.com/in/seaeunlee/; FILTER=Drylab; BIO=Sea-Eun is a current sophomore, pursuing a BS in Computer Science. Her focus was improving the functionality and efficiency of the Chromastat with a small group of individuals. In her spare time, she likes to spend time with her family and friends and work out.\nNAME=Aimee Ellis;ROLE=Wetlab, Outreach, Collaborations;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab, Outreach, Collaborations;BIO=Born in Minnesota and mostly raised in Washington, Aimee is currently a sophomore at the University of Washington intending to major in Biochemistry and Molecular Biology. Her role in iGEM is primarily working in lab and designing lessons for the Synthetic Biology Activity Booklet. In her free time, Aimee enjoys working out, teaching people how to swim, and singing along to current hits on the radio.\nNAME=Sairandri Sathyanarayanan; ROLE=Business, Outreach; PICTURE=http://2018.igem.org/wiki/images/7/77/T--Washington--SairandriTeam.jpg; FILTER=Business, Outreach; BIO=Sairandri Sathyanarayanan is a sophomore majoring in Molecular, Cellular and Developmental Biology. She is primarily involved with the business and outreach teams in iGEM. When she isn't working, she enjoys advocating for mental health, singing and reading.\nNAME=Dallas Warren;ROLE=Simulations, Outreach;PICTURE=http://2018.igem.org/wiki/images/5/50/T--Washington--DallasTeam.jpg;LINKEDIN=https://linkedin.com/in/dallaswarren/;FILTER=Drylab, Outreach; BIO=Dallas is a Washington local and rising senior majoring in Electrical Engineering. As a member of the team he helped develop outreach curriculum and created mathematical models using Tellurium. In his free time he enjoys listening to music.\nNAME=Aerilynn Nguyen; ROLE=Wetlab, Outreach; PICTURE=http://2018.igem.org/wiki/images/5/58/T--Washington--AerilynnTeam.jpg; FILTER=Wetlab, Outreach; BIO=Aerilynn is a senior studying molecular biology. When she isn't in lab, she's helping to organize and volunteer at outreach events with the hopes of making others just as excited about synthetic biology as she is. Aerilynn draws a lot of her inspiration and passion for synthetic biology from the fictional universe of Star Trek. When she's not watching Star Trek, she's working out, playing video games, or hanging out with her dogs.\nNAME=Karl Anderson; ROLE=Project Lead; PICTURE=http://2018.igem.org/wiki/images/e/e7/T--Washington--KarlTeam.jpg;LINKEDIN=https://www.linkedin.com/in/karlbanderson/; FILTER=Wetlab, Leadership; BIO=Karl is a junior studying Biochemistry and Molecular Biology. He has been responsible for overseeing the design and execution of this year’s project as well as managing the wetlab team. He spends a lot of time working in lab, but he also finds days to hike and sail in the Pacific Northwest.\nNAME=Yoshi Goto; ROLE=Adviser, Fundraising Manager; PICTURE=http://2018.igem.org/wiki/images/4/40/T--Washington--YoshiTeam.jpg; GITHUB=https://github.com/Yoshi8765; LINKEDIN=https://www.linkedin.com/in/yoshigoto/; FILTER=Adviser, Drylab; BIO=Yoshi has been involved in iGEM since his sophomore year at the University of Washington. Now three years later, he's still involved in iGEM.\\n Yoshi graduated from the University of Washington with a B.S. in Bioengineering and a minor in Applied Mathematics, specializing in Synthetic and Systems Biology. He now works at SoundBio Lab, Seattle's DIY Biohackerspace. He credits iGEM with that academic and career decision. He also worked at the Sauro lab at UW in the Center for Reproducible Biological Models. He started the simulations team in Team Washington. After being the Admin lead last year, he has now handed off the baton to others and is focusing on Funding for the team. He can't believe how far the team has gotten. He also is an adviser for the iTESLA-SoundBio team, also based in Seattle.\nNAME=Grace Soah-Yeon Kim;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/1/1d/T--Washington--GraceTeam.jpg;LINKEDIN=https://linkedin.com/in/grace-s-kim/;FILTER=Wetlab;BIO=Born and raised in the Greater Seattle Area, Grace is currently a sophomore majoring in Bioengineering. She joined iGEM to explore synthetic biology, learn wetlab techniques, and meet new people. Outside of iGEM, she enjoys researching about immunotherapy and food science, volunteering, hanging out with friends, having movie nights, and trying new food.\nNAME=Joshua Ip; ROLE=Simulations, Presenter; PICTURE=http://2018.igem.org/wiki/images/4/49/T--Washington--JoshuaTeam.jpg; GITHUB=https://github.com/joshuaipwork/; LINKEDIN=https://www.linkedin.com/in/joshua-i-877706128/; FILTER=Simulations, Presenters; BIO= Hailing from Pflugerville, Texas, Joshua is a Bioengineering sophomore intending to join a Bioengineering startup when he graduates. When not studying in the library, he can be found in the Comotion Makerspace working with the 3d printers, laser cutters, and CNC milling machines.\nNAME=Renaldo Sutanto;ROLE=Treasurer, Wetlab;PICTURE=http://2018.igem.org/wiki/images/c/ca/T--Washington--RenaldoTeam.jpg;FILTER=Leadership, Wetlab;BIO=Renaldo is a senior studying Molecular, Cellular, and Developmental Biology and Biochemistry, and minoring in Chemistry and Quantitative Science. His role in iGEM was primarily organizing all the budget that iGEM received from various departments and companies. Outside of iGEM, he either does his own research about parasite, Giardia lamblia, or hanging out with friends.\nNAME=AJ Kruse; ROLE=Business, Fundraising, Adviser; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; GITHUB=https://github.com/aj1118; LINKEDIN=https://www.linkedin.com/in/ajkruse/; FILTER=Business, Fundraising, Adviser; BIO=Studying Bioengineering and Neurobiology, AJ is a junior passionate about harnessing synthetic biology to improve medicine. She also loves entrepreneurship and networking, and can make a mean sales pitch--skills she applied to her work with the business and fundraising teams.\nNAME=Leo Yeh; ROLE=Business; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; LINKEDIN=https://www.linkedin.com/in/feng-yu-y-27142a155/; FILTER=Business; BIO=Leo is a third year undergraduate student majoring in Molecular, Cellular and Developmental Biology. He is primarily involved in the business team in iGEM. He enjoys playing baseball and is a huge New York Yankees fan.\nNAME=Jay Yung;ROLE=Collaborations Lead, Wetlab, Design;PICTURE=http://2018.igem.org/wiki/images/e/e6/T--Washington--JayTeam.jpg;LINKEDIN=https://www.linkedin.com/in/jay-yung-b56101170/;FILTER=Wetlab, Collaborations, Leadership, Design;BIO=Originally from California, Jay is currently a sophomore at the UW planning to major in Plant Biology. His focuses on the team are wetlab, graphic design, and coordinating collaboration efforts between our team and others. Aside from research, he enjoys looking at plants, dancing, playing music, and sleeping more than he should.\nNAME=Janae Chan;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;LINKEDIN=https://www.linkedin.com/in/janaechan;FILTER=Drylab;BIO=Janae is a fourth year bioengineering and computer science student. She is passionate about advancing medicine through technology, and works on designing point-of-care diagnostic systems. On the rare occasion she is not in lab or studying, she enjoys hiking and going on food excursions.\nNAME=Dreycey Albin;ROLE=Drylab Adviser;PICTURE=http://2018.igem.org/wiki/images/d/de/T--Washington--TPhotoDreycey.jpg;GITHUB=https://github.com/Dreycey;LINKEDIN=https://www.linkedin.com/in/dreycey/;FILTER=Drylab, Advisers;BIO=Dreycey Albin is current first year PhD student studying synthetic biology at Rice University. During his time advising for the Washington iGEM team, he was an NIH-funded post-baccalaureate working on using computational and experimental methods for the elucidation of RNA structures in the lab of Dr. Gabriele Varani. Dreycey helped co-teach a UW-affiliated iGEM course focused on simulations in biology, ODEs for modeling biology, while also helping with basic advising. As for his PhD, he is interested in combining hardware (including basic robotics, microcomputers, and microfluidics) with research in synthetic biology. \nNAME=Ed van Bruggen; ROLE=Simulations; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; GITHUB=https://github.com/edvb; FILTER=Drylab, Outreach, Collaborations; BIO=Originally from the bay area, Ed is now a sophomore at UW pursuing a major in physics. He was a lead for the Drylab's Simulations team, in which he created computer models of protein folding using Rosetta. When he's not up all night programming you can find him playing music, cooking, or reading.\nNAME=Ishira Parikh; ROLE=Outreach Lead, Wetlab, Design;PICTURE=http://2018.igem.org/wiki/images/f/fb/T--Washington--IshiraTeam.jpg; FILTER=Outreach, Wetlab, Leadership, Design; BIO= A Washington native, Ishira is a second year undergraduate student hoping to major in neurobiology. This year, Ishira led the outreach team by organizing outreach events and headed the development of the Synthetic Biology Activity Booklet. She was also the main organizer of Washington iGEM’s first-ever synthetic biology panel event and a member of wetlab. Outside of iGEM, Ishira can be found making art, researching the neural mechanisms of breathing, or catching up on sleep.\nNAME=Frances Ingram-Bate; ROLE=Simulations; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75; LINKEDIN= https://www.linkedin.com/in/frances-ibe/; FILTER=Drylab; BIO=A Washington native, Frances is a current junior pursuing a B.S. in Bioengineering. As a member of the simulations team, she contributed to mathematical modeling of chemical reaction networks using Tellurium. Outside of iGEM, Frances enjoys working as a math tutor, being involved with undergraduate research, listening to music, and going to improv shows.\nNAME=Angel Wong;ROLE=Project Administrative Lead;LINKEDIN=https://www.linkedin.com/in/angeltanwong/;PICTURE=http://2018.igem.org/wiki/images/a/ac/T--Washington--AngelTeam.jpg;FILTER=Wetlab, Leadership;BIO=Born and raised in sunny Southern California, Angel is currently a junior at UW earning a double degree in Bioengineering and Biochemistry with a minor in Dance. She has been involved in iGEM since her freshman year and served as a presenter for Team Washington at the 2017 Giant Jamboree. This year, Angel helped teach the course to prepare members for summer work and serves as an administrative lead along with Andrew Hu.\\nWhen she is not studying, sleeping, or surfing the iGEM website for the seventh time in the same day to make sure she hasn't missed a deadline, Angel enjoys ballet dancing, stargazing, doing jigsaw puzzles, and chasing pigeons.\nNAME=Hannah Redden; ROLE=Design Lead, Simulations; PICTURE=http://2018.igem.org/wiki/images/6/6c/T--Washington--HannahTeam.jpg; LINKEDIN=https://www.linkedin.com/in/hannah-redden-262b8a127/; FILTER=Design, Leadership, Drylab; BIO=Hannah is a junior double-majoring in Biochemistry and Bioengineering with a minor in Classical Studies. This year, Hannah developed a design team to explore interactions with art and science and to see how to improve scientific communication using visual methods. She enjoys traveling, reading, swimming, and trying out random craft projects as hobbies.\nNAME=Rehaan Bhimani;ROLE=Business Team Lead, Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;LINKEDIN=www.linkedin.com/in/rehaanbhimani;FILTER=Drylab, Leadership, Business;BIO=Rehaan is a sophomore hoping to double major in Computer Science and Applied Math. He leads Washington iGEM's business team and is also an engineer on the software team. When he isn't in class or writing code for his research, he loves to read, play guitar, and get those Fortnite victory royales.\nNAME=Richmon Lin;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;GITHUB=https://github.com/RichmonLin;LINKEDIN=https://www.linkedin.com/in/RichmonLin/;FILTER=Drylab;BIO=Richmon is a current sophomore in the Bioengineering department. He works on the hardware subteam and is interested in designing biomedical diagnostic tools. Outside of class he loves to snowboard and play video games.\nNAME=Nicholas Righi;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Drylab;BIO=Nicholas is a Bioengineering sophomore who focused on creating an open source test tube rotator for the Wetlab team. In his free time Nicholas enjoys weightlifting, spending time with friends, and playing Magic the Gathering.\nNAME=Alan Cabrera;ROLE=Wetlab Adviser;PICTURE=http://2018.igem.org/wiki/images/2/2f/T--Washington--AlanPic.jpg;LINKEDIN=https://www.linkedin.com/in/alan-cabrera-241532113;FILTER=Wetlab, Advisers;YPOS=0;BIO=Alan Cabrera was an adviser for the team. He helped during the project planning phase. Using his experimental experience, he stressed the importance of planning, research, and identifying support in project development. Alan is a synthetic biologist with training in the Seelig lab at UW. His hobbies include, competing in collegiate bike racing and roasting coffee. Alan graduated with his Bachelor's in Bioengineering this year, and has started the PhD program in the Bioengineering department at Rice University. He plans to get involved with iGEM at Rice next year. \nNAME=Dr. Herbert Sauro;ROLE=University of Washington Department of Bioengineering;PICTURE=http://2018.igem.org/wiki/images/9/99/T--Washington--SauroTeam.jpg;CUSTSIZE=100;YPOS=0;XPOS=50;FILTER=PIs;BIO=Dr. Sauro’s lab has been involved in a number of areas in systems as well as synthetic biology. He imitated the development of SBOL, the synthetic biology open language which is becoming the de facto language for describing synthetic designs. In systems biology he has developed a number of software tools, and standards most recently a Python based kit called Tellurium. He was cofounder of the SBML development teach. His modeling research involves developing new robust methods to develop more reliable predictive models that can simulate diseases such as cancer. Recently, he was appointed to lead a large Center for Reproducible Biomedical Modeling which was also recently awarded by the NIH.\nNAME=Dr. Liangcai Gu;ROLE=University of Washington Department of Biochemistry;PICTURE=http://2018.igem.org/wiki/images/2/20/T--Washington--GuTeam.jpg;CUSTSIZE=100;YPOS=25;XPOS=50;FILTER=PIs;BIO=Dr. Gu's lab use quantitative protein interaction profiling to understand molecular recognition and guide computational protein design. They develop protein interaction sequencing technologies by coupling ‘protein barcoding’ techniques—e.g., molecular attachment of proteins to barcoding DNAs, display of proteins on phage or cell surfaces, and indirect barcoding of unlabeled proteins by using DNA barcoded affinity reagents such as antibodies—to massively parallel 'in situ DNA sequencing' to quantitate protein interactions at a single-molecule or single-cell level. One example of protein interaction sequencing is a single-molecular-interaction sequencing (SMI-seq) technology (Gu, et al., Nature, 2014) for large-scale molecular counting of proteins and complexes. Our current research interests include (1) engineering of ligand-responsive protein assemblies, (2) human protein interactome profiling and drug screening, and (3) functional profiling of B-cell and T-cell receptors.\nNAME=Andrew Asakawa;ROLE=Lab Manager;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab, Leadership;BIO=Andrew is a junior majoring in Bioengineering. This year he was responsible for training new members at the beginning of the season, helping to manage the lab space and safety, and creating biobricks. Outside of iGEM he spends his time making and drinking coffee, cooking, and exploring the Seattle.\nNAME=Monica Mursch;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=\nNAME=Kateka Seth; ROLE=Simulations; PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Drylab;BIO=Kateka is a current junior double majoring in Biochemistry and Informatics. In the Simulations team, she worked to generate protein models using Rosetta. In her spare time she enjoys playing the guitar and hiking around Washington.\nNAME=Adam Alayli;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=\nNAME=Vera Okolo;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/7/7d/T--Washington--VeraTeam.jpg;FILTER=Drylab;BIO=Vera is a fourth year at the University of Washington double majoring in Molecular, Cellular, & Developmental Biology and Medical Anthropolgy & Global Health. Her role in iGEM was the contributing to the research for the beginnings of an educational game for elementary students as well as interviewing members of the public for their opinions on the growing field of synthetic biology. In spare moments of time, she reads any and all genres of books, bakes macarons, and practices singing and playing the piano.\nNAME=Shubhankar Seth;ROLE=Drylab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Drylab;BIO=\nNAME=Victor Lee;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=\nNAME=Kristine Leano;ROLE=Wetlab, Collaborations;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab, Collaborations;BIO=Kristine is a senior studying for a BS in Biochemistry. She performs lab tasks with the Wetlab team and led international collaborations with teams in Europe. In her spare time, she likes to learn languages, dance hip hop, and meet new people.\nNAME=Zachary McNulty;ROLE=Simulations;GITHUB=https://github.com/zackmcnulty/;LINKEDIN=https://www.linkedin.com/in/zacharymcnulty/;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Drylab;BIO=Zachary McNulty is a Junior majoring in Applied Computational Mathematical Sciences. He worked on modeling the chemical networks relevant to the team's project in Tellurium. His interests lie in computational biology with a focus on its applications in synthetic biology and neuroscience.\nNAME=Debbie Chen;ROLE=Wetlab;PICTURE=http://2018.igem.org/wiki/images/d/d9/T--Washington--HLogo1.png;CUSTSIZE=75;FILTER=Wetlab;BIO=",
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
        "data": "SECTION\npnwmeetup\nPacific Northwest iGEM Meetup",
        "type": "SPECIAL"
    }, {
        "data": "# Pacific Northwest iGEM Meetup",
        "type": "MARKDOWN"
    }, {
        "data": "http://2018.igem.org/wiki/images/3/3d/T--Washington--PNWMeetup.png,Pacific Northwest iGEM Meetup,boxShadow:5px 5px 10px gray, margin:auto, width:60%",
        "type": "IMAGE"
    }, {
        "data": "For the first time ever, the Washington iGEM hosted an iGEM meetup for Pacific Northwest teams on August 18-19. The Tacoma RAINMakers and the iTESLA-SoundBio teams participated in the event and made new connections with their fellow iGEM members. The event included a keynote speaker, a biotechnology industry panel, TEDx style guest talks, a talk given by the North American iGEM ambassadors, workshops, and an outreach event. Teams were also given an opportunity to practice their presentation for jamboree during a practice presentation session. In addition, teams were able to practice their poster presenting skills during an open poster presentation.\n\nOur meetup booklet can be viewed [here](https://google.com).\n\n## Meet the teams:\n\n* [Tacoma RAINmakers](http://2018.igem.org/Team:Tacoma_RAINmakers)\n\n* [iTesla-SoundBio](http://2018.igem.org/Team:iTesla-SoundBio)",
        "type": "MARKDOWN"
    }, {
        "data": "## Keynote Speech",
        "type": "MARKDOWN"
    }, {
        "data": "http://2018.igem.org/wiki/images/7/78/T--Washington--CollabKeynoteSpeech.png,Cindy Wu's keynote speech,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
        "type": "IMAGE"
    }, {
        "data": "[Link to her talk](TODO)\n\n\n\nWe were honored to have Cindy Wu, and Washington iGEM alum and co-founder of Experiment, a crowdfunding platform for scientific research as our keynote speaker. Cindy Wu’s keynote focused on the idea of “democratizing science” by opening up avenues of funding through crowdfunding via her startup, [Experiment.com](https://experiment.com/).",
        "type": "MARKDOWN"
    }, {
        "data": "## Biotechnology Panel",
        "type": "MARKDOWN"
    }, {
        "data": "http://2018.igem.org/wiki/images/2/2d/T--Washington--Panel.png,Biotechnology panel,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
        "type": "IMAGE"
    }, {
        "data": "[Link to a video of the panel](TODO)\n\n\n\n## Description\n\nThe biotech panel included four leaders in the local startup and DIY Bio community, including three Washington iGEM alumni.  They spoke about their experiences in academia, industry, non-profits, and what it was like starting their own endeavors.  Some of the questions included:\n* What’s your educational background?  Tell us a little bit about who you are, where you came from, how you got the idea to start your own organization or company.\n* What does your company do; what are the main goals?\n* We heard from Cindy about why she decided to start Experiment, but for the others, what motivated you in the beginning?\n* Where do you see your company/organization in 5 years?\n* What inspired you to do what you do? What excites you most about your field of work?  \n* For each of you, what are the biggest challenges you’ve faced?  Was there ever a time you wanted to give up?\n* What worries do you have about the future of your field?\n* What fascinates or concerns you most about citizen science?\n\n## Speakers",
        "type": "MARKDOWN"
    }, {
        "data": "SUBIMAGES\nMAXIMAGESPERROW=4\nDESCRIPTION=Dr. Ingrid Pultz, Washington iGEM alum, PVP Biologics;PICTURE=http://2018.igem.org/wiki/images/c/c0/T--Washington--Ingrid.png;XPOS=50;YPOS=50\nDESCRIPTION=Dr. David Younger, Washington iGEM alum, A-Alpha Bio;PICTURE=http://2018.igem.org/wiki/images/5/5e/T--Washington--David.png\nDESCRIPTION=Cindy Wu, Washington iGEM alum, Experiment.com;PICTURE=http://2018.igem.org/wiki/images/5/5b/T--Washington--CindyWu.png\nDESCRIPTION=Regina Wu, SoundBio Lab;PICTURE=http://2018.igem.org/wiki/images/4/45/T--Washington--Regina.png",
        "type": "SPECIAL"
    }, {
        "data": "## Guest Talks",
        "type": "MARKDOWN"
    }, {
        "data": "### Roya Amini-Naieni\n\nWashington iGEM alum, Harvey Mudd College class of 2021",
        "type": "MARKDOWN"
    }, {
        "data": "http://2018.igem.org/wiki/images/e/ec/T--Washington--RoyaTalk.png,Roya's talk on her experiences in iGEM,boxShadow: 5px 5px 10px gray,margin:auto,width:60%",
        "type": "IMAGE"
    }, {
        "data": "[Link to her talk](TODO)\n\nRoya talked about her experiences in iGEM as a high schooler and her journey to establishing a “biohackerspace” at Harvey Mudd.",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Collaborations"
}, {
    "content": [{
        "data": "HEADER\nTEXT=PUBLIC ENGAGEMENT\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=8\nMINTITLEHEIGHT=6\nMINPADDINGTOP=120\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\noverallfocus\nOverall Focus",
        "type": "SPECIAL"
    }, {
        "data": "# Overall Focus",
        "type": "MARKDOWN"
    }, {
        "data": "SECTION\nevents\nEvents",
        "type": "SPECIAL"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "# Events",
        "type": "MARKDOWN"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nbooklet\nSynthetic Biology Activity Booklet",
        "type": "SPECIAL"
    }, {
        "data": "# Synthetic Biology Activity Booklet\n\nWashington iGEM’s Synthetic Biology Activity Booklet aims to embrace the spirit of iGEM by making scientific learning more accessible internationally. We spent more than 100 hours writing and graphically illustrating our 100+ page activity booklet. Although none of the members who wrote and illustrated this booklet are studying graphic design, we taught ourselves Adobe Illustrator to create informative and eye-catching visuals to make learning easier, especially for English Language Learners and children with disabilities. \n\nAfter writing our activity booklet, we collaborated with other iGEM teams to translate our booklet into languages such as Spanish, Vietnamese, French, and Hindi. Through the translations, we hope to provide copies of our activities to students in their native language, both in the Seattle area (for English Language Learners) and internationally.\n\nAdditionally, our curriculum has already been distributed to several schools in the Seattle area as well as a school in India. We will also be meeting a UW professor in November to review our curriculum and ensure that it is ideal for effectively teaching synthetic biology to students from diverse backgrounds.\n\n## Quotes from Some Writers of the Booklet:\n* \"I don’t know about you guys, but I couldn’t read up to the fourth grade because I’m dyslexic. I would have loved having visual activities when I was younger. This is why I am so proud of our lessons for younger kids like the Lego DNA/Jellybean Peptide Activity and the Gel Electrophoresis Bunny Activity. These activities do an amazing job illustrating the concepts, allowing people who have a hard time reading have a better understanding of what is going on since they have visual diagrams and clues to follow along with while doing the activity.\" ~ Aimee Ellis\n\n* \"As awesome as synthetic biology is, or more broadly speaking - biology, it might not be for everyone. If you want to engage an audience you have to make them actively involved and not just lecture at them - this is especially true for younger groups. There are lots of textbooks out there that can teach people about biology, but not a lot of them are meant for the purpose of active learning. Our activity booklet is meant to get students actively involved and excited about biology no matter what kind of background they come from. Biology can be and IS for everyone.\" ~ Aerilynn Nguyen\n\n* \"Having grown up in a suburban “bubble” in the Seattle metropolitan area, I was shocked to learn about the inequities in the education system so close to my home. As I was looking at the statistics for students that received free and reduced lunch at potential schools that we were going to visit, the website would often compare the high percentage at those schools with the low percentage of students that needed free or reduced lunch at schools in the school district that I attended. This astonishing revelation was at the core of my desire to make scientific learning more equally accessible with the formation of this booklet.\" ~ Ishira Parikh\n\n## External links to the booklet (hosted on Google Drive)\n* [English](https://drive.google.com/file/d/1QTV1T5mVoGVDJiceAqnrysdved8rScxp/view)\n",
        "type": "MARKDOWN"
    }, {
        "data": "SECTION\nsitdownwithsynbio\nSit Down with Synbio",
        "type": "SPECIAL"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "# Sit Down with Synbio",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Public_Engagement"
}, {
    "content": [{
        "data": "HEADER\nTEXT=ENTREPRENEURSHIP\nBACKGROUND=http://2018.igem.org/wiki/images/8/80/T--Washington--Banner.png\nXPOS=50\nYPOS=25\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nMINPADDINGTOP=120\nTEXTHEIGHT=9\nMINTITLEHEIGHT=5\nSUBTITLEHEIGHT=7\nBLUR=3",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\noverview\nOverview",
        "type": "SPECIAL"
    }, {
        "data": "http://2018.igem.org/wiki/images/f/fb/T--Washington--BusinessTeamLogo.png,SynSensora Logo,margin:auto",
        "type": "IMAGE"
    }, {
        "data": "# Overview\n\nWashington iGEM’s business team is comprised not of business people or venture capitalists, but rather scientists and engineers passionate about bridging the gap between industry and the lab, thus enabling us to bring a unique perspective to our business endeavors.  We feel that while research is a positive avenue for new discoveries, additional entrepreneurship that brings our team’s product to the market will drastically increase the impact of our project. As our novel nanobody detection systems could catalyze powerful improvements in healthcare and research practices, Washington iGEM has created a business plan for a potential company called SynSensora. We envision SynSensora to be a startup company that provides small molecule detection systems to institutions and biotech companies for use in metabolic engineering, point of care diagnostics, and cell therapies.\n\n\nOur business team is collaborating with the Institute for Protein Design and a business mentor from the Buerk Center for Entrepreneurship at the University of Washington to develop not only biotechnology that will be valuable in market, but also a detailed business model detailing our plan to bring our venture to fruition. Our team has met with several potential customers, including Lumen Bioscience and the Institute for Systems Biology, and has received sponsorships from GenScript, PVP Biologics, and the Institute for Protein Design. We have learned much about business models and intellectual property protection, and our team is working with the Institute for Protein Design to establish a provisional patent for our SynSensora’s research and development protocol.\n\nSynSensora’s products are based on biological detection systems that take advantage of chemically induced dimerization, a process in which two proteins bind together in the presence of a specific molecule. SynSensora detection systems would be used for small molecules, which are historically much more difficult to detect than proteins. These detection systems range from point of care diagnostics to transcriptional biosensors for metabolic pathway optimization. As our team is currently investigating nanobody-based detection systems targeting Vitamin D3 and Artemisinin while also developing a biosensor for CBD, these proof of concept studies will lay the foundation for SynSensora’s product line. The positive feedback we received from potential customers lends confidence to the efficacy of our technology and encourages the expansion of our library of molecules for which we would develop sensors. Ultimately, SynSensora would provide efficient and affordable small molecule detection systems for its customers as well as custom system development. Using an incredibly diverse nanobody library containing around 10^9 variant binders from our partner, the Institute for Protein Design, we could theoretically create detection systems for any small molecule. Thus, as customers request specialized detection systems for various small molecules, our product line would grow. Our established products would be sold a la carte, and our custom development service would range in price depending on the product constraints and development cost.\n\nOur business team has synthesized research from potential customer interviews, database resources, and meetings about intellectual property to develop a plan to make SynSensora a reality. SynSensora has the potential to set a new standard for healthcare and research with affordable and effective small molecule biological detection systems.\n",
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
        "data": "TAB\n===\nSummary\n# Summary\n\nThe business plan below is a thorough explanation of SynSensora that includes SynSensora’s purpose and motivation, strengths and weaknesses, operations, products, and our proposal on how to bring those products to market. It includes in depth analyses of several markets that SynSensora products will join and the opportunities and barriers to entry for each market. It also includes an industry analysis of SynSensora’s main competitors with comparisons of the strengths and weaknesses of each company. We have used this research to develop strategies for expanding SynSensora and generating revenue and profit. For ease of access, this page also includes key highlights of the business plan including a concise overview of our market and industry research findings as well as the current status and intended future development of SynSensora.\n\nOur business team used database resources from the University of Washington Buerk Center for Entrepreneurship to conduct in depth market and industry research. We also obtained guidance from the Gu lab at the Institute for Protein Design to ensure that our products and proposed manufacturing techniques were scientifically accurate. Additionally, we received feedback on initial drafts of our business plan from Dirk Smith, a biotech entrepreneur and previous scientific director at Amgen, whom we connected with via the MentorConnect program through the Buerk Center for Entrepreneurship.\n\n===\nIndustry Analysis\n# Industry Analysis\n\nOur company’s nanobody CID technology will translate into innovative tools for point of care (POC) diagnostics, metabolic engineering and pathway optimization, and the programming of therapeutic cells--all of which are lucrative, rapidly expanding sectors in industry. While the diverse applications of our product increase our number of competitors, they also enhance the company’s stability and flexibility by enabling us to utilize gains from less competitive markets to support efforts in more aggressive ones. Thus, concerning existing barriers to entry, due to the presence of both older companies with established substitutes and fresh start-ups with new technologies, our business will have to invest considerable time and effort into convincing customers to choose our more effective methods and products instead of other well-known approaches. Additionally, before we establish a strong market foothold with solid buyer trust, it will be crucial to set competitive pricing to attract buyers away from existing alternatives. Product prices should be flexible depending on the context of each deal and the amount of leverage we have compared to the buyer, with knowledgeable customers in larger markets possessing the most leverage and less savvy consumers in smaller markets having the least. \n\n| Strengths | Weaknesses |\n|-|-|\n| Diverse skill set | New market: must establish brand |\n| Product and market expertise | Steep learning curve for entering competitive target markets |\n| Product development: guidance from expert in field | Technology still new and undergoing R&D |\n| IP Patent-protected new technology: foundation for strong, unique pipeline structure/diverse array of services | Novel production methods will require considerable effort to perfect and scale up |\n\n| Opportunities | Threats |\n|-|-|\n| Novel technology can set new expectations, serve unique niche needs | Government regulations                                                    |\n| Rapidly expanding markets: biosensors, point of care diagnostics and cell therapy | High initial investment for equipment, materials, etc. |\n| Potential for expansion of product line - custom antibody service | Existing biotech companies with alternative methods                       |\n| Increased sensitivity and selectivity for detection of small analytes compared to current methods | Customer reluctance to try unknown products when older proven tech exists |\n===\nMarket Analysis\n# Market Analysis\nOur technology serves four rapidly expanding markets: biosensors, point of care diagnostics, cell therapies, and custom antibody services.\n\n## Biosensors\nInnovation in biosensors is an ongoing process that has application in new markets such as security, military biodefense, and automotive and aerospace industries. The main contributor to this market is research and development and the need to develop new platforms for accurate, highly sensitive and pain-free diagnostic biosensors. The market for biosensors is categorized as a growth market, with the amount of potential applications increasing as more novel biosensor technologies emerge. According to BCC Research, the global market for biosensors, valued at nearly $5.7 billion in 2017, is expected to increase to more than $6.3 billion in 2018 and to more than $12.1 billion in 2023, for a compound annual growth rate (CAGR) of 14.0% over the five-year period from 2018 through 2023.\n\n## Point of Care Diagnostics\nThe market for point of care diagnostics is quickly growing due to increasing investment in research and development, advancement of diagnostic laboratories, and adoption of automated lab systems.  According to Market Research Future, there is a healthy growth rate at a CAGR of 9.5% during a forecast period till 2023.  The market is segmented by types of products and by end users. Some of the types of products include glucose testing, cardiac makers, HbA1c testing and coagulation. Examples of end users include clinics, hospitals and home care.\n\n## Cell Therapy\nAnother market that we cater to is cell therapy. Using the tools of synthetic biology, we now have the technology to engineer our own body’s cells to respond to diseases that could impede our immune system. However, excessive immune activity and poor control over engineered T cells can cause severe toxicities. Our technology has the potential to address these problems and transform the cell therapy market. \n \n## Custom Nanobody Products\nBecause of the novelty of our nanobody products, our company is expanding our product line by manufacturing custom assays based on requests for specific target molecules. According to reports from BCC research, the global market for custom antibody service was estimated at $252 million in 2016 and is expected to grow to $424 million in 2022, with a 9.0% five year CAGR. This growth is mainly due to the lack of specific antibodies that are needed in large quantity, as the demands are usually higher in industrial settings. This lack of large supply benefits the custom antibody service companies that can provide a stable and reliable source of antibodies.\n\n===\nCurrent Status and Future Development\n# Current Status and Future Development\n\nSo far, our team has successfully identified nanobody binders for artemisinin and cholecalciferol from a large combinatorial library of nanobodies. The gene constructs of these nanobodies would be Synsensora’s minimal viable product for our target molecules. Additionally, we have characterized nanobodies for a biosensor for cannabidiol (CBD) using computer simulations, thus demonstrating SynSensora’s ability to optimize products. These studies are a proof of concept for our research and development strategy.\n\nFor the future, we would plan to expand our product base by commercializing the service of customizing nanobody binders. This can be done by communicating with interested companies to not only select target molecules for product development, but also to spread SynSensora’s influence to more customers. We are continuing our research and development for full products for artemisinin, cholecalciferol, and CBD before expanding Synsensora’s product base to other target molecules.",
        "type": "SPECIAL"
    }, {
        "data": "PDF\nhttp://2018.igem.org/wiki/images/5/5e/T--Washington--BusinessPlan.pdf",
        "type": "SPECIAL"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\npcinterviews\nPotential Customer Interviews",
        "type": "SPECIAL"
    }, {
        "data": "# Potential Customer Interviews\n\nIn order to understand the market for SynSensora’s products and the needs of our potential consumers, our team met with several companies and institutions to discuss nanobody detection systems and their potential applications in the research of each organization as well as to learn about the science and manufacturing processes that could aid in SynSensora’s development. The organizations that we communicated with are Lumen Bioscience, the Institute for Systems Biology, Just Biotherapeutics, and Amyris. The first three organizations are located in the Seattle area, and the last organization is in California, where one of our team members has personal connections. We learned a great deal about how nanobody and CID-based detection systems can aid our potential customers in metabolic engineering and point of care diagnostics along with manufacturing and development techniques that could help expand SynSensora. To read what we learned from each individual organization, please click on the tabs below.",
        "type": "MARKDOWN"
    }, {
        "data": "TAB\n===\nLumen BioScience\n# Lumen BioScience\n\n![Lumen BioScience Logo](http://2018.igem.org/wiki/images/9/96/T--Washington--LumenLogo.jpg)\n\nTo evaluate the marketability of SynSensora’s nanobody products, we discussed nanobody detection systems with scientists from a Seattle biotech startup company: Lumen Bioscience. Lumen Bioscience is a company that uses spirulina, a cyanobacterium, to produce biologics such as dyes and oral vaccines for fish.\n\nWe met with Dr. Jim Roberts, the Chief Scientific Officer, as well as other scientists from Lumen Bioscience. The researchers were already familiar with nanobodies but had never considered their use in metabolic engineering or point of care diagnostics. After our wetlab leads explained the science and applications of chemically induced dimerization (CID) of nanobodies, they were excited about the great potential of such a versatile technology. However, the researchers did express concern that the CID system would not work with Vitamin D3, one of our target molecules, because of its nonrigid structure.\n\nWhen asking the researchers at Lumen Bioscience how they would use a CID detection system, they proposed utilizing a nanobody CID system as a biosensor for microcystin, a class of toxins that all cyanobacteria products must be tested for because it is harmful to humans. They expressed their frustration with the microcystin testing process because although their products never have any trace of the toxin due to the manufacturing process, they must have a third party test their products to comply with legal regulations. Having an accurate biosensor would allow them to test their own products at a lower cost. This microcystin biosensor could also be used to measure water cleanliness, as cyanobacteria presence is used as a unit of water cleanliness (the more cyanobacteria, the less clean the water). They also were confident that nanobody CID systems could be applied in metabolic pathway optimization.\n\nThe scientists at Lumen Bioscience was very impressed by our project and were interested in keeping in touch. They sent us papers about small molecule biosensor construction and transcriptional biosensors used for metabolic engineering. Our visit to Lumen Bioscience helped us identify possible applications and limitations of SynSensora’s products and gave us a new, professional perspective on nanobody CID detection systems.\n\n![Lumen BioScience Visit](http://2018.igem.org/wiki/images/thumb/7/73/T--Washington--LumenVisit.jpg/800px-T--Washington--LumenVisit.jpg)\n===\nInstitute of Systems Biology\n# Institute of Systems Biology\n\n![ISB Logo](http://2018.igem.org/wiki/images/a/a3/T--Washington--ISBLogo.png)\n\nThe Washington iGEM Business Team had the opportunity to meet with Dr. Nitin Baliga, the Senior Vice President, Director and Professor at the Institute for Systems Biology (ISB) in June 2018. Dr. Baliga’s lab builds predictive models of complex biological phenomena that can be used to guide cells to perform a variety of functions such as fighting off infectious disease, generating clean energy, and remediating the environment. Through this opportunity, we were able to gain insight about the potential applications of SynSensora’s technology and better understand the types of molecules in his field that could use stronger methods for detection. \n\nAccording to Dr. Baliga, a possible application of our technology is the detection of lipoarabinomannan (LAM), a protein produced by Mycobacterium tubercolosis. This protein is one of the most promising candidate antigens whose detection would aid in the diagnosis of tuberculosis. He was intrigued by the possibility of creating a point-of-care diagnostic device that could detect LAM for a cheaper and quicker tuberculosis diagnosis. He also expressed enthusiasm for applications of our technology in metabolic engineering. For instance, pogostone is a precursor to many different molecules, such as patchouli oil, that have a strong insecticidal effect. He proposed that we could use our technology to improve pogostone production, thereby helping repel insects from agricultural products. He also suggested that we look into surface plasmon resonance, which is the principle behind many in vitro biosensors currently in use. .\n\nAt the end of the meeting, Dr. Baliga was interested in helping us with our project, both with its execution and with answering any additional questions we had. His postdoctoral student Vivek, whom Dr. Baliga describes as a “walking encyclopedia that can clone anything”, was also eager to help. The information that we learned from the meeting excited our team as professional researchers saw promise and potential impact in our project and in SynSensora.\n\n![ISB Visit](http://2018.igem.org/wiki/images/c/c7/T--Washington--ISBVisit.jpg)\n===\nAmyris\n# Amyris\n\n![Amyris Logo](http://2018.igem.org/wiki/images/6/6d/T--Washington--AmyrisLogo.png)\n\nAJ Kruse, a Washington iGEM team member, had personal connections to Dr. Victor Holmes, a senior staff scientist at Amyris, and reached out to him on behalf of the team for information about challenges they face and advice on potential molecular targets for our CID systems. Amyris is a successful metabolic engineering company based in Berkeley, CA that manufactures small molecules via synthetic yeast systems. One of their early products included artemisinin, a target molecule for our CID nanobody metabolite sensor, so the bulk of our email correspondence with Dr. Holmes involved asking him about Amyris’s artemisinin production and how our nanobodies could best improve it.\n\nDr. Holmes provided valuable details on what challenges companies like Amyris face when dealing with certain metabolites, enabling us to modify our nanobody sensors for improved efficacy in those applications. For instance, many of Amyris’s molecules of interest, like artemisinin, tend to have extremely high intracellular concentrations, so an effective sensor in this circumstance would only form a dimer in high concentrations of the desired substrate as opposed to a sensitive detection-related assay. He also explained the reasoning behind manufacturing artemisinin chemically instead of biologically: reactions involving oxygen have historically been very low yield in synthetic biology, since they require P450 enzymes which are membrane-bound and kinetically slow. Unfortunately, attempts to increase reaction speed tend to make them less specific. Furthermore, the final conversion steps of artemisinin production do not involve any stereochemistry, so the benefits of drawing upon biology to deal with tricky chirality would not apply here. Our correspondence with Amyris has been useful not only in guiding the technical aspects of our artemisinin CID detection system, but also in exposing our team to possible advantages and limitations of the CID system for use in metabolic engineering.\n===\nJust Biotherapeutics\n# Just Biotherapeutics\n\n![Just Biotherapeutics Logo](http://2018.igem.org/wiki/images/a/ae/T--Washington--JustLogo.jpg)\n\nTo learn more about manufacturing and how to scale up SynSensora, we visited a Seattle based biotech startup called Just Biotherapeutics. Just Biotherapeutics designs biologic products with the aim of reducing manufacturing cost, with their core strengths being molecular design, process and product design, and manufacturing plant design. We met with Anastasia Nicolov, one of our advisors who works at Just Biotherapeutics and received a tour of the facilities and an explanation of the uses of different labs and machines utilized in the company’s research.\n\nWe met with Just Biotherapeutics because they mainly develop antibody products and improve techniques for antibody production. We were introduced to small bioreactors used for testing and large bioreactors used for scaling up to production size. Anastasia was very knowledgeable about the difficulties with scaling up. The environment in a small-scale culture tube or small bioreactor is not proportionally scaled to a larger bioreactor, and the processes for controlling the environment may be different: for example, different scales use different control mechanisms for aeration, pH control, temperature control, and other variables. Though Anastasia clarified that she was not an expert on amplifying plasmids in cell culture, she gave us great insight into current methods for production of antibodies.\n\nOur visit to Just Biotherapeutics helped us understand that scaling up products is a difficult task. To optimize the design of a manufacturing plant, there must be many studies done to understand how the chamber environments of smaller bioreactors scale to larger bioreactors. Because large-scale manufacturing will be important for SynSensora, learning about the scale-up process from an innovator in reducing manufacturing costs was valuable to our team and will aid in our studies going forward and the growth of SynSensora.\n\n![Just Biotherapeutics Visit](http://2018.igem.org/wiki/images/thumb/7/70/T--Washington--JustVisit.jpg/800px-T--Washington--JustVisit.jpg)",
        "type": "SPECIAL"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nipmeeting\nIntellectual Property Meeting",
        "type": "SPECIAL"
    }, {
        "data": "# Intellectual Property Meeting\n\nThe Washington iGEM business team met with Dr. Gu, who developed a novel protocol to perform massively high-throughput molecular detection using nanobodies at the Institute for Protein Design. We had multiple meetings with Dr. Gu for scientific guidance and to better understand how intellectual property (IP) protection works, since we are partnering with Dr. Gu to commercialize SynSensora’s products. Through our meetings, we had the opportunity to learn and provide insight on the process of writing a patent as Dr. Gu invited the Washington iGEM team to collaborate with him and his lab in the process of developing protection for his IP.\n\nDuring one of our meetings on July 17th, 2018, we began our first discussion on Dr. Gu’s IP protection. Dr. Gu first began our discussion by providing us with three potential applications for his novel method, which include point of care diagnostics, metabolic biosensors, and cell therapy. The actual proposed patent would be for the protocol for creating the chemically induced dimerization (CID). In our meeting, we also discussed the products that our business, SynSensora, would manufacture and sell, which includes the construct of the genes to produce the binding proteins as well as physical proteins for use in point of care diagnostics. \n\nThroughout the process of our research and development, we were in constant contact with Dr. Gu, so we could be sure to be on the same page regarding his protocol and SynSensora’s products. Meeting with Dr. Gu helped us identify the possibilities of what this novel technology can do and gave us a whole new perspective on the application of this technology. We have been invited to join the discussion about protecting Dr. Gu’s protocol with his lab and CoMotion, UW’s center for innovation and intellectual property protection, in late October. This experience has allowed us to learn about the importance of intellectual property protection, the barriers to gaining protection, and resources to aid in getting protection.\n",
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
        "data": "SPONSORS\nNAME=Company; SUBTEXT=Company stuff;PICTURE=https://via.placeholder.com/300.png;LINK=https://google.com;FILTER=Gold",
        "type": "SPECIAL"
    }],
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
        "data": "This year, we have completed the requirements to receive a gold medal, and are eligible for a number of special awards.",
        "type": "MARKDOWN"
    }, {
        "data": "SECTION\ngold\nGold",
        "type": "SPECIAL"
    }, {
        "data": "# Gold\n\n✔ Integrated Human Practices - We engaged with stakeholders and the public and used what we learned to inform our project’s direction. Read more on our [Human Practices](http://2018.igem.org/Team:Washington/Human_Practices) page.\n\n✔ Model Your Project - Our project included a significant protein modeling component which tied in closely with our wetlab work. Learn more on our [Model](http://2018.igem.org/Team:Washington/Model) page.\n",
        "type": "MARKDOWN"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nsilver\nSilver",
        "type": "SPECIAL"
    }, {
        "data": "# Silver\n\n✔ Validated Part / Validated Contribution - We made four biobricks, some of which have characterization data. Visit our [Parts](http://2018.igem.org/Team:Washington/Parts) page to learn more.\n\n✔ Collaboration - We collaborated with multiple teams on InterLab, human practices, surveys, and through hosting the first-ever PNW iGEM Meetup. Read more on our [Collaborations](http://2018.igem.org/Team:Washington/Collaborations) page.\n\n✔ Human Practices Silver - We thought creatively and carefully about how our project could affect our world.  Read more on our [Human Practices](http://2018.igem.org/Team:Washington/Human_Practices) page.",
        "type": "MARKDOWN"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nbronze\nBronze",
        "type": "SPECIAL"
    }, {
        "data": "# Bronze\n\n✔ Registration and Giant Jamboree Attendance - We registered and are attending the Jamboree!\n\n✔ Competition Deliverables - We filled out our judging form and completed our wiki, poster, and presentation by the competition deadlines.\n\n✔ [Attributions](http://2018.igem.org/Team:Washington/Attributions) - Thank you again to everyone who helped us with our project!\n\n✔ Characterization / Contribution - We successfully completed the InterLab study, and our results are posted on our [InterLab page](http://2018.igem.org/Team:Washington/InterLab).",
        "type": "MARKDOWN"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nel_sp_awards\nEligible Special Awards",
        "type": "SPECIAL"
    }, {
        "data": "# Eligible Special Awards \n\n* Best Supporting Entrepreneurship Award\n* Best Model Award\n* Best Education & Public Engagement Award\n* Best Integrated Human Practices\n* Best Wiki\n* Best Poster\n* Best Presentation\n\n\n",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/Medal_Requirements"
}, {
    "content": [{
        "data": "HEADER\nTEXT=HUMAN PRACTICES DESIGN\nBACKGROUND=http://2018.igem.org/wiki/images/7/7b/T--Washington--TEAMBanner.png\nBACKGROUNDOPACITY=0.60\nBACKGROUNDLIGHTNESS=10\nTEXTHEIGHT=8\nSUBTITLEHEIGHT=7\nBLUR=3\nMINPADDINGTOP=70\nMINTITLEHEIGHT=6",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\nintro\nIntro",
        "type": "SPECIAL"
    }, {
        "data": "# Intro\n\nIf a picture paints a thousand words, the motivation behind the design team was to paint our project as clearly as possible. Our aim was to create a team that would help bridge our team to the outside world – to both other scientists and non-scientific members of the community alike – to spread the knowledge of synthetic biology as well as our year-long research. This opportunity allowed us to be more conscientious of what we want our message to be and how to best portray that information for the intended audience.\n\nWe worked to illustrate materials for many events and projects throughout the year, from designing recruitment posters to creating the team logo, illustrating a logo and materials for the PNW Meetup, and illustrating the pages of the Outreach Booklet. We also made our project more presentable for the competition by designing and composing figures for the wiki and putting together the presentation poster. Ultimately, we formed a small team of scientists who were willing to teach themselves design skills using programs on Adobe such as Photoshop, Illustrator, and After Effects to undertake projects deemed valuable for sharing the story of CID dimerization and synthetic biology overall.",
        "type": "MARKDOWN"
    }, {
        "data": "SEP",
        "type": "SPECIAL"
    }, {
        "data": "SECTION\noutreachbooklet\nOutreach Booklet",
        "type": "SPECIAL"
    }, {
        "data": "# Outreach Booklet\n\nThis year, Washington iGEM wrote and compiled a series of synthetic biology-related activities that were translated into several languages and utilized globally. The Outreach and Design teams collaborated on this project to create the most legible and engaging activity booklet possible.\n\nThe members of the Design team aimed to produce artistic works that were both aesthetically pleasing and extremely easy to read. To accomplish this, we chose sans-serif fonts, which are more legible at smaller sizes. Additionally, because much of the activity booklet is intended for younger demographics, such as elementary students, a sans-serif font would aid in reading text more smoothly as a consequence of its simple font anatomy.\n\nThere was no particular color scheme for this booklet, as the intent of the design was simply to catch the eye of the reader. We aimed to introduce variety into each activity by altering the color of the header title and supplementing the pages with various artworks. More importantly, we wanted to portray synbio topics in a manner that was not intimidating or complicated. The booklet was created with the intent of introducing synthetic biology to a wide audience, including students with intellectual disabilities and English Language Learners. We wanted the readers to be able to take the topics out of a classroom context and relate it to their own lives. Our primary goal was to separate “synthetic biology” from a “textbook definition.”\n\nWhile we are immensely proud of the final product, the Design team understands that further improvements in the booklet could be made in the future to ensure higher quality work. Specifically, in the translations by other teams, some of the fonts and formatting were changed due to the constraints of online PDF editors. Thus, the Design team at Washington iGEM aims to work more diligently to create more enticing and cohesive professional works. With the academic year just starting, Washington iGEM hopes to incorporate more unique and effective lessons for young, aspiring scientists to learn about synthetic biology!\n",
        "type": "MARKDOWN"
    }],
    "isContent": true,
    "pageTitle": "/HP_Design"
}, {
    "content": [{
        "data": "Insert text",
        "type": "MARKDOWN"
    }, {
        "data": "Insert text",
        "type": "MARKDOWN"
    }, {
        "data": "Insert text",
        "type": "MARKDOWN"
    }],
    "isContent": false,
    "pageTitle": "/Team_Development"
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
        names: ["Human Practices", "Collaborations", "Education & Engagement", "Entrepreneurship", "HP_Design", "Team Development"],
        links: ["/Human_Practices", "/Collaborations", "/Public_Engagement", "/Entrepreneurship", "/HP_Design", "/Team_Development"]
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
