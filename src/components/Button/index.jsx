import PropTypes from "prop-types";

import { Button } from "./styles";

function DefaultButton({ children, theme, ...props }) {
  // typescript => JavaScript com tipagem

  return (
    <Button {...props} theme={theme}>
      {children}
    </Button>
  );
}

DefaultButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string,
};

export default DefaultButton;
