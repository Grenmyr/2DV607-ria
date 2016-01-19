export default (file) => {
    if(file){
      const fileReader = new FileReader();
      fileReader.onload = event => event.target.result;
      fileReader.readAsBinaryString(file);
    }
    return null;
}
