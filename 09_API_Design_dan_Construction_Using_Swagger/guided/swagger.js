import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Film yang Ditonton",
      version: "1.0.0",
      description: "API sederhana dari Express untuk film-film yang pernah ditonton",
    },
  },
  apis: ["app.js"],
};

const specs = swaggerJSDoc(options);

export {
  specs,
  swaggerUI,
};