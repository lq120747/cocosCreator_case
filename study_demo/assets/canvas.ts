
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    onLoad () {
        cc.assetManager.loadBundle('common', function (err, bundle) {
            if (err) {
                return console.error(err);
            }
            console.log('load bundle successfully.');
        })
    }
    start () {

    }

    // update (dt) {}
}
