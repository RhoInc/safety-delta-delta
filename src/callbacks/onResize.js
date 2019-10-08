import addBoxPlots from './onResize/addBoxPlots';
import updateClipPath from './onResize/updateClipPath';
import addPointClick from './onResize/addPointClick';
import addRegressionLine from './onResize/addRegressionLine';

export default function onResize() {
    addBoxPlots.call(this);
    updateClipPath.call(this);
    addPointClick.call(this);
    if (this.config.addRegressionLine) addRegressionLine.call(this);
}
