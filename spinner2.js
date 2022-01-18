let x = 100
let arr = ['\r|   ', '\r/   ', '\r-   ', '\r-   ', '\r\\  ', '\r| ', '\r/   ', '\r-   ','\r\\  '];
for(const i of arr) {
  x++
  setTimeout(() => {
        process.stdout.write(i);   
  }, x += 100)
};