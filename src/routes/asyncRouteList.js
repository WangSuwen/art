import Loadable from 'react-loadable';
import Loading from '@components/loading';

// 这里对需要按需加载的组件进行 loadable 处理
export default { 
    '@components/app' : Loadable({ loader: () => import('@components/app'), loading: Loading }),
    '@containers/home/index' : Loadable({ loader: () => import('@containers/home/index'), loading: Loading }),
    '@containers/todos' : Loadable({ loader: () => import('@containers/todos'), loading: Loading }),
    '@containers/deviceStatus' : Loadable({ loader: () => import('@containers/deviceStatus'), loading: Loading }),
};

