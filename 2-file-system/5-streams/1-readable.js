let getReadableStreamSomehow = function () {
};


const readable = getReadableStreamSomehow();
readable.on('data', (chunk) => {
    console.log(`Received ${chunk.length} bytes of data.`);
});

readable.on('readable', () => {
    console.log(readable.read());
});

readable.on('end', () => {
    console.log('There will be no more data.');
});

readable.on('error', (error) => {
    console.log('Error was catched: ' + error)
});

readable.on('close', () => {
    console.log('Stream was closed');
});