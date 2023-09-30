import { StyleSheet, Font } from '@react-pdf/renderer'

Font.register({
  family: 'M PLUS Rounded 1c',
  src: '/fonts/MPLUSRounded1c-Regular.ttf',
  fontWeight: 'normal'
})

Font.register({
  family: 'M PLUS Rounded 1c',
  src: '/fonts/MPLUSRounded1c-ExtraBold.ttf',
  fontWeight: 'extrabold'
})

Font.register({
  family: 'M PLUS Rounded 1c',
  src: '/fonts/MPLUSRounded1c-Bold.ttf',
  fontWeight: 'bold'
})

export const styles = StyleSheet.create({
  page: {
    fontSize: 10,
    fontFamily: 'M PLUS Rounded 1c',
    fontWeight: 'normal',
    padding: 10
  },
  resumeHead: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  resumeBody: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'stretch'
  },
  left: {
    width: '35%',
    display: 'flex',
    flexDirection: 'column'
  },
  leftContent: {
    padding: 10,
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#1e2f40'
  },
  right: {
    width: '65%',
    display: 'flex',
    flexDirection: 'column',
    padding: 10
  },
  profilePic: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: '9999px',
    backgroundColor: '#7cbace',
    overflow: 'hidden'
  },
  profilPicRing: {
    padding: 8,
    margin: 10,
    border: '4px solid #1e2f40',
    borderRadius: '9999px'
  },
  header: {
    fontWeight: 'bold',
    position: 'relative',
    fontSize: 16,
    alignItems: 'center',
    flexDirection: 'row'
  },
  sectionBody: {
    fontSize: 10,
    marginTop: 10
  },
  skillContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    flexDirection: 'row'
  },
  skillItem: {
    paddingTop: 7,
    paddingBottom: 3,
    paddingLeft: 9,
    paddingRight: 6,
    color: 'white',
    fontSize: 8,
    border: '2px solid white',
    fontWeight: 'bold',
    flexGrow: 0,
    borderRadius: 12
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  jobCompany: {
    fontSize: 12
  },
  jobDuration: {
    marginBottom: 2,
    color: '#7cbace'
  },
  jobDescription: {
    marginLeft: 10
  },
  name: {
    fontSize: 28,
    lineHeight: 1
  },
  actualRole: {
    fontSize: 16,
    lineHeight: 1,
    marginTop: 6,
    color: '#7cbace'
  },
  role: {
    fontSize: 14,
    fontWeight: 'normal'
  },
  icon: {
    width: 30,
    height: 30,
    flexShrink: 0,
    padding: 7,
    borderRadius: 10,
    marginRight: 10
  },
  iconDecoration: {
    width: 25,
    height: 25,
    position: 'absolute',
    backgroundColor: '#7cbace',
    border: '1px solid white',
    top: 2.5,
    left: -5,
    borderRadius: 8
  },
  iconDecoration2: {
    width: 20,
    height: 20,
    position: 'absolute',
    backgroundColor: '#7cbace',
    border: '1px solid white',
    top: 5,
    left: -10,
    borderRadius: 8
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 10,
    alignItems: 'center'
  },
  descriptionItem: {
    paddingLeft: 18
  },
  bullet: {
    position: 'absolute',
    width: 8,
    height: 8,
    marginTop: 3,
    borderRadius: 2,
    backgroundColor: '#7cbace'
  }
})
