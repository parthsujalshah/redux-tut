import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateScreenOneClicks } from '../store/actions/one';
import { updateTwoScreenClicks } from '../store/actions/two';

const Two = props => {
  const oneScreenClicks = useSelector(state => state.one.oneClicks);
  const dispatch = useDispatch();
  const twoScreenClicks = useSelector(state => state.two.twoClicks);
  const dispatchTwo = useDispatch();

  const updateOneClicks = () => {
    dispatch(updateScreenOneClicks(oneScreenClicks));
  };

  const updateTwoClicks = () => {
    dispatch(updateTwoScreenClicks(twoScreenClicks));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40 }}>Screen Two</Text>
      <Text style={{ fontSize: 40 }}>Clicks: {twoScreenClicks}</Text>
      <Button title="Click" onPress={updateTwoClicks} />
      <Text style={{ fontSize: 40 }}>Clicks From One: {oneScreenClicks}</Text>
      <Button title="Click to update screen one" onPress={updateOneClicks} />
    </View>
  );
};

export default Two;