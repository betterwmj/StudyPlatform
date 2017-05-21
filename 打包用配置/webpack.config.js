"use strict";
const path = require('path');
const webpack = require('webpack');
let UglifyJSPlugin = require('uglifyjs-webpack-plugin');
let CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
    entry:{
        main:'./bootstrap.js',
        vendor: ['bluebird','angular', 'angular-ui-router','ngMaterial','angular-cookies'],//手机端配置
		//vendor: ['angular', 'angular-ui-router','angular-cookies','angular-ui-bootstrap'],//pc端配置
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }],
            }
        ]
    },
    resolve: {
        alias: {
            'bluebird':         	path.resolve(__dirname, './jslib/bluebird.min.js'),
            'angular':          	path.resolve(__dirname, './jslib/angular-index.js'),
            'angular-cookies':  	path.resolve(__dirname, './jslib/angular-cookies.min.js'),
            'angular-ui-router':    path.resolve(__dirname, './jslib/angular-ui-router.js'),
            'ngMaterial':       	path.resolve(__dirname, './jslib/angular-material-index.js'),
			"angular-ui-bootstrap":	path.resolve(__dirname, "./jslib/ui-bootstrap-tpls.js"),
        }
    },
    plugins:[
		
		new UglifyJSPlugin({
			exclude		  :	["bundle.js"],
			comments      : false,
			mangle		  : true,
            sequences     : true,  // join consecutive statemets with the “comma operator”
            properties    : true,  // optimize property access: a["foo"] → a.foo
            dead_code     : true,  // discard unreachable code
            drop_debugger : true,  // discard “debugger” statements
            unsafe        : false, // some unsafe optimizations (see below)
            conditionals  : true,  // optimize if-s and conditional expressions
            comparisons   : true,  // optimize comparisons
            evaluate      : true,  // evaluate constant expressions
            booleans      : true,  // optimize boolean expressions
            loops         : true,  // optimize loops
            unused        : true,  // drop unused variables/functions
            hoist_funs    : true,  // hoist function declarations
            hoist_vars    : false, // hoist variable declarations
            if_return     : true,  // optimize if-s followed by return/continue
            join_vars     : true,  // join var declarations
            cascade       : true,  // try to cascade `right` into `left` in sequences
            side_effects  : true,  // drop side-effect-free statements
            warnings      : true,  // warn about potentially dangerous optimizations/code
            global_defs   : {}     // global definitions
        }),
        new UglifyJSPlugin({
			exclude		  :	["vendor.bundle.js"],
			comments      : false,
			mangle		  : false,
            sequences     : true,  // join consecutive statemets with the “comma operator”
            properties    : true,  // optimize property access: a["foo"] → a.foo
            dead_code     : true,  // discard unreachable code
            drop_debugger : true,  // discard “debugger” statements
            unsafe        : false, // some unsafe optimizations (see below)
            conditionals  : true,  // optimize if-s and conditional expressions
            comparisons   : true,  // optimize comparisons
            evaluate      : true,  // evaluate constant expressions
            booleans      : true,  // optimize boolean expressions
            loops         : true,  // optimize loops
            unused        : true,  // drop unused variables/functions
            hoist_funs    : true,  // hoist function declarations
            hoist_vars    : false, // hoist variable declarations
            if_return     : true,  // optimize if-s followed by return/continue
            join_vars     : true,  // join var declarations
            cascade       : true,  // try to cascade `right` into `left` in sequences
            side_effects  : true,  // drop side-effect-free statements
            warnings      : true,  // warn about potentially dangerous optimizations/code
            global_defs   : {}     // global definitions
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js"
        }),
		new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.(js)$/,
            threshold: 10240,
            minRatio: 0.8
        })		
    ]
};