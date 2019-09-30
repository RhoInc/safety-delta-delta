import addBoxPlots from './onResize/addBoxPlots';

export default function onResize() {
    //Add univariate box plots to top and right margins.
    addBoxPlots.call(this);
}
