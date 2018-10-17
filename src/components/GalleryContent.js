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
            photos: this.shuffle(props.photos)
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

    /** shuffle code using the Fisher-Yates algorithm by Jeff on stackoverflow  */
    shuffle = (a) => {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    /** End boilerplate code */
    componentWillReceiveProps({ photos }) {
        // let photos = this.shuffle(nextProps.photos)
        this.setState({ photos });
    }

    render() {
        let { photos, currentImage } = this.state;
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