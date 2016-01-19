export default (file) => {
        return new Promise((resolve,reject) => {
            if(!file) {
                reject("No image provided.");
            }
            const fileReader = new FileReader();
            fileReader.onload = event => {
                resolve(event.target.result);
            };
            fileReader.readAsDataURL(file);
        });
}
