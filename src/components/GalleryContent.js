import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

/**
 * GalleryContent is the gallery content for the ContentView page
 * A lot of this code is boilerplate given by react-photo-gallery
 * tutorial
 * @class
 */
export class GalleryContent extends Component {

    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }
    openLightbox(event, obj) {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    render() {
        let photos = [];
        return <div>
            <Gallery photos={photos} onClick={this.openLightbox} />
            <Lightbox images={photos}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={this.state.currentImage}
                isOpen={this.state.lightboxIsOpen}
            />
        </div>
    }
}