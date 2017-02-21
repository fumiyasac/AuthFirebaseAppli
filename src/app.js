/**
 * このサンプルアプリの本体用ファイル
 */
import React, { Component } from 'react';
import { View } from 'react-native';

//firebaseのインポート宣言を行う
import firebase from 'firebase';

//index.jsに設定した共通部品に関するインポート宣言を行う
import { Header, Spinner } from './components/common';

//LoginFormのインポート宣言を行う（今回の自作コンポーネント）
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';

//アプリ部分のUIの組み立てを行う
class App extends Component {

  //アプリ全体の認証状態用の初期ステート
  state = { loggedIn: null };

  //コンポーネントの内容がMountされる前に行う処理
  componentWillMount() {

    //firebaseのセッティング情報を記載する
    //※ API情報に関してFirebaseコンソールを取得 → Authentication → 「ログイン方法」でメール/パスワードを有効にする
    firebase.initializeApp({
      apiKey: "AIzaSyDVwEbIjIT66gvdHFPhSvD6nekm3d6w0l8",
      authDomain: "authfirebaseappli.firebaseapp.com",
      databaseURL: "https://authfirebaseappli.firebaseio.com",
      storageBucket: "authfirebaseappli.appspot.com",
      messagingSenderId: "919888847951"
    });

    //認証状態が変更された際の処理
    //※取得できたuserオブジェクトを取得してログイン状態のステートを更新する
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  //ログイン状態に応じたコンポーネントのレンダリング処理を行う
  renderLoginStateContent() {

    //ステートの状態に応じてコンテンツの表示を変更する
    switch (this.state.loggedIn) {

      //ログイン状態の時
      case true:
        return <LogoutForm />;

      //まだログインしていない状態の時
      case false:
        return <LoginForm />;

      //ローディング真っ最中の状態の時 (TODO: ※要レイアウト調整)
      default:
        return <Spinner size="large" />;
    }
  }

  //見た目データのレンダリングを行う
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderLoginStateContent()}
      </View>
    );
  }
}

//アプリの画面本体となるこのコンポーネントファイルを部品化しておく
export default App;
