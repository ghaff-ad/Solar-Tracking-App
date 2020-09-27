import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import Level from '../components/Level';
import { PiLogo } from '../components/PiLogo';

class ChargeScreen extends React.Component {
  static navigationOptions = {
    title: 'Solar Tracker',
    headerLeft: <PiLogo />,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Level
          query="charge_current"
          label="Charge Current"
          units="A"
          min={0}
          max={5}
        />
      </ScrollView>
    );
  }
}  // End ChargeScreen
export default inject('appState')(observer(ChargeScreen));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
