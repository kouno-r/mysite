'use strict';
/*refactoring(リファクタリング)内部構造を変えずに後で整理する*/
//const sorce = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//sorce.splice(Math..,1)　sorce[]のインデックスrandom番目を1個切り取るり配列で値を返す
//sorce.splice(Math..,1)[0] 返す値は配列で1個だけ切り取っているので[0]指定で値だけ取得する
//Math.floor（Math.random()＊１５）　０～１４までの数字を返す
{
    function createColumn(col) {
      const source = [];
      for (let i = 0; i < 15; i++) {
        source[i] = i + 1 + 15 * col;
        
      } 
      const column = [];
      for (let i = 0; i < 5; i++) {
        column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
      }
      return column;
    }

  　function createColumns(){
    const columns = [];
    for(let i = 0;i < 5;i++){
    columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
    }

   /* function createBingo(){
    const bingo = [];
    for(let row = 0; row < 5; row++){
      bingo[row] = [];
    for(let col = 0; col < 5; col++){
      bingo[row][col] = columns[col][row];//行と列を逆転させ代入
    }
  } 
  return bingo;
  //console.table(bingo);
}*/
function renderBingo(c){
  for(let row = 0;row < 5;row++){
    const tr = document.createElement('tr');
  for(let col= 0;col < 5;col++){
    const td = document.createElement('td');
    td.textContent = c[col][row];//行列逆転
    tr.appendChild(td);
    }
    document.querySelector('tbody').appendChild(tr);  
    }
  }
 const c = createColumns();
 renderBingo(c);
}
/*
splice()インデックスと個数を指定して配列から要素を切り取る。

let arr = ['a', 'b', 'c', 'd', 'e'];
arr.splice(
    1,    // インデックス1（'b'）からスタートして
    2     // 2個の要素を切り取る（'b', 'c'）
);
console.log(arr);    // ['a', 'd', 'e']
ちなみにspliceの戻り値で切り取った要素を受け取ることができる。
返り値は配列になる。為値を1個受取りたい場合splice()[i]で指定

let cut = arr.splice(1, 2);  // ['b', 'c']*/
