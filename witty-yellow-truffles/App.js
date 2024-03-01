import {
  Text,
  SafeAreaView,
  StatusBar,
  View,
  ScrollView,
  Image
} from 'react-native';
import Comp1 from './components/Comp1.jsx';
import Soma from './components/Soma.jsx';
import style from './components/Estilo';

export default (App) => (
  <ScrollView>
    <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
  <View style={style.viewSafeAndroid}>
    <SafeAreaView>
      <Text style={style.textG}> Bom dia </Text>
      <Comp1 />
      <Soma x={5} y={10} />
      <Soma x={10} y={20} />
      <Text style={style.textG}>
        {' '}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis laoreet,
        lacus non ultricies lobortis, turpis libero feugiat lorem, sed egestas
        odio augue eu purus. Praesent dolor quam, dapibus quis lobortis
        tristique, consequat fringilla lorem. In sollicitudin ante elementum
        velit fermentum convallis. Morbi enim nunc, bibendum at sapien id,
        scelerisque efficitur purus. Phasellus at felis euismod, finibus diam
        sed, condimentum nulla. Vivamus quis est dui. Morbi porta vel risus eget
        placerat. Mauris mollis arcu vitae lorem scelerisque sagittis.
        Suspendisse et mauris nec metus posuere varius. Cras rutrum ullamcorper
        diam et tincidunt. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Quisque eu mollis mi, sed
        cursus est. In euismod elit tincidunt, porttitor lorem eu, tempor velit.
        In nec nibh nec velit eleifend tempor. Cras ultricies interdum
        tincidunt. Morbi at erat at nisl efficitur convallis sed in ante.{' '}
      </Text>
      <Text style={style.txtTitulo}> TURMA 2TDSPF</Text>
    </SafeAreaView>
  </View>
  <View style={style.containerImg} >
    <Image source={require('./assets/frog.jpg')} style={style.img}/>
  </View>
  </ScrollView>
);

