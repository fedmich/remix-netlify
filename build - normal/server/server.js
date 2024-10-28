import { createRequestHandler } from "@netlify/remix-adapter";
import { b as build } from "./assets/server-build-BG-Pu07B.js";
import "react/jsx-runtime";
import "node:stream";
import "@remix-run/node";
import "@remix-run/react";
import "isbot";
import "react-dom/server";
const _virtual_netlifyServer = createRequestHandler({ build });
export {
  _virtual_netlifyServer as default
};
