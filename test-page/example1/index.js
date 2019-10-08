const settings =   {
      studyday_col: 'LBDY',
      value_col: 'LBSTRESN',
      measure_col: 'LBTEST',
      normal_col_low: 'LBSTNRLO',
      normal_col_high: 'LBSTNRHI',
      visit_col: 'VISIT',
      visitn_col: 'VISITNUM',
      visits: { baseline: [], comparison: ["WEEK 26"], stat: 'mean' },
      addRegressionLine:true
    //  group_cols: 'ARM',
  }
const chart = safetyDeltaDelta('#container', settings);
d3.csv('https://raw.githubusercontent.com/RhoInc/data-library/master/data/clinical-trials/sdtm/cdisc-pilot-01/lb.csv', function(data) {
    chart.init(data);
});
