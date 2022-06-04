// import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, Component} from 'react';
import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView, TextInput, Dimensions, ImageBackground, Button,StatusBar, ToastAndroid, Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import CircularProgress from "react-native-circular-progress-indicator"; Uninstall
import * as Yup from 'yup';
import {  useFormik } from "formik";
import { Icon, CheckBox } from "react-native-elements";
// import { useHistory } from "react-router-dom"; Uninstall
// import { BarCodeScanner } from "expo-barcode-scanner";
// import { WebView } from "react-native-webview";
// import YoutubePlayer from "react-native-youtube-iframe"; Uninstall


import {RadioButton} from 'react-native-paper';

import ExpoTHREE, {THREE} from "expo-three";
import Expo from "expo";
import Halaman from "./src/Masuk/Halaman";

import Lottie from './Lottie';



import LottieView from "lottie-react-native";
import { COLORS, SIZES } from './src/constants/theme';



import slides from './slides';
import slides_webinar from './slides_webinar';
import data_events from './data_events';



import AppIntroSlider from 'react-native-app-intro-slider' ;

// import Router from './src/router/router';







  function CariUMKM(props)
  {

    return(
      <View>
        
      </View>
    )
    
  }








  function LihatSkor(props) {
    const [checked, setChecked] = React.useState('first');

    return(
      <View style = {{backgroundColor:COLORS.primary, flex:1}}>
  
  
  
  <View style = {Eventsstyle.home1}>
          <View style = {Eventsstyle.home11}>
            <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:20}}>MUTER</Text>
          </View>
  
  
          <View style = {Eventsstyle.home12}>
  
          </View>
  
  
          <View style = {Eventsstyle.home13} >
  
          <Icon
    raised
    name='bell-o'
    type='font-awesome'
    color={COLORS.tertiery}
    style={{backgroundColor:COLORS.tertiery}}
    onPress={() => console.log('hello')} 
    size = {20}
    />
  
  <Icon
  raised
  name='wechat'
  type='font-awesome'
  color={COLORS.tertiery}
  onPress={() => console.log('hello')} 
  size = {20}
  />
  
  <Icon
  raised
  name='user-o'
  type='font-awesome'
  color={COLORS.tertiery}
  onPress={() => console.log('hello')} 
  size = {20}
  />
  
  
  
          </View>
  
     
  
      </View>
  
  
  
  
        <ScrollView style = {{backgroundColor:COLORS.primary}}>
        
        
    
  
      <View style = {Eventsstyle.home2}>
  
      <View style = {Eventsstyle.home21}>
      <Icon
                raised
                name='sticky-note-o'
                type='font-awesome'
                color={COLORS.tertiery}
                onPress={() => console.log('hello')} />
  
          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:35, marginLeft:10}}>
          
            Skor Anda</Text>
      </View>
      </View>
  
  
  
      <View style = {Eventsstyle.home3}>

        <View style = {{backgroundColor:'#5f9ea0', width:'80%', justifyContent:'center', alignItems:'center', paddingTop:10, paddingBottom:15, borderRadius:20}}>

          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:15}}> Selamat, Anda Mendapatkan Skor : </Text>

          <Text style = {{fontSize:60, color:COLORS.white}}>85 %</Text>



        </View>
  
    
  
   
      </View>
  
  
  
  
    
  
  
        </ScrollView>
  
  
  
  
  
        <View style = {Eventsstyle.home4}>
          <View style = {Eventsstyle.home41}>
              <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
              <Icon
                raised
                name='home'
                type='font-awesome'
                color={COLORS.tertiery}
                onPress={() => props.navigation.navigate('Home')}
                size = {20}
                />
                <Text style = {{color:COLORS.white}}>Home</Text>
              </TouchableOpacity>
          </View>
  
  
  
          <View style = {Eventsstyle.home41}>
              <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
              <Icon
                raised
                name='sticky-note-o'
                type='font-awesome'
                color={COLORS.tertiery}
                onPress={() => props.navigation.navigate('Post and Discussion')}
                size = {20}
                />
                <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
              </TouchableOpacity>
          </View>
  
  
  
          <View style = {Eventsstyle.home41}>
              <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
              <Icon
                raised
                name='search-plus'
                type='font-awesome'
                color={COLORS.tertiery}
                onPress={() => props.navigation.navigate('UMKM Check')}
                size = {20}
                />
                <Text style = {{color:COLORS.white}}>UMKM</Text>
              </TouchableOpacity>
          </View>
  
        </View>
  
  
  
  
  
  
  
      </View>
  
    );
  








  }














function PostandDiscussion(props) {

  const [checked, setChecked] = React.useState('first');

  return(
    <View style = {{backgroundColor:COLORS.primary, flex:1}}>



<View style = {Eventsstyle.home1}>
        <View style = {Eventsstyle.home11}>
          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:20}}>MUTER</Text>
        </View>


        <View style = {Eventsstyle.home12}>

        </View>


        <View style = {Eventsstyle.home13} >

        <Icon
  raised
  name='bell-o'
  type='font-awesome'
  color={COLORS.tertiery}
  style={{backgroundColor:COLORS.tertiery}}
  onPress={() => console.log('hello')} 
  size = {20}
  />

<Icon
raised
name='wechat'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>

<Icon
raised
name='user-o'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>



        </View>

   

    </View>




      <ScrollView style = {{backgroundColor:COLORS.primary}}>
      
      
  

    <View style = {Eventsstyle.home2}>

    <View style = {Eventsstyle.home21}>
    <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => console.log('hello')} />

        <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:35, marginLeft:10}}>
        
          Post and Discussion</Text>
    </View>
    </View>



    <View style = {Eventsstyle.home3}>

  
      


      <View style = {Eventsstyle.home31}>
     
     <View style = {{marginLeft:15, marginRight:15}}>

       <View style = {{flexDirection:'row', alignItems:'center'}}>
         <Image
         source={require('./src/assets/shoeshine.png')}
         style = {{
           width:20,
           height:20,
         }}
         />

        <Text style = {{color:COLORS.white,  fontWeight:'bold'}}> &nbsp;UMKM ShoeShine &nbsp;</Text>

        <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />

       </View>
       <Text style = {{color:'#FFFF', marginTop:5}}>Menurut kalian penting ga sih punya dana tersendiri untuk marketing? Seberapa penting marketing untuk produk kita? 

{'\n'}</Text>


        <View style = {{flexDirection:'row'}}>
          <TouchableOpacity>
            <Text style = {{color:COLORS.white, fontWeight:'bold'}}>254 Likes</Text>
          </TouchableOpacity>


          <TouchableOpacity style = {{marginLeft:10}}>
            <Text style = {{color:COLORS.white, fontWeight:'bold'}}>10 Discussions</Text>
          </TouchableOpacity>


        </View>

     


     </View>

    </View>





    <View style = {{ width:'80%',
    backgroundColor:COLORS.quadratary,
    flexDirection:'column',
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:10,
    marginTop:10,
    alignItems:'center',}}>
     
     <View style = {{marginLeft:15, marginRight:15}}>

       <View style = {{flexDirection:'row', alignItems:'center'}}>
         <Image
         source={require('./src/assets/shoeshine.png')}
         style = {{
           width:20,
           height:20,
         }}
         />

        <Text style = {{color:COLORS.white,  fontWeight:'bold'}}> &nbsp;Rania Wijaya &nbsp;</Text>

        <Image
              source={require('./src/assets/rani_wijaya.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />

       </View>
       <Text style = {{color:'#FFFF', marginTop:5}}>Menurutku sih penting. Meskipun kita artis sekalipun, namanya kalo punya usaha harus dipromosikan. Pengalaman UMKM-ku kemarin setelah meluangkan dana untuk marketing, penjualan meningkat 10%
 

{'\n'}</Text>


        <View style = {{flexDirection:'row'}}>
          <TouchableOpacity>
            <Text style = {{color:COLORS.white, fontWeight:'bold'}}>0 Likes</Text>
          </TouchableOpacity>


          <TouchableOpacity style = {{marginLeft:10}}>
            <Text style = {{color:COLORS.white, fontWeight:'bold'}}>0 Comment</Text>
          </TouchableOpacity>


        </View>

     


     </View>

    </View>



 
    </View>




  


      </ScrollView>





      <View style = {Eventsstyle.home4}>
        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='home'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Home')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Home</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Post and Discussion')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='search-plus'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('UMKM Check')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>UMKM</Text>
            </TouchableOpacity>
        </View>

      </View>







    </View>

  );

  
}









function Check(props) {


  const [checked, setChecked] = React.useState('first');

  var [skor, setSkor] = React.useState(null);



  // MATANG UMKM


  const [isMatang, setIsMatang] = useState([
    { id: 1, value: 1, name: "Sudah", selected: false },
    { id: 2, value: 0, name: "Belum", selected: false }
  ]);




  const onRadioBtnClickMatang = (item) => {
    let updatedStateMatang = isMatang.map((isMatangItem) =>
      isMatangItem.id === item.id
        ? { ...isMatangItem, selected: true, value:1 }
        : { ...isMatangItem, selected: false, value:0 }
    );
    setIsMatang(updatedStateMatang);
  };




  // MEMBUAT LAPORAN

  const [isBuatLaporan, setIsBuatLaporan] = useState([
    { id: 1, value: 1, name: "Sudah", selected: false },
    { id: 2, value: 0, name: "Belum", selected: false }
  ]);




  const onRadioBtnClickBuatLaporan = (item) => {
    let updatedStateBuatLaporan = isBuatLaporan.map((isBuatLaporanItem) =>
      isBuatLaporanItem.id === item.id
        ? { ...isBuatLaporanItem, selected: true, value:1 }
        : { ...isBuatLaporanItem, selected: false, value:0 }
    );
    setIsBuatLaporan(updatedStateBuatLaporan);
  };


  //Merencanakan Dana 

  const [isBuatRencanaDana, setIsBuatRencanaDana] = useState([
    { id: 1, value: 1, name: "Sudah", selected: false },
    { id: 2, value: 0, name: "Belum", selected: false }
  ]);




  const onRadioBtnClickBuatRencanaDana = (item) => {
    let updatedStateBuatRencanaDana = isBuatLaporan.map((isBuatRencanaDana) =>
      isBuatRencanaDana.id === item.id
        ? { ...isBuatRencanaDana, selected: true, value:1 }
        : { ...isBuatRencanaDana, selected: false, value:0 }
    );
    setIsBuatRencanaDana(updatedStateBuatRencanaDana);
  };



  //Perilaku Konsumen

  // const [isPerilaku, setIsPerilaku] = useState([
  //   { id: 1, value: true, name: "Sudah", selected: false },
  //   { id: 2, value: false, name: "Belum", selected: false }
  // ]);

  const [isPerilaku, setIsPerilaku] = useState([
    { id: 1, value: 1, name: "Sudah", selected: false },
    { id: 2, value: 0, name: "Belum", selected: false }
  ]);




  const onRadioBtnClickPerilaku = (item) => {
    let updatedStatePerilaku = isPerilaku.map((isPerilaku) =>
      isPerilaku.id === item.id
        ? { ...isPerilaku, selected: true, value:1 }
        : { ...isPerilaku, selected: false, value:0 }
    );
    setIsPerilaku(updatedStatePerilaku);
  };









  var [setNilai, onsetNilai] = React.useState(null); 


const PerubahanNilai = () =>{

  

  //PERILAKU
 let updateNilaiPerilakuBenar = isPerilaku.selected = true;

  let updateNilaiPerilakuSalah = isPerilaku.value = false;


 //RENCANA DANA
 
let updateNilaiBuatRencanaDanaBenar = isBuatRencanaDana.selected = true;

let updateNilaiBuatRencanaDanaSalah = isBuatRencanaDana.value = false;



//LAPORAN BENAR

let updateNilaiBuatLaporanBenar = isBuatLaporan.selected = true;

let updateNilaiBuatLaporanSalah = isBuatLaporan.value = false;



//MATANG

let updateNilaiMatangBenar = isMatang.selected = true ;
let updateNilaiMatangSalah = isMatang.value = false;



let TotalNilai = isMatang.value + isBuatLaporan.value + isBuatRencanaDana.value + isPerilaku.value;


onsetNilai(TotalNilai);


// Alert.alert('Selamat, Nilai Anda '  + TotalNilai);





// if(updateNilaiMatangBenar || updateNilaiBuatLaporanBenar || updateNilaiBuatRencanaDanaBenar || updateNilaiPerilakuBenar)
// {
//   Alert.alert('Selamat, Nilai Anda 30 %')
// }



// else
//  if((updateNilaiMatangBenar && updateNilaiBuatLaporanBenar) 
// || (updateNilaiMatangBenar && updateNilaiBuatRencanaDanaBenar) 
// ||  (updateNilaiMatangBenar && updateNilaiPerilakuBenar) 
// || (updateNilaiBuatLaporanBenar && updateNilaiPerilakuBenar) 
// || (updateNilaiBuatLaporanBenar && updateNilaiBuatRencanaDanaBenar)
// || (updateNilaiPerilakuBenar && updateNilaiBuatRencanaDanaBenar)
// )
// {
//   Alert.alert('Selamat, Nilai Anda 50 %')
// }



// else if((updateNilaiMatangBenar && updateNilaiBuatLaporanBenar && updateNilaiBuatRencanaDanaBenar) 
// || (updateNilaiMatangBenar && updateNilaiBuatLaporanBenar && updateNilaiPerilakuBenar)
// || (updateNilaiBuatRencanaDanaBenar && updateNilaiBuatLaporanBenar && updateNilaiPerilakuBenar)

// )
// {
//   Alert.alert('Selamat, Nilai Anda 85 %')
// }

// else if(updateNilaiMatangBenar && updateNilaiBuatLaporanBenar && updateNilaiBuatRencanaDanaBenar && updateNilaiPerilakuBenar)
// {
//   Alert.alert('Selamat, Nilai Anda 100 %')
// }

// else {
//   Alert.alert('Nilai Anda Masih Kosong')
// }


// if(updateNilaiBuatRencanaDanaBenar)
// {
//   Alert.alert('Rencana Dana Benar');

// }



// else if(updateNilaiMatangBenar)
// {

//   Alert.alert('Nilai Matang Benar');

// }


// else if(updateNilaiBuatLaporanBenar)
// {

//   Alert.alert('Nilai Laporan Benar');

// }

// else if(updateNilaiPerilakuBenar)

// {
//   Alert.alert('Perilaku Benar');
// }

// else {
//   Alert.alert('None');
// }



}



// const onChangeAlertNilai =() =>{
//   Alert.alert('Selamat, Nilai Anda '  + setNilai);
// }







// else if((updateNilaiMatangBenar && updateNilaiBuatLaporanBenar) || (updateNilaiMatangBenar && updateNilaiBuatLaporanBenar))












  const RadioButton = ({ onPress, selected, children }) => {
    return (
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.radioButton}>
          {selected ? <View style={styles.radioButtonIcon} /> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.radioButtonText}>{children}</Text>
        </TouchableOpacity>
      </View>
    );
  };






  return(
    <View style = {{backgroundColor:COLORS.primary, flex:1}}>



<View style = {Eventsstyle.home1}>
        <View style = {Eventsstyle.home11}>
          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:20}}>MUTER</Text>
        </View>


        <View style = {Eventsstyle.home12}>

        </View>


        <View style = {Eventsstyle.home13} >

        <Icon
  raised
  name='bell-o'
  type='font-awesome'
  color={COLORS.tertiery}
  style={{backgroundColor:COLORS.tertiery}}
  onPress={() => console.log('hello')} 
  size = {20}
  />

