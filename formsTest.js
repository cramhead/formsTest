if (Meteor.isClient) {
  Template['testForm'].helpers({
    schema: function() {
      return new SimpleSchema({
        testField: {
          type: String,
          max: 3,
          instructions: "Enter a value!"
        }
      });
    },
    action: function() {

      return function(els, callbacks) {
        console.log("[forms] Action running!");
        console.log("[forms] Form data!", this);
        console.log("[forms] Form elements!", els);
        console.log("[forms] Callbacks!", callbacks);
        callbacks.success();
      };
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}
