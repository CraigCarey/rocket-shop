Router.configure({
    // assign templates to certain events
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name : 'homeIndex',
    data : function () {
        return {
            message : "Welcome to the Rocket Shop"
        }
    }
});

Router.route('/about', {
    name : 'homeAbout'
});

Router.route('/contact', {
    name : 'homeContact'
});

// sku: Stock Keeping Unit
Router.route("/products/:sku", {
   name : 'productsShow',
    data : function() {
        return Products.findOne({ sku : this.params.sku });
    }
});