import React from "react";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

export default function Contacts() {
  return (
    <div>
      <a  href="mailto:webmaster@example.com">
        <MailOutlineIcon />
      </a>

      <a href="tel:37455383855">
        <PhoneIcon />
      </a>
    </div>
  );
}
