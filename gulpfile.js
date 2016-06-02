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

var paths = {
    'SOURCE': './resources/assets/',
    'DESTINATION': './public/assets/',
    'NODE': './node_modules/'
};

elixir.config.js.browserify.transformers.push({
    name: 'hbsfy',
    options: {}
});

elixir(function(mix) {
    mix.sass('app.scss');
    
    mix.scripts([
        paths.NODE + 'jquery/dist/jquery.min.js',
        'vendor/foundation/foundation.core.js',
        'vendor/foundation/*.js'
    ]);

    //mix.babelify('mine/*.js');
    mix.browserify('mine/index.js');
});
