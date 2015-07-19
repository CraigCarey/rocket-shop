UI.registerHelper('money', function(amount) {
    return accounting.formatMoney(amount);
});

UI.registerHelper('markdown', function(text) {
    var converter = new showdown.Converter();
    return converter,makeHtml(text);
});