import React from "react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "assetImage",
  type: "object",
  title: "Image",
  fields: [
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
        defineField({
          name: "caption",
          type: "string",
          title: "Caption",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      imageName: "image.asset.originalFilename",
      imageUrl: "image.asset.url",
      imageSize: "image.asset.size",
      imageAlt: "image.alt",
    },
    prepare: ({ imageName, imageUrl, imageSize, imageAlt }) => {
      const assetStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      };
      const kb = imageSize / 1024;
      const mb = imageSize / 1048576;
      return {
        title: imageName || "...",
        subtitle: !imageSize ? "..." : mb < 1 ? `${kb.toFixed(2)} KB` : `${mb.toFixed(2)} MB`,
        media: <img src={imageUrl} style={assetStyle} alt={imageAlt || ""} />,
      };
    },
  },
});
