export const getCodeComponentDependency = code => {
  let onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
  };
  //let regex = /(\s){1,}getComponent(\s?){1,}?\((\s?){1,}?("|')(\w{1,})("|')(\s?){1,}?,(\s?){1,}?("|')(\w{1,})("|')(\s?){1,}\)/gm;
  // let regex = /(\s){1,}this\.getComponent(\s?){1,}?\((\s?){1,}?("|')(\w{1,})("|')(\s?){1,}\)/gm;  % 8 index 5
  let regex = /(\s){1,}this\.(g|s)etComponent(\s?){1,}?\((\s?){1,}?("|')(\w{1,})("|')(\s?){1,}?/gm;

  let list = code
    .split(regex)
    .map((value, index) => ({ value: value, index: index % 9 }));
  var firstParmList = list.filter(n => n.index === 6);
  firstParmList = firstParmList.map(n => n.value).filter(onlyUnique);
  // let secondParmList = list.filter(n => n.index === 10);

  return firstParmList;
};

export const getCodeSetComponentDependency = code => {
  let onlyUnique = function(value, index, self) {
    return self.indexOf(value) === index;
  };
  //let regex = /(\s){1,}getComponent(\s?){1,}?\((\s?){1,}?("|')(\w{1,})("|')(\s?){1,}?,(\s?){1,}?("|')(\w{1,})("|')(\s?){1,}\)/gm;
  // let regex = /(\s){1,}this\.getComponent(\s?){1,}?\((\s?){1,}?("|')(\w{1,})("|')(\s?){1,}\)/gm;  % 8 index 5
  let regex = /(\s){1,}this\.(s)etComponent(\s?){1,}?\((\s?){1,}?("|')(\w{1,})("|')(\s?){1,}?/gm;

  let list = code
    .split(regex)
    .map((value, index) => ({ value: value, index: index % 9 }));
  var firstParmList = list.filter(n => n.index === 6);
  firstParmList = firstParmList.map(n => n.value).filter(onlyUnique);
  // let secondParmList = list.filter(n => n.index === 10);

  return firstParmList;
};
