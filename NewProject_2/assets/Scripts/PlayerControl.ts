
const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerControl extends cc.Component {
    @property(cc.Prefab)
    bulletPre:cc.Prefab = null
    //玩家是否死亡
    isPlayDie: boolean = false
    // onLoad () {}

    start () {
        //移动
        this.node.on(cc.Node.EventType.TOUCH_MOVE,(event) => {
            console.log(event)
            console.log(event.getLocation())
            this.node.setPosition(event.getLocation())
        })
        //攻击，射击子弹
        this.schedule(() => {
            //创建子弹
            let bullet = cc.instantiate(this.bulletPre)
            bullet.setParent(cc.director.getScene())
            bullet.x = this.node.x
            bullet.y = this.node.y + 60
        },0.5)
        //开启碰撞检测
        cc.director.getCollisionManager().enabled = true
    }

    update (dt) {
        //攻击，射击子弹

    }

    die(){
        this.isPlayDie = true
        cc.loader.loadRes('hero1_die', cc.SpriteFrame, (err, res) => {
            this.node.getComponent(cc.Sprite).spriteFrame = res
        })
        //300毫秒后销毁玩家
        setTimeout(() => {
          this.node.destroy()
        }, 300)
    }
}
