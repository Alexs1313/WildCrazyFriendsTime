import { ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AppBackground = ({ children }) => {
  return (
    <LinearGradient
      source={require('../assets/images/bg.png')}
      style={{ flex: 1 }}
      colors={['#FFF8B0', '#FFD700', '#FFB000', '#FF8C00']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

export default AppBackground;
