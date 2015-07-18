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