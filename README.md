# EXPO-ESLINT-PRETTIER

This repository provides a quick start for a React Native project using Expo 52, created with
[`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

- The project is configured with the standard Expo setup for ESLint and Prettier, along with some custom modifications.
- The i18next library for internationalization is installed and configured.
- Redux Toolkit is integrated.

Pull requests are welcome.

## Getting Started

Clone the project from the remote repository:

```bash
git clone git@github.com:TAndrei17/EXPO-ESLINT-PRETTIER.git
```

If you're using the Yarn package manager, simply run the following command:

```bash
make setup.
```

If you're using a different package manager, change the PACKAGE_MANAGER variable in the Makefile and run the command:

```bash
make setup.
```

This command will:

- Clean up old data: Removes the .git directory, node_modules, and lock files (package-lock.json, yarn.lock, pnpm-lock.yaml).
- Install dependencies: Installs all required dependencies.
- Check for outdated packages: Verifies if any installed dependencies are outdated.
- Update dependencies: Updates installed dependencies to the latest compatible versions.

Once the setup is complete, your project is ready to use!

## Learn more

To learn more about developing a project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with [guides](https://docs.expo.dev/guides).
- [Use ESLint and Prettier](https://docs.expo.dev/guides/using-eslint/): A guide on configuring ESLint and Prettier to format Expo apps.
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/): Learn how to use Redux Toolkit for state management.
- [i18next Documentation](https://www.i18next.com/overview/getting-started): Get started with i18next for internationalization.
