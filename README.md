# Edinburgh Hugo Theme

This is the theme for my blog. It's the migration of my [edinburgh-wordpress-theme](https://github.com/phauer/edinburgh-wordpress-theme) to the static website engine [Hugo](https://gohugo.io/).

# Usage

TODO

# Development

- Gulp copies and preprocesses the assets (compile sass, concat css and js, copy images and fonts). 
  - Source: `src`
  - Target: `static`
- Hugo generates the static HTML pages based on the Markdown and Theme files.
  - Source: `theme (layout, static), content`
  - Target: `public`

## Development Workflow

```bash
# terminal 1
cd themes/edinburgh-hugo-theme
gulp # create assets. watches for sass changes, but doesn't reload browser, because hugo does this for us.

# terminal 2
cd ../.. # in root folder
hugo server 
```

## Setting up gulp

```bash
cd cd themes/edinburgh-hugo-theme
npm install
```

# Build Website

```bash
cd themes/edinburgh-hugo-theme
gulp create # create assets.
cd ../..
hugo # create website
```
