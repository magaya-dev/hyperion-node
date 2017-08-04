module.exports.StreamDocument = StreamDocumentAsync;
module.exports.StreamAttachment = StreamAttachmentAsync;

class StreamAsync {
    constructor(retriever, resource) {
        this.retriever = retriever;
        this.resource = resource;
    }

    stream(writeStream) {    
        function writeChunk(resolve, writeStream, data, start) { 
            let size = 4 * 1024; 

            if (!data || start == data.length ) {
                resolve();
                return;
            }

            let end = Math.min(start + size, data.length);
            let buffer = data.slice(start, end);

            writeStream.write(buffer);
            process.nextTick(writeChunk, resolve, writeStream, data, end);
        }

        return new Promise((resolve, reject) => {
            this.retriever(
                this.resource,
                (data) => {
                    writeChunk(resolve, writeStream, data, 0);
                });
        });
    }
}

class StreamAttachmentAsync extends StreamAsync  {
    constructor(asyncApi, attachment) {
        super(asyncApi.getAttachmentContentAsync, attachment);
    }
}

class StreamDocumentAsync extends StreamAsync  {
    constructor(asyncApi, document) {
        super(asyncApi.getDocumentContentAsync, document);
    }
}