export default (file) => {
    if(file){
        const fileReader = new FileReader();

        return new Promise((resolve) => {
            fileReader.onload = event => resolve(event.target.result);
            fileReader.readAsDataURL(file);
        });

    }
    return null;
}