<Icon
raised
name='wechat'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>

<Icon
raised
name='user-o'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>



        </View>

   

    </View>



      <ScrollView style = {{backgroundColor:COLORS.primary}}>
   
   

    <View style = {Eventsstyle.home2}>

    <View style = {Eventsstyle.home21}>
    <Icon
              raised
              name='credit-card'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => console.log('hello')} />

        <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:35}}>
          &nbsp;
          UMKM CHECK</Text>
    </View>
    </View>



    <View style = {Eventsstyle.home3}>

  
      

      <View style = {Eventsstyle.home31}>
     
       <View style = {{marginLeft:15, marginRight:15}}>
         <Text style = {{color:'#FFFF', fontWeight:'bold'}}>Apakah UMKM kamu sudah matang dalam perencanaan keuangan usaha?{'\n'}</Text>

        <View style = {{flexDirection:'row', alignItems:'center'}}>

        {isMatang.map((item) => (
     <RadioButton
       onPress={() => onRadioBtnClickMatang(item)}
       selected={item.selected}
       key={item.id}
       value = {item.value}
     >
    <Text style = {{color:COLORS.white}}>{item.name}</Text>   
     
     </RadioButton>
  ))}



        </View> 

       </View>

      </View>







      <View style = {Eventsstyle.home31}>
     
     <View style = {{marginLeft:15, marginRight:15}}>
       <Text style = {{color:'#FFFF', fontWeight:'bold'}}>Sudahkah UMKM kamu membuat laporan keuangan untuk usaha setiap bulannya?{'\n'}</Text>

      <View style = {{flexDirection:'row', alignItems:'center'}}>
   

      {isBuatLaporan.map((item) => (
     <RadioButton
       onPress={() => onRadioBtnClickBuatLaporan(item)}
       selected={item.selected}
       key={item.id}
       value = {item.value}
     >
    <Text style = {{color:COLORS.white}}>{item.name}</Text>   
     
     </RadioButton>
  ))}

      </View> 


     </View>

    </View>







    <View style = {Eventsstyle.home31}>
     
     <View style = {{marginLeft:15, marginRight:15}}>
       <Text style = {{color:'#FFFF', fontWeight:'bold'}}>Apakah usaha anda sudah merencanakan dana untuk khusus marketing?{'\n'}</Text>

      <View style = {{flexDirection:'row', alignItems:'center'}}>
      {isBuatRencanaDana.map((item) => (
     <RadioButton
       onPress={() => onRadioBtnClickBuatRencanaDana(item)}
       selected={item.selected}
       key={item.id}
       value = {item.value}
     >
    <Text style = {{color:COLORS.white}}>{item.name}</Text>   
     
     </RadioButton>




  ))}



      </View> 



     </View>

    </View>







    <View style = {Eventsstyle.home31}>
     
     <View style = {{marginLeft:15, marginRight:15}}>
       <Text style = {{color:'#FFFF', fontWeight:'bold'}}>Sudahkah anda memperhatikan perilaku konsumen anda selama satu bulan untuk evaluasi?{'\n'}</Text>

      <View style = {{flexDirection:'row', alignItems:'center'}}>
      {isPerilaku.map((item) => (
     <RadioButton
       onPress={() => onRadioBtnClickPerilaku(item)}
       selected={item.selected}
       key={item.id}
       value = {item.value}
     >
    <Text style = {{color:COLORS.white}}>{item.name}</Text>   
     
     </RadioButton>
  ))}
      </View> 


   

     </View>

    </View>




    <View style = {{marginTop:10, marginBottom:10, padding:10, backgroundColor:COLORS.secondary, borderRadius:10}}>
      <TouchableOpacity
      onPress={()=>props.navigation.navigate('LihatSkor')}
      // onPress={()=>PerubahanNilai()}
      // onPress = {()=>PerubahanNilai()}
      >
        <Text style = {{color:'#ffff', fontWeight:'bold'}}>
        LIHAT SKOR
        </Text>
      </TouchableOpacity>
   
        {/* <TouchableOpacity style = {{marginTop:10}}>

          <Text>{setNilai}</Text>

        </TouchableOpacity> */}

    
   
    </View>






    </View>


      </ScrollView>




      <View style = {Eventsstyle.home4}>
        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='home'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Home')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Home</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Post and Discussion')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='search-plus'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('UMKM Check')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>UMKM</Text>
            </TouchableOpacity>
        </View>

      </View>







    </View>

  );

  
}




const Checkstyle = StyleSheet.create({
home3:{

    width:'100%',
    paddingTop:10,
    paddingRight:15,
    paddingLeft:15,
    paddingBottom:10,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  
},


});


















function Store (props)
{







  return(
    <View style = {{backgroundColor:COLORS.primary, flex:1}}>



<View style = {Eventsstyle.home1}>
        <View style = {Eventsstyle.home11}>
          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:20}}>MUTER</Text>
        </View>


        <View style = {Eventsstyle.home12}>

        </View>


        <View style = {Eventsstyle.home13} >

        <Icon
          raised
          name='bell-o'
          type='font-awesome'
          color={COLORS.tertiery}
          style={{backgroundColor:COLORS.tertiery}}
          onPress={() => console.log('hello')} />

        <Icon
        raised
        name='wechat'
        type='font-awesome'
        color={COLORS.tertiery}
        onPress={() => console.log('hello')} />

        <Icon
        raised
        name='user-o'
        type='font-awesome'
        color={COLORS.tertiery}
        onPress={() => console.log('hello')} />



        </View>

   

    </View>



      <ScrollView style = {{backgroundColor:COLORS.primary}}>



    <View style = {Eventsstyle.home2}>

    <View style = {Eventsstyle.home21}>
    <Icon
              raised
              name='credit-card'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => console.log('hello')} />

        <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:35}}>
          &nbsp;
          STORE</Text>
    </View>



 
    </View>



    <View style = {Eventsstyle.home3}>

      <View style = {Eventsstyle.home31} renderItem >
      <View>
      <Image
              source={require('./src/assets/Store1.png')}
              style={{
                width: 120,
                height: 120,
              }}
              // resizeMode="contain"
            />
      </View>


       <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
         <Text style = {{color:'#FFFF', fontWeight:'bold'}}>FOUNDATION POWDER SHADE BEIGE {'\n'}</Text>

         <TouchableOpacity>
       <View style = {{flexDirection:'row', width:'80%'}}>
        
        <Image
              source={require('./src/assets/cart_shop.png')}
              style={{
                width: 25,
                height: 25,
                borderRadius:20,
              }}
              // resizeMode="contain"
            /> 
       <Text style = {{color:'#ffff', alignItems:'center', marginLeft:5}}>
         {/* &nbsp; */}
          Tambahkan Ke Keranjang
 
            {'\n'}
            {'\n'}
          </Text>
    
       </View>
       </TouchableOpacity>






        
         <Text style = {{color:'#ffff', alignItems:'center'}}>UMKM Beauty Life Store  &nbsp;
          <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />
            {'\n'}
          </Text>
   
        <View style = {{flexDirection:'row'}}>
          <View style = {{flex:1}}>

          </View>
        <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}
        // onPress = {()=> props.navigation.navigate('SubClass')}
        >
            <Text style = {{color:'#ffff',}}>{'\n'}Selengkapnya &nbsp;
            <Image
              source={require('./src/assets/blue_arrow.png')}
              style={{
                width: 15,
                height: 15,
              }}
              // resizeMode="contain"
            />
            </Text>
           
          </TouchableOpacity>
        </View>
         


       </View>

      </View>














      <View style = {Eventsstyle.home31} renderItem >


<View>
<Image
        source={require('./src/assets/Store2.png')}
        style={{
          width: 120,
          height: 120,
        }}
        // resizeMode="contain"
      />
</View>


 <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
   <Text style = {{color:'#FFFF', fontWeight:'bold'}}>[CHILL PODCAST EP.5]
UMKM BUTUH MODAL BERAPA BUAT SUKSES?{'\n'}</Text>



<TouchableOpacity>
       <View style = {{flexDirection:'row', width:'80%'}}>
        
        <Image
              source={require('./src/assets/cart_shop.png')}
              style={{
                width: 25,
                height: 25,
                borderRadius:20,
              }}
              // resizeMode="contain"
            /> 
       <Text style = {{color:'#ffff', alignItems:'center', marginLeft:5}}>
         {/* &nbsp; */}
          Tambahkan Ke Keranjang
 
            {'\n'}
            {'\n'}
          </Text>
    
       </View>
       </TouchableOpacity>



   <Text style = {{color:'#ffff', alignItems:'center'}}>UMKM Shoes Bestie  &nbsp;
          <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />
            {'\n'}

          </Text>


  <View style = {{flexDirection:'row'}}>
    <View style = {{flex:1}}>

    </View>
  <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}>
      <Text style = {{color:'#ffff',}}>Selengkapnya &nbsp;
      <Image
        source={require('./src/assets/blue_arrow.png')}
        style={{
          width: 15,
          height: 15,
        }}
        // resizeMode="contain"
      />
      </Text>
     
    </TouchableOpacity>
  </View>
   


 </View>

