var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
    mix.webpack('./app/assets/js/app.js');
    mix.browserSync({
        proxy: 'localhost:8000',
        files: [
            {
                match: [
                    "public/css/app.css",
                    "public/js/bundle.js",
                    "resources/views/**/*.blade.php"
                ]
            }
        ]
    });
});
