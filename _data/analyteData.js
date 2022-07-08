module.exports = function () {
  // each item in data represents a separate analyte record
  // we can convert the excel or .csv file to something like this, if we can't find api
  // look for api first before worrying about this strategy; this is the backup
  const replaceMeWithRealAnalytes = {
    metadata: {
      tableHeaderName: "RETRIEVED ANALYTE",
    },
    data: {
      firstAnalyte: {
        name: "First Analyte",
        row1: ["col1Value", "col2Value"],
        row2: ["col1Value", "col2Value"],
        row3: ["col1Value", "col2Value"],
        row4: ["col1Value", "col2Value"],
      },
      secondAnalyte: {
        // all analyte data objects have same structure
      },
      // we could store a limited number of analytes here this way
      // we dont want all the ones in the excel file if it has like 10,000
      // when the user clicks search after typing "firstAnalyte" in box 
    },
  };

  return replaceMeWithRealAnalytes;
};
