import PropTypes from 'prop-types';

import { Wrapper } from './StyledLayout.styled';

const Layout = ({ title = '', children }) => {
  return (
    <Wrapper>
      {title && <h2 className="title">{title}</h2>}
      {children}
    </Wrapper>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Layout;
