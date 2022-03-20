const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

const fromBase64 = async(base64) => {
    const blob = await (await fetch(base64)).blob()
    return new File([blob], "test")
}

module.exports = {toBase64, fromBase64}