import * as React from "react";
import { Typography, Divider } from '@material-ui/core';
import { MuiAppBarGuide, MuiCardGuide,
   MuiExpansionPanelGuide, MuiPaperGuide } from '../MuiSurfaces';

export const MuiSurfacesGuide = () => {
  return (
    <>
      <Typography id="Surface" variant="h4">
      Surfaces
      </Typography>
      <Divider/>
      <MuiAppBarGuide/>
      <MuiCardGuide/>
      <MuiExpansionPanelGuide/>
      <MuiPaperGuide/>
    </>
  );
}
