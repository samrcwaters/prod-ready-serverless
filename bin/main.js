#!/usr/bin/env node

const cdk = require("aws-cdk-lib");
const { ApiStack } = require("../lib/cdk/api-stack");

const DEFAULT_STAGE = "dev";

const app = new cdk.App();
let stageName = app.node.tryGetContext("stageName");

if (!stageName) {
  console.log(`Defaulting stage name to ${DEFAULT_STAGE}`);
  stageName = DEFAULT_STAGE;
}

new ApiStack(app, `ApiStack-${stageName}`, { stageName });
