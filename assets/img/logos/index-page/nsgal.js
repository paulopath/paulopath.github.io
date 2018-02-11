var nsItems = require("soap-items")

NS = {
  view: function() {
    return m(".products", nsItems.map(function(nsi) 
      {
        return
          m("div.w3-third"),
          m("div.w3-card"),
          m("img", {src: "nsoap/" + nsi.thumb,style:"width:100%"}),
          m("div.w3-container"),
          m("h5", nsi.name),
      })
    )
  };
}
