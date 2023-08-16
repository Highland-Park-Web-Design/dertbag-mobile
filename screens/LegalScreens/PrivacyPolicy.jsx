import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';
import Header from '../../components/Header';

function PrivacyPolicy({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'PRIVACY POLICY'} />
      <ScrollView style={styles.contentContainer}>
        <View style={{gap: 24}}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur. Sed quam non fermentum
            ornare sapien faucibus tempus nullam odio. Mauris est sed accumsan
            aliquam pulvinar sit. In maecenas elit egestas id. Euismod non elit
            arcu enim quis cras metus. Convallis augue sit rutrum ac neque
            pellentesque fermentum egestas. Ornare condimentum id habitasse
            semper. Facilisi consequat sit dignissim arcu sit.
          </Text>
          <Text style={styles.text}>
            zLeo facilisis platea tellus pellentesque vehicula elit. Tristique
            ullamcorper suspendisse mollis imperdiet. Integer suspendisse vitae
            risus elit nisi tincidunt duis pulvinar ut. Eget lacus vulputate
            sollicitudin amet. Imperdiet nibh auctor volutpat ut massa ut
            facilisi sit dui. Consequat quam elit lacinia ut eget urna purus
            aenean ut. Tellus massa ac in est malesuada sed.
          </Text>
          <Text style={styles.text}>
            Rhoncus turpis massa lectus tristique nulla lacus. Fames suspendisse
            sed lorem nam etiam ultrices. Elit at arcu cras neque laoreet.
            Quisque turpis cursus viverra amet a senectus. Suspendisse maecenas
            at sed bibendum lacus. Eu amet iaculis senectus a. Neque blandit
            massa enim vitae vitae sed ultrices.
          </Text>
          <Text style={styles.text}>
            Eget fames ornare ac eget convallis amet sit maecenas. Scelerisque
            sem ut lobortis vitae. Neque viverra consequat dui dolor ipsum
            ornare. Dolor fringilla blandit dictum amet imperdiet orci tempor
            facilisis. Risus amet amet purus quis scelerisque tellus. Volutpat
            sit curabitur pulvinar mauris nibh donec sed amet. Sed nunc velit
            erat vel vel lacus cras etiam placerat. Adipiscing nisl vel vel nunc
            non vulputate. Augue nullam hendrerit fames nam quis accumsan
            consequat tempor mattis. Fermentum sollicitudin porttitor sed
            pretium nisl arcu eget condimentum congue. Tortor molestie sed
            dignissim commodo arcu feugiat et et non. Proin elementum adipiscing
            metus vehicula. Enim volutpat felis sed suspendisse. Amet sed justo
            euismod vestibulum vitae tellus elementum lacus rhoncus.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  text: {
    color: '#000',
    fontFamily: 'Helvetica',
    fontSize: 16,
  },
});
