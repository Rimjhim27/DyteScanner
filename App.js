import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DocumentScanner from "react-native-document-scanner";
import CustomCrop from "react-native-perspective-image-cropper";

class CropView extends Component{
  componentWillMount() {
    Image.getSize(image, (width, height) => {
      this.setState({
        imageWidth: width,
        imageHeight: height,
        initialImage: image,
        rectangleCoordinates: {
          topLeft: { x: 10, y: 10 },
          topRight: { x: 10, y: 10 },
          bottomRight: { x: 10, y: 10 },
          bottomLeft: { x: 10, y: 10 }
        }
      });
    });
  }

  updateImage(image, newCoordinates) {
    this.setState({
      image,
      rectangleCoordinates: newCoordinates
    });
  }

  crop() {
    this.customCrop.crop();
  }

  render() {
    return (
      <View>
        <CustomCrop
          updateImage={this.updateImage.bind(this)}
          rectangleCoordinates={this.state.rectangleCoordinates}
          initialImage={this.state.initialImage}
          height={this.state.imageHeight}
          width={this.state.imageWidth}
          ref={ref => (this.customCrop = ref)}
          overlayColor="rgba(18,190,210, 1)"
          overlayStrokeColor="rgba(20,190,210, 1)"
          handlerColor="rgba(20,150,160, 1)"
          enablePanStrict={false}
        />
        <TouchableOpacity onPress={this.crop.bind(this)}>
          <Text>CROP IMAGE</Text>
        </TouchableOpacity>
      </View>
    );
  } 
}

const YourComponent=()=>{{
    return(
      <View>
        <DocumentScanner 
        useBase64
        saveInAppDocument={false}
        onPictureTaken={date=>
          this.setState({
            image: DataCue.croppedImage,
            initialImage: DataCue.initialImage,
            rectangleCoordinates: DataCue.rectangleCoordinates
          })
        }
        overlayColor="rgba(255,130,0,0.7)"
        enableTorch={false}
        brightness={0.3}
        saturation={1}
        contrast={1.1}
        quality={0.5}
        onRectangleDetect={({ stableCounter, lastDetectionType})=>
      this.setState({stableCounter,lastDetectionType})
    }
    detectionCountBeforeCapture={5}
    detectionRefreshRateInMS={50}
    onPermissionDenied={()=>console.log("Permission denied")}
        />
        <Image
          source={{ uri: `data:image/jpeg;base64` }}
          resizeMode="contain"
        />
        <Button title="Next  Page" onPress={()=>navigation.navigate('Files')}></Button>
      </View>
    );
  }
}
export default function App() {
  const Stack=createStackNavigator();
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DyteScanner" component={YourComponent} />
        <Stack.Screen name="File" component={Filescreen,{uri: uri}} options={{title: 'DyteScanner'}}/>
      </Stack.Navigator>
      </NavigationContainer>

  );
}


const Filescreen=({route})=>{
  const uri=route.params.uri;
  return (
    <View>
      <Image source={{uri: uri}} resizeMode="contain"/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