</View>





<View style = {Eventsstyle.home31} renderItem >


<View>
<Image
        source={require('./src/assets/Store3.png')}
        style={{
          width: 120,
          height: 120,
        }}
        // resizeMode="contain"
      />
</View>


 <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
   <Text style = {{color:'#FFFF', fontWeight:'bold'}}>BUTUH GELAR TINGGI UNTUK BANGUN USAHA SUKSES? EMANG IYA?{'\n'}</Text>


   <TouchableOpacity>
       <View style = {{flexDirection:'row', width:'80%'}}>
        
        <Image
              source={require('./src/assets/cart_shop.png')}
              style={{
                width: 25,
                height: 25,
                borderRadius:20,
              }}
              // resizeMode="contain"
            /> 
       <Text style = {{color:'#ffff', alignItems:'center', marginLeft:5}}>
         {/* &nbsp; */}
          Tambahkan Ke Keranjang
 
            {'\n'}

          </Text>
    
       </View>
       </TouchableOpacity>


  
   <Text style = {{color:'#ffff', alignItems:'center'}}>UMKM Bag Station  &nbsp;
          <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />
            {'\n'}
            {'\n'}
          </Text>

  <View style = {{flexDirection:'row'}}>
    <View style = {{flex:1}}>

    </View>
  <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}>
      <Text style = {{color:'#ffff',}}>Selengkapnya &nbsp;
      <Image
        source={require('./src/assets/blue_arrow.png')}
        style={{
          width: 15,
          height: 15,
        }}
        // resizeMode="contain"
      />
      </Text>
     
    </TouchableOpacity>
  </View>
   


 </View>

</View>










    </View>




      </ScrollView>



      <View style = {Eventsstyle.home4}>
        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='home'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Home')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Home</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Post and Discussion')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='search-plus'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('UMKM Check')} 
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>UMKM</Text>
            </TouchableOpacity>
        </View>

      </View>








    </View>

  );







}










function Podcasts(props) {
  



  return(
    <View style = {{backgroundColor:COLORS, flex:1}}>




<View style = {Eventsstyle.home1}>
        <View style = {Eventsstyle.home11}>
          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:20}}>MUTER</Text>
        </View>


        <View style = {Eventsstyle.home12}>

        </View>


        <View style = {Eventsstyle.home13} >

        <Icon
  raised
  name='bell-o'
  type='font-awesome'
  color={COLORS.tertiery}
  style={{backgroundColor:COLORS.tertiery}}
  onPress={() => console.log('hello')} 
  size = {20}
  />

<Icon
raised
name='wechat'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>

<Icon
raised
name='user-o'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>



        </View>

   

    </View>





      <ScrollView style = {{backgroundColor:COLORS.primary}}>




    <View style = {Eventsstyle.home2}>

    <View style = {Eventsstyle.home21}>
    <Icon
              raised
              name='microphone'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => console.log('hello')} />

        <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:35}}>
          &nbsp;
          Podcasts</Text>
    </View>



 
    </View>



    <View style = {Eventsstyle.home3}>

      <View style = {Eventsstyle.home31} renderItem >
      <View>
      <Image
              source={require('./src/assets/Podcasts1.png')}
              style={{
                width: 120,
                height: 120,
              }}
              // resizeMode="contain"
            />
      </View>


       <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
         <Text style = {{color:'#FFFF', fontWeight:'bold'}}>[NGOPI PODCAST EP. 2]
BAHAS YANG JARANG DIOMONGIN TENTANG UMKM! ft UMKM GoShoes {'\n'}</Text>
        
        
         <Text style = {{color:'#ffff', alignItems:'center'}}>UMKM Beauty Life Store  &nbsp;
          <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />
            {'\n'}
            {'\n'}
          </Text>
   
        <View style = {{flexDirection:'row'}}>
          <View style = {{flex:1}}>

          </View>
        <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}
        // onPress = {()=> props.navigation.navigate('SubClass')}
        >
            <Text style = {{color:'#ffff',}}>{'\n'}Selengkapnya &nbsp;
            <Image
              source={require('./src/assets/blue_arrow.png')}
              style={{
                width: 15,
                height: 15,
              }}
              // resizeMode="contain"
            />
            </Text>
           
          </TouchableOpacity>
        </View>
         


       </View>

      </View>














      <View style = {Eventsstyle.home31} renderItem >


<View>
<Image
        source={require('./src/assets/Podcasts2.png')}
        style={{
          width: 120,
          height: 120,
        }}
        // resizeMode="contain"
      />
</View>


 <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
   <Text style = {{color:'#FFFF', fontWeight:'bold'}}>[CHILL PODCAST EP.5]
UMKM BUTUH MODAL BERAPA BUAT SUKSES?{'\n'}</Text>

   <Text style = {{color:'#ffff', alignItems:'center'}}>UMKM Shoes Bestie  &nbsp;
          <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />
            {'\n'}
            {'\n'}
          </Text>


  <View style = {{flexDirection:'row'}}>
    <View style = {{flex:1}}>

    </View>
  <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}>
      <Text style = {{color:'#ffff',}}>Selengkapnya &nbsp;
      <Image
        source={require('./src/assets/blue_arrow.png')}
        style={{
          width: 15,
          height: 15,
        }}
        // resizeMode="contain"
      />
      </Text>
     
    </TouchableOpacity>
  </View>
   


 </View>

</View>





<View style = {Eventsstyle.home31} renderItem >


<View>
<Image
        source={require('./src/assets/Podcasts3.png')}
        style={{
          width: 120,
          height: 120,
        }}
        // resizeMode="contain"
      />
</View>


 <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
   <Text style = {{color:'#FFFF', fontWeight:'bold'}}>BUTUH GELAR TINGGI UNTUK BANGUN USAHA SUKSES? EMANG IYA?{'\n'}</Text>
  
   <Text style = {{color:'#ffff', alignItems:'center'}}>UMKM Bag Station  &nbsp;
          <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />
            {'\n'}
            {'\n'}
          </Text>

  <View style = {{flexDirection:'row'}}>
    <View style = {{flex:1}}>

    </View>
  <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}>
      <Text style = {{color:'#ffff',}}>Selengkapnya &nbsp;
      <Image
        source={require('./src/assets/blue_arrow.png')}
        style={{
          width: 15,
          height: 15,
        }}
        // resizeMode="contain"
      />
      </Text>
     
    </TouchableOpacity>
  </View>
   


 </View>

</View>




    </View>


      </ScrollView>



      <View style = {Eventsstyle.home4}>
        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='home'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Home')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Home</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Post and Discussion')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='search-plus'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('UMKM Check')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>UMKM</Text>
            </TouchableOpacity>
        </View>

      </View>





    </View>

  );





}













function Articles(props) {




  return(
    <View style = {{backgroundColor:COLORS.primary, flex:1}}>


   <View style = {Eventsstyle.home1}>
        <View style = {Eventsstyle.home11}>
          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:20}}>MUTER</Text>
        </View>


        <View style = {Eventsstyle.home12}>

        </View>


        <View style = {Eventsstyle.home13} >

        <Icon
        raised
        name='bell-o'
        type='font-awesome'
        color={COLORS.tertiery}
        style={{backgroundColor:COLORS.tertiery}}
        onPress={() => console.log('hello')} 
        size = {20}
        />

      <Icon
      raised
      name='wechat'
      type='font-awesome'
      color={COLORS.tertiery}
      onPress={() => console.log('hello')} 
      size = {20}
      />

      <Icon
      raised
      name='user-o'
      type='font-awesome'
      color={COLORS.tertiery}
      onPress={() => console.log('hello')} 
      size = {20}
      />



        </View>

   

    </View>




      <ScrollView style = {{backgroundColor:COLORS.primary}}>

  
    <View style = {Eventsstyle.home2}>

    <View style = {Eventsstyle.home21}>
    <Icon
              raised
              name='newspaper-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => console.log('hello')} />

        <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:35}}>
          &nbsp;
          ARTICLES</Text>
    </View>



 
    </View>



    <View style = {Eventsstyle.home3}>

      <View style = {Eventsstyle.home31} renderItem >
      <View>
      <Image
              source={require('./src/assets/Articles1.png')}
              style={{
                width: 120,
                height: 120,
              }}
              // resizeMode="contain"
            />
      </View>


       <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
         <Text style = {{color:'#FFFF', fontWeight:'bold'}}>UMKM BISA BERPARTISIPASI DALAM MENJAGA LINGKUNGAN? SIMAK CARANYA! {'\n'}</Text>
        
        
         <Text style = {{color:'#ffff', alignItems:'center'}}>UMKM Beauty Life Store  &nbsp;
          <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />
            {'\n'}
            {'\n'}
          </Text>
   
        <View style = {{flexDirection:'row'}}>
          <View style = {{flex:1}}>

          </View>
        <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}
        // onPress = {()=> props.navigation.navigate('SubClass')}
        >
            <Text style = {{color:'#ffff',}}>{'\n'}Selengkapnya &nbsp;
            <Image
              source={require('./src/assets/blue_arrow.png')}
              style={{
                width: 15,
                height: 15,
              }}
              // resizeMode="contain"
            />
            </Text>
           
          </TouchableOpacity>
        </View>
         


       </View>

      </View>














      <View style = {Eventsstyle.home31} renderItem >


<View>
<Image
        source={require('./src/assets/Articles2.png')}
        style={{
          width: 120,
          height: 120,
        }}
        // resizeMode="contain"
      />
</View>


 <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
   <Text style = {{color:'#FFFF', fontWeight:'bold'}}>TERNYATA UMKM SUMBANGKAN SEBAGIAN BESAR PENDAPATAN NEGARA, PEMERINTAH HARAP UMKM TERUS MAJU!{'\n'}</Text>

   <Text style = {{color:'#ffff', alignItems:'center'}}>UMKM Shoes Bestie  &nbsp;
          <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />
            {'\n'}
            {'\n'}
          </Text>


  <View style = {{flexDirection:'row'}}>
    <View style = {{flex:1}}>

    </View>
  <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}>
      <Text style = {{color:'#ffff',}}>Selengkapnya &nbsp;
      <Image
        source={require('./src/assets/blue_arrow.png')}
        style={{
          width: 15,
          height: 15,
        }}
        // resizeMode="contain"
      />
      </Text>
     
    </TouchableOpacity>
  </View>
   


 </View>

</View>





<View style = {Eventsstyle.home31} renderItem >


<View>
<Image
        source={require('./src/assets/Articles3.png')}
        style={{
          width: 120,
          height: 120,
        }}
        // resizeMode="contain"
      />
</View>


 <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
   <Text style = {{color:'#FFFF', fontWeight:'bold'}}>SEPENUHNYA DUKUNG UMKM, PEMERINTAH SIAPKAN STRATEGI DUKUNG UMKM MAJU!{'\n'}</Text>
  
   <Text style = {{color:'#ffff', alignItems:'center'}}>UMKM Bag Station  &nbsp;
          <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />
            {'\n'}
            {'\n'}
          </Text>

  <View style = {{flexDirection:'row'}}>
    <View style = {{flex:1}}>

    </View>
  <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}>
      <Text style = {{color:'#ffff',}}>Selengkapnya &nbsp;
      <Image
        source={require('./src/assets/blue_arrow.png')}
        style={{
          width: 15,
          height: 15,
        }}
        // resizeMode="contain"
      />
      </Text>
     
    </TouchableOpacity>
  </View>
   


 </View>

</View>










    </View>





      </ScrollView>


      <View style = {Eventsstyle.home4}>
        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='home'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Home')} 
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Home</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Post and Discussion')} 
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='search-plus'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('UMKM Check')} 
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>UMKM</Text>
            </TouchableOpacity>
        </View>

      </View>







    </View>

  );



}












