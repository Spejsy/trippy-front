import { IconButton } from "@mui/material";
import { BoundsLiteral, LatLngTuple } from "leaflet";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, MapConsumer } from "react-leaflet";
import { PoiListProps } from "./constants";
import * as P from "./parts";

const PoiList = ({ listOfPoi, Icon, buttonHandler }: PoiListProps) => {
  console.log(listOfPoi);

  const poi = listOfPoi?.map((poi, i) => (
    <P.ListElement key={i}>
      <P.Image>Obraz</P.Image>
      <P.Name>{poi.name}</P.Name>
      <P.Category>{poi.category}</P.Category>
      <P.Button>
        <IconButton aria-label="add" size="large" onClick={() => buttonHandler(i)}>
          <Icon fontSize="inherit" />
        </IconButton>
      </P.Button>
    </P.ListElement>
  ));

  return <P.ListWrapper>{poi}</P.ListWrapper>;
};

export default PoiList;