
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

 
    sartPos:cc.Vec2 = null
    endPos:cc.Vec2 = null
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    touch_start(event){
        let location = event.getLocation()
        this.sartPos = this.node.parent.convertToNodeSpaceAR(location)
    }
    touch_end(event){
        let location = event.getLocation()
        this.endPos = this.node.parent.convertToNodeSpaceAR(location)
        let angle = this.calculateAngle(this.sartPos,this.endPos)
        console.log(angle)
        this.node.rotation = angle
    }
    start () {
        this.node.on(cc.Node.EventType.TOUCH_START,this.touch_start,this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touch_end,this)
    }

 
    calculateAngle(first:cc.Vec2, second:cc.Vec2)
    {
        let len_y = second.y - first.y;
        let len_x = second.x - first.x;
        let tan_yx = Math.abs(len_y / len_x);
        let temp = Math.atan(tan_yx) * 180/Math.PI;
        let angle = 0;
        if(len_y > 0 && len_x < 0){
            angle = temp - 90;
        }
        else if(len_y > 0 && len_x > 0){
            angle = -temp + 90;
        }
        else if(len_y < 0 && len_x < 0){
            angle = -temp - 90;
        }
        else if(len_y < 0 && len_x > 0){
            angle = temp + 90;
        }
        else if(len_y == 0 && len_x != 0){
            angle = len_x < 0 ? -90 : 90;
        }
        else if(len_x == 0 && len_y != 0){
            angle = len_y < 0 ? 180 : 0;
        }
        console.log('Temp', temp);
        console.log('Angle ', angle)
        return angle;
    }
    // update (dt) {}
}
