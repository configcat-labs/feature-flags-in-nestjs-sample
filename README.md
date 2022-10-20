## NestJS sample application

### About

This is a fictional auto dealership website illustrating how to use feature flags in NestJS. Since Nest is considered a server-side framework, the frontend components were developed using Vue.js. The complete frontend can be found in the **client** folder.

Here's a short breakdown of the app:

On the home page of the website, just under the banner. I've added:

- **A newsletter subscription form** - Let's consider this to be a pre-existing component of the site.
- **A fuel mileage calculator** - The new feature to be rolled out.

## Build & Run

### Prerequisites
- Node version 16 or higher

### Instructions for running the app

1. Open a terminal in the root of this repo and run the following command to install the **npm packages**.

```sh
npm install
```

2. Build the Vue frontend:

```sh
cd client

npm install

npm run build
```

3. In the root directory, start the server by running the following command then access it on [http://localhost:3000/](http://localhost:3000/).

```sh
npm run start
```

## Learn more

Useful links to technical resources.

- [Nest.js Documentation](https://docs.nestjs.com/) - learn about Nest.js features and its API.

[**ConfigCat**](https://configcat.com) also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/).

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [Twitter](https://twitter.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author
[Chavez Harris](https://github.com/codedbychavez)

## Contributions
Contributions are welcome!
