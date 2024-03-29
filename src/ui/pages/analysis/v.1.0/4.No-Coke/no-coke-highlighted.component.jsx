import React from "react";
import NoCokeHighlightedItem from "./no-coke-highlighted-item.component";
import {
  Container,
  ContainerCentered,
} from "../../../../sections/highlighted/highlighted.styles.js";

class NoCoke_HighlightedSection extends React.Component {
  hightlightedSectionCoverData = {
    titleOne: "Another Moments Title 1",
    titleTwo: "Another Moments Title 2",
    titleThree: "Another Moments Title 3",
  };

  hightlightedSectionItemData = {
    m1: {
      title: "Bajo cool",
      content:
        "En el segundo 10 suena por primera vez el motivo característico del bajo que le da identidad al tema con su sonido procesado en un sinte Roland Juno 106",
      segment: "0: 30 - 0: 51",
    },
    m2: {
      title: "Agudo movedizo por el fondo",
      content:
        "En el estribillo el bajo se va y deja lugar a un sonido agudo y sostenido que le confiere una atmósfera extraña",
      segment: "1: 30 - 1: 41",
    },
    m3: {
      title: "Modulando",
      content:
        "Después de un break el bajo es el encargado de dar paso a la nueva tonalidad subiendo 1 tono su en el final de su riff",
      segment: "2: 10 - 2: 14",
    },
  };

  render() {
    return (
      <Container>

        <ContainerCentered>

          {/* Item One */}
          <NoCokeHighlightedItem
            title={this.hightlightedSectionItemData.m1.title}
            content={this.hightlightedSectionItemData.m1.content}
            segment={this.hightlightedSectionItemData.m1.segment}
          />

          {/* Item Two */}
          <NoCokeHighlightedItem
            title={this.hightlightedSectionItemData.m2.title}
            content={this.hightlightedSectionItemData.m2.content}
            segment={this.hightlightedSectionItemData.m2.segment}
          />

          {/* Item Three */}
          <NoCokeHighlightedItem
            title={this.hightlightedSectionItemData.m3.title}
            content={this.hightlightedSectionItemData.m3.content}
            segment={this.hightlightedSectionItemData.m3.segment}
          />
        </ContainerCentered>
      </Container>
    );
  }
}

export default NoCoke_HighlightedSection;
