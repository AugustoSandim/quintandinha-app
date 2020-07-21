import React from 'react';
import {Text, View} from 'react-native';
import Product from './containers/Product';
// import {RNCamera} from 'react-native-camera';
// import BarcodeMask from 'react-native-barcode-mask';
// import {
//   Divider,
//   Portal,
//   Dialog,
//   TextInput,
//   Appbar,
//   Menu,
// } from 'react-native-paper';
// import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
// import {View, Platform} from 'react-native';

// const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
// const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

// const App: React.FC = () => {
//   const [type] = useState(RNCamera.Constants.Type.back);
//   const [flashMode] = useState(RNCamera.Constants.FlashMode.auto);
//   const [barcode, setBarcode] = useState(null);
//   const [visible, setVisible] = React.useState(false);
//   const [text, setText] = React.useState('');
//   const [menuVisible, setMenuVisible] = React.useState(false);

//   const openMenu = () => setMenuVisible(true);

//   const closeMenu = () => setMenuVisible(false);

//   const showDialog = () => setVisible(true);

//   const hideDialog = () => setVisible(false);

//   const onBarCodeRead = (scanResult) => {
//     console.warn(scanResult.type);
//     console.warn(scanResult.data);

//     if (scanResult.data) {
//       setBarcode(scanResult.data);
//       showDialog();
//     }

//     // if (scanResult.data != null) {
//     //   if (!this.barcodeCodes.includes(scanResult.data)) {
//     //     this.setState({visible: true});
//     //     this.barcodeCodes.push(scanResult.data);
//     //     this.setState({barcode: scanResult.data});
//     //   }
//     // }
//     return;
//   };

//   return (
//     <View>
//       {/* <Portal>
//         <RNCamera
//           defaultTouchToFocus
//           flashMode={flashMode}
//           mirrorImage={false}
//           onBarCodeRead={onBarCodeRead}
//           onFocusChanged={() => {}}
//           onZoomChanged={() => {}}
//           permissionDialogTitle={'Permission to use camera'}
//           permissionDialogMessage={
//             'We need your permission to use your camera phone'
//           }
//           style={styles.preview}
//           type={type}>
//           <BarcodeMask animatedLineColor="red" />
//         </RNCamera>
//       </Portal> */}
//         <Dialog visible={visible} onDismiss={hideDialog}>
//           <Dialog.Title>Alert</Dialog.Title>
//           <Dialog.Content>
//             <Paragraph>Code: {barcode}</Paragraph>
//           </Dialog.Content>
//           <Dialog.Actions>
//             <Button onPress={hideDialog}>Done</Button>
//           </Dialog.Actions>
//         </Dialog>
//       </View>
//     </View>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   overlay: {
//     position: 'absolute',
//     padding: 16,
//     right: 0,
//     left: 0,
//     alignItems: 'center',
//   },
//   topOverlay: {
//     top: 0,
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   bottomOverlay: {
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   enterBarcodeManualButton: {
//     padding: 15,
//     backgroundColor: 'white',
//     borderRadius: 40,
//   },
//   scanScreenMessage: {
//     fontSize: 14,
//     color: 'white',
//     textAlign: 'center',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// };

const App: React.FC<{}> = () => {
  return <Product />;
};

export default App;
