import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Redoc from "@theme/Redoc";

const Z5_API = "/openapi.json";
const SMS_API = "/openapi_sms.json";

function Z5ApiDoc() {
  return <Redoc specUrl={useBaseUrl(Z5_API)} />;
}

function SMSApiDoc(){
  return <Redoc specUrl={useBaseUrl(SMS_API)} />;
}


export { Z5ApiDoc, SMSApiDoc }