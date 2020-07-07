import styled from 'styled-components/native';

import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  position: relative;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 120 : 30}px;
`;

export const BackButton = styled.TouchableOpacity`
  top: 100px;
`;
export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 50px;
`;

export const UserAvatar = styled.Image`
  width: 168px;
  height: 186px;
  border-radius: 98px;
  margin-top: 50px;
  align-self: center;
`;