function SubClass(props) {



  return(
    <View style = {{backgroundColor:COLORS.primary, flex:1}}>



<View style = {SubEventsstyle.home1}>
        <View style = {SubEventsstyle.home11}>
          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:20}}>MUTER</Text>
        </View>


        <View style = {SubEventsstyle.home12}>

        </View>


        <View style = {SubEventsstyle.home13} >

        <Icon
  raised
  name='bell-o'
  type='font-awesome'
  color={COLORS.tertiery}
  style={{backgroundColor:COLORS.tertiery}}
  onPress={() => console.log('hello')} 
  size = {20}
  />

<Icon
raised
name='wechat'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>

<Icon
raised
name='user-o'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>



        </View>

   

    </View>









      <ScrollView style = {{backgroundColor:COLORS.primary, flex:1}}>





    <View style = {SubEventsstyle.home2}>

    <View style = {SubEventsstyle.home21}>
    <Icon
              raised
              name='chevron-left'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() =>props.navigation.navigate('Class')} />

        <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:35}}>
          &nbsp;
         CLASS </Text>
    </View>
    </View>







    <View style = {SubEventsstyle.home3}>

      <View style = {SubEventsstyle.home31}>
         

         <Text style= {{color:'#ffff', fontWeight:'bold', fontSize:18, textAlign:'center'}}>PENDANAAN MODAL BAGI UMKM </Text>


         <Image
        source={require('./src/assets/SubClass1.png')}
        style={{
          width: 200,
          height: 120,
          marginTop:20,
          marginBottom:20,
        }}
        // resizeMode="contain"
      />

      <View style = {SubClassstyle.home311}>
        <View style = {{flexDirection:'row'}}>
        <Text style = {{fontWeight:'bold', color:'#ffff', textAlign:'left', flex:1, fontSize:20}}>BAB 1</Text>
        <View></View>
        </View>


        <View style = {{flexDirection:'row'}}>
        <Text style = {{fontWeight:'bold', color:'#ffff', textAlign:'left', flex:1, fontSize:17}}>Macam-macam jenis sumber pendanaan </Text>
        <View></View>
        </View>
      </View>





      <View style = {SubClassstyle.home311}>
        <View style = {{flexDirection:'row'}}>
        <Text style = {{fontWeight:'bold', color:'#ffff', textAlign:'left', flex:1, fontSize:20}}>BAB 2</Text>
        <View></View>
        </View>


        <View style = {{flexDirection:'row'}}>
        <Text style = {{fontWeight:'bold', color:'#ffff', textAlign:'left', flex:1, fontSize:17}}>Kenali macam-macam jenis pendanaan  </Text>
        <View></View>
        </View>

 
      </View>

      <TouchableOpacity style = {{marginTop:20, padding:15, backgroundColor:COLORS.secondary, borderRadius:20}}
      onPress = {()=>props.navigation.navigate('UMKM Check')}
      
      >
          <Text style = {{color:'#ffff', fontWeight:'bold', fontSize:20}} >
            KUIS PENDANAAN
          </Text>
        </TouchableOpacity>


      <View>

      </View>



      </View>


    </View>



      </ScrollView>
    




      <View style = {SubEventsstyle.home4}>
        <View style = {SubEventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='home'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Home')} 
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Home</Text>
            </TouchableOpacity>
        </View>



        <View style = {SubEventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Post and Discussion')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
            </TouchableOpacity>
        </View>



        <View style = {SubEventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='search-plus'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('UMKM Check')}
              size = {20}
              
              />
              <Text style = {{color:COLORS.white}}>UMKM</Text>
            </TouchableOpacity>
        </View>

      </View>
    
    
    
    
    
    
    
    </View>

  );

  
}






const SubClassstyle = StyleSheet.create({
  home1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.tertiery,
    flex:1,
    textAlign:'center',
    flexDirection:'row',
    paddingTop:30,
    paddingBottom:10,
    width:'100%',
    paddingLeft:10,
    paddingRight:10,
  },

  home11:{
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'20%',

  },

  home12:{
    // flex:2,
    flexDirection:'row',
    width:'20%',
  },

  home13:{
    // flex:3,
    flexDirection:'row',
    width:'60%',
  },

  home2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.primary,
    flex:1,
    textAlign:'center',
    flexDirection:'column',
    paddingTop:30,
    paddingBottom:10,
    height:'100%',
    width:'100%',
    // paddingLeft:10,
    // paddingRight:10,
  },

  home21:{
    backgroundColor:COLORS.secondary,
    width:'100%',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:20,
    paddingBottom:20,
    flexDirection:'row',
    alignItems:'center',
  },

  home22:{
    width:'100%',
    paddingRight:15,
    paddingBottom:10,
    paddingLeft:15,
    paddingTop:10,
  },

  home23:{
    width:'100%',
    paddingRight:15,
    paddingBottom:15,
    paddingLeft:15,
    paddingTop:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },

  home3:{
    width:'100%',
    paddingTop:15,
    paddingRight:15,
    paddingLeft:15,
    paddingBottom:15,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },

  home31:{
    width:'100%',
    backgroundColor:COLORS.primary,
    flexDirection:'column',
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:10,
    marginTop:10,
    alignItems:'center',

  },




  home311:{
    width:'100%',
    backgroundColor:COLORS.secondary,
    flexDirection:'column',
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:10,
    marginTop:10,
    alignItems:'center',

  },

  home4:{
    width:'100%',
    backgroundColor:COLORS.tertiery,
    paddingTop:20,
    paddingBottom:20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },

  home41:{
    flexDirection:'column',
    marginLeft:10,
    marginRight:10,

  }



});





























function Class(props) {

  return(
    <View style = {{backgroundColor:COLORS, flex:1}}>

    
    <View style = {Eventsstyle.home1}>
        <View style = {Eventsstyle.home11}>
          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:20}}>MUTER</Text>
        </View>


        <View style = {Eventsstyle.home12}>

        </View>


        <View style = {Eventsstyle.home13} >

        <Icon
  raised
  name='bell-o'
  type='font-awesome'
  color={COLORS.tertiery}
  style={{backgroundColor:COLORS.tertiery}}
  onPress={() => console.log('hello')} 
  size = {20}
  />

<Icon
raised
name='wechat'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>

<Icon
raised
name='user-o'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>



        </View>

   

    </View>


    
      <ScrollView style = {{backgroundColor:COLORS.primary}}>
     
     
    <View style = {Eventsstyle.home2}>

    <View style = {Eventsstyle.home21}>
    <Icon
              raised
              name='desktop'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => console.log('hello')} />

        <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:35}}>
          &nbsp;
          CLASS</Text>
    </View>



 
    </View>



    <View style = {Eventsstyle.home3}>

      <View style = {Eventsstyle.home31} renderItem >
      <View>
      <Image
              source={require('./src/assets/Class1.png')}
              style={{
                width: 120,
                height: 120,
              }}
              // resizeMode="contain"
            />
      </View>


       <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
         <Text style = {{color:'#FFFF', fontWeight:'bold'}}>PENDANAAN MODAL BAGI UMKM </Text>
        
   
        <View style = {{flexDirection:'row'}}>
          <View style = {{flex:1}}>

          </View>
        <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}
        onPress = {()=> props.navigation.navigate('SubClass')}
        >
            <Text style = {{color:'#ffff',}}>{'\n'}Selengkapnya &nbsp;
            <Image
              source={require('./src/assets/blue_arrow.png')}
              style={{
                width: 15,
                height: 15,
              }}
              // resizeMode="contain"
            />
            </Text>
           
          </TouchableOpacity>
        </View>
         


       </View>

      </View>














      <View style = {Eventsstyle.home31} renderItem >


<View>
<Image
        source={require('./src/assets/Class2.png')}
        style={{
          width: 120,
          height: 120,
        }}
        // resizeMode="contain"
      />
</View>


 <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
   <Text style = {{color:'#FFFF', fontWeight:'bold'}}>KELOLA SUMBER DAYA UMKM AGAR BERJALAN LANCAR!{'\n'}</Text>
  

  <View style = {{flexDirection:'row'}}>
    <View style = {{flex:1}}>

    </View>
  <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}>
      <Text style = {{color:'#ffff',}}>Selengkapnya &nbsp;
      <Image
        source={require('./src/assets/blue_arrow.png')}
        style={{
          width: 15,
          height: 15,
        }}
        // resizeMode="contain"
      />
      </Text>
     
    </TouchableOpacity>
  </View>
   


 </View>

</View>
















<View style = {Eventsstyle.home31} renderItem >


<View>
<Image
        source={require('./src/assets/Class3.png')}
        style={{
          width: 120,
          height: 120,
        }}
        // resizeMode="contain"
      />
</View>


 <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
   <Text style = {{color:'#FFFF', fontWeight:'bold'}}>PELAJARI PENGELOLAAN KEUANGAN DAN LAPORAN KEUANGAN!{'\n'}</Text>
  

  <View style = {{flexDirection:'row'}}>
    <View style = {{flex:1}}>

    </View>
  <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}>
      <Text style = {{color:'#ffff',}}>Selengkapnya &nbsp;
      <Image
        source={require('./src/assets/blue_arrow.png')}
        style={{
          width: 15,
          height: 15,
        }}
        // resizeMode="contain"
      />
      </Text>
     
    </TouchableOpacity>
  </View>
   


 </View>

</View>



    </View>


      </ScrollView>



      <View style = {Eventsstyle.home4}>
        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='home'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Home')} 
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Home</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Post and Discussion')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='search-plus'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('UMKM Check')}
              
              size = {20}

              />
              <Text style = {{color:COLORS.white}}>UMKM</Text>
            </TouchableOpacity>
        </View>

      </View>





    </View>

  );




  
}



function SubEvents(props) {

  return(
    <View style = {{backgroundColor:COLORS.primary}}>
      <ScrollView style = {{backgroundColor:COLORS.primary}}>
      <View style = {SubEventsstyle.home1}>
        <View style = {SubEventsstyle.home11}>
          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:20}}>MUTER</Text>
        </View>


        <View style = {SubEventsstyle.home12}>

        </View>


        <View style = {SubEventsstyle.home13} >

        <Icon
  raised
  name='bell-o'
  type='font-awesome'
  color={COLORS.tertiery}
  style={{backgroundColor:COLORS.tertiery}}
  onPress={() => console.log('hello')} 
  size = {20}
  />

<Icon
raised
name='wechat'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>

<Icon
raised
name='user-o'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>



        </View>

   

    </View>


    <View style = {SubEventsstyle.home2}>

    <View style = {SubEventsstyle.home21}>
    <Icon
              raised
              name='chevron-left'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() =>props.navigation.navigate('Events')} />

        <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:35}}>
          &nbsp;
          EVENTS</Text>
    </View>
    </View>







    <View style = {SubEventsstyle.home3}>

      <View style = {SubEventsstyle.home31}>
          <View style = {{flexDirection:'row'}}>
          <Text style = {{color:'#ffff', alignItems:'center', flex:1}}>Suara Muhammadiyah &nbsp;
          <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />
       
          </Text>

          <View ></View>

          </View>

            <View style = {SubEventsstyle.home31}>
            <Image
              source={require('./src/assets/Poster_Events1.png')}
              style={{
                width: 100,
                height: 100,

                alignContent:'center',
                alignItems:'center',
              }}
              // resizeMode="contain"
            />

            <Text style = {{color:'#ffff', fontWeight:'bold', marginTop:10, textAlign:'center', marginBottom:10 }}>[FESTIVAL UMKM] PERESMIAN PUSAT GUDANG & FESTIVAL UMKM</Text>

              <TouchableOpacity style = {{backgroundColor:COLORS.secondary, padding:15, borderRadius:10, marginBottom:10}}>
                <Text style = {{color:'#ffff', fontWeight:'bold'}}>REGISTER</Text>
              </TouchableOpacity>

              <Text style = {{color:'#ffff', fontWeight:'bold', textAlign:'center'}}> Pukul : 06.00 wib – selesai {'\n'}</Text>

              <Text style = {{color:'#ffff', fontWeight:'bold', textAlign:'center'}}> Hari/Tanggal : Ahad, 20 Februari 2022 {'\n'}</Text>

              <Text style = {{color:'#ffff', fontWeight:'bold', textAlign:'center'}}> Tempat : Pusat Gudang dan Dokumen Suara Muhammadiyah Jl. Timbangan Tebu, Bodeh, Ambarketawang, Gamping, Sleman {'\n'}</Text>

              <Text style = {{color:'#ffff', fontWeight:'bold', textAlign:'center'}}> Pendaftaran
