"use strict";
const options = require("@bcgov/pipeline-cli").Util.parseArguments();
const changeId = options.pr; //aka pull-request
const version = "1.0.0";
const name = "kctest";

Object.assign(options.git, { owner: "ychung-mot", repository: "kctest" });
const phases = {
  build: {
    namespace: "e0cee6-tools",
    name: `${name}`,
    phase: "build",
    changeId: changeId,
    suffix: `-build-${changeId}`,
    instance: `${name}-build-${changeId}`,
    version: `${version}-${changeId}`,
    tag: `build-${version}-${changeId}`,
    transient: true,
  },
  dev: {
    namespace: "e0cee6-dev",
    name: `${name}`,
    phase: "dev",
    changeId: changeId,
    suffix: `-dev-${changeId}`,
    instance: `${name}-dev-${changeId}`,
    version: `${version}-${changeId}`,
    tag: `dev-${version}-${changeId}`,
    host: `kctest-${changeId}-e0cee6-dev.apps.silver.devops.gov.bc.ca`,
    transient: true,
    client_cpu: "100m",
    client_memory: "100Mi",    
  },
  test: {
    namespace: "e0cee6-test",
    name: `${name}`,
    phase: "test",
    changeId: changeId,
    suffix: `-test`,
    instance: `${name}-test`,
    version: `${version}`,
    tag: `test-${version}`,
    host: `kctest-e0cee6-test.apps.silver.devops.gov.bc.ca`,
    client_cpu: "100m",
    client_memory: "100Mi",  
  },
};

// This callback forces the node process to exit as failure.
process.on("unhandledRejection", (reason) => {
  console.log(reason);
  process.exit(1);
});

module.exports = exports = { phases, options };
