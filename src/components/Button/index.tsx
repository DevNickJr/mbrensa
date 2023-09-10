import React, { ReactNode } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

interface IProps { 
    onPress: () => any, 
    title?: string,
    buttonStyle?: string,
    textStyle?: string,
    children?: ReactNode
}

export default function Button(props: IProps) {
  const { onPress, buttonStyle, textStyle, title = 'Save', children, ...rest } = props;
  return (
    <Pressable {...rest} className={`items-center justify-center px-4 py-3 rounded-md bg-primary ${buttonStyle}`} onPress={onPress}>
      {children ? <>{children}</> : <Text className={`text-white font-bold ${textStyle}`}>{title}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#F4C20B',
    // marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});



// import React from 'react';
// import { Text, StyleSheet, Pressable } from 'react-native';

// interface IProps { 
//     onPress: () => any, 
//     title?: string,
//     style?: object,
//     textStyles?: object 
// }

// export default function Button(props: IProps) {
//   const { onPress, style, textStyles, title = 'Save' } = props;
//   return (
//     <Pressable style={{...styles.button, ...style}} onPress={onPress}>
//       <Text style={{...styles.text, ...textStyles}}>{title}</Text>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 6,
//     elevation: 3,
//     backgroundColor: '#F4C20B',
//     // marginTop: 20,
//   },
//   text: {
//     fontSize: 16,
//     lineHeight: 21,
//     fontWeight: 'bold',
//     letterSpacing: 0.25,
//     color: 'white',
//   },
// });
