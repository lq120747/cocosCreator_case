const {ccclass, property} = cc._decorator;
import PlayerControl from "./PlayerControl";
@ccclass
export default class BgControl extends cc.Component {

    @property(PlayerControl)
    Player: PlayerControl = null
    // onLoad () {}

    start () {
        
    }
    update (dt) {
        if(this.Player.isPlayDie) return
        //移动
        //遍历子物体（背景）
        for(let bgNode of this.node.children) {
            bgNode.y -= 50 * dt
            if (bgNode.y < -850) {
                bgNode.y += 852 * 2
            }
        }
    }
}