Link Pendaftaran
https://bit.ly/umkmregister {'\n'}</Text>


<Text style = {{color:'#ffff', fontWeight:'bold', textAlign:'center'}}> Batas Waktu Pendaftaran hingga 11 Februari 2022 {'\n'}</Text>


<Text style = {{color:'#ffff', fontWeight:'bold', textAlign:'center'}}> Info Lebih Lanjut Hubungi
0821-3431-8616</Text>



            </View>








      </View>


    </View>








      <View style = {SubEventsstyle.home4}>
        <View style = {SubEventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='home'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Home')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Home</Text>
            </TouchableOpacity>
        </View>



        <View style = {SubEventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Post and Discussion')} 
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
            </TouchableOpacity>
        </View>



        <View style = {SubEventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='search-plus'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('UMKM Check')} 
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>UMKM</Text>
            </TouchableOpacity>
        </View>

      </View>








      </ScrollView>
    </View>

  );




  
}












const SubEventsstyle = StyleSheet.create({
  home1:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.tertiery,
    textAlign:'center',
    flexDirection:'row',
    paddingTop:30,
    paddingBottom:10,
    width:'100%',
    paddingLeft:10,
    paddingRight:10,
  },

  home11:{
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'20%',

  },

  home12:{
    // flex:2,
    flexDirection:'row',
    width:'20%',
  },

  home13:{
    // flex:3,
    flexDirection:'row',
    width:'60%',
  },

  home2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.primary,
    flex:1,
    textAlign:'center',
    flexDirection:'column',
    paddingTop:30,
    paddingBottom:10,
    height:'100%',
    width:'100%',
    // paddingLeft:10,
    // paddingRight:10,
  },

  home21:{
    backgroundColor:COLORS.secondary,
    width:'100%',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:20,
    paddingBottom:20,
    flexDirection:'row',
    alignItems:'center',
  },

  home22:{
    width:'100%',
    padding:15,
  },

  home23:{
    width:'100%',
    padding:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },

  home3:{
    width:'100%',
    paddingTop:10,
    paddingRight:15,
    paddingLeft:15,
    paddingBottom:10,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },

  home31:{
    width:'100%',
    backgroundColor:COLORS.primary,
    flexDirection:'column',
    paddingTop:10,
    paddingBottom:20,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:10,
    marginTop:10,
    alignItems:'center',

  },

  home4:{
    width:'100%',
    backgroundColor:COLORS.tertiery,
    paddingTop:10,
    paddingBottom:15,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },

  home41:{
    flexDirection:'column',
    marginLeft:10,
    marginRight:10,

  }



});




































function Events(props) {


  StatusBar.setBarStyle('light-content', true);
  StatusBar.setBackgroundColor(COLORS.primary);


  const tombolLabel = (label) => {
    return(
      <View style = {{ padding:5, justifyContent:'center', alignItems:'center' }}>
          <TouchableOpacity style = {{backgroundColor:COLORS.white, borderRadius:10, width:'100%', paddingTop:10, paddingBottom:10, paddingRight:20, paddingLeft:20 }}>
            <Text style = {{color:COLORS.secondary}}>{label}</Text>
          </TouchableOpacity>
      </View>
    )
  }




  return(
    <View style = {{backgroundColor:COLORS.primary,flex:1}}>




<View style = {Eventsstyle.home1}>
        <View style = {Eventsstyle.home11}>
          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:20}}>MUTER</Text>
        </View>


        <View style = {Eventsstyle.home12}>

        </View>


        <View style = {Eventsstyle.home13} >

        <Icon
          raised
          name='bell-o'
          type='font-awesome'
          color={COLORS.tertiery}
          style={{backgroundColor:COLORS.tertiery}}
          onPress={() => console.log('hello')}
          size = {20}
          />

        <Icon
        raised
        name='wechat'
        type='font-awesome'
        color={COLORS.tertiery}
        onPress={() => console.log('hello')}
        size = {20}
        />

        <Icon
        raised
        name='user-o'
        type='font-awesome'
        color={COLORS.tertiery}
        onPress={() => console.log('hello')} 
        size = {20}
        />



        </View>

   

    </View>







      <ScrollView style = {{backgroundColor:COLORS.primary}}>
  


    <View style = {Eventsstyle.home2}>

    <View style = {Eventsstyle.home21}>
    <Icon
              raised
              name='calendar'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => console.log('hello')} />

        <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:35}}>
          &nbsp;
          EVENTS</Text>
    </View>



 
    </View>



    <View style = {Eventsstyle.home3}>

      <View style = {Eventsstyle.home31} renderItem >
      <View>
      <Image
              source={require('./src/assets/Poster_Events1.png')}
              style={{
                width: 120,
                height: 120,
              }}
              // resizeMode="contain"
            />
      </View>


       <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
         <Text style = {{color:'#FF0000'}}>20 Februari 2022</Text>
         <Text style = {{color:'#FFFF', fontWeight:'bold'}}>[FESTIVAL UMKM] PERESMIAN PUSAT GUDANG & FESTIVAL UMKM{'\n'}</Text>
        
          <Text style = {{color:'#ffff', alignItems:'center'}}>Suara Muhammadiyah &nbsp;
          <Image
              source={require('./src/assets/check_events.png')}
              style={{
                width: 12,
                height: 12,
              }}
              // resizeMode="contain"
            />
            {'\n'}
            {'\n'}
          </Text>
        <View style = {{flexDirection:'row'}}>
          <View style = {{flex:1}}>

          </View>
        <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}
        onPress = {()=> props.navigation.navigate('SubEvents')}
        >
            <Text style = {{color:'#ffff',}}>Selengkapnya &nbsp;
            <Image
              source={require('./src/assets/blue_arrow.png')}
              style={{
                width: 15,
                height: 15,
              }}
              // resizeMode="contain"
            />
            </Text>
           
          </TouchableOpacity>
        </View>
         


       </View>

      </View>














      <View style = {Eventsstyle.home31} renderItem >


<View>
<Image
        source={require('./src/assets/Poster_Events2.png')}
        style={{
          width: 120,
          height: 120,
        }}
        // resizeMode="contain"
      />
</View>


 <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
   <Text style = {{color:'#FF0000'}}>25 Juni 2022</Text>
   <Text style = {{color:'#FFFF', fontWeight:'bold'}}>[WEBINAR] STRATEGI PEMBANGUNAN PRODUK UMKM{'\n'}</Text>
  
    <Text style = {{color:'#ffff', alignItems:'center'}}>Kemenkopukm &nbsp;
    <Image
        source={require('./src/assets/check_events.png')}
        style={{
          width: 12,
          height: 12,
        }}
        // resizeMode="contain"
      />
      {'\n'}
      {'\n'}
    </Text>
  <View style = {{flexDirection:'row'}}>
    <View style = {{flex:1}}>

    </View>
  <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}>
      <Text style = {{color:'#ffff',}}>Selengkapnya &nbsp;
      <Image
        source={require('./src/assets/blue_arrow.png')}
        style={{
          width: 15,
          height: 15,
        }}
        // resizeMode="contain"
      />
      </Text>
     
    </TouchableOpacity>
  </View>
   


 </View>

</View>
















<View style = {Eventsstyle.home31} >

<View>
<Image
        source={require('./src/assets/Poster_Events3.png')}
        style={{
          width: 120,
          height: 120,
        }}
        // resizeMode="contain"
      />
</View>


 <View style = {{marginLeft:15, marginRight:15, width:'60%'}}>
   <Text style = {{color:'#FF0000'}}>24 September 2022</Text>
   <Text style = {{color:'#FFFF', fontWeight:'bold'}}>[WEBINAR] KEMITRAAN UMKM SAAT PANDEMI{'\n'}</Text>
  
    <Text style = {{color:'#ffff', alignItems:'center'}}>BEM Prasetya Mulya &nbsp;
    <Image
        source={require('./src/assets/check_events.png')}
        style={{
          width: 12,
          height: 12,
        }}
        // resizeMode="contain"
      />
      {'\n'}
      {'\n'}
    </Text>
  <View style = {{flexDirection:'row'}}>
    <View style = {{flex:1}}>

    </View>
  <TouchableOpacity style = {{flex:2,  marginRight:'10%'}}>
      <Text style = {{color:'#ffff',}}>Selengkapnya &nbsp;
      <Image
        source={require('./src/assets/blue_arrow.png')}
        style={{
          width: 15,
          height: 15,
        }}
        // resizeMode="contain"
      />
      </Text>
     
    </TouchableOpacity>
  </View>
   


 </View>

</View>










    </View>




      </ScrollView>






      <View style = {Eventsstyle.home4}>
        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='home'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Home')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Home</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Post and Discussion')} 
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
            </TouchableOpacity>
        </View>



        <View style = {Eventsstyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='search-plus'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('UMKM Check')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>UMKM</Text>
            </TouchableOpacity>
        </View>

      </View>






    </View>

  );


}








const Eventsstyle = StyleSheet.create({
  home1:{

    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.tertiery,
  
    textAlign:'center',
    flexDirection:'row',
    paddingTop:30,
    paddingBottom:10,
    width:'100%',
    paddingLeft:10,
    paddingRight:10,
  },

  home11:{
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'20%',

  },

  home12:{
    // flex:2,
    flexDirection:'row',
    width:'20%',
  },

  home13:{
    // flex:3,
    flexDirection:'row',
    width:'60%',
  },

  home2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.primary,
    flex:1,
    textAlign:'center',
    flexDirection:'column',
    paddingTop:30,
    paddingBottom:10,
    height:'100%',
    width:'100%',
    // paddingLeft:10,
    // paddingRight:10,
  },

  home21:{
    backgroundColor:COLORS.secondary,
    width:'100%',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:20,
    paddingBottom:20,
    flexDirection:'row',
    alignItems:'center',
  },

  home22:{
    width:'100%',
    padding:15,
  },

  home23:{
    width:'100%',
    padding:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },

  home3:{
    width:'100%',
    paddingTop:15,
    paddingRight:15,
    paddingLeft:15,
    paddingBottom:15,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },

  home31:{
    width:'100%',
    backgroundColor:COLORS.quadratary,
    flexDirection:'row',
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:10,
    marginTop:10,
    alignItems:'center',

  },

  home4:{
    width:'100%',
    backgroundColor:COLORS.tertiery,
    paddingTop:10,
    paddingBottom:20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },

  home41:{
    flexDirection:'column',
    marginLeft:10,
    marginRight:10,

  }



});













