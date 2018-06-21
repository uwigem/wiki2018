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
                            Washington iGEM 2018
                        </Typography>
                        <Typography component="p">
                            This page is a work in progress.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}