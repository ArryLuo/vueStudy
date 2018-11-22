$(function() {
	demovue();
})

var demovue = function() {
	var tabdata = {
		tab_topdata: [],
		dataurl: [{

				tab_url: "index.html",
				name: "网站首页",
				classtype:"active",
			},
			{
				tab_url: "whisper.html",
				name: "网站动态",
				classtype:"",
			},

			{

				tab_url: "leacots.html",
				name:"网站留言",
				classtype:"",
			},
			
			{

				tab_url: "about.html",
				name:"关于网站",
				classtype:"",
			}
		],
		tab_url: "",
	}

	var main_app = new Vue({
		el: '#blog_main_id',
		data: tabdata,
		created: function() { //vue初始化后加载
			this.$options.methods.initdata(this);

		},

		methods: {
			/**
			 * 初始化table
			 * @param {Object} that
			 */

			initdata: function(that) {
				//console.log("haha");
				//初始化tablurl
				var tab_url = that.$options.methods.getContextPath() + "/vueday1/html/index.html";
				var iframe = $("#iframe_id");
				iframe.attr("src", tab_url);

			},
			/**
			 * tab_top的点击事件
			 * @param {Object} e
			 */
			tabl_topclick: function(e, index) {
				e.stopPropagation();
				//alert(index);
				var datalist=main_app.dataurl;
				 for(var i=0;i<datalist.length;i++ ){
	              	if(i==index){
	              		continue;
	              	}
	              var dataobj=	datalist[i];
	              dataobj.classtype="";
	              }
				var tab_url = main_app.dataurl[index].tab_url;
				main_app.dataurl[index].classtype="active";
				
				var iframe = $("#iframe_id");
				iframe.attr("src", main_app.$options.methods.getContextPath() + "/vueday1/html/" + tab_url);
				
			},

			filldata: function(that, mode, data) {
				switch(mode) {
					case "0":
						break;
					default:
						break;
				}
			},

			methodpost: function(that, mode, url, json) {
				$.ajax({
					type: "post",
					url: url,
					async: true,
					dataType: "JSON",
					success: function(obj) {
						that.$options.methods.filldata(that, mode, obj);
					}
				});
			},
			/**
			 * 获取上下文
			 */
			getContextPath: function() {
				var pathName = document.location.pathname;
				var index = pathName.substr(1).indexOf("/");
				var result = pathName.substr(0, index + 1);
				return result;
			}
		}
	})

}