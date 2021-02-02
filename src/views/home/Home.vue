<template>
  <div class="home">
    <!-- 这里是用vue-bmap组件调用地图 -->
    <!-- <baidu-map id="map" :center="{lng: 116.404, lat: 39.915}" :scroll-wheel-zoom="true" :zoom="15" ak="vT3ZcWrgwEYP7FvoxzcDAYYPnz3uGIyH"></baidu-map> -->
    <div id="map"></div>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import { StationLayer } from "../../tools/stationLayer";
export default {
  components: {
    BaiduMap,
  },
  data() {
    return {
      map: null,
    };
  },
  mounted() {
    this.initmap();
  },
  methods: {
    initmap() {
      var map = new BMapGL.Map("map", {
        minZoom: 3,
        maxZoom: 12,
        //  mapType: 'BMAP_SATELLITE_MAP', //应该是在这里设置tile图层
      });
      // 创建地图实例
      var point = new BMapGL.Point(116.404, 39.915);
      // 创建点坐标
      map.centerAndZoom(point, 15);
      // 启用滚轮放大缩小
      map.enableScrollWheelZoom();
      //设置3d视角
      map.setHeading(94.5);
      map.setTilt(60);
      this.map = map;
      //添加控件
      this.addControl();
      //增加点
      this.drawPoint();
    },

    addControl() {
      // 添加3D控件
      var navi3DCtrl = new BMapGL.NavigationControl3D();
      this.map.addControl(navi3DCtrl);
      //田间地图类型控件
      this.map.addControl(new BMapGL.MapTypeControl());
      //自定义控件
      this.defineControl();
    },
    defineControl() {
      //定义一个控件类
      function ZoomControl() {
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
        this.defaultOffset = new BMapGL.Size(10, 20);
      }
      //通过JavaScript的prototype属性继承于BMap.Control
      ZoomControl.prototype = new BMapGL.Control();

      //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
      //在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中
      ZoomControl.prototype.initialize = function (map) {
        //创建一个dom元素
        var div = document.createElement("div");
        //添加文字说明
        div.appendChild(document.createTextNode("放大2级"));
        // 设置样式
        div.style.cursor = "pointer";
        div.style.padding = "7px 10px";
        div.style.boxShadow = "0 2px 6px 0 rgba(27, 142, 236, 0.5)";
        div.style.borderRadius = "5px";
        div.style.backgroundColor = "white";
        // 绑定事件,点击一次放大两级
        div.onclick = function (e) {
          map.setZoom(map.getZoom() + 2);
        };
        // 添加DOM元素到地图中
        map.getContainer().appendChild(div);
        // 将DOM元素返回
        return div;
      };
      //创建控件元素
      var myZoomCtrl = new ZoomControl();
      //添加到地图中
      this.map.addControl(myZoomCtrl);
    },
    drawPoint() {
      //----------添加默认的marker标注
      var point = new BMapGL.Point(116.404, 39.915);
      var marker1 = new BMapGL.Marker({ lng: 116.404, lat: 39.915 });
      this.map.addOverlay(marker1);
      // 创建标注对象并添加到地图
      marker1.addEventListener("click", function () {
        alert("您点击了标注");
      });
      //------------添加icon标注
      var myIcon = new BMapGL.Icon("markers.png", new BMapGL.Size(23, 25), {
        // 指定定位位置。
        // 当标注显示在地图上时，其所指向的地理位置距离图标左上
        // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
        // 图标中央下端的尖角位置。
        anchor: new BMapGL.Size(10, 25),
        // 设置图片偏移。
        // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
        // 需要指定大图的偏移位置，此做法与css sprites技术类似。
        imageOffset: new BMapGL.Size(0, 0 - 25), // 设置图片偏移
      });
      var marker2 = new BMapGL.Marker(point, {
        icon: myIcon,
      });
      this.map.addOverlay(marker2);
      //------------添加自定义marker
      var marker3 = new StationLayer(point);
      console.log(marker3)
      this.map.addOverlay(marker3);
    },
  },
};
</script>

<style>
.home {
  width: 100%;
  height: 100%;
}
#map {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
}
</style>