function Welcome(props) {
  const [showHomePage, setShowHomePage] = useState(true);

  StatusBar.setBarStyle('light-content', true);
  StatusBar.setBackgroundColor(COLORS.primary);


  const tombolLabel = (label) => {
    return(
      <View style = {{ padding:5, justifyContent:'center', alignItems:'center' }}>
          <TouchableOpacity style = {{backgroundColor:COLORS.white, borderRadius:10, width:'100%', paddingTop:10, paddingBottom:10, paddingRight:20, paddingLeft:20 }}>
            <Text style = {{color:COLORS.secondary}}>{label}</Text>
          </TouchableOpacity>
      </View>
    )
  }


  const buttonLabel = (label) => {
    return(
      <View style={{
        padding: 12
      }}>
        <Text style={{
          color: COLORS.title,
          fontWeight: '600',
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  // if(!showHomePage) {
  //   return(
  //     <AppIntroSlider
  //       data={slides}
  //       renderItem={({item}) => {
  //         return(
  //           <View style={{
  //             flex: 1,
  //             alignItems: 'center',
  //             padding: 15,
  //             paddingTop: 100,
  //           }}>
  //             <Image
  //               source={item.image}
  //               style={{
  //                 width: SIZES.width - 80,
  //                 height: 400,
  //               }}
  //               resizeMode="contain"
  //             />
  //             <Text style={{
  //               fontWeight: 'bold',
  //               color: COLORS.title,
  //               fontSize: SIZES.h1,
  //             }}>
  //               {item.title}
  //             </Text>
  //             <Text style={{
  //               textAlign: 'center',
  //               paddingTop: 5,
  //               color: COLORS.title
  //             }}>
  //               {item.description}
  //             </Text>
  //           </View>
  //         )
  //       }}
  //       activeDotStyle={{
  //         backgroundColor: COLORS.primary,
  //         width: 30,
  //       }}
  //       showSkipButton
  //       renderNextButton={() => buttonLabel("Next")}
  //       renderSkipButton={() => buttonLabel("Skip")}
  //       renderDoneButton={() => buttonLabel("Done")}
  //       onDone={() => {
  //         setShowHomePage(true);
  //       }}
  //     />
  //   )
  // }

  // return(
  //   <Router />
  // )

  return(
    <AppIntroSlider
      data={slides}
      style={{backgroundColor:'#0C95FE'}}
      renderItem={({item}) => {
        return(
          <View style={{
            flex: 1,
            alignItems: 'center',
            padding: 15,
            paddingTop: 100,
          }}>
            <Image
              source={item.image}
              style={{
                width: SIZES.width - 80,
                height: 300,
              }}
              resizeMode="contain"
            />
            <Text style={{
              fontWeight: 'bold',
              color: COLORS.white,
              fontSize: SIZES.h1,
              textAlign:'center',
              marginTop:20,
            }}>
              {item.title}
            </Text>
            <Text style={{
              textAlign: 'center',
              paddingTop: 5,
              color: COLORS.white,
              marginTop:20,
            }}>
              {item.description}
            </Text>
          </View>
        )
      }}
      activeDotStyle={{
        backgroundColor: COLORS.white,
        width: 30,
      }}
      // showSkipButton
      renderNextButton={() => tombolLabel("Next")}
      // renderSkipButton={() => tombolLabel("Skip")}
      renderDoneButton={() => tombolLabel("Get Started")}
      onDone={() => {
        // setShowHomePage(true);
        props.navigation.navigate('Home');
      }}

      bottomButton
    />
  )

  
}













// import Expo from "expo";
// import ExpoTHREE, { THREE } from 'expo-three';;

const onContextCreate = async({gl, scale, width, height, arSession}) => {
  this.renderer = ExpoTHREE.createRenderer({gl});
  this.renderer.setPixelRatio(scale);
  this.renderer.setSize(width, height);

  this.scene = new THREE.Scene();

  this.scene.background = ExpoTHREE.CreateARBackgroundTexture(arSession, this.renderer);

  this.camera = ExpoTHREE.createARCamera(arSession, width/scale, height/scale, 0.01, 1000);
}

const onRender = (delta) => {
this.renderer.render(this.scene, this.camera);
}




function beranda() {
  return (
  <View style = {{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#f2f2f2'}}>
    <Text>This is CodingYuk User Interface</Text>
  </View>
  );
}








function Levelsaturun(props) {


  var nama = "time";
  var cita = "ohranger"
  var inputlevel1 = '#include<stdio.h> \n \n int main() \n { \n printf("Hallo"); \n printf("NAMA:'+ nama +'"); \n print("' + cita +'"); \n return 0;  }';





  var [text,BerubahTeks] = React.useState(inputlevel1);
  
  // const [text,BerubahTeks] = React.useState(inputlevel1);
  var new_str = text.replace('#include<stdio.h> \n \n int main() \n { \n printf("', '');
  var new_str2 = new_str.replace('"); \n printf("NAMA:', ' ');
  var new_str3 = new_str2.replace('"); \n print("','\n');
  var new_str4 = new_str3.replace('"); \n return 0;  }','')


var Hasil = () => {
  // var keadaan = this.state.new_str4;
    alert(new_str4);
  }


  const InputNilai = Yup.object().shape({
    kode: Yup.string().required('Required'),
    // password: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(10, 'Too Long!')
    //   .required('Required')
  });




  const {
    handleChange,
   submitForm,
    handleBlur,
    values,
    errors,
    touched
     } = useFormik({
    validationSchema: InputNilai,
    initialValues: { kode: '' },
    onSubmit: values =>
      // alert(`Nama: ${values.name}`),
      props.navigation.navigate('Beranda')
    
  });









  return (
 


    
  <View>
  <ScrollView >
    
    <View style = {styles.landinglevelsatu1} >
      <View style = {{alignItems:'stretch', marginLeft:10}}>
          <TouchableOpacity>
          <Icon
raised
name='arrow-left'
type='font-awesome'
color='#ED8D8D'
onPress={() => props.navigation.navigate('Level 1')} />
          </TouchableOpacity>
      </View>

      <View style = {{justifyContent:'center', alignItems:'center'}}>
      <Text style = {{color:'#25627F', alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:'bold'}} >Level 1</Text>
      <Text style = {{color:'#25627F',  alignItems:'center', justifyContent:'center', fontSize:20, fontWeight:'bold'}} >"Hello World"</Text>
      {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/hero-img.png')} style = {{width:120, height:120}} /> */}
      </View>
      
    </View>

    <View style = {{
         marginTop:-30,
         borderRadius:40,
         height:450,
         backgroundColor:'#f2f2f2',
         justifyContent:'center',
         alignItems:'center'
    }}>
 


        {/* <View elevation = {10} style = {{ flexDirection:'row', borderRadius:20, marginTop:20, height:170, width:'80%', backgroundColor:'#f2f2f2', shadowColor:'#424242', shadowOpacity:0.8, shadowRadius:5, shadowOffset:{
          height:5, width:5
        }}}>

        </View> */}


        <TextInput style = {{marginTop:-120,padding:20, flexDirection:'row', borderRadius:20, height:300, width:'100%', backgroundColor:'#f2f2f2', color:'#25627F', fontWeight:'bold'}}

        // autoCapitalize='none'
        // autoCompleteType='kode'
        // onBlur={handleBlur('kode')}
        // error={errors.kode}
        // touched={touched.kode}
        // onChangeText={handleChange('kode')}
        // value = {inputlevel1} 
        // // onChangeText={BerubahTeks}
        // onPress ={submitForm}


        // value = {text}
        // onChangeText={BerubahTeks}
        onChangeText={text=>BerubahTeks(text)}
        defaultValue={text}
        multiline={true}
        numberOfLines={4} 
        
        />



          {/* <Text style = {{color:'#25627F', fontWeight:'bold'}} >
              {inputlevel1}
          </Text> */}

        {/* </View> */}







        <View style = {{marginTop:5}}>

          <TouchableOpacity style = {{backgroundColor:'#ED8D8D', padding:15, borderRadius:20, width:100, justifyContent:'center', alignItems:'center'}} 
          // onPress = {()=>Hasil} >
          onPress = {()=>Hasil()} >
            <Text style = {{fontWeight:'bold', fontSize:15, color:'#25627F'}}>
              RUN
            </Text>
          </TouchableOpacity>
        </View>




    </View>


  </ScrollView>
</View>






  );


}








function Home(props) {


  StatusBar.setBarStyle('light-content', true);
  StatusBar.setBackgroundColor(COLORS.primary);


  const tombolLabel = (label) => {
    return(
      <View style = {{ padding:5, justifyContent:'center', alignItems:'center' }}>
          <TouchableOpacity style = {{backgroundColor:COLORS.white, borderRadius:10, width:'100%', paddingTop:10, paddingBottom:10, paddingRight:20, paddingLeft:20 }}>
            <Text style = {{color:COLORS.secondary}}>{label}</Text>
          </TouchableOpacity>
      </View>
    )
  }




  return(
    <View style = {{backgroundColor:COLORS.primary, flex:1}}>


<View style = {Homestyle.home1}>
        <View style = {Homestyle.home11}>
          <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:20}}>MUTER</Text>
        </View>


        <View style = {Homestyle.home12}>

        </View>


        <View style = {Homestyle.home13} >

        <Icon
  raised
  name='bell-o'
  type='font-awesome'
  color={COLORS.tertiery}
  style={{backgroundColor:COLORS.tertiery}}
  onPress={() => console.log('hello')}
  size = {20}
  
  />



<Icon
raised
name='wechat'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')}
size = {20}
/>



<Icon
raised
name='user-o'
type='font-awesome'
color={COLORS.tertiery}
onPress={() => console.log('hello')} 
size = {20}
/>



        </View>

   

    </View>








      <ScrollView style = {{backgroundColor:COLORS.primary}}>
     

    <View style = {Homestyle.home2}>
      <View style = {Homestyle.home21} >
        <Text style = {{color:COLORS.white, fontWeight:'bold', fontSize:18}}>Hi Muters ! Ikuti Event Terdekat !</Text>
      </View>

      <View style = {Homestyle.home22}>



      <AppIntroSlider
      data={slides_webinar}
      style={{backgroundColor:'#0C95FE'}}
      renderItem={({item}) => {
        return(
          <View style={{
            flex: 1,
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight:15,
            paddingBottom:70,
            paddingTop: 10,
          }}>
            <Image
              source={item.image}
              style={{
                width: SIZES.width - 80,
                height: 150,
              }}
              resizeMode="contain"
            />
       
          </View>
        )
      }}
      activeDotStyle={{
        backgroundColor: COLORS.white,
        width: 30,
      }}
      // showSkipButton
      renderNextButton={() => tombolLabel("Next")}
      // renderSkipButton={() => tombolLabel("Skip")}
      renderDoneButton={() => tombolLabel("Next")}
      onDone={() => {
        // setShowHomePage(true);
        props.navigation.navigate('Home');
      }}

      // bottomButton
    />

      </View>

      <View style = {Homestyle.home23}>
        <TouchableOpacity
        style = {{alignItems:'center', justifyContent:'center'}}
        onPress={() => props.navigation.navigate('Events')} 
        >
        <Icon
          raised
          name='calendar-check-o'
          type='font-awesome'
          color={COLORS.secondary}
          backgroundColor={COLORS.secondary}
          containerStyle={{backgroundColor:COLORS.secondary}}
          />
          <Text style = {{color:COLORS.white}}>Events</Text>
        </TouchableOpacity>





        <TouchableOpacity
        style = {{alignItems:'center', justifyContent:'center'}}
        onPress={() => props.navigation.navigate('Class')} 
        >
        <Icon
          raised
          name='laptop'
          type='font-awesome'
          color={COLORS.secondary}
          backgroundColor={COLORS.secondary}
          containerStyle={{backgroundColor:COLORS.secondary}}
          />
          <Text style = {{color:COLORS.white}}>Class</Text>
        </TouchableOpacity>





        <TouchableOpacity
        style = {{alignItems:'center', justifyContent:'center'}}
        onPress={() => props.navigation.navigate('Articles')} 
        >
        <Icon
          raised
          name='newspaper-o'
          type='font-awesome'
          color={COLORS.secondary}
          backgroundColor={COLORS.secondary}
          containerStyle={{backgroundColor:COLORS.secondary}}
          />
          <Text style = {{color:COLORS.white}}>Articles</Text>
        </TouchableOpacity>





        <TouchableOpacity
        style = {{alignItems:'center', justifyContent:'center'}}
        onPress={() => props.navigation.navigate('Podcasts')} 
        >
        <Icon
          raised
          name='podcast'
          type='font-awesome'
          color={COLORS.secondary}
          backgroundColor={COLORS.secondary}
          containerStyle={{backgroundColor:COLORS.secondary}}
          />
          <Text style = {{color:COLORS.white}}>Podcasts</Text>
        </TouchableOpacity>



        <TouchableOpacity
        style = {{alignItems:'center', justifyContent:'center', backgroundColor:COLORS.primary}}
        onPress={() => props.navigation.navigate('Store')} 
        >
        <Icon
          raised
          name='money'
          type='font-awesome'
          color={COLORS.secondary}
          backgroundColor={COLORS.secondary}
          containerStyle={{backgroundColor:COLORS.secondary}}
          />
          <Text style = {{color:COLORS.white}}>Store</Text>
        </TouchableOpacity>
      </View>

    </View>



    <View style = {Homestyle.home3}>

      <View style = {Homestyle.home31}>
      <View style = {{width:'30%'}}>
      <Icon
          raised
          name='lightbulb-o'
          type='font-awesome'
          color={COLORS.secondary}
          backgroundColor={COLORS.secondary}
          containerStyle={{backgroundColor:COLORS.secondary}}
          />
      </View>

      <View style = {{width:'70%'}}>
      <TouchableOpacity>
      <Text
        style = {{color:COLORS.white, paddingRight:10}}
        >Ikuti Kuis untuk ketahui informasi yang kamu tahu tentang UMKM dan dapatkan skormu di sini !</Text>
      </TouchableOpacity>

  
      </View>
      </View>




      <View style = {Homestyle.home31}>
      <View style = {{width:'30%'}}>
      <Icon
          raised
          name='search'
          type='font-awesome'
          color={COLORS.secondary}
          backgroundColor={COLORS.secondary}
          containerStyle={{backgroundColor:COLORS.secondary}}
          />
      </View>

      <View style = {{width:'70%'}}>
      <TouchableOpacity>
      <Text
        style = {{color:COLORS.white, paddingRight:10}}
        >Cari UMKM dengan sektor yang sama dan diskusikan tentang apa pun mengenai UMKM mu !</Text>

      </TouchableOpacity>
      </View>
      </View>



      <View style = {Homestyle.home31}>
      <View style = {{width:'30%'}}>
      <Icon
          raised
          name='bullhorn'
          type='font-awesome'
          color={COLORS.secondary}
          backgroundColor={COLORS.secondary}
          containerStyle={{backgroundColor:COLORS.secondary}}
          />
      </View>

      <View style = {{width:'70%'}}>

      <TouchableOpacity>
      <Text
        style = {{color:COLORS.white, paddingRight:10}}
        >
          Perkenalkan UMKM-mu dengan menyebar lebih banyak informasi. Daftarkan dirimu menjadi mentor, ikutilah seleksinya !
        </Text>

      </TouchableOpacity>
      </View>
      </View>

    </View>

      {/* <View style = {Homestyle.home4}>
        <View style = {Homestyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='home'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Home')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Home</Text>
            </TouchableOpacity>
        </View>



        <View style = {Homestyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Post and Discussion')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
            </TouchableOpacity>
        </View>



        <View style = {Homestyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='search-plus'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('UMKM Check')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>UMKM</Text>
            </TouchableOpacity>
        </View>

      </View> */}



      </ScrollView>







      <View style = {Homestyle.home4}>
        <View style = {Homestyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='home'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Home')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Home</Text>
            </TouchableOpacity>
        </View>



        <View style = {Homestyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='sticky-note-o'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('Post and Discussion')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>Post and Discuss</Text>
            </TouchableOpacity>
        </View>



        <View style = {Homestyle.home41}>
            <TouchableOpacity style = {{justifyContent:'center', alignItems:'center'}}>
            <Icon
              raised
              name='search-plus'
              type='font-awesome'
              color={COLORS.tertiery}
              onPress={() => props.navigation.navigate('UMKM Check')}
              size = {20}
              />
              <Text style = {{color:COLORS.white}}>UMKM</Text>
            </TouchableOpacity>
        </View>


        

      </View>



    </View>

  );


}


const Homestyle = StyleSheet.create({
  home1:{
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.tertiery,
    textAlign:'center',
    flexDirection:'row',
    paddingTop:30,
    paddingBottom:10,

    width:'100%',
    paddingLeft:10,
    paddingRight:10,
  },

  home11:{
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:'20%',

  },

  home12:{
    // flex:2,
    flexDirection:'row',
    width:'20%',
  },

  home13:{
    // flex:3,
    flexDirection:'row',
    width:'60%',
  },

  home2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.primary,
    flex:1,
    textAlign:'center',
    flexDirection:'column',
    paddingTop:30,
    paddingBottom:10,
    height:'100%',
    width:'100%',
    // paddingLeft:10,
    // paddingRight:10,
  },

  home21:{
    backgroundColor:COLORS.secondary,
    width:'100%',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:20,
    paddingBottom:20,
  },

  home22:{
    width:'100%',
    padding:15,
  },

  home23:{
    width:'100%',
    paddingRight:15,
    paddingBottom:15,
    paddingLeft:15,
    paddingTop:3,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },

  home3:{
    width:'100%',
    paddingTop:15,
    paddingRight:15,
    paddingLeft:15,
    paddingBottom:15,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },

  home31:{
    width:'100%',
    backgroundColor:COLORS.secondary,
    flexDirection:'row',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:15,
    paddingRight:15,
    borderRadius:10,
    marginTop:10,

  },

  home4:{
    width:'100%',
    backgroundColor:COLORS.tertiery,
    paddingTop:10,
    paddingBottom:15,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },

  home41:{
    flexDirection:'column',
    marginLeft:10,
    marginRight:10,


  }



});


function Login(props)
{


  const InputSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    // password: Yup.string()
    //   .min(2, 'Too Short!')
    //   .max(10, 'Too Long!')
    //   .required('Required')
  });




  const {
    handleChange,
   submitForm,
    handleBlur,
    values,
    errors,
    touched
     } = useFormik({
    validationSchema: InputSchema,
    initialValues: { name: '', password:'' },
    onSubmit: values =>
      // alert(`Nama: ${values.name}`),
      props.navigation.navigate('Welcome'),
    
  });


  const [show, setShow] = React.useState(false);



  useEffect(()=>{
    setTimeout(()=>setShow(true), 3000);
  }, [])



  const [email, KetikEmail] = React.useState('Ketik Emailmu');

  const [pass, KetikPassword] = React.useState('Ketik Passwordmu');


  return(
    <View style = {styles.login}>


{show ?


<ImageBackground source={require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/bg-login-1.png')} resizeMode="cover" style={styles.bgimage}>
{/* <Text style = {{justifyContent:'center', alignItems:'center', fontSize:30, fontWeight:'bold', color:'#ffff'}}> MUTER</Text> */}

<Image source={require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/logo_1.png')} style = {{width:'50%', height:'5%', justifyContent:'center', alignItems:'center'}} />


<View style = {{ flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:10,
    marginTop:20,
    }}>
  <Icon 
   raised
   name='envelope'
   type='font-awesome'
   color='#5E17EB'
   size={10}
  />
  <TextInput 
placeholder="Ketik Emailmu"
autoCapitalize='none'
autoCompleteType='name'
onBlur={handleBlur('name')}
error={errors.name}
touched={touched.name}
onChangeText={handleChange('name')}
// onChangeText={KetikNama} 
// value = {email}
  style={{width:'70%', height:30, backgroundColor:'#ffff',  borderRadius:10, paddingLeft:10}} />
</View>







<View style = {{ flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius:10,
    marginTop:20,
    }}>
  <Icon 
   raised
   name='lock'
   type='font-awesome'
   color='#5E17EB'
   size={10}
  />
  <TextInput 
  secureTextEntry={true}
placeholder="Ketik Password"
autoCapitalize='none'
autoCompleteType='password'
onBlur={handleBlur('password')}
error={errors.password}
touched={touched.password}
onChangeText={handleChange('password')}
// onChangeText={KetikNama} 
// value = {pass}
  style={{width:'70%', height:30, backgroundColor:'#ffff',  borderRadius:10, paddingLeft:10}} />
</View>







<View style = {{flexDirection:'row', width:'65%', marginTop:10}}>
  <View style = {{flex:1}}>
    {/* <Text></Text> */}
  </View>

  <View style = {{flex:2}}>
  <TouchableOpacity>
  <Text style = {{textAlign:'right', color:'#fff'}}>Forgot Your Password ?</Text>
  </TouchableOpacity>
 
  </View>

</View>







<TouchableOpacity style = {{width:'100%', height:30, backgroundColor:'#5E17EB', marginTop:30, paddingTop:20, paddingBottom:20, paddingLeft:100, paddingRight:100, justifyContent:'center', borderRadius:30}}
//  onPress ={()=>props.navigation.navigate('Beranda')}
onPress ={submitForm}
 
 >
  <Text style = {{fontSize:20, fontWeight:'bold', color:'#ffff', textDecorationLine:'underline' }}>
    Sign In
  </Text>
</TouchableOpacity>

<TouchableOpacity style = {{marginTop:20}}>
  <Text style = {{color:'#fff'}}>Don't have an account ?</Text>
</TouchableOpacity>


<TouchableOpacity style = {{marginTop:20}}>
  <Text style = {{color:'#5E17EB'}}>REGISTER</Text>
</TouchableOpacity>



</ImageBackground>



: <Lottie/>}



    </View>
  )
}











function Landing(props){

  const [text, onChangeText] = React.useState("Search For Knowledge");
  return(
    <View>
      <ScrollView>
       <View style = {styles.landingutama1}>
        {/* <View style = {styles.landingutama0}> */}
          
       <View style = {styles.landingutamakiri1}>
          <Text style = {styles.textlandingkiri1}>Welcome To CodingYuk !</Text>
          {/* <Image source={require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/hero-img.png')} style = {{width:150,height:150,justifyContent:'center', alignItems:'center'}} /> */}
        </View>

        <View style = {styles.landingutamakanan1}>
          {/* <Text style = {styles.textlandingkanan1}>Welcome To CodingYuk !</Text> */}
          <Image source={require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/hero-img.png')} style = {{width:150,height:150,justifyContent:'center', alignItems:'center'}} />
        <Text>{'\n'}</Text>
        </View>


        {/* </View> */}

       </View>





       <View style={styles.landingutama2}>
         
          <TextInput 
          // onChangeText={onChangeText} value = {text} 
          placeholder="Search For Knowledge"
          style = {styles.teksinput}/>

      




<View style = {styles.landingutama3}>
<View style = {{width:'50%',}}>
  <Text style = {{fontWeight:'bold', padding:20,color:'#435665', fontSize:15}}>Ayo mulai belajar Coding</Text>
  <TouchableOpacity 
  style = {{borderRadius:10,paddingTop:10, paddingBottom:10, backgroundColor:'#ED8D8D', marginBottom:10, marginLeft:20, alignItems:'center' }}
  onPress = {()=>props.navigation.navigate('Scan')}
  >
    <Text style = {{color:'#ffff', fontWeight:'bold',}} >Scan QR Code</Text>
  </TouchableOpacity>

  {/* <TextInput style = {{backgroundColor:'#424242', height:25, width:'80%', marginTop:20}} /> */}
</View>


<View style = {{width:'50%'}}>
<Image source={require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/barcode.png')} style = {{width:140,height:140,justifyContent:'center', alignItems:'center'}} />
</View>




<View></View>


</View>



          </View>









       <View style = {styles.konten1}>
        <Text style = {styles.tulisankonten1}>Yuk Lanjutin Belajarmu !</Text>


          <View style = {{width:'88%', height:100, backgroundColor:'rgba(203,108,230, 0.4)', marginTop:20, flexDirection:'row', borderRadius:20,}}>
              <View style = {{justifyContent:'center', alignItems:'center', width:'25%',  marginLeft:5}}>
                <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/icons.png')} style = {{width:50, height:50}} />
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'30%', marginLeft:5, marginRight:5, }}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>Level 1 {'\n'}Hello World</Text>
                <Text style = {{fontSize:8, color : '#FF0000', marginTop:3}}>10 Hours, 19 Lesson</Text>
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'37%', marginRight:5, flexDirection:'row'}}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>25 %</Text>
                <TouchableOpacity onPress={
        ()=>props.navigation.navigate('Level 1')
        } >
                <Icon
                  raised
                  name='play'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('hello')} 
                  size={15}
                  />

                  {/* <CircularProgress /> */}

                </TouchableOpacity>
              </View>

          </View>






          <View style = {{width:'88%', height:100, backgroundColor:'rgba(255, 222, 89, 0.4)', marginTop:20, flexDirection:'row', borderRadius:20,}}>
              <View style = {{justifyContent:'center', alignItems:'center', width:'25%',  marginLeft:5}}>
                <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/math-op-basic.png')} style = {{width:50, height:50}} />
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'30%', marginLeft:5, marginRight:5, }}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>Level 2 {'\n'}Yuk Berhitung 1</Text>
                <Text style = {{fontSize:8, color : '#FF0000', marginTop:3}}>10 Hours, 19 Lesson</Text>
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'37%', marginRight:5, flexDirection:'row'}}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>25 %</Text>
                <TouchableOpacity>
                <Icon
                  raised
                  name='play'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('hello')}
                  size={15}
                  />

                  {/* <CircularProgress /> */}

                </TouchableOpacity>
              </View>

          </View>
















          <View style = {{width:'88%', height:100, backgroundColor:'rgba(140,82,255, 0.1)', marginTop:20, flexDirection:'row', borderRadius:20,}}>
              <View style = {{justifyContent:'center', alignItems:'center', width:'25%',  marginLeft:5}}>
                <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/math-op.png')} style = {{width:50, height:50}} />
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'30%', marginLeft:5, marginRight:5, }}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>Level 3 {'\n'}Yuk Berhitung 2</Text>
                <Text style = {{fontSize:8, color : '#FF0000', marginTop:3}}>10 Hours, 19 Lesson</Text>
              </View>


              <View style = {{justifyContent:'center', alignItems:'center', width:'37%', marginRight:5, flexDirection:'row'}}>
                {/* <Image source = {require('D:/XAMPP/htdocs/khusus-mobile-apps/Muter/src/icons.png')} style = {{width:50, height:50}} />
                 */}

                <Text style = {{fontWeight:'bold', color:'#435665'}}>25 %</Text>
                <TouchableOpacity>
                <Icon
                  raised
                  name='play'
                  type='font-awesome'
                  color='#f50'
                  onPress={() => console.log('hello')}
                  size={15}
                  />

                  {/* <CircularProgress /> */}

                </TouchableOpacity>
              </View>

          </View>













        </View>



      </ScrollView>

    </View>
    

 

  )
}








