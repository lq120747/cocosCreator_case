const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    //星星和主角之间的距离小于这个数值时，就会完成收集
    @property
    pickRadius: number = 0 

    // onLoad () {}

    start () {
        console.log(this.game, '2222')
    }

    update (dt) {
        //没帧判断星星和主角之间的距离是否小于收集距离
        if(this.getPlayerDistance() < this.pickRadius) {
            //调用收集行为
            this.onPicked()
            return
        }
    }
    getPlayerDistance(){
        //根据player节点位置判断距离
        var playerPos = this.game.player.getPosition()
        //根据两点位置计算两点之间的距离
        var dist = this.node.position.sub(playerPos).mag()
        return dist
    }
    onPicked(){
        //当星星被收集时，调用starGame脚本中的接口，生成一个新的星星
        this.game.spawnNewStar();
        //然后销毁当前星星节点
        this.node.destroy();
    }
}
