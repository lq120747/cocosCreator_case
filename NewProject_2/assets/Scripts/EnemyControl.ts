import EnemyMangerControl from "./EnemyMangerControl";
import PlayerControl from "./PlayerControl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class EnemyControl extends cc.Component {
    // onLoad () {}
    //是否死亡
    isDie: boolean = false
    start () {
        // console.log(this.node.getParent().children[2])
      
    }

    update (dt) {
        //移动
        if (!this.isDie) {
            this.node.y -= 300 * dt;
        }
        if (this.node.y < -850) {
            this.node.destroy()
        }
    }
    die(){
        this.isDie = true
        // this.node.destroy()
        //加载爆炸图片
        cc.loader.loadRes('enemy0_die',cc.SpriteFrame,(err,res) => {
            this.node.getComponent(cc.Sprite).spriteFrame = res
        })
        //300毫秒后销毁
        setTimeout(() => {
            this.node.destroy()
        }, 300)
    }
    onCollisionEnter(other){
        //碰到玩家，销毁自己，让玩家死亡，游戏停止
        if(other.tag == 2) {
            //玩家死亡
            other.getComponent(PlayerControl).die()
            //销毁自己
            console.log(this.node.getParent().children[2])
            this.node.getParent().children[2].destroy()
            this.node.destroy()
            
        }
    }
}
