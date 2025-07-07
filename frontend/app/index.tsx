import React from 'react';
import {View, Text, ScrollView,Image, TouchableOpacity, StyleSheet,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function HomeScreen(){
  return(
    <ScrollView style={styles.container}>

      {/* untuk header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={require ('../assets/banner/manus-logo.png')} style= {styles.logoImage} />
          <Text style= {styles.logoText}> manus</Text>
        </View>
        <TouchableOpacity style= {styles.menuButton}>
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      {/*untuk hero*/}
      <View style= {styles.hero}>
        <View style= {styles.textWrapper}>
          <Text style= {styles.title}>Leave it to Manus</Text>
          <Text style= {styles.description}>
            Manus is a general AI agent that bridges minds and actions: it doesnt just think, it delivery results.
          </Text>
          <Text style= {styles.description}>
            Manus excels at various tasks in work and life, getting everrything done while you rest.
          </Text>
        </View>
        <View>
          <View style= {styles.videoContainer}>
            <Image source={require('../assets/banner/home.webp')} style= {styles.videoImage} />
            <View style={styles.playIconWrapper}>
              <View style={styles.playOuterCircle}>
                <View style={styles.playInnerCircle}>
                  <Ionicons name="play" size={10} color="#fff" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/*untuk action buttons*/}
      <View style= {styles.buttonRow}>
        <TouchableOpacity style= {styles.tryButton}>
          <Text style= {styles.tryText}>Try Manus</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.instagramButton}>
          <Text style= {styles.instagramText}>Instagram</Text>
        </TouchableOpacity>
      </View>

      {/*untuk usecase section*/}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore use case from our official collection</Text>
        <Text style={styles.sectionSubtitle}>
          Learn how Manus handles real-world through step by step replays
        </Text>
      </View>

      {/*untuk tags*/}
      <View style={styles.tagContainer}>
        <View style={styles.tagRow}>
          {['Featured', 'Research', 'Life'].map((tag, index) =>(
            <View key={index} style={[styles.tag, tag === 'Featured' && styles.activeTag]}>
              <Text style={[styles.tagText, tag === 'Featured' && styles.activeTagText]}>{tag}</Text>
            </View>     
          ))}
        </View>
        <View style={styles.tagRow}>
          {['Data Analyst', 'Education'].map((tag, index) =>(
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>     
          ))}
        </View>
      </View>

      {/*untuk usecase card*/}
      <View style={styles.useCaseContainer}>
        {useCases.map((item, i) => (
          <View key={i} style={styles.cardWrapper}>
            <View style={styles.card}>
              <View style={styles.iconShadowWrapper}>
                <View style={styles.iconWrapper}>
                  <Image source={item.icon} style={styles.iconUseCase} />
                </View>
              </View>
              <Text style={styles.titleUseCase}>{item.title}</Text>
              <Text style={styles.descUseCase}>{item.desc}</Text>
            </View>
           </View> 
        ))}
      </View>

      {/*untuk events*/}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Events</Text>
        <Text style={styles.sectionSubtitle}>
          Join our community events to learn more about Manus AI and connect with other enthusiasts.
        </Text>

      {events.map((item, index) => (
        <View key={index} style={styles.eventCard}>
          <Image source={item.image} style={styles.eventImage} />
          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.eventDate}>{item.date}</Text>
        </View>
      ))}
      </View>

      {/*untuk footer link*/}
      <View style={styles.linkSectionVertical}>
        {['Company', 'Resource', 'Community'].map((section, idx)=>(
          <View key={idx} style={styles.linkSection}>
            <Text style={styles.linkTitle}>{section}</Text>
            {['About Us', 'Feedback', 'Media Inquiries', 'Contact Us', 'Careers'].map((item, i) =>(
              <Text key={i} style={styles.linkItem}>{item}</Text>
            ))}
          </View>
        ))}
      </View>

      {/*untuk footer*/}
      <View style={styles.footer}>
        <View style={styles.footerLeft}>
          <Image source={require('../assets/banner/manus-logo.png')} style={styles.footerImage} />
          <Text style={styles.footerTextImage}>manus</Text>
        </View>
        <Text style={styles.footerText}>©2025 Manus AI</Text>
        <Text style={styles.footerText}>Headquartered in Singapore</Text>
        <View style={styles.footerIcons}>
          <Image source={require('../assets/icons/brand-linkedin.png')} style={styles.sosialIconOnly} />
          <Image source={require('../assets/icons/brand-instagram.png')} style={styles.sosialIconOnly} />
          <Image source={require('../assets/icons/brand-x.png')} style={styles.sosialIconOnly} />
          <Image source={require('../assets/icons/brand-tiktok.png')} style={styles.sosialIconOnly} />
          <Image source={require('../assets/icons/brand-youtube.png')} style={styles.sosialIconOnly} />
        </View>
      </View>
    </ScrollView>
  )
}

const useCases = [
  {
    icon: require('../assets/icons/book.png'),
    title:'Explore use case from our official collection',
    desc:'Manu integrates comprehensive travel information to create personalized itineraries...',
  },
  {
    icon: require('../assets/icons/settings.png'),
    title:'Interactive course on the momentum theorem',
    desc:'Manus develops engaging video presentation for middle school educators...',
  },
  {
    icon: require('../assets/icons/chart-area-line.png'),
    title:'Comparative analysis of insurance policies',
    desc:'Manus generates comparison tables with key policy information and recommendation...',
  },
  {
    icon: require('../assets/icons/chart-pie.png'),
    title:'B2B supplier sourcing',
    desc:'Manus identifies suitable suppliers tailored to your needswith research...',
  },
];

