# Overview

This project was built for reducing tasks time when a developer wants to start a new project by the angular framework.
So this setup including most of the required configuration for each angular project.
the goal of this setup is a team will be ready to start writing the code immediately.

## What is the configurations are ready?

- ngx-bootstrap. so you can use bootstrap on component level.
- localization.
- coloring files, this setup using SCSS.
- interceptor, for handling each request and response.
- initializer, loading required styles, and locale, also you can add what is required logic from your side.
- structured folder based on the job that has to.
- coding style and formatter.
  - on pre-commit: will format all the files and implement Airbnb rules.
  - on pre-push: will generate production build to make sure everything is working as excepted.

## How to start?

After cloning this project,
run these commands in your CLI.

```
npm install -g @angular/cli
npm install
ng serve -o
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
