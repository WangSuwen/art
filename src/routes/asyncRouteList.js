import Loadable from 'react-loadable';
import Loading from '@components/loading';

// 这里对需要按需加载的组件进行 loadable 处理
export default { 
    '@components/app' : Loadable({ loader: () => import('@components/app'), loading: Loading }),
    '@components/home/index' : Loadable({ loader: () => import('@components/home/index'), loading: Loading }),
    '@containers/todos' : Loadable({ loader: () => import('@containers/todos'), loading: Loading }),
};

