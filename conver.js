function convert(str){
  const parse = str.split(" ");
  const number = parseFloat(parse[0]);
  const unit = parse[1];
  const convertion = unitObj(number, unit);
  return convertion
}

function unitObj(esca, unit='') {
  const result = {kb: 0, mb: 0, gb: 0, tb: 0}

  switch(unit.toUpperCase()) {
    case 'KB':
      result.kb = esca;
      result.mb = result.kb / 1024;
      result.gb = result.mb / 1024;
      result.tb = result.gb / 1024;
      break;
    case 'MB':
      result.mb = esca;
      result.kb = result.mb * 1024;
      result.gb = result.mb / 1024;
      result.tb = result.gb / 1024;
      break;
    case 'GB':
      result.gb = esca;
      result.mb = result.gb * 1024;
      result.kb = result.mb * 1024;
      result.tb = result.gb / 1024;
      break;
    case 'TB':
      result.tb = esca;
      result.gb = result.tb * 1024;
      result.mb = result.gb * 1024;
      result.kb = result.mb * 1024;
      break;
    default:
      return 'la unidad representada no se encuentra entre los casos';
  }
  console.log(result);
  return result;
}


module.exports = {unitObj, convert};
