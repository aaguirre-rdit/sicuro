import Colors from './Colors';
// SPINNER
const SpinnerStyle = {
  width:120,
  height:120,
  margin:'auto',
  alignSelf:'center',
};
const SpinnerContainer = {
  flex:1,
  padding:100,
  alignItems:'center',
};

// MAIN CONTAINER

const mainView = {
  flex:1,
  backgroundColor:Colors.white,
};
// HEADER

const MainHeaderStyle = {
  height:40,
  width:'100%',
  justifyContent:'flex-start',
  alignItems:'flex-start'
};

const CarouselStyle = {
  slide: {
    position:'relative',
    width:'80%',
    height:'50%',
    backgroundColor:'pink'
  },
  title:{
    fontSize:24,

  }
};

// ICONS

const vectorIconMain = {
  textShadowColor: 'rgba(0, 0, 0, 0.5)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 5,
  background: 'linearGradient(180deg, #33DE4F 0%, rgba(8, 133, 103, 0.52) 100%)',
};

// Buttons

const MainBtnStyle = {
  title:{
    color:Colors.white,
  },
  container:{
    backgroundColor:Colors.tintColor,
    borderRadius:25,
    paddingHorizontal:30,
  }
};
const CheckboxContainer = {
  backgroundColor:'transparent',
    width:'40%',
    height:60,
    flex:1,
    borderColor:'transparent'
};
const CheckContainer = {
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-around'
};
export default {
  SpinnerContainer,
  CheckboxContainer,
  SpinnerStyle,
  CheckContainer,
  MainHeaderStyle,
  CarouselStyle,
  vectorIconMain,
  MainBtnStyle,
  mainView
}


