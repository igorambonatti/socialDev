import React from 'react';

import { Container } from './styles';

import { Link } from 'react-router-dom';

import { IoIosAdd } from 'react-icons/io';

export default function Header() {
  return (
    <Container>
      <Link to="/register">
        <IoIosAdd size={30} />
      </Link>
    </Container>
  );
}
