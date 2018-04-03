import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';


export default class App extends Component {

  state = {
    a: 'aa',
    b: 'aaa',
    pessoas: [
      {nome: 'rick', idade: 18},
      {nome: 'vitor', idade: 17},
      {nome: 'deisy', idade: 14},
    ]
  }

  addPessoa = () => {
    p = {
      nome: 'oi',
      idade: 19
    }
    this.state.pessoas.push(p);
    console.log(this.state)
    this.setState(this.state);
  }

  render() {
    return (
      <View style={styles.container}>

        <View>
          <TextInput 
            onChangeText={(a) => this.setState({a})}
            value={this.state.a}
          />
          <TextInput 
            onChangeText={(b) => this.setState({b})}
            value={this.state.b}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text>ADD STATE</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={backgroundColor='skyblue'}>
          {this.state.pessoas.map(pessoa => (
            <View>
              <Text>{pessoa.nome}</Text>
              <Text>{pessoa.idade}</Text>
            </View>
          ))}
          <TouchableOpacity onPress={() => this.addPessoa()}>
            <Text>PRESS ME</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
