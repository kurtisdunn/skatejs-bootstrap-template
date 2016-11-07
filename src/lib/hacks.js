// This hack is required for the html5 history API to work because it makes the
// assumption that if you're using AMD, you're using RequireJS which is a
// terrible assumption. AMD !== RequireJS.

window.requirejs = {};
