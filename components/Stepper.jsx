import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

const StepperComponent = ({setCurrentStep, currentStep}) => {
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.groupContainer}>
          <View style={{position: 'relative'}}>
            <TouchableOpacity
              onPress={() => setCurrentStep(1)}
              style={
                currentStep === 1
                  ? styles.activenumContainer
                  : styles.numContainer
              }>
              <Text style={styles.stepNum}>1</Text>
            </TouchableOpacity>
            <View
              style={{
                borderColor: '#000',
                borderBottomWidth: 1,
                width: '110%',
                position: 'absolute',
                left: 23,
                top: 12,
              }}></View>
          </View>

          <Text style={styles.stepText}>Personal Details</Text>
        </View>

        <View style={styles.groupContainer}>
          <View style={{position: 'relative'}}>
            <TouchableOpacity
              onPress={() => setCurrentStep(2)}
              style={
                currentStep === 2
                  ? styles.activenumContainer
                  : styles.numContainer
              }>
              <Text style={styles.stepNum}>2</Text>
            </TouchableOpacity>
            <View
              style={{
                borderBottomColor: '#000',
                borderBottomWidth: 1,
                width: '260%',
                position: 'absolute',
                left: 23,
                top: 12,
              }}></View>
          </View>
          <Text style={styles.stepText}>Address</Text>
        </View>
        <View style={styles.groupContainer}>
          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => setCurrentStep(3)}
              style={
                currentStep === 3
                  ? styles.activenumContainer
                  : styles.numContainer
              }>
              <Text style={styles.stepNum}>3</Text>
            </TouchableOpacity>
            {/* <View
              style={{
                borderBottomColor: '#000',
                borderWidth: 1,
                width: '100%',
                position: 'absolute',
                left: 23,
                top: 12,
              }}></View> */}
          </View>
          <Text style={styles.stepText}>Billing Address</Text>
        </View>
      </View>
    </View>
  );
};

export default StepperComponent;

const styles = StyleSheet.create({
  groupContainer: {
    gap: 10,
    alignItems: 'flex-start',
  },
  numContainer: {
    height: 24,
    width: 24,
    // padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 999,
  },
  activenumContainer: {
    height: 24,
    width: 24,
    // padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#000',
    borderRadius: 999,
  },
  stepNum: {
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  stepText: {
    textTransform: 'uppercase',
    color: '#111',
    fontFamily: 'Helvetica',
    fontSize: 12,
  },
});
