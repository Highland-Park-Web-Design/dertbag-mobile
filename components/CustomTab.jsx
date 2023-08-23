import {Text, TouchableOpacity, View} from 'react-native';

export default function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 24,
        paddingBottom: 32,
        justifyContent: 'center',
        gap: 16,
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              height: 64,
              justifyContent: 'center',
              gap: 8,
            }}>
            {options.tabBarIcon && isFocused
              ? options.tabBarIcon
              : options.inactiveIcon}

            <Text
              style={{
                color: isFocused ? '#000' : '#B3B3B3',
                textTransform: 'uppercase',
                fontFamily: 'Helvetica',
                fontSize: 12,
                lineHeight: 16,
              }}>
              {label}
            </Text>

            <View
              style={{
                borderRadius: 8,
                backgroundColor: isFocused ? '#222' : '#fff',
                width: 24,
                height: 8,
              }}></View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
