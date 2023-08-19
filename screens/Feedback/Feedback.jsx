import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import Header from '../../components/Header';
import CustomInput from '../../components/input';
import Button from '../../components/Button';

function Feedback({navigation}) {
  const [currentRate, setCurrentRate] = useState('');
  const [recRate, setRecRate] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title={'Send Us Feedback'} />
      <View style={styles.contentContainer}>
        <View style={{gap: 56}}>
          <View>
            <Text
              style={{
                marginBottom: 16,
                color: '#000',
                fontFamily: 'Helvetica',
                fontSize: 16,
              }}>
              How do you rate our app?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 14,
                justifyContent: 'space-between',
              }}>
              <FeelingRate
                currentRate={currentRate}
                onclick={() => setCurrentRate('very_sad')}
                title={'very_sad'}
                text={'Very Sad'}
                emoji={'😖'}
              />
              <FeelingRate
                currentRate={currentRate}
                onclick={() => setCurrentRate('sad')}
                title={'sad'}
                text={'Sad'}
                emoji={'🙁'}
              />
              <FeelingRate
                currentRate={currentRate}
                onclick={() => setCurrentRate('average')}
                title={'average'}
                text={'Average'}
                emoji={'😐'}
              />
              <FeelingRate
                currentRate={currentRate}
                onclick={() => setCurrentRate('happy')}
                title={'happy'}
                text={'Happy'}
                emoji={'😊'}
              />
              <FeelingRate
                currentRate={currentRate}
                onclick={() => setCurrentRate('very_happy')}
                title={'very_happy'}
                text={'Very Happy'}
                emoji={'🤩'}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                marginBottom: 16,
                color: '#000',
                fontFamily: 'Helvetica',
                fontSize: 16,
              }}>
              How likely would you recommend dertbag?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 8,
                backgroundColor: '#F7F7F7',
              }}>
              <RecomendationRate
                recRate={recRate}
                onclick={() => setRecRate(1)}
                title={1}
                text={'1'}
              />
              <RecomendationRate
                recRate={recRate}
                onclick={() => setRecRate(2)}
                title={2}
                text={'2'}
              />
              <RecomendationRate
                recRate={recRate}
                onclick={() => setRecRate(3)}
                title={3}
                text={'3'}
              />
              <RecomendationRate
                recRate={recRate}
                onclick={() => setRecRate(4)}
                title={4}
                text={'4'}
              />
              <RecomendationRate
                recRate={recRate}
                onclick={() => setRecRate(5)}
                title={5}
                text={'5'}
              />
              <RecomendationRate
                recRate={recRate}
                onclick={() => setRecRate(6)}
                title={6}
                text={'6'}
              />
              <RecomendationRate
                recRate={recRate}
                onclick={() => setRecRate(7)}
                title={7}
                text={'7'}
              />
              <RecomendationRate
                recRate={recRate}
                onclick={() => setRecRate(8)}
                title={8}
                text={'8'}
              />
              <RecomendationRate
                recRate={recRate}
                onclick={() => setRecRate(9)}
                title={9}
                text={'9'}
              />
              <RecomendationRate
                recRate={recRate}
                onclick={() => setRecRate(10)}
                title={10}
                text={'10'}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                marginBottom: 4,
                color: '#000',
                fontFamily: 'Helvetica',
                fontSize: 16,
              }}>
              How can we improve dertbag for you?
            </Text>
            <CustomInput
              numberOfLines={10}
              placeholder={'Give us your thought'}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
          paddingHorizontal: 24,
        }}>
        <Button title={'Send Feedback'} />
      </View>
    </SafeAreaView>
  );
}

export default Feedback;

function RecomendationRate({text, onclick, recRate, title}) {
  return (
    <TouchableOpacity onPress={onclick} style={styles.feelingGroup}>
      <Text style={recRate === title ? styles.ActiveRecText : styles.RecText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

function FeelingRate({emoji, text, onclick, currentRate, title}) {
  return (
    <TouchableOpacity onPress={onclick} style={styles.feelingGroup}>
      <Text
        style={
          currentRate === title
            ? styles.ActiveFeelingEmoji
            : styles.feelingEmoji
        }>
        {emoji}
      </Text>
      <Text
        style={
          currentRate === title ? styles.ActiveFeelingText : styles.feelingText
        }>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    // height: '100%',
  },
  feelingGroup: {
    gap: 12,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  feelingEmoji: {
    padding: 8,
  },
  ActiveFeelingEmoji: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#EBEBEB',
  },
  feelingText: {
    color: '#CCC',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 12,
  },
  ActiveFeelingText: {
    color: '#111',
    textAlign: 'center',
    fontFamily: 'Helvetica',
    fontSize: 12,
  },
  ActiveRecText: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
    borderRadius: 8,
    color: '#fff',
  },
  RecText: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
  },
});
