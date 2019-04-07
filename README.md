# Edinburgh Hugo Theme

This is the theme for my [blog](https://phauer.com). It's the migration of my [edinburgh-wordpress-theme](https://github.com/phauer/edinburgh-wordpress-theme) to the static website engine [Hugo](https://gohugo.io/).

# UPDATE April 2019

**I don't maintain this theme anymore. Background:**

- I now deploy my blog via Netlify. Hence, it's more convenient to locate the theme in the same git repo as the hugo project.
- Hugo introduced [Pipes](https://gohugo.io/hugo-pipes/) which can be used to comile SASS and to minify and concat CSS & JS. So there is no need for a second (gulp) build for the theme anymore. This significantly simplifies the tool chain required to build the blog and the theme.

# Development

Install at least Hugo 0.18.1.

Preparation:
```bash
npm install
```

- npm installs the dependencies
- Gulp copies and preprocesses the assets (compile sass, concat css and js, copy images and fonts). 
  - Source: `src`
  - Target: `static`
- Hugo generates the static HTML pages based on the Markdown and Theme files.
  - Source: `<theme>/layout, <theme>/static, content`
  - Target: `public`

## Development Workflow

```bash
# terminal 1
cd themes/edinburgh-hugo-theme
npm run watch # create assets with gulp. watches for sass changes, but doesn't reload browser, because hugo does this for us.

# terminal 2
cd ../.. # in root folder
hugo server 
```

## Setting up Gulp

```bash
cd themes/edinburgh-hugo-theme
npm install
```

# Build Website

```bash
cd themes/edinburgh-hugo-theme
npm run build # create assets with gulp

cd ../..
hugo # create website
```
