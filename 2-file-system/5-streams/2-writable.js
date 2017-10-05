let getWritableStreamSomehow = function () {
};

const writer = getWritableStreamSomehow();

writer.write('some data');
writer.write('some more data');
writer.end('done writing data');

writer.on('finish', () => {
    console.error('All writes are now complete.');
});

