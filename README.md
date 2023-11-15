# AWS CDK in Practice

My exercises from the book [AWS CDK in Practice](https://www.packtpub.com/product/aws-cdk-in-practice/9781801812399) by [gabrielncorreia](https://github.com/gabrielncorreia) . See the [GitHub repo](https://github.com/PacktPublishing/AWS-CDK-in-Practice) for the book.

## Contents

- [Getting Started](#getting-started)
- [Useful Commands](#useful-commands)
- [Project Structure](#project-structure)

## Getting Started

To get started with this repository, you need to have the following installed:

- Node.js
- AWS CLI
- CDK CLI

Run `npm install` to install the dependencies.

Configure your AWS credentials using the AWS CLI.

## Useful Commands

These are some useful commands for working with the CDK project:

- `npm run build` - Compile the TypeScript code
- `npm run watch` - Watch for changes and compile
- `npm run test` - Run unit tests
- `cdk deploy` - Deploy the CDK stack
- `cdk diff` - Compare deployed stack with current state
- `cdk synth` - Emits synthesized CloudFormation template

## Project Structure

- `lib/` - Contains the CDK constructs for the various AWS resources
- `bin/` - Contains the CDK app entry point
- `test/` - Contains unit tests for the constructs

The CDK app is defined in `bin/infrastructure.ts`. This imports the different constructs from the `lib/` folder and defines the CDK stack.

The unit tests are located in the `test/` folder.
