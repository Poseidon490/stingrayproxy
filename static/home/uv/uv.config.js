self.__uv$config = {
    prefix: '/service/',
    bare: 'https://use.astroid.wtf/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/static/home/uv/uv.handler.js',
    bundle: '/static/home/uv/uv.bundle.js',
    config: '/static/home/uv/uv.config.js',
    sw: '/static/uv-sw.js',
};
