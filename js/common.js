$(function() { 
var sWidth = $("#focus").width();
var len = $("#focus ul li").length;
var index = 0; 
var picTimer; 

var btn = "<div class='btnBg'></div><div class='btn'>"; 
for(var i=0; i < len; i++) { 
btn += "<span></span>"; 
} 
btn += "</div><div class='preNext pre'></div><div class='preNext next'></div>"; 
$("#focus").append(btn); 
$("#focus .btnBg").css("opacity",0.5); 

$("#focus .btn span").css("opacity",0.4).mouseenter(function() { 
index = $("#focus .btn span").index(this); 
showPics(index); 
}).eq(0).trigger("mouseenter"); 

$("#focus .preNext").css("opacity",0.2).hover(function() { 
$(this).stop(true,false).animate({"opacity":"0.5"},300); 
},function() { 
$(this).stop(true,false).animate({"opacity":"0.2"},300); 
}); 

$("#focus .pre").click(function() { 
index -= 1; 
if(index == -1) {index = len - 1;} 
showPics(index); 
}); 

$("#focus .next").click(function() { 
index += 1; 
if(index == len) {index = 0;} 
showPics(index); 
}); 

$("#focus ul").css("width",sWidth * (len)); 

$("#focus").hover(function() { 
clearInterval(picTimer); 
},function() { 
picTimer = setInterval(function() { 
showPics(index); 
index++; 
if(index == len) {index = 0;} 
},4000);
}).trigger("mouseleave"); 

function showPics(index) {
var nowLeft = -index*sWidth;
$("#focus ul").stop(true,false).animate({"left":nowLeft},300);
//$("#focus .btn span").removeClass("on").eq(index).addClass("on");
$("#focus .btn span").stop(true,false).animate({"opacity":"0.4"},300).eq(index).stop(true,false).animate({"opacity":"1"},300);
} 

var headers = ["H3"];

$(".accordion").click(function(e) {
  var target = e.target,
      name = target.nodeName.toUpperCase();
  
  if($.inArray(name,headers) > -1) {
    var subItem = $(target).next();
    
    //slideUp all elements (except target) at current depth or greater
    var depth = $(subItem).parents().length;
    var allAtDepth = $(".accordion p, .accordion div").filter(function() {
      if($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true; 
      }
    });
    $(allAtDepth).slideUp("fast");
    
    //slideToggle target content and adjust bottom border if necessary
    subItem.slideToggle("fast",function() {
        $(".accordion :visible:last").css("border-radius","0 0 0 0");
    });
    $(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
  }else{
	  var ifm= document.getElementById("mainproduct"); 
	  if(target.innerText == "高压开关设备"){
		ifm.src="product/0101.html";
		ifm.height="850px";
	  }else if(target.innerText == "低压开关设备"){
		ifm.src="product/0102.html";
		ifm.height="850px";
	  }else if(target.innerText == "桥架系列"){
		ifm.src="product/0201.html";
		ifm.height="1100px";
	  }else if(target.innerText == "高低压母线"){
		ifm.src="product/0301.html";
		ifm.height="850px";
	  }else if(target.innerText == "工业热电偶"){
		ifm.src="product/0401.html";
		ifm.height="850px";
	  }else if(target.innerText == "工业热电阻"){
		ifm.src="product/0402.html";
		ifm.height="850px";
	  }else if(target.innerText == "压力开关/温度开关"){
		ifm.src="product/0403.html";
		ifm.height="850px";
	  }else if(target.innerText == "液位计/流量计/安全栅"){
		ifm.src="product/0404.html";
		ifm.height="850px";
	  }else if(target.innerText == "SWP智能显示仪表"){
		ifm.src="product/0405.html";
		ifm.height="850px";
	  }else if(target.innerText == "智能电力监测仪"){
		ifm.src="product/0406.html";
		ifm.height="850px";
	  }else if(target.innerText == "电量变送器"){
		ifm.src="product/0407.html";
		ifm.height="850px";
	  }else if(target.innerText == "特殊热电偶/热电阻"){
		ifm.src="product/0408.html";
		ifm.height="850px";
	  }else if(target.innerText == "温度变送器"){
		ifm.src="product/0409.html";
		ifm.height="850px";
	  }else if(target.innerText == "压力变送器"){
		ifm.src="product/0410.html";
		ifm.height="850px";
	  }else if(target.innerText == "双金属温度计"){
		ifm.src="product/0411.html";
		ifm.height="850px";
	  }else if(target.innerText == "压力表系列"){
		ifm.src="product/0412.html";
		ifm.height="850px";
	  }else if(target.innerText == "电动调节阀"){
		ifm.src="product/0501.html";
		ifm.height="850px";
	  }else if(target.innerText == "管件与阀门"){
		ifm.src="product/0502.html";
		ifm.height="850px";
	  }else if(target.innerText == "气动调节阀"){
		ifm.src="product/0503.html";
		ifm.height="850px";
	  }else if(target.innerText == "光缆"){
		ifm.src="product/0601.html";
		ifm.height="400px";
	  }else if(target.innerText == "电缆"){
		ifm.src="product/0602.html";
		ifm.height="400px";
	  }else if(target.innerText == "数据电缆"){
		ifm.src="product/0603.html";
		ifm.height="400px";
	  }else if(target.innerText == "桥架母线"){
		ifm.src="product/0604.html";
		ifm.height="400px";
	  }
  }
});

}); 
