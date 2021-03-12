var Rx = require('rxjs/Rx');
Rx.Observable.of(1,2,3);

let a = Rx.Observable.of(1,2,3).map(function (x) { return x + '!!!'; }); // 等等
console.log(a)

a.subscribe(x => console.log(x))

var myObservable = Rx.Observable.create(observer => {
  observer.next('foo');
  setTimeout(() => observer.next('bar'), 1000);
});
myObservable.subscribe(value => console.log(value));