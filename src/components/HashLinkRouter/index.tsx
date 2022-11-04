import { Link } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

const HashLinkRouter: React.FC<any> = (props) => <Link {...props} component={HashLink} />;

export default HashLinkRouter;