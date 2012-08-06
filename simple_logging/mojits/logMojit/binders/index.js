YUI.add('logBinderIndex', function(Y, NAME) {
  Y.namespace('mojito.binders')[NAME] = {
    init: function(mojitProxy) {
      Y.log('[BINDER]: Log message from init.',"info");
      this.mojitProxy = mojitProxy;
    },
    bind: function(node) {
      Y.log('[BINDER]: Log message from bind.',"info");
      this.node = node;
    }
  };
}, '0.0.1', {requires: ['mojito-client']});
