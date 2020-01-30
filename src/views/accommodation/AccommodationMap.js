import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import MapGL, { Popup, NavigationControl, FullscreenControl, ScaleControl } from 'react-map-gl';
import Pins from './pins';
import CityInfo from './city-info';
import popUpAction from '../../redux/actions/popUpAction';


const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px',
  fontSize: '10px',
};

const navStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  position: 'absolute',
  bottom: 36,
  left: 0,
  padding: '10px'
};

const close_button = {
  left: '0px',
  padding: '13px 18px',
  backgroundColor: '#e53224ed',
  borderRadius: '5px',
  border: 'none',
  color: 'white',
  fontSize: '17px',
  margin: '10px 10px 0 auto',
  display: 'flex',
  boxShadow: '0 0 0 2px rgba(0,0,0,.1)',
};

export class AccommodationMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: this.props.accommodationItem.googleCoordinates.split(',').map(i => parseFloat(i))[1],
        longitude: this.props.accommodationItem.googleCoordinates.split(',').map(i => parseFloat(i))[0],
        zoom: 15,
        bearing: 0,
        pitch: 0
      },
      popupInfo: null,
      accommodation: [
        {
          address: this.props.accommodationItem.address,
          name: this.props.accommodationItem.name,
          image: this.props.accommodationItem.imagesAccommodation[0].imageUrl,
          latitude: this.props.accommodationItem.googleCoordinates.split(',').map(i => parseFloat(i))[1],
          longitude: this.props.accommodationItem.googleCoordinates.split(',').map(i => parseFloat(i))[0]
        }
      ]
    };
  }

  _updateViewport = viewport => {    
    this.setState({ viewport });
  };

  _onClickMarker = city => {
    this.setState({ popupInfo: city });
  };

  _renderPopup() {
    const { popupInfo } = this.state;
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  componentDidUpdate(prevProps) {
    const { accommodationItem: { imagesAccommodation } } = this.props;
    if (this.props.accommodationItem.id !== prevProps.accommodationItem.id) {
      const latitude = this.props.accommodationItem.googleCoordinates.split(',').map(i => parseFloat(i))[1];
      const longitude = this.props.accommodationItem.googleCoordinates.split(',').map(i => parseFloat(i))[0];
      const address = this.props.accommodationItem.address;
      const name = this.props.accommodationItem.name;
      const image = this.props.accommodationItem.imagesAccommodation[0].imageUrl;
      const viewport = { ...this.state.viewport };
      viewport.latitude = latitude;
      viewport.longitude = longitude;
      this.setState({ viewport });

      const accommodation = { ...this.state.accommodation[0] };
      accommodation.latitude = latitude;
      accommodation.longitude = longitude;
      accommodation.address = address,
        accommodation.name = name,
        accommodation.image = image,

        this.setState({ accommodation: [accommodation] });
    }
  }

  render() {
    const { viewport } = this.state;
    const { REACT_APP_MAPBOX_TOKEN } = process.env;

    return (
      <div className="map_container" style={{ width: '70%', height: '70%', margin: 'auto' }}>

        <MapGL
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/niyongabo/ck6ar1udf01e21iobcfcurhcw"
          onViewportChange={this._updateViewport}
          mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
        >
          <Pins data={this.state.accommodation} onClick={this._onClickMarker} />

          {this._renderPopup()}

          <div style={fullscreenControlStyle}>
            <FullscreenControl />
          </div>
          <div style={navStyle}>
            <NavigationControl />
          </div>
          <div style={scaleControlStyle}>
            <ScaleControl />
          </div>
            <button style={close_button} onClick={() => this.props.popUpAction({ map: 'none', currentPopUp: 'editTrip' })}>
              Close
            </button>
        </MapGL>

      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    accommodationItem: state.specificAccommodation.singleAccommodation[0],
  };
};

export default connect(mapStateToProps, { popUpAction })(AccommodationMap);



