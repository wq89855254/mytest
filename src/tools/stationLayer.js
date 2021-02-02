export class StationLayer extends BMapGL.Overlay {
    constructor(point, name, value) {
        super()
        this._point = point
        this._name = name === undefined ? '' : name
        this._value = value === undefined ? '' : value
    }
    initialize(map) {
        // 保存map对象实例
        this._map = map
        // 创建div元素，作为自定义覆盖物的容器
        var div = document.createElement("div")
        div.className = 'my-station-marker'
        div.style.position = "absolute"
        div.innerHTML = `
            <div class="center"></div>
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="txt"><p>${this._name}</p><p>${this._value}</p></div>
        `
        // 将div添加到覆盖物容器中
        map.getPanes().markerPane.appendChild(div)
        // 保存div实例
        this._div = div
        // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
        // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
        return div
    }
    draw() {
        // 根据地理坐标转换为像素坐标，并设置给容器    
        const position = this._map.pointToOverlayPixel(this._point)
        this._div.style.left = position.x - 5 + 'px'
        this._div.style.top = position.y - 5 + 'px'
    }
}