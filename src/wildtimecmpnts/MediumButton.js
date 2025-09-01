// import { useEffect, useRef } from 'react';
// import { Animated, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const MediumButton = ({
//   onPress,
//   title,
//   style,
//   borders,
//   textStyle,
//   isDisabled,
// }) => {
//   const scale = useRef(new Animated.Value(1)).current;

//   useEffect(() => {
//     const pulse = Animated.loop(
//       Animated.sequence([
//         Animated.timing(scale, {
//           toValue: 1.1,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(scale, {
//           toValue: 1,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//       ]),
//     );
//     pulse.start();

//     return () => pulse.stop();
//   }, [scale]);

//   return (
//     <TouchableOpacity
//       style={styles.btnShadow}
//       activeOpacity={0.9}
//       onPress={onPress}
//       disabled={isDisabled}
//     >
//       <LinearGradient
//         colors={['rgba(255, 248, 206, 1)', 'rgba(222, 210, 139, 1)']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//         style={[styles.gradientButton, style]}
//       >
//         <Text style={[styles.gradientButtonText, textStyle]}>{title}</Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   gradientButton: {
//     width: 159,
//     height: 78,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 1000,
//     marginTop: 17,
//     overflow: 'hidden',
//   },
//   gradientButtonText: {
//     fontWeight: '900',
//     fontSize: 15,
//     color: '#B92D05',
//   },

//   btnShadow: {
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 8 },
//     shadowOpacity: 0.3,
//     shadowRadius: 12,
//     elevation: 8,
//   },
// });

// export default MediumButton;

import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function MediumButton({
  style,
  title,
  isDisabled,
  onPress,
  textStyle,
  borders,
  btnWidth = '55%',
  btnHeight = 78,
}) {
  return (
    <TouchableOpacity
      style={[styles.btnShadow, style, { width: btnWidth }]}
      activeOpacity={0.9}
      onPress={onPress}
      disabled={isDisabled}
    >
      <LinearGradient
        colors={['#FEDB7F', '#F1B005']}
        style={[styles.gradientButton, style]}
      >
        <Text style={[styles.gradientButtonText, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  gradientButton: {
    height: 78,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    marginTop: 17,
  },
  gradientButtonText: {
    fontWeight: '900',
    fontSize: 15,
    color: '#B92D05',
  },
  btnShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
  },
});
