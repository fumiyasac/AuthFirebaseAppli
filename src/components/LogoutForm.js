/**
 * ログアウト用のフォーム部分のコンポーネント
 */
import React, { Component } from 'react';
import { Text } from 'react-native';

//firebaseのインポート宣言を行う
import firebase from 'firebase';

//LoginFormの作成に必要な自作コンポーネント群のインポート宣言を行う
import { Button, Card, CardSection } from './common';

//ログアウト用フォーム部分のUIの組み立てを行う
class LogoutForm extends Component {

  //見た目データのレンダリングを行う
  render() {
    return(
      <Card>
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            ログアウト
          </Button>
        </CardSection>
      </Card>
    );
  }
};

//ログアウト用フォームの実体となるこのコンポーネントファイルを部品化しておく
export default LogoutForm;
