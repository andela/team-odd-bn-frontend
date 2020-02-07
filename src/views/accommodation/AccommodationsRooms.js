import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { connect } from 'react-redux';
import 'react-alice-carousel/lib/alice-carousel.css';

export class AccommodationsRooms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mouseTrackingEnabled: true,
      preventEventOnTouchMove: true,
      items: []
    }
  }

  responsive = {
    0: { items: 1 },
    600: { items: 2 },
    960: { items: 3 },
  }

  stagePadding = {
    paddingLeft: 0,
    paddingRight: 300,
  }

  componentDidMount () {
    const { accommodationItem } = this.props;
    const result = this.galleryItems(accommodationItem.imagesAccommodation);
    this.setState({ items: result })
  }

  galleryItems(data) {
    const images =  data.map((images, index) => (
      <div className="item" key={images.imageUrl}>
        <img images={images} src={images.imageUrl} alt="available rooms for accomodation" />
      </div>
    ));
    return images;
  }

  componentDidUpdate(prevProps) {
    const { accommodationItem: { imagesAccommodation } } = this.props;
    if (this.props.accommodationItem.id !== prevProps.accommodationItem.id) {
      this.setState({ items: this.galleryItems(imagesAccommodation) });
    }
  }


  render() {
    const { mouseTrackingEnabled, preventEventOnTouchMove } = this.state;
    return (
      <>
        <div className="more-rooms-images-container">
          <div className="more-rooms-images">
            <h1>More images</h1>
          </div>
          <div className="more-rooms-images">
            <AliceCarousel
              items={this.state.items}
              showSlideInfo
              preventEventOnTouchMove={preventEventOnTouchMove}
              mouseTrackingEnabled={mouseTrackingEnabled}
              responsive={this.responsive}
              infinite={false}
              stagePadding={this.stagePadding}
            />
          </div>
        </div>
      </>
    );
  }
}
export const mapStateToProps = (state) => {
  return {
    accommodationItem: state.specificAccommodation.singleAccommodation[0],
  };
};

export default connect(mapStateToProps, null)(AccommodationsRooms);
