# sync-async-defer-dojo

## How it works ?

### How sync works ?

Sync is going to stop the HTML parsing to execute the JS

### How async works ?

Async is going to start the download of the script asynchronously and execute it as soon it's loaded

### How defer works ?

Defer is going to start the download of the script asynchronously and execute it as soon the page is loaded

## Result

"A good strategy is to use async when possible, and then defer when async isn’t an option." Digital OCean

|                                | With 3 sync tags | With 3 async tags | With 3 defer tags |
| ------------------------------ | ---------------- | ----------------- | ----------------- |
| Average time to load small dom | 185,7 ms         | 2,57 ms           | 24,42 ms          |
| Average time to load big dom   | 239,7 ms         | 65 ms             | 70,5 ms           |
