import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Redoc from "@theme/Redoc";

const STATIC_SPEC = "/openapi.json";
export default function CustomPage() {
  return <Redoc specUrl={useBaseUrl(STATIC_SPEC)} />;
}
