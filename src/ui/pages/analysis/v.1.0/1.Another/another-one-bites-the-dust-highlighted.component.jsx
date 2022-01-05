import React from "react";
import AnotherHighlightedItem from "./another-one-bites-the-dust-highlighted-item.component";
import {
  Container,
  ContainerCentered,
} from "../../../../sections/highlighted/highlighted.styles.js";

class Another_HighlightedSection extends React.Component {
  hightlightedSectionCoverData = {
    titleOne: "Another Moments Title 1",
    titleTwo: "Another Moments Title 2",
    titleThree: "Another Moments Title 3",
  };

  hightlightedSectionItemData = {
    m1: {
      title: "Guitarra Doppler",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      segment: "0: 30 - 0: 51",
    },
    m2: {
      title: "Coloratura Pop",
      content:
        "Aca la cosa cambiar porque.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal",
      segment: "0: 30 - 0: 51",
    },
    m3: {
      title: "Guitarra Funky",
      content:
        "A su vez acá es distinto, porque.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal.En este tramo la voz hace un dibujo ornamental descendente que converge con el reingreso del groove principal",
      segment: "0: 30 - 0: 51",
    },
  };

  render() {
    return (
      <Container>
        <ContainerCentered>
          <AnotherHighlightedItem
            title={this.hightlightedSectionItemData.m1.title}
            content={this.hightlightedSectionItemData.m1.content}
            segment={this.hightlightedSectionItemData.m1.segment}
          />
          <AnotherHighlightedItem
            title={this.hightlightedSectionItemData.m2.title}
            content={this.hightlightedSectionItemData.m2.content}
            segment={this.hightlightedSectionItemData.m2.segment}
          />
          <AnotherHighlightedItem
            title={this.hightlightedSectionItemData.m3.title}
            content={this.hightlightedSectionItemData.m3.content}
            segment={this.hightlightedSectionItemData.m3.segment}
          />
        </ContainerCentered>
      </Container>
    );
  }
}

export default Another_HighlightedSection;
