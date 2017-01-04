/*
 * jQuery File Upload Plugin Angular JS Example
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global window, angular */

;(function () {
    'use strict';

    var isOnGitHub = false,
        url = 'https://upload.wistia.com?access_token=6ed3a77b8aafa79278d1ca8527a73222271b41c92174ddd536db7da034c8d665';

    angular.module('demo', [
        'blueimp.fileupload'
    ])
        .config([
            '$httpProvider', 'fileUploadProvider',
            function ($httpProvider, fileUploadProvider) {
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }
        ]);
}());
