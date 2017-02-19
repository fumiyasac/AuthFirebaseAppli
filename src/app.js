/**
 * このサンプルアプリの本体用ファイル
 */
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';

//firebaseのインポート宣言を行う
import firebase from 'firebase';

class App extends Component {

  //コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {

    //firebaseのセッティング情報を記載する
    firebase.initializeApp({
      apiKey: "AIzaSyDVwEbIjIT66gvdHFPhSvD6nekm3d6w0l8",
      authDomain: "authfirebaseappli.firebaseapp.com",
      databaseURL: "https://authfirebaseappli.firebaseio.com",
      storageBucket: "authfirebaseappli.appspot.com",
      messagingSenderId: "919888847951"
    });
  }

  //見た目データのレンダリングを行う
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
      </View>
    );
  }
}

//アプリの画面本体となるこのコンポーネントファイルを部品化しておく
export default App;
