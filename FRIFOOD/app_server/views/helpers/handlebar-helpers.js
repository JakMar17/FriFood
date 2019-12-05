var hbs = require('hbs');

hbs.registerHelper("makeLink", function(text, url) {
    let link = '<a href="' + url + '">' + text + '</a>';
    return new hbs.SafeString(link);
});

hbs.registerHelper('changeID', function (input) {
    console.log("XX"+this._id);
    return "XX"+this._id;
});

hbs.registerHelper('changeModal', function (input) {
    console.log("XXXX"+this._id);
    return "XXXX"+this._id;
});

hbs.registerHelper('isPublished', function(status) {
   if (status === "published")
       return "Objavljen";
   else
       return "Izbrisan";
});