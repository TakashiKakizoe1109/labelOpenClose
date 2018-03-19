# labelOpenClose

==========

You can easily add jQuery based opening / closing box.  
jQueryベースの開閉ボックスを簡単に追加できます。  

Description
============

Set options with javascript, html can add opening / closing box with simple markup.  
If there is a close button, you can close the corresponding element group with simple markup.  

javascriptでオプションを設定、htmlは簡単なマークアップで開閉ボックスを追加できます。  
閉じるボタンがある場合、簡単なマークアップで該当要素群を閉じることができます。  

Usage
===========

### 1. Download this javascript

javascriptファイルをダウンロードしてください

### 2. Require jQuery and this javascript

```
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="labelOpenClose.js"></script>
```

Markup Html
===========

#### ■ one related element

classに`label_open_close`を記述することで開閉ボックスのボタンとして機能します。  

| class | 説明 |
| :--: | :----: |
| label_open_close | 開閉ボックスのボタンとして機能 |
| label_open | ボックス初期OPEN状態 |
| label_close | ボックス初期CLOSE状態 |

ex.
```
<div class="label_open_close label_open">OpenCloseLabelButton</div>
<div>Box Detail</div>
```

#### ■ multiple related elements

classに`label_open_close`を記述することで開閉ボックスのボタンとして機能します。  
rel属性に関連のあるセレクターを記述してください。('#' or '.' or etc...)

ex.
```
<div class="label_open_close label_close" rel=".targetBox">OpenCloseLabelMultipleButton</div>
<p>other element</p>
<p>other element</p>
<div class="targetBox">Box Detail1</div>
<div class="targetBox">Box Detail2</div>
```

#### ■ add close button

classに`label_open_close_btn`を記述することで閉じるボタンとして機能します。  

| class | 説明 |
| :--: | :----: |
| label_open_close_btn | ボックスを閉じるボタンとして機能 |

ex.
```
<div class="label_open_close label_open">OpenCloseLabelButton</div>
<div>
  <p>Box Detail</p>
  <p class="label_open_close_btn">CloseButton</p>
</div>
```

Create Instance and Set Options
===========

```
$(function(){
  var label = new labelOpenClose({
    optionName:Value,
    optionName:Value,
    optionName:Value...
  });
});
```

Options
===========

| optionName                  | defaultValue                     | Description                              |
| :-------------------------: | :------------------------------: | :--------------------------------------: |
| scroll                      | `true`                           | 開閉トリガー要素が選択された場合にwindowをスクロールさせるか否か |
| moveSpeed                   | `500`                            | スクロール時の速度                       |
| offset                      | `20`                             | スクロール時のoffset                     |
| easing                      | `'swing'`                        | スクロール時のモーション                 |
| rel                         | `'rel'`                          | 関連要素を示す属性                       |
| labelSelector               | `'label_open_close'`             | 開閉トリガーとなる要素のclass名          |
| closeBtnSelector            | `'label_open_close_btn'`         | 閉トリガーとなる要素のclass名            |
| labelOpenClassName          | `'label_open'`                   | 開閉トリガー要素のOPEN状態を示すclass名  |
| labelCloseClassName         | `'label_close'`                  | 開閉トリガー要素のCLOSE状態を示すclass名 |
| boxClassName                | `'label_open_close_box'`         | 開閉対象要素のclass名                    |
| boxOpenClassName            | `'box_open'`                     | 開閉対象要素のOPEN状態を示すclass名      |
| boxCloseClassName           | `'box_close'`                    | 開閉対象要素のCLOSE状態を示すclass名     |

Updates
===========

#### Version 1.0.0
proto

License
===========

[MIT License](https://raw.githubusercontent.com/TakashiKakizoe1109/labelOpenClose/master/LICENSE) © TakashiKakizoe