const Drawer = createDrawerNavigator();

const NullComponent = props => {
  return null;
}

const CustomDrawer = (props) =>{
  return <DrawerContentScrollView {...props} >
    <View style = {styles.user1}>
      <View>
         <Text style = {{color:'white'}}>Hallo</Text>
         <Text style = {{color:'white', fontWeight:'bold'}}> Fairuz Firjatullah</Text>
        
      </View>
      <Image source = {{
           uri:'https://scontent.fcgk7-1.fna.fbcdn.net/v/t1.6435-9/240876440_2244872828982700_4369412180999056654_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHfom63bSm5fBxMKcIy-5HPH-IPE5b9vyYf4g8Tlv2_JqE90H3cD0bB8Ew_HcuWZ0Cm6MQ82msr1GgLDlqqUWtN&_nc_ohc=ec79RYEFIj8AX-BkjJP&_nc_ht=scontent.fcgk7-1.fna&oh=e3e313e350d200237922feca2e095e05&oe=618D6F9C'
         }} style = {{width:50, height:50, borderRadius:30,}} />
    </View>

    <DrawerItemList {...props} />
  </DrawerContentScrollView>

}
















const DrawerNavigator = ()=>{
  return <Drawer.Navigator drawerContent = {(props)=><CustomDrawer {...props}/>} >


<Drawer.Screen component = {Login} name = 'Login'    options={{
            headerShown: false,
            drawerItemStyle:{
              display:'none',
            
            },
            drawerContentContainerStyle:{
              display:'none',
            },
            // headerLeftContainerStyle:{
            //   display:'none',
            // }
            gestureEnabled:false,
            swipeEnabled:false
         
          }}

          
        
          

          />









<Drawer.Screen component = {Welcome} name = 'Welcome'    options={{
            headerShown: false,
            drawerItemStyle:{
              display:'none',
            
            },
            drawerContentContainerStyle:{
              display:'none',
            },
            // headerLeftContainerStyle:{
            //   display:'none',
            // }
            gestureEnabled:false,
            swipeEnabled:false
         
          }}

          />




<Drawer.Screen component = {Home} name = 'Home'   options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },

          drawerIcon:({color}) => <Icon
          size={23}
          name={'home'} type ={'font-awesome'} color = {color}></Icon>,



          headerShown:false,
          drawerItemStyle:{
            // display:'none',
          }
        }} 
        
        // options={{drawerLabel: NullComponent}}
        />










