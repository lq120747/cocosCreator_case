const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Prefab)
    //这个属性引用了星星的预制资源
    starPrefab: cc.Prefab = null
    // onLoad () {}
    @property
    //星星产生后消失时间的随机范围
    maxStarDuration = 5
    @property
    minStarDuration = 3

    //地面节点，用于确定星星生成的高度
    @property(cc.Node)
    ground: cc.Node = null

    //player节点，用于获取主角弹跳的高度，和控制主角行动的开关
    @property(cc.Node)
    player:cc.Node = null

    groundY: number = 0

    onLoad(){
        //获取地平面的y坐标
        this.ground.y + this.ground.height / 2
        //生成一个新的星星
        this.spawnNewStar()
    }

    start () {

    }

    // update (dt) {}
    spawnNewStar(){
        //使用给定的模板在场景中生成一个新节点
        var newStar = cc.instantiate(this.starPrefab)
        //将新增的节点添加到Canvas节点下
        this.node.addChild(newStar)
        //为星星设置一个随机位置
        newStar.setPosition(this.getNewStarPosition())
        newStar.getComponent('star').game = this
        console.log(newStar.getComponent('star'), '1111')
    }
    getNewStarPosition(){
        var randX = 0
        //根据地平面位置和主角跳跃高度，随机生成一个星星的y坐标
        var randY = this.groundY + Math.random() * this.player.getComponent('starPlayer').jumpHeight + 50
        //根据屏幕宽度，随机得到一个星星x坐标
        var maxX = this.node.width / 2
        randX = (Math.random() - 0.5) * 2 * maxX
        //返回星星坐标
        return cc.v2(randX, randY)
    }
}
