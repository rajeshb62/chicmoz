#!/bin/bash

set -e

VERSION_STRING="$(git describe --tags)" skaffold run --filename "k8s/production/skaffold.production.light.yaml" --default-repo=registry.digitalocean.com/aztlan-containers
