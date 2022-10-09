const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .js('resources/js/home.js', 'public/js')
  .js('resources/js/todolist.js', 'public/js')
  .js('resources/js/course.js', 'public/js')
  .js('resources/js/user.js', 'public/js')
  .js('resources/js/members.js', 'public/js')
  .react()
  .sass('resources/sass/app.scss', 'public/css')
  .webpackConfig({
    resolve: {
      alias: {
        "@": __dirname + "/resources",
        "@Components": __dirname + "/resources/js/components",
      }
    }
  });
