# Remix AWS example

This is an example repo to illustrate and test the use of remix-aws in a remix project.

## Prerequisites

- SAM CLI: [how to install](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) 

## Local testing

Link the local `remix-aws` build to this remix project.

**NPM**

```shell
# in your local repo of remix-aws
npm link

# in this remix repo
npm link remix-aws

# check if your dependency is linked to the local repo
ls -alh node_modules | grep remix-aws
```

After you've linked the local remix-aws repo you can run the sam cli commands using predefined npm scripts, this will...

- build remix using the vite `awsPreset` from `remix-aws`
- start a local lambda with api gateway v1 using sam cli

```shell
# on x86_64
npm run start:local-lambda:x86_64

# on arm64
npm run start:local-lambda:arm64
```