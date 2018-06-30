import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

// LoadingScreen is the page that appears when the page is loading.
export class MainPageContent extends Component {
    render() {
        return (
            <div>
                <Card style={{ minWidth: 250, maxWidth: "80%", margin: "auto", marginTop: 90 }}>
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Washington iGEM 2018 Project Abstract
                            <br />Chemically Induced Dimerization of Nanobodies for the Development of Versatile Biosensors
                        </Typography>
                        <Typography component="p" style={{ textAlign: "left" }}>
                            One of the pressing challenges of modern science is the detection of small molecule targets. This has applications in a variety of fields, such as point-of-care diagnostics and metabolic engineering. Although most small molecules can be detected through Enzyme-Linked Immunosorbent Assay (ELISA), accessibility is limited by the time-consuming nature of the procedure. We hope to use a chemically induced dimerization system of nanobodies to detect small molecule targets and apply this system to the development of simple diagnostic assays, such as lateral flow assays or fluorescent microarrays, and innovations in metabolic engineering.
                            <br /><br />
                            Nanobodies are antibody fragments from single domain antibodies found in camelids and sharks. They are the variable regions of antibodies that are responsible for specific binding to target molecules. Researchers in the Institute for Protein Design (IPD) at the University of Washington have created extensive libraries of phages displaying nanobodies for high throughput screening of binding targets, making them a versatile tool for molecule detection. We have partnered with Dr. Liangcai Gu from the IPD to investigate novel applications of a high-throughput nanobody library numbering ten billion unique types. In our project, we will identify specific nanobodies that bind to desired target molecules of high importance and demonstrate the application of nanobody technology to the development of a biosensor.
                            <br /><br />
                            Traditionally, monoclonal antibodies have been used to detect specific molecules and used in products such as ELISA kits. However, one significant barrier to developing new monoclonal antibodies is that they require introduction of an antigen to an animal before large scale production can begin. We are bypassing this expensive and time-consuming step and the associated ethical concerns by screening through a pre-existing library of nanobodies to rapidly identify those that can bind desired target molecules with high specificity.
                            <br /><br />
                            Our team will be screening our nanobody library against two chosen molecules to find binding nanobodies. Then, we will screen the library for secondary nanobodies that bind to the primary nanobody-antigen complex, thus forming a dimer. After identifying these nanobodies, these nanobodies can be fused to other proteins to form biosensors. Specifically, we intend to repurpose activating and DNA binding domain proteins used in yeast 2-hybrid systems to create a transcriptional biosensor.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}