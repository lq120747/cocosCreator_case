
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // onLoad () {}
    start () {

    }
    on_btn_onclick(){
        cc.director.loadScene('game2')
    }
    on_btn_onShoe(){
        let alert = cc.find('Canvas/alert')
        // console.log(alert)
        alert.active = true
        alert.opacity = 0
        cc.tween(alert).to(1,{opacity:255}).start()

    }
    on_canle(){
        let alert = cc.find('Canvas/alert')
        // console.log(alert)
        // alert.active = false
        let action = cc.fadeOut(1)
        alert.runAction(action)
    }
    // update (dt) {}
}
