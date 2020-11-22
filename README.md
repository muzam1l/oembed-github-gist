Github gist sample plugin for [react-tiny-oembed](https://github.com/muzam1l/react-tiny-oembed) without proxy server.

## Installation

```bash
npm install oembed-github-gist
```

## Usage

```jsx
import Embed, { defaultProviders } from 'react-tiny-oembed'
import gist from 'oembed-github-gist'

function App() {
...

    <Embed
        url="https://gist.github.com/gfx/7a35efaca5e6b40a8b4f888b7f36a5d1"
        proxy="http://cors-anywhere.herokuapp.com/"
        providers={[...defaultProviders, gist]}
    />
}
```

## Options

Nohing much, but you gotta provide `height` in Embed options, otherwise it straight out uses `maxheight` from same options as height, which works for most cases though. 


## About

This is basically a dirty little hack to get github gist urls running with _react-tiny-oembed_ without need for a oembed wrapper proxy server.

It uses `requestInterceptor` and `responceInterceptor` in `Provider` object to do some hacks so as to convert _request_ and _responce_ into the format _Embed_ component can undestand.