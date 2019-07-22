import React, { Component } from "react";
import { Image } from "rebass";

import { IImagePreviewProps } from "./types";

export default class ImagePreview extends Component<
  IImagePreviewProps,
  object
> {
  render() {
    const { imageFiles } = this.props;
    return (
      <>
        {imageFiles
          ? imageFiles.map((imageFile: any, index: number) => {
              return (
                <Image
                  height="auto"
                  width={[1 / 2, 1 / 2, 1 / 2]}
                  key={index}
                  src={imageFile.blobUrl}
                />
              );
            })
          : ""}
      </>
    );
  }
}
