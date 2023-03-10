import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

const Map = () => {
  const defaultProps = {
    center: {
      lat: -34.397,
      lng: 150.644,
    },
    zoom: 5,
  };

  return (
    // Important! Always set the container height explicitly

    <div style={{ height: "80vh", width: "75%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Marker
          //   key={place.id}
          text={"place"}
          lat={-34.397}
          lng={150.644}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
