# sync-async-defer-dojo

## How it works ?

### How sync works ?

Sync is going to stop the HTML parsing to execute the JS

### How async works ?

Async is going to start the download of the script asynchronously and execute it as soon it's loaded

### How defer works ?

Defer is going to start the download of the script asynchronously and execute it as soon the page is loaded

## The Dojo

### I) Read the section above

### II) Open the sandbox

[Click here](https://codesandbox.io/s/sync-async-defer-dojo-t2q8z) and open the console at the bottom. Or click on the top right button to open the sandbox in a dedicated page

### III) Play with the sandbox

- In the HTML you can update the defer and async properties to see the impact on the loading time of the DOM

- You can also add a lot of html to increase the loading time and see the impact on the DOMLoadingTime

- Guess the best solution for your project and ask an expert to confirm

### IV) Read the section bellow

## Result

"A good strategy is to use async when possible, and then defer when async isn’t an option." Digital Ocean

Link to the sandbox : https://codesandbox.io/s/sync-async-defer-dojo-t2q8z

|                                | With 3 sync tags | With 3 async tags | With 3 defer tags |
| ------------------------------ | ---------------- | ----------------- | ----------------- |
| Average time to load small dom | 185,7 ms         | 2,57 ms           | 24,42 ms          |
| Average time to load big dom   | 239,7 ms         | 65 ms             | 70,5 ms           |