const events = [
  {image: require('../assets/banner/image1.png'), title:'Vibe Coding For StartUp', date: ' May 3 2025'},
  {image: require('../assets/banner/image3.png'), title:'Manus Meetup Melbourne', date: 'Apr 28 2025'},
  {image: require('../assets/banner/image2.png'), title:'Manus Meetuo Sydney', date: 'Apr 29 2025'},
];

const styles = StyleSheet.create({

  container: {flex:1, backgroundColor: '#fff', marginTop: 15, padding: 35},

  //untuk header
  header: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30, marginBottom: 20},
  headerLeft: {flexDirection: 'row', alignItems: 'center'},
  logoImage: {width: 40, height: 40, resizeMode: 'contain', marginRight: 8},
  logoText: {fontSize: 24, fontWeight: 'bold'},
  menuButton: {padding: 8},

  //untuk hero
  hero: {padding:20, width: '100%'},
  textWrapper: {alignItems: 'center', marginBottom: 20},
  title: {fontSize: 37, fontWeight: 'bold', marginBottom: 10},
  description: {fontSize: 13, color: '#999', textAlign: 'center'},
  videoContainer: {marginTop: 5, overflow: 'hidden', width:'100%', position: 'relative' },
  videoImage: {width: '100%', height: 180, resizeMode: 'cover'},
  playIconWrapper: { position: 'absolute', top:'55%', left:'50%', transform: [{translateX: -32}, {translateY: -32}], zIndex: 10, justifyContent: 'center', alignItems:'center'},
  playOuterCircle: {width: 40, height:40, borderRadius:32, backgroundColor:'white', justifyContent:'center', alignItems:'center'},
  playInnerCircle: {width: 25, height:25, borderRadius:24, backgroundColor:'black', justifyContent:'center', alignItems:'center'},

  //untuk action buttons
  buttonRow: {flexDirection:'row', marginTop:2, gap:10, justifyContent: 'center', alignItems: 'center' },
  tryButton: {backgroundColor:'#222', paddingHorizontal:30, paddingVertical:8, borderRadius:30},
  instagramButton: {backgroundColor:'#f6f9fc', paddingHorizontal:30, paddingVertical:8, borderRadius:30},
  tryText: {color: '#fff', fontWeight:'bold'},
  instagramText: {color:'#000', fontWeight:'bold'},

  //untuk usecase section
  section: {padding:20, alignItems:'center',marginTop:60},
  sectionTitle: {fontSize:35, fontWeight:'bold', marginBottom:20, textAlign:'center'},
  sectionSubtitle: {fontSize:13, fontWeight:'bold', marginBottom:10, textAlign:'center'},

  //untuk tags
  tagContainer: {flexDirection:'column', gap:10, marginBottom:10, alignItems:'center',justifyContent:'center'},
  tagRow: {flexDirection:'row', justifyContent:'center', gap:10, marginBottom: 5},
  activeTag: {backgroundColor:'#222'},
  tagText: {fontSize: 12, color:'#000', textAlign:'center'},
  activeTagText: {color:'#fff'},
  tag: {paddingHorizontal:10, paddingVertical:5, backgroundColor:'fff', borderRadius:10, borderColor:'#e0e0e0', borderWidth:1},

  //untuk usecase card
  useCaseContainer: {flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between', marginTop:20},
  cardWrapper: {width:'48%', marginBottom:20},
  card: {backgroundColor:'#fff', borderRadius:10, padding:8, borderWidth:1, borderColor:'#e0e0e0', elevation: 3, shadowColor:'#000',shadowOpacity:0.1, shadowRadius:5,aspectRatio:0.65},
  iconUseCase: {width:18, height:18, tintColor:'#fff'},
  iconWrapper: {backgroundColor:'#000', borderRadius:15, alignItems:'center', justifyContent:'center',width:28, height:28, zIndex:1},
  iconShadowWrapper: {width:34, height:34, borderRadius:17, position:'relative', justifyContent:'center',alignItems:'center', elevation:10, marginBottom:10},
  shadowLayer: {position:'absolute', width:34, height:34, borderRadius:17, backgroundColor: 'rgba(0,0,0,0.1)', top:2, zIndex:0},
  titleUseCase: {fontWeight:'bold', fontSize:16, marginBottom:8},
  descUseCase:{fontSize:12, color:'#666'},

  //untuk events
  eventCard: {marginBottom:20, backgroundColor: '#fff', width:'100%'},
  eventTitle: {fontSize: 16, fontWeight:'bold', marginTop: 8, marginHorizontal:10},
  eventDate: {fontSize:16, color:'#666', marginHorizontal:10},
  eventImage: {width:'100%', height:210, resizeMode:'cover', borderRadius:8, marginTop:8},

  //untuk footer link
  linkSectionVertical: {flexDirection:'column', gap: 5, marginTop:30},
  linkSection: {marginBottom:20},
  linkTitle: {fontSize:14, fontWeight:'bold', marginBottom:8, color:'#000'},
  linkItem: {fontSize:13,color:'#555', marginBottom:6},

  //untuk footer
  footer: {backgroundColor:'#fff'},
  footerLeft: {flexDirection:'row', alignItems:'center', justifyContent:'flex-start', marginTop:10, marginBottom:20, alignSelf:'flex-start'},
  footerImage: {width:20, height:20, resizeMode:'contain', marginRight:8},
  footerTextImage: {fontSize:17, fontWeight:'bold'},
  footerText: {fontSize:11, color:'#999', textAlign:'left', marginTop:0.5},
  footerIcons: {flexDirection:'row', marginTop:20, gap:20},
  sosialIconOnly: {width:24, height:24, marginBottom:150},
})