import * as React from "react";
import { Paper, Container } from '@material-ui/core';
import { MuiPaletteGuide } from './MuiPalette';
import { MuiTypographyGuide } from './MuiTypography';
import { MuiInputsGuide } from './MuiInputs';
import { MuiFeedbackGuide } from './MuiFeedback';
import { MuiSurfacesGuide } from './MuiSurfaces';
import { MuiDataDisplayGuide } from './MuiDataDisplay';
import { MuiNavigationGuide } from './MuiNavigation';

export const MuiStyleGuide = () => {
  return (
    <Container>
      <Paper style={{padding: '24px 16px 24px 16px'}}>
        <MuiPaletteGuide/>
        <MuiTypographyGuide/>
        <MuiInputsGuide/>
        <MuiFeedbackGuide/>
        <MuiSurfacesGuide/>
        <MuiNavigationGuide/>
        <MuiDataDisplayGuide/>
      </Paper>
    </Container>
  );
}
