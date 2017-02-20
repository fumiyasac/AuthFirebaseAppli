/**
 * ログイン用のフォーム部分に
 */
import React, { Component } from 'react';
import { Text } from 'react-native';

//LoginFormの作成に必要な自作コンポーネント群のインポート宣言を行う
import { Button, Card, CardSection, Input, Spinner } from './common';

//ログイン用フォーム部分のUIの組み立てを行う
class LoginForm extends Component {

  //初期状態のステートと対応する値を定義する
  state = { email: '', password: '', error: '', loading: false };

  //ボタン押下時に実行されるメソッド
  onButtonPress() {
    //TODO: 中の処理を組み立てる
  }

  //ログイン処理に失敗した場合に実行されるメソッド
  onLoginFail() {
    //TODO: 中の処理を組み立てる
  }

  //ログイン処理に成功した場合に実行されるメソッド
  onLoginSuccess() {
    //TODO: 中の処理を組み立てる
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
        Log in
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
            label="Email"
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
            label="Password"
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
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

//ログイン用フォームの実体となるこのコンポーネントファイルを部品化しておく
export default LoginForm;
