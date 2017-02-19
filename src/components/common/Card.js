import React from 'react';
import { View } from 'react-native';

//コンポーネントの内容を定義する ※ FunctionalComponent
//参考：ES2015(ES6)新構文：アロー関数(Arrow function)
/**
 * この書き方のポイント：
 *
 * 引数：propsで<Card>...</Card>の中にある要素を表示する
 * → props.childrenとすると...の中身が取得できる
 * → この場合は<Card>は<View>でラッピングをしているコンテンツになる
 * → そしてこのViewに対するスタイルを設定する
 */
const Card = (props) => {

  //各スタイルの適用のために分割する
  const {
    containerStyle
  } = styles;

  //表示する要素を返す
  return (
    <View style={containerStyle}>
      {props.children}
    </View>
  );
};

//このコンポーネントのStyle定義
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

//インポート可能にする宣言
export { Card };
