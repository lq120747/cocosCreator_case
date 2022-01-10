const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    // 主角跳跃高度
    @property
    jumpHeight:number = 0;
    // 主角跳跃持续时间
    @property
    jumpDuration:number = 0;
    // 最大移动速度
    @property
    maxMoveSpeed:number = 0;
    // 加速度
    @property
    accel:number = 0

    //加速度开关
    accLeft: boolean = false //向左
    accRight: boolean = false //向右

    xSeep: number = 0 //主角当前水平方向速度

    onLoad () {
        var jumpAction = this.runJumpAction()
        cc.tween(this.node).then(jumpAction).start()
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)
    }

    start () {
        
    }

    update (dt) {
        //根据当前加速度方向每帧更新速度
        if(this.accLeft){
            this.xSeep -= this.accel * dt
        } else if(this.accRight) {
            this.xSeep += this.accel * dt
        }

        //限制主角的速度不能超过最大值
        if(Math.abs(this.xSeep) > this.maxMoveSpeed){
            this.xSeep = this.maxMoveSpeed * this.xSeep / Math.abs(this.xSeep)
        }

        //根据当前速度更新主角的位置
        this.node.x += this.xSeep * dt
    }
    runJumpAction(){
        //跳跃上升
        var jumUp = cc.tween().by(this.jumpDuration,{y: this.jumpHeight},{easing:'sineOut'})
        //下落
        var jumDown = cc.tween().by(this.jumpDuration,{y: -this.jumpHeight},{easing:'sineIn'})
         //创建一个缓动系统，按jumpUp、jumDown的顺序执行动作
        var tween = cc.tween().sequence(jumUp,jumDown)
         //不断重复
        return cc.tween().repeatForever(tween)
    }
    onKeyDown(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft = true
                break;
            case cc.macro.KEY.d:
                this.accRight = true
                break;
        }
    }
    onKeyUp(event){
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft = false
                break;
            case cc.macro.KEY.d:
                this.accRight = false
                break;
        }
    }
}
