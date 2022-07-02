
# Feature flags in NestJS
A companion repo for "How to use Feature Flags in NestJS" 

## About this sample app

As a way to keep things simple, This sample NestJS application works much like an API. The app has two endpoints:

- **/animals/single** - Making an HTTP GET request to this endpoint would return a single animal.
- **/animals/multiple** - Making an HTTP Get request to this endpoint would return multiple animals.

## How it works

The companion article discussed the use of ConfigCat's feature flag services for feature flagging. This allow the **/animals/multiple** endpoint to return multiple animals if the Feature Flag is switched on and render the text **Not Available** page if it is off.

## How to run the App

1. Clone this repository

2. Open a terminal in the root of this repo

3. Installed the required npm packages:


```bash
npm install

```

4. Start the server by running the below command. Then access the app at: [http://localhost:3000](http://localhost:3000).

```bash
npm run start

```

## Reference

**ConfigCat** also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/).

Keep up with ConfigCat on [Twitter](https://twitter.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

