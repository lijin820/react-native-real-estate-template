import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listItem: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  name: {
    fontSize: 18,
    marginLeft: 20,
  },
  photoBG: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  photo: {
    borderRadius: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Raleway-Black',
  },
  sqmText: {
    fontSize: 15,
    fontFamily: 'Raleway-Medium',
  },
  infoView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  itemView: {
    width: '33%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCenterView: {
    width: '33%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemRightView: {
    width: '33%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  infoText: {
    fontSize: 15,
    color: 'gray',
    marginLeft: 5,
    fontFamily: 'Raleway-Medium',
  },
  priceView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: 'Raleway-Black',
  },
  flexView: {
    flexDirection: 'row',
  },
  filterWrapper: {
    marginVertical: 20,
  },
  scrollView: {
    marginLeft: 20,
  },
  filterItemView: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 3,
    paddingLeft: 15,
    paddingRight: 5,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    flexDirection: 'row',
  },
  filterText: {
    fontSize: 15,
    fontFamily: 'Raleway-Regular',
  },
  downIcon: {
    marginLeft: 5,
  },
  emptyView: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontFamily: 'Raleway-Regular',
  },
  paddingView: {
    width: 50,
  },
});
