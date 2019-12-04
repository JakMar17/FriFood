var hbs = require('hbs');

hbs.registerHelper("makeLink", function(text, url) {
    let link = '<a href="' + url + '">' + text + '</a>';
    return new hbs.SafeString(link);
});

hbs.registerHelper("clickReturnAddress", function(address) {
    console.log(address);
});