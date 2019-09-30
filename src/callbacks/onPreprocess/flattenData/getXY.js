export default function getXY(e) {
    e.shiftx = +setVal(e, config.x_params);
    e.shifty = +setVal(e, config.y_params);
    e.chg = e.shifty - e.shiftx;
    e.pchg = format('%')(e.chg / e.shiftx);
}