<Drawer.Screen component = {LihatSkor} name = 'LihatSkor'    options={{
            headerShown: false,
            drawerItemStyle:{
              display:'none',
            
            },
            drawerContentContainerStyle:{
              display:'none',
            },
            // headerLeftContainerStyle:{
            //   display:'none',
            // }
            gestureEnabled:true,
            swipeEnabled:true,

     

         
          }}


          

          />
















<Drawer.Screen component = {Landing} name = 'Beranda'   options={{
          
          // title: 'My home',

          drawerIcon:({color}) => <Icon
          size={23}
          name={'home'} type ={'font-awesome'} color = {color}></Icon>,

          drawerItemStyle:{
            activeBackgroundColor:'#ED8D8D',
            display:'none',
        
          },

          drawerActiveBackgroundColor:'rgba(237,141,141, 0.5)',
          drawerActiveTintColor:'#f50',

          headerStyle: {
            backgroundColor: '#ED8D8D',
            // backgroundColor: 'transparent',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'#ED8D8D',
            display:'none',
          },




        }} />





























    








<Drawer.Screen component = {Events} name = 'Events'   options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },



          headerShown:false,
          drawerItemStyle:{
            // display:'none',
          },



          drawerIcon:({color}) => <Icon
          size={23}
          name={'calendar'} type ={'font-awesome'} color = {color}></Icon>,



        }} 
        
        // options={{drawerLabel: NullComponent}}
        />



  



<Drawer.Screen component = {Podcasts} name = 'Podcasts'   options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },



          headerShown:false,
          drawerItemStyle:{
            // display:'none',
          },

          drawerIcon:({color}) => <Icon
          size={23}
          name={'microphone'} type ={'font-awesome'} color = {color}></Icon>,

        }} 
        
        // options={{drawerLabel: NullComponent}}
        />





<Drawer.Screen component = {PostandDiscussion} name = 'Post and Discussion'   options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },



          headerShown:false,
          drawerItemStyle:{
             display:'none',
          }
        }} 
        
        // options={{drawerLabel: NullComponent}}
        />





<Drawer.Screen component = {SubEvents} name = 'SubEvents'   options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },



          headerShown:false,
          drawerItemStyle:{
            display:'none',
          }
        }} 
        
        // options={{drawerLabel: NullComponent}}
        />


<Drawer.Screen component = {Class} name = 'Class'   options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },



          headerShown:false,
          drawerItemStyle:{
            // display:'none',
          },

          drawerIcon:({color}) => <Icon
          size={23}
          name={'desktop'} type ={'font-awesome'} color = {color}></Icon>,

        }} 
        
        // options={{drawerLabel: NullComponent}}
        />








<Drawer.Screen component = {Store} name = 'Store'   options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },



          headerShown:false,
          drawerItemStyle:{
            // display:'none',
          },
          drawerIcon:({color}) => <Icon
          size={23}
          name={'credit-card'} type ={'font-awesome'} color = {color}></Icon>,

        }} 
        
        // options={{drawerLabel: NullComponent}}
        />





<Drawer.Screen component = {Check} name = 'UMKM Check'   options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },



          headerShown:false,
          drawerItemStyle:{
             display:'none',
          }
        }} 
        
        // options={{drawerLabel: NullComponent}}
        />









<Drawer.Screen component = {SubClass} name = 'SubClass'   options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },



          headerShown:false,
          drawerItemStyle:{
             display:'none',
          }
        }} 
        
        // options={{drawerLabel: NullComponent}}
        />






<Drawer.Screen component = {Articles} name = 'Articles'   options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },



          headerShown:false,
          drawerItemStyle:{
            // display:'none',
          },

          drawerIcon:({color}) => <Icon
          size={23}
          name={'newspaper-o'} type ={'font-awesome'} color = {color}></Icon>,

        }} 
        
        // options={{drawerLabel: NullComponent}}
        />






<Drawer.Screen component = {Login} name = 'Logout'   options={{
          // title: 'My home',
          headerStyle: {
            backgroundColor: '#ED8D8D',
            // height:'50%',
            // borderRadius:20,
            // marginTop:20,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            // color:'#ED8D8D',
            color:'#ffff',
            display:'none',

          },



          headerShown:false,
          drawerItemStyle:{
            // display:'none',
          },

          drawerIcon:({color}) => <Icon
          size={23}
          name={'sign-out'} type ={'font-awesome'} color = {color}></Icon>,

        }} 
        
        // options={{drawerLabel: NullComponent}}
        />




  

  



    {/* <Drawer.Screen
    component = {beranda} name = 'Land'
    /> */}

  



{/* <Drawer.Screen
    component = {cobalogin} name = 'Coba Login'
    />
     */}






  </Drawer.Navigator>
}


export default function App() {

  
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer >
      <DrawerNavigator  />
    </NavigationContainer>
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  container2: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: '#424242',
    alignItems: 'center',
    justifyContent: 'center',
    
  },



  home:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderBottomColor:'#fff',

  },

  task:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  landing:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },

  header1:{
    color:'#fff',
    backgroundColor:'#424242',
  },

  user1:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:15,
    alignItems:'center',
    backgroundColor:COLORS.secondary,
    marginBottom:10,
 
  },

  landingutama1:{
    backgroundColor:'#ED8D8D',
    height:320,
    borderRadius:20,
    marginTop:-25,
    flexDirection:'row',
    justifyContent:'center',
    zIndex:1,
    elevation:1,
  
  },


  landingutama0:{

    flexDirection:'row',
    // justifyContent:'center',
    zIndex:1,
    elevation:1,
    height:300,
    
  
  },






  
  landingutamakiri1:{
    flex:1,

    marginTop:50,
    width:'50%',
    marginLeft:30,

  },

  textlandingkiri1:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',

  },



  landingutamakanan1:{
    flex:1,

    marginTop:50,
    width:'50%',
    marginRight:30,

  },

  textlandingkanan1:{
    fontSize:25,
    fontWeight:'bold',
    color:'#fff',

  },





  landingutama2:{
      zIndex:2,
      elevation:2,
      // marginTop:-50,
      alignItems:'center',
      // flexDirection:'row',
  },



  teksinput:{
    width:'80%',
    height:45,
    backgroundColor:'#fff',
    marginTop:-130,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    fontWeight:'bold',
    color:'#435665',
  
    

  },

  landingutama3:{
    width:'80%',
    height:140,
    backgroundColor:'#FAF3F4',
    marginTop:30,
    borderRadius:10,
    flexDirection:'row',


    
  },


  konten1:{
    justifyContent:'center', marginLeft:50, marginTop:30,
    
  },

  tulisankonten1:{
    fontWeight:'bold',
    color:'#435665',
    fontSize:15,
  },

  login:{
    // backgroundColor:'#435665',
    backgroundColor:'#0C95FE',
    height:'100%',
    width:'100%',
  },

  bgimage:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  levelsatupage1:{
    backgroundColor:'#ED8D8D',
  },

  levelsatupage2:{
    backgroundColor:'#ffff',
  },


  landinglevelsatu1:{
    justifyContent:'center',
    // alignItems:'center',
    marginTop:-20,
    backgroundColor:'#ED8D8D',
    height:250,
    // borderRadius:30,

  },

  landinglevelsatu2:{
    marginTop:-30,
    borderRadius:40,
    height:550,
    backgroundColor:'#f2f2f2',
    justifyContent:'center',
    alignItems:'center'

  },


  barcodebox:{
    alignItems:'center',
    justifyContent:'center',
    height:300,
    width:300,
    overflow:'hidden',
    borderRadius:20,
    backgroundColor:'tomato',
  },

  levelsaturun1:{
    justifyContent:'center',
    // alignItems:'center',
    marginTop:-20,
    backgroundColor:'#ED8D8D',
    height:250,
    // borderRadius:30,
  },






  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 45
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "#98CFB6"
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16
  }





});
