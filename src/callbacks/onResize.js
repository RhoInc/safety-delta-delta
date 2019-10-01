import addBoxPlots from './onResize/addBoxPlots';
import updateClipPath from './onResize/updateClipPath';
import addPointClick from './onResize/addPointClick';

export default function onResize() {
    //Add univariate box plots to top and right margins.
    addBoxPlots.call(this);

    //fix cut off points
    updateClipPath.call(this);

    addPointClick.call(this);
}
