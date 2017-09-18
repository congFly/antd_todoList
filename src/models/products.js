/**
 * Created by 18829 on 2017/9/18.
 */
import dva from 'dva';

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, {payload: id}) {
      return state.filter(item => item.id !== id);
    },
  },
};
