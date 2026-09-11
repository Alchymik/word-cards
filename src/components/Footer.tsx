import React from 'react';

type FooterProps = {
  email: string;
  phone: string;
  address: string;
};

export const Footer: React.FC<FooterProps> = ({ email, phone, address }) => (
  <footer className="footer">
    <span>{email}</span>
    <span>{phone}</span>
    <span>{address}</span>
  </footer>
);
