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
    constructor(props) {
        super(props);
        this.state = {
            currentImage: 0,
            photos: props.photos
        };
    }

    /** Begin boilerplate code */
    openLightbox = (event, obj) => {
        this.setState({
            currentImage: obj.index,
            lightboxIsOpen: true,
        });
    }

    closeLightbox = () => {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }

    gotoPrevious = () => {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }

    gotoNext = () => {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }

    /** End boilerplate code */
    componentWillReceiveProps({ photos }) {
        this.setState({ photos });
    }

    render() {
        console.log(this.state.photos);
        let { photos, currentImage } = this.state;
        // photos = [];
        return <div>
            <Gallery photos={photos} onClick={this.openLightbox} />
            <Lightbox images={photos}
                onClose={this.closeLightbox}
                onClickPrev={this.gotoPrevious}
                onClickNext={this.gotoNext}
                currentImage={currentImage}
                isOpen={this.state.lightboxIsOpen}
            />
        </div>
    }
}