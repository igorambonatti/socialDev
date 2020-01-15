import React from 'react';

import { Container, InputBlock, InputGroup, Content } from './styles';

export default function Register() {
  return (
    <Container>
      <Content>
        <strong>Cadastrar</strong>
        <form>
          <InputBlock>
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="techs">Link</label>
            <input name="techs" id="techs" />
          </InputBlock>
          <InputGroup>
            <InputBlock>
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" />
            </InputBlock>

            <InputBlock>
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" />
            </InputBlock>
          </InputGroup>
          <button type="submit">Salvar</button>
        </form>
      </Content>
    </Container>
  );
}
