/**
 * ログイン用のフォーム部分のコンポーネント
 */
import React, { Component } from 'react';
import { Text } from 'react-native';

//firebaseのインポート宣言を行う
import firebase from 'firebase';

//LoginFormの作成に必要な自作コンポーネント群のインポート宣言を行う
import { Button, Card, CardSection, Input, Spinner } from './common';

//ログイン用フォーム部分のUIの組み立てを行う
class LoginForm extends Component {

  //初期状態のステートと対応する値を定義する
  state = { email: '', password: '', error: '', loading: false };

  //ボタン押下時に実行されるメソッド
  onButtonPress() {

    //ステートからメールアドレスとパスワードを取得する
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  //ログイン処理に失敗した場合に実行されるメソッド
  onLoginFail() {

    //ステート内の値を更新する
    this.setState({ error: '認証に失敗しました。', loading: false });
  }

  //ログイン処理に成功した場合に実行されるメソッド
  onLoginSuccess() {

    //ステート内の値を更新する
    this.setState({ email: '', password: '', error: '', loading: false });
  }

  //現在の実行状態と紐づいたボタンのレンダリングを行うメソッド
  renderButton() {

    //状態がアクセスの最中ならばインジケーターを表示する
    //※ <Spinner>コンポーネントを自作している
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        ログイン＆サインアップ
      </Button>
    );
  }

  //見た目データのレンダリングを行う
  render() {
    return(
      <Card>
        {
          //1. Eメールアドレスの入力部分
        }
        <CardSection>
          {
            /**
             * this.state.emailで現在stateに格納されているemailの文字列を取得する
             * onChangeText内にテキストが変更されたタイミングでstateに格納する値を変更する
             */
          }
          <Input
            placeholder="user@gmail.com"
            label="メールアドレス"
            value={this.state.email}
            onChangeText={ email => this.setState({ email }) }
          />
        </CardSection>
        {
          //2. パスワードの入力部分
        }
        <CardSection>
          {
            /**
             * this.state.passwordで現在stateに格納されているpasswordの文字列を取得する
             * onChangeText内にテキストが変更されたタイミングでstateに格納する値を変更する
             * パスワードは見えないように'secureTextEntry'の値を設定する
             */
          }
          <Input
            secureTextEntry
            placeholder="password"
            label="パスワード"
            value={this.state.password}
            onChangeText={ password => this.setState({ password }) }
          />
        </CardSection>
        {
          //3. 認証失敗時のエラーメッセージ表示部分
        }
        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>
        {
          //4. 認証を行うボタン部分
        }
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
};

//このコンポーネントのStyle定義
const styles = {
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  }
};

//ログイン用フォームの実体となるこのコンポーネントファイルを部品化しておく
export default LoginForm;
