sap.ui.require(
	[   "sap/ui/demo/bulletinboard/controller/Post.controller",
		"sap/m/MessageToast",
		"sap/ui/thirdparty/sinon",
		"sap/ui/thirdparty/sinon-qunit"
	],
	function (Post, MessageToast) {
		"use strict";
		
		QUnit.module("add and remove favorite",{
		    beforeEach:function(){
		        this.post = new Post();
		    },
		    afterEach:function(){
		        this.post.destroy();
		    }
		});
	});