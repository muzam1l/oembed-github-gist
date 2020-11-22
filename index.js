export default {
    provider_name: 'GitHub Gist by muzam1l',
    provider_url: 'https://github.com/muzam1l',
    endpoints: [
        {
            schemes: ['https://gist.github.com/**'],
            url: '/',
        },
    ],
    requestInterceptor: function (config) {
        var url = new URL(config.params.url);
        var file = url.origin + url.pathname + '.js';
        config.url = config.url + file;
        config.params.url = file;
        return config;
    },

    responceInterceptor: function (responce) {
        var params = responce.config.params;
        return {
            ...responce,
            data: {
                type: 'rich',
                version: '1.0.0',
                html: `
<iframe frameborder="0" id="github-gist-plugin" style="height: ${params.height || params.maxheight}px;" src="about:blank"></iframe>

<script type="text/javascript">
var doc = document.getElementById('github-gist-plugin').contentWindow.document;
var script = document.createElement('script'); script.src = '${params.url}';
doc.open(); doc.write(script.outerHTML); doc.close();
</script>`,
            },
        };
    },
};
