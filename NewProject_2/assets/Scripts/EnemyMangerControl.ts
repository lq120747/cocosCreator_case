
const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyMangerControl extends cc.Component {
    //敌机预设体
    @property(cc.Prefab)
    enemyPre: cc.Prefab = null
    // onLoad () {}

    start () {
        //每隔两秒创建一个敌机
        this.schedule(() => {
            //创建敌机
            let enemy = cc.instantiate(this.enemyPre)
            enemy.setParent(cc.director.getScene())
            enemy.y = this.node.y
            enemy.x = Math.random() * 400//0-400的随机数
        },2)
    }

    // update (dt) {}
}
