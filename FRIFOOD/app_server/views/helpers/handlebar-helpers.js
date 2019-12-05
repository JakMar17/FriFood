var hbs = require('hbs');

hbs.registerHelper("makeLink", function(text, url) {
    let link = '<a href="' + url + '">' + text + '</a>';
    return new hbs.SafeString(link);
});

hbs.registerHelper("clickReturnAddress", function(address) {
    console.log(address);
});

hbs.registerHelper('published', function(paramether) {
    if (paramether == "published") {
        return "Objavljen";
    } else {
        return "Izbrisan";
    }
});

// hbs.registerHelper("toJSON", function())