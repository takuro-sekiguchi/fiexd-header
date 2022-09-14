# 上部固定ヘッダーメニュー

## ■改めて学んだこと
- display: inline-blockの使い方
- scrollの使い方
- pageYOffsetの使い方
- offsetTopの使い方


### display: inline-blockの使い方

```css
nav ul li {
  /* li要素はブロック要素だから縦並び、inline要素にすれば横並びになる。 */
  display: inline-block;
  list-style: none;
  margin: 20px 20px;
}
```

### スクロールした時の操作をJavaScriptで制御
```js
const nav = document.getElementById('nav');
const navUl = document.getElementById('nav-ul');

window.addEventListener('scroll', () => {
  if(window.pageYOffset >= navUl.offsetTop) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
```
window.pageYOffsetで、トップからどのくらいスクロールしたのかの数値がわかる。
offsetTopは、要素がトップからどのくらい下の位置にあるのかがわかる。
navUlよりも下にあればstickyクラスを付与、それ以外ならstickyクラスを除去する。

```css
nav.sticky {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 5px 3%;
  transition: 0.5s ease-in-out;
  /* paddingの左右の数値分(3％)スクロールして出てくる */
}
```




