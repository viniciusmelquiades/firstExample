### How I fixed it

 - Angular comes with it's jQuery lite, so if you want to use the full jquery, import it FIRST, and them import angular.
 - There was no need to call `$('select').material_select();` in the page. The directive do that for you
 - Both in the directive you had the code `var myApp = angular.module('myApp',[]);`,  but calling the module with the Array argument a second time would recreate your module definition. You should have only one of those per module. If you want to retrieve the module, you should use `var myApp = angular.module('myApp');` as I did in the directive.
 - Because the module should be declared before it can be used (in the directive, in this case), I moved the app.js import before the directive.
 - There was a small error with the code in the directive. My mistake, form when I sent it to you. I just copied it from our production code, but we had the same bug there. The error is in the `$timeout` being inside the `else`.
 - Since I installed materialize from bower, I was sure I had the most up to date version, so I removed the `$destroy` workaround code I had for older versions.
