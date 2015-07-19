Products = new Mongo.Collection("products");

Products.bySku = function(sku){
    return Products.findOne({sku : sku});
};

Products.featured = function(){
    var featuredSkus = ["honeymoon-mars","johnny-liftoff","one-way-reentry"];
    return Products.find({sku : {$in : featuredSkus}},
        // restrict the fields that are sent to the client
        {fields : {inventory : false, cost : false}});
};

Products.allow({
    update : function(userid, product){
        return isAdmin();
    },
    insert : function(userid, product){
        return isAdmin();
    },
    remove : function(userid, product){
        return isAdmin();
    }
});