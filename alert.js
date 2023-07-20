alert('hello Muwatok')

const fileHandle = await window.showSaveFilePicker();
const fileStream = await fileHandle.createWritable();
await fileStream.write(new Blob(["CONTENT"], {type: "text/plain"}));
await fileStream.close();
