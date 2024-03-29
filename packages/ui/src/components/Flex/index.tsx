import './styles/index.less';

import _Flex from './Flex';
import FlexItem from './FlexItem';

const Flex = Object.assign(_Flex, { Item: FlexItem });

export type { FlexProps } from './PropsType';
export { Flex };
// export default Flex;
