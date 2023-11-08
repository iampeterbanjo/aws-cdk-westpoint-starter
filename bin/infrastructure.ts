#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import 'source-map-support/register';
import { WebStack } from '../lib';

const app = new cdk.App();
new WebStack(app, 'InfrastructureStack', {});
