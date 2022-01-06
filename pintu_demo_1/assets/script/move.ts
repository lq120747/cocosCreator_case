
const {ccclass, property} = cc._decorator;

@ccclass
export default class move extends cc.Component {
    isCollider: boolean = false
    other: any = {}
    start () {
        cc.director.getCollisionManager().enabled = true
        this.node.on(cc.Node.EventType.TOUCH_START,this.touch_start,this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE,this.touch_move,this)
        this.node.on(cc.Node.EventType.TOUCH_END,this.touch_move,this)
    }
    touch_start(){
        this.isCollider = false
    }
    //移动
    touch_move(event){
        // console.log(this.isCollider)
        if (this.isCollider) {
            let o_parent = this.other.node.parent
            // console.log(this.other.tag)
            switch(this.other.tag) {
                case 1:
                    this.node.x = o_parent.x
                    this.node.y = o_parent.y + 100
                    break;
                case 2:
                    this.node.x = o_parent.x + 100
                    this.node.y = o_parent.y
                    break;
                case 3:
                    this.node.x = o_parent.x
                    this.node.y = o_parent.y - 100
                    break;
                case 4:
                    this.node.x = o_parent.x - 100
                    this.node.y = o_parent.y
                    break;
            }
        } else {
            let location = event.getLocation()
            this.node.position = this.node.parent.convertToNodeSpaceAR(location)
        }
    }
    touch_end(event) {
        
    }
    // onLoad () {}
    // update (dt) {}
    onCollisionEnter(other,self){
        // tag 上-1 右-2 下-3 左-4
        this.isCollider = true
        this.other = other 
    }
}
